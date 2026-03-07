fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>loadsData(jsonList))
    /**
     * loads information from json
     * @param {array} list 
     */
function loadsData(list){
    let param = new URLSearchParams(window.location.search);
    NPCId = param.get("NPC");
    let sys = list.NPCs[NPCId].system;
    let NPCInfo = list.NPCs[NPCId];
    var NPCDisplay = document.getElementById("display");
    var NPC = document.createElement("div");
    document.title = NPCInfo.name;
    let senseString="";
    switch(sys){
    case "pathfinder":
        if(NPCInfo.senses!=null){
            Object.keys(NPCInfo.senses).forEach(senses=>{
                if(NPCInfo.senses[senses]!=""){
                    senseString+=`${senses} ${Number(NPCInfo.senses[senses])} ft.`;
                }else{
                    senseString+=`${senses}`;
                }
                senseString+=", ";
            })
            }
            senseString+= `Perception ${getSkill(NPCInfo,'Perception')}`;
            let senseTitle = " <b>Sense</b>";
            if(senseString!=''){
                senseString=senseTitle.concat(" ",senseString);
            }
            if(NPCInfo.aura!=null){
                senseString += "; <b>Aura</b> ";
                let l =0;
                NPCInfo.aura.forEach(aura=>{
                l++;
                if(l>1){
                senseString+=", "
                }
                let auraDesc =""
                let auraName = aura.name;
                let auraRadius = aura.radius;
                let auraDC = "";
                let auraDmg = "";
                if(aura.dcStat){
                    let dc = 10+Math.floor(NPCInfo.level/2)+getSaveMod(aura.dcStat,NPCInfo);
                   auraDC = ", DC " + dc
                }
                if(aura.auraDmg){
                    auraDmg=", "+aura.auraDmg;
                }
                auraDesc = `${auraName}(${auraRadius} ft.${auraDC}${auraDmg})`
                senseString +=auraDesc;
                })
            }
            if(NPCInfo.special_abilities!=null){
                NPCInfo.special_abilities.forEach(element => {
                    if(element.auraRadius){
                    if(!senseString.includes("Aura")){
                        senseString += "; <b>Aura</b> ";
                    }else{
                        senseString+=", ";
                    }
                    let dc = 10+Math.floor(NPCInfo.level/2)+getSaveMod(element.dcStat,NPCInfo);
                    auraDC = ", DC " + dc
                    let showDC = "";
                    if(element.saveType!=null){
                        showDC = auraDC;
                    }
                //                         senseString+=`${element.abilityName} ${showDC}`;
                // auraDesc = `${element.name}(${element.auraRadius} ft.${showDC})`
                    senseString+=`${element.abilityName} (${element.auraRadius} ft.${showDC})`;
                    }
                });

            }
        
        let NPCAcBonus = NPCInfo.ac.bonuses;
        let acBonuses = "";
        let sign="";
        if(NPCAcBonus.armor){
            acBonuses += "+" + NPCAcBonus.armor + " armor";
        }
        if(NPCAcBonus.deflection){
            if(acBonuses.includes("armor")){
                acBonuses += ", ";
            }
            acBonuses += "+" + NPCAcBonus.deflection + " deflection";
        }
        if(NPCAcBonus.dex){
            if(acBonuses.includes("armor")||acBonuses.includes("deflection")){
                sign = ", "
            }
            if(NPCAcBonus.dex<0){
                sign += "";
            }else{
                sign += "+";
            }
            acBonuses += sign + NPCAcBonus.dex + " dex";
        }
        if(NPCAcBonus.insight){
            acBonuses += ", +" + NPCAcBonus.insight + " insight";
        }
        let altDodgeBonus = getFeatBonuses("dodge",NPCInfo.feats,NPCAcBonus.dodge,NPCInfo);
        if(NPCAcBonus.dodge){
            acBonuses += ", +" + (Number(NPCAcBonus.dodge) + altDodgeBonus) + " dodge";
        }
        if(altDodgeBonus>0){
            acBonuses += ", +" + altDodgeBonus + " dodge";
        }
        if(NPCAcBonus.shield){
            acBonuses += ", +" + NPCAcBonus.shield + " shield";
        }
        let altNaturalBonus = getFeatBonuses("natural",NPCInfo.feats,NPCAcBonus.dodge,NPCInfo);
        if(NPCAcBonus.natural){
            acBonuses += ", +" + (Number(NPCAcBonus.natural)+altNaturalBonus) + " natural";
        }
                if(altNaturalBonus>0){
            acBonuses += ", +" + altNaturalBonus + " dodge";
        }
        if(NPCInfo.size!="Medium"){
            let sizeMod = getNPCSizeMod(NPCInfo.size);
            if(sizeMod<0){
                sign = ", ";
            }else{
                sign = ", +";
            }
            acBonuses += sign +sizeMod + " size";
        }
        let extras;
        if(NPCAcBonus.extra){
            NPCAcBonus.extra.forEach(bonusEl=>{
                extras = Object.keys(bonusEl);
              
            })
              extras.forEach(ex=>{
                NPCAcBonus.extra.forEach(bonusEl=>{
                    if(bonusEl[ex]<0){
                sign = ", ";
            }else{
                sign = ", +";
            }
                    acBonuses += sign + bonusEl[ex] + " " + ex
              
            })
              })
        }

        let conBonus = getModifier(NPCInfo.con)*Number(NPCInfo.level)+getFeatBonuses("con",NPCInfo.feats,NPCInfo.level,NPCInfo);
        let hpInformation = `${NPCInfo.level}${NPCInfo.hitDice}`;
        if(NPCInfo.type.toLowerCase().includes("construct")){
            conBonus=getConstructBonusHealth(NPCInfo.size);
        }
        if(conBonus>0){
            hpInformation=hpInformation+`+${conBonus}`;
        }
        let trueHp = getHP(NPCInfo,sys);
        if(NPCInfo.setHP){
            trueHp = NPCInfo.setHP;
        }
        if(NPCInfo.setHD){
            hpInformation = NPCInfo.setHD;
        }
        if(NPCInfo.NPCType=="NPC"){
            hpInformation=getNPChitDiceDisplay(NPCInfo);
        }
        let hpNode = `${trueHp}(${hpInformation})`;
        if(NPCInfo.hp_traits){
            hpNode += "; " + NPCInfo.hp_traits;
        }
        let saves =""
        saves = `<b> Fort </b>`
        let fort = 0;
        if(NPCInfo.fort==="Good"){
           fort = 2+ Math.floor(NPCInfo.level/2);
        }else if(NPCInfo.fort==="Bad"){
            fort = Math.floor(NPCInfo.level/3);
        }
        fort = Number(fort) + getModifier(NPCInfo.con)+getFeatBonuses("Fort",NPCInfo.feats,NPCInfo.con)+nonConditionBonus("Fort",NPCInfo);
        if(fort<0){
            saves += fort
        }else{
            saves += "+"+fort;
        }
        saves += `<b> Ref </b>`
        let ref = 0;
        if(NPCInfo.ref==="Good"){
           ref = 2+ Math.floor(NPCInfo.level/2);
        }else if(NPCInfo.ref==="Bad"){
            ref = Math.floor(NPCInfo.level/3);
        }else{
            ref = NPCInfo.ref-getModifier(NPCInfo.dex);
        }
        ref = Number(ref) + getFeatBonuses("Reflex",NPCInfo.feats,NPCInfo.ref)+getModifier(NPCInfo.dex)+nonConditionBonus("Ref",NPCInfo);
        
        if(ref<0){
            saves += ref;
        }else{
            saves += "+"+ref;
        }
        saves += `<b> Will </b>`
        let will = 0;
        if(NPCInfo.will==="Good"){
           will = 2+ Math.floor(NPCInfo.level/2);
        }else if(NPCInfo.will==="Bad"){
            will = Math.floor(NPCInfo.level/3);
        }
        will = Number(will) + getModifier(NPCInfo.wis)+ getFeatBonuses("Will",NPCInfo.feats,NPCInfo.wis)+nonConditionBonus("Will",NPCInfo);
        if(will<0){
            saves += will;
        }else{
            saves += "+"+will;
        }
        let saveBonus = "";
        if(NPCInfo.saveBonus!=null){
            saveBonus+=";"
        }
        let loop=0;
        if(NPCInfo.save_bonuses){
            NPCInfo.save_bonuses.forEach(bonuses=>{
            if(loop>0){
                sign = " ,"
            }else{
                    sign = "; "
                }
            let numVal = bonuses.replace(/[^0-9]/g, '')
            if(bonuses.includes("-")){
                numVal*=-1;
            }
            if(numVal>-1){
                    sign +="+"
            }
            saveBonus+= sign + bonuses;
            loop++;
            })
        }
        let defensiveTraits ="";
        let length=0;
        if(NPCInfo.defensive_traits){
            let DT = NPCInfo.defensive_traits;
            traits = Object.keys(DT);
            traits.forEach(ex=>{
                length++;
                if(length>1){
                    defensiveTraits+="; "
                }
                let skill = DT[ex];
                ex = ex.replace("_"," ")
                defensiveTraits += `<b>${ex}</b>` +" " + skill;
            })
        }
        let featsList="";
        length =0;
        if(NPCInfo.feats){
            Object.keys(NPCInfo.feats).forEach(element=>{
                length++;
                if(length>1){
                    featsList+=", "
                }
                let extraData = "";
//                console.log(NPCInfo.feats);
                if(NPCInfo.feats[element]!=""){
                    extraData = `(${NPCInfo.feats[element]})`;
                }
                featsList+=element+extraData;
            })
        }
        let skillsList="";
        length =0;
        if(NPCInfo.skills){
            let skills = NPCInfo.skills;
            let cSkills = Object.keys(NPCInfo.skills);
             cSkills.forEach(element=>{
                     length++;
                     if(length>1){
                            skillsList+=", "
                        }
                    // console.log(element);
                    // console.log(skills[element]);
                    let skillValue = ""
                    let profInfo = "";
                    if(element!="Profession"&&element!="Craft"){
                        skillValue = Number(skills[element]) + skillModifier(element,NPCInfo)+getFeatBonuses(element,NPCInfo.feats,Number(skills[element]),NPCInfo);
                        if(element=="Stealth"){
                            skillValue+=getNPCSizeMod(NPCInfo.size,"fly")*2;
                        }
                        if(element=="Fly"){
                            skillValue+=getNPCSizeMod(NPCInfo.size,"fly");
                        }
                    }else{
                        skills[element].forEach(prof=>{
                            skillValue = Number(prof.Ranks)+Number(skillModifier(element,NPCInfo))+getFeatBonuses(prof.Name,NPCInfo.feats,Number(prof.Ranks),NPCInfo);
                            profInfo = `(${prof.Name})`;
                        })
                    }
                    skillValue = skillValue+getRacialBonus(NPCInfo.racialModifiers,element);
                    //+Number(Number(skills[element])>0?3:0)
                    if(skillValue>=0){
                        skillValue = "+" + skillValue;
                    }
                    element = element.split(/(?=[A-Z])/).join(' ').trim();
                    
                    skillsList+= element + profInfo + " "  + skillValue;
            //      skillsList+=element;
             })
        }
        length =0;
        if(NPCInfo.racialModifiers){
            skillsList+=";<b> Racial Modifiers </b>";
            let racialBonus = "";
            Object.keys(NPCInfo.racialModifiers).forEach(element=>{
                let value = NPCInfo.racialModifiers[element];
                if(value>0){
                    racialBonus=`+${value}`;
                }
                            length++;
            if(length>1){
                skillsList+=", "
            }
            skillsList+=`${racialBonus} ${element}`;
            })
        }
        let languageList="";
        length =0;
        if(NPCInfo.languages){
            NPCInfo.languages.forEach(element=>{
                length++;
                if(length>1){
                    languageList+=", "
                }
                languageList+=element;
            })
        }
        let SQlist="";
        length =0;
        if(NPCInfo.special_qualities){
            NPCInfo.special_qualities.forEach(element=>{
                length++;
                if(length>1){
                    SQlist+=", "
                }
                SQlist+=element;
            })
        }
        let spellListPrepared = "";
        let spellListInnate = "";
        if(NPCInfo.spell_abilities){

            let NPCSpellInfo = NPCInfo.spell_abilities;
            if(NPCSpellInfo.innate){
                let innate =NPCSpellInfo.innate;
                if(innate.constant){
                    spellListInnate+="Constant-"+innate.constant+"<br>";
                }
                if(innate.atWill){
                    spellListInnate+="At Will-"+innate.atWill+"<br>";
                }
                if(innate.xDay){
                    innate.xDay.forEach(spell=>{
                        spellListInnate+=spell+"<br>"
    
                    })
                }
            }
            if(NPCSpellInfo.prepared){
                let prepared = NPCSpellInfo.prepared;
                if(prepared.ninth){
                    spellListPrepared+="9th-"+prepared.ninth+"<br>";
                }
                if(prepared.eighth){
                    spellListPrepared+="8th-"+prepared.eighth+"<br>";
                }
                if(prepared.seventh){
                    spellListPrepared+="7th-"+prepared.seventh+"<br>";
                }
                if(prepared.sixth){
                    spellListPrepared+="6th-"+prepared.sixth+"<br>";
                }
                if(prepared.fifth){
                    spellListPrepared+="5th-"+prepared.fifth+"<br>";
                }
                if(prepared.fourth){
                    spellListPrepared+="4th-"+prepared.fourth+"<br>";
                }
                if(prepared.third){
                    spellListPrepared+="3rd-"+prepared.third+"<br>";
                }
                if(prepared.second){
                    spellListPrepared+="2nd-"+prepared.second+"<br>";
                }
                if(prepared.first){
                    spellListPrepared+="1st-"+prepared.first+"<br>";
                }
                if(prepared.zeroth){
                    spellListPrepared+="0 (At will)-"+prepared.zeroth+"<br>";
                }
            }
        }
        let subType = "";
        let NPCTypeInformation = "";
        if(NPCInfo.type==="Custom"){
            NPCTypeInformation = NPCInfo.customType;
        }else{
            NPCTypeInformation = NPCInfo.type;
        }
        if(NPCInfo.subtype!=null){
            NPCTypeInformation+=`(${NPCInfo.subtype})`;
            subType = NPCInfo.subtype;
        }else{
            subType = NPCInfo.type;
        }
        let speed = "";
        if(NPCInfo.speed!=null){
            speed += `${NPCInfo.speed['walk']} ft.`
        
        i=1;
        Object.keys(NPCInfo.speed).forEach(speedVal=>{
            if(i>1){
                speed+=", "
            }
            if(speedVal!="walk"){
                speed += `${speedVal} ${NPCInfo.speed[speedVal]} ft.`

            }-
            i++;
        })
        }else{
            speed+="0 ft."
        }
        let classList ="";
        if(NPCInfo.class!=null){
            classList= getClassDisplayList(NPCInfo);
        }
        let init = getModifier(NPCInfo.dex);
        init = init+getFeatBonuses("init",NPCInfo.feats,NPCInfo.dex);
        NPC.innerHTML = `<h1>${NPCInfo.name}</h1> <p class ="title">${NPCInfo.title} <span class="level">CR ${NPCInfo.cr}</span></p>
        <p class="information"><b>XP ${getEXP(NPCInfo.cr)}</b></p>`;
        if(classList!=""){
            NPC.innerHTML+=`<p class="information">${subType} ${classList}</p>`;

        }
        NPC.innerHTML+=`<p class="information">${NPCInfo.alignment} ${NPCInfo.size} ${NPCTypeInformation}</p>
        <p class="information"><b>Init</b> ${init}; ${senseString}</p>
        <p class = "divider">DEFENSE</p>
        <p class="information"><b>AC</b> ${Number(NPCInfo.ac.armor)+getFeatBonuses("armor",NPCInfo.feats,0,NPCInfo)}, touch ${Number(NPCInfo.ac.touch)+getFeatBonuses("touch",NPCInfo.feats,0,NPCInfo)}, flat-footed ${Number(NPCInfo.ac.flat_foot)+getFeatBonuses("flatfoot",NPCInfo.feats,0,NPCInfo)}(${acBonuses}) </p>
        <p class="information"><b>hp</b> ${hpNode}</p>
        <p class="information">${saves}${saveBonus}</p>`
        if(NPCInfo.defensive_traits){
            NPC.innerHTML+=`<p class="information">${defensiveTraits}</p>`
        }
        if(NPCInfo.weaknesses){
            NPC.innerHTML+=`<p class="information"><b>Weaknesses</b> ${NPCInfo.weaknesses}</p>`
        }
        NPC.innerHTML+=`<p class = "divider">OFFENSE</p>
        <p class="information"><b>Speed</b> ${speed}</p>`
        let j =0;
        let enchantedGear = [];
        if(NPCInfo.melee){
        
        NPC.innerHTML+=`<p class="information"><b>Melee</b> ${getAttackDetails(NPCInfo.melee,NPCInfo,enchantedGear,"melee")}</p>`
    }
        j=0;
        if(NPCInfo.ranged){
            NPC.innerHTML+=`<p class="information"><b>Ranged</b> ${getAttackDetails(NPCInfo.ranged,NPCInfo,enchantedGear,"ranged")}</p>`
        }
        let reachBonusEffect ="";
        if(NPCInfo.reach_bonus_effects){
            reachBonusEffect = `(${NPCInfo.reach_bonus_effects})`;
        }
        let reach =getReachOrSpace(NPCInfo,'reach');
        let space =getReachOrSpace(NPCInfo,'space');
        if(reach!=""){
            NPC.innerHTML+=`<p class="information"><b>Space</b> ${space} <b>Reach</b> ${reach} ${reachBonusEffect}</p>`
        }
        if(NPCInfo.special_attacks){
            NPC.innerHTML+=`<p class="information"><b>Special Attacks</b> ${NPCInfo.special_attacks}</p>`
        }
        if(NPCInfo.spell_abilities!=null){
            let spellAbilities =NPCInfo.spell_abilities;
            let spellLikeCL = ""
            let spellLikeConcentrate = ""
            let preparedCL = ""
            let preparedConcentrate = ""
            spellLikeCL = spellAbilities.innate.CL===null?spellAbilities.innate.CL:NPCInfo.level;
            spellLikeConcentrate = spellAbilities.innate.Concentrate===null?spellAbilities.innate.Concentrate:Number(spellLikeCL)+getModifier(getstatValue(spellAbilities.innate.casterMod,NPCInfo));
            NPC.innerHTML+=`<p class="information"><b>Spell-Like Abilities</b>(CL ${spellLikeCL}; Concentration +${spellLikeConcentrate})</p>`
            if(spellAbilities.innate){
                NPC.innerHTML+=`<p class="spells">${spellListInnate}</p>`
            }
            if(spellAbilities.prepared){
                NPC.innerHTML+=`<p class="information"><b>Spells Prepared</b>(CL ${preparedCL} ; Concentration +${preparedConcentrate})</p>`
                NPC.innerHTML +=`<p class="spells">${spellListPrepared}</p>`
            }
        }
        let cmdInformation = Number(NPCInfo.cmd)+ getFeatBonuses("CMD",NPCInfo.feats,0,NPCInfo);
        let indexCMD =0;
        if(NPCInfo.cmdMod){
            cmdInformation+= " (";
            let cmdModifier = NPCInfo.cmdMod;
            let cmdBonus = "";
            cmdModifier.forEach(modifier=>{
                if(modifier.CMDBonus!=''){
                    cmdBonus = (Number(NPCInfo.cmd) + Number(modifier.CMDBonus)) + " ";
                }
                cmdInformation += cmdBonus + modifier.CMDBonusDetails;
                if(cmdModifier.length>1&&indexCMD!=cmdModifier.length-1){
                    cmdInformation += ", ";
                }
                indexCMD++;
            })
            cmdInformation += ")";
        }
        let cmbInformation = Number(NPCInfo.cmb)+getFeatBonuses("CMB",NPCInfo.feats,0,NPCInfo);
        NPC.innerHTML+=`<p class = "divider">STATISTICS</p>
        <p class="information"><b>Str</b> ${getStatDisplay(NPCInfo.str)} <b>Dex</b> ${getStatDisplay(NPCInfo.dex)} <b>Con</b> ${getStatDisplay(NPCInfo.con)} <b>Int</b> ${getStatDisplay(NPCInfo.int)} <b>Wis</b> ${getStatDisplay(NPCInfo.wis)} <b>Cha</b> ${getStatDisplay(NPCInfo.cha)}</p>
        <p class="information"><b>Base Atk</b> ${getBaB(NPCInfo.bab,NPCInfo.level)}; <b>CMB</b> ${cmbInformation}; <b>CMD</b> ${cmdInformation}</p>`
        if(featsList.length>0){
            NPC.innerHTML+=`<p class="information"><b>Feats </b>${featsList}</p>`;
        }
        if(skillsList.length>0){
            NPC.innerHTML+=`<p class="information"><b>Skills </b>${skillsList}</p>`;
        }
        if(languageList.length>0){
            NPC.innerHTML+=`<p class="information"><b>Languages </b>${languageList}</p>`;
        }
        let gear = ""
        if(NPCInfo.gear){
            gear = NPCInfo.gear;
            if(enchantedGear.length>0){
                gear += ", "+enchantedGear.toString().replace(",",", ");
            }
            NPC.innerHTML+=`<p class="information"><b>Gear</b> ${gear}</p>`
        }else{
            gear = enchantedGear.toString().replace(",",", ");;
            if(gear!=""){
                NPC.innerHTML+=`<p class="information"><b>Gear</b> ${gear}</p>`
            }
        }
        // if(NPCInfo.melee.enchantments||NPCInfo.ranged.enchantments){
        //     console.log("hi");
        // }
        if(NPCInfo.special_qualities){
            NPC.innerHTML+=`<p class="information"><b>SQ</b> ${SQlist}</p>`
        }
        if(NPCInfo.special_abilities!=null){
        NPC.innerHTML +=`<p class = "divider">SPECIAL ABILITIES</p>`
            NPCInfo.special_abilities.forEach(element => {
                let special_abilities_desc = element.ability_desc;
                if(element.dcStat){
//                    console.log(element.ability_desc.indexOf(findSaveType(element.ability_desc)));
                    let trueSaveType=""
                    let trueSave = 10+Math.floor(NPCInfo.level/2)+getSaveMod(element.dcStat,NPCInfo);
                    let condensedString = special_abilities_desc;
                    while(special_abilities_desc.includes("[saveDC]")){
                        special_abilities_desc = special_abilities_desc.replace("[saveDC]",`${trueSave} ${element.saveType}`)
                        // condensedString = condensedString.substring().toLowerCase();
                        // condensedString = condensedString.replace("save","");
                        // condensedString = condensedString.replace("dc","");
                        if(condensedString!=""){
//                            console.log(condensedString);
                        }
                        if(!element.dcStat){
                        }
                        //maybe later
                        // special_abilities_desc = special_abilities_desc.replace(element.ability_desc.substring(element.ability_desc.indexOf("["),element.ability_desc.indexOf("]")+1),`DC ${trueSave} ${element.saveType}`);
                    }
                    //else{
                    //     if(element.ability_desc.includes("DC")){
                    //         let substring = "";
                    //         if(element.ability_desc.indexOf(trueSaveType=findSaveType(element.ability_desc,element.saveType))<0){
                    //             substring = element.ability_desc.split("DC")[1];
                    //         }else{
                    //             substringDC = element.ability_desc.substring(element.ability_desc.indexOf("DC"),element.ability_desc.indexOf(trueSaveType=findSaveType(element.ability_desc,element.saveType)));
                    //         }
                    //         substringDC = substringDC.replace("DC", '')
                    //         substringDC = substringDC.replace(/\s+/g,"");
                    //         special_abilities_desc = element.ability_desc.replace(substringDC,trueSave);
                    //         if(trueSaveType!=element.saveType){
                    //             special_abilities_desc = special_abilities_desc.replace(trueSaveType,element.saveType);
                    //         }
                    //     }else{
                    //         special_abilities_desc+=` DC ${trueSave} ${element.saveType}`;
                    //     }
                    // }
                }
                if(special_abilities_desc.includes("[NPCName]")||special_abilities_desc.includes("[NPCname]")){
                    while(special_abilities_desc.includes("[NPCName]")||special_abilities_desc.includes("[NPCname]")){
                        special_abilities_desc = special_abilities_desc.replace("[NPCName]",`${NPCInfo.name}`)

                    }
                }

                if(special_abilities_desc.includes("[")){
                    let specialStatText = special_abilities_desc.split("[")[1].split("]")[0];
                    let specialStatsArray = specialStatText.split(' ');
                    if(specialStatsArray.includes("max")&&specialStatsArray.includes("health")){
                        specialStatsArray[specialStatsArray.indexOf("max")]="max health";
                        specialStatsArray.splice([specialStatsArray.indexOf("health")],1);
                    }
                    let value = getSpecialValue(specialStatsArray,NPCInfo);
                    special_abilities_desc = special_abilities_desc.replace(special_abilities_desc.substring(special_abilities_desc.indexOf("["),special_abilities_desc.indexOf("]")+1),`${specialStatText} (${value})`)
                }
                let abilityType= element.abilityType.split("(")[0];
                NPC.innerHTML+= `<p class="title">${element.abilityName} (${abilityType})</p>\n<p class="information">${special_abilities_desc}</p>`
                
            });
        }
    break;
        //5e
    case "5e":
        let savingThrows = "";
        let savingThrowsInfo = NPCInfo.saving_throws;
        if(savingThrowsInfo.str){
            let str = "";
            if(savingThrowsInfo.str>-1){
                str = "+";
            }
            str += savingThrowsInfo.str;
            savingThrows += `Str ${str}`
        }
        if(savingThrowsInfo.dex){
            if(savingThrows.length>0){
                savingThrows+=", ";
            }
            let dex = "";
            if(savingThrowsInfo.dex>-1){
                dex = "+";
            }
            dex += savingThrowsInfo.dex;
            savingThrows += `Dex ${dex}`
        }
        if(savingThrowsInfo.con){
            if(savingThrows.length>0){
                savingThrows+=", ";
            }
            let con = "";
            if(savingThrowsInfo.con>-1){
                con = "+";
            }
            con += savingThrowsInfo.con;
            savingThrows += `Con ${con}`
        }
        if(savingThrowsInfo.int){
            if(savingThrows.length>0){
                savingThrows+=", ";
            }
            let int = "";
            if(savingThrowsInfo.int>-1){
                int = "+";
            }
            int += savingThrowsInfo.int;
            savingThrows += `Int ${int}`
        }
        if(savingThrowsInfo.wis){
            if(savingThrows.length>0){
                savingThrows+=", ";
            }
            let wis = "";
            if(savingThrowsInfo.wis>-1){
                wis = "+";
            }
            wis += savingThrowsInfo.wis;
            savingThrows += `Wis ${wis}`
        }
        if(savingThrowsInfo.cha){
            if(savingThrows.length>0){
                savingThrows+=", ";
            }
            let cha = "";
            if(savingThrowsInfo.cha>-1){
                cha = "+";
            }
            cha += savingThrowsInfo.cha;
            savingThrows += `Cha ${cha}`
        }
        let abilities = "";
        if(NPCInfo.ability){
            NPCInfo.ability.forEach(element=>{
                abilities+="<p class=information5e><b>"+element.abilityName+"</b> ";
                abilities+=element.ability_desc+"</p>";
            })
        }
        let actions ="";
        if(NPCInfo.actions){
            NPCInfo.actions.forEach(element=>{
                actions+="<p class=information5e><b>"+element.actionName+"</b> ";
                    actions+=element.action_desc+"</p>";
                })
        }
        let legendaryActionsDetails = ""
        if(NPCInfo.legendaryAbilities){
            let legendaryActions = NPCInfo.legendaryAbilities.legendaryActions;
            legendaryActions.forEach(element=>{
                legendaryActionsDetails+="<p class=information5e><b>"+element.legendaryName+"</b> ";
                legendaryActionsDetails+=element.legendary_desc+"</p>";
            })
        } 
        let hp = "";
        let trueHp5e = "";
        let hpInformation5e = "";
        trueHp5e = getHP(NPCInfo,sys);
        let conMod = getModifier(NPCInfo.con)*Number(NPCInfo.level);
        if(conMod==0){
            conMod = ""
        }else if(conMod>0){
            conMod = "+" + conMod;
        }
        hpInformation5e = `${NPCInfo.level}${NPCInfo.hitDice}${conMod}`
        if(NPCInfo.setHP){
            trueHp5e = NPCInfo.setHP;
        }
        if(NPCInfo.setHD){
            hpInformation5e = NPCInfo.setHD;
        }
        
        hp = `${trueHp5e}(${hpInformation5e})`
        NPC.innerHTML = `<h1>${NPCInfo.name}</h1><p class="information5e">${NPCInfo.size} ${NPCInfo.type}, ${NPCInfo.alignment}</p>
        <div class="taper"></div>
        <p class="information5e"><b>Armor Class</b> ${NPCInfo.ac}</p>
        <p class="information5e"><b>Hit Points</b> ${hp}</p>
        <p class="information5e"><b>Speed</b> ${NPCInfo.speed}</p>
        <div class="taper"></div>
        <div class="flex-container">
        <div class="boldInformation">STR</div><div class="boldInformation">DEX</div><div class="boldInformation">CON</div><div class="boldInformation">INT</div><div class="boldInformation">WIS</div><div class="boldInformation">CHA</div>
        </div>
        <div class="flex-container">
        <div class="information5e">${NPCInfo.str}</div><div class="information5e">${NPCInfo.dex}</div><div class="information5e">${NPCInfo.con}</div>
        <div class="information5e">${NPCInfo.int}</div><div class="information5e">${NPCInfo.wis}</div><div class="information5e">${NPCInfo.cha}</div>
        </div>
        <div class="taper"></div>`
        if(savingThrows.length>0){
            NPC.innerHTML+=`<p class="information5e"><b>Saving Throws</b> ${savingThrows}</p>`
        }
        if(NPCInfo.skillsProf){
            let skills5e = "";
            let q = 0;
            let skillList = ['Acrobatics','AnimalHandling','Arcana','Athletics','Athletics','Deception','History','Insight','Intimidation','Investigation','Medicine','Nature','Perception','Performance','Persuasion','Religion','SleightofHand','Stealth','Survival'];
            skillList.forEach(skills=>{
                q++;
                if(q>1){
                    skills5e += ", "
                }
                let skillBonus = 0;
                skillBonus = skillModifier(skills,NPCInfo)+Number(NPCInfo.skillsProf[skills]==true?NPCInfo.proficiency:0);
               skills5e += `${skills} ${skillBonus}` ;
            })
            NPC.innerHTML+=`<p class="information5e"><b>Skills</b> ${skills5e}</p>`
        }
        if(NPCInfo.damage_vulnerabilities){
            NPC.innerHTML += `<p class="information5e"><b>Vulnerabilities</b> ${NPCInfo.damage_vulnerabilities}</p>`    
        }
        if(NPCInfo.damage_resistances){
            NPC.innerHTML += `<p class="information5e"><b>Damage Resistance</b> ${NPCInfo.damage_resistances}</p>`
        }
        if(NPCInfo.damage_immunities){
            NPC.innerHTML += `<p class="information5e"><b>Damage Immunities</b> ${NPCInfo.damage_immunities}</p>`
        }
        if(NPCInfo.condition_immunities){
            NPC.innerHTML += `<p class="information5e"><b>Condition Immunities</b> ${NPCInfo.condition_immunities}</p>`
        }
        NPC.innerHTML += `<p class="information5e"><b>Senses</b> ${NPCInfo.senses}</p>
        <p class="information5e"><b>Challenge</b> ${NPCInfo.cr}(${NPCInfo.xp} XP)</p>
        <div class="taper"></div>`
        if(NPCInfo.ability){
            NPC.innerHTML+=`<p>${abilities}</p>`
        }
        if(NPCInfo.actions){
           NPC.innerHTML+= `<h2 class="title5e">Actions</h2>
            <hr>
            <p>${actions}</p}
            <hr>
            `
        }
        if(NPCInfo.legendaryAbilities){
            let legAction = NPCInfo.legendaryAbilities;
            NPC.innerHTML+=`<h2 class="title5e">Legendary Actions</h2>
        <hr>
        <p class=information5e>${legAction.legendary_details}</p>
        <p>${legendaryActionsDetails}</p>
        
        `
        }
    break;
    default:
        break;
    }
    //cName = list.NPCs[i].name;
NPCDisplay.appendChild(NPC);
}

