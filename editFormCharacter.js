fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>editCurcharacter(jsonList))
/**
 * 
 * @param {Array} listInformation 
 */


function editCurcharacter(listInformation){
let id = sessionStorage.getItem("character");
let param = new URLSearchParams(window.location.search);
id = param.get("character");
var characterInfo = listInformation.characters[id];
var resetButtonDisplay = document.getElementById("resetButton");
var creationCharacterHTML = document.createElement("div");
let system;
system = sessionStorage.getItem("system");
creationCharacterHTML.innerHTML+= getForumCharacter(system,"edit");
var creationCharacterDisplay = document.getElementById("creationCharacterDis");
creationCharacterDisplay.appendChild(creationCharacterHTML);
        // <option value="d4" ${characterInfo.hitDice==="d4"?"selected":""}>d4</option>
        // <option value="d6" ${characterInfo.hitDice==="d6"?"selected":""}>d6</option>
        // <option value="d8" ${characterInfo.hitDice==="d8"?"selected":""}>d8</option>
        // <option value="d10" ${characterInfo.hitDice==="d10"?"selected":""}>d10</option>
        // <option value="d12" ${characterInfo.hitDice==="d12"?"selected":""}>d12</option>
;
// console.log(characterType);
createListeners("characterType",`change`,characterTypeListener);


readJsonData(characterInfo,system);


var resetButton = document.createElement("button");
resetButton.setAttribute("class","button");
resetButton.setAttribute("onClick",`resetEdit(${JSON.stringify(characterInfo)},'${system}')`);
resetButton.textContent = "Reset";
resetButtonDisplay.appendChild(resetButton);
}

/**
 * 
 * @param {json} characterInfo 
 * @param {string} sys 
 */
