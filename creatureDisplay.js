fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>loadsData(jsonList))
    /**
     * loads information from json
     * @param {array} list 
     */
function loadsData(list){
    let param = new URLSearchParams(window.location.search);
    creatureId = param.get("creature");
    let sys = list.creatures[creatureId].system;
    let creatureInfo = list.creatures[creatureId];
    var creatureDisplay = document.getElementById("display");
    var creature = document.createElement("div");
    document.title = creatureInfo.name;
    let senseString="";
    switch(sys){
    case "pathfinder":
        if(creatureInfo.senses!=null){
            Object.keys(creatureInfo.senses).forEach(senses=>{
                if(creatureInfo.senses[senses]!=""){
                    senseString+=`${senses} ${Number(creatureInfo.senses[senses])} ft.`;
                }else{
                    senseString+=`${senses}`;
                }
                senseString+=", ";
            })
            }
            senseString+= `Perception ${getSkill(creatureInfo,'Perception')}`;
            let senseTitle = " <b>Sense</b>";
            if(senseString!=''){
                senseString=senseTitle.concat(" ",senseString);
            }
            if(creatureInfo.aura!=null){
                senseString += "; <b>Aura</b> ";
                let l =0;
                creatureInfo.aura.forEach(aura=>{
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
                    let dc = 10+Math.floor(creatureInfo.level/2)+getSaveMod(aura.dcStat,creatureInfo);
                   auraDC = ", DC " + dc
                }
                if(aura.auraDmg){
                    auraDmg=", "+aura.auraDmg;
                }
                auraDesc = `${auraName}(${auraRadius} ft.${auraDC}${auraDmg})`
                senseString +=auraDesc;
                })
            }
            if(creatureInfo.special_abilities!=null){
                creatureInfo.special_abilities.forEach(element => {
                    if(element.auraRadius){
                    if(!senseString.includes("Aura")){
                        senseString += "; <b>Aura</b> ";
                    }else{
                        senseString+=", ";
                    }
                    let dc = 10+Math.floor(creatureInfo.level/2)+getSaveMod(element.dcStat,creatureInfo);
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
        
        let creatureAcBonus = creatureInfo.ac.bonuses;
        let acBonuses = "";
        let sign="";
        if(creatureAcBonus.armor){
            acBonuses += "+" + creatureAcBonus.armor + " armor";
        }
        if(creatureAcBonus.deflection){
            if(acBonuses.includes("armor")){
                acBonuses += ", ";
            }
            acBonuses += "+" + creatureAcBonus.deflection + " deflection";
        }
        if(creatureAcBonus.dex){
            if(acBonuses.includes("armor")||acBonuses.includes("deflection")){
                sign = ", "
            }
            if(creatureAcBonus.dex<0){
                sign += "";
            }else{
                sign += "+";
            }
            acBonuses += sign + creatureAcBonus.dex + " dex";
        }
        if(creatureAcBonus.insight){
            acBonuses += ", +" + creatureAcBonus.insight + " insight";
        }
        let altDodgeBonus = getFeatBonuses("dodge",creatureInfo.feats,creatureAcBonus.dodge,creatureInfo);
        if(creatureAcBonus.dodge){
            acBonuses += ", +" + (Number(creatureAcBonus.dodge) + altDodgeBonus) + " dodge";
        }
        if(altDodgeBonus>0){
            acBonuses += ", +" + altDodgeBonus + " dodge";
        }
        if(creatureAcBonus.shield){
            acBonuses += ", +" + creatureAcBonus.shield + " shield";
        }
        let altNaturalBonus = getFeatBonuses("natural",creatureInfo.feats,creatureAcBonus.dodge,creatureInfo);
        if(creatureAcBonus.natural){
            acBonuses += ", +" + (Number(creatureAcBonus.natural)+altNaturalBonus) + " natural";
        }
                if(altNaturalBonus>0){
            acBonuses += ", +" + altNaturalBonus + " dodge";
        }
        if(creatureInfo.size!="Medium"){
            let sizeMod = getCreatureSizeMod(creatureInfo.size);
            if(sizeMod<0){
                sign = ", ";
            }else{
                sign = ", +";
            }
            acBonuses += sign +sizeMod + " size";
        }
        let extras;
        if(creatureAcBonus.extra){
            creatureAcBonus.extra.forEach(bonusEl=>{
                extras = Object.keys(bonusEl);
              
            })
              extras.forEach(ex=>{
                creatureAcBonus.extra.forEach(bonusEl=>{
                    if(bonusEl[ex]<0){
                sign = ", ";
            }else{
                sign = ", +";
            }
                    acBonuses += sign + bonusEl[ex] + " " + ex
              
            })
              })
        }

        let conBonus = getModifier(creatureInfo.con)*Number(creatureInfo.level)+getFeatBonuses("con",creatureInfo.feats,creatureInfo.level,creatureInfo);
        let hpInformation = `${creatureInfo.level}${creatureInfo.hitDice}`;
        if(creatureInfo.type.toLowerCase().includes("construct")){
            conBonus=getConstructBonusHealth(creatureInfo.size);
        }
        if(conBonus>0){
            hpInformation=hpInformation+`+${conBonus}`;
        }
        let trueHp = getHP(creatureInfo,sys);
        if(creatureInfo.setHP){
            trueHp = creatureInfo.setHP;
        }
        if(creatureInfo.setHD){
            hpInformation = creatureInfo.setHD;
        }

        let hpNode = `${trueHp}(${hpInformation})`;
        if(creatureInfo.hp_traits){
            hpNode += "; " + creatureInfo.hp_traits;
        }
        let saves =""
        saves = `<b> Fort </b>`
        let fort = 0;
        if(creatureInfo.fort==="Good"){
           fort = 2+ Math.floor(creatureInfo.level/2);
        }else if(creatureInfo.fort==="Bad"){
            fort = Math.floor(creatureInfo.level/3);
        }
        fort = Number(fort) + getModifier(creatureInfo.con)+getFeatBonuses("Fort",creatureInfo.feats,creatureInfo.con)+nonConditionBonus("Fort",creatureInfo);
        if(fort<0){
            saves += fort
        }else{
            saves += "+"+fort;
        }
        saves += `<b> Ref </b>`
        let ref = 0;
        if(creatureInfo.ref==="Good"){
           ref = 2+ Math.floor(creatureInfo.level/2);
        }else if(creatureInfo.ref==="Bad"){
            ref = Math.floor(creatureInfo.level/3);
        }else{
            ref = creatureInfo.ref-getModifier(creatureInfo.dex);
        }
        ref = Number(ref) + getFeatBonuses("Reflex",creatureInfo.feats,creatureInfo.ref)+getModifier(creatureInfo.dex)+nonConditionBonus("Ref",creatureInfo);
        
        if(ref<0){
            saves += ref;
        }else{
            saves += "+"+ref;
        }
        saves += `<b> Will </b>`
        let will = 0;
        if(creatureInfo.will==="Good"){
           will = 2+ Math.floor(creatureInfo.level/2);
        }else if(creatureInfo.will==="Bad"){
            will = Math.floor(creatureInfo.level/3);
        }
        will = Number(will) + getModifier(creatureInfo.wis)+ getFeatBonuses("Will",creatureInfo.feats,creatureInfo.wis)+nonConditionBonus("Will",creatureInfo);
        if(will<0){
            saves += will;
        }else{
            saves += "+"+will;
        }
        let saveBonus = "";
        if(creatureInfo.saveBonus!=null){
            saveBonus+=";"
        }
        let loop=0;
        if(creatureInfo.save_bonuses){
            creatureInfo.save_bonuses.forEach(bonuses=>{
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
        if(creatureInfo.defensive_traits){
            let DT = creatureInfo.defensive_traits;
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
        if(creatureInfo.feats){
            Object.keys(creatureInfo.feats).forEach(element=>{
                length++;
                if(length>1){
                    featsList+=", "
                }
                let extraData = "";
//                console.log(creatureInfo.feats);
                if(creatureInfo.feats[element]!=""){
                    extraData = `(${creatureInfo.feats[element]})`;
                }
                featsList+=element+extraData;
            })
        }
        let skillsList="";
        length =0;
        if(creatureInfo.skills){
            let skills = creatureInfo.skills;
            let cSkills = Object.keys(creatureInfo.skills);
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
                        skillValue = Number(skills[element]) + skillModifier(element,creatureInfo)+getFeatBonuses(element,creatureInfo.feats,Number(skills[element]),creatureInfo);
                        if(element=="Stealth"){
                            skillValue+=getCreatureSizeMod(creatureInfo.size,"fly")*2;
                        }
                        if(element=="Fly"){
                            skillValue+=getCreatureSizeMod(creatureInfo.size,"fly");
                        }
                    }else{
                        skills[element].forEach(prof=>{
                            skillValue = Number(prof.Ranks)+Number(skillModifier(element,creatureInfo))+getFeatBonuses(prof.Name,creatureInfo.feats,Number(prof.Ranks),creatureInfo);
                            profInfo = `(${prof.Name})`;
                        })
                    }
                    skillValue = skillValue+getRacialBonus(creatureInfo.racialModifiers,element);
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
        if(creatureInfo.racialModifiers){
            skillsList+=";<b> Racial Modifiers </b>";
            let racialBonus = "";
            Object.keys(creatureInfo.racialModifiers).forEach(element=>{
                let value = creatureInfo.racialModifiers[element];
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
        if(creatureInfo.languages){
            creatureInfo.languages.forEach(element=>{
                length++;
                if(length>1){
                    languageList+=", "
                }
                languageList+=element;
            })
        }
        let SQlist="";
        length =0;
        if(creatureInfo.special_qualities){
            creatureInfo.special_qualities.forEach(element=>{
                length++;
                if(length>1){
                    SQlist+=", "
                }
                SQlist+=element;
            })
        }
        let spellListPrepared = "";
        let spellListInnate = "";
        if(creatureInfo.spell_abilities){

            let creatureSpellInfo = creatureInfo.spell_abilities;
            if(creatureSpellInfo.innate){
                let innate =creatureSpellInfo.innate;
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
            if(creatureSpellInfo.prepared){
                let prepared = creatureSpellInfo.prepared;
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
        let creatureTypeInformation = "";
        if(creatureInfo.type==="Custom"){
            creatureTypeInformation = creatureInfo.customType;
        }else{
            creatureTypeInformation = creatureInfo.type;
        }
        if(creatureInfo.subtype!=null){
            creatureTypeInformation+=`(${creatureInfo.subtype})`;
        }
        let speed = "";
        speed += `${creatureInfo.speed['walk']} ft.`
        i=1;
        Object.keys(creatureInfo.speed).forEach(speedVal=>{
            if(i>1){
                speed+=", "
            }
            if(speedVal!="walk"){
                speed += `${speedVal} ${creatureInfo.speed[speedVal]} ft.`

            }-
            i++;
        })
        let init = getModifier(creatureInfo.dex);
        init = init+getFeatBonuses("init",creatureInfo.feats,creatureInfo.dex);
        creature.innerHTML = `<h1>${creatureInfo.name}</h1> <p class ="title">${creatureInfo.title} <span class="level">CR ${creatureInfo.cr}</span></p>
        <p class="information"><b>XP ${getEXP(creatureInfo.cr)}</b></p>
        <p class="information">${creatureInfo.alignment} ${creatureInfo.size} ${creatureTypeInformation}</p>
        <p class="information"><b>Init</b> ${init}; ${senseString}</p>
        <p class = "divider">DEFENSE</p>
        <p class="information"><b>AC</b> ${Number(creatureInfo.ac.armor)+getFeatBonuses("armor",creatureInfo.feats,0,creatureInfo)}, touch ${Number(creatureInfo.ac.touch)+getFeatBonuses("touch",creatureInfo.feats,0,creatureInfo)}, flat-footed ${Number(creatureInfo.ac.flat_foot)+getFeatBonuses("flatfoot",creatureInfo.feats,0,creatureInfo)}(${acBonuses}) </p>
        <p class="information"><b>hp</b> ${hpNode}</p>
        <p class="information">${saves}${saveBonus}</p>`
        if(creatureInfo.defensive_traits){
            creature.innerHTML+=`<p class="information">${defensiveTraits}</p>`
        }
        if(creatureInfo.weaknesses){
            creature.innerHTML+=`<p class="information"><b>Weaknesses</b> ${creatureInfo.weaknesses}</p>`
        }
        creature.innerHTML+=`<p class = "divider">OFFENSE</p>
        <p class="information"><b>Speed</b> ${speed}</p>`
        let j =0;
        let enchantedGear = [];
        if(creatureInfo.melee){
        
        creature.innerHTML+=`<p class="information"><b>Melee</b> ${getAttackDetails(creatureInfo.melee,creatureInfo,enchantedGear,"melee")}</p>`
    }
        j=0;
        if(creatureInfo.ranged){
            creature.innerHTML+=`<p class="information"><b>Ranged</b> ${getAttackDetails(creatureInfo.ranged,creatureInfo,enchantedGear,"ranged")}</p>`
        }
        let reachBonusEffect ="";
        if(creatureInfo.reach_bonus_effects){
            reachBonusEffect = `(${creatureInfo.reach_bonus_effects})`;
        }
        let reach =getReachOrSpace(creatureInfo,'reach');
        let space =getReachOrSpace(creatureInfo,'space');
        if(reach!=""){
            creature.innerHTML+=`<p class="information"><b>Space</b> ${space} <b>Reach</b> ${reach} ${reachBonusEffect}</p>`
        }
        if(creatureInfo.special_attacks){
            creature.innerHTML+=`<p class="information"><b>Special Attacks</b> ${creatureInfo.special_attacks}</p>`
        }
        if(creatureInfo.spell_abilities!=null){
            let spellAbilities =creatureInfo.spell_abilities;
            let spellLikeCL = ""
            let spellLikeConcentrate = ""
            let preparedCL = ""
            let preparedConcentrate = ""
            spellLikeCL = spellAbilities.innate.CL===null?spellAbilities.innate.CL:creatureInfo.level;
            spellLikeConcentrate = spellAbilities.innate.Concentrate===null?spellAbilities.innate.Concentrate:Number(spellLikeCL)+getModifier(getstatValue(spellAbilities.innate.casterMod,creatureInfo));
            creature.innerHTML+=`<p class="information"><b>Spell-Like Abilities</b>(CL ${spellLikeCL}; Concentration +${spellLikeConcentrate})</p>`
            if(spellAbilities.innate){
                creature.innerHTML+=`<p class="spells">${spellListInnate}</p>`
            }
            if(spellAbilities.prepared){
                creature.innerHTML+=`<p class="information"><b>Spells Prepared</b>(CL ${preparedCL} ; Concentration +${preparedConcentrate})</p>`
                creature.innerHTML +=`<p class="spells">${spellListPrepared}</p>`
            }
        }
        let cmdInformation = Number(creatureInfo.cmd)+ getFeatBonuses("CMD",creatureInfo.feats,0,creatureInfo);
        let indexCMD =0;
        if(creatureInfo.cmdMod){
            cmdInformation+= " (";
            let cmdModifier = creatureInfo.cmdMod;
            let cmdBonus = "";
            cmdModifier.forEach(modifier=>{
                if(modifier.CMDBonus!=''){
                    cmdBonus = (Number(creatureInfo.cmd) + Number(modifier.CMDBonus)) + " ";
                }
                cmdInformation += cmdBonus + modifier.CMDBonusDetails;
                if(cmdModifier.length>1&&indexCMD!=cmdModifier.length-1){
                    cmdInformation += ", ";
                }
                indexCMD++;
            })
            cmdInformation += ")";
        }
        let cmbInformation = Number(creatureInfo.cmb)+getFeatBonuses("CMB",creatureInfo.feats,0,creatureInfo);
        creature.innerHTML+=`<p class = "divider">STATISTICS</p>
        <p class="information"><b>Str</b> ${creatureInfo.str} <b>Dex</b> ${creatureInfo.dex} <b>Con</b> ${creatureInfo.con} <b>Int</b> ${creatureInfo.int} <b>Wis</b> ${creatureInfo.wis} <b>Cha</b> ${creatureInfo.cha}</p>
        <p class="information"><b>Base Atk</b> ${getBaB(creatureInfo.bab,creatureInfo.level)}; <b>CMB</b> ${cmbInformation}; <b>CMD</b> ${cmdInformation}</p>`
        if(featsList.length>0){
            creature.innerHTML+=`<p class="information"><b>Feats </b>${featsList}</p>`;
        }
        if(skillsList.length>0){
            creature.innerHTML+=`<p class="information"><b>Skills </b>${skillsList}</p>`;
        }
        if(languageList.length>0){
            creature.innerHTML+=`<p class="information"><b>Languages </b>${languageList}</p>`;
        }
        let gear = ""
        if(creatureInfo.gear){
            gear = creatureInfo.gear;
            if(enchantedGear.length>0){
                gear += ", "+enchantedGear.toString().replace(",",", ");
            }
            creature.innerHTML+=`<p class="information"><b>Gear</b> ${gear}</p>`
        }else{
            gear = enchantedGear.toString().replace(",",", ");;
            if(gear!=""){
                creature.innerHTML+=`<p class="information"><b>Gear</b> ${gear}</p>`
            }
        }
        // if(creatureInfo.melee.enchantments||creatureInfo.ranged.enchantments){
        //     console.log("hi");
        // }
        if(creatureInfo.special_qualities){
            creature.innerHTML+=`<p class="information"><b>SQ</b> ${SQlist}</p>`
        }
        if(creatureInfo.special_abilities!=null){
        creature.innerHTML +=`<p class = "divider">SPECIAL ABILITIES</p>`
            creatureInfo.special_abilities.forEach(element => {
                let special_abilities_desc = element.ability_desc;
                if(element.dcStat){
//                    console.log(element.ability_desc.indexOf(findSaveType(element.ability_desc)));
                    let trueSaveType=""
                    let trueSave = 10+Math.floor(creatureInfo.level/2)+getSaveMod(element.dcStat,creatureInfo);
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
                if(special_abilities_desc.includes("[creatureName]")||special_abilities_desc.includes("[creaturename]")){
                    while(special_abilities_desc.includes("[creatureName]")||special_abilities_desc.includes("[creaturename]")){
                        special_abilities_desc = special_abilities_desc.replace("[creatureName]",`${creatureInfo.name}`)

                    }
                }

                if(special_abilities_desc.includes("[")){
                    let specialStatText = special_abilities_desc.split("[")[1].split("]")[0];
                    let specialStatsArray = specialStatText.split(' ');
                    if(specialStatsArray.includes("max")&&specialStatsArray.includes("health")){
                        specialStatsArray[specialStatsArray.indexOf("max")]="max health";
                        specialStatsArray.splice([specialStatsArray.indexOf("health")],1);
                    }
                    let value = getSpecialValue(specialStatsArray,creatureInfo);
                    special_abilities_desc = special_abilities_desc.replace(special_abilities_desc.substring(special_abilities_desc.indexOf("["),special_abilities_desc.indexOf("]")+1),`${specialStatText} (${value})`)
                }
                let abilityType= element.abilityType.split("(")[0];
                creature.innerHTML+= `<p class="title">${element.abilityName} (${abilityType})</p>\n<p class="information">${special_abilities_desc}</p>`
                
            });
        }
    break;
        //5e
    case "5e":
        let savingThrows = "";
        let savingThrowsInfo = creatureInfo.saving_throws;
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
        if(creatureInfo.ability){
            creatureInfo.ability.forEach(element=>{
                abilities+="<p class=information5e><b>"+element.abilityName+"</b> ";
                abilities+=element.ability_desc+"</p>";
            })
        }
        let actions ="";
        if(creatureInfo.actions){
            creatureInfo.actions.forEach(element=>{
                actions+="<p class=information5e><b>"+element.actionName+"</b> ";
                    actions+=element.action_desc+"</p>";
                })
        }
        let legendaryActionsDetails = ""
        if(creatureInfo.legendaryAbilities){
            let legendaryActions = creatureInfo.legendaryAbilities.legendaryActions;
            legendaryActions.forEach(element=>{
                legendaryActionsDetails+="<p class=information5e><b>"+element.legendaryName+"</b> ";
                legendaryActionsDetails+=element.legendary_desc+"</p>";
            })
        } 
        let hp = "";
        let trueHp5e = "";
        let hpInformation5e = "";
        trueHp5e = getHP(creatureInfo,sys);
        let conMod = getModifier(creatureInfo.con)*Number(creatureInfo.level);
        if(conMod==0){
            conMod = ""
        }else if(conMod>0){
            conMod = "+" + conMod;
        }
        hpInformation5e = `${creatureInfo.level}${creatureInfo.hitDice}${conMod}`
        if(creatureInfo.setHP){
            trueHp5e = creatureInfo.setHP;
        }
        if(creatureInfo.setHD){
            hpInformation5e = creatureInfo.setHD;
        }
        
        hp = `${trueHp5e}(${hpInformation5e})`
        creature.innerHTML = `<h1>${creatureInfo.name}</h1><p class="information5e">${creatureInfo.size} ${creatureInfo.type}, ${creatureInfo.alignment}</p>
        <div class="taper"></div>
        <p class="information5e"><b>Armor Class</b> ${creatureInfo.ac}</p>
        <p class="information5e"><b>Hit Points</b> ${hp}</p>
        <p class="information5e"><b>Speed</b> ${creatureInfo.speed}</p>
        <div class="taper"></div>
        <div class="flex-container">
        <div class="boldInformation">STR</div><div class="boldInformation">DEX</div><div class="boldInformation">CON</div><div class="boldInformation">INT</div><div class="boldInformation">WIS</div><div class="boldInformation">CHA</div>
        </div>
        <div class="flex-container">
        <div class="information5e">${creatureInfo.str}</div><div class="information5e">${creatureInfo.dex}</div><div class="information5e">${creatureInfo.con}</div>
        <div class="information5e">${creatureInfo.int}</div><div class="information5e">${creatureInfo.wis}</div><div class="information5e">${creatureInfo.cha}</div>
        </div>
        <div class="taper"></div>`
        if(savingThrows.length>0){
            creature.innerHTML+=`<p class="information5e"><b>Saving Throws</b> ${savingThrows}</p>`
        }
        if(creatureInfo.skillsProf){
            let skills5e = "";
            let q = 0;
            let skillList = ['Acrobatics','AnimalHandling','Arcana','Athletics','Athletics','Deception','History','Insight','Intimidation','Investigation','Medicine','Nature','Perception','Performance','Persuasion','Religion','SleightofHand','Stealth','Survival'];
            skillList.forEach(skills=>{
                q++;
                if(q>1){
                    skills5e += ", "
                }
                let skillBonus = 0;
                skillBonus = skillModifier(skills,creatureInfo)+Number(creatureInfo.skillsProf[skills]==true?creatureInfo.proficiency:0);
               skills5e += `${skills} ${skillBonus}` ;
            })
            creature.innerHTML+=`<p class="information5e"><b>Skills</b> ${skills5e}</p>`
        }
        if(creatureInfo.damage_vulnerabilities){
            creature.innerHTML += `<p class="information5e"><b>Vulnerabilities</b> ${creatureInfo.damage_vulnerabilities}</p>`    
        }
        if(creatureInfo.damage_resistances){
            creature.innerHTML += `<p class="information5e"><b>Damage Resistance</b> ${creatureInfo.damage_resistances}</p>`
        }
        if(creatureInfo.damage_immunities){
            creature.innerHTML += `<p class="information5e"><b>Damage Immunities</b> ${creatureInfo.damage_immunities}</p>`
        }
        if(creatureInfo.condition_immunities){
            creature.innerHTML += `<p class="information5e"><b>Condition Immunities</b> ${creatureInfo.condition_immunities}</p>`
        }
        creature.innerHTML += `<p class="information5e"><b>Senses</b> ${creatureInfo.senses}</p>
        <p class="information5e"><b>Challenge</b> ${creatureInfo.cr}(${creatureInfo.xp} XP)</p>
        <div class="taper"></div>`
        if(creatureInfo.ability){
            creature.innerHTML+=`<p>${abilities}</p>`
        }
        if(creatureInfo.actions){
           creature.innerHTML+= `<h2 class="title5e">Actions</h2>
            <hr>
            <p>${actions}</p}
            <hr>
            `
        }
        if(creatureInfo.legendaryAbilities){
            let legAction = creatureInfo.legendaryAbilities;
            creature.innerHTML+=`<h2 class="title5e">Legendary Actions</h2>
        <hr>
        <p class=information5e>${legAction.legendary_details}</p>
        <p>${legendaryActionsDetails}</p>
        
        `
        }
    break;
    default:
        break;
    }
    //cName = list.creatures[i].name;
creatureDisplay.appendChild(creature);
}

function getReachOrSpace(creatureInfo,obtain){
    let isLong = creatureInfo.sizeType;
    switch(creatureInfo.size.toLowerCase()){
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

function getSkill(creatureInfo,skillToGet){
        let skillValue = 0;
        let skills = creatureInfo.skills;
        if(creatureInfo.skills){
            let cSkills = Object.keys(creatureInfo.skills);
             cSkills.forEach(element=>{
                 if (element==skillToGet){
                     skillValue = Number(skills[element]) + skillModifier(element,creatureInfo)+getFeatBonuses(element,creatureInfo.feats,Number(skills[element]),creatureInfo);
                     skillValue = skillValue+getRacialBonus(creatureInfo.racialModifiers,element);
                    }
                })
            }
        if(skillValue>-1){
            return `+${skillValue}`
        }else{
            return skillValue;
        }
}