function getReachOrSpace(NPCInfo,obtain){
    let isLong = NPCInfo.sizeType;
    switch(NPCInfo.size.toLowerCase()){
            case "fine":
                switch(obtain){
                    case "reach":
                        return "0";
                    case "space":
                        return "1/2 ft.";
                }
                break;
            case "diminutive":
                switch(obtain){
                    case "reach":
                        return "0";
                    case "space":
                        return "1 ft.";
                }
                break;
            case "tiny":
                switch(obtain){
                    case "reach":
                        return "0";
                    case "space":
                        return "2-1/2 ft.";
                }
                break;
            case "small":
                switch(obtain){
                    case "reach":
                        return "5 ft.";
                    case "space":
                        return "5 ft.";
                }
                break;
            case "medium":
                switch(obtain){
                    case "reach":
                        return "5 ft.";
                    case "space":
                        return "5 ft.";
                }
                break;
            case "large":
                switch(obtain){
                    case "reach":
                        if(isLong){
                            return "5 ft."
                        }else{
                            return "10 ft."
                        }
                    case "space":
                        return "10 ft."
                }
                break;
            case "huge":
                switch(obtain){
                    case "reach":
                        if(isLong){
                            return "10 ft."
                        }else{
                            return "15 ft."
                        }
                    case "space":
                        return "15 ft."
                }
                break;
            case "gargantuan":
                switch(obtain){
                    case "reach":
                        if(isLong){
                            return "15 ft."
                        }else{
                            return "20 ft."
                        }
                    case "space":
                        return "20 ft."
                }
                break;
            case "colossal":
                switch(obtain){
                    case "reach":
                        if(isLong){
                            return "20 ft."
                        }else{
                            return "30 ft."
                        }
                    case "space":
                        return "30 ft."
                }
                break;
            default:
                return "";
    }
}

