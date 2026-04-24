function setAttackChoice(attackType){
    let selection = document.getElementById(`${attackType}Selection`).value;
    let select = document.createElement("select");
    select.className="searchBarCreation";
    document.getElementById(`${attackType}WeaponSelection`).innerHTML="";
    document.getElementById(`meleeMaterial`).style="display:none;"
    if(selection.toLocaleLowerCase()=="weapon"){
        switch(attackType){
            case "melee":
                createSelection(meleeWeaponList,select);
                document.getElementById(`meleeMaterial`).style="display:block;"
                break;
            case "range":
                createSelection(rangedWeaponList,select);
                break;
            default:
                break;
        }
        document.getElementById(`${attackType}WeaponSelection`).appendChild(select);
    }
}

function setFeatsAvailable(){
  let feats = getFeats();//have alternative based on classLevels
  let createdFeats = document.getElementById("featChoice").childElementCount;
  let int = document.getElementById("NPCInt").value;
//  console.log(feats);
  let availFeats = feats-createdFeats;
  var featDisplay = document.getElementById("featAmountDisplay");
  if(int==="-"){
    availFeats = 0  
  }
  if(featDisplay){
    featDisplay.textContent=`Remaining Feats: ${availFeats}`;
  }
  return availFeats;
}


/**
 * does a full scan of the form to get new elements that are added and removed from the form
 */
function refreshList(){
let skillCont = document.getElementById("skillsContainer");
let skillList = skillCont.getElementsByClassName("searchBarCreation")
for(let skill of skillList){
    createListeners(skill.name,'input',setSkillPoints);
    createListeners(skill.name,'input',setProperMaxMinSkills);
}
let proflen = document.getElementById("forum").querySelector(`.Profession`).childElementCount;
let craftlen = document.getElementById("forum").querySelector(`.Craft`).childElementCount;
let featlen = document.getElementById("forum").querySelector(`.feat`).childElementCount;
for(let i=0;i<proflen;i++){
 createListeners(`deleteProfession${i}`,'click',refreshList);
}
for(let i=0;i<craftlen;i++){
 createListeners(`deleteCraft${i}`,'click',refreshList);
}
// for(let i=0;i<featlen;i++){
//   createListeners(`deletefeat${i}`,'click',refreshList);
// }
setSkillPoints();
setFeatsAvailable();
}



/**
 * creates all needed listeners for the edit and creations forms to interact with Skills and feats 
 * @param {array} skillList 
 */
function createFormListenersFeatsAndSkills(skillList){
  for(let skill of skillList){
    let skillName = skill.name;
    if(skill.name.includes("Value")){
       skillName = skill.name.split("Value")[0];
    }
    if(skill.name.includes("Name")){
       skillName = skill.name.split("Name")[0];
    }
    createListeners(skill.name,'input',setProperMaxMinSkills);
    createListeners(skill.name,'focusout',setProperMaxMinSkills);
    createListeners(skill.name,'input',setSkillPoints);
    createListeners(`${skillName}Option`,'input',setSkillPoints);
}
  createListeners("professionButton",'click',refreshList);
  createListeners("craftButton",'click',refreshList);
  createListeners(`ProfessionOption`,'input',setSkillPoints);
  createListeners(`CraftOption`,'input',setSkillPoints);
  createListeners("NPCSkillProgression","click",refreshList);
  createListeners("NPCInt","input",refreshList);
  createListeners("MonsterLevel",'input',refreshList);
  createListeners("featButton",'click',refreshList);
}



