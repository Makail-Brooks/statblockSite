fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>loadsData(jsonList))
    /**
     * loads information from json
     * @param {array} list 
     */
function loadsData(list){
    let param = new URLSearchParams(window.location.search);
    characterId = param.get("character");
    let sys = list.characters[characterId].system;
    let characterInfo = list.characters[characterId];
    var characterDisplay = document.getElementById("display");
    var character = document.createElement("div");
    document.title = characterInfo.name;
    let senseString="";
    switch(sys){
    case "pathfinder":
        if(characterInfo.senses!=null){
            characterInfo.senses.forEach(senses=>{
                senseString+=senses;
                if(!senses.includes("Perception")){
                    senseString+=", ";
                }
            })
            let senseTitle = " <b>Sense</b>";
            if(senseString!=''){
                senseString=senseTitle.concat(" ",senseString);
            }
            if(characterInfo.aura!=null){
                senseString += "; <b>Aura</b> ";
                let l =0;
                characterInfo.aura.forEach(aura=>{
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
                    let dc = 10+Math.floor(characterInfo.level/2)+getSaveMod(aura.dcStat,characterInfo);
                   auraDC = ", DC " + dc
                }
                if(aura.auraDmg){
                    auraDmg=", "+aura.auraDmg;
                }
                auraDesc = `${auraName}(${auraRadius} ft.${auraDC}${auraDmg})`
                senseString +=auraDesc;
                })
            }
            if(characterInfo.special_abilities!=null){
                characterInfo.special_abilities.forEach(element => {
                    if(element.auraRadius){
                    if(!senseString.includes("Aura")){
                        senseString += "; <b>Aura</b> ";
                    }else{
                        senseString+=", ";
                    }
                    let dc = 10+Math.floor(characterInfo.level/2)+getSaveMod(element.dcStat,characterInfo);
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
        }
        let characterAcBonus = characterInfo.ac.bonuses;
        let acBonuses = "";
        let sign="";
        if(characterAcBonus.armor){
            acBonuses += "+" + characterAcBonus.armor + " armor";
        }
        if(characterAcBonus.deflection){
            if(acBonuses.includes("armor")){
                acBonuses += ", ";
            }
            acBonuses += "+" + characterAcBonus.deflection + " deflection";
        }
        if(characterAcBonus.dex){
            if(acBonuses.includes("armor")||acBonuses.includes("deflection")){
                sign = ", "
            }
            if(characterAcBonus.dex<0){
                sign += "";
            }else{
                sign += "+";
            }
            acBonuses += sign + characterAcBonus.dex + " dex";
        }
        if(characterAcBonus.insight){
            acBonuses += ", +" + characterAcBonus.insight + " insight";
        }
        let altDodgeBonus = getFeatBonuses("dodge",characterInfo.feats,characterAcBonus.dodge,characterInfo);
        if(characterAcBonus.dodge){
            acBonuses += ", +" + (Number(characterAcBonus.dodge) + altDodgeBonus) + " dodge";
        }
        if(altDodgeBonus>0){
            acBonuses += ", +" + altDodgeBonus + " dodge";
        }
        if(characterAcBonus.shield){
            acBonuses += ", +" + characterAcBonus.shield + " shield";
        }
        let altNaturalBonus = getFeatBonuses("natural",characterInfo.feats,characterAcBonus.dodge,characterInfo);
        if(characterAcBonus.natural){
            acBonuses += ", +" + (Number(characterAcBonus.natural)+altNaturalBonus) + " natural";
        }
                if(altNaturalBonus>0){
            acBonuses += ", +" + altNaturalBonus + " dodge";
        }
        if(characterInfo.size!="Medium"){
            let sizeMod = getcharacterSizeMod(characterInfo.size);
            if(sizeMod<0){
                sign = ", ";
            }else{
                sign = ", +";
            }
            acBonuses += sign +sizeMod + " size";
        }
        let extras;
        if(characterAcBonus.extra){
            characterAcBonus.extra.forEach(bonusEl=>{
                extras = Object.keys(bonusEl);
              
            })
              extras.forEach(ex=>{
                characterAcBonus.extra.forEach(bonusEl=>{
                    if(bonusEl[ex]<0){
                sign = ", ";
            }else{
                sign = ", +";
            }
                    acBonuses += sign + bonusEl[ex] + " " + ex
              
            })
              })
        }

        let conBonus = getModifier(characterInfo.con)*Number(characterInfo.level)+getFeatBonuses("con",characterInfo.feats,characterInfo.level,characterInfo);
        let hpInformation = `${characterInfo.level}${characterInfo.hitDice}`;
        if(characterInfo.type.toLowerCase().includes("construct")){
            conBonus=getConstructBonusHealth(characterInfo.size);
        }
        if(conBonus>0){
            hpInformation=hpInformation+`+${conBonus}`;
        }
        let trueHp = getHP(characterInfo,sys);
        if(characterInfo.setHP){
            trueHp = characterInfo.setHP;
        }
        if(characterInfo.setHD){
            hpInformation = characterInfo.setHD;
        }

        let hpNode = `${trueHp}(${hpInformation})`;
        if(characterInfo.hp_traits){
            hpNode += "; " + characterInfo.hp_traits;
        }
        let saves =""
        saves = `<b> Fort </b>`
        let fort = 0;
        if(characterInfo.fort==="Good"){
           fort = 2+ Math.floor(characterInfo.level/2);
        }else if(characterInfo.fort==="Bad"){
            fort = Math.floor(characterInfo.level/3);
        }
        fort = Number(fort) + getModifier(characterInfo.con)+getFeatBonuses("Fort",characterInfo.feats,characterInfo.con)+nonConditionBonus("Fort",characterInfo);
        if(fort<0){
            saves += fort
        }else{
            saves += "+"+fort;
        }
        saves += `<b> Ref </b>`
        let ref = 0;
        if(characterInfo.ref==="Good"){
           ref = 2+ Math.floor(characterInfo.level/2);
        }else if(characterInfo.ref==="Bad"){
            ref = Math.floor(characterInfo.level/3);
        }else{
            ref = characterInfo.ref-getModifier(characterInfo.dex);
        }
        ref = Number(ref) + getFeatBonuses("Reflex",characterInfo.feats,characterInfo.ref)+getModifier(characterInfo.dex)+nonConditionBonus("Ref",characterInfo);
        
        if(ref<0){
            saves += ref;
        }else{
            saves += "+"+ref;
        }
        saves += `<b> Will </b>`
        let will = 0;
        if(characterInfo.will==="Good"){
           will = 2+ Math.floor(characterInfo.level/2);
        }else if(characterInfo.will==="Bad"){
            will = Math.floor(characterInfo.level/3);
        }
        will = Number(will) + getModifier(characterInfo.wis)+ getFeatBonuses("Will",characterInfo.feats,characterInfo.wis)+nonConditionBonus("Will",characterInfo);
        if(will<0){
            saves += will;
        }else{
            saves += "+"+will;
        }
        let saveBonus = "";
        if(characterInfo.saveBonus!=null){
            saveBonus+=";"
        }
        let loop=0;
        if(characterInfo.save_bonuses){
            characterInfo.save_bonuses.forEach(bonuses=>{
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
        if(characterInfo.defensive_traits){
            let DT = characterInfo.defensive_traits;
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
        if(characterInfo.feats){
            characterInfo.feats.forEach(element=>{
                length++;
                if(length>1){
                    featsList+=", "
                }
                featsList+=element;
            })
        }
        let skillsList="";
        length =0;
        if(characterInfo.skills){
            let skills = characterInfo.skills;
            let cSkills = Object.keys(characterInfo.skills);
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
                        skillValue = Number(skills[element]) + skillModifier(element,characterInfo)+getFeatBonuses(element,characterInfo.feats,Number(skills[element]),characterInfo);
                        if(element=="Stealth"){
                            skillValue+=getcharacterSizeMod(characterInfo.size,"fly")*2;
                        }
                        if(element=="Fly"){
                            skillValue+=getcharacterSizeMod(characterInfo.size,"fly");
                        }
                    }else{
                        skills[element].forEach(prof=>{
                            skillValue = Number(prof.Ranks)+Number(skillModifier(element,characterInfo))+getFeatBonuses(prof.Name,characterInfo.feats,Number(prof.Ranks),characterInfo);
                            profInfo = `(${prof.Name})`;
                        })
                    }
                    skillValue = skillValue+getRacialBonus(characterInfo.racialModifiers,element);
                    //+Number(Number(skills[element])>0?3:0)
                    if(skillValue>=0){
                        skillValue = "+" + skillValue;
                    }
                   skillsList+= element + profInfo + " "  + skillValue;
            //     skillsList+=element;
             })
        }
        length =0;
        if(characterInfo.racialModifiers){
            skillsList+="; Racial Modifiers ";
            characterInfo.racialModifiers.forEach(element=>{
                            length++;
            if(length>1){
                skillsList+=", "
            }
            skillsList+=element;
            })
        }
        let languageList="";
        length =0;
        if(characterInfo.languages){
            characterInfo.languages.forEach(element=>{
                length++;
                if(length>1){
                    languageList+=", "
                }
                languageList+=element;
            })
        }
        let SQlist="";
        length =0;
        if(characterInfo.special_qualities){
            characterInfo.special_qualities.forEach(element=>{
                length++;
                if(length>1){
                    SQlist+=", "
                }
                SQlist+=element;
            })
        }
        let spellListPrepared = "";
        let spellListInnate = "";
        if(characterInfo.spell_abilities){

            let characterSpellInfo = characterInfo.spell_abilities;
            if(characterSpellInfo.innate){
                let innate =characterSpellInfo.innate;
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
            if(characterSpellInfo.prepared){
                let prepared = characterSpellInfo.prepared;
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
        let characterTypeInformation = "";
        if(characterInfo.type==="Custom"){
            characterTypeInformation = characterInfo.customType;
        }else{
            characterTypeInformation = characterInfo.type;
        }
        if(characterInfo.subtype!=null){
            characterTypeInformation+=`(${characterInfo.subtype})`;
        }
        let init = getModifier(characterInfo.dex);
        init = init+getFeatBonuses("init",characterInfo.feats,characterInfo.dex);
        character.innerHTML = `<h1>${characterInfo.name}</h1> <p class ="title">${characterInfo.title} <span class="level">CR ${characterInfo.cr}</span></p>
        <p class="information"><b>XP ${getEXP(characterInfo.cr)}</b></p>
        <p class="information">${characterInfo.alignment} ${characterInfo.size} ${characterTypeInformation}</p>
        <p class="information"><b>init</b> ${init}; ${senseString}</p>
        <p class = "divider">DEFENSE</p>
        <p class="information"><b>AC</b> ${Number(characterInfo.ac.armor)+getFeatBonuses("armor",characterInfo.feats,0,characterInfo)}, touch ${Number(characterInfo.ac.touch)+getFeatBonuses("touch",characterInfo.feats,0,characterInfo)}, flat-footed ${Number(characterInfo.ac.flat_foot)+getFeatBonuses("flatfoot",characterInfo.feats,0,characterInfo)}(${acBonuses}) </p>
        <p class="information"><b>hp</b> ${hpNode}</p>
        <p class="information">${saves}${saveBonus}</p>`
        if(characterInfo.defensive_traits){
            character.innerHTML+=`<p class="information">${defensiveTraits}</p>`
        }
        if(characterInfo.weaknesses){
            character.innerHTML+=`<p class="information"><b>Weaknesses</b> ${characterInfo.weaknesses}</p>`
        }
        character.innerHTML+=`<p class = "divider">OFFENSE</p>
        <p class="information"><b>Speed</b> ${characterInfo.speed} ft.</p>`
        let j =0;
        let enchantedGear = [];
        if(characterInfo.melee){
        
        character.innerHTML+=`<p class="information"><b>Melee</b> ${getAttackDetails(characterInfo.melee,characterInfo,enchantedGear,"melee")}</p>`
    }
        j=0;
        if(characterInfo.ranged){
            character.innerHTML+=`<p class="information"><b>Ranged</b> ${getAttackDetails(characterInfo.ranged,characterInfo,enchantedGear,"ranged")}</p>`
        }
        let reachBonusEffect ="";
        if(characterInfo.reach_bonus_effects){
            reachBonusEffect = `(${characterInfo.reach_bonus_effects})`;
        }
        let reach ="";
        if(characterInfo.reach){
            reach = "<b>Reach</b> "+characterInfo.reach;
        }
        let space ="";
        if(characterInfo.space){
            space = `<b>Space</b> ${characterInfo.space};`;
        }
        character.innerHTML+=`<p class="information">${space} ${reach} ${reachBonusEffect}</p>`
        if(characterInfo.special_attacks){
            character.innerHTML+=`<p class="information"><b>Special Attacks</b> ${characterInfo.special_attacks}</p>`
        }
        if(characterInfo.spell_abilities!=null){
            let spellAbilities =characterInfo.spell_abilities;
            let spellLikeCL = ""
            let spellLikeConcentrate = ""
            let preparedCL = ""
            let preparedConcentrate = ""
            spellLikeCL = spellAbilities.innate.CL===null?spellAbilities.innate.CL:characterInfo.level;
            spellLikeConcentrate = spellAbilities.innate.Concentrate===null?spellAbilities.innate.Concentrate:Number(spellLikeCL)+getModifier(getstatValue(spellAbilities.innate.casterMod,characterInfo));
            character.innerHTML+=`<p class="information"><b>Spell-Like Abilities</b>(CL ${spellLikeCL}; Concentration +${spellLikeConcentrate})</p>`
            if(spellAbilities.innate){
                character.innerHTML+=`<p class="spells">${spellListInnate}</p>`
            }
            if(spellAbilities.prepared){
                character.innerHTML+=`<p class="information"><b>Spells Prepared</b>(CL ${preparedCL} ; Concentration +${preparedConcentrate})</p>`
                character.innerHTML +=`<p class="spells">${spellListPrepared}</p>`
            }
        }
        let cmdInformation = Number(characterInfo.cmd)+ getFeatBonuses("CMD",characterInfo.feats,0,characterInfo);
        let indexCMD =0;
        if(characterInfo.cmdMod){
            cmdInformation+= " (";
            let cmdModifier = characterInfo.cmdMod;
            let cmdBonus = "";
            cmdModifier.forEach(modifier=>{
                if(modifier.CMDBonus!=''){
                    cmdBonus = (Number(characterInfo.cmd) + Number(modifier.CMDBonus)) + " ";
                }
                cmdInformation += cmdBonus + modifier.CMDBonusDetails;
                if(cmdModifier.length>1&&indexCMD!=cmdModifier.length-1){
                    cmdInformation += ", ";
                }
                indexCMD++;
            })
            cmdInformation += ")";
        }
        let cmbInformation = Number(characterInfo.cmb)+getFeatBonuses("CMB",characterInfo.feats,0,characterInfo);
        character.innerHTML+=`<p class = "divider">STATISTICS</p>
        <p class="information"><b>Str</b> ${characterInfo.str} <b>Dex</b> ${characterInfo.dex} <b>Con</b> ${characterInfo.con} <b>Int</b> ${characterInfo.int} <b>Wis</b> ${characterInfo.wis} <b>Cha</b> ${characterInfo.cha}</p>
        <p class="information"><b>Base Atk</b> ${getBaB(characterInfo.bab,characterInfo.level)}; <b>CMB</b> ${cmbInformation}; <b>CMD</b> ${cmdInformation}</p>`
        if(featsList.length>0){
            character.innerHTML+=`<p class="information"><b>Feats </b>${featsList}</p>`;
        }
        if(skillsList.length>0){
            character.innerHTML+=`<p class="information"><b>Skills </b>${skillsList}</p>`;
        }
        if(languageList.length>0){
            character.innerHTML+=`<p class="information"><b>Languages </b>${languageList}</p>`;
        }
        let gear = ""
        if(characterInfo.gear){
            gear = characterInfo.gear;
            if(enchantedGear.length>0){
                gear += ", "+enchantedGear.toString().replace(",",", ");
            }
            character.innerHTML+=`<p class="information"><b>Gear</b> ${gear}</p>`
        }else{
            gear = enchantedGear.toString().replace(",",", ");;
            if(gear!=""){
                character.innerHTML+=`<p class="information"><b>Gear</b> ${gear}</p>`
            }
        }
        // if(characterInfo.melee.enchantments||characterInfo.ranged.enchantments){
        //     console.log("hi");
        // }
        if(characterInfo.special_qualities){
            character.innerHTML+=`<p class="information"><b>SQ</b> ${SQlist}</p>`
        }
        if(characterInfo.special_abilities!=null){
        character.innerHTML +=`<p class = "divider">SPECIAL ABILITIES</p>`
            characterInfo.special_abilities.forEach(element => {
                let special_abilities_desc = element.ability_desc;
                if(element.dcStat){
//                    console.log(element.ability_desc.indexOf(findSaveType(element.ability_desc)));
                    let trueSaveType=""
                    let trueSave = 10+Math.floor(characterInfo.level/2)+getSaveMod(element.dcStat,characterInfo);
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
                if(special_abilities_desc.includes("[characterName]")||special_abilities_desc.includes("[charactername]")){
                    while(special_abilities_desc.includes("[characterName]")||special_abilities_desc.includes("[charactername]")){
                        special_abilities_desc = special_abilities_desc.replace("[characterName]",`${characterInfo.name}`)

                    }
                }

                if(special_abilities_desc.includes("[")){
                    let specialStatText = special_abilities_desc.split("[")[1].split("]")[0];
                    let specialStatsArray = specialStatText.split(' ');
                    if(specialStatsArray.includes("max")&&specialStatsArray.includes("health")){
                        specialStatsArray[specialStatsArray.indexOf("max")]="max health";
                        specialStatsArray.splice([specialStatsArray.indexOf("health")],1);
                    }
                    let value = getSpecialValue(specialStatsArray,characterInfo);
                    special_abilities_desc = special_abilities_desc.replace(special_abilities_desc.substring(special_abilities_desc.indexOf("["),special_abilities_desc.indexOf("]")+1),`${specialStatText} (${value})`)
                }
                let abilityType= element.abilityType.split("(")[0];
                character.innerHTML+= `<p class="title">${element.abilityName} (${abilityType})</p>\n<p class="information">${special_abilities_desc}</p>`
                
            });
        }
    break;
        //5e
    case "5e":
        let savingThrows = "";
        let savingThrowsInfo = characterInfo.saving_throws;
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
        if(characterInfo.ability){
            characterInfo.ability.forEach(element=>{
                abilities+="<p class=information5e><b>"+element.abilityName+"</b> ";
                abilities+=element.ability_desc+"</p>";
            })
        }
        let actions ="";
        if(characterInfo.actions){
            characterInfo.actions.forEach(element=>{
                actions+="<p class=information5e><b>"+element.actionName+"</b> ";
                    actions+=element.action_desc+"</p>";
                })
        }
        let legendaryActionsDetails = ""
        if(characterInfo.legendaryAbilities){
            let legendaryActions = characterInfo.legendaryAbilities.legendaryActions;
            legendaryActions.forEach(element=>{
                legendaryActionsDetails+="<p class=information5e><b>"+element.legendaryName+"</b> ";
                legendaryActionsDetails+=element.legendary_desc+"</p>";
            })
        } 
        let hp = "";
        let trueHp5e = "";
        let hpInformation5e = "";
        trueHp5e = getHP(characterInfo,sys);
        let conMod = getModifier(characterInfo.con)*Number(characterInfo.level);
        if(conMod==0){
            conMod = ""
        }else if(conMod>0){
            conMod = "+" + conMod;
        }
        hpInformation5e = `${characterInfo.level}${characterInfo.hitDice}${conMod}`
        if(characterInfo.setHP){
            trueHp5e = characterInfo.setHP;
        }
        if(characterInfo.setHD){
            hpInformation5e = characterInfo.setHD;
        }
        
        hp = `${trueHp5e}(${hpInformation5e})`
        character.innerHTML = `<h1>${characterInfo.name}</h1><p class="information5e">${characterInfo.size} ${characterInfo.type}, ${characterInfo.alignment}</p>
        <div class="taper"></div>
        <p class="information5e"><b>Armor Class</b> ${characterInfo.ac}</p>
        <p class="information5e"><b>Hit Points</b> ${hp}</p>
        <p class="information5e"><b>Speed</b> ${characterInfo.speed}</p>
        <div class="taper"></div>
        <div class="flex-container">
        <div class="boldInformation">STR</div><div class="boldInformation">DEX</div><div class="boldInformation">CON</div><div class="boldInformation">INT</div><div class="boldInformation">WIS</div><div class="boldInformation">CHA</div>
        </div>
        <div class="flex-container">
        <div class="information5e">${characterInfo.str}</div><div class="information5e">${characterInfo.dex}</div><div class="information5e">${characterInfo.con}</div>
        <div class="information5e">${characterInfo.int}</div><div class="information5e">${characterInfo.wis}</div><div class="information5e">${characterInfo.cha}</div>
        </div>
        <div class="taper"></div>`
        if(savingThrows.length>0){
            character.innerHTML+=`<p class="information5e"><b>Saving Throws</b> ${savingThrows}</p>`
        }
        if(characterInfo.skillsProf){
            let skills5e = "";
            let q = 0;
            let skillList = ['Acrobatics','AnimalHandling','Arcana','Athletics','Athletics','Deception','History','Insight','Intimidation','Investigation','Medicine','Nature','Perception','Performance','Persuasion','Religion','SleightofHand','Stealth','Survival'];
            skillList.forEach(skills=>{
                q++;
                if(q>1){
                    skills5e += ", "
                }
                let skillBonus = 0;
                skillBonus = skillModifier(skills,characterInfo)+Number(characterInfo.skillsProf[skills]==true?characterInfo.proficiency:0);
               skills5e += `${skills} ${skillBonus}` ;
            })
            character.innerHTML+=`<p class="information5e"><b>Skills</b> ${skills5e}</p>`
        }
        if(characterInfo.damage_vulnerabilities){
            character.innerHTML += `<p class="information5e"><b>Vulnerabilities</b> ${characterInfo.damage_vulnerabilities}</p>`    
        }
        if(characterInfo.damage_resistances){
            character.innerHTML += `<p class="information5e"><b>Damage Resistance</b> ${characterInfo.damage_resistances}</p>`
        }
        if(characterInfo.damage_immunities){
            character.innerHTML += `<p class="information5e"><b>Damage Immunities</b> ${characterInfo.damage_immunities}</p>`
        }
        if(characterInfo.condition_immunities){
            character.innerHTML += `<p class="information5e"><b>Condition Immunities</b> ${characterInfo.condition_immunities}</p>`
        }
        character.innerHTML += `<p class="information5e"><b>Senses</b> ${characterInfo.senses}</p>
        <p class="information5e"><b>Challenge</b> ${characterInfo.cr}(${characterInfo.xp} XP)</p>
        <div class="taper"></div>`
        if(characterInfo.ability){
            character.innerHTML+=`<p>${abilities}</p>`
        }
        if(characterInfo.actions){
           character.innerHTML+= `<h2 class="title5e">Actions</h2>
            <hr>
            <p>${actions}</p}
            <hr>
            `
        }
        if(characterInfo.legendaryAbilities){
            let legAction = characterInfo.legendaryAbilities;
            character.innerHTML+=`<h2 class="title5e">Legendary Actions</h2>
        <hr>
        <p class=information5e>${legAction.legendary_details}</p>
        <p>${legendaryActionsDetails}</p>
        
        `
        }
    break;
    default:
        break;
    }
    //cName = list.characters[i].name;
characterDisplay.appendChild(character);
}