function getSkill(NPCInfo,skillToGet){
        let skillValue = 0;
        let skills = NPCInfo.skills;
        if(NPCInfo.skills){
            let cSkills = Object.keys(NPCInfo.skills);
             cSkills.forEach(element=>{
                 if (element==skillToGet){
                     skillValue = Number(skills[element]) + skillModifier(element,NPCInfo)+getFeatBonuses(element,NPCInfo.feats,Number(skills[element]),NPCInfo);
                     skillValue = skillValue+getRacialBonus(NPCInfo.racialModifiers,element);
                    }
                })
            }
        if(skillValue>-1){
            return `+${skillValue}`
        }else{
            return skillValue;
        }
}

function getStatDisplay(stat){
    if(stat<0){
        return "-"
    }else{
        return stat;
    }
}


function getClassDisplayList(NPCinfo){
  var cList = NPCinfo.class;
  var cDataString = "";
  var i=0;
  cList.forEach(element=>{
    if(i>0){
      cDataString+="/"
    }
    cDataString+=`${element.name} ${element.level}`;
    i++;
    
  });
  // if(cDataString==""){
    //   cDataString = "None";
    // }
  return cDataString;
}

function getNPChitDiceDisplay(NPCInfo){
    var classDetails = NPCInfo.class;
    let hpInfo="";
    var l=0;
    classDetails.forEach(classdetails=>{
        let details = `${classdetails.level}d${getHitDice(classdetails.name,classdetails.archetype)}`
        if(l>0){
            hpInfo+="+"
        }
        hpInfo+=details;
        l++;
    })
    let con = getModifier(NPCInfo.con)*Number(NPCInfo.level)+getFeatBonuses("con",NPCInfo.feats,NPCInfo.level,NPCInfo);
    hpInfo+= `+${con}`
    return hpInfo;
}