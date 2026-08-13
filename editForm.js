fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>editCurNPC(jsonList))
/**
 * 
 * @param {Array} listInformation 
 */

/**
 * 
 * @param {json} listInformation json
 */
function editCurNPC(listInformation){
let id = sessionStorage.getItem("NPC");
let param = new URLSearchParams(window.location.search);
id = param.get("NPC");
let NPCInfo = listInformation.NPCs[id];
let system;
system = sessionStorage.getItem("system");
let page = sessionStorage.getItem("state").toLocaleLowerCase();
page = param.get("Doc")
generateForum(page);

let resetButtonDisplay = document.getElementById("resetButton");
let resetButton = document.createElement("button");
resetButton.setAttribute("class","button");
resetButton.setAttribute("onClick",`resetEdit(${JSON.stringify(NPCInfo)},'${system}')`);
resetButton.textContent = "Reset";
resetButtonDisplay.appendChild(resetButton);
readJsonData(NPCInfo,system);
updateSaveValues()
updateClasses();
updateMiscDropdown();
checkSpells();
setTimeout(() => {
    if(NPCInfo.monsterAbilities){
        let abilities = NPCInfo.monsterAbilities;
        abilities.forEach(el=>{
            let id = Object.keys(el)[0]
            monsterAbilitiesEdit("monsterAbilities",id,el)
            modifyList("monsterAbilities")
            modifyList("sense")
        })
    }
    if(NPCInfo.special_attacks!=null){
        NPCInfo.special_attacks.forEach(specialAttack=>{
            if(specialAttack.variation=="Attack"){
                doSpecialAttackAddition(specialAttack)
            }
        }
    )};
}, 0);

}

/**
 * 
 * @param {json} NPCInfo 
 * @param {string} sys 
 */