function readJsonData(characterInfo,sys){
    let i=0;
    let selectionID = 0;
    // let cSize = String(characterInfo.size).toLowerCase()
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

// let formInputs=document.getElementsByClassName("searchBarCreationCharacter");
// for(let i=0;formInputs.length>i;i++){
//     formInputs.item(i).addEventListener("contextmenu",(e)=>{e.preventDefault()})
// }
    document.getElementById("characterName").value = characterInfo.name;
    document.getElementById("characterType")[getChoiceSelection(['Aberration','Animal','Construct','Dragon','Fey','Humanoid','Magical Beast','Monstrous Humanoid','Ooze','Outsider','Plant','Undead','Vermin','Custom'],characterInfo.type)].selected=true;
    characterTypeListener();
    if(characterInfo.type==="Custom"){
        document.getElementById("customType").value=characterInfo.customType;
    }
    document.getElementById("characterTitle").value = characterInfo.title;
    document.getElementById("characterCR")[getChoiceSelection(['1/8','1/6','1/4','1/2','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],characterInfo.cr)].selected=true;
    document.getElementById("characterLevel").value = characterInfo.level;
    document.getElementById("characterSpeed").value = characterInfo.speed;
    document.getElementById("characterFort").value = characterInfo.fort;
    document.getElementById("characterRef").value = characterInfo.ref;
    document.getElementById("characterWill").value = characterInfo.will;
    document.getElementById("characterAlignment")[getChoiceSelection(['LE','LN','LG','NG','N','NE','CE','CN','CG'],characterInfo.alignment)].selected=true;
    document.getElementById("characterStr").value = characterInfo.str;
    document.getElementById("characterDex").value = characterInfo.dex;
    document.getElementById("characterCon").value = characterInfo.con;
    document.getElementById("characterInt").value = characterInfo.int;
    document.getElementById("characterWis").value = characterInfo.wis;
    document.getElementById("characterCha").value = characterInfo.cha;
    document.getElementById("characterHitDice")[getChoiceSelection(['d4','d6','d8','d10','d12'],characterInfo.hitDice)].selected=true;
    document.getElementById("characterHitDiceRate")[getChoiceSelection(['Monster','Player'],characterInfo.rate)].selected=true;
    document.getElementById("characterBaB")[getChoiceSelection(['fast','medium','slow'],characterInfo.bab)].selected=true;
    document.getElementById("characterSkillProgression")[getChoiceSelection(['high','middle','low'],characterInfo.skillProgression)].selected=true;
    document.getElementById("characterSize")[getChoiceSelection(['fine','diminutive','tiny','small','medium','large','huge','gargantuan','colossal'],characterInfo.size)].selected = true;
        i =0;
        if(characterInfo.senses!=null){

            characterInfo.senses.forEach(senses=>{
                if(!senses.toLowerCase().includes("perception")){
                    createArrayChoice('sense','Sense','Sense');
                    document.getElementById(`sense${i}`).value=senses;
                    i++;
                }
            })
            let senseTitle = " <b>Sense</b>";
        }
       // senseString!='';
       i=0;
        if(characterInfo.aura!=null){
            characterInfo.aura.forEach(aura=>{
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
        if(characterInfo.setHD||characterInfo.setHP){
                document.getElementById("setHPInformationOption").checked = true;
                if(characterInfo.setHP){
                    document.getElementById("characterSetHP").value=characterInfo.setHP;
                }
                if(characterInfo.setHD){
                    document.getElementById("characterSetHD").value=characterInfo.setHD;
                }
        }
        if(characterInfo.subtype!=null){
        document.getElementById("Subtype").value=characterInfo.subtype;
        document.getElementById("SubtypeOption").checked=true;
        }
        let characterAcBonus = characterInfo.ac.bonuses;
        if(characterAcBonus.armor){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("armorOption").checked = true;
            document.getElementById("armor").value = characterAcBonus.armor;
        }
        if(characterAcBonus.deflection){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("deflectionOption").checked = true;
            document.getElementById("deflection").value = characterAcBonus.deflection;
        }
        if(characterAcBonus.dodge){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("dodgeOption").checked = true;
            document.getElementById("dodge").value = characterAcBonus.dodge;
        }
        if(characterAcBonus.shield){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("shieldOption").checked = true;
            document.getElementById("shield").value = characterAcBonus.shield;
        }
        if(characterAcBonus.natural){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("naturalOption").checked = true;
            document.getElementById("natural").value = characterAcBonus.natural;
        }
        let extras;
        i=0;
        if(characterAcBonus.extra){
            document.getElementById("bonusACOption").checked = true;
            document.getElementById("extraBonusesOption").checked = true;
            characterAcBonus.extra.forEach(bonusEl=>{
                extras = Object.keys(bonusEl);
                extras.forEach(ex=>{
                    createDualInformation('extra','name','amount','Extra Bonus','Bonus Name','Bonus Amount','text','number')
                    characterAcBonus.extra.forEach(bonusEl=>{
               document.getElementById(`extraname${i}`).value = ex;
               document.getElementById(`extraamount${i}`).value = bonusEl[ex];
                i++;
//                    acBonuses += sign + bonusEl[ex] + " " + ex
              
            })
              })
              
            })
        }
        if(characterInfo.special_attacks){
            document.getElementById("special_attacksOption").checked = true;
            document.getElementById("special_attacks").value=characterInfo.special_attacks;
        }
        if(characterInfo.gear){
            document.getElementById("gearOption").checked = true;
            document.getElementById("gear").value=characterInfo.gear;
        }
        if(characterInfo.weaknesses){
            document.getElementById("weaknessOption").checked = true;
            document.getElementById("weakness").value=characterInfo.weaknesses;
        }
        if(characterInfo.melee){
            document.getElementById("meleeOption").checked = true;
            getAttackInformation(characterInfo.melee,"melee");
        }
        if(characterInfo.ranged){
            document.getElementById("rangeOption").checked = true;
            getAttackInformation(characterInfo.ranged,"range");
        }

        if(characterInfo.hp_traits){
            document.getElementById("HPTraitsOption").checked = true;
            hpTraits = document.getElementById("HPTraits").value = characterInfo.hp_traits;
        }
        i=0;
        if(characterInfo.save_bonuses){
            characterInfo.save_bonuses.forEach(bonuses=>{
                createArrayChoice('saveBonus','Save Bonus','Save Bonus Amount');
                document.getElementById(`saveBonus${i}`).value = bonuses;
            })
        }
        if(characterInfo.defensive_traits){
                document.getElementById("defensiveTraitsOption").checked = true;
                let DT = characterInfo.defensive_traits
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
        if(characterInfo.feats){
            characterInfo.feats.forEach(element=>{
                createArrayChoice('feat','Feat','Feat Name');
                document.getElementById(`feat${i}`).value = element;
                i++;
            })
        }
        i=0;
        if(characterInfo.skills){
            document.getElementById("skillsOption").checked = true;
            let skills = characterInfo.skills;
            let cSkills = Object.keys(characterInfo.skills);
            doSkills(cSkills,skills);
        }
        i=0;
        if(characterInfo.spell_abilities){
            if(characterInfo.spell_abilities){
                document.getElementById("spellsOption").checked=true;
            let characterSpellInfo = characterInfo.spell_abilities;
            if(characterSpellInfo.innate){
                let innate = characterSpellInfo.innate;
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
                document.getElementById("characterSpellModInnate").value=innate.casterMod;
            }
            if(characterSpellInfo.prepared){
                let prepared = characterSpellInfo.prepared;
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
                document.getElementById("characterSpellModPrepared").value=prepared.casterMod;
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
        if(characterInfo.racialModifiers){
            characterInfo.racialModifiers.forEach(element=>{
                createArrayChoice('racialMod','Racial Modifier','Racial Modifier Bonus');
                document.getElementById(`racialMod${i}`).value = element;
                i++;
            })
        }
        i=0;
        if(characterInfo.languages){
            characterInfo.languages.forEach(element=>{
                createArrayChoice('language','Language','Language Name')
                document.getElementById(`language${i}`).value = element;
                i++;
            })
        }
        i=0;
        if(characterInfo.special_qualities!=null){
            characterInfo.special_qualities.forEach(element=>{
                createArrayChoice('SQ','Special Quality','Special Quality Name')
                document.getElementById(`SQ${i}`).value = element;
                i++;
            })
        }
        if(characterInfo.reach_bonus_effects){
            document.getElementById("reach_bonus_effectsOption").checked = true;
            document.getElementById(`reach_bonus_effects`).value = characterInfo.reach_bonus_effects;
        }
        if(characterInfo.reach){
            document.getElementById("reachOption").checked = true;
            document.getElementById(`reach`).value = characterInfo.reach;
        }
        if(characterInfo.space){
            document.getElementById("spaceOption").checked = true;
            document.getElementById(`space`).value = characterInfo.space;
        }
        
        i=0;
        if(characterInfo.special_abilities!=null){
            characterInfo.special_abilities.forEach(element => {
                createDualInformation('SpecialAbility','Name','Details','Special Ability','Special Ability Name','Special Ability Details','text','text',true,true,true,true);
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
        if(characterInfo.cmdMod){
            characterInfo.cmdMod.forEach(cmdModifier=>{
                createDualInformation('cmdMod','Details','Bonus','cmdMod','CMD Modifier Details','CMD Modifier Value','text','number')
                let CMDBonusDetails = cmdModifier.CMDBonusDetails;
                let CMDBonus = cmdModifier.CMDBonus;
                document.getElementById(`cmdModDetails${i}`).value=CMDBonusDetails;
                document.getElementById(`cmdModBonus${i}`).value=Number(CMDBonus);
                i++;
            })
        }
    arrayToggle('bonusAC',['Container','Armor','Deflection','Dodge','Shield','Natural','Extra']);
    arrayToggle('defensiveTraits',['Container','DA','DR','Immune','Resist','SR']);
    arrayToggle('reach',['Container','reach_bonus_effects','Space']);
    arrayToggle('spells',['Container','InnateOption','PreparedOption']);
    toggle('Subtype');
    toggle('weakness');
    toggle('melee');
    toggle('range');
    toggle('gear');
    toggle('armor');
    toggle('deflection');
    toggle('special_attacks');
    toggle('dodge');
    toggle('shield');
    toggle('natural');
    toggle('extraBonuses');
    toggle('DA');
    toggle('DR');
    toggle('Immune');
    toggle('Resist');
    toggle('SR');
    toggle('reach_bonus_effects');
    toggle('space');
    arrayToggle('spellsInnate',['Container','Constant','atWill','xDay']);
    toggle('constant');
    toggle('atWill');
    toggle('xDay');
    arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth']);
    toggle("HPTraits");
    arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion','All']);
    toggle('setHPInformation');
    var skillDisplay = document.getElementById("skillPoints");
var skillHTML = document.createElement("div");
let skillCont = document.getElementById("skillsContainer");
let skillList = skillCont.getElementsByClassName("searchBarCreationCharacter")
var featDisplay = document.getElementById("featCount");
var featHTML = document.createElement("div");
featHTML.innerHTML = `<p class="inputName" id="featAmountDisplay">Remaining Feats: ${setFeatsAvailable()}</p>`;
featDisplay.appendChild(featHTML);
createFormListeners(skillList);
skillHTML.innerHTML = `<p class="inputName" id="skillPointsDisplay">Remaining Ranks: ${setSkillPoints()}</p>`;
skillDisplay.appendChild(skillHTML);
            break;
        
        case "5e":
        let cSize = String(characterInfo.size).toLowerCase()
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
            document.getElementById("characterHitDice")[getChoiceSelection(['d4','d6','d8','d10','d12','d20'],characterInfo.hitDice)].selected=true;
            document.getElementById("characterName").value=characterInfo.name;
            document.getElementById("characterType").value=characterInfo.type;
            document.getElementById("characterCR").value=characterInfo.cr;
            document.getElementById("characterLevel").value=characterInfo.level;
            document.getElementById("characterSpeed").value=characterInfo.speed;
            document.getElementById("characterSize")[selectionID].selected=true;
            document.getElementById("characterStr").value=characterInfo.str;
            document.getElementById("characterDex").value=characterInfo.dex;
            document.getElementById("characterCon").value=characterInfo.con;
            document.getElementById("characterInt").value=characterInfo.int;
            document.getElementById("characterWis").value=characterInfo.wis;
            document.getElementById("characterCha").value=characterInfo.cha;
            document.getElementById("characterProficiency").value;
            document.getElementById("ac").value=characterInfo.ac;
            document.getElementById("characterAlignment").value=characterInfo.alignment;
            document.getElementById("characterSense").value=characterInfo.senses;
            document.getElementById("characterProficiency").value = characterInfo.proficiency;
            if(characterInfo.saving_throws.str){
                document.getElementById("StrSavingThrowProficiencyOption").checked = true;
            }
            if(characterInfo.saving_throws.dex){
                document.getElementById("DexSavingThrowProficiencyOption").checked = true;
            }
            if(characterInfo.saving_throws.con){
                document.getElementById("ConSavingThrowProficiencyOption").checked = true;
            }
            if(characterInfo.saving_throws.int){
                document.getElementById("IntSavingThrowProficiencyOption").checked = true;
            }
            if(characterInfo.saving_throws.wis){
                document.getElementById("WisSavingThrowProficiencyOption").checked = true;
            }
            if(characterInfo.saving_throws.cha){
                document.getElementById("ChaSavingThrowProficiencyOption").checked = true;
            }
            
            let skillList5e = ['Acrobatics','AnimalHandling','Arcana','Athletics','Athletics','Deception','History','Insight','Intimidation','Investigation','Medicine','Nature','Perception','Performance','Persuasion','Religion','SleightofHand','Stealth','Survival'];
            skillList5e.forEach(skills=>{
                document.getElementById(`${skills}ProficiencyOption`).checked=characterInfo.skillsProf[skills];
            }
                );

            if(characterInfo.setHD||characterInfo.setHP){
                document.getElementById("setHPInformationOption").checked = true;
                if(characterInfo.setHP){
                    document.getElementById("characterSetHP").value=characterInfo.setHP;
                }
                if(characterInfo.setHD){
                    document.getElementById("characterSetHD").value=characterInfo.setHD;
                }
            }
            if(characterInfo.damage_vulnerabilities){
                document.getElementById("damage_vulnerabilities").value = characterInfo.damage_vulnerabilities;
                document.getElementById("damage_vulnerabilitiesOption").checked = true;
                document.getElementById("damage_vulnerabilities").style.display = "block";
            }
            if(characterInfo.damage_resistances){
                document.getElementById("damage_resistances").value=characterInfo.damage_resistances;
                document.getElementById("damage_resistancesOption").checked = true;
                document.getElementById("damage_resistances").style.display = "block";
            }
            if(characterInfo.damage_immunities){
                document.getElementById("damage_immunities").value=characterInfo.damage_immunities;
                document.getElementById("damage_immunitiesOption").checked = true;
                document.getElementById("damage_immunities").style.display = "block";
            }
            if(characterInfo.condition_immunities){
                document.getElementById("condition_immunities").value=characterInfo.condition_immunities;
                document.getElementById("condition_immunitiesOption").checked = true;
                document.getElementById("condition_immunities").style.display = "block";
            }    
            if(characterInfo.ability){
                characterInfo.ability.forEach(element=>{
                    createDualInformation('Ability','name','details','Ability','Ability Name','Ability Details','text','text');
                    document.getElementById(`Abilityname${i}`).value = element.abilityName;
                    document.getElementById(`Abilitydetails${i}`).value = element.ability_desc;
                    i++;
                })  
            }
            i=0;
            if(characterInfo.actions){
                characterInfo.actions.forEach(element=>{
                    createDualInformation('Action','name','details','Action','Action Name','Action Details','text','text');
                    document.getElementById(`Actionname${i}`).value = element.actionName;
                    document.getElementById(`Actiondetails${i}`).value = element.action_desc;
                    i++;
                })
            }
            i=0;
            if(characterInfo.legendaryAbilities){
                document.getElementById("legendaryAbilitiesOption").checked = true;
                document.getElementById("legendaryAbilities").style.display = "block";
                document.getElementById("legendary_details").value=characterInfo.legendaryAbilities.legendary_details;
                            let legendaryActions = characterInfo.legendaryAbilities.legendaryActions;
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
 * sets elements for inputted attack
 * @param {string} attackPath 
 * @param {string} attackName 
 */
function getAttackInformation(attackPath,attackName){
    let i =0;
                attackPath.forEach(attackData=>{
                    createAttackInformation(`${attackName}Attack`,`${attackName} Attack Name`,`${attackName} Attack Dice Count`);
                    document.getElementById(`${attackName}AttackName${i}`).value=attackData.name;
                    document.getElementById(`${attackName}AttackdiceCount${i}`).value=attackData.diceCount;
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
                    }
                    if(attackData.toHitModifier){
                        document.getElementById(`${attackName}AttacktoHitModifier${i}`).value=attackData.toHitModifier;
                    }
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
                    if(attackData.uniqueDamage){
                        document.getElementById(`extraDmg${attackName}Attack${i}Option`).checked = true;
                        document.getElementById(`extraDmg${attackName}Attack${i}`).style.display = "block";
                        document.getElementById(`extraDmg${attackName}Attack${i}`).value=attackData.uniqueDamage;                        
                    }
                    if(attackData.multiAttack){
                        
                        document.getElementById(`multiAttack${attackName}Attack${i}Option`).checked = true;
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
                    document.getElementById(`isAlternative${attackName}Attack${i}Option`).checked=attackData.isAlternative;
                    document.getElementById(`isAdditive${attackName}Attack${i}Option`).checked=attackData.isAdditive;
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
    return options.findIndex(choice=>choice.toLowerCase()===info.toLowerCase());
}
//put checked at the end of an input type checkbox for it to start off as checked

// if(characterInfo.cmd.includes("(")){
//     document.getElementById("cmdModOption").checked = true;
//     let cmd = characterInfo.cmd;
//     let unmodifedcmd=cmd.substring(0,cmd.indexOf("("));
//     let modifiedCMD1 = characterInfo.cmd.substring(characterInfo.cmd.indexOf("(")+1).trim();
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