
function setAttackChoice(attackType){
    let selection = document.getElementById(`${attackType}Selection`).value;
    let select = document.createElement("select");
    select.className="searchBarCreation";
    select.id = `${attackType}selection`
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
  let featDisplay = document.getElementById("featAmountDisplay");
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
        console.log("update")
      resetSkills();
      skills = ["Acrobatics","Climb","Fly","Perception","Stealth","Swim"];
      doSkills(skills,skills,true);
      // arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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
    // arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
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

function forceReread(information){
  let id = sessionStorage.getItem("NPC");
  let param = new URLSearchParams(window.location.search);
  id = param.get("NPC");
  let NPCInfo = information.NPCs[id];
  let skills = NPCInfo.skills;
  let cSkills = Object.keys(NPCInfo.skills);
  doSkills(cSkills,skills);
  refreshList()
}

/**
 * sets element to never be below 1
 * @param {String} id 
 */

function setProperMinLevel(elementID,forceAmount=1){
  let val = getElementPointer(elementID).value;
  if(val<1&&val!=""){
    getElementPointer(elementID).value=forceAmount;
  }
}

function enforceMinLevel(elementID){
  let val = getElementPointer(elementID).value;
  if(val<1){
    getElementPointer(elementID).value=1;
  }
}

function enforceMinLevelVariable(elementID,min){
  let val = getElementPointer(elementID).value;
  if(val<min){
    getElementPointer(elementID).value=min;
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
  let skillDisplay = document.getElementById("calculateHealth");
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
    let skillDisplay = document.getElementById("skillPointsDisplay");
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

function updateSpecialAbilities(action="keyup"){
  let children = document.getElementById("specialAbilityArea").childElementCount;
  let attacks=document.getElementById("meleeAttackArea").childElementCount;
  if(children>0){
    for(let i=0;i<attacks;i++){
    if(document.getElementById(`extraDmgLabelmeleeAttack${i}`)!=null){
        array = document.getElementById("specialAbilityArea").children
         let k = 0;
         let nameArray = []
         Array.from(array).forEach(element=>{
            nameArray.push(element.querySelector(`#SpecialAbilityName${k}`).value);
            k++;
         })
         let selection = document.getElementById(`dropdownmeleeAttackbonusAttackDamage${i}`);
         let activeList =[];
         k=0;
         if(selection!=null){
            let dropdownArea = selection.querySelector("ul");
            if(action=="listener"){
            dropdownArea.querySelectorAll("li").forEach(element=>{

                if(k>deletedID||k<deletedID){
                  if(element.className.includes("active")){
                    activeList.push("active");
                  }    
                else{
                    activeList.push("inactive");
                  }
              }
              k++;
            })
          }else if(action=="keyup"){
            dropdownArea.querySelectorAll("li").forEach(element=>{
              if(element.className.includes("active")){
                activeList.push("active");
              }else{
                activeList.push("inactive");
              }
            })
          }
            // console.log(dropdownArea)
            dropdownArea.innerHTML=""
            if(nameArray!=[]){
                    document.getElementById(`extraDmgLabelmeleeAttack${i}`).setAttribute("style","display:block");
              document.getElementById(`dropdownmeleeAttackbonusAttackDamage${i}`).setAttribute("style","display:block");

            }
            let j=0;

                nameArray.forEach(name=>{
            // console.log(name);
            // console.log(dropdownArea);
            if(name!=""&&dropdownArea!=""){
            
                let option = document.createElement("li");
                option.dataset.value = name;
                if(action=="listener"){

                if(activeList[j]=="active"){
                  option.className="dropdown-item active";
                }else{
                  option.className="dropdown-item";
                }
              }else if(action=="keyup"){
                if(activeList[j]=="active"&&j<=activeList.length){
                  console.log(activeList[j]);
                  option.className="dropdown-item active";
                }else{
                  option.className="dropdown-item";
                }
              }
                option.textContent = name;
                j++
//                console.log(option);
                dropdownArea.appendChild(option);
            }
     })
         }
    }
    if(document.getElementById(`dropdownmeleeAttackbonusAttackDamage${i}`)!=null){
//      console.log(document.getElementById(`dropdownmeleeAttackbonusAttackDamage${i}`))
      multiChoice(`dropdownmeleeAttackbonusAttackDamage${i}`)
    }
    }
  }else{
    for(let i=0;i<attacks;i++){
      if(document.getElementById(`extraDmgLabelmeleeAttack${i}`)!=null){
        document.getElementById(`extraDmgLabelmeleeAttack${i}`).setAttribute("style","display:none");
        document.getElementById(`dropdownmeleeAttackbonusAttackDamage${i}`).setAttribute("style","display:none");
      }
    }
  }
  deletedID = -1
//  console.log(children);
}

function updateFormOnType(){
  let choice = document.getElementById("NPCChoice").value;
  NPCDisplay(choice=="NPC");
  spellDisplay(choice);
}

function updateFeats(){
  let feats = featList;
  if(document.getElementById("usesSphereOption").checked){
    feats = feats.concat(sphereFeatList);
  }
  feats.sort();
  document.getElementById("dropdownfeat").remove();
  arrayToDropdown(feats,"feat","Select");
  createVariableListener(`dropdownfeat`,'click',dropdownInteraction,getElementPointer(`dropdownfeat`),true);
  createVariableArrayListener(`dropdownfeat`,'keyup',searchDrop,[getElementPointer(`dropdownfeat`),getElementPointer(`searchfeat`)]);
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
  let inputVal = getElementPointer(elementID).value;
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
  console.log(inputVal);
  if(itemList[inputVal.toLocaleLowerCase()]!=null){
    inputType=itemList[inputVal.toLocaleLowerCase()].input;
    baseCurse=itemList[inputVal.toLocaleLowerCase()].baseCurse;
    secondaryInput=itemList[inputVal.toLocaleLowerCase()].secondaryInput;
    usesAttacks=itemList[inputVal.toLocaleLowerCase()].usesAttacks;
    noBaseInput=itemList[inputVal.toLocaleLowerCase()].noBaseInput;
    usesDurability=itemList[inputVal.toLocaleLowerCase()].durability;
    hasDice =(inputType=="dice"||inputType=="breath");
    effectsAbilityScores = itemList[inputVal.toLocaleLowerCase()].abilityScore;
    hasRange = itemList[inputVal.toLocaleLowerCase()].range;
    hasSave = itemList[inputVal.toLocaleLowerCase()].saveType;
    hasRecharge = (inputType=="breath");
    hasDisplaySave = itemList[inputVal.toLocaleLowerCase()].displaySave;
    saveStat = itemList[inputVal.toLocaleLowerCase()].saveStat;
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
      }else if(inputVal=="Split"||inputVal=="Whirlwind"||inputVal=="Summon"){
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
    if(effectsAbilityScores){
      inner+=`<label class="inputName" for="monsterAbilityStatTemp">Effected Ability Score </label>
      <select class="searchBarCreation" name="monsterAbilityStatTemp" id="monsterAbilityStatTemp">
      <option>Str</option>
      <option>Dex</option>
      <option>Con</option>
      <option>Int</option>
      <option>Wis</option>
      <option>Cha</option>
      </select>`
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
      if(inner!=""&&(!usesAttacks||inputType=="curse"||hasSave)){
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
    if(saveStat){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilitySaveStatTemp">Save Ability Score </label>
      <select class="searchBarCreation" name="monsterAbilitySaveStatTemp" id="monsterAbilitySaveStatTemp">
      <option>Str</option>
      <option>Dex</option>
      <option>Con</option>
      <option>Int</option>
      <option>Wis</option>
      <option>Cha</option>
      </select>`
    }
    if(hasDisplaySave){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilityChanceTemp">Display Save DC</label>
      <input type="checkbox" class="searchBarCreation" name="monsterAbilityDisplaySaveDCTemp" id="monsterAbilityDisplaySaveDCTemp" placeholder="Insert Chance Here" title="monsterAbilityDisplaySaveDCTempInput"><label class="inputName"></label>`
    }
    if(chance){
      if(inner!=""){
        inner+="<br>";
      }
      inner+=`<label class="inputName" for="monsterAbilityChanceTemp">Chance</label>
      <input type="number" class="searchBarCreation" name="monsterAbilityChanceTemp" id="monsterAbilityChanceTemp" placeholder="Insert Chance Here" title="monsterAbilityChanceTempInput"><label class="inputName"> % </label>`
    }
    getElementPointer(inputAreaID).innerHTML = inner;
    if(hasDice){
      if(itemList[inputVal.toLocaleLowerCase()].default!=null){
        document.getElementById("monsterAbilityDiceTemp")[getChoiceSelection(['d2','d4','d6','d8','d10','d12'],itemList[inputVal.toLocaleLowerCase()].default)].selected=true;
      }
    }
    if(hasSave){
      document.getElementById("monsterAbilitySaveTemp")[getChoiceSelection(['Fort','Reflex','Will'],itemList[inputVal.toLocaleLowerCase()].saveType)].selected=true;
    }
    if(usesAttacks){
      doAttacksDropdown(inputVal);

    }
  }else{
    if(monsterAbilitiesList.includes(inputVal)){
      getElementPointer(inputAreaID).innerHTML = inner;
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
  let babDisplay = document.getElementById("babDisplay");
  let strDisplay = document.getElementById("strDisplay");
  let dexDisplay = document.getElementById("dexDisplay");
  let conDisplay = document.getElementById("conDisplay");
  let intDisplay = document.getElementById("intDisplay");
  let wisDisplay = document.getElementById("wisDisplay");
  let chaDisplay = document.getElementById("chaDisplay");
  let tlevelDisplay = document.getElementById("tlevelDisplay");
  let clevelDisplay = document.getElementById("clevelDisplay");
  let raceDisplay = document.getElementById("raceDisplay");
  let alignmentDisplay = document.getElementById("alignmentDisplay");

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
 * @param {string} elementID
 * @param {String} eventType 
 * @param {Function} functionName 
 */
function createListeners(elementID,eventType,functionName){
  const newListener = getElementPointer(elementID);
  const eventObject=()=>functionName()
  newListener.addEventListener(eventType,eventObject)
}

function createVariableListener(elementID,eventType,functionName,variable,eventReliant=false){
  let newListener = getElementPointer(elementID);
  const eventObject=(e)=>
    {
      if(!eventReliant){
        functionName(variable)
      }else{
        functionName(e,variable)
      }
    };
    newListener.addEventListener(eventType,eventObject)
}

function updateSaveValues(){
  let fortHTML = document.getElementById("fortsave");
  let refHTML = document.getElementById("refsave");
  let willHTML = document.getElementById("willsave");
  fortHTML.textContent = `Base Fort Save: ${getSaveBonus("Fort")}`;
  refHTML.textContent = `Base Ref Save: ${getSaveBonus("Ref")}`;
  willHTML.textContent = `Base Will Save: ${getSaveBonus("Will")}`;
}

function createToggleDisplayListener(elementID,eventType,functionName,variable1){
  const newListener = getElementPointer(elementID);
  const eventObject=()=>
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
    };
    newListener.addEventListener(eventType,eventObject)
}

function createVariableArrayListener(elementID,eventType,functionName,variableList,eventReliant=false){
  const newListener = getElementPointer(elementID);
  const eventObject=(e)=>
  {
    if(!eventReliant){
      functionName(...variableList)
    }else{
      functionName(e,...variableList)
    }
  };
    newListener.addEventListener(eventType,eventObject)
}


function deleteListener(elementID,eventType,functionName){
  console.log(elementID);
    console.log(document.getElementById(elementID));
  const element = document.getElementById(elementID);
  let registryKey = `${elementID}${eventType}${functionName}`;
  console.log(listener);
  console.log(eventType);
  console.log(element)
  if(listener){
    element.removeEventListener(eventType,listener);
    console.log(registryKey);
  }
}

function createWindowListener(functionName,variableArray){
  const eventObject = (e)=>
  {
    functionName(e,variableArray)
    };
    newListener.addEventListener(eventType,eventObject)
    document.addEventListener('click',eventObject);
}

/**updates attack section and attack dropdown */
function doAttacksDropdown(uid=""){
  console.log(uid)
  if(uid.length==0){
    console.log("update")
  }

  if(document.getElementById("curseArea")!=null){
    let node = document.getElementById('dropdownSelectionmonsterAbilities').value;
    document.getElementById("curseArea").innerHTML="";
    arrayToDropdown(getAttacks(node),"curse","Select");
    createVariableListener(`dropdowncurse`,'click',dropdownInteraction,getElementPointer(`dropdowncurse`),true);
    createVariableArrayListener(`dropdowncurse`,'keyup',searchDrop,[getElementPointer(`dropdowncurse`),getElementPointer(`searchcurse`)]);
    multiChoice(`dropdowncurse`);
  }
  if(document.getElementById("monsterAbilitiesChoice")!=null){
    if(document.getElementById("monsterAbilitiesChoice").querySelector(".dropdown-box")!=null){


      document.querySelectorAll("#monsterAbilitiesChoice > div").forEach(element=>{
        let id = element.querySelector(".dropdown-box").id.replace("dropdown","");
        let node = id.replace("attackSection","")
        let activeList = document.getElementById("monsterAbilitiesChoice").querySelector(".dropdown-box");
        document.getElementById(`${id}Area`).innerHTML="";
        arrayToDropdown(getAttacks(node),id,"Select",true,activeList.querySelectorAll("li"));
        createVariableListener(`dropdown${id}`,'click',dropdownInteraction,getElementPointer(`dropdown${id}`),true);
        createVariableArrayListener(`dropdown${id}`,'keyup',searchDrop,[getElementPointer(`dropdown${id}`),getElementPointer(`search${id}`)]);
        multiChoice(`dropdown${id}`);
        if(!hasSelected(`dropdown${id}`)){
          document.getElementById(`dropdown${id}`).querySelector("li").classList.add("active");
        }
      })



    }
  }
}

function doSpecialAttacksDropdown(){
  if(document.getElementById("specialAttackArea")!=null){
    if(document.getElementById("specialAttackArea").childElementCount>0){
      for(let i=0;i<document.getElementById("specialAttackArea").childElementCount;i++){
        let activeList = document.getElementById(`specialAttackZone${i}`).querySelector(".dropdown-box")
        let selected = document.getElementById(`dropdownSelectionspecialAttackAttackList${i}`).value;
          document.getElementById(`specialAttackAttackList${i}Area`).innerHTML="";
          arrayToDropdown(getAttacksSpecial(),`specialAttackAttackList${i}`,selected,true,activeList.querySelectorAll("li"),false,true,true);
          // activeList.querySelectorAll("li").array.forEach(element => {
          //   console.log(element)
          // // });
//          document.getElementById(`dropdownSelectionspecialAttackAttackList${i}`).value="Select";
        
        createVariableListener(`dropdownspecialAttackAttackList${i}`,'click',dropdownInteraction,getElementPointer(`dropdownspecialAttackAttackList${i}`),true);
        createVariableArrayListener(`dropdownspecialAttackAttackList${i}`,'keyup',searchDrop,[getElementPointer(`dropdownspecialAttackAttackList${i}`),getElementPointer(`searchfeat`)]);
        selectionCreation(`dropdownspecialAttackAttackList${i}`);
      }
  }
  }
}


/**updates class information in forum */
function classListener(){
  const className = document.getElementById("dropdownSelectionclasses").value;
  let constArch = getArchetypeName(classJson.class,className);
  if(document.getElementById("usesSphereOption").checked){
    let sphereArchetypeList = getArchetypeName(sphereClassArchetype.sphereArchetypeList,className,true);
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
    createVariableListener(`dropdownchosenClasses`,'click',dropdownInteraction,getElementPointer(`dropdownchosenClasses`),true);
    createVariableArrayListener(`dropdownchosenClasses`,'keyup',searchDrop,[getElementPointer(`dropdownchosenClasses`),getElementPointer(`searchchosenClasses`)]);
    createListeners(`dropdownchosenClasses`,'change',displayArchetypes);
    selectionCreation(`dropdownchosenClasses`);
    additionalClick(`dropdownchosenClasses`,displayArchetypesList)
  // }else{
//    document.getElementById("archetypeSection").style.display="none";

  //}
  document.getElementById("classHealth").textContent = `Health: ${health}`;
//  resetSkills();
  let skillList = getSkillsList(getClassesData());
  if(skillList==""){
    skillList=[];
  }
//  doSkills(skillList,skillList,true);
  checkSpells();
}

function displayArchetypes(){
  let className = document.getElementById("dropdownSelectionchosenClasses").value;
  if(!npcClassList.includes(className)){
    arrayToDropdown(getValidArchetypes(getArchetypeList(className,true)),"archetypesList","Select")
    createVariableListener(`dropdownarchetypesList`,'click',dropdownInteraction,getElementPointer(`dropdownarchetypesList`),true);
    createVariableArrayListener(`dropdownarchetypesList`,'keyup',searchDrop,[getElementPointer(`dropdownarchetypesList`),getElementPointer(`searcharchetypesList`)]);
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


function toggleHidableElements(id,className){
  let archetypeItem = document.getElementById(id);
  if(!archetypeItem.classList.contains("active")){
    archetypeItem.classList.add("active");
  }else{
    archetypeItem.classList.remove("active");
  }
}

function searchDrop(elementID,search){
  const filter = search.value;
  const dropdownItems = getElementPointer(elementID).querySelectorAll(".dropdown-item");
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
    // console.log(e)
    // console.log(elementID)
    // console.log(dropdownList)
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
    const dropdown = elementID;
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
//  console.log("opened?")
  openDropdown(e,elementID);
}

function createElementbasedListeners(elementID,eventType,functionName){
  getElementPointer(element).addEventListener(eventType,()=>functionName());
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