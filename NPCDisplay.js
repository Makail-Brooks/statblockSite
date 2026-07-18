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
    let NPCDisplay = document.getElementById("display");
    let NPC = document.createElement("div");
    document.title = NPCInfo.name;
    let senseString="";
    switch(sys){
    case "pathfinder":
        if(NPCInfo.monsterAbilities){
            var monsterAbilities = NPCInfo.monsterAbilities;
        }
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
            let senseTitle = " <b>Senses</b>";
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
                    let dc = getSaveDC(NPCInfo,aura.dcStat);
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
                    if(!senseString.includes("<b>Aura</b>")){
                        senseString += "; <b>Aura</b> ";
                    }else{
                        senseString+=", ";
                    }
                    let dc = getSaveDC(NPCInfo,element.dcStat);
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
            if(checkMonsterAbilities(NPCInfo,"aura")){
                let list = ["Fear","UnnaturalAura","FrightfulPresence","Stench"];
                list.forEach(item=>{
                    if(getMonsterAbility(item,monsterAbilities)!=""){
                    let textValue = displayMonsterAbility(getMonsterAbility(item,monsterAbilities),NPCInfo);
                    if(textValue!=""){
                        if(!senseString.includes("<b>Aura</b>")){
                            senseString += "; <b>Aura</b> ";
                        }else{
                            senseString+=", ";
                        }
                        senseString += textValue;
                    }
                }
                })
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
        if(NPCInfo.type.toLocaleLowerCase().includes("construct")){
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
        let hpAbilities = ["Regeneration","FastHealing"];
        hpAbilities.forEach(abilityName=>{
            if(getMonsterAbility(abilityName,monsterAbilities)!=""){
                
                hpNode += "; " + displayMonsterAbility(getMonsterAbility(abilityName,monsterAbilities),NPCInfo);
            }
        })
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
                sign = ", "
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
        if(checkMonsterAbilities(NPCInfo,"saveBonus")){
            if(saveBonus==""){
                saveBonus+="; "
            }else{
                saveBonus +=", "
            }
            saveBonus+= `psychic resilience +4`
        }
        let defensiveTraits ="";
        let length=0;
        let wasInNPCList = [];
        if(NPCInfo.defensive_traits){
            let DT = NPCInfo.defensive_traits;
            traits = Object.keys(DT);
            traits.forEach(ex=>{
                wasInNPCList.push(ex);
                length++;
                if(length>1){
                    defensiveTraits+="; "
                }
                let skill = DT[ex];
                ex = ex.replace("_"," ")
                defensiveTraits += `<b>${ex}</b>` +" " + skill;
                if(checkMonsterAbilities(NPCInfo,ex)){
                    defensiveTraits+=`, ${displayDefenses(monsterAbilities,ex)}`;
                }
            })
        }
        if(monsterAbilities!=null){
            let DT = ["Defensive_Abilities","DR","Immune","Resist","SR"];
            DT.forEach(ex=>{
                
                if(!wasInNPCList.includes(ex)){
                    ex = ex.replace("_"," ")
                    if(checkMonsterAbilities(NPCInfo,ex)){
                        defensiveTraits += `<b>${ex}</b>` +" ";
                        defensiveTraits+=`${displayDefenses(monsterAbilities,ex)}`;
                    }
                }
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
        if(checkMonsterAbilities(NPCInfo,"language")){
            if(languageList!=""){
                languageList+="; "
            }
            languageList+=displayMonsterAbility(getMonsterAbility("Telepathy",monsterAbilities),NPCInfo);
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
        if(checkMonsterAbilities(NPCInfo,"SQ")){
            if(SQlist!=""){
                SQlist+=", "
            }
            let list =["PowerfulBlows","ChangeShape"];
            list.forEach(item=>{
                if(getMonsterAbility(item,monsterAbilities)!=""){
                    console.log(list);
                    SQlist+=displayMonsterAbility(getMonsterAbility(item,monsterAbilities),NPCInfo);
                }
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
        if(defensiveTraits!=""){
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
            if(NPCInfo.melee.length>0){
            
            NPC.innerHTML+=`<p class="information"><b>Melee</b> ${getAttackDetails(NPCInfo.melee,NPCInfo,enchantedGear,"melee")}</p>`
        }
        }
        j=0;
        if(NPCInfo.ranged){
            if(NPCInfo.ranged.length>0){
                NPC.innerHTML+=`<p class="information"><b>Ranged</b> ${getAttackDetails(NPCInfo.ranged,NPCInfo,enchantedGear,"ranged")}</p>`
            }
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
        if(NPCInfo.special_attacks||checkMonsterAbilities(NPCInfo,"specialAttacks")){
            let special_attacks = ""
            let k = 0;
            if(NPCInfo.special_attacks){
                NPCInfo.special_attacks.forEach(attack=>{
                    if(k>0){
                        special_attacks += ", "
                    }
                    special_attacks+=createSpecialAttackDisplay(attack,NPCInfo);
                    k++;
                })
                if(special_attacks!=""){
                    special_attacks+=", "
                }
            }
            if(checkMonsterAbilities(NPCInfo,"specialAttacks")){
                special_attacks+=getSpecialAttacks(NPCInfo,monsterAbilities);
            }
            if(special_attacks!=""){
                NPC.innerHTML+=`<p class="information"><b>Special Attacks</b> ${special_attacks}</p>`
            }
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
        if(SQlist!=""){
            NPC.innerHTML+=`<p class="information"><b>SQ</b> ${SQlist}</p>`
        }
        let monsterSpecial = false;
        monsterAbilities.forEach(ability=>{

                if(checkMonsterAbilitiesLocation(getMonsterKeys(ability),"specialAbilities")){
                    monsterSpecial = true;
                }
            })
        
        if(NPCInfo.special_abilities!=null||monsterSpecial){
        NPC.innerHTML +=`<p class = "divider">SPECIAL ABILITIES</p>`
        if(monsterAbilities!=null){
                monsterAbilities.forEach(ability=>{
                console.log(ability)

                if(checkMonsterAbilitiesLocation(getMonsterKeys(ability),"specialAbilities")){
                    let informationArray = displayMonsterAbility(ability,NPCInfo)
                    NPC.innerHTML+=`<p class="title">${informationArray[0]} (Improve This) (${informationArray[1]})</p>\n<p class="information">${informationArray[2]}</p>`
                }
            })
        }
        if(NPCInfo.special_abilities!=null){
            NPCInfo.special_abilities.forEach(element => {
                let special_abilities_desc = element.ability_desc;
                if(element.dcStat){
//                    console.log(element.ability_desc.indexOf(findSaveType(element.ability_desc)));
                    let trueSaveType=""
                    let trueSave = getSaveDC(NPCInfo,element.dcStat);
                    let condensedString = special_abilities_desc;
                    while(special_abilities_desc.includes("[saveDC]")){
                        special_abilities_desc = special_abilities_desc.replace("[saveDC]",`${trueSave} ${element.saveType}`)
                        // condensedString = condensedString.substring().toLocaleLowerCase();
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
                NPC.innerHTML+= `<p class="specialAbilities" onclick="toggleHidableElements('${spacelessCapitalizedCaseCharacter(element.abilityName)}','content-item')">${element.abilityName} (${abilityType})</p>`
                NPC.innerHTML+=`\n<div class="content-item active"id=${spacelessCapitalizedCaseCharacter(element.abilityName)}> <p> ${special_abilities_desc}</p></div>`
                
            });
        }
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
    switch(NPCInfo.size.toLocaleLowerCase()){
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


function getClassDisplayList(NPCInfo){
  let cList = NPCInfo.class;
  let cDataString = "";
  let i=0;
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
    let classDetails = NPCInfo.class;
    let hpInfo="";
    let l=0;
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

function getDrainOrDamageDisplay(ability,id,NPCInfo){
    console.log(ability);
    id = id.toLocaleLowerCase().replace("ability","");
    console.log(id)
    let returnText = `${ability.damage}${ability.dice} ${shortHandToFull(ability.stat)} ${id}`;
    if(ability.displaySaveDC){
        returnText += `, DC ${getSaveDC(NPCInfo,ability.saveAbilityScore)}`;
    }
    return returnText;
}

function getSpecialAbilitiesDisplay(ability,json,NPCInfo=""){
    let details = "";
    let attackNameList = "";
    let name = addSpaces(ability);
    switch(ability){
        case "ArchdevilTraits":
            return [name,json.abilityType,`An archdevil rules a domain in Hell. Archdevils are lawful evil outsiders with a minimum CR of 26. Archdevils share the following traits and have the devil subtype (unless otherwise noted in a creature's entry)\n.
                <ul>
<li>An archdevil can grant spells as if it were a deity. Each archdevil has a favored weapon and grants the Evil and Law domains, plus two other domains and four subdomains.</li>
<li>An archdevil's natural weapons, as well as any weapons it wields, are treated as epic, evil, and lawful for the purpose of overcoming damage reduction.</li>
<li><b>Frightful Presence (Su)</b>: An archdevil can activate its frightful presence as a free action as part of any attack, special attack, or spell-like ability, or by speaking aloud.</li>
<li><b>Infernal Resurrection (Ex)</b>: If an archdevil is killed, its body crumbles into ashes, leaving behind any gear it held or carried, while it is immediately restored to life (as per true resurrection) in a location of its choosing in its domain. An archdevil can't use this ability again for 1 year, and it avoids direct combat if possible until that year has passed. If slain again or killed by unusual methods (such as by a true deity or an artifact created for this purpose), an archdevil is slain forever. An archdevil who does not control a domain does not gain this ability (and is technically an infernal duke rather than a true archdevil).</li>
<li><b>Immunities</b>: Ability damage, ability drain, charm, compulsion, death effects, energy drain, and petrification.</li>
<li><b>Language Mastery (Ex)</b>: An archdevil knows all languages, as though using a tongues spell, although this ability is not supernatural and cannot be dispelled. Linguistics is always a class skill for an archdevil.</li>
<li><b>Regeneration (Ex)</b>: Only mythic damage or damage from a creature of equal or greater standing (such as another archdevil, deity, empyreal lord, Great Old One, Horseman, or qlippoth lord) interrupts an archdevil's regeneration.</li>
<li><b>Resistance</b> acid/cold 30.</li>
<li><b>Summon Devils (Sp)</b>: Three times per day as a swift action, an archdevil can summon any devil or combination of devils whose total combined CR is 20 or lower. This otherwise works like the summon universal monster rule with a 100% chance of success, and it counts as a 9th-level spell effect.</li>
<li>Telepathy 300 feet.</li>
</ul>
`]
        case "DemonLordTraits":
            return [name,json.abilityType,`A demon lord is a powerful, unique demon that rules a layer of the Abyss. All demon lords are chaotic evil outsiders that are, at a minimum, CR 26. Demon lords have a particular suite of traits (unless otherwise noted in a creature's entry) as summarized here.
<ul>
<li>A demon lord can grant spells to its worshipers as if it were a deity. A demon lord's domains are Chaos, Evil, and two other domains relevant to its theme and interests. Like a deity, a demon lord has a favored weapon.<l/i>
<li>A demon lord's natural weapons, as well as any weapons it wields, are treated as chaotic, epic, and evil for the purpose of overcoming damage reduction.<l/i>
<li><b>Abyssal Resurrection (Ex)</b>: A demon lord rules an Abyssal realm, a vast world that not only serves as its home but provides it with power. If a demon lord is slain, its body rapidly melts into corruption (leaving behind any gear it held or carried), its soul returns to a hidden location within its realm, and it is immediately restored to life (as true resurrection) at that location. Once this occurs, a demon lord can't use this ability again until a full year has passed. A demon lord realizes it is vulnerable during this time and usually doesn't risk further battles for the remainder of that year, relying on the defenses of its realm and its legions of minions to protect it. A demon lord that is slain again during this year or is killed by unusual methods (such as by a true deity or an artifact created for this purpose) is slain forever—its remains appearing somewhere deep in the Abyss among other dead demon lords from the ages. A demon lord who does not control a domain does not gain this ability.<l/i>
<li><b>Frightful Presence (Su)</b>: A demon lord can activate its frightful presence as a free action as part of any attack, spell-like ability, special attack, or by speaking aloud.<l/i>
<li>Immunity to ability damage, ability drain, charm effects, compulsion effects, death effects, energy drain, and petrification.<l/i>
<li><b>Regeneration (Ex)</b>: Only epic and good damage, or damage from a creature of equal or greater power (such as an archdevil, deity, demon lord, or protean lord) interrupts a demon lord's regeneration.<l/i>
<li><b>Resistance</b> Demon lords have resistance to acid 30, cold 30, and fire 30.<l/i>
<li><b>Summon Demons (Sp)</b>: Three times per day as a swift action, a demon lord can summon any demon or combination of demons whose total combined CR is 20 or lower. This otherwise works like the summon universal monster rule with a 100% chance of success, and counts as a 9th-level spell effect.<l/i>
<li>Telepathy 300 feet.<l/i>
</ul>`]
        case "EmpyrealLordTraits":
            return [name,json.abilityType,`Empyreal lords are the greatest members of the agathion, angel, archon, and azata races, and are sometimes worshiped as if they were deities. All empyreal lords are good outsiders that are, at a minimum, CR 21. In addition to having agathion, angel, archon, or azata traits, Empyreal lords have a particular suite of traits (unless otherwise noted in a creature's entry) as summarized here.
<ul>
<li>An empyreal lord's natural weapons, as well as any weapons he or she wields, are treated as epic and good for the purpose of overcoming damage reduction. If the empyreal lord is chaotic or lawful, these attacks also count as that alignment for the purpose of overcoming damage reduction.</li>
<li>Agathion, angel, archon, or azata energy resistances are increased to 30.</li>
<li>An empyreal lord can grant spells to its worshipers as if it were a deity. An empyreal lord's domains are Chaos (if chaotic), Good, Law (if lawful), and two other domains relevant to its theme and interests (or three if it is neither chaotic nor lawful). Like a deity, an empyreal lord has a favored weapon.</li>
<li>Blindsense 60 feet.</li>
<li><b>Greater Teleport (Sp)</b>: An empyreal lord can use greater teleport at will (caster level 20th).</li>
<li>Immunity to ability damage, ability drain, charm effects, compulsion effects, death effects, energy drain, and petrification.</li>
<li><b>Primal Aura (Su)</b>: An aura of primeval power surrounds every empyreal lord. The effects of this aura are unique to each empyreal lord.</li>
<li><b>Regeneration (Ex)</b>: Only epic and evil damage, or damage from a creature of equal or greater power (such as an archdevil, deity, demon lord, or protean lord) interrupts an empyreal lord's regeneration.</li>
<li><b>Seed of Life (Sp)</b>: An empyreal lord can touch a willing creature and imbue it with magical healing power. The target radiates an aura of good as if it were an outsider and gains a +2 insight bonus on all saving throws against negative energy and death effects. As a standard action, the target can release this energy, turning it inward as a heal spell upon itself or outward as a mass cure serious wounds spell on allies within 30 feet (caster level 15th). If not released, the energy dissipates harmlessly after 24 hours. The empyreal lord can use this ability 5 times per day, but only on other creatures.</li>
</ul>`]
        case "FormianTraits":
            return [name,json.abilityType,`Formians are a spacefaring race of insectlike creatures from a forest world that aggressively colonize other worlds. A formian possesses the following traits (unless otherwise noted in a creature's entry).
<ul>
<li>Darkvision 60 feet and blindsense 30 feet.<l/i>
<li><b>Hive Mind (Ex)</b>: Formians share a telepathic bond with other members of their hive that enhances their hive mates' perception. As long as a formian is within telepathic range of at least one hive mate, it gains a +4 racial bonus on initiative checks and Perception checks. If at least one formian disbelieves an illusion, all formians within its telepathic range are also considered to disbelieve that illusion. If one formian is aware of combatants, all other hive mates within the range of its telepathy are also aware of those combatants.<l/i>
<li>Resistance to sonic 10.<l/i>
<li><b>Telepathic Caster (Ex)</b>: Due to a formian's telepathic nature, if it casts spells it does so as spell-like abilities.<l/i>
<li>Telepathy 60 ft.<l/i>
</ul>`]
        case "HorsemanTraits":
            return [name,json.abilityType,`A Horseman is a powerful, unique daemon that rules a major portion of Abaddon and personifies Death, Famine, Pestilence, or War. All Horsemen are evil outsiders that are, at a minimum, CR 27. Horsemen have a particular suite of traits (unless otherwise noted in a creature's entry) as summarized here.
<ul>
<li>A Horseman can grant spells to its worshipers as if it were a deity. A Horseman's domains are Evil and three other domains and four subdomains relevant to its theme and interests. Like a deity, a Horseman has a favored weapon.</li>
<li>A Horseman's natural weapons, as well as any weapons it wields, are treated as epic and evil for the purpose of overcoming damage reduction.</li>
</ul>`]
        case "QlippothLordTraits":
            return [name,json.abilityType,`A qlippoth lord is a powerful, unique qlippoth that once ruled a region of the Abyss but has been forced to retreat to forgotten corners of reality deep in the Abyss. At the dawn of creation, qlippoth lords were powerful creatures, perhaps even on par with deities, but today they have dwindled to a pale shadow of that power. Still, they remain potent dangers to mortal life in the rare instances when they are encountered. All qlippoth lords are chaotic evil qlippoth in the range of CR 21 to CR 25. Qlippoth lords have a particular suite of traits (unless otherwise noted in a creature's entry), as summarized here.
<ul>
<li>A qlippoth lord can grant spells to its worshipers as if it were a deity. A qlippoth lord's domains are Chaotic and Evil, plus two other domains and four subdomains relevant to its theme and interests. Like a deity, a qlippoth lord has a favored weapon.</li>
<li>A qlippoth lord's natural weapons, as well as any weapons it wields, are treated as chaotic, epic, and evil for the purpose of overcoming damage reduction.</li>
<li><b>Horrific Appearance (Su)</b>: This ability functions similarly to the typical qlippoth ability, save that a qlippoth lord's horrific appearance creates physical effects and changes in its victims. Despite these physical effects, a qlippoth lord's horrific appearance remains a mind-affecting effect.</li>
<li>Immunity to cold, death effects, mind-affecting effects, and poison.</li>
</ul>`]
        case "Disease":
        case "Poison":
            if(json.name!=""){
                name = json.name;
            }
            json.contact.forEach(contact=>{
                if(contact.active){
                    if(attackNameList!=""){
                        attackNameList+=" or ";
                    }
                    attackNameList += contact.name
                }
            })
            if(attackNameList!=""){
                details+=`${attackNameList}-`
            }
            details+=`${json.infliction}; save Fort ${getSaveDC(NPCInfo,getModifier(NPCInfo.con))} <i>onset</i> ${json.onset}; <i>frequency</i> ${json.frequency}; <i>effect</i> ${json.effect}; <i>cure</i> ${json.cure}`
            return [name,json.abilityType,details]
        default:
            return ['Default','Ex','No matching instance']
    }
    
}

function displayBlows(id,ability){
    let i =0;
    let text = addSpaces(id)+"(";
    ability.attacks.forEach(attack=>{
        let name = attack.name
        if(i>0){
            text+=`, `
        }
        if(attack.active){
            text+=name
            i++;
        }
        // let numRay =[0,1,2,3,4,5,6,7,8,9];
        // console.log(!isNaN(name[0]));
        // let stopLoop = false;
        // Array.from(name).forEach(element=>{
        //     if(stopLoop){
        //         return
        //     }
        //     console.log(element);
        //     console.log(isNaN(element));
        //     if(isNaN(element)){
        //         stopLoop = true;
        //     }
        //     console.log(name)
        //     console.log(name[i+1])
        //     if(element==" "&&isNaN(name[i+1])){
        //        name=name.replace(/[0-9] /g, '') 
        //        stopLoop=true;
        //         if(name[name.length-1].toLocaleLowerCase()=='s'){
        //             name = name.slice(0,-1)
        //         }
        //     }
        //     i++;
        // })
        // console.log(name);
        // if(!isNaN(name[0])){
        //     name=name.replace(/[0-9] /g, '')
        // }
        // if(name[name.length-1].toLocaleLowerCase()=='s'){
        //     name[name.length-1]
        // }
    })
    text+=")"
    return text
}

function displaySpecialAttacksMonster(NPCInfo,ability,id){
    let number = 1;
    let text = "";
    let attackData = "";
    if(id=="Rend"||id=="Rake"){
        ability.attacks.forEach(attack=>{
            if(attack.active){
                if(text!=""){
                    text+=", "
                }
                attackData = NPCInfo.melee[attack.index]
                if(id=="Rend"){
                    text += `Rend(hits needed ${attackData.name}, bonus damage)`;
                }else{
                    let damage = ""
                    if(attackData.weaponType.toLocaleLowerCase()=="custom"){
                        damage = `${attackData.diceCount}${attackData.damageDice}`
                    }else{
                        let diceArray = ['d4','d6','d8','d10','d12','d20']
                        damage = `${attackData.diceCount}${diceArray[attackData.damageDice]}`
                    }
                    let bab=0;
                    bab = getBaB(NPCInfo.bab,NPCInfo.level);
                    let toHit = getModifier(NPCInfo.str)+(bab)+getFeatBonuses("meleeattack",NPCInfo.feats,bab,NPCInfo,attackData.name);
                    if(toHit>-1){
                        toHit = `+${toHit}`
                    }
                    text += `Rake(attacks ${attackData.name} ${toHit}, ${damage}+${getModifier(NPCInfo.str)})`;
                }
            }
        })
    }
    if(id=="BloodDrain"){
        text = `blood drain(${ability.damage}${ability.dice} Constitution)`
    }
    if(id=="Constrict"||id=="Trample"){
        let strMod = getModifier(NPCInfo.str);
        let strBonus = ""
        let str = 0;
        if(str>-1){
            if(id=="Trample"){
                str = strMod+strMod*0.5;
            }else{
                str = strMod
            }
            strBonus = `+${str}`
        }else{
            
            if(id=="Trample"){
                str = strMod+strMod*0.5;
            }else{
                str = strMod
            }
            strBonus=str;
        }
        text = `${id}(${ability.damage}${ability.dice}${strBonus})`
        if(id=="Trample"){
            text = text.replace(")",`, DC ${getSaveDC(NPCInfo,strMod)})`);
        }
    }
    if(id=="BreathWeapon"){
        text = `breath weapon(${ability.rangeAmount}-ft. ${ability.rangeType}, ${ability.damage}${ability.dice} damageType damage, ${ability.saveType} DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.con))} for half, usable every ${ability.recharge}${ability.diceRecharge} rounds. Extra details in special abilities)`
    }
    return text;
}


function displayDefensive(NPCInfo,ability,id){
    switch(id){
        case "ChannelResistance":
            break;
        case "PsychicResilience":
            break;
    }
}

function checkActive(ability){
    console.log(ability)
}

function displayMonsterAbility(ability,NPCInfo,section=""){
    let id = Object.keys(ability)[0]
    ability = ability[id]
    console.log(id);
    switch(id){            
        case "AbilityDamage":
        case "AbilityDrain":
            return getDrainOrDamageDisplay(ability,id,NPCInfo);
        case "ArchdevilTraits":
        case "DemonLordTraits":
        case "EmpyrealLordTraits":
        case "FormianTraits":
        case "HorsemanTraits":
        case "QlippothLordTraits":
            return getSpecialAbilitiesDisplay(id,ability);
        case "Attach":
        case "Grab":
        case "Trip":
            return id
        case "PowerfulBlows":
            return displayBlows(id,ability);
        case "Bleed":
        case "Burn":
            return id
        case "Rend":
        case "Rake":
        case "BloodDrain":
        case "Constrict":
        case "Trample":
        case "BreathWeapon":
            return displaySpecialAttacksMonster(NPCInfo,ability,id);
        case "ChangeShape":
            return `change shape(${ability.details})Needs improved`;
        case "ChannelResistance":
        case "PsychicResilience":
            return displayDefensive(NPCInfo,ability,id);
        case "Disease":
        case "Poison":
        case "Curse":
            if(section=="attack"||section=="specialAttack"){
                return ability.name
            }else{
                return getSpecialAbilitiesDisplay(id,ability,NPCInfo);
            }
        case "CurseofLycanthropy":
            return "Curse of Lycanthropy"
        case "EnergyDrain":
            if(section=="attack"){
                return "energy drain";
            }
            if(section=="specialAttack"){
                let drainedLevels = ability.levelsDrained;
                if(drainedLevels>1){
                    drainedLevels += " levels"
                }else{
                    drainedLevels += " level"
                }
                return `energy drain(${drainedLevels}, DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.cha))})`
            }
        case "Engulf":
            return `engulf (DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.str))}, ${ability.damage}${ability.dice} add damage type option here and ${ability.damageTypeandEffects})`
        case "Entrap":
            if(section=="attack"){
                return id
            }else{                
                return `entrap (DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.con))}, ${ability.duration}${ability.dice} minutes, hardness ${ability.hardness}, hp ${ability.hp})`
            }
        case "Web":
            let bonus = (getModifier(NPCInfo.dex)+getBaB(NPCInfo.bab,NPCInfo.level))
            if(bonus>-1){
                bonus = `+${bonus}`
            }
            return `web (${bonus} ranged touch, DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.con))}, ${ability.hp} hp)`
        case "FastHealing":
            return `fast healing ${ability.rate}`
        case "Fear":
            if(ability.area!="Aura" && section=="specialAttack"){
                return `fear cone(${ability.range} ft., DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.cha))})`;            
            }else if(section!="specialAttack"){
                if(ability.area=="Aura"){
                    return `fear aura(${ability.range} ft., DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.cha))})`;
                }else{
                    return "";
                }
            }else{
                return "";
            }
        case "RockThrowing":
            return `rock throwing (${ability.range} ft.)`
        case "Telepathy":
            return `telepathy ${ability.range} ft.`
        case "UnnaturalAura":
            return `Unnatural Aura (${ability.range} ft.)`
        case "FrightfulPresence":
            return `frightful presence ${ability.auraRange} ft., DC ${getSaveDC(NPCInfo,getModifier(NPCInfo.cha))}`
        case "Heat":
            return `heat(${ability.damage} incomplete)`
        case "Stench":
            return `stench(${ability.damage} incomplete)`
        case "MentalStaticAura":
            return "Has not been Implemented"
        case "Jet":
            return "Has not been Implemented"
        case "LycanthropicEmpathy":
            return "Has not been Implemented"
        case "MythicPower":
            return "Has not been Implemented"
        case "MythicMagic":
            return "Has not been Implemented"
        case "Paralysis":
            return "Has not been Implemented"
        case "PoisonousBlood":
            return "Has not been Implemented"
        case "Pull":
            return "Has not been Implemented"
        case "Push":
            return "Has not been Implemented"
        case "Regeneration":
            return `${id} ${ability.rate}(${ability.howtoDisable})`
        case "Summon":
            return "Has not been Implemented"
        case "SwallowWhole":
            return "Has not been Implemented"
        case "Whirlwind":
            return "Has not been Implemented"
        default:
            return " Value Was not defined"
    }
}


function getMonsterAbility(id,json){
    let idReturn = ""
    if(json==null){
        return "";
    }
    json.forEach(element=>{
        if(getMonsterKeys(element)==id)
        idReturn = element
        
    });
    return idReturn;
}

function displayDefenses(abilities,section){
    let text = "";
    let i = 0;
    i=0;
    switch(section){
        case "Defensive Abilities":
            abilities.forEach(element=>{
                if(defenseAbilities.includes(getMonsterKeys(element))){
                    if(i>0){
                        text+=', '
                    }
                    let id = getMonsterKeys(element);
                    text += addSpaces(id);
                    if(id=="Split"){
                        text+="(";
                    }
                    let keyList = Object.keys(abilities[i][id])
                    if(!keyList.includes("empty")){
                        keyList.forEach(key=>{
                            let bonusInfo = abilities[i][id][key];
                            if(!isNaN(bonusInfo)&&key!="hp"){
                                if(bonusInfo>-1){
                                    bonusInfo = ` +${bonusInfo}`
                                }
                            }else if(!isNaN(bonusInfo)&&key=="hp"){
                                bonusInfo = `, ${bonusInfo} HP`
                            }
                            text += bonusInfo;
                        })
                    }
                    if(id=="Split"){
                        text+=")"
                    }
                }
                i++;
            })
            break;
        case "Immune":
            abilities.forEach(element=>{
                if(immuneAbilities.includes(getMonsterKeys(element))){
                if(immuneAbilities.includes(getMonsterKeys(element))){
                    if(i>0){
                        text+=', '
                    }
                    text += addSpaces(getMonsterKeys(element));
                    i++;
                }
                }
            })
            break;
    }
    return text;
}

function displayAbilityAttacks(NPCInfo,i,noDamage=false){
    let attackAbilities = ["AbilityDamage","AbilityDrain","Attach","Bleed","Burn","Curse","CurseofLycanthropy","Disease","EnergyDrain","Entrap","Grab","Paralysis","Poison","Pull","Push","Trip"]
    let selectedAbilitiesArray =[]
    let text = ""
    let listLength = 0
    console.log(i)
    let monsterSection = NPCInfo.monsterAbilities;
    selectedAbilitiesArray = getAbilityList(NPCInfo)
    selectedAbilitiesArray.forEach(element=>{
    if(attackAbilities.includes(element)){
        let section = monsterSection[0][element];
        if(section.attacks[i-1].active){
            console.log(element);
            if(!noDamage){
                if(listLength>0){
                text+=` and ${displayMonsterAbility(getMonsterAbility(element,NPCInfo.monsterAbilities),NPCInfo,"attack")}`
                }else{
                text+=` plus ${displayMonsterAbility(getMonsterAbility(element,NPCInfo.monsterAbilities),NPCInfo,"attack")}`
                }
                listLength++;
            }else{
                
                if(listLength>0){
                text+=` and ${displayMonsterAbility(getMonsterAbility(element,NPCInfo.monsterAbilities),NPCInfo,"attack")}`
                }else{
                text+=`${displayMonsterAbility(getMonsterAbility(element,NPCInfo.monsterAbilities),NPCInfo,"attack")}`
                }
                listLength++;
            }
      }
    }
    })
    return text;
}
function displayUniqueAttacks(NPCInfo,i,noDamage=false,extraPresent=false){
    let text=""
    let listLength = 0;
    selectedAbilitiesArray = NPCInfo.melee[i-1].uniqueDamageBonus
    let selectedAbilitiesArrayLength =0;
    if(selectedAbilitiesArray!=null){
        selectedAbilitiesArrayLength = selectedAbilitiesArray.length;
    }
    if(extraPresent){
        listLength++;
        selectedAbilitiesArrayLength++;
    }
    if(selectedAbilitiesArray!=null){
    selectedAbilitiesArray.forEach(element=>{
        console.log(element);
        if(!noDamage){
            if(listLength==selectedAbilitiesArrayLength-1&&listLength>0){
              text+=` and ${element}`
            }else if(listLength>0 &&listLength<selectedAbilitiesArrayLength){
                text+=`, ${element}`
            }else{
              text+=` plus ${element}`
            }
            listLength++;
        }else{
            
            if(listLength==selectedAbilitiesArrayLength-1&&listLength>0){
              text+=` and ${element}`
            }else if(listLength>0 &&listLength<selectedAbilitiesArrayLength){
                text+=`, ${element}`
            }else{
              text+=` plus ${element}`
            }
            listLength++;
        }
      
    })
    }
  return text;
}

function getAbilityList(NPCInfo){
  let monsterAbilities = NPCInfo.monsterAbilities;
  let selectedAbilitiesArray =[]
  monsterAbilities.forEach(el=>{
            selectedAbilitiesArray.push(getMonsterKeys(el))
        })
    return selectedAbilitiesArray;
}

let attackAbilities = ["AbilityDamage","AbilityDrain","Attach","Bleed","Burn","Curse","CurseofLycanthropy","Disease","EnergyDrain","Entrap","Grab","Paralysis","Poison","Pull","Push","Trip"]
let defenseAbilities = ["All-AroundVision","Amorphous","ChannelResistance","DamageReduction","Ferocity","Fortification","Incorporeal","Natural Invisibility","Negative Energy Affinity","Poisonous Blood","Psychic Resilience","Rock Catching","Split","Unstoppable","PsychicResilience"]
let immuneAbilities = ["UndeadTraits","ConstructTraits","OozeTraits","PlantTraits"]
let SQAbilities = ["PowerfulBlows","ChangeShape"]
let saveBonusAbilities = ["PsychicResilience"]
let specialAttacksList = ["Rend","Breath Weapon","Rake","BloodDrain","Constrict","Trample","BreathWeapon","Curse","CurseofLycanthropy","EnergyDrain","Engulf","Entrap","Web","Fear","RockThrowing","Heat"]
let specialAbilitiesMonster = ["Disease","Poison"]
let auraList = ["Fear","UnnaturalAura","FrightfulPresence","Stench"];
let languageCheck = ["Telepathy"]
/**
 * 
 * @param {json} NPCInfo 
 * @param {string} section 
 * @returns 
 */
function checkMonsterAbilities(NPCInfo,section){
  let monsterAbilities = NPCInfo.monsterAbilities;
  if(monsterAbilities==null){
    return false;
  }
  let selectedAbilitiesArray =[]
  let abilitiesArray; 
  switch(section){
    case "attack":
      abilitiesArray = attackAbilities;
      break;
    case "Defensive Abilities":
        abilitiesArray = defenseAbilities;
        break;
    case "Immune":
        abilitiesArray=immuneAbilities;
        break;
    case "SQ":
        abilitiesArray=SQAbilities;
        break;
    case "saveBonus":
        abilitiesArray=saveBonusAbilities;
        break;
    case "specialAbilities":
        abilitiesArray=specialAbilitiesMonster;
        break;
    case "specialAttacks":
        abilitiesArray = specialAttacksList;
        break;
    case "aura":
        abilitiesArray=auraList;
        break;
    case "language":
        abilitiesArray=languageCheck;
        break;
  }
  if(abilitiesArray==null){
    return false
  }
  let hasAbility = false;
  let loop =0;
  selectedAbilitiesArray = getAbilityList(NPCInfo)
    selectedAbilitiesArray.forEach(element=>{
        if(abilitiesArray.includes(element)){
        hasAbility = true;
      }
    })
  return hasAbility;
}
/**
 * 
 * @param {json} item 
 * @param {json} NPCInfo 
 * @returns 
 */
function createSpecialAttackDisplay(item,NPCInfo){
    if(item.variation){
        switch(item.variation){
            case "Attack":
                let dataInfo = getSingleAttackToHit(item,NPCInfo)
                let toHit = dataInfo[0];
                let bonusDamageString = "";
                if(dataInfo[1]!=0){
                    let bonusDamage = dataInfo[1];
                    if(bonusDamage>0){
                        bonusDamageString = `+${bonusDamage}`;
                    }else{
                        bonusDamage = `${bonusDamage}`;
                    }
                }
                return `${item.name}(${item.attack} ${toHit}, ${item.diceCount}${item.damageDice}${bonusDamageString})`
            case "Save":   
                let saveTypeDisplay = "";
                if(item.saveThrowCheck){
                    saveTypeDisplay = ` ${item.saveThrow} Save`
                }
                return `${item.name}(DC ${getSaveDC(NPCInfo,item.saveThrow)}${saveTypeDisplay}, ${item.diceCount}${item.damageDice})`
            case "Bonus Damage":
                return `${item.name} +${item.diceCount}${item.damageDice}`
            case "Save Only":
                return `${item.name} (DC ${getSaveDC(NPCInfo,item.saveStat)})`
        }
    }else{
        return item.name;
    }
}
/**
 * 
 * @param {json} NPCInfo 
 * @param {int} saveStat 
 * @returns 
 */
function getSaveDC(NPCInfo,saveStat){
    return 10+Math.floor(NPCInfo.level/2)+getSaveMod(saveStat,NPCInfo)
}
/**
 * 
 * @param {json} id 
 * @param {json} NPCInfo 
 * @returns 
 */
function getSingleAttackToHit(id,NPCInfo){
    console.log(id)
        let bab=0;
        bab = getBaB(NPCInfo.bab,NPCInfo.level);
        let abilityBonus = getModifier(NPCInfo.dex);
        console.log(id.attackType)
        if(id.attackType==="melee"){
            abilityBonus=getModifier(NPCInfo.str);
        }
        let toHit = abilityBonus+(bab)+getFeatBonuses(id.attackType+"attack",NPCInfo.feats,bab,NPCInfo,id.name);
        if(id.toHitModifier){
            toHit+=Number(id.toHitModifier);
        }
        if(toHit>=0){
            toHit = "+"+toHit;
        }
        let dataInfo =[]
        dataInfo.push(toHit)
        dataInfo.push(abilityBonus);
        return dataInfo
}


function getSpecialAttacks(NPCInfo,monsterAbilities){
    let text = ""
    let ability = "";
    if(monsterAbilities!=null){
        monsterAbilities.forEach(item=>{
            ability = getMonsterKeys(item)
            if(specialAttacksList.includes(ability)){
                if(text!=""){
                    text+=", "
                }
                text += displayMonsterAbility(item,NPCInfo,"specialAttack")
            }
        })
    }
    return text;
}

function checkMonsterAbilitiesLocation(ability,location){
    let checkArray = []
    switch(location){
        case "specialAbilities":
            checkArray = specialAbilitiesMonster;
    }
    if(checkArray.includes(ability)){
        return true;
    }
return false;
}