function NPCTypeListener(){
  const NPCType = document.getElementById("NPCType")
 if(NPCType.value==="Custom"){
    document.getElementById("customType").style.display="block";
 }else{
    document.getElementById("customType").style.display="none";
 }
 if(document.getElementById("NPCChoice").value=="NPC"){
  return
 }

 let skills = "";
 switch (NPCType.value) {
  case "Aberration":
      document.getElementById("NPCHitDice")[2].selected = true;
      document.getElementById("NPCBaB")[1].selected = true;
      document.getElementById("NPCSkillProgression")[1].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[1].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Acrobatics","Climb","EscapeArtist","Fly","Intimidate","Knowledge","Perception","Spellcraft","Stealth","Survival","Swim"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
  case "Animal":
      document.getElementById("NPCHitDice")[2].selected = true;
      document.getElementById("NPCBaB")[1].selected = true;
      document.getElementById("NPCSkillProgression")[1].selected = true;
      document.getElementById("NPCFort")[0].selected = true;
      document.getElementById("NPCRef")[0].selected = true;
      document.getElementById("NPCWill")[1].selected = true;
      resetSkills();
      skills = ["Acrobatics","Climb","Fly","Perception","Stealth","Swim"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
    case "Construct":
      document.getElementById("NPCHitDice")[3].selected = true;
      document.getElementById("NPCBaB")[2].selected = true;
      document.getElementById("NPCSkillProgression")[2].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[1].selected = true;
      document.getElementById("NPCWill")[1].selected = true;
      resetSkills();
      document.getElementById("usesSkillOption").checked=false;
      adjustDisplay('Skill');
    break;
    case "Dragon":
      document.getElementById("NPCHitDice")[4].selected = true;
      document.getElementById("NPCBaB")[0].selected = true;
      document.getElementById("NPCSkillProgression")[0].selected = true;
      document.getElementById("NPCFort")[0].selected = true;
      document.getElementById("NPCRef")[0].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Appraise","Bluff","Climb","Craft","Diplomacy","Fly","Heal","Intimidate","Knowledge(All)","Perception","Sense Motive","Spellcraft","Stealth","Survival","Swim","UseMagicDevice"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
    case "Fey":
      document.getElementById("NPCHitDice")[1].selected = true;
      document.getElementById("NPCBaB")[0].selected = true;
      document.getElementById("NPCSkillProgression")[0].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[0].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Acrobatics","Bluff","Climb","Craft","Diplomacy","Disguise","EscapeArtist","Fly","Knowledge(Geography)","Knowledge(Local)","Knowledge(Nature)","Perception","Perform","Sense Motive","sleight of hand","Stealth","Swim","UseMagicDevice"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
    case "Humanoid":
      document.getElementById("NPCHitDice")[2].selected = true;
      document.getElementById("NPCBaB")[1].selected = true;
      document.getElementById("NPCSkillProgression")[1].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[1].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Climb","Craft","HandleAnimal","Heal","Profession","Ride","Survival"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
      // NPCDisplay(true);
    break;
    case "Magical Beast":
      document.getElementById("NPCHitDice")[3].selected = true;
      document.getElementById("NPCBaB")[0].selected = true;
      document.getElementById("NPCSkillProgression")[1].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[0].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Acrobatics","Climb","Fly","Perception","Stealth","Swim"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
      case "Monstrous Humanoid":
      document.getElementById("NPCHitDice")[3].selected = true;
      document.getElementById("NPCBaB")[0].selected = true;
      document.getElementById("NPCSkillProgression")[1].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[0].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Acrobatics","Climb","Fly","Perception","Stealth","Swim"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
    case "Ooze":
      document.getElementById("NPCHitDice")[2].selected = true;
      document.getElementById("NPCBaB")[1].selected = true;
      document.getElementById("NPCSkillProgression")[2].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[1].selected = true;
      document.getElementById("NPCWill")[1].selected = true;
      resetSkills();
      document.getElementById("usesSkillOption").checked=false;
      adjustDisplay('Skill');
    break;
    case "Outsider":
      document.getElementById("NPCHitDice")[3].selected = true;
      document.getElementById("NPCBaB")[0].selected = true;
      document.getElementById("NPCSkillProgression")[0].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[0].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Bluff","Craft","Knowledge(Planes)","Perception","SenseMotive","Stealth"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
    case "Plant":
      document.getElementById("NPCHitDice")[2].selected = true;
      document.getElementById("NPCBaB")[1].selected = true;
      document.getElementById("NPCSkillProgression")[2].selected = true;
      document.getElementById("NPCFort")[0].selected = true;
      document.getElementById("NPCRef")[1].selected = true;
      document.getElementById("NPCWill")[1].selected = true;
      resetSkills();
      skills = ["Perception","Stealth"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
    case "Undead":
      document.getElementById("NPCHitDice")[2].selected = true;
      document.getElementById("NPCBaB")[1].selected = true;
      document.getElementById("NPCSkillProgression")[1].selected = true;
      document.getElementById("NPCFort")[1].selected = true;
      document.getElementById("NPCRef")[1].selected = true;
      document.getElementById("NPCWill")[0].selected = true;
      resetSkills();
      skills = ["Climb","Disguise","Fly","Intimidate","Knowledge(Arcana)","Knowledge(Religion)","Perception","SenseMotive","Spellcraft","Stealth"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
      document.getElementById("usesSkillOption").checked=true;
      adjustDisplay('Skill');
    break;
      case "Vermin":
      document.getElementById("NPCHitDice")[2].selected = true;
      document.getElementById("NPCBaB")[1].selected = true;
      document.getElementById("NPCSkillProgression")[2].selected = true;
      document.getElementById("NPCFort")[0].selected = true;
      document.getElementById("NPCRef")[1].selected = true;
      document.getElementById("NPCWill")[1].selected = true;
      resetSkills();
      document.getElementById("usesSkillOption").checked=false;
      adjustDisplay('Skill');
    break;
      case "Custom":
        document.getElementById("NPCHitDice")[0].selected = true;
        document.getElementById("NPCBaB")[0].selected = true;
        document.getElementById("NPCSkillProgression")[0].selected = true;
        document.getElementById("NPCFort")[0].selected = true;
        document.getElementById("NPCRef")[0].selected = true;
        document.getElementById("NPCWill")[0].selected = true;
        resetSkills();
        document.getElementById("usesSkillOption").checked=false;
        adjustDisplay('Skill');
        NPCDisplay(true);
  default:
    break;
 }
 setSkillPoints();
}

/**
 * sets element to never be below 1
 * @param {String} id 
 */

function setProperMinLevel(id,forceAmount=1){
  let val = document.getElementById(`${id}`).value;
  if(val<1&&val!=""){
    document.getElementById(`${id}`).value=forceAmount;
  }
}

function enforceMinLevel(id){
  let val = document.getElementById(`${id}`).value;
  if(val<1){
    document.getElementById(`${id}`).value=1;
  }
}

/**
 * sets element to never be below -1
 * @param {String} id 
 */
function setProperMin(stat){
  let val = document.getElementById(`NPC${stat}`).value;
  if(val<-1){
    document.getElementById(`NPC${stat}`).value=-1;
  }
}


function setProperMax(stat){
  let val = document.getElementById(`NPC${stat}`).value;
  let value = 90
  if(val>value){
    document.getElementById(`NPC${stat}`).value=value;
  }
}


function updateHealthDisplay(){
  var skillDisplay = document.getElementById("calculateHealth");
  skillDisplay.textContent=`Health: ${getforumHPMonster()}`;
}

function adjustDisplay(element){
  let display = document.getElementById(`uses${element}Option`).checked ? "block":"none";
  document.getElementById(`${element.toLocaleLowerCase()}Button`).setAttribute("style",`display:${display}`);
}

function limitDisplay(visibilityElementID,elementID){
  let display = document.getElementById(checkboxID).checked ? "block":"none";
  document.getElementById(elementID).setAttribute("style",`display:${display}`);
}


/**
 * Sets displayed value for number of ranks available to be used
 * @returns int
 */
function setSkillPoints(){
  let skillCont = document.getElementById("skillsContainer");
  let skillList = skillCont.getElementsByClassName("searchBarCreation")
  let usedPoints = 0;
  let knowledge = ['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'];
  for(let skill of skillList){
    if(document.getElementById(`${skill.name}Option`)){
      if(document.getElementById(`${skill.name}Option`).checked){
          if(knowledge.includes(skill.name)&&!document.getElementById("skillsKnowledgeOption").checked){
            continue;
          }else{
            usedPoints += Number(document.getElementById(skill.name).value);          
          }
        }
    }else{
      if(skill.name.includes("Value")){
        let skillName = skill.name.split("Value")[0];
        if(document.getElementById(`${skillName}Option`).checked){
          usedPoints += Number(document.getElementById(skill.name).value);
        }
      }
    }
    }
    let availableSkillPoints =0;
    let intModifier = getModifier(document.getElementById("NPCInt").value);
    if(intModifier!="-"){
    availableSkillPoints = getMaxSkillPoints(document.getElementById("NPCChoice").value,intModifier);
    availableSkillPoints = availableSkillPoints-usedPoints;
  }else{
    availableSkillPoints = 0;
  }
  if(document.getElementById("skillPointsDisplay")){
    var skillDisplay = document.getElementById("skillPointsDisplay");
    skillDisplay.textContent=`Remaining Ranks: ${availableSkillPoints}`;
  }
  return availableSkillPoints;
}


function sizeListener(){
  const NPCSize = document.getElementById("NPCSize").value;
  switch(NPCSize){
    case "Fine":
    case "Diminutive":     
    case "Tiny":
    case "Small":
    case "Medium":
      document.getElementById("isitlong").style.display="none"
      document.getElementById("isItLongOption").checked=false;
      break;
    case "Large":
    case "Huge":
    case "Gargantuan":
    case "Colossal":
      document.getElementById("isitlong").style.display="block"
      break;
  }

}


function updateFormOnType(){
  let choice = document.getElementById("NPCChoice").value;
  NPCDisplay(choice=="NPC");
  spellDisplay(choice);
}

function updateFeats(){
  var feats = featList;
  if(document.getElementById("usesSphereOption").checked){
    feats = feats.concat(sphereFeatList);
  }
  feats.sort();
  document.getElementById("dropdownfeat").remove();
  arrayToDropdown(feats,"feat","Select");
  createVariableListener(`dropdownfeat`,'click',dropdownInteraction,`dropdownfeat`,true);
  createVariableArrayListener(`dropdownfeat`,'keyup',searchDrop,[`dropdownfeat`,`searchfeat`]);
  selectionCreation(`dropdownfeat`);
}

function updateArchetype(className){
  let originalArchetypeList = getArchetypeName(classJson.class,className);
  let newArchetypeList = getJsonObject(classJson.class[getIndex(classJson.class,className.toLocaleLowerCase())],'archetype');
  let sphereList = getJsonObject(sphereClassArchetype.sphereArchetypeList[getIndex(sphereClassArchetype.sphereArchetypeList,className)],'archetype');
  newArchetypeList.push(...sphereList);  
}


function validTab(){
  if(document.getElementById("classesSec").style.display=="flex"/*||document.getElementById("spheres").style.display=="block"*/){
    displayChange("main");
  }
}

function toggleInput(inputName,state="block"){
document.getElementById(inputName).style.display=state;
}


function dynamicInputs(elementID,itemList,inputAreaID){
  let inputVal = document.getElementById(elementID).value;
  let inputType = "text";
  let curType;
  let inner="";
  let hasDice = false;
  let hasRange = false;
  let hasSave = false;
  let hasRecharge = false;
  let hasVariableArea = false;
  let baseCurse = false;
  let noBaseInput = false;
  let usesAttacks = false;
  let secondaryInput = false;
  let usesDurability = false;
  let power=false;
  let justHealth = false;
  let chance = false;
  let usesDistance = false;
  if(itemList[inputVal.toLocaleLowerCase()]!=null){
    inputType=itemList[inputVal.toLocaleLowerCase()].input;
    baseCurse=itemList[inputVal.toLocaleLowerCase()].baseCurse;
    secondaryInput=itemList[inputVal.toLocaleLowerCase()].secondaryInput;
    usesAttacks=itemList[inputVal.toLocaleLowerCase()].usesAttacks;
    noBaseInput=itemList[inputVal.toLocaleLowerCase()].noBaseInput;
    usesDurability=itemList[inputVal.toLocaleLowerCase()].durability;
    hasDice =(inputType=="dice"||inputType=="breath");
    hasRange = itemList[inputVal.toLocaleLowerCase()].range;
    hasSave = (inputType=="breath");
    hasRecharge = (inputType=="breath");
    justHealth = itemList[inputVal.toLocaleLowerCase()].health;
    hasVariableArea =itemList[inputVal.toLocaleLowerCase()].variableRange;
    power =itemList[inputVal.toLocaleLowerCase()].power;
    usages=itemList[inputVal.toLocaleLowerCase()].usage;
    usesDistance=itemList[inputVal.toLocaleLowerCase()].usesDistance;
    chance=itemList[inputVal.toLocaleLowerCase()].chance;
    variableAbilityType = (itemList[inputVal.toLocaleLowerCase()].VariableSpecialType);
    let abilityList = (itemList[inputVal.toLocaleLowerCase()].availableVariable);
    // if(apartOfAttack){
      //use dropDown based on ex attacks
      // }
    if(!noBaseInput){
      inner =`<label class="inputName" for="monsterAbilityDiceTemp">${getProperty(inputVal)} </label>`
      inner+=`<input type="${getInherentInputType(inputType)}" ${extraArgs(inputType)} class="searchBarCreation" name="monsterAbilityTemp" id="monsterAbilityTemp" placeholder="Insert ${getCustomPlaceholder(inputVal)} Here" title="monsterAbilityTemp">`
    }
    if(usesDistance){
      inner+= `<label class="inputName"> ft. </label>`
    }
    if(hasDice){
      inner+=`<select class="searchBarCreation" name="monsterAbilityDiceTemp" id="monsterAbilityDiceTemp">
      <option>d2</option>
      <option>d4</option>
      <option>d6</option>
      <option>d8</option>
      <option>d10</option>
      <option>d12</option>
      </select>`
    }
    if(secondaryInput){
      if(inner!=""){
        inner+="<br>";
      }
      inner +=`<label class="inputName" for="monsterAbilityDiceTemp">${getProperty(inputVal+"2")} </label>`
      if(inputVal=="Engulf"){
        inner+=`<textarea class="searchBarCreation" name="monsterAbilityTemp" id="monsterAbilitySecondaryTemp" placeholder="Insert Here" title="monsterAbilityTemp"></textarea>`
      }else if(inputVal=="Split"||inputVal=="Whirlwind"||"Summon"){
        inner+=`<input type="number" class="searchBarCreation" name="monsterAbilityTemp" id="monsterAbilitySecondaryTemp" placeholder="Insert Here" title="monsterAbilityTemp">`
      }else{        
        inner+=`<input type="text" class="searchBarCreation" name="monsterAbilityTemp" id="monsterAbilitySecondaryTemp" placeholder="Insert Here" title="monsterAbilityTemp">`
      }
    }
    if(usesDurability){
      if(inner!=""){
        inner+="<br>";
      }
      
      if(!justHealth){
      inner+=`<label class="inputName" for="monsterAbilityDurabilityHardnessTemp">Hardness</label>
      <input type="number" class="searchBarCreation" name="monsterAbilityDurabilityHardnessTemp" id="monsterAbilityDurabilityHardnessTemp" placeholder="Insert Hardness Here" title="monsterAbilityTemp">
      <br>`
      }
      inner+=`<label class="inputName" for="monsterAbilityCurseTemp">HP</label>
      <input type="number" class="searchBarCreation" name="monsterAbilityDurabilityHPTemp" id="monsterAbilityDurabilityHPTemp" placeholder="Insert HP Here" title="monsterAbilityTemp">`
    }
    if(usesAttacks){
      if(inner!=""){
      inner+="<br>";
    }
      inner+=`
      <div style="display:flex"><label class="inputName" for="monsterAbilityCurseTemp">${getAttackLabel(inputVal)}(Can Select Multiple) </label><div id="curseArea"></div></div>`
      if(inputType=="curse"){
        inner+=`<label class="inputName" for="monsterAbilityContactTemp">Infliction Flavor </label>
        <input type="text" class="searchBarCreation" name="monsterAbilityContactTemp" id="monsterAbilityContactTemp" placeholder="Insert Contact Flavor Here" title="monsterAbilityTemp"><br>`
      }
    }
    if(baseCurse){
      inner+=`<label class="inputName" for="monsterAbilityCurseTemp">Onset</label>
      <input type="text" class="searchBarCreation" name="monsterAbilityCurseTemp" id="monsterAbilityCurseOnsetTemp" placeholder="Insert Onset Here" title="monsterAbilityTemp">
      <br><label class="inputName" for="monsterAbilityCurseTemp">Frequency</label>
      <input type="text" class="searchBarCreation" name="monsterAbilityCurseTemp" id="monsterAbilityCurseFrequencyTemp" placeholder="Insert Frequency Here" title="monsterAbilityTemp">
      <br><label class="inputName" for="monsterAbilityCurseTemp">Effect</label>
      <textarea class="searchBarCreation" name="monsterAbilityCurseTemp" id="monsterAbilityCurseEffectTemp" placeholder="Insert Effect Here" title="monsterAbilityTemp"></textarea>
      <br><label class="inputName" for="monsterAbilityCurseTemp">Cure</label>
      <textarea class="searchBarCreation" name="monsterAbilityCurseTemp" id="monsterAbilityCurseCureTemp" placeholder="Insert Effect Here" title="monsterAbilityTemp"></textarea>
      `
    }    
    if(hasRecharge){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilityRechargeDiceAmountTemp">Recharge Time</label>
      <input type="number" min="1" class="searchBarCreation" name="monsterAbilityRechargeDiceAmountTemp" id="monsterAbilityRechargeDiceAmountTemp" placeholder="Insert Dice Count Here" title="monsterAbilityRechargeDiceAmountTemp">`
      inner+=`<select class="searchBarCreation" name="monsterAbilityDice" id="monsterAbilityDice">
      <option>d2</option>
      <option>d4</option>
      <option>d6</option>
      <option>d8</option>
      <option>d10</option>
      <option>d12</option>
      </select>`
    }

    if(hasRange){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilityRangeTemp">Range </label>
      <input type="number" min="1" class="searchBarCreation" name="monsterAbilityRangeTemp" id="monsterAbilityRangeTemp" placeholder="Insert Range Here" title="monsterAbilityRangeTemp"> <label class="inputName"> ft. </label>`
      
      if(hasVariableArea){
        console.log(inputVal);
        inner+=`<select class="searchBarCreation" name="monsterAbilityAreaTemp" id="monsterAbilityAreaTemp">`
        itemList[inputVal.toLocaleLowerCase()].ranges.forEach(item=>{
          inner+=`<option>${item}</option>`
        })
        inner+=`</select>`
      }
    }
    if(power){
        inner+=`<br><label class="inputName" for="monsterAbilityPowerTemp">Power</label>
      <textarea class="searchBarCreation" name="monsterAbilityPowerTemp" id="monsterAbilityPowerTemp" placeholder="Insert Power Here" title="monsterAbilityTemp"></textarea>`
    }
    if(usages){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilityMaxAmountTemp">Amount</label>
      <input type="number" min="1" class="searchBarCreation" name="monsterAbilityMaxAmountTemp" id="monsterAbilityMaxAmountTemp" placeholder="Insert Usage Count Here" title="monsterAbilityRechargeDiceAmountTemp">
      <br><label class="inputName" for="monsterAbilityDurationLimitTemp">Duration Limit(Day)</label>
      <input type="number" min="1" class="searchBarCreation" name="monsterAbilityDurationLimitTemp" id="monsterAbilityDurationLimitTemp" placeholder="Insert Recharge Here" title="monsterAbilityRechargeDiceAmountTemp">`
    }
    if(hasSave){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilitySaveTemp">Save Type </label>
      <select class="searchBarCreation" name="monsterAbilitySaveTemp" id="monsterAbilitySaveTemp">
      <option>Fort</option>
      <option>Reflex</option>
      <option>Will</option>
      </select>`
    }
    if(variableAbilityType){
      if(inner!=""&&(!usesAttacks||inputType=="curse")){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilityTypeTemp">Ability Type </label>
      <select class="searchBarCreation" name="monsterAbilityTypeTemp" id="monsterAbilityTypeTemp">`;
      if(abilityList==null){        
        inner+=`<option>Ex</option>
        <option>Sp</option>
        <option>Su</option>`;
      }else{
        abilityList.forEach(item=>{
          inner+=`<option>${item}</option>`;
        })        
      }
      inner+=`</select>`;
    }
    if(chance){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilityChanceTemp">Chance</label>
      <input type="number" class="searchBarCreation" name="monsterAbilityChanceTemp" id="monsterAbilityChanceTemp" placeholder="Insert Chance Here" title="monsterAbilityChanceTempInput"><label class="inputName"> % </label>`
    }
    document.getElementById(inputAreaID).innerHTML = inner;
    if(hasDice){
      if(itemList[inputVal.toLocaleLowerCase()].default!=null){
        document.getElementById("monsterAbilityDiceTemp")[getChoiceSelection(['d2','d4','d6','d8','d10','d12'],itemList[inputVal.toLocaleLowerCase()].default)].selected=true;
      }
    }
    if(hasSave){
      document.getElementById("monsterAbilitySaveTemp")[getChoiceSelection(['Fort','Reflex','Will'],itemList[inputVal.toLocaleLowerCase()].saveType)].selected=true;
    }
    if(usesAttacks){
      doAttacksDropdown();

    }
  }else{
    if(monsterAbilitiesList.includes(inputVal)){
      document.getElementById(inputAreaID).innerHTML = inner;
    }
  }
}

function updateClasses(){
  let classItems = getClassList();
  let classesDropDown = document.getElementById(`dropdownclasses`).querySelector("ul");
  classesDropDown.innerHTML="";
  generalListCreation(classesDropDown,classItems);
  selectionCreation(`dropdownclasses`);
}


function updateFeatDetails(){
  var babDisplay = document.getElementById("babDisplay");
  var strDisplay = document.getElementById("strDisplay");
  var dexDisplay = document.getElementById("dexDisplay");
  var conDisplay = document.getElementById("conDisplay");
  var intDisplay = document.getElementById("intDisplay");
  var wisDisplay = document.getElementById("wisDisplay");
  var chaDisplay = document.getElementById("chaDisplay");
  var tlevelDisplay = document.getElementById("tlevelDisplay");
  var clevelDisplay = document.getElementById("clevelDisplay");
  var raceDisplay = document.getElementById("raceDisplay");
  var alignmentDisplay = document.getElementById("alignmentDisplay");

    if(document.getElementById("NPCChoice").value=="Monster"){
    babDisplay.innerHTML = `BAB: ${getBaB(document.getElementById("NPCBaB").value,document.getElementById("MonsterLevel").value)}`;
  }else{
      babDisplay.innerHTML = `BAB: ${getTotalBAB()}`;
    }
  strDisplay.innerHTML = `<p id="strDisplay">STR: ${getModifier(document.getElementById("NPCStr").value)}</p>`;
  dexDisplay.innerHTML = `<p id="dexDisplay">DEX: ${getModifier(document.getElementById("NPCDex").value)}</p>`;
  conDisplay.innerHTML = `<p id="conDisplay">CON: ${getModifier(document.getElementById("NPCCon").value)}</p>`;
  intDisplay.innerHTML = `<p id="intDisplay">INT: ${getModifier(document.getElementById("NPCInt").value)}</p>`;
  wisDisplay.innerHTML = `<p id="wisDisplay">WIS: ${getModifier(document.getElementById("NPCWis").value)}</p>`;
  chaDisplay.innerHTML = `<p id="chaDisplay">CHA: ${getModifier(document.getElementById("NPCCha").value)}</p>`;
  if(document.getElementById("NPCChoice").value=="Monster"){
    tlevelDisplay.innerHTML = `<p id="tlevelDisplay">Total Level: ${document.getElementById("MonsterLevel").value}</p>`;
    clevelDisplay.innerHTML = ``;
  }else{
    tlevelDisplay.innerHTML = `<p id="tlevelDisplay">Total Level: ${getTotalClassLevels()}</p>`;
    clevelDisplay.innerHTML = `<p id="clevelDisplay">Class Levels: ${getClassListWithLevel()}</p>`;
  }
  raceDisplay.innerHTML = `<p id="raceDisplay">Race: ${document.getElementById("NPCType").value}</p>`;
  alignmentDisplay.innerHTML = `<p id="alignmentDisplay">Alignment: ${document.getElementById("NPCAlignment").value}</p>`;
}

/**
 * creates function listener for specified element and event type 
 * @param {String} elementID 
 * @param {String} eventType 
 * @param {Function} functionName 
 */
function createListeners(elementID,eventType,functionName){
  const newListener = document.getElementById(elementID);
  newListener.addEventListener(eventType,()=>functionName());
}

function createVariableListener(elementID,eventType,functionName,variable,eventReliant=false){
  const newListener = document.getElementById(elementID);
  newListener.addEventListener(eventType,(e)=>
    {
      if(!eventReliant){
        functionName(variable)
      }else{
        functionName(e,variable)
      }
    })
}

function updateSaveValues(){
  var fortHTML = document.getElementById("fortsave");
  var refHTML = document.getElementById("refsave");
  var willHTML = document.getElementById("willsave");
  fortHTML.textContent = `Base Fort Save: ${getSaveBonus("Fort")}`;
  refHTML.textContent = `Base Ref Save: ${getSaveBonus("Ref")}`;
  willHTML.textContent = `Base Will Save: ${getSaveBonus("Will")}`;
}

function createToggleDisplayListener(elementID,eventType,functionName,variable1){
  const newListener = document.getElementById(elementID);
  newListener.addEventListener(eventType,()=>
    {
      if(variable1=="senseInput"){
        if(rangelessSense.includes(newListener.querySelector('.selected-item input').value.toLocaleLowerCase())){
          functionName(variable1,"none");
        }else{
          functionName(variable1);
        }
      }
      if(variable1=="featInput"){
        if(notInputFeat(newListener.querySelector('.selected-item input').value.toLocaleLowerCase())&&newListener.value!=""){
          functionName(variable1,"none");
        }else{
          functionName(variable1);
        }
      }
      if(variable1=="ManeuverabilitySection"){
        if(newListener.querySelector('.selected-item input').value.toLocaleLowerCase()!="fly"){
          functionName(variable1,"none");
        }else{
          functionName(variable1);
        }
      }
    });
}

function createVariableArrayListener(elementID,eventType,functionName,variableList,eventReliant=false){
  const newListener = document.getElementById(elementID);
  newListener.addEventListener(eventType,(e)=>
  {
    if(!eventReliant){
      functionName(...variableList)
    }else{
      functionName(e,...variableList)
    }
  });
}

function createWindowListener(functionName,variableArray){
  document.addEventListener('click',(e)=>
  {
    functionName(e,variableArray)
    });
}

/**updates attack section and attack dropdown */
function doAttacksDropdown(){
  if(document.getElementById("curseArea")!=null){
    document.getElementById("curseArea").innerHTML="";
    arrayToDropdown(getAttacks(),"curse","Select");
    createVariableListener(`dropdowncurse`,'click',dropdownInteraction,`dropdowncurse`,true);
    createVariableArrayListener(`dropdowncurse`,'keyup',searchDrop,[`dropdowncurse`,`searchcurse`]);
    multiChoice(`dropdowncurse`);
  }
  if(document.getElementById("monsterAbilitiesChoice")!=null){
    if(document.getElementById("monsterAbilitiesChoice").querySelector(".dropdown-box")!=null){
      let id = document.getElementById("monsterAbilitiesChoice").querySelector(".dropdown-box").id.replace("dropdown","");
      console.log(id);
      document.getElementById(`${id}Area`).innerHTML="";
      arrayToDropdown(getAttacks(),id,"Select");
      createVariableListener(`dropdown${id}`,'click',dropdownInteraction,`dropdown${id}`,true);
      createVariableArrayListener(`dropdown${id}`,'keyup',searchDrop,[`dropdown${id}`,`search${id}`]);

      multiChoice(`dropdown${id}`);
      if(!hasSelected(`dropdown${id}`)){
        document.getElementById(`dropdown${id}`).querySelector("li").classList.add("active");
      }
    }
  }
}


/**updates class information in forum */
function classListener(){
  const className = document.getElementById("dropdownSelectionclasses").value;
  let constArch = getArchetypeName(classJson.class,className);
  if(document.getElementById("usesSphereOption").checked){
    var sphereArchetypeList = getArchetypeName(sphereClassArchetype.sphereArchetypeList,className,true);
    constArch = [...constArch,...sphereArchetypeList];
  }
  let classList = convertToUppercase(getClassesData());
  let health = 0;
  health = getClassBasedHealth(getClassesData())
  if(className==="Custom"){
    document.getElementById("customClasses").style.display="block";
  }else{
    document.getElementById("customClasses").style.display="none";
  }
  // if(playerClassList.includes(capitalizedCaseCharacter(className.toLocaleLowerCase()))){
    // document.getElementById("archetypeSection").style.display="block";
    arrayToDropdown(classList,"chosenClasses","Select");
    createVariableListener(`dropdownchosenClasses`,'click',dropdownInteraction,`dropdownchosenClasses`,true);
    createVariableArrayListener(`dropdownchosenClasses`,'keyup',searchDrop,[`dropdownchosenClasses`,`searchchosenClasses`]);
    createListeners(`dropdownchosenClasses`,'change',displayArchetypes);
    selectionCreation(`dropdownchosenClasses`);
    additionalClick(`dropdownchosenClasses`,displayArchetypesList)
  // }else{
//    document.getElementById("archetypeSection").style.display="none";

  //}
  document.getElementById("classHealth").textContent = `Health: ${health}`;
  resetSkills();
  let skillList = getSkillsList(getClassesData());
  if(skillList==""){
    skillList=[];
  }
  doSkills(skillList,skillList,true);
  checkSpells();
}

function displayArchetypes(){
  let className = document.getElementById("dropdownSelectionchosenClasses").value;
  if(!npcClassList.includes(className)){
    arrayToDropdown(getValidArchetypes(getArchetypeList(className,true)),"archetypesList","Select")
    createVariableListener(`dropdownarchetypesList`,'click',dropdownInteraction,`dropdownarchetypesList`,true);
    createVariableArrayListener(`dropdownarchetypesList`,'keyup',searchDrop,[`dropdownarchetypesList`,`searcharchetypesList`]);
    selectionCreation("dropdownarchetypesList");
    additionalClick("dropdownarchetypesList",displayArchetypesDetails);
    let button = document.createElement("button");
    button.textContent = "Add Archetype";
    button.className = "formButton";
    button.type="button";
    button.setAttribute("onClick",`addArchetype('${className}')`);
    document.getElementById("archetypesListArea").append(button);
  }else{
    document.getElementById("archetypesListArea").innerHTML="";
  }
}

function dropdownOptions(id){
  document.getElementById(`${id}Options`).classList.toggle("show");
}

function displayArchetypesDetails(element){
  let details = document.getElementById("archetypeDetails");
  details.textContent=`Archetype Details:\n\n`+element;
}

function displayHiddenArchetypeDetails(element){
  console.log(element);
  let archetypeItem = document.getElementById(element).querySelector(".archetype-item");
  if(!archetypeItem.classList.contains("active")){
    archetypeItem.classList.add("active");
  }else{
    archetypeItem.classList.remove("active");
  }
}

function searchDrop(elementID,searchID){
  const filter = document.getElementById(searchID).value;
  const dropdownItems = document.getElementById(elementID).querySelectorAll(".dropdown-item");
  dropdownItems.forEach(dropdownItem=>{
      if(dropdownItem.innerHTML.toLocaleLowerCase().includes(filter)){
          dropdownItem.classList.remove("hide");
      }else{
          dropdownItem.classList.add("hide");
      }
  });
}

document.addEventListener('click',(e)=>{
  if(!e.target.closest('.dropdown-box')){
      closeAllDropdowns();
  }
  if(document.getElementById("sideNav")!=null){
    if(e.target.id!="openNav"&&!e.target.closest(".sidenav")){
      closeNav();
    }
  }
})


function meeleChange(){
  console.log("hi!");
}


// window.addEventListener("load",()=>{
//   createVariableListener('dropdown1','click',dropdownInteraction,'dropdown1',true);
//   createVariableListener('dropdown2','click',dropdownInteraction,'dropdown2',true);
//   createVariableArrayListener('dropdown1','keyup',searchDrop,['dropdown1','search1']);
//   createVariableArrayListener('dropdown2','keyup',searchDrop,['dropdown2','search2']);
// })

function closeAllDropdowns(){
    const dropdown = document.querySelectorAll(".dropdown-box");
    const dropdownArrow = document.querySelectorAll(".selected-item");
    dropdown.forEach(item=>{
        item.classList.remove("active");
    });
    dropdownArrow.forEach(item=>{
        item.classList.remove("active");
    });
}
function openDropdown(e,elementID){
    const dropdownList = document.querySelectorAll(".dropdown-box");
    const dropdownArrow = document.querySelectorAll(".selected-item");
    dropdownList.forEach(item=>{
        if(item.id!=elementID){
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        }
    })
    dropdownArrow.forEach(item=>{
        if(item.id!=elementID){
            if(item.classList.contains("active")){
              if(!e.target.id.includes("curses")){
                item.classList.remove("active");
              }
            }
        }
    })        
    const dropdown = document.getElementById(elementID);
    if(!dropdown.classList.contains("active")){
        dropdown.classList.add("active");
        dropdown.querySelector(".selected-item").classList.add("active");
      }else{
        if(!e.target.id.includes("search")&&!e.target.id.includes("curses")){
          dropdown.classList.remove("active");
          dropdown.querySelector(".selected-item").classList.remove("active");
        }
    }
}

function dropdownInteraction(e,elementID){
  openDropdown(e,elementID);
}

function createElementbasedListeners(element,eventType,functionName){
  element.addEventListener(eventType,()=>functionName());
}

function checkSpells(){
  let classList = document.getElementById("classesChoice").children
  let hasSpells = false;
  Array.from(classList).forEach(item=>{
    let className = item.querySelector("label").textContent;
    let object = classJson.class[getIndex(classJson.class,className.toLocaleLowerCase())].Abilities;
    if(object.includes("spells")){
      hasSpells=true;
    }
  })
  document.getElementById("spellButton").style = "display:none";
  if(hasSpells){
    document.getElementById("spellButton").style = "display:block";
  }

}


function spellDisplay(choice){
  let spellElement = document.getElementById("spell");
  if(choice=="Monster"){
    document.getElementById("spellsContainerInnate").style="display:block";
    document.getElementById("spellsContainerPrepared").style="display:block";
  }else{
    document.getElementById("spellsContainerInnate").style="display:none";
    document.getElementById("spellsContainerPrepared").style="display:none";
  }
}