function readJsonData(NPCInfo,sys){
    let i=0;
    let selectionID = 0;
    // let cSize = String(NPCInfo.size).toLocaleLowerCase()
    //     switch(cSize){
    //         case "fine":
    //             selectionID = 0;
    //             fine = "selected";
    //             break;
    //         case "diminutive":
    //             selectionID = 1;
    //             diminutive = "selected";
    //             break;
    //         case "tiny":
    //             selectionID = 2;
    //             tiny = "selected";
    //             break;
    //         case "small":
    //             selectionID = 3;
    //             small = "selected";
    //             break;
    //         case "medium":
    //             selectionID = 4;
    //             medium = "selected";
    //             break;
    //         case "large":
    //             selectionID = 5;
    //             large = "selected";
    //             break;
    //         case "huge":
    //             selectionID = 6;
    //             huge = "selected";
    //             break;
    //         case "gargantuan":
    //             selectionID = 7;
    //             gargantuan = "selected";
    //             break;
    //         case "colossal":
    //             selectionID = 8;
    //             colossal = "selected";
    //             break;
    //     }
    switch(sys){
        case "pathfinder":

// let formInputs=document.getElementsByClassName("searchBarCreation");
// for(let i=0;formInputs.length>i;i++){
//     formInputs.item(i).addEventListener("contextmenu",(e)=>{e.preventDefault()})
// }
    document.getElementById("NPCName").value = NPCInfo.name;
    if(NPCInfo.NPCType==null){
        document.getElementById("NPCChoice").value="Monster";
    }else{
        document.getElementById("NPCChoice").value=NPCInfo.NPCType; 
    }
    updateFormOnType();
    document.getElementById("NPCType")[getChoiceSelection(['Aberration','Animal','Construct','Dragon','Fey','Humanoid','Magical Beast','Monstrous Humanoid','Ooze','Outsider','Plant','Undead','Vermin','Custom'],NPCInfo.type)].selected=true;
    if(NPCInfo.type==="Custom"){
        document.getElementById("customType").value=NPCInfo.customType;
    }
    document.getElementById("NPCTitle").value = NPCInfo.title;
    document.getElementById("NPCCR")[getChoiceSelection(['1/8','1/6','1/4','1/3','1/2','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],NPCInfo.cr)].selected=true;
    document.getElementById("MonsterLevel").value = NPCInfo.level;
    document.getElementById("NPCFort").value = NPCInfo.fort;
    document.getElementById("NPCRef").value = NPCInfo.ref;
    document.getElementById("NPCWill").value = NPCInfo.will;
    document.getElementById("NPCAlignment")[getChoiceSelection(['LE','LN','LG','NG','N','NE','CE','CN','CG'],NPCInfo.alignment)].selected=true;
    document.getElementById("NPCStr").value = NPCInfo.str;
    document.getElementById("NPCDex").value = NPCInfo.dex;
    document.getElementById("NPCCon").value = NPCInfo.con;
    document.getElementById("NPCInt").value = NPCInfo.int;
    document.getElementById("NPCWis").value = NPCInfo.wis;
    document.getElementById("NPCCha").value = NPCInfo.cha;
    if(NPCInfo.spheres!=null){
        document.getElementById("usesSphereOption").checked=NPCInfo.spheres;
        adjustDisplay("Sphere");
    }
    document.getElementById("NPCHitDice")[getChoiceSelection(['d4','d6','d8','d10','d12'],NPCInfo.hitDice)].selected=true;
    if(NPCInfo.rate!=null){
                document.getElementById("NPCHitDiceRate")[getChoiceSelection(['Monster','Player'],NPCInfo.rate)].selected=true
    }else{
        document.getElementById("NPCHitDiceRate")[0].selected=true;
    }
    document.getElementById("NPCBaB")[getChoiceSelection(['fast','medium','slow'],NPCInfo.bab)].selected=true;
    document.getElementById("NPCSkillProgression")[getChoiceSelection(['high','middle','low'],NPCInfo.skillProgression)].selected=true;
    document.getElementById("NPCSize")[getChoiceSelection(['fine','diminutive','tiny','small','medium','large','huge','gargantuan','colossal'],NPCInfo.size)].selected = true;
    document.getElementById("isItLongOption").checked = NPCInfo.sizeType;
        i =0;
        if(NPCInfo.speed!=null){
            let speedValue = NPCInfo.speed;
            Object.keys(NPCInfo.speed).forEach(speed=>{
                    getDropDownSelection(speed,'speed',speedValue);
                    i++;
            })
        }
        if(NPCInfo.senses!=null){
            let senseValue = NPCInfo.senses;
            Object.keys(NPCInfo.senses).forEach(senses=>{
                if(!senses.toLocaleLowerCase().includes("perception")){
                    getDropDownSelection(senses,'sense',senseValue);
                    i++;
                }
            })
        }
        if(NPCInfo.class!=null){
            NPCInfo.class.forEach(classes=>{
                getDropDownSelection(classes.name,'classes',classes)
                classListenerSetup(classes.name.toLocaleLowerCase());
            })
        }
       // senseString!='';
       i=0;
        if(NPCInfo.aura!=null){
            NPCInfo.aura.forEach(aura=>{
                createDualInformation('aura','Aura','Radius','Aura','Aura','Radius','text','number',true,false,false,false,true);
                document.getElementById(`auraAura${i}`).value=aura.name;
                document.getElementById(`auraRadius${i}`).value=aura.radius;
                if(aura.dcStat){
                    document.getElementById(`saveDCaura${i}Option`).checked = true;
                    document.getElementById(`saveDCaura${i}`).style.display = "block";
                    document.getElementById(`dcStataura${i}`)[getChoiceSelection(['Str','Dex','Con','Int','Wis','Cha'],aura.dcStat)].selected=true;
                }
                if(aura.auraDmg){
                    document.getElementById(`auraDmgaura${i}Option`).checked = true;
                    document.getElementById(`auraDmgaura${i}`).style.display = "block";
                    document.getElementById(`auraDmgaura${i}`).value = aura.auraDmg;
                }
                i++;
            })
        }
        if(NPCInfo.setHD||NPCInfo.setHP){
                document.getElementById("setHPInformationOption").checked = true;
                if(NPCInfo.setHP){
                    document.getElementById("NPCSetHP").value=NPCInfo.setHP;
                }
                if(NPCInfo.setHD){
                    document.getElementById("NPCSetHD").value=NPCInfo.setHD;
                }
        }
        if(NPCInfo.subtype!=null){
        document.getElementById("Subtype").value=NPCInfo.subtype;
        document.getElementById("SubtypeOption").checked=true;
        }
        let NPCAcBonus = NPCInfo.ac.bonuses;
        if(NPCAcBonus.armor){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("armorOption").checked = true;
            document.getElementById("armor").value = NPCAcBonus.armor;
        }
        if(NPCAcBonus.deflection){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("deflectionOption").checked = true;
            document.getElementById("deflection").value = NPCAcBonus.deflection;
        }
        if(NPCAcBonus.dodge){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("dodgeOption").checked = true;
            document.getElementById("dodge").value = NPCAcBonus.dodge;
        }
        if(NPCAcBonus.shield){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("shieldOption").checked = true;
            document.getElementById("shield").value = NPCAcBonus.shield;
        }
        if(NPCAcBonus.natural){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("naturalOption").checked = true;
            document.getElementById("natural").value = NPCAcBonus.natural;
        }
        let extras;
        i=0;
        if(NPCAcBonus.extra){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("extraBonusesOption").checked = true;
            NPCAcBonus.extra.forEach(bonusEl=>{
                extras = Object.keys(bonusEl);
                extras.forEach(ex=>{
                    createDualInformation('extra','name','amount','Extra Bonus','Bonus Name','Bonus Amount','text','number')
                    NPCAcBonus.extra.forEach(bonusEl=>{
               document.getElementById(`extraname${i}`).value = ex;
               document.getElementById(`extraamount${i}`).value = bonusEl[ex];
                i++;
//                    acBonuses += sign + bonusEl[ex] + " " + ex
              
            })
              })
              
            })
        }
        if(NPCInfo.gear){
            document.getElementById("gear").value=NPCInfo.gear;
        }
        if(NPCInfo.weaknesses){
            document.getElementById("weaknessOption").checked = true;
            document.getElementById("weakness").value=NPCInfo.weaknesses;
        }
        if(NPCInfo.melee){
            document.getElementById("meleeOption").checked = true;
            getAttackInformation(NPCInfo.melee,"melee");
        }
        if(NPCInfo.ranged){
            document.getElementById("rangeOption").checked = true;
            getAttackInformation(NPCInfo.ranged,"range");
        }
        i=0;
        if(NPCInfo.save_bonuses){
            NPCInfo.save_bonuses.forEach(bonuses=>{
                createArrayChoice('saveBonus','Save Bonus','Save Bonus Amount');
                document.getElementById(`saveBonus${i}`).value = bonuses;
            })
        }
        if(NPCInfo.defensive_traits){
                let DT = NPCInfo.defensive_traits
                traits = Object.keys(DT);
              traits.forEach(ex=>{
                    if(ex==="Defensive_Abilities"){
                        document.getElementById("DAOption").checked = true;
                        document.getElementById("DA").value = DT[ex];
                        
                    }
                    if(ex==="DR"){
                        document.getElementById("DROption").checked = true;
                        document.getElementById("DR").value = DT[ex];
                    }
                    if(ex==="Immune"){
                        document.getElementById("ImmuneOption").checked = true;
                        document.getElementById("Immune").value = DT[ex];
                    }
                    if(ex==="Resist"){
                        document.getElementById("ResistOption").checked = true;
                        document.getElementById("Resist").value = DT[ex];
                    }
                    if(ex==="SR"){
                        document.getElementById("SROption").checked = true;
                        document.getElementById("SR").value = DT[ex];
                    }
            })
        }
        i=0;
        if(NPCInfo.feats){
            let featArrayList = NPCInfo.feats;
            Object.keys(NPCInfo.feats).forEach(feats=>{
                    getDropDownSelection(feats,'feat',featArrayList);
                                i++;
            })
        }
        i=0;
        if(NPCInfo.skills){
            let skills = NPCInfo.skills;
            let cSkills = Object.keys(NPCInfo.skills);
            doSkills(cSkills,skills);
        }
        i=0;
        if(NPCInfo.spell_abilities){
            if(NPCInfo.spell_abilities){
                document.getElementById("usesSpellOption").checked=true;
                adjustDisplay('Spell');
            let NPCSpellInfo = NPCInfo.spell_abilities;
            if(NPCSpellInfo.innate){
                let innate = NPCSpellInfo.innate;
                if(innate.CL||innate.concentrate){
                    document.getElementById("innateCasterLevelOption").checked = true;
                    document.getElementById("innateCasterLevel").style.display = "block";
                }
                if(innate.CL){
                    document.getElementById("CLInnate").value=innate.CL;
                }
                if(innate.concentrate){
                    document.getElementById("ConcentrateInnate").value=innate.concentrate;
                }
                
                document.getElementById("spellsInnateOption").checked = true;
                if(innate.constant){
                    document.getElementById("constantOption").checked = true;
                    document.getElementById("constant").value = innate.constant;
                }
                if(innate.atWill){
                    document.getElementById("atWillOption").checked = true;
                    document.getElementById("atWill").value = innate.atWill;
                }
                if(innate.xDay){
                    document.getElementById("xDayOption").checked = true;
                    innate.xDay.forEach(spell=>{
                        let list = spell.substring(spell.indexOf("-")+1);
                        let days = spell.substring(0,spell.indexOf("/")).trim();
                        createDualInformation('xDay','perDay','List','xDay Spell','Amount Per Day','SpellList','number','text');
                        document.getElementById(`xDayperDay${i}`).value = days;
                       document.getElementById(`xDayList${i}`).value = list;
                        i++;

    
                    })
                }
                document.getElementById("NPCSpellModInnate").value=innate.casterMod;
            }
            if(NPCSpellInfo.prepared){
                let prepared = NPCSpellInfo.prepared;
                if(prepared.CL||prepared.concentrate){
                    document.getElementById("preparedCasterLevelOption").checked = true;
                    document.getElementById("preparedCasterLevel").style.display = "block";
                }
                if(prepared.CL){
                    document.getElementById("CLPrepared").value=prepared.CL;
                }
                if(prepared.concentrate){
                    document.getElementById("ConcentratePrepared").value=prepared.concentrate;
                }
                document.getElementById("NPCSpellModPrepared").value=prepared.casterMod;
                document.getElementById("spellsPreparedOption").checked = true;
                if(prepared.ninth){
                    document.getElementById("ninth").value = prepared.ninth;
                    document.getElementById("ninthOption").checked = true;
                    document.getElementById("ninth").style.display = "block";
                }
                if(prepared.eighth){
                    document.getElementById("eighth").value = prepared.eighth;
                    document.getElementById("eighthOption").checked = true;
                    document.getElementById("eighth").style.display = "block";
                }
                if(prepared.seventh){
                    document.getElementById("seventh").value = prepared.seventh;
                    document.getElementById("seventhOption").checked = true;
                    document.getElementById("seventh").style.display = "block";
                }
                if(prepared.sixth){
                    document.getElementById("sixth").value = prepared.sixth;
                    document.getElementById("sixthOption").checked = true;
                    document.getElementById("sixth").style.display = "block";
                }
                if(prepared.fifth){
                    document.getElementById("fifth").value = prepared.fifth;
                    document.getElementById("fifthOption").checked = true;
                    document.getElementById("fifth").style.display = "block";
                }
                if(prepared.fourth){
                    document.getElementById("fourth").value = prepared.fourth;
                    document.getElementById("fourthOption").checked = true;
                    document.getElementById("fourth").style.display = "block";
                }
                if(prepared.third){
                    document.getElementById("third").value = prepared.third;
                    document.getElementById("thirdOption").checked = true;
                    document.getElementById("third").style.display = "block";
                }
                if(prepared.second){
                    document.getElementById("second").value = prepared.second;
                    document.getElementById("secondOption").checked = true;
                    document.getElementById("second").style.display = "block";
                }
                if(prepared.first){
                    document.getElementById("first").value = prepared.first;
                    document.getElementById("firstOption").checked = true;
                    document.getElementById("first").style.display = "block";
                }
                if(prepared.zeroth){
                    document.getElementById("zeroth").value = prepared.zeroth;
                    document.getElementById("zerothOption").checked = true;
                    document.getElementById("zeroth").style.display = "block";
                }
            }
        }
        }
        i=0;
        if(NPCInfo.racialModifiers){
            let racialMod = NPCInfo.racialModifiers;
            Object.keys(racialMod).forEach(racialModifier=>{
                    getDropDownSelection(racialModifier,'racialMod',racialMod);
                i++;
            })
        }
        i=0;
        if(NPCInfo.languages){
            NPCInfo.languages.forEach(element=>{
                getDropDownSelection(element,'language');
                i++;
            })
        }
        i=0;
        if(NPCInfo.special_qualities!=null){
            NPCInfo.special_qualities.forEach(element=>{
                createArrayChoice('SQ','Special Quality','Special Quality Name')
                document.getElementById(`SQ${i}`).value = element;
                i++;
            })
        }
        if(NPCInfo.reach_bonus_effects){
            document.getElementById("reach_bonus_effectsOption").checked = true;
            document.getElementById(`reach_bonus_effects`).value = NPCInfo.reach_bonus_effects;
        }
        
        i=0;
        if(NPCInfo.special_abilities!=null){
            NPCInfo.special_abilities.forEach(element => {
                createDualInformation('SpecialAbility','Name','Details','Special Ability','Special Ability Name','Special Ability Details','text','text',true,true,true,true,false,true);
                document.getElementById(`SpecialAbilityName${i}`).value = element.abilityName;
                document.getElementById(`SpecialAbilityDetails${i}`).value= element.ability_desc;
                if(element.dcStat){
                    document.getElementById(`saveDCSpecialAbility${i}Option`).checked = true;
                    document.getElementById(`saveDCSpecialAbility${i}`).style.display = "block";
                    document.getElementById(`dcStatSpecialAbility${i}`)[getChoiceSelection(['Str','Dex','Con','Int','Wis','Cha'],element.dcStat)].selected=true;
                    document.getElementById(`saveTypeSpecialAbility${i}`)[getChoiceSelection(['Ref','Fort','Will'],element.saveType)].selected=true;
                }
                let type = element.abilityType.split("(")[0];
                document.getElementById(`uniqueTraitSpecialAbility${i}`)[getChoiceSelection(['Su','Ex','Sp'],type)].selected=true;
                if(element.auraRadius){
                    document.getElementById(`auraSpecialAbility${i}Option`).checked = true;
                    document.getElementById(`auraSpecialAbility${i}`).style.display = "block";
                    document.getElementById(`auraRadiusSpecialAbility${i}`).value=Number(element.auraRadius);
                }
                i++;
                
            });
        }
        i=0;
        if(NPCInfo.cmdMod){
            NPCInfo.cmdMod.forEach(cmdModifier=>{
                createDualInformation('cmdMod','Details','Bonus','cmdMod','CMD Modifier Details','CMD Modifier Value','text','number')
                let CMDBonusDetails = cmdModifier.CMDBonusDetails;
                let CMDBonus = cmdModifier.CMDBonus;
                document.getElementById(`cmdModDetails${i}`).value=CMDBonusDetails;
                document.getElementById(`cmdModBonus${i}`).value=Number(CMDBonus);
                i++;
            })
        }
    i=0;
    if(NPCInfo.special_attacks!=null){
        NPCInfo.special_attacks.forEach(specialAttack=>{
            createSpecialAttackSetup()
            document.getElementById(`specialAttack${i}`).value = specialAttack.name;
            if(specialAttack.displayAttributes==true){
                document.getElementById(`specialAttackZone${i}Option`).checked=true;
                document.getElementById(`specialAttackZone${i}`).setAttribute("style","display:block")
                document.getElementById(`choicesSpecial${i}`)[getChoiceSelection(['Attack','Save','Bonus Damage','Save Only'],specialAttack.variation)].selected=true;
                switch(specialAttack.variation){
                        case "Attack":
                            document.getElementById(`specialAttackToHitBonus${i}`).value=specialAttack.toHit;
                            document.getElementById(`specialAttackdiceCount${i}`).value=specialAttack.diceCount;
                            document.getElementById(`damageDicespecialAttack${i}`)[getChoiceSelection(['d4','d6','d8','d10','d12'],specialAttack.damageDice)].selected=true;
                            document.getElementById(`saveDiv${i}`).setAttribute("style","display:none");
                            document.getElementById(`attackDiv${i}`).setAttribute("style","display:block");
                            document.getElementById(`damageDiv${i}`).setAttribute("style","display:block");
                            break;
                        case "Save":
                            document.getElementById(`savingThrowTypeZone${i}Option`).checked=specialAttack.saveThrowCheck;
                            if(specialAttack.saveThrowCheck){
                                document.getElementById(`savingThrowTypeZone${i}`).setAttribute("style","display:block");
                                document.getElementById(`throwTypespecialAttack${i}`)[getChoiceSelection(['Ref','Fort','Will'],specialAttack.saveThrow)].selected=true;
                            }
                            document.getElementById(`dcStatspecialAttack${i}`)[getChoiceSelection(['Str','Dex','Con','Int','Wis','Cha'],specialAttack.saveStat)].selected=true
                            document.getElementById(`specialAttackdiceCount${i}`).value=specialAttack.diceCount;
                            document.getElementById(`damageDicespecialAttack${i}`)[getChoiceSelection(['d4','d6','d8','d10','d12'],specialAttack.damageDice)].selected=true;
                            if(specialAttack.perDayChecked){
                                document.getElementById(`perDayZone${i}Option`).checked=true;
                                document.getElementById(`perDayZone${i}`).setAttribute("style","display:block");
                                document.getElementById(`specialAttackperDay${i}`).value=specialAttack.perDaySpecial;
                            }
                            document.getElementById(`saveDiv${i}`).setAttribute("style","display:block");
                            document.getElementById(`attackDiv${i}`).setAttribute("style","display:none");
                            document.getElementById(`damageDiv${i}`).setAttribute("style","display:block");
                            break;
                        case "Bonus Damage":
                            document.getElementById(`specialAttackdiceCount${i}`).value=specialAttack.diceCount;
                            document.getElementById(`damageDicespecialAttack${i}`)[getChoiceSelection(['d4','d6','d8','d10','d12'],specialAttack.damageDice)].selected=true;
                            document.getElementById(`attackDiv${i}`).setAttribute("style","display:none");
                            document.getElementById(`saveDiv${i}`).setAttribute("style","display:none");
                            document.getElementById(`damageDiv${i}`).setAttribute("style","display:block");
                            break;
                        case "Save Only":      
                            document.getElementById(`savingThrowTypeZone${i}Option`).checked=specialAttack.saveThrowCheck;
                            if(specialAttack.saveThrowCheck){
                                document.getElementById(`savingThrowTypeZone${i}`).setAttribute("style","display:block");
                                document.getElementById(`throwTypespecialAttack${i}`)[getChoiceSelection(['Ref','Fort','Will'],specialAttack.saveThrow)].selected=true;
                            }
                            document.getElementById(`dcStatspecialAttack${i}`)[getChoiceSelection(['Str','Dex','Con','Int','Wis','Cha'],specialAttack.saveStat)].selected=true
                            if(specialAttack.perDayChecked){
                                document.getElementById(`perDayZone${i}Option`).checked=true;
                                document.getElementById(`perDayZone${i}`).setAttribute("style","display:block");
                                document.getElementById(`specialAttackperDay${i}`).value=specialAttack.perDaySpecial;
                            }
                            document.getElementById(`attackDiv${i}`).setAttribute("style","display:none");
                            document.getElementById(`damageDiv${i}`).setAttribute("style","display:none");
                            document.getElementById(`saveDiv${i}`).setAttribute("style","display:block");
                            break;

                }
                // const selectedItemInput = document.getElementById(`dropdownSelectionspecialAttackAttackList0`).value="s";

//                selectedItemInput.value = "test";
            }
                i++;
        })
    }
    
    doMeleeInsertion(NPCInfo)
    

    // arrayToggle('bonusAC',['Container','Armor','Deflection','Dodge','Shield','Natural','Extra']);
    // arrayToggle('defensiveTraits',['Container','DA','DR','Immune','Resist','SR']);
    // arrayToggle('spells',['Container','InnateOption','PreparedOption']);
    toggle('Subtype');
    toggle('weakness');
    toggle('armor');
    toggle('deflection');
    toggle('dodge');
    toggle('shield');
    toggle('natural');
    toggle('extraBonuses');
    toggle('DA');
    toggle('DR');
    toggle('Immune');
    toggle('Resist');
    toggle('SR');
    arrayToggle('spellsInnate',['Container','Constant','atWill','xDay']);
    toggle('constant');
    toggle('atWill');
    toggle('xDay');
    arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth']);
    // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    toggle('setHPInformation');
    updateHealthDisplay();
    
    break;
        
        case "5e":
        let cSize = String(NPCInfo.size).toLocaleLowerCase()
        switch(cSize){
            case "tiny":
                selectionID = 0;
                tiny = "selected";
                break;
            case "small":
                selectionID = 1;
                small = "selected";
                break;
            case "medium":
                selectionID = 2;
                medium = "selected";
                break;
            case "large":
                selectionID = 3;
                large = "selected";
                break;
            case "huge":
                selectionID = 4;
                huge = "selected";
                break;
            case "gargantuan":
                selectionID = 5;
                gargantuan = "selected";
                break;
            default:
                selectionID = 2;
                break;
        }
            document.getElementById("NPCHitDice")[getChoiceSelection(['d4','d6','d8','d10','d12','d20'],NPCInfo.hitDice)].selected=true;
            document.getElementById("NPCName").value=NPCInfo.name;
            document.getElementById("NPCType").value=NPCInfo.type;
            document.getElementById("NPCCR").value=NPCInfo.cr;
            document.getElementById("NPCLevel").value=NPCInfo.level;
            document.getElementById("NPCSpeed").value=NPCInfo.speed;
            document.getElementById("NPCSize")[selectionID].selected=true;
            document.getElementById("NPCStr").value=NPCInfo.str;
            document.getElementById("NPCDex").value=NPCInfo.dex;
            document.getElementById("NPCCon").value=NPCInfo.con;
            document.getElementById("NPCInt").value=NPCInfo.int;
            document.getElementById("NPCWis").value=NPCInfo.wis;
            document.getElementById("NPCCha").value=NPCInfo.cha;
            document.getElementById("NPCProficiency").value;
            document.getElementById("ac").value=NPCInfo.ac;
            document.getElementById("NPCAlignment").value=NPCInfo.alignment;
            document.getElementById("NPCSense").value=NPCInfo.senses;
            document.getElementById("NPCProficiency").value = NPCInfo.proficiency;
            if(NPCInfo.saving_throws.str){
                document.getElementById("StrSavingThrowProficiencyOption").checked = true;
            }
            if(NPCInfo.saving_throws.dex){
                document.getElementById("DexSavingThrowProficiencyOption").checked = true;
            }
            if(NPCInfo.saving_throws.con){
                document.getElementById("ConSavingThrowProficiencyOption").checked = true;
            }
            if(NPCInfo.saving_throws.int){
                document.getElementById("IntSavingThrowProficiencyOption").checked = true;
            }
            if(NPCInfo.saving_throws.wis){
                document.getElementById("WisSavingThrowProficiencyOption").checked = true;
            }
            if(NPCInfo.saving_throws.cha){
                document.getElementById("ChaSavingThrowProficiencyOption").checked = true;
            }
            
            let skillList5e = ['Acrobatics','AnimalHandling','Arcana','Athletics','Athletics','Deception','History','Insight','Intimidation','Investigation','Medicine','Nature','Perception','Performance','Persuasion','Religion','SleightofHand','Stealth','Survival'];
            skillList5e.forEach(skills=>{
                document.getElementById(`${skills}ProficiencyOption`).checked=NPCInfo.skillsProf[skills];
            }
                );

            if(NPCInfo.setHD||NPCInfo.setHP){
                document.getElementById("setHPInformationOption").checked = true;
                if(NPCInfo.setHP){
                    document.getElementById("NPCSetHP").value=NPCInfo.setHP;
                }
                if(NPCInfo.setHD){
                    document.getElementById("NPCSetHD").value=NPCInfo.setHD;
                }
            }
            if(NPCInfo.damage_vulnerabilities){
                document.getElementById("damage_vulnerabilities").value = NPCInfo.damage_vulnerabilities;
                document.getElementById("damage_vulnerabilitiesOption").checked = true;
                document.getElementById("damage_vulnerabilities").style.display = "block";
            }
            if(NPCInfo.damage_resistances){
                document.getElementById("damage_resistances").value=NPCInfo.damage_resistances;
                document.getElementById("damage_resistancesOption").checked = true;
                document.getElementById("damage_resistances").style.display = "block";
            }
            if(NPCInfo.damage_immunities){
                document.getElementById("damage_immunities").value=NPCInfo.damage_immunities;
                document.getElementById("damage_immunitiesOption").checked = true;
                document.getElementById("damage_immunities").style.display = "block";
            }
            if(NPCInfo.condition_immunities){
                document.getElementById("condition_immunities").value=NPCInfo.condition_immunities;
                document.getElementById("condition_immunitiesOption").checked = true;
                document.getElementById("condition_immunities").style.display = "block";
            }    
            if(NPCInfo.ability){
                NPCInfo.ability.forEach(element=>{
                    createDualInformation('Ability','name','details','Ability','Ability Name','Ability Details','text','text');
                    document.getElementById(`Abilityname${i}`).value = element.abilityName;
                    document.getElementById(`Abilitydetails${i}`).value = element.ability_desc;
                    i++;
                })  
            }
            i=0;
            if(NPCInfo.actions){
                NPCInfo.actions.forEach(element=>{
                    createDualInformation('Action','name','details','Action','Action Name','Action Details','text','text');
                    document.getElementById(`Actionname${i}`).value = element.actionName;
                    document.getElementById(`Actiondetails${i}`).value = element.action_desc;
                    i++;
                })
            }
            i=0;
            if(NPCInfo.legendaryAbilities){
                document.getElementById("legendaryAbilitiesOption").checked = true;
                document.getElementById("legendaryAbilities").style.display = "block";
                document.getElementById("legendary_details").value=NPCInfo.legendaryAbilities.legendary_details;
                            let legendaryActions = NPCInfo.legendaryAbilities.legendaryActions;
                legendaryActions.forEach(element=>{
                    createDualInformation('legendaryActions','name','details','legendary Action','Legendary Action Name','Legendary Action Details','text','text');
                    document.getElementById(`legendaryActionsname${i}`).value = element.legendaryName;
                    document.getElementById(`legendaryActionsdetails${i}`).value = element.legendary_desc;
                    i++;
            })
            }

            break;
    }

}

/**
 * 
 * @param {String} id type("melee attack")
 * @param {int} i index
 */
function updateForumValues(id,i){
    let array = []
     
//    NPCInfo
    for(let i=0;i<document.getElementById("meleeAttackArea").childElementCount;i++){
        switch(id){
         case "meleeAttack":
            array = document.getElementById("specialAbilityArea").children
         }
         console.log(array)
         let k = 0;
         let nameArray = []
         Array.from(array).forEach(element=>{
            console.log(k)
            nameArray.push(element.querySelector(`#SpecialAbilityName${k}`).value);
            k++;
         })
         console.log(nameArray);
         let selection = document.getElementById(`dropdown${id}bonusAttackDamage${i}`);
         if(selection!=null){
            let dropdownArea = selection.querySelector("ul");
                nameArray.forEach(name=>{
    //   if(document.getElementById(`${spacelessCapitalizedCaseCharacter(name)}Choice`)==null&&document.getElementById(`${spacelessCapitalizedCaseCharacter(name).toLocaleLowerCase()}Choice`)==null){
    //     if(displayedInOtherList(name)){
    //       return;
    //     }
            console.log(name);
            console.log(dropdownArea);
            if(name!=""&&dropdownArea!=""){
                let option = document.createElement("li");
                option.dataset.value = name;
                option.className="dropdown-item";
                option.textContent = name;
                console.log(option);
                dropdownArea.appendChild(option);
            }
    //     option.textContent = getName(list,name);
    //     if(name==currentSelection){
    //       option.className="dropdown-item active";
    //     }else{
    //       option.className="dropdown-item";
    //     }
    //     isDropDown.appendChild(option);
    //   }
    })
         }
    }
}


function doSpecialAttackAddition(specialAttack){
    for(let i=0;i<document.getElementById("specialAttacksOption").childElementCount-1;i++){
        const selectedItemInput = document.getElementById(`dropdownspecialAttackAttackList${i}`)
        selectedItemInput.querySelector(".selected-item input").value = specialAttack.attack;
       selectedItemInput.querySelectorAll("li")[specialAttack.attackIndex].classList.add("active");
    }

}

function updateLateValues(id,NPCInfo){
    let array = []
//    NPCInfo
    for(let i=0;i<document.getElementById("meleeAttackArea").childElementCount;i++){
        switch(id){
         case "meleeAttack":
            array = NPCInfo.melee[i].uniqueDamageBonus
         }
         if(array==null){
            array=[]
         }
         if(document.getElementById("SpecialAbilityName0")!=null&&document.getElementById(`dropdown${id}bonusAttackDamage${i}`)!=null){
             dropdownList = document.getElementById(`dropdown${id}bonusAttackDamage${i}`).querySelector("ul").querySelectorAll("li");
             dropdownList.forEach(element=>{
            if(array.includes(element.textContent)){
                element.className ="dropdown-item active";
        }
        })
    }
    }
}

function doMeleeInsertion(NPCInfo){
    let area = document.getElementById("melee").childElementCount
    dynamicModifyList("meleeAttack");
    updateLateValues("meleeAttack",NPCInfo);
    for(let i=0;i<area;i++){
        if(document.getElementById(`meleeAttackbonusAttackDamage${i}Area`)!=null){
            multiChoice(`dropdownmeleeAttackbonusAttackDamage${i}`)
        }
    }

}

/**
 * sets elements for inputted attack
 * @param {string} attackPath 
 * @param {string} attackName 
 */
function getAttackInformation(attackPath,attackName){
    let i =0;
                attackPath.forEach(attackData=>{
                    createAttackInformation(`${attackName}Attack`,`${attackName} Attack Name`,`${attackName} Attack Dice Count`,attackData.weaponType);
                    document.getElementById(`${attackName}AttackName${i}`).value=attackData.name;
                    if(document.getElementById(`${attackName}AttackdiceCount${i}`)!=null){
                        document.getElementById(`${attackName}AttackdiceCount${i}`).value=attackData.diceCount;
                    }
                    if(document.getElementById(`meleeAttackfullAttack${i}`)!=null){
                        document.getElementById(`meleeAttackfullAttack${i}`).value=attackData.fullRoundAttackCount;
                    }
                    let selectID = 0;
                    switch(attackData.damageDice){
                        case "d6":
                            selectID = 1;
                            break;
                        case "d8":
                            selectID = 2;
                            break;
                        case "d10":
                            selectID =3;
                            break;
                        case "d12":
                            selectID = 4;
                            break;
                        case "None":
                            selectID = 5;
                            break;
                    }
                    if(attackData.toHitModifier){
                        document.getElementById(`${attackName}AttacktoHitModifier${i}`).value=attackData.toHitModifier;
                    }
                    if(attackData.weaponType=="Weapon"){
                        document.getElementById(`meleeMaterial${i}`).value = attackData.material;
                    }
                    if(attackData.weaponType!="Weapon"){
                    document.getElementById(`damageDice${attackName}Attack${i}`)[selectID].selected = true;
                    if(attackData.critRange||attackData.critMultiplier){
                        document.getElementById(`critStats${attackName}Attack${i}Option`).checked = true;
                        document.getElementById(`critStats${attackName}Attack${i}Container`).style.display = "block";
                        document.getElementById(`critStats${attackName}Attack${i}critRange`).style.display = "block";
                        document.getElementById(`critStats${attackName}Attack${i}critMultiplier`).style.display = "block";
                        if(attackData.critRange){
                            document.getElementById(`critRange${attackName}Attack${i}Option`).checked = true;
                            document.getElementById(`critRange${attackName}Attack${i}`).style.display = "block";
                            document.getElementById(`critRange${attackName}Attack${i}`).value=attackData.critRange;
                        }
                        if(attackData.critMultiplier){
                            document.getElementById(`critMultiplier${attackName}Attack${i}Option`).checked = true;
                            document.getElementById(`critMultiplier${attackName}Attack${i}`).style.display = "block";
                            document.getElementById(`critMultiplier${attackName}Attack${i}`).value=attackData.critMultiplier;
                        }
                    }
                    if(attackData.multiAttack){
                        document.getElementById(`multiAttack${attackName}Attack${i}DivOption`).checked = true;
                        document.getElementById(`multiAttack${attackName}Attack${i}`).style.display = "block";
                        document.getElementById(`multiAttack${attackName}Attack${i}`).value=attackData.multiAttack;
                    }
                    if(attackData.enchantments){
                        j=0;
                        attackData.enchantments.forEach(enchants=>{
                            createArrayChoice(`enchantment${attackName}Attack${i}`,'Enchantment','Enchantment',true)
                            document.getElementById(`enchantment${attackName}Attack${i}${j}`).value=enchants;
                            j++;
                        })
                    }
                    if(i>0){
                        document.getElementById(`isAlternative${attackName}Attack${i}Option`).checked=attackData.isAlternative;
                        document.getElementById(`isAdditive${attackName}Attack${i}Option`).checked=attackData.isAdditive;
                    }
                }
                    i++;
                })

}
/**
 * returns index of element in array
 * @param {Array} options 
 * @param {string} info 
 * @returns 
 */
function getChoiceSelection(options,info){
    return options.findIndex(choice=>choice.toLocaleLowerCase()===info.toLocaleLowerCase());
}


function getDropDownSelection(item,group,infoVal=[]){
      let val = item;
    var textSelected = document.createElement("label");
    textSelected.textContent = val;
    textSelected.className = "inputName"
    // textSelected.setAttribute("for",`${group}${val.toLocaleLowerCase()}`);
    var button = document.createElement("button");
    button.setAttribute("class","formButton");
    button.setAttribute("id",`delete${val}`);
    button.setAttribute("type","button");
    button.setAttribute("onClick",`deleteChoice('${val}Choice','${group}')`);
    button.textContent = `Delete`;
    let divZone = document.createElement("div");
    if(group=="speed"){
        textSelected.setAttribute("for",`${group}${val.toLocaleLowerCase()}`);
    }
    divZone.setAttribute("id",`${val}Choice`);
    divZone.appendChild(textSelected);
    if(group=="sense"){
        let inputval = infoVal[val];
        if(inputval!=""){
            let input = document.createElement("input");
            input.setAttribute("type","number");
            input.setAttribute("class","searchBarCreation");
            input.setAttribute("name",`sense${val}`);
            input.setAttribute("id",`sense${val}`);
            input.setAttribute("title",`sense${val}`);
            input.setAttribute("placeholder",`Insert Vision Range Here`);
            input.value=inputval;
            divZone.appendChild(input);
            let ftLabel = document.createElement("span");
            ftLabel.textContent = "ft."
            ftLabel.className = "inputName";
            divZone.appendChild(ftLabel);
            document.getElementById(`${group}Temp`).value = "";
        }
        
    }
    if(group=="speed"){
        let inputval = infoVal[val];
            let input = document.createElement("input");
            input.setAttribute("type","number");
            input.setAttribute("class","searchBarCreation");
            input.setAttribute("name",`speed${val}`);
            input.setAttribute("id",`speed${val}`);
            input.setAttribute("title",`speed${val}`);
            input.setAttribute("placeholder",`Insert Speed Here`);
            input.value=inputval;
            divZone.appendChild(input);
            document.getElementById(`${group}Temp`).value = "";
        
    }
    if(group=="racialMod"){
        let inputval = infoVal[val];
            let input = document.createElement("input");
            input.setAttribute("type","number");
            input.setAttribute("class","searchBarCreation");
            input.setAttribute("name",`racialMod${val}`);
            input.setAttribute("id",`racialMod${val}`);
            input.setAttribute("title",`racialMod${val}`);
            input.setAttribute("placeholder",`Insert racial modifier Here`);
            input.value=inputval;
            divZone.appendChild(input);
            document.getElementById(`${group}Temp`).value = "";
        
    }
    if(group=="feat"){
        let inputval = infoVal[val];

        if(inputval!=""){
            let input = document.createElement("input");
            input.setAttribute("type","text");
            input.setAttribute("class","searchBarCreation");
            input.setAttribute("name",`feat${val}`);
            input.setAttribute("id",`feat${val}`);
            input.setAttribute("title",`feat${val}`);
            input.setAttribute("placeholder",`Insert Feat Details Here`);
            
            input.value=inputval;
            divZone.appendChild(input);
            document.getElementById(`${group}Temp`).value = "";
        }
    }
    if(group=="classes"){


        let input = document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("class","searchBarCreation");
        input.setAttribute("name",`classes${val.toLocaleLowerCase()}`);
        input.setAttribute("id",`classes${val.toLocaleLowerCase()}`);
        input.setAttribute("title",`classes${val.toLocaleLowerCase()}`);
        input.setAttribute("placeholder",`Insert Level Here`);
        input.value=infoVal.level;
        divZone.appendChild(input);
    //     if(!checkIfNPC(val)){
    //     let archetypeSelected = infoVal.archetype;
    //     if(archetypeSelected=="None"){
    //         archetypeSelected="";
    //     }
    //     let subZone = document.createElement("div");
    //     subZone.setAttribute("id",`archetype${val.toLocaleLowerCase()}subArea`);
    //     subZone.setAttribute("class","dropDownAddition");
    //     divZone.appendChild(subZone);
    //     document.getElementById(`${group}Choice`).appendChild(divZone);
    //     arrayToDropdownSub(getArchetypeName(classJson.class,val,false),`archetype${val}`,"Select",`archetype${val.toLocaleLowerCase()}`,archetypeSelected);
    //     createListeners(`archetype${val.toLocaleLowerCase()}subArea`,`input`,classListener);
    //     createListeners(`archetype${val.toLocaleLowerCase()}subArea`,`input`,setSkillPoints);
    //     createListeners(`archetype${val.toLocaleLowerCase()}subArea`,`input`,updateSaveValues);
    //     createListeners(`dropdownSelectionarchetype${val.toLocaleLowerCase()}`,'change',classListener);
        
    //  }
     document.getElementById(`${group}Temp`).value = "";
    }
    divZone.appendChild(button);
    divZone.setAttribute("class","dropDownChoice");
  document.getElementById(`${group}Choice`).appendChild(divZone);
  modifyList(group);
  if(group=="monsterAbilities"||group=="sense"){
    modifyList("monsterAbilities")
    modifyList("sense")
  }
  
}

function classListenerSetup(val){
    createVariableListener(`classes${val}`,`input`,setProperMinLevel,getElementPointer(`classes${val}`));
    createVariableListener(`classes${val}`,`focusout`,setProperMinLevel,getElementPointer(`classes${val}`));
    createVariableListener(`classes${val}`,`focusout`,enforceMinLevel,getElementPointer(`classes${val}`));
    createVariableListener(`classes${val}`,`keyup`,setProperMinLevel,getElementPointer(`classes${val}`));
    createListeners(`classes${val}`,`input`,classListener);
    createListeners(`classes${val}`,`focusout`,classListener);
    createListeners(`classes${val}`,`keyup`,classListener);
    createListeners(`classes${val}`,`input`,setSkillPoints);
    createListeners(`classes${val}`,`input`,updateSaveValues);
    createListeners(`classes${val}`,`input`,updateFeatDetails);

    modifyList("classes");
}







function monsterAbilitiesEdit(listName,entityName,json){
    let forumArea = document.getElementById(`${listName}Choice`);
    let mainSection = document.createElement("div");
    mainSection.id = `${entityName}Choice`;
    let entityLabel = document.createElement("label");
    entityLabel.setAttribute("class","inputName");
    let name = addSpaces(entityName);
//    console.log(name)
    entityLabel.textContent=name+":";
    mainSection.append(entityLabel);
    if(!json[entityName].empty){
        addBreak(mainSection);
    }
    let subSection = createMonsterAbilitiesElementSetup(entityName,json,mainSection);
    addDeleteButton(mainSection,entityName,listName);
    forumArea.appendChild(mainSection);
    addBreak(forumArea);
    if(json[entityName].attacks!=null || json[entityName].contact!=null){
        let activeList = json[entityName].attacks!=null?getActiveSelection(json[entityName].attacks):getActiveSelection(json[entityName].contact);
        arrayToDropdown(getAttacks(),`attackSection${entityName}`,"Select",true,activeList,true,false,true);
        createVariableListener(`dropdownattackSection${entityName}`,'click',dropdownInteraction,getElementPointer(`dropdownattackSection${entityName}`),true);
        createVariableArrayListener(`dropdownattackSection${entityName}`,'keyup',searchDrop,[getElementPointer(`dropdownattackSection${entityName}`),getElementPointer(`searchattackSection${entityName}`)]);      
        multiChoice(`dropdownattackSection${entityName}`);
    }
}

function getActiveSelection(list){
    let activeList = [];
    list.forEach(el=>{
        if(el.active){
            activeList.push(el.name);
        }
    })
    return activeList;

}

function createMonsterAbilitiesElementSetup(entity,json,area){
    let JSONObject = json[entity]
    let jsonKeys = Object.keys(JSONObject)
    let listName = "monsterAbilities";
    let diceArray = ['d2','d4','d6','d8','d10','d12'];
    let abilityTypeArray = ["Ex","Su","SP"];
    let rangeArray = ["Line","Cone"];
    let savesArray = ["Fort","Reflex","Will"];
    let rangeArray2 = ["Aura","Cone","Ray"];
    let abilityScore = ["Str","Dex","Con","Int","Wis","Cha"];
//    console.log(jsonKeys);
    switch(entity){
        case "AbilityDamage":
        case "AbilityDrain":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Damage","","",JSONObject[jsonKeys[1]],diceArray));
            addBreak(area);
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple) ",entity,listName));
            let abilityTypeLabel = document.createElement("label");
            area.append(createElementSetupEdit("label","Effected Ability Score "));
            area.append(createElementSetupEdit("select","EffectedAbilityScore",entity,listName,"EffectedAbilityScore","","",JSONObject[jsonKeys[3]],abilityScore));
            addBreak(area);
            area.append(createElementSetupEdit("label","Save Type "));
            area.append(createElementSetupEdit("select","",entity,listName,"SaveType","","",JSONObject[jsonKeys[5]],savesArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Ability Type "));
            area.append(createElementSetupEdit("select","",entity,listName,"AbilityType","","",JSONObject[jsonKeys[4]],abilityTypeArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Save Ability Score "));
            area.append(createElementSetupEdit("select","",entity,listName,"SaveAbilityScore","","",JSONObject[jsonKeys[6]],abilityScore));
            addBreak(area);
            area.append(createElementSetupEdit("label","Display Save DC "));
            area.append(createElementSetupEdit("input","DisplaySaveDC",entity,listName,"DisplaySaveDC","checkbox","",JSONObject[jsonKeys[7]]));
            break;
        case "ArchdevilTraits":
        case "DemonLordTraits":
        case "EmpyrealLordTraits":
        case "HorsemanTraits":
        case "QlippothLordTraits":
            area.append(createElementSetupEdit("label","Ability Type "));
            area.append(createElementSetupEdit("select","",entity,listName,"AbilityType","","",JSONObject[jsonKeys[1]],abilityTypeArray));
            break;
        case "FormianTraits":
            area.append(createElementSetupEdit("label","Ability Type "));
            area.append(createElementSetupEdit("select","",entity,listName,"AbilityType","","",JSONObject[jsonKeys[1]],["Ex","Su"]));
            break;
        case "Attach":
        case "Grab":
        case "PowerfulBlows":
        case "Trip":
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple) ",entity,listName));
            break;
        case "Bleed":
        case "Burn":
        case "Rend":
        case "Rake":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,"Damage","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Damage","","",JSONObject[jsonKeys[1]],diceArray));
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple) ",entity,listName));
            break;
        case "BloodDrain":
        case "Constrict":
        case "Trample":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,"Damage","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Damage","","",JSONObject[jsonKeys[1]],diceArray));
            break;
        case "BreathWeapon":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,"Damage","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Damage","","",JSONObject[jsonKeys[1]],diceArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Recharge Time "));
            area.append(createElementSetupEdit("input","RechargeTime",entity,listName,"RechargeTime","number","Insert Dice Count Here",parseInt(JSONObject[jsonKeys[2]])));
            area.append(createElementSetupEdit("select","",entity,listName,"RechargeTime","","",JSONObject[jsonKeys[3]],diceArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Range "));
            area.append(createElementSetupEdit("input","Range",entity,listName,"Range","number","Insert Dice Count Here",parseInt(JSONObject[jsonKeys[4]])));
            area.append(createElementSetupEdit("label","ft."));
            area.append(createElementSetupEdit("select","",entity,listName,"Range","","",JSONObject[jsonKeys[5]],rangeArray));            
            addBreak(area);
            area.append(createElementSetupEdit("label","Save Type"));
            area.append(createElementSetupEdit("select","",entity,listName,"SaveType","","",JSONObject[jsonKeys[6]],savesArray));
            break;    
        case "ChangeShape":
            area.append(createElementSetupEdit("label","Shape "));
            area.append(createElementSetupEdit("input","Shape",entity,listName,"Shape","text","Insert Value Here",JSONObject[jsonKeys[0]]));
            break;
        case "ChannelResistance":
            area.append(createElementSetupEdit("label","Resisted Amount "));
            area.append(createElementSetupEdit("input","ResistedAmount",entity,listName,"ResistedAmount","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            break;
        case "Disease":
        case "Poison":
            area.append(createElementSetupEdit("label","Name "));
            area.append(createElementSetupEdit("input","Name",entity,listName,entity,"text","Insert Value Here",JSONObject[jsonKeys[3]]));
            addBreak(area);
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple) ",entity,listName));
            area.append(createElementSetupEdit("label","Infliction Type"));
            area.append(createElementSetupEdit("input","InflictionType",entity,listName,entity,"text","Insert Contact Type Here",JSONObject[jsonKeys[5]]));
            addBreak(area);
            area.append(createElementSetupEdit("label","Onset "));
            area.append(createElementSetupEdit("input","Onset",entity,listName,entity,"text","Insert Onset Here",JSONObject[jsonKeys[2]]));
            addBreak(area);
            area.append(createElementSetupEdit("label","Frequency "));
            area.append(createElementSetupEdit("input","Frequency",entity,listName,entity,"text","Insert Frequency Here",JSONObject[jsonKeys[6]]));
            addBreak(area);
            area.append(createElementSetupEdit("label","Effect "));
            area.append(createElementSetupEdit("textarea","Effect",entity,listName,entity,"textarea","Insert Effect Here",JSONObject[jsonKeys[7]],[],"monsterAbilityTemp"));
            addBreak(area);
            area.append(createElementSetupEdit("label","Cure "));
            area.append(createElementSetupEdit("textarea","Cure",entity,listName,entity,"textarea","Insert Cure Here",JSONObject[jsonKeys[1]],[],"monsterAbilityTemp"));
            addBreak(area);
            area.append(createElementSetupEdit("label","Ability Type "));
            area.append(createElementSetupEdit("select","",entity,listName,"AbilityType","","",JSONObject[jsonKeys[0]],abilityTypeArray));

            break;
        case "Curse":
            area.append(createElementSetupEdit("label","Name "));
            area.append(createElementSetupEdit("input","Name",entity,listName,entity,"text","Insert Value Here",JSONObject[jsonKeys[0]]));
            addBreak(area);
            area.append(createElementSetupEdit("div","Contact(Can Select Multiple) ",entity,listName));
            // area.append(createElementSetupEdit("label","Infliction Type"));
            // area.append(createElementSetupEdit("input","InflictionType",entity,listName,entity,"text","Insert Contact Type Here",JSONObject[jsonKeys[2]]));
            // addBreak(area);
            // area.append(createElementSetupEdit("label","Frequency "));
            // area.append(createElementSetupEdit("input","Frequency",entity,listName,entity,"text","Insert Frequency Here",JSONObject[jsonKeys[4]]));
            // addBreak(area);
            area.append(createElementSetupEdit("label","Effect "));
            area.append(createElementSetupEdit("textarea","Effect",entity,listName,entity,"textarea","Insert Effect Here",JSONObject[jsonKeys[2]],[],"monsterAbilityTemp"));
            break;
        case "CurseofLycanthropy":
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple) ",entity,listName));
            area.append(createElementSetupEdit("label","Infliction Type"));
            area.append(createElementSetupEdit("input","InflictionType",entity,listName,entity,"text","Insert Contact Type Here",JSONObject[jsonKeys[1]]));
            break;
        case "EnergyDrain":
            area.append(createElementSetupEdit("label","Levels Drained "));
            area.append(createElementSetupEdit("input","LevelsDrained",entity,listName,"LevelsDrained","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple)",entity,listName));
            break;
        case "Engulf":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Damage","","",JSONObject[jsonKeys[1]],diceArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Damage type and Effects "));
            area.append(createElementSetupEdit("textarea","DamagetypeandEffects",entity,listName,entity,"textarea","Insert Here",JSONObject[jsonKeys[2]],[],"monsterAbilityTemp"));
            break;
        case "Entrap":
            area.append(createElementSetupEdit("label","Duration "));
            area.append(createElementSetupEdit("input","Duration",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","Duration",entity,listName,"Duration","","",JSONObject[jsonKeys[1]],diceArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Hardness "));
            area.append(createElementSetupEdit("input","Hardness",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[2]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","HP "));
            area.append(createElementSetupEdit("input","HP",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[3]])));
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple)",entity,listName));
            break;
        case "Web":
            area.append(createElementSetupEdit("label","HP "));
            area.append(createElementSetupEdit("input","HP",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            break;
        case "FastHealing":
            area.append(createElementSetupEdit("label","Healing "));
            area.append(createElementSetupEdit("input","Healing",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            break;
        case "Fear":
            area.append(createElementSetupEdit("label","Range "));
            area.append(createElementSetupEdit("input","Range",entity,listName,"Range","number","Insert Dice Count Here",parseInt(JSONObject[jsonKeys[1]])));
            area.append(createElementSetupEdit("label"," ft. "));
            area.append(createElementSetupEdit("select","",entity,listName,"ft.","","",JSONObject[jsonKeys[0]],rangeArray2));
            break;
        case "RockThrowing":
        case "Telepathy":
        case "UnnaturalAura":
            area.append(createElementSetupEdit("label","Range "));
            area.append(createElementSetupEdit("input","Range",entity,listName,"Range","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("label"," ft."));
            break;
        case "FrightfulPresence":
            area.append(createElementSetupEdit("label","Aura Range "));
            area.append(createElementSetupEdit("input","AuraRange",entity,listName,"AuraRange","number","Insert Dice Count Here",parseInt(JSONObject[jsonKeys[0]])));
            break;
        case "Split":
            area.append(createElementSetupEdit("label","Split Condition "));
            area.append(createElementSetupEdit("input","SplitCondition",entity,listName,entity,"text","Insert Value Here",JSONObject[jsonKeys[0]]));
            addBreak(area);
            area.append(createElementSetupEdit("label","Minimum HP "));
            area.append(createElementSetupEdit("input","MinimumHP",entity,listName,entity,"number","Insert Here",parseInt(JSONObject[jsonKeys[1]])));
            break;
        case "Heat":
        case "Stench":
        case "MentalStaticAura":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            break;
        case "Jet":
            area.append(createElementSetupEdit("label","Distance "));
            area.append(createElementSetupEdit("input","Distance",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            break;
        case "LycanthropicEmpathy":
            area.append(createElementSetupEdit("label","Animals "));
            area.append(createElementSetupEdit("input","Animals",entity,listName,entity,"text","Insert Value Here",JSONObject[jsonKeys[0]]));
            break;
        case "MythicPower":
            area.append(createElementSetupEdit("label","Amount "));
            area.append(createElementSetupEdit("input","Amount",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[1]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","Duration Limit(Day) "));
            area.append(createElementSetupEdit("input","DurationLimit(Day)",entity,listName,entity,"text","Insert Value Here",JSONObject[jsonKeys[2]]));
            addBreak(area);
            area.append(createElementSetupEdit("label","Power "));
            area.append(createElementSetupEdit("textarea","Power",entity,listName,entity,"textarea","Insert Power Here",JSONObject[jsonKeys[0]],[],"monsterAbilityTemp"));
            break;
        case "MythicMagic":
            area.append(createElementSetupEdit("label","Amount "));
            area.append(createElementSetupEdit("input","Amount",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","Duration Limit(Day) "));
            area.append(createElementSetupEdit("input","DurationLimit(Day)",entity,listName,entity,"text","Insert Value Here",JSONObject[jsonKeys[1]]));
            break;
        case "Paralysis":
            area.append(createElementSetupEdit("label","Duration "));
            area.append(createElementSetupEdit("input","Duration",entity,listName,"Duration","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Duration","","",JSONObject[jsonKeys[1]],diceArray));
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple)",entity,listName));
            break;
        case "PoisonousBlood":
            area.append(createElementSetupEdit("label","Shape "));
            area.append(createElementSetupEdit("input","Shape",entity,listName,"Shape","text","Insert Value Here",JSONObject[jsonKeys[0]]));
            break;
        case "Pull":
            area.append(createElementSetupEdit("label","Duration "));
            area.append(createElementSetupEdit("input","Duration",entity,listName,"Duration","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Duration","","",JSONObject[jsonKeys[1]],diceArray));
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple)",entity,listName));
            break;
        case "Push":
            area.append(createElementSetupEdit("label","Duration "));
            area.append(createElementSetupEdit("input","Duration",entity,listName,"Duration","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Duration","","",JSONObject[jsonKeys[1]],diceArray));
            area.append(createElementSetupEdit("div","Attack(Can Select Multiple)",entity,listName));
            break;
        case "Regeneration":
            area.append(createElementSetupEdit("label","Rate "));
            area.append(createElementSetupEdit("input","Rate",entity,listName,entity,"number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","How to Disable "));
            area.append(createElementSetupEdit("input","HowtoDisable",entity,listName,entity,"text","Insert Value Here",JSONObject[jsonKeys[1]]));
            break;
        case "Summon":
            area.append(createElementSetupEdit("label","Creature Name "));
            area.append(createElementSetupEdit("input","CreatureName",entity,listName,"CreatureName","text","Insert Value Here",JSONObject[jsonKeys[0]]));
            addBreak(area);
            area.append(createElementSetupEdit("label","Level "));
            area.append(createElementSetupEdit("input","Level",entity,listName,"Level","number","Insert Value Here",parseInt(JSONObject[jsonKeys[1]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","Amount "));
            area.append(createElementSetupEdit("input","Amount",entity,listName,"Amount","number","Insert Value Here",parseInt(JSONObject[jsonKeys[2]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","Duration Limit(Day) "));
            area.append(createElementSetupEdit("input","DurationLimit(Day)",entity,listName,"DurationLimit(Day)","number","Insert Value Here",parseInt(JSONObject[jsonKeys[3]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","Chance "));
            area.append(createElementSetupEdit("input","Chance",entity,listName,"Chance","number","Insert Value Here",parseInt(JSONObject[jsonKeys[4]])));
            area.append(createElementSetupEdit("label","%"));
            break;
        case "SwallowWhole":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,"Damage","number","Insert Value Here",parseInt(JSONObject[jsonKeys[2]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Damage","","",JSONObject[jsonKeys[3]],diceArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Damage Type "));
            area.append(createElementSetupEdit("input","DamageType",entity,listName,"DamageType","text","Insert Value Here",JSONObject[jsonKeys[4]]));
            addBreak(area);
            area.append(createElementSetupEdit("label","Hardness "));
            area.append(createElementSetupEdit("input","Hardness",entity,listName,"Hardness","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","HP "));
            area.append(createElementSetupEdit("input","HP",entity,listName,"HP","number","Insert Value Here",parseInt(JSONObject[jsonKeys[1]])));
            break;
        case "Whirlwind":
            area.append(createElementSetupEdit("label","Damage "));
            area.append(createElementSetupEdit("input","Damage",entity,listName,"Damage","number","Insert Value Here",parseInt(JSONObject[jsonKeys[0]])));
            area.append(createElementSetupEdit("select","",entity,listName,"Damage","","",JSONObject[jsonKeys[1]],diceArray));
            addBreak(area);
            area.append(createElementSetupEdit("label","Max Height "));
            area.append(createElementSetupEdit("input","MaxHeight",entity,listName,"MaxHeight","number","Insert Value Here",parseInt(JSONObject[jsonKeys[2]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","Amount "));
            area.append(createElementSetupEdit("input","Amount",entity,listName,"Amount","number","Insert Value Here",parseInt(JSONObject[jsonKeys[3]])));
            addBreak(area);
            area.append(createElementSetupEdit("label","Duration Limit(Day) "));
            area.append(createElementSetupEdit("input","DurationLimit(Day)",entity,listName,"DurationLimit(Day)","number","Insert Value Here",parseInt(JSONObject[jsonKeys[4]])));
            break;
        }
}
/**
 * 
 * @param {*} elementTag type of element
 * @param {*} contentText textContent
 * @param {*} item section name
 * @param {*} listName
 * @param {*} labelID 
 * @param {*} type 
 * @param {*} placeHolderText 
 * @param {*} inputValue 
 * @param {*} arr 
 * @param {*} title 
 * @returns 
 */

function createElementSetupEdit(elementTag,contentText,item="",listName="",labelID=0,type="",placeHolderText="Placeholder",inputValue="",arr=[],title=""){
//    console.log(inputValue)
  let newEl = document.createElement(elementTag);
  switch(elementTag.toLocaleLowerCase()){
    case "label":
      newEl.setAttribute("class","inputName");
      newEl.textContent = contentText;
      break;
    case "input":
      newEl.setAttribute("type",type);
      newEl.setAttribute("placeholder",placeHolderText);
      newEl.setAttribute("id",`${listName}${item}${contentText}`);
      newEl.setAttribute("class","searchBarCreation");
      if(type!="checkbox"){
          newEl.value=inputValue;
      }else{
        newEl.checked=inputValue;
      }
      break;
    case "select":
      newEl.setAttribute("class","searchBarCreation");
      newEl.setAttribute("name",`monsterAbilityDice${item}`);
      newEl.setAttribute("id",`monsterAbilityDice${item}Select${labelID}`);
      for(let i = 0; i<arr.length;i++){
        let option = document.createElement("option");
        option.value = arr[i];
        option.text = arr[i];
        if(inputValue==arr[i]){
          option.selected=true;
        }
        newEl.appendChild(option);
      }
      break;
    case "div":
      newEl.setAttribute("style","display:flex");
      let divlabel = document.createElement("label");
      divlabel.className="inputName";
      divlabel.setAttribute("for",`${listName}${item}`);
      divlabel.textContent = contentText;
      let newEl2 = document.createElement("div");
      newEl2.setAttribute("id",`attackSection${item}Area`);
      newEl.appendChild(divlabel);
      newEl.appendChild(newEl2);
      break;
    case "textarea":
      newEl.setAttribute("name",`textArea${listName}${item}`);
      newEl.setAttribute("placeholder",placeHolderText);
      newEl.setAttribute("title","textArea"+title);
      newEl.setAttribute("id",`textarea${listName}${item}${contentText}`);
      newEl.setAttribute("class","searchBarCreation");
      newEl.value=inputValue;
      break;
  }
  return newEl;
}

//put checked at the end of an input type checkbox for it to start off as checked

// if(NPCInfo.cmd.includes("(")){
//     document.getElementById("cmdModOption").checked = true;
//     let cmd = NPCInfo.cmd;
//     let unmodifedcmd=cmd.substring(0,cmd.indexOf("("));
//     let modifiedCMD1 = NPCInfo.cmd.substring(NPCInfo.cmd.indexOf("(")+1).trim();
//     let modifiedCMD = modifiedCMD1.substring(0,modifiedCMD1.indexOf(")"));
//     modifiedCMD = modifiedCMD.substring(0,modifiedCMD.indexOf(" "));
//     let bonusCMD = unmodifedcmd;
//     if(!isNaN(modifiedCMD)){
//         bonusCMD = modifiedCMD-unmodifedcmd;
//     }
//     let cmdText = cmd.substring(cmd.indexOf("(")+1).trim();
//     cmdText = cmdText.substring(0,modifiedCMD1.indexOf(")"));
//     cmdText = cmdText.substring(cmdText.indexOf(" ")+1).trim();
//     document.getElementById("cmdMod").value = bonusCMD +" "+ cmdText;

// }
