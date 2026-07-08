var deletedID = -1;
function populateClassData(classArray){
    let nodes = document.getElementById("classesChoice").childNodes;
    let len = document.getElementById("classesChoice").childElementCount;
    for(let i =0;i<len;i++){
      let name = document.getElementById(`classesChoice`).children.item(i).getElementsByTagName("label").item(0).textContent;
      let id = (nodes[i].id).replace("Choice","").toLocaleLowerCase();
      let level = document.getElementById(`classes${id}`).value;
      let archetype = document.getElementById(`archetype${id}subList`);
      if(archetype==null){
        archetype="None";
      }else{
        archetype=archetype.value;
        if(archetype==""){
          archetype="None";
        }
      }
      if(level>0){
        let classJson = {
          "name":name,
          "level":level,
          "archetype":archetype
        };
        classArray.push(classJson)
      }
//    document.getElementById(id);
   }
}


function populateXDay(array,elementName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  for(let i=0;i<len;i++){
    let amount = document.getElementById(`${elementName}perDay${i}`).value;
    let list = document.getElementById(`${elementName}List${i}`).value;
    array.push(amount+"/day-"+list);
  }
}

function populateExtraAC(array,elementName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
      let abilityJson ={};
  for(let i=0;i<len;i++){
    let valName = document.getElementById(`${elementName}name${i}`).value;
    let valDetails = document.getElementById(`${elementName}amount${i}`).value;
    abilityJson[valName]=valDetails;
    }
    if(Object.keys(abilityJson).length>0){
      array.push(abilityJson);
    }
}

function populateSpecialAbilityData(array,elementName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  for(let i=0;i<len;i++){
    let valName = document.getElementById(`${elementName}Name${i}`).value;
    let valDetails = document.getElementById(`${elementName}Details${i}`).value;
    let abilityJson =
    {
      "abilityName": valName,
      "ability_desc": valDetails
    }
    if(document.getElementById(`saveDC${elementName}${i}`)){
      if(document.getElementById(`saveDC${elementName}${i}Option`).checked){
        abilityJson["dcStat"] = document.getElementById(`dcStat${elementName}${i}`).value;
        abilityJson["saveType"] = document.getElementById(`saveType${elementName}${i}`).value;
      }
    }
      abilityJson["abilityType"]=document.getElementById(`uniqueTrait${elementName}${i}`).value;
      if(document.getElementById(`aura${elementName}${i}Option`).checked){
        abilityJson["auraRadius"]=document.getElementById(`auraRadius${elementName}${i}`).value;
      }
    array.push(abilityJson);
  }
}

function populateDataDropDownArray(array,name){
    //for getting information
  let len = document.getElementById(`${name}Choice`).childElementCount;
  for(let i = 0;i<len;i++){
    let val = document.getElementById(`${name}Choice`).children.item(i).getElementsByTagName("label").item(0).textContent;
    array.push(val);
  }
}

function populateDataDropDownJson(json,name){
  let len = document.getElementById(`${name}Choice`).childElementCount;
  let val = ""
  for(let i = 0;i<len;i++){
      let entry = document.getElementById(`${name}Choice`).children.item(i).getElementsByTagName("label").item(0).textContent;
      if((document.getElementById(`${name}${entry}`))!=null){
        val = document.getElementById(`${name}${entry}`).value;
      }
      json[entry]=val;
      val = ""
    }
 
}

function populate5eData(array,elementName,jsonSetName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  let jsonName = jsonSetName+"Name";
  let description = jsonSetName+"_desc";
  for(let i=0;i<len;i++){
    let abilityJson ={};
    let valName = document.getElementById(`${elementName}name${i}`).value;
    let valDetails = document.getElementById(`${elementName}details${i}`).value;
      abilityJson[jsonName] =valName,
      abilityJson[description]= valDetails
    array.push(abilityJson);
  }
}


function populateCMDBonusData(array,elementName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  for(let i=0;i<len;i++){
    let valName = document.getElementById(`${elementName}Details${i}`).value;
    let valDetails = document.getElementById(`${elementName}Bonus${i}`).value;
    if(valDetails==0||valDetails==""){
      valDetails="";
    }
    let abilityJson =
    {
      "CMDBonusDetails": valName,
      "CMDBonus": String(valDetails)
    }
    array.push(abilityJson);
  }
}

function populateData(array,elementName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  for(let i=0;i<len;i++){
    let val = document.getElementById(`${elementName}${i}`).value;


    array.push(val);
  }
}

function getIndexOfSelected(element){
  let index = -1;
  let point = 0;
  element.querySelectorAll("li").forEach(element=>{
    if(index>-1){
      return;
    }
    if(element.className.includes("active")){
      index=point;
    }
    point++;
  })
  return index;
}

function getSecondaryData(index,elementData){
  let i=0;
  let text = "";
  elementData.querySelectorAll("li").forEach(element=>{
    if(i==index){
      text = element.dataset.value
    }
    i++;
  })
  return text;
}

function populateSpecialAttack(arr){
  let children = document.getElementById("specialAttackArea").childElementCount;
  let hasDamage = true;
  let perDaySpecial = ""
  for(let i=0;i<children;i++){
    let json ={
      "name":document.getElementById(`specialAttack${i}`).value
    };
    json["displayAttributes"]=document.getElementById(`specialAttackZone${i}Option`).checked;
    if(document.getElementById(`specialAttackZone${i}Option`).checked){
      let val = document.getElementById(`choicesSpecial${i}`).value;
      json["variation"]=val;
      switch(val){
        case "Attack":
          json["toHit"] = document.getElementById(`specialAttackToHitBonus${i}`).value;
          if(document.getElementById(`dropdownSelectionspecialAttackAttackList${i}`).value!="Select"){
            json["attack"]=document.getElementById(`dropdownSelectionspecialAttackAttackList${i}`).value;
            json["attackIndex"]=getIndexOfSelected(document.getElementById(`dropdownspecialAttackAttackList${i}`))
            json["attackType"]=getSecondaryData(getIndexOfSelected(document.getElementById(`dropdownspecialAttackAttackList${i}`)),document.getElementById(`dropdownspecialAttackAttackList${i}`));
          }else{
            json["attack"]=getAttacks()[0];
            json["attackIndex"]=0
            json["attackType"]=getSecondaryData(0,);
          }
          break;
        case "Save":
          json["saveThrowCheck"]=document.getElementById(`savingThrowTypeZone${i}Option`).checked;
          if(document.getElementById(`savingThrowTypeZone${i}Option`).checked){
            json["saveThrow"]=document.getElementById(`throwTypespecialAttack${i}`).value;
          }
          json["saveStat"] = document.getElementById(`dcStatspecialAttack${i}`).value;
          perDaySpecial = document.getElementById(`perDayZone${i}Option`).checked;
          json['perDayChecked']=perDaySpecial;
          if(perDaySpecial){
            json["perDaySpecial"]=document.getElementById(`specialAttackperDay${i}`).value;
          }
          break;
        case "Save Only":
          json["saveThrowCheck"]=document.getElementById(`savingThrowTypeZone${i}Option`).checked;
          if(document.getElementById(`savingThrowTypeZone${i}Option`).checked){
            json["saveThrow"]=document.getElementById(`throwTypespecialAttack${i}`).value;
          }
          json["saveStat"] = document.getElementById(`dcStatspecialAttack${i}`).value;
          perDaySpecial = document.getElementById(`perDayZone${i}Option`).checked;
          json['perDayChecked']=perDaySpecial;
          if(perDaySpecial){
            json["perDaySpecial"]=document.getElementById(`specialAttackperDay${i}`).value;
          }
          hasDamage=false;
      }
      if(hasDamage){
        json["diceCount"]=document.getElementById(`specialAttackdiceCount${i}`).value;
        json['damageDice']=document.getElementById(`damageDicespecialAttack${i}`).value;
      }
      hasDamage=true;

    }
    console.log(json)
    arr.push(json);
  }
// json['name'] =;
}

function populateDataAura(array,elementName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  for(let i=0;i<len;i++){
    let aura = document.getElementById(`${elementName}Aura${i}`).value;
    let radius = document.getElementById(`${elementName}Radius${i}`).value;
  let auraJson = {
    "name":aura,
    "radius":radius
  }
  if(document.getElementById(`saveDC${elementName}${i}Option`).checked){
        auraJson["dcStat"] = document.getElementById(`dcStat${elementName}${i}`).value;
    }
    if(document.getElementById(`auraDmg${elementName}${i}Option`)){
      if(document.getElementById(`auraDmg${elementName}${i}Option`).checked){
        auraJson["auraDmg"]=document.getElementById(`auraDmg${elementName}${i}`).value;
      }
    }

    array.push(auraJson);
    }        
}

function populateAttackData(array,elementName){
  let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  for(let i=0;i<len;i++){
    let name = document.getElementById(`${elementName}Name${i}`).value;
    let diceCount =0;
    let damageDice = 0;
    let hasUniqueCrit = false;
    let hasRange = false;
    let hasMultiplier = false;
    let hasUniqueDmg = false;
    let hasMultiAttack = false;
    let hasEnchants = false;
    let weaponMaterial = "";
    let weaponType = "Weapon";
    if(document.getElementById(`${elementName}diceCount${i}`)!=null){
      diceCount = document.getElementById(`${elementName}diceCount${i}`).value;
      damageDice = document.getElementById(`damageDice${elementName}${i}`).value;
      hasUniqueCrit = document.getElementById(`critStats${elementName}${i}Option`).checked;
      hasRange = document.getElementById(`critRange${elementName}${i}Option`).checked;
      hasMultiplier = document.getElementById(`critMultiplier${elementName}${i}Option`).checked;
      hasMultiAttack = document.getElementById(`multiAttack${elementName}${i}DivOption`).checked;
      hasEnchants = document.getElementById(`enchantment${elementName}${i}0`)===null?false:true;
      hasUniqueDmg = document.getElementById(`${elementName}bonusAttackDamage${i}Area`)!=null;
      weaponType = "Custom";
    }
    if(document.getElementById(`weaponMaterial${i}`)!=null){
      weaponMaterial = document.getElementById(`weaponMaterial${i}`);
    }
    if(diceCount<1){
      diceCount = 1;
    }
//    document.getElementById(`enchantment${elementName}${i}0`).value
    let json={
      "name":name,
      "diceCount":diceCount,
      "damageDice":damageDice
    }

    if(hasUniqueCrit){
      if(hasRange){
        let critRange = document.getElementById(`critRange${elementName}${i}`).value;
        json["critRange"]=critRange;
      }
      if(hasMultiplier){
       let multiplier = document.getElementById(`critMultiplier${elementName}${i}`).value;
       json["critMultiplier"]=multiplier;
      }
    }
    if(hasUniqueDmg){
      json["uniqueDamageBonus"]= getMultiDropdownSelectionList(`dropdownmeleeAttackbonusAttackDamage${i}`);
    }
    if(hasMultiAttack){
      let multiAttack = document.getElementById(`multiAttack${elementName}${i}`).value;
      json["multiAttack"]=multiAttack;
    }
    if(hasEnchants){
      let enchantmentList =[];
      let enchantCount = document.getElementById(`enchantmentArea${elementName}${i}`).childElementCount;
      for(let j=0;j<enchantCount;j++){
        let enchantment = document.getElementById(`enchantment${elementName}${i}${j}`).value;
        if(enchantment!=""){
          enchantmentList.push(enchantment);
        }
      }
      json["enchantments"]=enchantmentList;
    }
    if(Number(document.getElementById(`${elementName}toHitModifier${i}`).value)!=0&&document.getElementById(`${elementName}toHitModifier${i}`).value!==" "){
      json['toHitModifier']=document.getElementById(`${elementName}toHitModifier${i}`).value;
    }
    if(document.getElementById(`isAlternative${elementName}${i}Option`)!=null){
        json['isAlternative']=document.getElementById(`isAlternative${elementName}${i}Option`).checked;
        json['isAdditive']=document.getElementById(`isAdditive${elementName}${i}Option`).checked;
    }
    if(document.getElementById(`meleeMaterial${i}`)!=null){
      json['material']=document.getElementById(`meleeMaterial${i}`).value;
    }
    if(document.getElementById(`meleeAttackfullAttack${i}`)!=null){
      json['fullRoundAttackCount']=document.getElementById(`meleeAttackfullAttack${i}`).value;
    }
    json["weaponType"]=weaponType;
    array.push(json)
  }
}

function populateMultiSkill(array,elementName){
    let len = document.getElementById("forum").querySelector(`.${elementName}`).childElementCount;
  for(let i=0;i<len;i++){
    let name = document.getElementById(`${elementName}Name${i}`).value;
    let ranks = document.getElementById(`${elementName}Value${i}`).value;
    let multiSkillJson = {};
    let jname =`Name`;
    let jranks = `Ranks`;
    multiSkillJson[jname]=name,
    multiSkillJson[jranks]=ranks
    array.push(multiSkillJson);
  }
}

function populateSkills(json,list,name){
//  let len = document.getElementById("forum").querySelector(`.${elementName}Options`).childElementCount;
let multiSkillArray = [];
  list.forEach(skill=>{
    if(skill!=="Knowledge"){
      let skillVal = document.getElementById(skill).value;
      let hasSkill = document.getElementById(skill+"Option").checked;
      if(hasSkill){
        if(name!="knowledge"){
          if(skill=="Profession"||skill=="Craft"){
            populateMultiSkill(multiSkillArray,skill);
            if(multiSkillArray.length>0){
              json[skill]=multiSkillArray;
            }
            multiSkillArray=[]
          }else{
            json[skill]=skillVal;
          }
        }else{
          if(document.getElementById("skillsKnowledgeOption").checked){
            json[`Knowledge(${skill})`]=skillVal;
          }
        }
      }
    }else{
      populateSkills(json,['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'],"knowledge");
    }
    // if(spellLevel!=''&&hasLevel){
    //   prepared[level]=spellLevel;
    // }
  });

}

/**
 * creates element that allows for creation of new input elements
 * @param {string} choiceName 
 * @param {string} buttonText 
 * @param {string} placeholderText 
 * @param {boolean} isNested
 * @param {boolean} canHaveDC
 */
function createArrayChoice(choiceName,buttonText,placeholderText,isNested=false,canHaveDC=false){
  let choice = document.getElementById("forum").querySelector(`.${choiceName}`).childElementCount;
  let div = document.createElement("div");
  if(isNested){
    div = document.createElement("div4");
  }
  let input = document.createElement("textarea");
  input.setAttribute("type","text");
  input.setAttribute("class","searchBarCreation");
  input.setAttribute("name",`${choiceName}${choice}`);
  input.setAttribute("id",`${choiceName}${choice}`);
  input.setAttribute("placeholder",`${placeholderText}`);
  input.setAttribute("title",`NPC ${choiceName}`);
  let button = document.createElement("button");
  button.setAttribute("class","formButton");
  button.setAttribute("id",`delete${choiceName}${choice}`);
  button.setAttribute("type","button");
  button.setAttribute("onClick",`deleteArrayChoice(${choice},'${choiceName}')`);
  if(isNested){
    button.setAttribute("onClick",`deleteArrayChoice(${choice},'${choiceName}',true)`);
  }
    if(canHaveDC){
    let saveDCCheckLabel = document.createElement("p");
    saveDCCheckLabel.setAttribute("class","inputName");
    saveDCCheckLabel.textContent = "Has Save DC";
    let saveDCChoice = document.createElement("input");
    saveDCChoice.setAttribute("type","checkbox");
    saveDCChoice.setAttribute("id",`saveDC${choiceName}${choice}Option`);
    saveDCChoice.setAttribute("placeholder","toggle");
    saveDCChoice.setAttribute("onclick",`toggle('saveDC${choiceName}${choice}')`);
    saveDCCheckLabel.appendChild(saveDCChoice);
    let container = document.createElement("div2");
    container.setAttribute("id",`saveDC${choiceName}${choice}`);
    container.setAttribute("style","display:none");
    container.setAttribute("class","stairCase");
    let dcStat = document.createElement("select");
    dcStat.setAttribute("class","searchBarCreation");
    dcStat.setAttribute("name",`dcStat${choiceName}${choice}`);
    dcStat.setAttribute("id",`dcStat${choiceName}${choice}`);
    let saves=['Ref','Fort','Will'];
    let ability = ['Str','Dex','Con','Int','Wis','Cha'];
    createSelection(ability,dcStat);

  let DCLabel = document.createElement("label");
  DCLabel.setAttribute("class","inputName");
  DCLabel.setAttribute("for",`dcStat${choiceName}${choice}`);
  DCLabel.textContent="Save Type";

    DCLabel.appendChild(dcStat);
    container.appendChild(DCLabel);
    let br3 = document.createElement("p");
    container.appendChild(br3);
  }
  button.textContent = `Delete ${buttonText}`;
  div.appendChild(input)
  if(canHaveDC){
    div.appendChild(saveDCCheckLabel);
    div.appendChild(container);
  }
  div.appendChild(button);
  document.getElementById("forum").querySelector(`.${choiceName}`).appendChild(div);
}
/**
 * deletes element based on id and adjusts other elements accordingly
 * @param {int} choiceID 
 * @param {string} choiceName 
 * @param {boolean} isNested 
 */
function deleteArrayChoice(choiceID,choiceName,isNested=false,canHaveDC=false){
    let divName = "div"
    if(isNested){
      divName="div4";
    }
    let elements = document.getElementById("forum").querySelector(`.${choiceName}`).querySelectorAll(divName).item(choiceID);
    let elementals = document.getElementById("forum").querySelector(`.${choiceName}`).querySelectorAll(divName);
    let element;
    for(let i=elementals.length-1;i>choiceID;i--){
        element = document.getElementById("forum").querySelector(`.${choiceName}`).querySelectorAll(divName)[i];
        element.querySelector(`#${choiceName}${i}`).name=`${choiceName}`+(i-1);
        element.querySelector(`#${choiceName}${i}`).id=`${choiceName}`+(i-1);
        element.querySelector(`#delete${choiceName}${i}`).setAttribute("onClick",`deleteArrayChoice(${(i-1)},'${choiceName}')`);
        if(isNested){
          element.querySelector(`#delete${choiceName}${i}`).setAttribute("onClick",`deleteArrayChoice(${(i-1)},'${choiceName}',true)`);
        }
        if(canHaveDC){
          element.querySelector(`label[for='saveType${choiceName}${i}']`).htmlFor=`saveType${choiceName}`+(i-1);
          element.querySelector(`label[for='dcStat${choiceName}${i}']`).htmlFor=`dcStat${choiceName}`+(i-1);
          element.querySelector(`#saveDC${choiceName}${i}`).id=`saveDC${choiceName}${(i-1)}`;
          element.querySelector(`#dcStat${choiceName}${i}`).name=`dcStat${choiceName}${(i-1)}`;
          element.querySelector(`#dcStat${choiceName}${i}`).id=`dcStat${choiceName}${(i-1)}`;
          element.querySelector(`#saveType${choiceName}${i}`).name=`saveType${choiceName}${(i-1)}`;
          element.querySelector(`#saveType${choiceName}${i}`).id=`saveType${choiceName}${(i-1)}`;
          element.querySelector(`#saveDC${choiceName}${i}Option`).setAttribute("onclick",`toggle('saveDC${choiceName}${(i-1)}')`);
          element.querySelector(`#saveDC${choiceName}${i}Option`).id=`saveDC${choiceName}${(i-1)}Option`;
        }
        element.querySelector(`#delete${choiceName}${i}`).id=`delete${choiceName}`+(i-1);
    }
  
  
    elements.remove();
}
/**
 * creates element that makes elements with two inputs
 * @param {string} overallElementName 
 * @param {string} elementName1 
 * @param {string} elementName2 
 * @param {string} buttonText 
 * @param {string} placeholderText1 
 * @param {string} placeholderText2 
 * @param {string} buttonType1 
 * @param {string} buttonType2 
 * @param {boolean} canHaveDC=false
 * @param {boolean} needSaveType=false
 * @param {boolean} canBeAnAura=false
 * @param {boolean} hasUniqueTrait=false 
 * @param {boolean} canHaveDamage=false
 * @param {boolean} hasToggle=false
 */
function createDualInformation(overallElementName,elementName1,elementName2,buttonText,placeholderText1,placeholderText2,buttonType1,buttonType2,canHaveDC=false,needSaveType=false,canBeAnAura=false,hasUniqueTrait=false,canHaveDamage=false,addListener=false){
  let choice = document.getElementById("forum").querySelector(`.${overallElementName}`).childElementCount;
  let div = document.createElement("div");
  div.setAttribute("class",`${overallElementName}`);
  if(buttonType1==="text"){
    var AName = document.createElement("textarea");
  }else{
    var AName = document.createElement("input");
  }
  AName.setAttribute("type",`${buttonType1}`);
  AName.setAttribute("class","searchBarCreation");
  AName.setAttribute("name",`${overallElementName}${elementName1}${choice}`);
  AName.setAttribute("id",`${overallElementName}${elementName1}${choice}`);
  AName.setAttribute("placeholder",`${placeholderText1}`);
  AName.setAttribute("title",`NPC ${overallElementName}`);
  if(buttonType2==="text"){
    var ADetails = document.createElement("textarea");
  }else{
    var ADetails = document.createElement("input");
  }
  ADetails.setAttribute("type",`${buttonType2}`);
  ADetails.setAttribute("class","searchBarCreation");
  ADetails.setAttribute("name",`${overallElementName}${elementName2}${choice}`);
  ADetails.setAttribute("id",`${overallElementName}${elementName2}${choice}`);
  ADetails.setAttribute("placeholder",`${placeholderText2}`);
  ADetails.setAttribute("title",`NPC ${overallElementName}`);
  if(canHaveDC){
    var saveDCCheckLabel = document.createElement("p");
    saveDCCheckLabel.setAttribute("class","inputName");
    saveDCCheckLabel.textContent = "Has Save DC";
    var saveDCChoice = document.createElement("input");
    saveDCChoice.setAttribute("type","checkbox");
    saveDCChoice.setAttribute("id",`saveDC${overallElementName}${choice}Option`);
    saveDCChoice.setAttribute("placeholder","toggle");
    saveDCChoice.setAttribute("onclick",`toggle('saveDC${overallElementName}${choice}')`);
    saveDCCheckLabel.appendChild(saveDCChoice);
    var container = document.createElement("div2");
    container.setAttribute("id",`saveDC${overallElementName}${choice}`);
    container.setAttribute("style","display:none");
    container.setAttribute("class","stairCase");
    let dcStat = document.createElement("select");
    dcStat.setAttribute("class","searchBarCreation");
    dcStat.setAttribute("name",`dcStat${overallElementName}${choice}`);
    dcStat.setAttribute("id",`dcStat${overallElementName}${choice}`);
    let ability = ['Str','Dex','Con','Int','Wis','Cha'];
    createSelection(ability,dcStat);
    let DCLabel = document.createElement("label");
    DCLabel.setAttribute("class","inputName");
    DCLabel.setAttribute("for",`dcStat${overallElementName}${choice}`);
    DCLabel.textContent="Relevant Ability Mod";
    DCLabel.appendChild(dcStat);
    container.appendChild(DCLabel);
    addBreak(container);
  }
    if(hasUniqueTrait){
            let uniqueTrait = document.createElement("select");
      uniqueTrait.setAttribute("class","searchBarCreation");
      uniqueTrait.setAttribute("name",`uniqueTrait${overallElementName}${choice}`);
      uniqueTrait.setAttribute("id",`uniqueTrait${overallElementName}${choice}`);
      let trait=['Su(Supernatural)','Ex(Extraordinary)','Sp(Spell-Like)'];
      createSelection(trait,uniqueTrait);
      var uniqueTraitLabel = document.createElement("label");
      uniqueTraitLabel.setAttribute("class","inputName");
      uniqueTraitLabel.setAttribute("for",`uniqueTrait${overallElementName}${choice}`);
      uniqueTraitLabel.textContent="Ability Trait";
      uniqueTraitLabel.appendChild(uniqueTrait);
    }
    if(needSaveType){
      let saveType = document.createElement("select");
      saveType.setAttribute("class","searchBarCreation");
      saveType.setAttribute("name",`saveType${overallElementName}${choice}`);
      saveType.setAttribute("id",`saveType${overallElementName}${choice}`);
      let saves=['Ref','Fort','Will'];
      createSelection(saves,saveType);
      let abilityLabel = document.createElement("label");
      abilityLabel.setAttribute("class","inputName");
      abilityLabel.setAttribute("for",`saveType${overallElementName}${choice}`);
      abilityLabel.textContent="Save Type";
      abilityLabel.appendChild(saveType);
      container.appendChild(abilityLabel)
    }
    if(canHaveDamage){
    // let auraDmgContainer = document.createElement("div2");
    // auraDmgContainer.setAttribute("id",`auraDmg${overallElementName}${choice}`);
    // auraDmgContainer.setAttribute("style","display:none");
    // auraDmgContainer.setAttribute("class","stairCase");

    var isAuraDmgCheckLabel = document.createElement("p");
    isAuraDmgCheckLabel.setAttribute("class","inputName");
    isAuraDmgCheckLabel.textContent = "Does Damage";
    let isAuraDmgChoice = document.createElement("input");
    isAuraDmgChoice.setAttribute("type","checkbox");
    isAuraDmgChoice.setAttribute("id",`auraDmg${overallElementName}${choice}Option`);
    isAuraDmgChoice.setAttribute("placeholder","toggle");
    isAuraDmgChoice.setAttribute("onclick",`toggle('auraDmg${overallElementName}${choice}')`);
    isAuraDmgCheckLabel.appendChild(isAuraDmgChoice);

    var auraDmg = document.createElement("textarea");
    auraDmg.setAttribute("type","text");
    auraDmg.setAttribute("class","searchBarCreation");
    auraDmg.setAttribute("name",`auraDmg${overallElementName}${choice}`);
    auraDmg.setAttribute("id",`auraDmg${overallElementName}${choice}`);
    auraDmg.setAttribute("style","display:none");
    auraDmg.setAttribute("placeholder","aura damage");
    auraDmg.setAttribute("title","auraDmg");
//    auraDmgContainer.appendChild(auraDmg);
    }
   
  if(canBeAnAura){
    var auracontainer = document.createElement("div2");
    auracontainer.setAttribute("id",`aura${overallElementName}${choice}`);
    auracontainer.setAttribute("style","display:none");
    auracontainer.setAttribute("class","stairCase");

    var isAuraCheckLabel = document.createElement("p");
    isAuraCheckLabel.setAttribute("class","inputName");
    isAuraCheckLabel.textContent = "Is Aura";
    let isAuraChoice = document.createElement("input");
    isAuraChoice.setAttribute("type","checkbox");
    isAuraChoice.setAttribute("id",`aura${overallElementName}${choice}Option`);
    isAuraChoice.setAttribute("placeholder","toggle");
    isAuraChoice.setAttribute("onclick",`toggle('aura${overallElementName}${choice}')`);
    isAuraCheckLabel.appendChild(isAuraChoice);

    let auraRadius = document.createElement("input");
    auraRadius.setAttribute("type","number");
    auraRadius.setAttribute("class","searchBarCreation");
    auraRadius.setAttribute("name",`auraRadius${overallElementName}${choice}`);
    auraRadius.setAttribute("id",`auraRadius${overallElementName}${choice}`);
    auraRadius.setAttribute("placeholder","aura Radius");
    auraRadius.setAttribute("title","auraRadius");
    auracontainer.appendChild(auraRadius);
  }
  let button = document.createElement("button");
  button.setAttribute("class","formButton");
  button.setAttribute("id",`delete${overallElementName}${choice}`);
  button.setAttribute("type","button");
  button.setAttribute("onClick",`deleteDualInformation(${choice},'${overallElementName}','${elementName1}','${elementName2}',${canHaveDC},${needSaveType},${canBeAnAura},${hasUniqueTrait},${canHaveDamage},${addListener})`);
  button.textContent = `Delete ${buttonText}`;
  div.appendChild(AName)
  addBreak(div);
  div.appendChild(ADetails);  
  if(hasUniqueTrait){
    addBreak(div);
    div.appendChild(uniqueTraitLabel);
  }
  if(canHaveDC){
    div.appendChild(saveDCCheckLabel);
    div.appendChild(container);
  }
  if(canBeAnAura){
    div.appendChild(isAuraCheckLabel);
    div.appendChild(auracontainer);

  }
  if(canHaveDamage){
    div.appendChild(isAuraDmgCheckLabel);
//    div.appendChild(auraDmgContainer);
  div.appendChild(auraDmg);
  }
  addBreak(div);
  div.appendChild(button);
  document.getElementById("forum").querySelector(`.${overallElementName}`).appendChild(div);
  if(addListener){
    document.getElementById(`${overallElementName}${choice}`)
    createListeners(`${overallElementName}Name${choice}`,"keyup",updateSpecialAbilities);
  }
  //body.appendChild(x);
}

/**
 * deletes element based on id and adjust other elements
 * @param {int} choiceID 
 * @param {string} overallElementName 
 * @param {string} elementName1 
 * @param {string} elementName2 
 */
function deleteDualInformation(choiceID,overallElementName,elementName1,elementName2,canHaveDC,needSaveType,canBeAnAura,hasUniqueTrait,canHaveDamage,hasListener=false){
    let elements = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div").item(choiceID);
    let elementals = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div");
    let element;
    for(let i=elementals.length-1;i>choiceID;i--){
        element = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div")[i];
        element.querySelector(`#${overallElementName}${elementName1}${i}`).name=`${overallElementName}${elementName1}`+(i-1);
        element.querySelector(`#${overallElementName}${elementName1}${i}`).id=`${overallElementName}${elementName1}`+(i-1);
        element.querySelector(`#${overallElementName}${elementName2}${i}`).name=`${overallElementName}${elementName2}`+(i-1);
        element.querySelector(`#${overallElementName}${elementName2}${i}`).id=`${overallElementName}${elementName2}`+(i-1);
        if(canHaveDC){

          element.querySelector(`label[for='dcStat${overallElementName}${i}']`).htmlFor=`dcStat${overallElementName}`+(i-1);
          element.querySelector(`#saveDC${overallElementName}${i}`).id=`saveDC${overallElementName}${(i-1)}`;
          element.querySelector(`#dcStat${overallElementName}${i}`).name=`dcStat${overallElementName}${(i-1)}`;
          element.querySelector(`#dcStat${overallElementName}${i}`).id=`dcStat${overallElementName}${(i-1)}`;
          element.querySelector(`#saveDC${overallElementName}${i}Option`).setAttribute("onclick",`toggle('saveDC${overallElementName}${(i-1)}')`);
          element.querySelector(`#saveDC${overallElementName}${i}Option`).id=`saveDC${overallElementName}${(i-1)}Option`;

          
        }
        if(needSaveType){
          element.querySelector(`label[for='saveType${overallElementName}${i}']`).htmlFor=`saveType${overallElementName}`+(i-1);
          element.querySelector(`#saveType${overallElementName}${i}`).name=`saveType${overallElementName}${(i-1)}`;
          element.querySelector(`#saveType${overallElementName}${i}`).id=`saveType${overallElementName}${(i-1)}`;

        }
        if(canBeAnAura){
          element.querySelector(`#auraRadius${overallElementName}${i}`).name=`auraRadius${overallElementName}${(i-1)}`;
          element.querySelector(`#auraRadius${overallElementName}${i}`).id=`auraRadius${overallElementName}${(i-1)}`;
          element.querySelector(`#aura${overallElementName}${i}Option`).setAttribute("onclick",`toggle('aura${overallElementName}${(i-1)}')`);
          element.querySelector(`#aura${overallElementName}${i}Option`).id=`aura${overallElementName}${(i-1)}Option`;
          element.querySelector(`#aura${overallElementName}${i}`).id=`aura${overallElementName}${(i-1)}`;
        }
        if(canHaveDamage){
          element.querySelector(`#auraDmg${overallElementName}${i}`).name=`auraDmg${overallElementName}${(i-1)}`;
          element.querySelector(`#auraDmg${overallElementName}${i}`).id=`auraDmg${overallElementName}${(i-1)}`;
          element.querySelector(`#auraDmg${overallElementName}${i}Option`).setAttribute("onclick",`toggle('auraDmg${overallElementName}${(i-1)}')`);
          element.querySelector(`#auraDmg${overallElementName}${i}Option`).id=`auraDmg${overallElementName}${(i-1)}Option`;
         // element.querySelector(`#auraDmg${overallElementName}${i}`).id=`auraDmg${overallElementName}${(i-1)}`;
        }
        if(hasUniqueTrait){
          element.querySelector(`label[for='uniqueTrait${overallElementName}${i}']`).htmlFor=`uniqueTrait${overallElementName}`+(i-1);
          element.querySelector(`#uniqueTrait${overallElementName}${i}`).name=`uniqueTrait${overallElementName}${(i-1)}`;
          element.querySelector(`#uniqueTrait${overallElementName}${i}`).id=`uniqueTrait${overallElementName}${(i-1)}`;

        }
        element.querySelector(`#delete${overallElementName}${i}`).setAttribute("onClick",`deleteDualInformation(${(i-1)},'${overallElementName}','${elementName1}','${elementName2}',${canHaveDC},${needSaveType},${canBeAnAura},${hasUniqueTrait},${canHaveDamage})`);
        element.querySelector(`#delete${overallElementName}${i}`).id=`delete${overallElementName}`+(i-1);
    }
  
if(overallElementName=="SpecialAbility"){
  deletedID=choiceID
}

elements.remove();
}
/**
 * creates element for pathfinder attacks
 * @param {string} overallElementName 
 * @param {string} placeholderText1 
 * @param {string} placeholderText2 
 */
function createAttackInformation(overallElementName,placeholderText1,placeholderText2,weaponType=""){
  let attack = overallElementName.replace("Attack","")
  let choice = document.getElementById("forum").querySelector(`.${overallElementName}`).childElementCount;
  let curChoice = document.getElementById(`${attack}Selection`).value;
  if(weaponType!=""){
    curChoice=weaponType;
  }
  let div = document.createElement("div");
  div.setAttribute("class",`${overallElementName}`);
  let displayText = document.createElement("label");
  displayText.textContent = `${capitalizedCaseCharacter(overallElementName.replace("Attack",""))} ${choice}:`;
  displayText.className="inputName";
  displayText.id=`${overallElementName}${choice}Label`;
  displayText.setAttribute("for",`${overallElementName}toHitModifier${choice}`);
  addBreak(displayText);
  div.appendChild(displayText);

  if(curChoice=="Weapon"){
    let weapon = document.getElementById(`${attack}WeaponSelection`).querySelector("Select").value;
    let select = document.createElement("select");
    select.className="searchBarCreation";
    if(attack=="melee"){
      createSelection(meleeWeaponList,select,weapon);
    }else{
      createSelection(rangedWeaponList,select,weapon);
    }
    select.id = `${attack}AttackName${choice}`
    div.appendChild(select);
    if(capitalizedCaseCharacter(overallElementName.replace("Attack",""))=="Melee"){
        let inputMaterial = document.createElement("input");
        inputMaterial.setAttribute("type","text");
        inputMaterial.className="searchBarCreation";
        inputMaterial.name="material";
        inputMaterial.id=`meleeMaterial${choice}`
        inputMaterial.placeholder="Weapon Material";
        inputMaterial.value=document.getElementById("meleeMaterial").value;
        div.appendChild(inputMaterial);
        addBreak(div);
    }
    document.getElementById("forum").querySelector(`.${overallElementName}`).appendChild(div);
    var button = document.createElement("button");
    button.setAttribute("class","formButton");
    button.setAttribute("id",`delete${overallElementName}${choice}`);
    button.setAttribute("type","button");
    button.setAttribute("onClick",`deleteAttackInformation(${choice},'${overallElementName}')`);
    button.textContent = `Delete ${overallElementName}`;
    let toHitModifier = document.createElement("input");
    toHitModifier.setAttribute("type",`number`);
    toHitModifier.setAttribute("class","searchBarCreation");
    toHitModifier.setAttribute("name",`${overallElementName}toHitModifier${choice}`);
    toHitModifier.setAttribute("id",`${overallElementName}toHitModifier${choice}`);
    toHitModifier.setAttribute("placeholder",`to hit modifier`);
    toHitModifier.setAttribute("title",`NPC ${overallElementName}`);
    let displayTextHitBonus = document.createElement("label");
    displayTextHitBonus.textContent = `To Hit Bonus `;
    displayTextHitBonus.className="inputName";
    div.appendChild(displayTextHitBonus)
    div.appendChild(toHitModifier);
    addBreak(div);
  }else{
  let CAName = document.createElement("textarea");
  CAName.setAttribute("type",`text`);
  CAName.setAttribute("class","searchBarCreation");
  CAName.setAttribute("name",`${overallElementName}Name${choice}`);
  CAName.setAttribute("id",`${overallElementName}Name${choice}`);
  CAName.setAttribute("placeholder",`${placeholderText1}`);
  CAName.setAttribute("title",`NPC ${overallElementName}`);
  if(overallElementName=="meleeAttack"){
    var AFullAttack = document.createElement("input");
    AFullAttack.setAttribute("type",`number`);
    AFullAttack.setAttribute("class","searchBarCreation");
    AFullAttack.setAttribute("name",`${overallElementName}fullAttack${choice}`);
    AFullAttack.setAttribute("id",`${overallElementName}fullAttack${choice}`);
    AFullAttack.setAttribute("placeholder",`Attacks Per Full Attack`);
    AFullAttack.setAttribute("title",`NPC ${overallElementName}`);
  }
  let ADice = document.createElement("input");
  ADice.setAttribute("type",`number`);
  ADice.setAttribute("class","searchBarCreation");
  ADice.setAttribute("name",`${overallElementName}diceCount${choice}`);
  ADice.setAttribute("id",`${overallElementName}diceCount${choice}`);
  ADice.setAttribute("placeholder",`${placeholderText2}`);
  ADice.setAttribute("title",`NPC ${overallElementName}`);
  let ALabel = document.createElement("label");
  ALabel.setAttribute("class","inputName");
  ALabel.setAttribute("for",`damageDice${overallElementName}${choice}`);
  ALabel.textContent="Damage Dice";
  let dmgDice = document.createElement("select");
  dmgDice.setAttribute("class","searchBarCreation");
  dmgDice.setAttribute("name",`damageDice${overallElementName}${choice}`);
  dmgDice.setAttribute("id",`damageDice${overallElementName}${choice}`);
  let diceArray = ['d4','d6','d8','d10','d12','None'];
  diceArray.forEach(dice=>{
    let option = document.createElement("option");
    option.value = dice;
    option.text = dice;
    dmgDice.appendChild(option);
  })
  // let Enchantments = document.createElement("input");
  // Enchantments.setAttribute("type",`text`);
  // Enchantments.setAttribute("class","searchBarCreation");
  // Enchantments.setAttribute("name",`${overallElementName}Enchantments${choice}`);
  // Enchantments.setAttribute("id",`${overallElementName}Enchantments${choice}`);
  // Enchantments.setAttribute("oncontextmenu",`clearText('${overallElementName}Enchantments${choice}')`);
  // Enchantments.setAttribute("placeholder",`Enchantments`);
  // Enchantments.setAttribute("title",`Weapon Enchantments`);
  // Enchantments.addEventListener("contextmenu",(e)=>{e.preventDefault()});
  let toHitModifier = document.createElement("input");
  toHitModifier.setAttribute("type",`number`);
  toHitModifier.setAttribute("class","searchBarCreation");
  toHitModifier.setAttribute("name",`${overallElementName}toHitModifier${choice}`);
  toHitModifier.setAttribute("id",`${overallElementName}toHitModifier${choice}`);
  toHitModifier.setAttribute("placeholder",`to hit modifier`);
  toHitModifier.setAttribute("title",`NPC ${overallElementName}`);
  let enchantments = document.createElement("button");
  enchantments.setAttribute("type","button");
  enchantments.setAttribute("class","formButton");
  enchantments.setAttribute("onClick",`createArrayChoice('enchantment${overallElementName}${choice}','Enchantment','Enchantment',true)`);
  enchantments.textContent = "Add Enchantment";
  let divZone = document.createElement("div3");
  divZone.setAttribute("class",`enchantment${overallElementName}${choice}`);
  divZone.setAttribute("id",`enchantmentArea${overallElementName}${choice}`);
  divZone.setAttribute("style","display:flex;  flex-direction: column;");
  let critZone = document.createElement("input");
  critZone.setAttribute("type","checkbox");
  critZone.setAttribute("id",`critStats${overallElementName}${choice}Option`);
  critZone.setAttribute("placeholder","toggle");
  critZone.setAttribute("onClick",`arrayToggle('critStats${overallElementName}${choice}',['Container','critRange','critMultiplier'])`);
  let checkboxText = document.createElement("p");
  checkboxText.setAttribute("class","inputName");
  checkboxText.textContent = "Has Unique Crit";
  checkboxText.appendChild(critZone);
  let container = document.createElement("div2");
  container.setAttribute("id",`critStats${overallElementName}${choice}Container`);
  container.setAttribute("style","display:none;");
  container.setAttribute("class","stairCase");
  let critRangeLabel = document.createElement("p");
  critRangeLabel.setAttribute("class","inputName");
  critRangeLabel.setAttribute("id",`critStats${overallElementName}${choice}critRange`);
  critRangeLabel.setAttribute("style","display:none;");
  critRangeLabel.textContent = "Has Increased Crit Range";
  let critRangeCheck = document.createElement("input");
  critRangeCheck.setAttribute("id",`critRange${overallElementName}${choice}Option`);
  critRangeCheck.setAttribute("class","inputName");
  critRangeCheck.setAttribute("type","checkbox");
  critRangeCheck.setAttribute("placeholder","toggle");
  critRangeCheck.setAttribute("onclick",`toggle('critRange${overallElementName}${choice}')`);
  let critRange = document.createElement("input");
  critRange.setAttribute("type","number");
  critRange.setAttribute("class","searchBarCreation");
  critRange.setAttribute("name",`critRange${overallElementName}${choice}`);
  critRange.setAttribute("id",`critRange${overallElementName}${choice}`);
  critRange.setAttribute("style","display:none;");
  critRange.setAttribute("placeholder","Crit Minimum");
  critRange.setAttribute("title","critRange");
  critRangeLabel.appendChild(critRangeCheck);
  container.appendChild(critRangeLabel);
  container.appendChild(critRange);
  let critMultiplierLabel = document.createElement("p");
  critMultiplierLabel.setAttribute("class","inputName");
  critMultiplierLabel.setAttribute("id",`critStats${overallElementName}${choice}critMultiplier`);
  critMultiplierLabel.setAttribute("style","display:none;");
  critMultiplierLabel.textContent = "Has Unique Crit Multiplier";
  let critMultiplierCheck = document.createElement("input");
  critMultiplierCheck.setAttribute("id",`critMultiplier${overallElementName}${choice}Option`);
  critMultiplierCheck.setAttribute("class","inputName");
  critMultiplierCheck.setAttribute("type","checkbox");
  critMultiplierCheck.setAttribute("placeholder","toggle");
  critMultiplierCheck.setAttribute("onclick",`toggle('critMultiplier${overallElementName}${choice}')`);
  let critMultiplier = document.createElement("input");
  critMultiplier.setAttribute("type","number");
  critMultiplier.setAttribute("class","searchBarCreation");
  critMultiplier.setAttribute("name",`critMultiplier${overallElementName}${choice}`);
  critMultiplier.setAttribute("id",`critMultiplier${overallElementName}${choice}`);
  critMultiplier.setAttribute("style","display:none;");
  critMultiplier.setAttribute("placeholder","critMultiplier");
  critMultiplier.setAttribute("title","critMultiplier");
  critMultiplierLabel.appendChild(critMultiplierCheck);
  container.appendChild(critMultiplierLabel);
  container.appendChild(critMultiplier);
  let extraDmgLabel = document.createElement("p");
  extraDmgLabel.setAttribute("class","inputName");
  extraDmgLabel.setAttribute("id",`extraDmgLabel${overallElementName}${choice}`);
  extraDmgLabel.textContent = "Unique Bonus Effects on Hit";
  if(document.getElementById("specialAbilityName0")==null){
    extraDmgLabel.setAttribute("style","display:none");
  }
  var extraDamageZone = document.createElement("div");
  extraDamageZone.id=`${overallElementName}bonusAttackDamage${choice}Area`;
  // let extraDmgCheck = document.createElement("input");
  // extraDmgCheck.setAttribute("id",`extraDmg${overallElementName}${choice}Option`);
  // extraDmgCheck.setAttribute("class","inputName");
  // extraDmgCheck.setAttribute("type","checkbox");
  // extraDmgCheck.setAttribute("placeholder","toggle");
  // extraDmgCheck.setAttribute("onclick",`toggle('extraDmg${overallElementName}${choice}')`);
  // let extraDmg = document.createElement("textarea");
  // extraDmg.setAttribute("type","text");
  // extraDmg.setAttribute("class","searchBarCreation");
  // extraDmg.setAttribute("name",`extraDmg${overallElementName}${choice}`);
  // extraDmg.setAttribute("id",`extraDmg${overallElementName}${choice}`);
  // extraDmg.setAttribute("style","display:none;");
  // extraDmg.setAttribute("placeholder","extraDmg");
  // extraDmg.setAttribute("title","extraDmg");
  // extraDmgLabel.appendChild(extraDmgCheck);
  let multiAttackLabel = document.createElement("p");
  multiAttackLabel.setAttribute("class","inputName");
  multiAttackLabel.setAttribute("id",`multiAttackLabel${overallElementName}${choice}`);
  multiAttackLabel.textContent = "Can MultiAttack with this Attack";
  let multiAttackCheck = document.createElement("input");
  multiAttackCheck.setAttribute("id",`multiAttack${overallElementName}${choice}DivOption`);
  multiAttackCheck.setAttribute("class","inputName");
  multiAttackCheck.setAttribute("type","checkbox");
  multiAttackCheck.setAttribute("placeholder","toggle");
  multiAttackCheck.setAttribute("onclick",`toggle('multiAttack${overallElementName}${choice}Div')`);
  let multiAttackDiv = document.createElement("div")
  multiAttackDiv.setAttribute("style","display:none;");
  multiAttackDiv.id=`multiAttack${overallElementName}${choice}Div`
  let multiAttack = document.createElement("input");
  multiAttack.setAttribute("type","number");
  multiAttack.setAttribute("class","searchBarCreation");
  multiAttack.setAttribute("name",`multiAttack${overallElementName}${choice}`);
  multiAttack.setAttribute("id",`multiAttack${overallElementName}${choice}`);
//  multiAttack.setAttribute("style","display:none;");
  multiAttack.setAttribute("placeholder","number of attacks");
  multiAttack.setAttribute("title","multiAttack");
  let multiAttackText = document.createElement("label");
  multiAttackText.textContent = " Number of multi-attacks";
  multiAttackText.className="inputName"
  multiAttackDiv.appendChild(multiAttack)
  multiAttackDiv.appendChild(multiAttackText)
  multiAttackLabel.appendChild(multiAttackCheck);
//  console.log(choice);
  if(choice>0){
  var isAlternativeLabel = document.createElement("p");
  isAlternativeLabel.setAttribute("class","inputName");
  isAlternativeLabel.setAttribute("id",`isAlternativeLabel${overallElementName}${choice}`);
  isAlternativeLabel.textContent = "Put an Or before attack name";
  var isAlternativeCheck = document.createElement("input");
  isAlternativeCheck.setAttribute("id",`isAlternative${overallElementName}${choice}Option`);
  isAlternativeCheck.setAttribute("class","inputName");
  isAlternativeCheck.setAttribute("type","checkbox");
  isAlternativeCheck.setAttribute("placeholder","toggle");
  isAlternativeLabel.appendChild(isAlternativeCheck);
  var isAdditiveLabel = document.createElement("p");
  isAdditiveLabel.setAttribute("class","inputName");
  isAdditiveLabel.setAttribute("id",`isAdditiveLabel${overallElementName}${choice}`);
  isAdditiveLabel.textContent = "Put an And before attack name";
  var isAdditiveCheck = document.createElement("input");
  isAdditiveCheck.setAttribute("id",`isAdditive${overallElementName}${choice}Option`);
  isAdditiveCheck.setAttribute("class","inputName");
  isAdditiveCheck.setAttribute("type","checkbox");
  isAdditiveCheck.setAttribute("placeholder","toggle");
  isAdditiveLabel.appendChild(isAdditiveCheck);
  }
  var button = document.createElement("button");
  button.setAttribute("class","formButton");
  button.setAttribute("id",`delete${overallElementName}${choice}`);
  button.setAttribute("type","button");
  button.setAttribute("onClick",`deleteAttackInformation(${choice},'${overallElementName}')`);
  button.textContent = `Delete ${overallElementName}`;
  div.appendChild(CAName)
  addBreak(div);
  if(overallElementName=="meleeAttack"){
    let displayTextFullAttack = document.createElement("label");
    div.appendChild(AFullAttack);
    displayTextFullAttack.textContent = ` Attacks per full Attack Action`;
    displayTextFullAttack.className="inputName";
    div.appendChild(displayTextFullAttack)
    addBreak(div);

  }
  div.appendChild(ADice);
  let AttackDice = document.createElement("label");
  AttackDice.textContent = ` Damage Dice Amount`;
  AttackDice.className="inputName";
  div.appendChild(AttackDice)
  addBreak(div);
  div.appendChild(toHitModifier);
  let toHitLabel = document.createElement("label");
  toHitLabel.textContent = ` To Hit Modifier`;
  toHitLabel.className="inputName";
  div.appendChild(toHitLabel)
  addBreak(div);
  div.appendChild(ALabel);
  div.appendChild(dmgDice);
  addBreak(div);
  // div.appendChild(Enchantments);
  div.appendChild(enchantments);
  addBreak(div);
  div.appendChild(divZone);
  div.appendChild(checkboxText);
  div.appendChild(container);
  if(overallElementName=="meleeAttack"){
    div.appendChild(extraDmgLabel);
    div.appendChild(extraDamageZone);
  }
  div.appendChild(multiAttackLabel);
  div.appendChild(multiAttackDiv);
//  div.appendChild(multiAttack);
//  console.log(choice);
  if(choice>0){
    div.appendChild(isAlternativeLabel);
    div.appendChild(isAdditiveLabel);
  }
  //body.appendChild(x);
}
div.appendChild(button);
document.getElementById("forum").querySelector(`.${overallElementName}`).appendChild(div);
if(curChoice.toLocaleLowerCase()=="custom"){
  createListeners(`${overallElementName}Name${choice}`,'keyup',doAttacksDropdown);
}
if(curChoice.toLocaleLowerCase()=="weapon"){
  createListeners(`meleeMaterial${choice}`,'keyup',doAttacksDropdown);
}
addAttackListeners(overallElementName,choice,curChoice);
if(curChoice!="Weapon"&&overallElementName=="meleeAttack"){
    if(!getSpecialAbilities()){
      document.getElementById(`dropdown${overallElementName}bonusAttackDamage${choice}`).setAttribute("style","display:none");
    }
}

}

function addAttackListeners(overallElementName,i,weaponType){
  if(weaponType!="Weapon"){
  if(overallElementName=="meleeAttack"){
    if(document.getElementById(`${overallElementName}fullAttack${i}`).value==""){
      document.getElementById(`${overallElementName}fullAttack${i}`).value=1;
    }
    
    createVariableArrayListener(`${overallElementName}fullAttack${i}`,'keyup',setProperMinLevel,[getElementPointer(getElementPointer(`${overallElementName}fullAttack${i}`)),1],false);
    createVariableArrayListener(`${overallElementName}fullAttack${i}`,'input',setProperMinLevel,[getElementPointer(getElementPointer(`${overallElementName}fullAttack${i}`)),1],false);
    createVariableArrayListener(`${overallElementName}fullAttack${i}`,'change',setProperMinLevel,[getElementPointer(getElementPointer(`${overallElementName}fullAttack${i}`)),1],false);
    createVariableArrayListener(`${overallElementName}fullAttack${i}`,'focusout',enforceMinLevelVariable,[getElementPointer(getElementPointer(`${overallElementName}fullAttack${i}`)),1],false);
  }
  if(document.getElementById(`${overallElementName}diceCount${i}`).value==""){
    document.getElementById(`${overallElementName}diceCount${i}`).value=1;
  }
    createVariableArrayListener(`${overallElementName}diceCount${i}`,'keyup',setProperMinLevel,[getElementPointer(`${overallElementName}diceCount${i}`),1],false);
    createVariableArrayListener(`${overallElementName}diceCount${i}`,'input',setProperMinLevel,[getElementPointer(`${overallElementName}diceCount${i}`),1],false);
    createVariableArrayListener(`${overallElementName}diceCount${i}`,'change',setProperMinLevel,[getElementPointer(`${overallElementName}diceCount${i}`),1],false);
    createVariableArrayListener(`${overallElementName}diceCount${i}`,'focusout',enforceMinLevelVariable,[getElementPointer(`${overallElementName}diceCount${i}`),1],false);
    if(document.getElementById(`critRange${overallElementName}${i}`).value==""){
      document.getElementById(`critRange${overallElementName}${i}`).value=20;
    }
    createVariableArrayListener(`critRange${overallElementName}${i}`,'keyup',setProperMinLevel,[getElementPointer(`critRange${overallElementName}${i}`),1],false);
    createVariableArrayListener(`critRange${overallElementName}${i}`,'input',setProperMinLevel,[getElementPointer(`critRange${overallElementName}${i}`),1],false);
    createVariableArrayListener(`critRange${overallElementName}${i}`,'change',setProperMinLevel,[getElementPointer(`critRange${overallElementName}${i}`),1],false);
    createVariableArrayListener(`critRange${overallElementName}${i}`,'focusout',enforceMinLevelVariable,[getElementPointer(`critRange${overallElementName}${i}`),1],false);
    if(document.getElementById(`critMultiplier${overallElementName}${i}`).value==""){
      document.getElementById(`critMultiplier${overallElementName}${i}`).value=2;
    }
    createVariableArrayListener(`critMultiplier${overallElementName}${i}`,'keyup',setProperMinLevel,[getElementPointer(`critMultiplier${overallElementName}${i}`),0],false);
    createVariableArrayListener(`critMultiplier${overallElementName}${i}`,'input',setProperMinLevel,[getElementPointer(`critMultiplier${overallElementName}${i}`),0],false);
    createVariableArrayListener(`critMultiplier${overallElementName}${i}`,'change',setProperMinLevel,[getElementPointer(`critMultiplier${overallElementName}${i}`),0],false);
    createVariableArrayListener(`critMultiplier${overallElementName}${i}`,'focusout',enforceMinLevelVariable,[getElementPointer(`critMultiplier${overallElementName}${i}`),0],false);
    if(document.getElementById(`multiAttack${overallElementName}${i}`).value==""){
      document.getElementById(`multiAttack${overallElementName}${i}`).value=1;
    }
    createVariableArrayListener(`multiAttack${overallElementName}${i}`,'keyup',setProperMinLevel,[getElementPointer(`multiAttack${overallElementName}${i}`),1],false);
    createVariableArrayListener(`multiAttack${overallElementName}${i}`,'input',setProperMinLevel,[getElementPointer(`multiAttack${overallElementName}${i}`),1],false);
    createVariableArrayListener(`multiAttack${overallElementName}${i}`,'change',setProperMinLevel,[getElementPointer(`multiAttack${overallElementName}${i}`),1],false);
    createVariableArrayListener(`multiAttack${overallElementName}${i}`,'focusout',enforceMinLevelVariable,[getElementPointer(`multiAttack${overallElementName}${i}`),1],false);
}
    if(document.getElementById(`${overallElementName}toHitModifier${i}`).value==""){
      document.getElementById(`${overallElementName}toHitModifier${i}`).value=0;
    }
  if(weaponType!="Weapon"&&overallElementName=="meleeAttack"){
    arrayToDropdown(getSpecialAbilities(),`meleeAttackbonusAttackDamage${i}`,'Select',false,[],false,false,true)
    createVariableListener(`dropdownmeleeAttackbonusAttackDamage${i}`,'click',dropdownInteraction,getElementPointer(`dropdownmeleeAttackbonusAttackDamage${i}`),true);
    createVariableArrayListener(`dropdownmeleeAttackbonusAttackDamage${i}`,'keyup',searchDrop,[getElementPointer(`dropdownmeleeAttackbonusAttackDamage${i}`),getElementPointer(`searchmeleeAttackbonusAttackDamage${i}`)]);
    multiChoice(`dropdownmeleeAttackbonusAttackDamage${i}`);
  }

}
// function removeAttackListeners(overallElementName,i,weaponType){
//   console.log(weaponType)
//   console.log(overallElementName);
//   if(weaponType!="Weapon"){
//   if(overallElementName=="meleeAttack"){
//     deleteListener(fullAttack,'keyup',setProperMinLevel);
//     deleteListener(fullAttack,'input',setProperMinLevel);
//     deleteListener(fullAttack,'change',setProperMinLevel);
//     deleteListener(fullAttack,'focusout',enforceMinLevelVariable);
//   }
//     deleteListener(`${overallElementName}diceCount${i}`),'keyup',setProperMinLevel);
//     deleteListener(`${overallElementName}diceCount${i}`),'input',setProperMinLevel);
//     deleteListener(`${overallElementName}diceCount${i}`),'change',setProperMinLevel);
//     deleteListener(`${overallElementName}diceCount${i}`),'focusout',enforceMinLevelVariable);
//     deleteListener(`critRange${overallElementName}${i}`),'keyup',setProperMinLevel);
//     deleteListener(`critRange${overallElementName}${i}`),'input',setProperMinLevel);
//     deleteListener(`critRange${overallElementName}${i}`),'change',setProperMinLevel);
//     deleteListener(`critRange${overallElementName}${i}`),'focusout',enforceMinLevel);
//     deleteListener(`critMultiplier${overallElementName}${i}`),'keyup',setProperMinLevel);
//     deleteListener(`critMultiplier${overallElementName}${i}`),'input',setProperMinLevel);
//     deleteListener(`critMultiplier${overallElementName}${i}`),'change',setProperMinLevel);
//     deleteListener(`critMultiplier${overallElementName}${i}`),'focusout',enforceMinLevelVariable);
//     deleteListener(`multiAttack${overallElementName}${i}`),'keyup',setProperMinLevel);
//     deleteListener(`multiAttack${overallElementName}${i}`),'input',setProperMinLevel);
//     deleteListener(`multiAttack${overallElementName}${i}`),'change',setProperMinLevel);
//     deleteListener(`multiAttack${overallElementName}${i}`),'focusout',enforceMinLevelVariable);
// }
//     deleteListener(`${overallElementName}toHitModifier${i}`,'keyup',setProperMinLevel);
//     deleteListener(`${overallElementName}toHitModifier${i}`,'input',setProperMinLevel);
//     deleteListener(`${overallElementName}toHitModifier${i}`,'change',setProperMinLevel);
//     deleteListener(`${overallElementName}toHitModifier${i}`,'focusout',enforceMinLevelVariable);

// }

/**
 * delete pathfinder attacks
 * @param {int} choiceID 
 * @param {string} overallElementName 
 */
function deleteAttackInformation(choiceID,overallElementName){
  console.log(meleeAttackArea.childElementCount);
  if(choiceID==0&&overallElementName.includes("melee")){
    let attackCount = document.getElementById("monsterAbilitiesChoice").querySelectorAll(".dropdown-box").length;
    if(attackCount>0&&meleeAttackArea.childElementCount<2){
      return false;
    }
  }
  let elements = document.getElementById("forum").querySelector(`.${overallElementName}`).childNodes[choiceID];
  let elementals = meleeAttackArea.childElementCount;
  console.log(document.getElementById(`${overallElementName}Area`));
  console.log(choiceID);
    let element;
    let weapon = "Weapon";
    for(let i=document.getElementById(`${overallElementName}Area`).childElementCount-1;i>choiceID;i--){
      // removeAttackListeners(overallElementName,i,weapon);

      element = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll(`.${overallElementName}`)[i];
      console.log(i)
      console.log(`${overallElementName}Name${i}`)
      console.log(document.getElementById(`${overallElementName}Name${i}`).nodeName);
      if(document.getElementById(`${overallElementName}Name${i}`)!=null){
        console.log(document.getElementById(`${overallElementName}Name${i}`));
        weapon =document.getElementById(`${overallElementName}Name${i}`).nodeName=="SELECT"?"Weapon":"NotWeapon";
      }else{

      }
console.log(weapon)
      if(weapon!="Weapon"){
        console.log("entered")
        console.log(`#${overallElementName}Name${i}`)
        console.log(element);
      element.querySelector(`#${overallElementName}Name${i}`).name=`${overallElementName}Name`+(i-1);
      element.querySelector(`#${overallElementName}Name${i}`).id=`${overallElementName}Name`+(i-1);
      if(overallElementName.includes("melee")){
        element.querySelector(`#${overallElementName}fullAttack${i}`).name=`${overallElementName}fullAttack`+(i-1);
        element.querySelector(`#${overallElementName}fullAttack${i}`).id=`${overallElementName}fullAttack`+(i-1);
      }
      element.querySelector(`#${overallElementName}diceCount${i}`).name=`${overallElementName}diceCount`+(i-1);
      element.querySelector(`#${overallElementName}diceCount${i}`).id=`${overallElementName}diceCount`+(i-1);
      element.querySelector(`#${overallElementName}toHitModifier${i}`).name=`${overallElementName}toHitModifier`+(i-1);
      element.querySelector(`#${overallElementName}toHitModifier${i}`).id=`${overallElementName}toHitModifier`+(i-1);
      element.querySelector(`label[for='damageDice${overallElementName}${i}']`).htmlFor=`damageDice${overallElementName}`+(i-1);
      element.querySelector(`#damageDice${overallElementName}${i}`).name=`damageDice${overallElementName}`+(i-1);
      element.querySelector(`#damageDice${overallElementName}${i}`).id=`damageDice${overallElementName}`+(i-1);
      element.querySelector("button").setAttribute("onClick",`createArrayChoice('enchantment${overallElementName}${(i-1)}','Enchantment','Enchantment',true)`);
//      console.log(`enchantment${overallElementName}${i}`);
      let enchantList = element.querySelectorAll("div4");
      for(let j=enchantList.length-1;j>=0;j--){
        let enchantElement = enchantList[j];
        enchantElement.querySelector(`#enchantment${overallElementName}${i}${j}`).title=`NPC enchantment${overallElementName}${(i-1)}${j}`;
        enchantElement.querySelector("button").setAttribute("onClick",`deleteArrayChoice(${j},'enchant${overallElementName}${(i-1)}',true)`);
        enchantElement.querySelector("button").id = `deleteenchantment${overallElementName}${(i-1)}${j}`;
        enchantElement.querySelector(`#enchantment${overallElementName}${i}${j}`).name=`enchantment${overallElementName}${(i-1)}${j}`;
        enchantElement.querySelector(`#enchantment${overallElementName}${i}${j}`).id=`enchantment${overallElementName}${(i-1)}${j}`;

      }
      element.querySelector(`#enchantmentArea${overallElementName}${i}`).setAttribute("class",`enchantment${overallElementName}${(i-1)}`);
      element.querySelector(`#enchantmentArea${overallElementName}${i}`).id = `enchantmentArea${overallElementName}${(i-1)}`
      // element.querySelector(`#${overallElementName}Enchantments${i}`).setAttribute("oncontextmenu",`clearText('${overallElementName}Enchantments${(i-1)}')`);
      // element.querySelector(`#${overallElementName}Enchantments${i}`).name=`${overallElementName}Enchantments`+(i-1);
      // element.querySelector(`#${overallElementName}Enchantments${i}`).id=`${overallElementName}Enchantments`+(i-1);

      element.querySelector(`#critStats${overallElementName}${i}Option`).setAttribute("onClick",`arrayToggle('critStats${overallElementName}${(i-1)}',['Container','critRange','critMultiplier'])`);
      element.querySelector(`#critStats${overallElementName}${i}Option`).id=`critStats${overallElementName}${(i-1)}Option`;
      element.querySelector(`#critStats${overallElementName}${i}critRange`).id=`critStats${overallElementName}${(i-1)}critRange`;
      element.querySelector(`#critStats${overallElementName}${i}critMultiplier`).id=`critStats${overallElementName}${(i-1)}critMultiplier`;
      element.querySelector(`#critRange${overallElementName}${i}Option`).setAttribute("onclick",`toggle('critRange${overallElementName}${(i-1)}')`);
      element.querySelector(`#critMultiplier${overallElementName}${i}Option`).setAttribute("onclick",`toggle('critMultiplier${overallElementName}${(i-1)}')`);
      element.querySelector(`#critRange${overallElementName}${i}`).name=`critRange${overallElementName}${(i-1)}`;
      element.querySelector(`#critRange${overallElementName}${i}`).id=`critRange${overallElementName}${(i-1)}`;
      element.querySelector(`#critRange${overallElementName}${i}Option`).id=`critRange${overallElementName}${(i-1)}Option`;
      element.querySelector(`#critStats${overallElementName}${i}Container`).id=`critStats${overallElementName}${(i-1)}Container`;
      element.querySelector(`#critMultiplier${overallElementName}${i}Option`).id=`critMultiplier${overallElementName}${(i-1)}Option`;
      element.querySelector(`#critMultiplier${overallElementName}${i}`).name=`critMultiplier${overallElementName}${(i-1)}`;
      element.querySelector(`#critMultiplier${overallElementName}${i}`).id=`critMultiplier${overallElementName}${(i-1)}`;
      if(overallElementName=="meleeAttack"){
        element.querySelector(`#extraDmgLabel${overallElementName}${i}`).id=`extraDmgLabel${overallElementName}${(i-1)}`;
        element.querySelector(`#meleeAttackbonusAttackDamage${i}Area`).id=`meleeAttackbonusAttackDamage${(i-1)}Area`;
        element.querySelector(`#dropdownSelectionmeleeAttackbonusAttackDamage${i}`).id=`dropdownSelectionmeleeAttackbonusAttackDamage${(i-1)}`;
        element.querySelector(`#dropdownmeleeAttackbonusAttackDamage${i}`).id=`dropdownmeleeAttackbonusAttackDamage${(i-1)}`;
        element.querySelector(`#multiAttack${overallElementName}${i}DivOption`).setAttribute("onclick",`toggle('multiAttack${overallElementName}${(i-1)}Div')`);
        element.querySelector(`#multiAttack${overallElementName}${i}Div`).id=`multiAttack${overallElementName}${(i-1)}Div`;
        element.querySelector(`#multiAttack${overallElementName}${i}`).name=`multiAttack${overallElementName}${(i-1)}`;
        element.querySelector(`#multiAttack${overallElementName}${i}`).id=`multiAttack${overallElementName}${(i-1)}`;
        element.querySelector(`#multiAttackLabel${overallElementName}${i}`).id=`multiAttackLabel${overallElementName}${(i-1)}`;
        element.querySelector(`#multiAttack${overallElementName}${i}DivOption`).id=`multiAttack${overallElementName}${(i-1)}DivOption`
      }
      if((i-1)>0){
        element.querySelector(`#isAlternativeLabel${overallElementName}${i}`).id=`isAlternativeLabel${overallElementName}${(i-1)}`;
        element.querySelector(`#isAlternative${overallElementName}${i}Option`).id=`isAlternative${overallElementName}${(i-1)}Option`
        element.querySelector(`#isAdditiveLabel${overallElementName}${i}`).id=`isAdditiveLabel${overallElementName}${(i-1)}`;
        element.querySelector(`#isAdditive${overallElementName}${i}Option`).id=`isAdditive${overallElementName}${(i-1)}Option`
      }else{
        element.querySelector(`#isAlternativeLabel${overallElementName}${i}`).remove()
        element.querySelector(`#isAdditiveLabel${overallElementName}${i}`).remove()
      }
    }else{
      // element.querySelector(`${overallElementName}Name${i}`).id
      element.querySelector(`label[for='${overallElementName}toHitModifier${i}']`).htmlFor=`${overallElementName}toHitModifier`+(i-1);
      element.querySelector(`#${overallElementName}Name${i}`).id=`${overallElementName}Name${(i-1)}`
      if(overallElementName.includes("melee")){
        element.querySelector(`#meleeMaterial${i}`).id=`meleeMaterial${(i-1)}`
      }
      element.querySelector(`#${overallElementName}toHitModifier${i}`).id=`${overallElementName}toHitModifier${(i-1)}`
    }
      element.querySelector(`#delete${overallElementName}${i}`).setAttribute("onClick",`deleteAttackInformation(${(i-1)},'${overallElementName}')`);
      element.querySelector(`#delete${overallElementName}${i}`).id=`delete${overallElementName}`+(i-1);
      element.querySelector(`#${overallElementName}${i}Label`).textContent=`${capitalizedCaseCharacter(overallElementName.replace("Attack",""))} ${(i-1)}:`;
      addBreak(element.querySelector(`#${overallElementName}${i}Label`));
      element.querySelector(`#${overallElementName}${i}Label`).id=`${overallElementName}${(i-1)}Label`;
      // addAttackListeners(overallElementName,i-1,weapon);
    }
  
if(weapon!=""){
  elements.remove();
}
}



/**
 * toggles a singular element
 * @param {string} toggle 
 */
function toggle(toggle){
  
  let checkbox = document.getElementById(`${toggle}Option`);
  let element = document.getElementById(`${toggle}`);
  if(toggle=="isItLong"){
  }
  if (toggle!="All"){
    element.style.display = checkbox.checked===true ? "block" : "none";
  }else{
    arr = ['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'];
    toggleArray(arr);
  }
}

function toggleArray(arr){
  arr.forEach(optionName=>{
    let checkbox = document.getElementById(`${optionName}Option`);
    checkbox.checked = checkbox.checked === true ? false:true;
    toggle(optionName)
  })
}

/**
 * goes through and toggles elements based on an array
 * @param {string} toggle 
 * @param {array} arr 
 */
function arrayToggle(toggle,arr){
  let checkbox = document.getElementById(`${toggle}Option`);
  let element;
  let display = checkbox.checked===true ? "block" : "none";
  arr.forEach(optionName=>{
    element = document.getElementById(`${toggle}${optionName}`);
      element.style.display = display;
  })
}
/**
 * clears elements text
 * @param {string} element 
 */
function clearText(element){
  document.getElementById(element).value="";
}

/**
 * sets page to default state
 */
function reset(){
  let sys = sessionStorage.getItem("system").toLocaleLowerCase();
  let param = new URLSearchParams(window.location.search);
  let page = sessionStorage.getItem("state").toLocaleLowerCase();
  page = param.get("Doc");
  switch(sys){
    case "pathfinder":
      document.getElementById("creationDis").innerHTML="";
      document.getElementById("hotBar").innerHTML="";
      document.getElementById("choiceDrop").innerHTML="";
      generateForum(page);
      break;
    case "5e":
      document.getElementById("creationDis").innerHTML="";
      document.getElementById("hotBar").innerHTML="";
      document.getElementById("choiceDrop").innerHTML="";
      generateForum(page);
    break;
  }

}
/**
 * removes any added elements
 * @param {array} el 
 * @param {int} len 
 */
function clearAdd(el,len){
  for(let i=0;i<len;i++){
      el.item(i).remove();
    }
}
/**
 * goes through array elements and clears them
 * @param {array} arr 
 */
function clearArray(arr){
arr.forEach(level=>{
  try{
    document.getElementById(level).value = "";
  }catch{

  }
    document.getElementById(level+"Option").checked = false;
    toggle(level);
  
  });
  
}

/**
 * 
 * @param {json} NPCInfo 
 * @param {string} sys 
 */
function resetEdit(NPCInfo,sys){
  reset();
  readJsonData(NPCInfo,sys);
}



/**
 * creates json for the site to read and modify
 * @param {json} cinfo 
 */
function createNPCJson(cinfo){
  let system = sessionStorage.getItem("system").toLocaleLowerCase();
  switch(system){
    case "pathfinder":
  let hasSpells = document.getElementById("usesSpellOption").checked;
  let hasSpheres = document.getElementById("usesSphereOption").checked;
  let hasWeakness = document.getElementById("weaknessOption").checked;
  let hasArmor = document.getElementById("armorOption").checked;
  let hasDeflection = document.getElementById("deflectionOption").checked;
  let hasDodge = document.getElementById("dodgeOption").checked;
  let hasShield = document.getElementById("shieldOption").checked;
  let hasNatural = document.getElementById("naturalOption").checked;
  let hasExtraBonuses = document.getElementById("extraBonusesOption").checked;
  let hasDA = document.getElementById("DAOption").checked;
  let hasDR = document.getElementById("DROption").checked;
  let hasImmunities = document.getElementById("ImmuneOption").checked;
  let hasResistances = document.getElementById("ResistOption").checked;
  let hasSR = document.getElementById("SROption").checked;
  let hasInnate = document.getElementById("spellsInnateOption").checked;
  let hasConstant = document.getElementById("constantOption").checked;
  let hasatWill = document.getElementById("atWillOption").checked;
  let hasxDay = document.getElementById("xDayOption").checked;
  let hasPrepared = document.getElementById("spellsPreparedOption").checked;
  let hasSkillList = document.getElementById("usesSkillOption").checked;
  let NPCTypeVal = document.getElementById("NPCChoice").value;
  //s
  let cname = document.getElementById("NPCName").value;
  let type = document.getElementById("NPCType").value;
  let cType = document.getElementById("customType").value;
  let subtype = document.getElementById("Subtype").value;
  let hasSubtype = document.getElementById("SubtypeOption").checked;
  let title = document.getElementById("NPCTitle").value;
  let cr = document.getElementById("NPCCR").value;
  let lvl = 0
  if(NPCTypeVal=="Monster"){
    lvl = document.getElementById("MonsterLevel").value;//have alternative based on classLevels
  }else{
    lvl = getTotalClassLevels();
  }
  let hitDice = document.getElementById("NPCHitDice").value
  let rate = document.getElementById("NPCHitDiceRate").value
  let setHP = document.getElementById("NPCSetHP").value
  let setHD = document.getElementById("NPCSetHD").value
  let fort = document.getElementById("NPCFort").value;
  let ref = document.getElementById("NPCRef").value;
  let will = document.getElementById("NPCWill").value;
  let alignment = document.getElementById("NPCAlignment").value;
  //ac
  let armor = 0;
  let deflection = 0;
  let dodge = 0;
  let shield = 0;
  let natural = 0;
  if(document.getElementById("armor").value!=''&&hasArmor){
    armor = Number(document.getElementById("armor").value);
  }
  if(document.getElementById("deflection").value!=''&&hasDeflection){
    deflection = Number(document.getElementById("deflection").value);    
  }
  if(document.getElementById("dodge").value!=''&&hasDodge){
    dodge = Number(document.getElementById("dodge").value);
    
  }
  if(document.getElementById("shield").value!=''&&hasShield){
    shield = Number(document.getElementById("shield").value);
    
  }
  if(document.getElementById("natural").value!=''&&hasNatural){
    natural = Number(document.getElementById("natural").value);
  }
//defense
  let DA ="";
  if(document.getElementById("DA").value!=''&&hasDA){
    DA = document.getElementById("DA").value;
    
  }
  let DR ="";
  if(document.getElementById("DR").value!=''&&hasDR){
    DR = document.getElementById("DR").value;
    
  }
  let immune ="";
  if(document.getElementById("Immune").value!=''&&hasImmunities){
    immune = document.getElementById("Immune").value;
    
  }
  let resist ="";
  if(document.getElementById("Resist").value!=''&&hasResistances){
    resist = document.getElementById("Resist").value;
    
  }
  let SR ="";
  if(document.getElementById("SR").value!=''&&hasSR){
    SR = document.getElementById("SR").value;
    
  }
  //spells
  let atWill ="";
  let constant ="";
  let prepared = {}
  let innateCL = "";
  let innateConcentrate = ""
  let preparedCL = "";
  let preparedConcentrate = ""
  let innateJson = {};
  let xDay = [];
  if(hasSpells){
  if(hasInnate){
  if(hasConstant){
  }
  if(document.getElementById("constant").value!=''&&hasConstant){

    constant = document.getElementById("constant").value;

  }
  if(document.getElementById("atWill").value!=''&&hasatWill){
    atWill = document.getElementById("atWill").value;

  }
  if(hasxDay){
    populateXDay(xDay,'xDay');
  }
  if(constant!=''){
    innateJson["constant"]=constant;
  }
  if(atWill!=''){
    innateJson["atWill"]=atWill;
  }
  if(xDay.length>0){
    innateJson["xDay"]=xDay;
  }
  if(document.getElementById("innateCasterLevelOption").checked){
      innateCL = document.getElementById("CLInnate").value;
      innateConcentrate = document.getElementById("ConcentrateInnate").value;
  }
  if(innateCL!=""){
      innateJson["CL"]=innateCL;
    }
  if(innateConcentrate!=""){
      innateJson["concentrate"]=innateConcentrate;
    }
  innateJson["casterMod"]=document.getElementById("NPCSpellModInnate").value;
  }
  if(hasPrepared){

  if(document.getElementById("preparedCasterLevelOption").checked){
      preparedCL = document.getElementById("CLPrepared").value;
      preparedConcentrate = document.getElementById("ConcentratePrepared").value;
    }

  let spellLevelArray = ['ninth','eighth','seventh','sixth','fifth','fourth','third','second','first','zeroth'];
  spellLevelArray.forEach(level=>{
    let spellLevel = document.getElementById(level).value;
    let hasLevel = document.getElementById(level+"Option").checked;
    if(spellLevel!=''&&hasLevel){
      prepared[level]=spellLevel;
    }
  });
  if(preparedCL!=""){
      prepared["CL"]=preparedCL;
    }
    if(preparedConcentrate!=""){
      prepared["concentrate"]=preparedConcentrate;
    }
  prepared["casterMod"]=document.getElementById("NPCSpellModPrepared").value;
}
}
  let extra = [];  
  let weak = document.getElementById("weakness").value;
//  let melee = document.getElementById("melee").value;

  let size = document.getElementById("NPCSize").value;
  let str = document.getElementById("NPCStr").value;
  let dex = document.getElementById("NPCDex").value;
  let con = document.getElementById("NPCCon").value;
  let int = document.getElementById("NPCInt").value;
  let wis = document.getElementById("NPCWis").value;
  let cha = document.getElementById("NPCCha").value;
  let bab = document.getElementById("NPCBaB").value;
  str = checkStatVal(str);
  dex = checkStatVal(dex);
  con = checkStatVal(con);
  int = checkStatVal(int);
  wis = checkStatVal(wis);
  cha = checkStatVal(cha);
  let skillProgression = document.getElementById("NPCSkillProgression").value;
  let strModifier = getModifier(str);
  let dexModifier = getModifier(dex);
  let gear ="";
  if(document.getElementById("gear").value!=''){
    gear = document.getElementById("gear").value;
  }
    populateExtraAC(extra,'extra');
//  populateData(extra,'extra');

  let sizeMod =getNPCSizeMod(size);

  let sense = {};
  let saveBonus = [];
  let aura = [];
  let feat = {};
  let racialMod = {};
  let language = [];
  let SQ = [];
  let special_attacks = []
  let specialAbility =[];
  let skills = {};
  let acJson = {};
  let CMDBonus = [];
  let melee = [];
  let range = [];
  let speed = {};
  let ac = 10+armor+shield+dexModifier+deflection+natural+dodge+sizeMod;
  let touch = 10+dexModifier+deflection+dodge+sizeMod;
  let flatFooted = 10+armor+shield+deflection+natural+sizeMod+(dexModifier>0?0:dexModifier);
  let classData = [];
  // let senseCount = document.getElementById("forum").querySelector(".sense").childElementCount;
  // for(let i=0;i<senseCount;i++){
  //   let senseVal = document.getElementById(`sense${i}`).value;
  //   sense.push(senseVal);
  // }
  populateDataDropDownJson(sense,'sense');
  populateDataDropDownJson(speed,'speed');
  populateData(saveBonus,'saveBonus');
  populateDataAura(aura,'aura');
  populateDataDropDownJson(feat,'feat');
  populateDataDropDownJson(racialMod,'racialMod');
  populateDataDropDownArray(language,'language');
  populateData(SQ,'SQ');
  populateSpecialAttack(special_attacks);
  populateAttackData(melee,'meleeAttack');
  populateAttackData(range,'rangeAttack');
  populateSpecialAbilityData(specialAbility,'SpecialAbility');
  wisMod = getModifier(wis);
  populateCMDBonusData(CMDBonus,"cmdMod");
  populateClassData(classData);
  let list = ['Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','Knowledge','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'];
  populateSkills(skills,list);
  cinfo["system"]=system;
  cinfo["name"]=cname;
  cinfo["title"]=title;
  cinfo["cr"]=cr;
  cinfo["alignment"]=alignment;
  cinfo["size"]=size;
  cinfo["sizeType"]=document.getElementById("isItLongOption").checked;
  cinfo["NPCType"]=NPCTypeVal;
  cinfo["type"]=type;
  if(type==="Custom"){
    cinfo["customType"]=cType;
  }
  if(hasSubtype){
    cinfo["subtype"]=subtype;
  }
  if(Object.keys(sense).length>0){
    cinfo['senses']=sense;
  }
  if(aura.length>0){
    cinfo['aura']=aura;
  }
  let bonuses = {};
  if(armor>0||armor<0){
    bonuses["armor"] = String(armor);
  }
  if(deflection>0||deflection<0){
    bonuses["deflection"]=String(deflection);

  }
  if(dexModifier>0||dexModifier<0){
    bonuses["dex"]=String(dexModifier);
  }
  if(dodge>0||dodge<0){
    bonuses["dodge"]=String(dodge);
  }
  if(shield>0||shield<0){
    bonuses["shield"]=String(shield);
  }
  if(natural>0||natural<0){
    bonuses["natural"]=String(natural);
  }
  if(size>0||size<0){
    bonuses["size"]=String(sizeMod);
  }
  if(extra.length>0&&hasExtraBonuses){
    bonuses["extra"]= extra;
  }
  acJson["armor"]=String(ac);
  acJson["touch"]=String(touch);
  acJson["flat_foot"]=String(flatFooted);
  acJson["bonuses"]=bonuses;
  let DT = {};
  if(DA.length>0){
    DT["Defensive_Abilities"] = DA;
  }
  if(DR.length>0){
    DT["DR"]=DR;
  }
  if(immune.length>0){
    DT["Immune"]=immune;
  }
  if(resist.length>0){
    DT["Resist"]=resist;
  }
  if(SR.length>0){
    DT["SR"]=SR;
  }
  //   dTraits["Defensive_Abilities"]="ability1";
  // dTraits["DR"]="ability2";
  // defensiveTraits.push(dTraits);

  cinfo["ac"]=acJson;
  cinfo["level"]=lvl;
  cinfo['hitDice']=hitDice;
  if(NPCTypeVal=="Monster"){
    cinfo['rate']=rate;
  }
  if(document.getElementById("setHPInformationOption").checked==true){
    cinfo["setHP"]=setHP;
    cinfo["setHD"]=setHD;
  }
  cinfo["fort"]=fort;
  cinfo["ref"]=ref;
  cinfo["will"]=will;
//  cinfo["defensive_traits"]=defensiveTraits;
  if(saveBonus.length>0){
    cinfo["save_bonuses"]=saveBonus;
  }
  if(Object.keys(DT).length>0){
    cinfo["defensive_traits"]=DT;
  }
  if(document.getElementById("weakness").value!==''&&hasWeakness){
    cinfo["weaknesses"] = weak;
  }
  if(Object.keys(speed).length>0){
    cinfo["speed"]=speed;
  }
  if(document.getElementById("melee").value!==''){
    cinfo["melee"] = melee;
  }
  if(document.getElementById("range").value!==''){
    cinfo["ranged"] = range;
  }
//  reach_bonus_effects
console.log(special_attacks);
  if(special_attacks!=''){
    cinfo["special_attacks"]=special_attacks;
  }
  let spellAbilities = {};

  if(Object.keys(innateJson).length>0&&hasInnate){
    spellAbilities["innate"]=innateJson;
  }
  if(Object.keys(prepared).length>0&&hasPrepared){
    spellAbilities["prepared"]=prepared;
  }
  if(Object.keys(spellAbilities).length>0){
    cinfo["spell_abilities"]=spellAbilities;
  }
  let baseCMD = 10+Number(getBaB(bab,lvl))+strModifier+dexModifier+(sizeMod*-1);
//  let modifiedCMD =""
  // if(cmdMod!=''&&hasCmdMod){
  //   let modifiedCMDBonus = cmdMod.replace(/[^0-9]/g, '');
  //   if(modifiedCMDBonus!=''){
  //     cmdMod = cmdMod.replace(/[0-9]/g, '');
  //     modifiedCMD = "("+Number(baseCMD+Number(modifiedCMDBonus))+cmdMod+")"
  //   }else{
  //     modifiedCMD = "("+cmdMod+")"
  //   }
  // }
  cinfo["str"]=str;
  cinfo["dex"]=dex;
  cinfo["con"]=con;
  cinfo["int"]=int;
  cinfo["wis"]=wis;
  cinfo["cha"]=cha;
  cinfo["bab"]=bab;
  cinfo["skillProgression"]=skillProgression;
  cinfo["cmb"]=String(Number(getBaB(bab,lvl))+strModifier+(sizeMod*-1));
  cinfo["cmd"]=String(baseCMD);
  if(Object.keys(CMDBonus).length>0){
    cinfo["cmdMod"]=CMDBonus;
  }

  if(Object.keys(feat).length>0){
    cinfo["feats"]=feat;
  }
  if(skills!={} && hasSkillList){
    cinfo["skills"]=skills;
  }
  if(Object.keys(racialMod).length>0){
    cinfo["racialModifiers"]=racialMod;
  }
  if(language.length>0){
    cinfo["languages"]=language;
  }
  if(gear!=''){
    cinfo["gear"]=gear;
  }
  if(SQ.length>0){
    cinfo["special_qualities"]=SQ;
  }
  if(specialAbility.length>0){
    cinfo["special_abilities"]=specialAbility;
  }
  if(Object.keys(classData).length>0){
    cinfo["class"]=classData;
  }
  if(document.getElementById("monsterAbilitiesChoice").childElementCount>0){
    cinfo["monsterAbilities"]=[];
    let tempJSon = {};
    let monsterAbilityJsonArray = [];
    Array.from(document.getElementById("monsterAbilitiesChoice").children).forEach(item=>{
      if(item.getElementsByTagName("label")[0]!=null){
        
      
      let JSONObject={};
      let name = item.getElementsByTagName("label")[0].textContent;
      name = name.replaceAll(" ","");
      console.log(name);
      name = name.substring(0,name.length-1);
      console.log(name);
      // let abilityJson = {
      //   "name":abilityName
      // };
      JSONObject[name] = createMiniMonsterAbilityJson(name,JSONObject);
      cinfo.monsterAbilities.push(JSONObject);
      console.log(JSON.stringify(JSONObject));
      }
    })
  //  tempJSon.monsterAbilities.push(JSONObject)
  }

  cinfo['spheres'] =hasSpheres;
  break;

    case "5e":
      let legendaryActions = [];
      let ability = [];
      let action = [];
      let cname5e = document.getElementById("NPCName").value;
      let type5e = document.getElementById("NPCType").value;
      let cr5e = document.getElementById("NPCCR").value;
      let xp5e = document.getElementById("NPCXP").value;
      let lvl5e = document.getElementById("NPCLevel").value;
      let ac5e = document.getElementById("ac").value;
      let hd5e = document.getElementById("NPCHitDice").value;
      let speed5e = document.getElementById("NPCSpeed").value;
      let size5e = document.getElementById("NPCSize").value;
      let str5e = document.getElementById("NPCStr").value;
      let dex5e = document.getElementById("NPCDex").value;
      let con5e = document.getElementById("NPCCon").value;
      let int5e = document.getElementById("NPCInt").value;
      let wis5e = document.getElementById("NPCWis").value;
      let cha5e = document.getElementById("NPCCha").value;
      let proficiency = document.getElementById("NPCProficiency").value;
      let alignment5e = document.getElementById("NPCAlignment").value;
      let sense5e = document.getElementById("NPCSense").value;
      let hasdamage_vulnerabilities = document.getElementById("damage_vulnerabilitiesOption").checked;
      let hasdamage_resistances = document.getElementById("damage_resistancesOption").checked;
      let hasdamage_immunities =document.getElementById("damage_immunitiesOption").checked;
      let hascondition_immunities = document.getElementById("condition_immunitiesOption").checked;
      let haslegendaryAbilities = document.getElementById("legendaryAbilitiesOption").checked;
      let hasStrProf = document.getElementById("StrSavingThrowProficiencyOption").checked;
      let hasDexProf = document.getElementById("DexSavingThrowProficiencyOption").checked;
      let hasConProf = document.getElementById("ConSavingThrowProficiencyOption").checked;
      let hasIntProf = document.getElementById("WisSavingThrowProficiencyOption").checked;
      let hasWisProf = document.getElementById("IntSavingThrowProficiencyOption").checked;
      let hasChaProf = document.getElementById("ChaSavingThrowProficiencyOption").checked;
      populate5eData(legendaryActions,'legendaryActions','legendary');
      populate5eData(ability,'Ability','ability');
      populate5eData(action,'Action','action');
      let legendaryAbilitiesJson ={};
      let strMod = getModifier(str5e);
      let dexMod = getModifier(dex5e);
      let conMod = getModifier(con5e);
      let intMod = getModifier(int5e);
      wisMod = getModifier(wis5e);
      let ChaMod = getModifier(cha5e);
      let saving_throws = {};
      if(hasStrProf){
        saving_throws["str"] = Number(strMod)+(hasStrProf?Number(proficiency):0);
      }
      if(hasDexProf){
        saving_throws["dex"] = Number(dexMod)+(hasDexProf?Number(proficiency):0);
      }
      if(hasConProf){
        saving_throws["con"] = Number(conMod)+(hasConProf?Number(proficiency):0);
      }
      if(hasIntProf){
        saving_throws["int"] = Number(intMod)+(hasIntProf?Number(proficiency):0);
      }
      if(hasWisProf){
        saving_throws["wis"] = Number(wisMod)+(hasWisProf?Number(proficiency):0);
      }
      if(hasChaProf){
        saving_throws["cha"] = Number(ChaMod)+(hasChaProf?Number(proficiency):0);
      }
      let skillIsProf = {}
      populateProfs(skillIsProf);
      cinfo["system"]=system;
      cinfo["name"]=cname5e;
      cinfo["size"]=size5e;
      cinfo["type"]=type5e;
      cinfo["alignment"]=alignment5e;
      cinfo["level"]=lvl5e;
      cinfo["hitDice"]=hd5e;
      cinfo["ac"]=ac5e;
      cinfo["speed"]=speed5e;
      cinfo["str"] = str5e;
      cinfo["dex"] = dex5e;
      cinfo["con"] = con5e;
      cinfo["int"] = int5e;
      cinfo["wis"] = wis5e;
      cinfo["cha"] = cha5e;
      cinfo["proficiency"]=proficiency;
      cinfo["saving_throws"]=saving_throws;
      cinfo["skillsProf"]=skillIsProf;
      if(hasdamage_vulnerabilities){
          cinfo["damage_vulnerabilities"]=document.getElementById("damage_vulnerabilities").value;
      }
      if(hasdamage_resistances){
        cinfo["damage_resistances"]=document.getElementById("damage_resistances").value;
      }
      if(hasdamage_immunities){
        cinfo["damage_immunities"]=document.getElementById("damage_immunities").value;
      }
      if(hascondition_immunities){
        cinfo["condition_immunities"]=document.getElementById("condition_immunities").value;
      }
      cinfo['senses']=sense5e;
      cinfo["cr"]=cr5e;
      cinfo["xp"]=xp5e;
      if(ability.length>0){
        cinfo["ability"]=ability;
      }
      if(action.length>0){
        cinfo["actions"]=action;
      }      
      if(haslegendaryAbilities&&legendaryActions.length>0){
        legendaryAbilitiesJson["legendary_details"] = document.getElementById("legendary_details").value;
        legendaryAbilitiesJson["legendaryActions"] =legendaryActions;
        cinfo["legendaryAbilities"]=legendaryAbilitiesJson;
      }
      break;
  }
}


function setProperMaxMinSkills(){
  let skillCont = document.getElementById("skillsContainer");
  let skillList = skillCont.getElementsByClassName("searchBarCreation")
  let usedPoints = 0;
//  console.log(skillList);
  let knowledge = ['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'];
  for(let skill of skillList){
    if(document.getElementById(`${skill.name}Option`)){
          if(knowledge.includes(skill.name)&&!document.getElementById("skillsKnowledgeOption").checked){
            continue;
          }else{
            
            if(Number(document.getElementById(skill.name).value)>Number(document.getElementById("MonsterLevel").value)){//have alternative based on classLevels
              document.getElementById(skill.name).value=document.getElementById("MonsterLevel").value;//have alternative based on classLevels
            }
            if(Number(document.getElementById(skill.name).value)<0||document.getElementById(skill.name).value==""){
              document.getElementById(skill.name).value=0;
            }
          }
    }else{
      if(skill.name.includes("Value")){
        let skillName = skill.name.split("Value")[0];
        if(Number(document.getElementById(skill.name).value)>Number(document.getElementById("MonsterLevel").value)){//have alternative based on classLevels
              document.getElementById(skill.name).value=document.getElementById("MonsterLevel").value;//have alternative based on classLevels
            }
            if(Number(document.getElementById(skill.name).value)<0){
              document.getElementById(skill.name).value=0;
            }
      }
    }
    }
}



function checkIsInList(list,value){
  let item = capitalizedCaseCharacter(value);

  switch(list){
    case "classes":
      if(classList.includes(item)){
        return true;
      }
      if(sphereClassList.includes(item)){
        return true;
      }
      break;
    case "sense":
      if(senseList.includes(item)){
        return true;
      }
      break;
    case "language":
      if(lanList.includes(item)){
        return true;
      }
      break;
    case "speed":
      if(movementList.includes(item)){
        return true;
      }
      break;
    case "feat":
      if(featList.includes(item)){
        return true;
      }
      if(sphereFeatList.includes(item)){
        return true;
      }
    case "racialMod":
      if(racialModifiersList.includes(item)){
        return true;
      }
    case "spherePower":
      if(spherePowerList.includes(item)){
        return true;
      }
    case "sphereMight":
      if(sphereMightList.includes(item)){
        return true;
      }
    case "sphereGuile":
      if(sphereGuileList.includes(item)){
        return true;
      }
    case "monsterAbilities":
      if(monsterAbilitiesList.includes(item)){
        return true;
      }
  }
  return false;
}

function checkSecondaryDropdown(value){
  let list = [];
  if(document.getElementById("archetypeList")==null){
    return true;
  }
  list = getArchetypeList(value);
  list.push("");
  let currentValue = document.getElementById("archetypeList").value;
  return list.includes(currentValue);
}



function addDeleteButton(divZone,val,listName){
    let button = document.createElement("button");
    button.setAttribute("class","formButton");
    button.setAttribute("id",`delete${val}`);
    button.setAttribute("type","button");
    button.setAttribute("onClick",`deleteChoice('${val}Choice','${listName}')`);
    button.textContent = `Delete`;
    divZone.appendChild(button);
}

function checkIfInTalents(item){
      if(alterationList.includes(item)){
        return true;
      }
      if(destructionList.includes(item)){
        return true;
      }
}

function hasSelected(id){
  let hasActive = false;
  document.getElementById(id).querySelectorAll("li").forEach(child=>{
    if(child.className.includes("active")){
      hasActive = true;      
    }
  })
  return hasActive;
}



function canBeEmpty(id){
  let noInputList = ["onset","cure"]
  let beEmpty = false;
  noInputList.forEach(element=>{
    if(id.toLocaleLowerCase().includes(element)){
      beEmpty = true;
    }
  });
  return beEmpty;
}

function validInformation(informationName,children){
  let childrenCount = children.length;
  let validInputs = true;
  let input;
  let didSelect = true;
  if(childrenCount>0){
  Array.from(children).forEach(child=>{
    if(child.tagName.toLocaleLowerCase()=="input"){
      input = document.getElementById(child.id).value
      if(input==""||input==null){
        validInputs=false;
        validInputs=canBeEmpty(child.id);
      }
    }
    if(child.tagName.toLocaleLowerCase()=="textarea"){
      input = document.getElementById(child.id).value
      if(input==""||input==null){
        validInputs=false;
        validInputs=canBeEmpty(child.id);
      }
    }
    if(child.tagName.toLocaleLowerCase()=="div"){
      didSelect = hasSelected(child.querySelector(".dropdown-box").id);
    }
  })

  if(validInputs&&didSelect){
    return true;
  }
  }else{
    if(informationName!="Select"){
      return true;
    }
  }
  return false;
}

function addVariableDropdownchoice(listName){
  let item = document.getElementById(`dropdownSelection${listName}`).value;
  let itemBlock = item.replaceAll(" ","");
  let inputList = document.getElementById(`${listName}Input`).children;
  if(validInformation(item,inputList)){
    let divZone = document.createElement("div");
    divZone.setAttribute("id",`${itemBlock}Choice`);
    let itemName = document.createElement("label");
    itemName.setAttribute("class","inputName");
    itemName.setAttribute("for",`${listName}${itemBlock}`);
    itemName.textContent = item+":";
    divZone.appendChild(itemName);
    addBreak(divZone);
    let isThereDiv=false;
    let labelID = "hi";
    for(const element of inputList){
      let elItem = element.tagName;
      if(elItem=="DIV"){
        isThereDiv=true;
      }
      if(elItem=="LABEL"){
        labelID = element.textContent;
      }
      let tempItem = "";
      tempItem = createElementSetup(elItem,element,itemBlock,listName,labelID);
      divZone.appendChild(tempItem);
    }
    addDeleteButton(divZone,itemBlock,listName);
    
    document.getElementById(`${listName}Choice`).appendChild(divZone);
    addBreak(document.getElementById(`${listName}Choice`));
    if(isThereDiv){
      arrayToDropdown(getAttacks(),`attackSection${itemBlock}`,"Select",true,document.getElementById("curseArea").querySelectorAll("li"));
      createVariableListener(`dropdownattackSection${itemBlock}`,'click',dropdownInteraction,getElementPointer(`dropdownattackSection${itemBlock}`),true);
      createVariableArrayListener(`dropdownattackSection${itemBlock}`,'keyup',searchDrop,[getElementPointer(`dropdownattackSection${itemBlock}`),getElementPointer(`searchattackSection${itemBlock}`)]);
      multiChoice(`dropdownattackSection${itemBlock}`);
      if(document.getElementById("meleeAttackArea").childElementCount<1){
        createAttackInformation('meleeAttack','Melee Attack Name','Melee Attack Dice Count',"Custom");
        document.getElementById("meleeAttackName0").textContent="Slam";
        document.getElementById("meleeAttackdiceCount0").value="1";
        document.getElementById("damageDicemeleeAttack0")[1].selected=true;
      }
      if(document.getElementById("meleeAttackArea").childElementCount>0){
        if(document.getElementById("meleeAttackName0").textContent==""){
          document.getElementById("meleeAttackName0").textContent="Slam";
        }
        if(document.getElementById("meleeAttackdiceCount0")!=null){
          if(document.getElementById("meleeAttackdiceCount0").value==""){
            document.getElementById("meleeAttackdiceCount0").value="1";
          }
        }
      }
    }
    document.getElementById("monsterAbilitiesInput").innerHTML="";
    document.getElementById("searchmonsterAbilities").value="";
    document.getElementById(`dropdownSelection${listName}`).value = "Select";
    modifyList(listName);
    if(listName=="monsterAbilities"||listName=="sense"){
      modifyList("monsterAbilities")
      modifyList("sense")
  }
  }
}

function deleteSpecialAttack(id){
  console.log(id)
  let elementToDelete = document.getElementById("specialAttackArea").children[id];
    let childrenCount = document.getElementById("specialAttackArea").childElementCount;
    console.log(childrenCount);
    for(let i=childrenCount-1;i>id;i--){
      element = document.getElementById("specialAttackArea").children[i];
      element.querySelector(`#specialAttack${i}`).id=`specialAttack${(i-1)}`;
      element.querySelector(`#specialAttackToHitBonus${i}`).id=`specialAttackToHitBonus${(i-1)}`;
      element.querySelector(`#specialAttackZone${i}Option`).setAttribute("onclick",`toggle('specialAttackZone${(i-1)}')`);
      element.querySelector(`#perDayZone${i}Option`).setAttribute("onclick",`toggle('perDayZone${(i-1)}')`);
      element.querySelector(`#perDayZone${i}Option`).id=`perDayZone${(i-1)}Option`;
      element.querySelector(`#perDayZone${i}`).id=`perDayZone${(i-1)}`;
      element.querySelector(`#specialAttackZone${i}Option`).id=`specialAttackZone${(i-1)}Option`;
      element.querySelector(`#specialAttackZone${i}`).id=`specialAttackZone${(i-1)}`;
      element.querySelector(`#choicesSpecial${i}`).id=`choicesSpecial${(i-1)}`;
      element.querySelector(`#attackDiv${i}`).id=`attackDiv${(i-1)}`;
      element.querySelector(`#saveDiv${i}`).id=`saveDiv${(i-1)}`;
      element.querySelector(`#dropdownspecialAttackAttackList${i}`).id=`dropdownspecialAttackAttackList${(i-1)}`;
     element.querySelector(`#specialAttackAttackList${i}Area`).id=`specialAttackAttackList${(i-1)}Area`;
      element.querySelector(`#dropdownSelectionspecialAttackAttackList${i}`).id=`dropdownSelectionspecialAttackAttackList${(i-1)}`;
      element.querySelector(`#searchspecialAttackAttackList${i}`).id=`searchspecialAttackAttackList${(i-1)}`;
      element.querySelector(`#damageDiv${i}`).id=`damageDiv${(i-1)}`;
      element.querySelector(`#specialAttackdiceCount${i}`).id=`specialAttackdiceCount${(i-1)}`;
      element.querySelector(`#throwTypespecialAttack${i}`).id=`throwTypespecialAttack${(i-1)}`;
      element.querySelector(`#dcStatspecialAttack${i}`).id=`dcStatspecialAttack${(i-1)}`;
      element.querySelector(`#damageDicespecialAttack${i}`).id=`damageDicespecialAttack${(i-1)}`;
      element.querySelector(`#deletespecialAttack${i}`).setAttribute("onclick",`deleteSpecialAttack(${(i-1)})`);
      element.querySelector(`#deletespecialAttack${i}`).id=`deletespecialAttack${(i-1)}`;
      addSpecialAttackListeners((i-1));

    }
    elementToDelete.remove();
}

function addSpecialAttackListeners(i){
    document.getElementById(`specialAttackToHitBonus${i}`).value=0;
    document.getElementById(`specialAttackperDay${i}`).value=1;
    createVariableArrayListener(`specialAttackperDay${i}`,'keyup',setProperMinLevel,[getElementPointer(`specialAttackperDay${i}`),1],false);
    createVariableArrayListener(`specialAttackperDay${i}`,'input',setProperMinLevel,[getElementPointer(`specialAttackperDay${i}`),1],false);
    createVariableArrayListener(`specialAttackperDay${i}`,'change',setProperMinLevel,[getElementPointer(`specialAttackperDay${i}`),1],false);
    createVariableArrayListener(`specialAttackperDay${i}`,'focusout',enforceMinLevelVariable,[getElementPointer(`specialAttackperDay${i}`),1],false);
    document.getElementById(`specialAttackdiceCount${i}`).value=1;
    createVariableArrayListener(getElementPointer(`specialAttackdiceCount${i}`),'keyup',setProperMinLevel,[getElementPointer(`specialAttackdiceCount${i}`),1],false);
    createVariableArrayListener(`specialAttackdiceCount${i}`,'input',setProperMinLevel,[getElementPointer(`specialAttackdiceCount${i}`),1],false);
    createVariableArrayListener(`specialAttackdiceCount${i}`,'change',setProperMinLevel,[getElementPointer(`specialAttackdiceCount${i}`),1],false);
    createVariableArrayListener(`specialAttackdiceCount${i}`,'focusout',enforceMinLevelVariable,[getElementPointer(`specialAttackdiceCount${i}`),1],false);
}

function deleteSpecialAttackListeners(i){
    deleteListener(`specialAttackperDay${i}`,'keyup',setProperMinLevel);
    deleteListener(`specialAttackperDay${i}`,'input',setProperMinLevel);
    deleteListener(`specialAttackperDay${i}`,'change',setProperMinLevel);
    deleteListener(`specialAttackperDay${i}`,'focusout',enforceMinLevelVariable);
    deleteListener(`specialAttackdiceCount${i}`,'keyup',setProperMinLevel);
    deleteListener(`specialAttackdiceCount${i}`,'input',setProperMinLevel);
    deleteListener(`specialAttackdiceCount${i}`,'change',setProperMinLevel);
    deleteListener(`specialAttackdiceCount${i}`,'focusout',enforceMinLevelVariable);
}

function createSpecialAttackSetup(){
  let choice = document.getElementById("forum").querySelector(`.specialAttack`).childElementCount;
  let div = document.createElement("div");
  let input = document.createElement("textarea");
  input.setAttribute("type","text");
  input.setAttribute("class","searchBarCreation");
  input.setAttribute("id",`specialAttack${choice}`);
  input.setAttribute("placeholder",`Special Attack Name`);
  input.setAttribute("title",`NPC specialAttack`);
  let button = document.createElement("button");
  button.setAttribute("class","formButton");
  button.setAttribute("id",`deletespecialAttack${choice}`);
  button.setAttribute("type","button");
  button.setAttribute("onClick",`deleteSpecialAttack(${choice})`);
  attackChoices = ["Attack","Save","Bonus Damage","Save Only"]
  let choices = document.createElement("select");
  choices.setAttribute("class","searchBarCreation");
    choices.setAttribute("id",`choicesSpecial${choice}`);
   attackChoices.forEach(dice=>{
    let option = document.createElement("option");
    option.value = dice;
    option.text = dice;
    choices.appendChild(option);
  })
  let specialAttackZoneLabel = document.createElement("p");
  specialAttackZoneLabel.setAttribute("class","inputName-close");
  specialAttackZoneLabel.textContent = "Display Attributes";
  let specialAttackZone = document.createElement("input");
  specialAttackZone.setAttribute("type","checkbox");
  specialAttackZone.setAttribute("id",`specialAttackZone${choice}Option`);
  specialAttackZone.setAttribute("placeholder","toggle");
  specialAttackZone.setAttribute("onclick",`toggle('specialAttackZone${choice}')`);
  specialAttackZoneLabel.appendChild(specialAttackZone);
  let container = document.createElement("div");
  container.setAttribute("id",`specialAttackZone${choice}`);
  container.setAttribute("style","display:none");
  container.setAttribute("class","stairCase");
  let dcStat = document.createElement("select");
  dcStat.setAttribute("class","searchBarCreation");
  dcStat.setAttribute("id",`dcStatspecialAttack${choice}`);
  let saves=['Ref','Fort','Will'];
  let ability = ['Str','Dex','Con','Int','Wis','Cha'];
  createSelection(ability,dcStat);
  let throwType = document.createElement("select");
  throwType.setAttribute("class","searchBarCreation");
  throwType.setAttribute("id",`throwTypespecialAttack${choice}`);
  createSelection(saves,throwType);

  let savingThrowTypeLabel = document.createElement("p");
  savingThrowTypeLabel.setAttribute("class","inputName-close");
  savingThrowTypeLabel.textContent = "Display Saving Throw Type";
  let savingThrowTypeZone = document.createElement("input");
  savingThrowTypeZone.setAttribute("type","checkbox");
  savingThrowTypeZone.setAttribute("id",`savingThrowTypeZone${choice}Option`);
  savingThrowTypeZone.setAttribute("placeholder","toggle");
  savingThrowTypeZone.setAttribute("onclick",`toggle('savingThrowTypeZone${choice}')`);
  savingThrowTypeLabel.appendChild(savingThrowTypeZone);
  let DCLabel = document.createElement("label");
  DCLabel.setAttribute("class","inputName");
  DCLabel.textContent="Save Stat ";
  let throwLabel = document.createElement("label");
  throwLabel.setAttribute("class","stairCase-normalText");
  throwLabel.textContent="Saving Throw ";
  throwLabel.id = `savingThrowTypeZone${choice}`;
  throwLabel.setAttribute("style","display:none");
  let ALabel = document.createElement("label");
  ALabel.setAttribute("class","inputName");
  ALabel.textContent="Damage Dice ";
  let DLabel = document.createElement("label");
  DLabel.setAttribute("class","inputName");
  DLabel.textContent="Dice Count ";
  let ADice = document.createElement("input");
  ADice.setAttribute("type",`number`);
  ADice.setAttribute("class","searchBarCreation");
  ADice.setAttribute("id",`specialAttackdiceCount${choice}`);
  ADice.setAttribute("placeholder",`diceCount`);
  ADice.setAttribute("title",`NPC specialAttack`);
  let AtLabel = document.createElement("label");
  AtLabel.setAttribute("class","inputName");
  AtLabel.textContent="To Hit Bonus ";
  let AInput = document.createElement("input");
  AInput.setAttribute("type",`number`);
  AInput.setAttribute("class","searchBarCreation");
  AInput.setAttribute("id",`specialAttackToHitBonus${choice}`);
  AInput.setAttribute("placeholder",`To Hit Bonus`);
  AInput.setAttribute("title",`NPC specialAttack`);
  AtLabel.appendChild(AInput);
  let dmgDice = document.createElement("select");
  dmgDice.setAttribute("class","searchBarCreation");
  dmgDice.setAttribute("id",`damageDicespecialAttack${choice}`);
  let diceArray = ['d4','d6','d8','d10','d12','None'];
  diceArray.forEach(dice=>{
    let option = document.createElement("option");
    option.value = dice;
    option.text = dice;
    dmgDice.appendChild(option);
  })
  let dropdownArea = document.createElement(`div`);
  dropdownArea.id=`specialAttackAttackList${choice}Area`;
  let dropdownCore = document.createElement(`div`);
  dropdownCore.className="dropDownAddition"
  dropdownCore.appendChild(dropdownArea);
  let perDayLabel = document.createElement("label");
  perDayLabel.setAttribute("class","stairCase-normalText");
  perDayLabel.setAttribute("id",`perDayZone${choice}`);
  perDayLabel.setAttribute("style",`display:none`);
  perDayLabel.textContent="Uses Per Day ";
  let perDay = document.createElement("input");
  perDay.setAttribute("type",`number`);
  perDay.setAttribute("class","searchBarCreation");
  perDay.setAttribute("id",`specialAttackperDay${choice}`);
  perDay.setAttribute("placeholder",`perDay`);
  perDay.setAttribute("title",`NPC specialAttack`);
  perDayLabel.appendChild(perDay)
  let perDayOptionLabel = document.createElement("p");
  perDayOptionLabel.setAttribute("class","inputName-close");
  perDayOptionLabel.textContent = "Has Limited Uses Per Day";
  let perDayZone = document.createElement("input");
  perDayZone.setAttribute("type","checkbox");
  perDayZone.setAttribute("id",`perDayZone${choice}Option`);
  perDayZone.setAttribute("placeholder","toggle");
  perDayZone.setAttribute("onclick",`toggle('perDayZone${choice}')`);
  perDayOptionLabel.appendChild(perDayZone);


  let damageDiv = document.createElement("div");
  damageDiv.setAttribute("id",`damageDiv${choice}`);
  let saveDiv = document.createElement("div");
  saveDiv.setAttribute("id",`saveDiv${choice}`);
  saveDiv.setAttribute("style","display:none");
  let attackDiv = document.createElement("div");
  attackDiv.setAttribute("id",`attackDiv${choice}`);
  attackDiv.appendChild(AtLabel);
  attackDiv.appendChild(dropdownCore);
  DLabel.appendChild(ADice)
  DCLabel.appendChild(dcStat);
  container.appendChild(choices);
  addBreak(container)
  addBreak(container)
  saveDiv.appendChild(savingThrowTypeLabel)
    throwLabel.appendChild(throwType);
    saveDiv.appendChild(throwLabel);
    container.appendChild(attackDiv);
    saveDiv.appendChild(DCLabel);
    saveDiv.appendChild(perDayOptionLabel);
    saveDiv.appendChild(perDayLabel);
    container.appendChild(saveDiv)
    
    damageDiv.appendChild(DLabel);
    addBreak(damageDiv)
    damageDiv.appendChild(ALabel);
    damageDiv.appendChild(dmgDice);
    container.appendChild(damageDiv)
  button.textContent = `Delete Special Attack`;
  div.appendChild(input)
    div.appendChild(specialAttackZoneLabel);
    div.appendChild(container);
  div.appendChild(button);
  document.getElementById("forum").querySelector(`.specialAttack`).appendChild(div);
  createVariableArrayListener(`choicesSpecial${choice}`,`change`,specialAttackOptions,[getElementPointer(`choicesSpecial${choice}`),getElementPointer(`specialAttackZone${choice}`)]);
  arrayToDropdown(getAttacksSpecial(),`specialAttackAttackList${choice}`,[getAttacks()[0]],false,[],false,false,true);
  document.getElementById(`dropdownspecialAttackAttackList${choice}`).querySelector("li").classList.add("active")
  createVariableListener(`dropdownspecialAttackAttackList${choice}`,'click',dropdownInteraction,getElementPointer(`dropdownspecialAttackAttackList${choice}`),true);
  createVariableArrayListener(`dropdownspecialAttackAttackList${choice}`,'keyup',searchDrop,[getElementPointer(`dropdownspecialAttackAttackList${choice}`),getElementPointer(`searchfeat`)]);
  selectionCreation(`dropdownspecialAttackAttackList${choice}`);
  addSpecialAttackListeners(choice)

}

function specialAttackOptions(selectionElement,element){
  let selection = selectionElement.value;
  let id = element.id.replace("specialAttackZone","");
  console.log(selection)
  console.log(id)
//  console.log(element.getElementById(`attackDiv${id}`))
  switch(selection){
    case "Attack":
      element.querySelector(`#saveDiv${id}`).setAttribute("style","display:none");
      element.querySelector(`#attackDiv${id}`).setAttribute("style","display:block");
      element.querySelector(`#damageDiv${id}`).setAttribute("style","display:block");
      break;
    case "Save":
      element.querySelector(`#saveDiv${id}`).setAttribute("style","display:block");
      element.querySelector(`#attackDiv${id}`).setAttribute("style","display:none");
      element.querySelector(`#damageDiv${id}`).setAttribute("style","display:block");
      break;
    case "Bonus Damage":
      element.querySelector(`#saveDiv${id}`).setAttribute("style","display:none");
      element.querySelector(`#attackDiv${id}`).setAttribute("style","display:none");
      element.querySelector(`#damageDiv${id}`).setAttribute("style","display:block");
      break;
    case "Save Only":      
      element.querySelector(`#saveDiv${id}`).setAttribute("style","display:block");
      element.querySelector(`#attackDiv${id}`).setAttribute("style","display:none");
      element.querySelector(`#damageDiv${id}`).setAttribute("style","display:none");
      break;
      
  }
}

function createElementSetup(elementTag,element,item,listName,labelID){
  labelID = labelID.replaceAll(" ","");
  // console.log(elementTag)
  // console.log(labelID)
  // console.log(element)
  // console.log(item)
  // console.log(listName)
  labelID = labelID.trim();
  let newEl = document.createElement(elementTag);
  switch(elementTag.toLocaleLowerCase()){
    case "label":
      newEl.setAttribute("class","inputName");
      newEl.textContent = element.textContent;
      break;
    case "input":
      newEl.setAttribute("type",element.getAttributeNode("type").value);
      newEl.setAttribute("placeholder",element.getAttributeNode("placeholder").value);
      newEl.setAttribute("id",`${listName}${item}${labelID}`);
      newEl.setAttribute("class","searchBarCreation");
      newEl.value=element.value;
      break;
    case "select":
      newEl.setAttribute("class","searchBarCreation");
      newEl.setAttribute("name",`monsterAbilityDice${item}`);
      newEl.setAttribute("id",`monsterAbilityDice${item}Select${labelID}`);
      for(let i = 0; i<element.options.length;i++){
        let option = document.createElement("option");
        option.value = element.options[i].value;
        option.text = element.options[i].value;
        if(element.options[i].value==element.value){
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
      divlabel.textContent = element.querySelector("label").textContent;
      let newEl2 = document.createElement("div");
      newEl2.setAttribute("id",`attackSection${item}Area`);
      newEl.appendChild(divlabel);
      newEl.appendChild(newEl2);
      break;
    case "textarea":
      newEl.setAttribute("name",`textArea${listName}${item}`);
      newEl.setAttribute("placeholder",element.getAttributeNode("placeholder").value);
      newEl.setAttribute("title","textArea"+element.getAttributeNode("title").value);
      newEl.setAttribute("id",`textarea${listName}${item}${labelID}`);
      newEl.setAttribute("class","searchBarCreation");
      newEl.value=element.value;
      break;
  }
  return newEl;
}

function addEasylist(element,entry,listValue){
  console.log(listValue);
  let div = document.createElement("div");
  let label = document.createElement("label");
  let select = document.createElement("select");
        //   <div id="ManeuverabilitySection" style="display:none">
        // <label class="inputName" for="NPCFlightManeuverability">Flight Maneuverability:</label><br>
        // <select class="searchBarCreation" name="NPCFlightManeuverability" id="NPCFlightManeuverability">
        // <option>Clumsy</option>
        // <option>Poor</option>
        // <option selected>Average</option>
        // <option>Good</option>
        // <option>Perfect</option>
        // </select><br>
        // </div>
  switch(entry){
    case "fly":
      div.id="ManeuverabilitySectionRead";
      div.className="centered"
      label.className="inputName";
      label.setAttribute("for","NPCFlightManeuverability");
      label.textContent = "Maneuverability:";
      select.className="searchBarCreation";
      select.name="NPCFlightManeuverabilityRead";
      select.id="NPCFlightManeuverabilityRead";
      let itemList = ['Clumsy','Poor','Average','Good','Perfect'];
      itemList.forEach(item=>{
        let option = document.createElement("option");
        option.value =item;
        option.textContent=item;
        if(item==listValue){
          option.selected=true;
        }
        select.appendChild(option);
      });
      break;
  }
  div.appendChild(label);
  div.appendChild(select);
  element.appendChild(div);
}

function addDropdownchoice(listName,secondaryInput=false,placeholder="something",secondaryInputType="text",subDropdown=false,doDelete=true,isDropinDrop=false){
  let val = document.getElementById(`dropdownSelection${listName}`).value;
  let additionalValidation = true;
  if(document.getElementById(`${listName}Temp`)!=null&&document.getElementById(`${listName}Input`).style.display!="none"){
    if(document.getElementById(`${listName}Temp`).value==""){
      additionalValidation=false;
    }
  }
  val = capitalizedCaseCharacter(val.toLocaleLowerCase());
  if(additionalValidation!=false){
    additionalValidation = checkIsInList(listName,val);
    if(additionalValidation==false&&listName=="sphere"){
      additionalValidation = checkIfInTalents(val);

    }
  }
          

  if(listName=="classes"&&additionalValidation!=false){
    additionalValidation=checkSecondaryDropdown(val);
  }
  // if(document.getElementById("classButton").style.display!="none"){
    //   let maxLevel = document.getElementById("MonsterLevel").value;//have alternative based on classLevels
    //   let classLevels = getClassLevels();
    //   let inputtedValue = Number(document.getElementById("classesTemp").value);
    //   let totalValue = classLevels+inputtedValue;
    //    if(maxLevel<totalValue){
      //     additionalValidation=false;
      //    }
      // }
  
  if(val!=""&&additionalValidation){
    let textSelected = document.createElement("label");
    textSelected.textContent = val;
    if(val.includes("\'")){
      val=val.replace("\'","");
    }
    if(val.includes(" ")){
      val=val.replace(" ","");
    }
    val=val.toLocaleLowerCase();
    textSelected.className = "inputName"
    textSelected.setAttribute("for",`${listName}${val}`);
    let divZone = document.createElement("div");
    let arr = [];
    if(listName.includes("sphere")){
      arr = getTalentList(capitalizedCaseCharacter(val));
    }
    divZone.setAttribute("id",`${val}Choice`);
    divZone.setAttribute("class","dropDownChoice");
    if(listName.includes("sphere")){
      divZone.setAttribute("style","display: block;");
      let subDiv = document.createElement("div");
      let extraChoice = document.createElement("div");
      extraChoice.setAttribute("id",`${val}subChoice`)
      extraChoice.setAttribute("style","display:block;")
      let dropDownDiv = document.createElement("div");
      dropDownDiv=createNewArea(val);
      subDiv.setAttribute("class","dropDownChoice");
      subDiv.appendChild(textSelected);
      divZone.appendChild(subDiv);
      divZone.appendChild(dropDownDiv);
      divZone.appendChild(extraChoice);
      addDeleteButton(subDiv,val,listName);
    }else{
      divZone.appendChild(textSelected);
    }

    if(listName=="feat"){
      secondaryInput=(setFeatsAvailable()>0&&!notInputFeat(val));
    }
    if(secondaryInput){
      if(document.getElementById(`${listName}Input`).style.display!="none"){
        createInputSection(listName,divZone,val,placeholder,secondaryInputType,subDropdown);
  
      }
    }
    if(val=="fly"){      
      addEasylist(divZone,val,document.getElementById("NPCFlightManeuverability").value);
    }
    if(doDelete && !listName.includes("sphere")){
      addDeleteButton(divZone,val,listName);
    }
      if(setFeatsAvailable()>0||listName!="feat"||listName!="classes"){
        if(isDropinDrop){
          
          document.getElementById(`${listName}subChoice`).appendChild(divZone);

        }else{
          document.getElementById(`${listName}Choice`).appendChild(divZone);
        }
        document.getElementById(`dropdownSelection${listName}`).value="Select";
      }
      if(secondaryInput==false &&subDropdown==true){
        arrayToDropdown(arr,val,`Search ${spacelessCapitalizedCaseCharacter(val)} talent`);
        createVariableListener(`dropdown${val}`,'click',dropdownInteraction,getElementPointer(`dropdown${val}`),true);
        createVariableArrayListener(`dropdown${val}`,'keyup',searchDrop,[getElementPointer(`dropdown${val}`),getElementPointer(`search${val}`)]);
        selectionCreation(`dropdown${val}`);
      }
    if(listName=="classes"){
      createListeners(`classes${val}`,`input`,classListener);
      createListeners(`classes${val}`,`input`,setSkillPoints);
      createListeners(`classes${val}`,`input`,updateFeatDetails);
    }
    if(secondaryInputType=="number"){
      if(document.getElementById(`${listName}${val}`)!=null){
        createVariableListener(`${listName}${val}`,`input`,setProperMinLevel,getElementPointer(`${listName}${val}`));
        createVariableListener(`${listName}${val}`,`focusout`,setProperMinLevel,getElementPointer(`${listName}${val}`));
        createVariableListener(`${listName}${val}`,`focusout`,enforceMinLevel,getElementPointer(`${listName}${val}`));
        createVariableListener(`${listName}${val}`,`keyup`,setProperMinLevel,getElementPointer(`${listName}${val}`));
      }
    }

    if(listName=="monsterAbilities"){
      createVariableListener(`monsterAbilities${val}`,`input`,setProperMinLevel,getElementPointer(`monsterAbilities${val}`));
    }
    }
    
    modifyList(listName);
    if(listName=="monsterAbilities"||listName=="sense"){
    modifyList("monsterAbilities")
    modifyList("sense")
  }
}

function createNewArea(selection){
    let newArea = document.createElement("div");
    let subArea = document.createElement("div");
    subArea.setAttribute("class",selection);
    subArea.setAttribute("id",`${selection}Area`);
    newArea.appendChild(subArea);
    let addButton = document.createElement("button");
    addButton.setAttribute("type","button");
    addButton.setAttribute("class","formButton");
    addButton.setAttribute("onclick",`addDropdownchoice('${selection}',false,'','',false,true,true)`)
    addButton.innerText=`Add ${selection} Sphere`;
    newArea.appendChild(addButton);
    return newArea;
}


function createInputSection(listName,divZone,selection,placeholderText,inputType,doSubDropdown){
  let inputval = document.getElementById(`${listName}Temp`).value;
  let input = document.createElement("input");
  input.setAttribute("type",inputType);
  input.setAttribute("class","searchBarCreation");
  input.setAttribute("name",`${listName}${selection}`);
  input.setAttribute("id",`${listName}${selection}`);
  input.setAttribute("title",`${listName}${selection}`);
  input.setAttribute("placeholder",`Insert ${placeholderText} Here`);
  input.value=inputval;
  divZone.appendChild(input);
  if(listName=="sense"||listName=="speed"){
    let label = document.createElement("label");
    label.setAttribute("class","inputName");
    label.setAttribute("id",`${selection}feet`);
    label.setAttribute("for",`${listName}${selection}`);
    label.textContent = "ft."
    divZone.appendChild(label);
  }
  // if(doSubDropdown){
  //   if(!checkIfNPC(selection)){
  //     let archetypeSelected = document.getElementById(`dropdownSelectionarchetype`).value;
  //     let subZone = document.createElement("div");
  //     subZone.setAttribute("id",`archetype${selection}subArea`);
  //     subZone.setAttribute("class","dropDownAddition");
  //     divZone.appendChild(subZone);
  //     document.getElementById(`${listName}Choice`).appendChild(divZone);
  //     arrayToDropdownSub(getArchetypeName(classJson.class,selection,false),listName,"Select",`archetype${selection}`,archetypeSelected);
  //     createListeners(`dropdownSelectionarchetype${selection}`,'change',classListener);
  //   }
  // }
  document.getElementById(`${listName}Temp`).value = "";
}

function checkIfNPC(className){
  let isNPCClass= false;
  npcClassList.forEach(classlower=>{
    if(classlower.toLocaleLowerCase().trim()===className.toLocaleLowerCase().trim()){
      isNPCClass= true;
    }
  })
  if(className.toLocaleLowerCase()=="custom"){
    return true;
  }
  return isNPCClass;
}

function deleteChoice(id,list){
  if(document.getElementById(id).nextElementSibling!=null){
    if(document.getElementById(id).nextElementSibling.outerHTML=="<br>"){
      document.getElementById(id).nextElementSibling.remove();
    }
  }
  document.getElementById(id).remove();
  modifyList(list)
  if(list=="monsterAbilities"||list=="sense"){
    modifyList("monsterAbilities")
    modifyList("sense")
  }
}

function deleteObject(id){
  document.getElementById(id).remove();
}

function dynamicModifyList(list){
  // console.log(list)
  let arr = []
  let isDropDown;
  let currentSelection = "";
  if(document.getElementById(`SpecialAbilityName0`)!=null){
  for(let i=0;i<document.getElementById(`${list}Area`).childElementCount;i++){
    if(document.getElementById(`dropdown${list}bonusAttackDamage${i}`)){
    isDropDown = document.getElementById(`dropdown${list}bonusAttackDamage${i}`).querySelector("ul");
    // setTimeout(() => {
    // console.log(isDropDown);
    // console.log(isDropDown.children);
    //   isDropDown.querySelectorAll(".dropdown-item").forEach(elem=>{
    //   if(elem.className.includes("active")){
    //     currentSelection = elem.textContent;
    //   }})
    // },0)
    isDropDown.innerHTML="";
    arr=getSpecialAbilities();
    console.log(arr);
    if(arr){
    arr.forEach(name=>{
      if(document.getElementById(`${spacelessCapitalizedCaseCharacter(name)}Choice`)==null&&document.getElementById(`${spacelessCapitalizedCaseCharacter(name).toLocaleLowerCase()}Choice`)==null){
        if(displayedInOtherList(name)){
          return;
        }
        let option = document.createElement("li");
        option.dataset.value = name;
        option.textContent = getName(list,name);
        if(name==currentSelection){
          option.className="dropdown-item active";
        }else{
          option.className="dropdown-item";
        }
        isDropDown.appendChild(option);
      }
    })
//     createVariableListener(`dropdown${list}bonusAttackDamage${i}`,'click',dropdownInteraction,`dropdown${list}bonusAttackDamage${i}`,true);
//     createVariableArrayListener(`dropdown${list}bonusAttackDamage${i}`,'keyup',searchDrop,[`dropdown${list}bonusAttackDamage${i}`,`searchbonusdamage`]);
// //    dynamicSelectionCreation(`dropdown${list}bonusAttackDamage`,i);
//     multiChoice(`dropdown${list}bonusAttackDamage${i}`)
  }
  }
}
}
}

function modifyList(list){
  let arr = []
  let isDropDown;
  let currentSelection = "";
  isDropDown = document.getElementById(`dropdown${list}`).querySelector("ul");
  if(list=="monsterAbilities")
    isDropDown.querySelectorAll(".dropdown-item").forEach(elem=>{
  if(elem.className.includes("active")){
    currentSelection = elem.textContent;
  }
  });
  isDropDown.innerHTML="";
  switch(list){
    case "language":
      arr=lanList;
      break;
    case "sense":
      arr=senseList;
      break;
    case "feat":
      arr=showObtainableFeats(featList);
      break;
    case "speed":
      arr=movementList;
      break;
    case "racialMod":
      arr=racialModifiersList;
      break;
    case "classes":
      arr=getClassList();
      break;      
    case "spherePower":
      arr=spherePowerList;
      break;
    case "sphereMight":
      arr=sphereMightList;
      break;
    case "sphereGuile":
      arr=sphereGuileList;
      break;
    case "monsterAbilities":
      arr=monsterAbilitiesList;
      break;
    default:
      arr = getTalentList(list);
      break;
      }
    // isDropDown.innerHTML;
    // console.log(isDropDown);
    arr.forEach(name=>{
      if(document.getElementById(`${spacelessCapitalizedCaseCharacter(name)}Choice`)==null&&document.getElementById(`${spacelessCapitalizedCaseCharacter(name).toLocaleLowerCase()}Choice`)==null){
        if(displayedInOtherList(name)){
          return;
        }
        let option = document.createElement("li");
        option.dataset.value = name;
        option.textContent = getName(list,name);
        if(name==currentSelection){
          option.className="dropdown-item active";
        }else{
          option.className="dropdown-item";
        }
        isDropDown.appendChild(option);
      }
    })
    selectionCreation(`dropdown${list}`);
  }


function displayedInOtherList(name){
  let checkZones = ['sense','monsterAbilities']
  let itemList = []
  if(senseList.includes(name)||monsterAbilitiesList.includes(name)){
    checkZones.forEach(zone=>{
      let text = document.getElementById(`${zone}Choice`).querySelectorAll("label")
      if(text!=null){
        text.forEach(item=>{

          let itemValue = item.textContent.replace(":","")
          itemList.push(itemValue);
        })
        if(itemList.includes(name)){
          return true;
        }
      }
    })
  }
  return false;
}

function createDatalist(arr,element,listName,sort=true){
  if(sort){
    console.log(sort);
    arr.sort();
  }
    let customDalist = document.createElement("div");
  customDalist.className="dropdown-box";
  customDalist.setAttribute("id",`dropdown${listName}`);
  let inputVeiw = document.createElement("div");
  let inputText = document.createElement("input");
  inputVeiw.className="selected-item";
  inputText.setAttribute("id",`dropdownSelection${listName}`);
  inputText.type="text";
  inputText.className="searchBarCreation";
  inputText.value="Select";
  inputText.readOnly=true;
  inputVeiw.appendChild(inputText);
  customDalist.appendChild(inputVeiw)
  let dropdownContext = document.createElement("div");
  dropdownContext.setAttribute("class","dropdown-content");
  let inputSection = document.createElement("div");
  inputSection.className="search-input";
  let usersinput = document.createElement("input");
  usersinput.setAttribute("id",`search${listName}`);
  usersinput.className="searchBarCreation";
  inputSection.appendChild(usersinput);
  dropdownContext.appendChild(inputSection);
  let ulElement = document.createElement("ul");
  arr.forEach(name=>{
    if(document.getElementById(`${capitalizedCaseCharacter(name)}Choice`)==null){
        let option = document.createElement("li");
        option.dataset.value = name;
        option.textContent = getName(listName,name);
        option.className="dropdown-item";
        if(listName=="curse"){
          option.id=`${name}cursesList`;
        }
        ulElement.appendChild(option);
      }
    })
    dropdownContext.appendChild(ulElement);

  // let searchDropdown = document.createElement("input");
  // searchDropdown.setAttribute("list",listName);
  // searchDropdown.setAttribute("id",`${listName}List`);
  // searchDropdown.setAttribute("class","searchBarCreation");
  // searchDropdown.setAttribute("placeholder",`${placeHoldertext}`);
  customDalist.appendChild(dropdownContext);
  element.appendChild(customDalist);
}
//Insert ${listName} type here
function arrayToDropdown(arr,listName,placeHoldertext,enableOnCreation=false,enablerList=[],edit=false,varyNames=false,dualArray=false){
//   console.log(listName)
  const targetArea = document.getElementById(`${listName}Area`);
  // console.log(targetArea.innerHTML)
  targetArea.innerHTML="";
  let customDalist = document.createElement("div");
  customDalist.className="dropdown-box";
  customDalist.setAttribute("id",`dropdown${listName}`);
  let inputVeiw = document.createElement("div");
  let inputText = document.createElement("input");
  inputVeiw.className="selected-item";
  inputText.setAttribute("id",`dropdownSelection${listName}`);
  inputText.type="text";
  inputText.className="searchBarCreation";
  inputText.value=placeHoldertext;
  inputText.readOnly=true;
  inputVeiw.appendChild(inputText);
  customDalist.appendChild(inputVeiw)
  let dropdownContext = document.createElement("div");
  dropdownContext.setAttribute("class","dropdown-content");
  let inputSection = document.createElement("div");
  inputSection.className="search-input";
  let usersinput = document.createElement("input");
  usersinput.setAttribute("id",`search${listName}`);
  usersinput.className="searchBarCreation";
  inputSection.appendChild(usersinput);
  dropdownContext.appendChild(inputSection);
  let ulElement = document.createElement("ul");
  if(arr.length==0){
    arr=['empty']
  }
  let typeArray =[]

  if(dualArray&& Array.isArray(arr)){
    typeArray = arr[1];
    arr = arr[0];
  }
  let onlySingleInstance = true;
  let o=0;
  Array.from(arr).forEach(name=>{
    if(document.getElementById(`${capitalizedCaseCharacter(name)}Choice`)==null||listName=="chosenClasses"){
      let option = document.createElement("li");
      if(dualArray){
        option.dataset.value = typeArray[o];
      }else{
        option.dataset.value = name;
      }
      option.textContent = getName(listName,name);
      option.className="dropdown-item";
      if(listName=="curse"){
        option.id=`${name}cursesList`;
      }
      if(enableOnCreation){
        if(!varyNames){
        if(!edit){
          enablerList.forEach(e=>{
              if(e.className.includes("active") && name==e.dataset.value){
                option.classList.add("active");
              }

            });
          }else{
            enablerList.forEach(e=>{
              if(e==name){
                option.classList.add("active");
              }

            });
          }
        }else{
          let classId= enablerList[o];
          if(classId!=null){
          if(classId.className.includes("active")){
            option.classList.add("active");
          }
        }
          
        }
        
      }
        ulElement.appendChild(option);
        o++;
      }
    });
    dropdownContext.appendChild(ulElement);

  // let searchDropdown = document.createElement("input");
  // searchDropdown.setAttribute("list",listName);
  // searchDropdown.setAttribute("id",`${listName}List`);
  // searchDropdown.setAttribute("class","searchBarCreation");
  // searchDropdown.setAttribute("placeholder",`${placeHoldertext}`);
  customDalist.appendChild(dropdownContext);
  // console.log(customDalist)
  // console.log(document.getElementById(`${listName}Area`))
    document.getElementById(`${listName}Area`).appendChild(customDalist);
}


function arrayToDropdownSub(arr,listName,placeHolderText,target,archetypeSelected=""){
  listName = listName.toLocaleLowerCase();
  // const targetArea = document.getElementById(`${target}`);
  // targetArea.innerHTML="";
  let customDalist = document.createElement("div");
  customDalist.className="dropdown-box";
  customDalist.setAttribute("id",`dropdown${target}`);
  let inputVeiw = document.createElement("div");
  let inputText = document.createElement("input");
  inputVeiw.className="selected-item";
  inputText.setAttribute("id",`dropdownSelection${target}`);
  inputText.type="text";
  inputText.className="searchBarCreation";
  inputText.value=placeHolderText;
  inputText.readOnly=true;
  inputVeiw.appendChild(inputText);
  customDalist.appendChild(inputVeiw)
  let dropdownContext = document.createElement("div");
  dropdownContext.setAttribute("class","dropdown-content");
  let inputSection = document.createElement("div");
  inputSection.className="search-input";
  let usersinput = document.createElement("input");
  usersinput.setAttribute("id",`search${target}`);
  usersinput.className="searchBarCreation";
  inputSection.appendChild(usersinput);
  dropdownContext.appendChild(inputSection);
  let ulElement = document.createElement("ul");
//  isDropDown.setAttribute("autocomplete","off");
  arr.forEach(name=>{
    let option = document.createElement("li");
    option.dataset.value = name;
    option.textContent = name;
    option.className="dropdown-item";
    ulElement.appendChild(option);
  })
  dropdownContext.appendChild(ulElement);
  // let searchDropdown = document.createElement("input");
  // searchDropdown.setAttribute("list",`${listName}sub`);
  // searchDropdown.setAttribute("id",`${listName}subList`);
  // searchDropdown.setAttribute("class","searchBarCreation");
  // searchDropdown.setAttribute("placeholder",`${placeHolderText}`);
  customDalist.appendChild(dropdownContext);
  document.getElementById(`${target}subArea`).appendChild(customDalist);
  if(archetypeSelected!=""){
    document.getElementById(`dropdownSelection${target}`).value=archetypeSelected;
    let index = -1;
    index = getListIndex(target,archetypeSelected);
    document.getElementById(`dropdown${target}`).querySelectorAll("li")[index].classList.add("active");
  }
  createVariableListener(`dropdown${target}`,'click',dropdownInteraction,getElementPointer(`dropdown${target}`),true);
  createVariableArrayListener(`dropdown${target}`,'keyup',searchDrop,[getElementPointer(`dropdown${target}`),getElementPointer(`search${target}`)]);
  selectionCreation(`dropdown${target}`);
  // if(listName.includes("archetype")){
  //   let name=listName.replace("archetype","").trim();
  //  //   createVariableListener(`${listName}subList`,`input`,constrainedDropdown,name);
  // }
}



function constrainedDropdown(item){
  let list = [];
  list = getArchetypeList(item);
  let text;
  let inputPointer = document.getElementById(`archetype${item}subList`);
  let previousText;
  text = inputPointer.value;
  previousText = text.slice(0,-1);
  if(!isInArray(list,text)){
   inputPointer.value=previousText;
  }
}

function isInArray(list,text){
  let inArray = false
  list.forEach(element=>{
    if(element.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
      inArray = true;
    }
  })
  return inArray;
}



function extraArgs(inputType){
  switch(inputType){
    case "number":
      return "min=1";
    default:
      return "";
  }
}



function createSelection(arrary,element,selected=""){
    arrary.forEach(arr=>{
    let option = document.createElement("option");
    option.value = arr;
    option.text = arr;
    if(selected!=""){
      if(arr==selected){
        option.selected=true;
      }
    }
    element.appendChild(option);
  })
}

function resetSkills(){
  let skills = ['Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'];
  let knowledge = ['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'];
  clearArray(skills);
  clearArray(knowledge);
  document.getElementById("AllOption").checked=false;
  // arrayToggle('skills',['Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
  document.getElementById("skillsKnowledgeOption").checked = false;
  arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
}


function NPCDisplay(doDisplay){
  document.getElementById("classChoicesButton").style.display = doDisplay==true?"block":"none";
  document.getElementById("monsterHD").style.display = doDisplay==false?"block":"none";
  document.getElementById("monsterProgression").style.display = doDisplay==false?"block":"none";
  document.getElementById("choiceTabs").style.display = doDisplay==false?"block":"none";
}

function doSkills(cSkills,skills,isJustEnable=false){
  cSkills.forEach(element=>{
                element = consistentElement(element);

                if(!element.includes("Knowledge")){
                    // let skill = element.substring(0,element.lastIndexOf(" ")).trim();
                    // let skillVal = element.substring(element.lastIndexOf(" ")).trim()
                    // skill = skill.replace(" ", "");

                    let i=0;
                        document.getElementById(element+"Option").checked = true;
                        document.getElementById(element).style.display = "block";
                        if(element==="Profession"){
                          if(!isJustEnable)
                            {
                            skills.Profession.forEach(profession=>{
                              createDualInformation('Profession','Name','Value','Profession','Profession Name','Profession Value','text','number');
                                  document.getElementById(`ProfessionName${i}`).value=profession.Name;
                                  document.getElementById(`ProfessionValue${i}`).value=profession.Ranks;
                                  
                                  createListeners(`deleteProfession${i}`,'click',refreshList);
                                  i++;
                                })
                               }
                              //else{
                              //   createDualInformation('Profession','Name','Value','Profession','Profession Name','Profession Value','text','number');
                              //   createListeners(`deleteProfession${i}`,'click',refreshList);
                              // }
                        }else if(element==="Craft"){
                            i=0;
                            if(!isJustEnable)
                            {
                            skills.Craft.forEach(craft=>{
                                createDualInformation('Craft','Name','Value','Craft','Craft Name','Craft Value','text','number');
                                  document.getElementById(`CraftName${i}`).value=craft.Name;
                                  document.getElementById(`CraftValue${i}`).value=craft.Ranks;
                                  createListeners(`deleteCraft${i}`,'click',refreshList);
                                  i++;
                                })
                               }
                               //else{
                              //   createDualInformation('Craft','Name','Value','Craft','Craft Name','Craft Value','text','number');
                              //     createListeners(`deleteCraft${i}`,'click',refreshList);
                              // }
                          }else{
                          if(!isJustEnable)
                          {
                            
                            document.getElementById(element).value = Number(skills[element]);
                          }
                        }

                }
                if(element.includes("Knowledge")){
                    document.getElementById("skillsKnowledgeOption").checked = true;
//                    let skillVal = element.substring(element.lastIndexOf(" ")).trim();
                    if(!isJustEnable||element.includes("(")){
                      let skill = element.replace("Knowledge(","");
                      skill = skill.substring(0,skill.lastIndexOf(")")).trim();
                      document.getElementById(skill+"Option").checked = true;

                      if(skill!="All"){
                      document.getElementById(skill).style.display = "block";
                      if(!isJustEnable){
                        document.getElementById(skill).value = Number(skills[element]);
                      }
  //                    arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
                    }else{
                      arr = ['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'];
//                      toggleArray(arr)
                    }
                    }
                }

              })

}


function showObtainableFeats(feats){
  feats.forEach(feat=>{
  //  console.log(featswithPrereqs[feat.replace(" ","")]);
  })
  return feats;
}

function clearDropDowns(list){
  list.forEach(name=>{
    let languageVar = document.getElementById(`${name}Choice`);
        while(languageVar.hasChildNodes()){
          languageVar.removeChild(languageVar.firstElementChild);
        }

  })
}







function consistentClassLevel(level){
  let classChoice = document.getElementById("classesChoice");
  let classChildrenCount = classChoice.childElementCount;
  while(classChildrenCount>level){
    classChoice.removeChild(classChoice.lastElementChild);
    classChildrenCount = classChoice.childElementCount;
  }
  let classZone = document.getElementById("classesChoice");
  let totalLevels = 0;
  classZone.childNodes.forEach(children=>{
    let textNode = children.textContent;
    textNode = textNode.replace("Delete","").toLocaleLowerCase();
    totalLevels+=Number(document.getElementById(`classes${textNode}`).value);
    if(totalLevels>level){
      document.getElementById(`classes${textNode}`).value=totalLevels-level+1;
    }
  });
}


function createStatListeners(){
  let core = ['Str','Dex','Con','Int','Wis','Cha']
  core.forEach(stat=>{
    createVariableListener(`NPC${stat}`,'input',setProperMin,stat);
  })
}


function createDropDownChoices(arr){
    arr.forEach(element=>{
        arrayToDropdown(element[0],element[1],element[2]);
          createVariableListener(`dropdown${element[1]}`,'click',dropdownInteraction,getElementPointer(`dropdown${element[1]}`),true);
          createVariableArrayListener(`dropdown${element[1]}`,'keyup',searchDrop,[getElementPointer(`dropdown${element[1]}`),getElementPointer(`search${element[1]}`)]);
          selectionCreation(`dropdown${element[1]}`);
    })
}

function dynamicSelectionCreation(elementID,i){
  selectionCreation(`${elementID}${i}`);
}

function selectionCreation(elementID){
  const dropdown = getElementPointer(elementID);
  // console.log(elementID);
  // console.log(dropdown);
  const dropdownItems = getElementPointer(elementID).querySelectorAll(".dropdown-item");
  dropdownItems.forEach(dropdownItem=>{
  const listenerObject = (e)=>{
    e.stopPropagation();
    dropdownItems.forEach(innerDropdownItem=>{
    innerDropdownItem.classList.remove("active");
  })
  dropdownItem.classList.add("active");
  const selectedItemInput = getElementPointer(elementID).querySelector(".selected-item input");
  console.log(document.getElementById(elementID))
  selectedItemInput.value = dropdownItem.dataset.value;
  const changeEvent = new Event('change',{bubbles:true});
  selectedItemInput.dispatchEvent(changeEvent);
  closeAllDropdowns();
    }
    dropdownItem.addEventListener("click",listenerObject);
  })
}

function deleteSelection(element){
  let registryKey = `${elementID}selectionDropdown`;
  if(listener){
    element.removeEventListener(eventType,listener);
  }
}


function additionalClick(elementID,functionName){
  const dropdown = getElementPointer(elementID);
  const dropdownItems = getElementPointer(elementID).querySelectorAll(".dropdown-item");
  dropdownItems.forEach(dropdownItem=>{
  dropdownItem.addEventListener("click",(e)=>{
    e.stopPropagation();
      functionName(e.target.textContent);
    })
  })
}

function multiChoice(elementID){
  const dropdown = getElementPointer(elementID);
  const dropdownItems = getElementPointer(elementID).querySelectorAll(".dropdown-item");
  dropdownItems.forEach(dropdownItem=>{
  dropdownItem.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(e.target.classList.contains("active")){
      e.target.classList.remove("active");
    }else{
      e.target.classList.add("active");
    }
    })
  })
}



function checkQuery(elementID){
  if(document.getElementById(elementID)!=null){
  const dropdown = document.getElementById(elementID);
  const dropdownItems = document.getElementById(elementID).querySelectorAll(".dropdown-item");
  dropdownItems.forEach(dropdownItem=>{
    console.log(dropdownItem)
  })
}
}

// Array.prototype.combineArray = function(array){
//     array.forEach(element=>{
//       this.push(element);
//     });
// }

/**
 * parses array objects into arrays
 * @param {object} entity
 * @param {string} param
 * @returns array
 */
function objectToArray(entity,param){
  return entity.map(item=>item[param]);
}

// /**
//  * parses array objects into arrays
//  * @param {object}
//  * @returns array
//  */
// Array.prototype.parseObjectToArray = function(){
//   let tempArray = []
//   this.forEach(object=>{
//     tempArray.push(object);
//   })
//   return tempArray;
// }





function generalListCreation(element,arr){
    arr.forEach(name=>{
    if(document.getElementById(`${spacelessCapitalizedCaseCharacter(name)}Choice`)==null&&document.getElementById(`${name.toLocaleLowerCase()}Choice`)==null){
      let option = document.createElement("li");
      option.dataset.value = name;
      option.textContent = getName("classes",name);
      option.className="dropdown-item";
      element.appendChild(option);
    }
  })
}


/**
 * 
 * @param {string} elementID 
 * returns element object
 */
function getElementPointer(elementID){
  if(elementID instanceof Element){
    return elementID;
  }
  let cleanedID = String(elementID).replace(/[)]/g, '').trim();
  return document.getElementById(`${cleanedID}`);
}



function listenersSetup(){
  console.warn("Fill in class json information")
  console.warn("add in archetype details in archetype tab");
  createListeners("MonsterLevel",'input',setFeatsAvailable);
  createListeners("NPCType",`change`,NPCTypeListener);  
  createListeners("NPCChoice",`change`,NPCTypeListener);
  createVariableListener("MonsterLevel",'keyup',setProperMinLevel,getElementPointer('MonsterLevel'));
  createVariableListener("classesTemp",'keyup',setProperMinLevel,getElementPointer('classesTemp'));
  createVariableListener("MonsterLevel",'focusout',enforceMinLevel,getElementPointer('MonsterLevel'));
  createVariableListener("classesTemp",'focusout',enforceMinLevel,getElementPointer('classesTemp'));
  // createVariableListener("monsterAbilitiesTemp",'focusout',enforceMinLevel,'monsterAbilitiesTemp');
  // createVariableListener("monsterAbilitiesTemp",'keyup',enforceMinLevel,'monsterAbilitiesTemp');
  // createVariableListener("monsterAbilitiesTemp",'change',enforceMinLevel,'monsterAbilitiesTemp');
  createListeners("MonsterLevel",`focusout`,updateHealthDisplay);
  createListeners("MonsterLevel",`focusout`,setSkillPoints);
  createListeners("MonsterLevel",`change`,updateHealthDisplay);
  createListeners("MonsterLevel",`change`,setSkillPoints);
  createListeners("MonsterLevel",`keyup`,updateHealthDisplay);
  createListeners("MonsterLevel",`keyup`,setSkillPoints);
  createListeners("NPCHitDice",`change`,updateHealthDisplay);
  createListeners("NPCCon",`input`,updateHealthDisplay);
  createListeners("NPCSize",'change',sizeListener);
  createListeners("NPCChoice","change",updateFormOnType);
  createListeners("NPCChoice","change",updateSaveValues);
  createListeners("NPCChoice","change",validTab);
  createListeners("NPCChoice","change",updateMiscDropdown);
  createListeners("usesSphereOption","change",validTab);
  NPCTypeListener();
  createDropDownChoices(dropDownArray);
  createToggleDisplayListener('dropdownsense','change',toggleInput,getElementPointer('senseInput'));
  createToggleDisplayListener('dropdownspeed','change',toggleInput,getElementPointer('ManeuverabilitySection'));
  createToggleDisplayListener('dropdownfeat','change',toggleInput,getElementPointer('featInput'));
 createVariableArrayListener('dropdownmonsterAbilities','change',dynamicInputs,[getElementPointer('dropdownSelectionmonsterAbilities'),monsterAbilitiesJson,getElementPointer('monsterAbilitiesInput')]);
  const targetNode = document.getElementById('featChoice');
  const config = {attributes:true,childList:true,subtree:true,CharacterData:true};
  observer.observe(targetNode,config);
  const targetNode2 = document.getElementById('classesChoice');
  const config2 = {attributes:true,childList:true,subtree:true,CharacterData:true};
  observer.observe(targetNode2,config2);
  const meleeNode = document.getElementById("meleeAttackArea");
  const meeleConfig = {attributes:true,childList:true,subtree:true,CharacterData:true};
  observer.observe(meleeNode,meeleConfig);
  const rangeNode = document.getElementById("rangeAttackArea");
  const rangeConfig = {attributes:true,childList:true,subtree:true,CharacterData:true};
  observer.observe(rangeNode,rangeConfig);
  const specialAttackNode = document.getElementById("specialAbilityArea");
  const specialAttackConfig = {attributes:true,childList:true,subtree:true,CharacterData:true};
  observeAbilities.observe(specialAttackNode,specialAttackConfig);
  sizeListener();
  createStatListeners();
  let skillHTML = document.createElement("div");
  let featHTML = document.createElement("div");
  let healthHTML = document.createElement("div");
  let skillCont = document.getElementById("skillsContainer");
  let skillList = skillCont.getElementsByClassName("searchBarCreation")
  let skillDisplay = document.getElementById("skillPoints");
  let healthDisplay = document.getElementById("calcHealth");
  let featDisplay = document.getElementById("featCount");
  let babDisplay = document.getElementById("bab");
  let strDisplay = document.getElementById("str");
  let dexDisplay = document.getElementById("dex");
  let conDisplay = document.getElementById("con");
  let intDisplay = document.getElementById("int");
  let wisDisplay = document.getElementById("wis");
  let chaDisplay = document.getElementById("cha");
  let tlevelDisplay = document.getElementById("tlevel");
  let clevelDisplay = document.getElementById("clevel");
  let raceDisplay = document.getElementById("race");
  let alignmentDisplay = document.getElementById("alignment");
  let fortDisplay = document.getElementById("fortsave");
  let willDisplay = document.getElementById("refsave");
  let refDisplay = document.getElementById("willsave");
  let babHTML = document.createElement("div")
  let strHTML = document.createElement("div")
  let dexHTML = document.createElement("div")
  let conHTML = document.createElement("div")
  let intHTML = document.createElement("div")
  let wisHTML = document.createElement("div")
  let chaHTML = document.createElement("div")
  let tlevelHTML = document.createElement("div")
  let clevelHTML = document.createElement("div")
  let raceHTML = document.createElement("div")
  let alignmentHTML = document.createElement("div")
  let fortHTML = document.createElement("div")
  let refHTML = document.createElement("div")
  let willHTML = document.createElement("div")
  featHTML.innerHTML = `<p class="inputName" id="featAmountDisplay">Remaining Feats: ${setFeatsAvailable()}</p>`;
  skillHTML.innerHTML = `<p class="inputName" id="skillPointsDisplay">Remaining Ranks: ${setSkillPoints()}</p>`;
  healthHTML.innerHTML = `<p class="inputName" id="calculateHealth">Health: ${getforumHPMonster()}</p>`;
  if(document.getElementById("NPCChoice").value=="Monster"){
    babHTML.innerHTML = `<p id="babDisplay">BAB: ${getBaB(document.getElementById("NPCBaB").value,document.getElementById("MonsterLevel").value)}</p>`;
  }else{
    babHTML.innerHTML = `<p id="babDisplay">BAB: ${getTotalBAB()}</p>`;

  }
  strHTML.innerHTML = `<p id="strDisplay">STR: ${getModifier(document.getElementById("NPCStr").value)}</p>`;
  dexHTML.innerHTML = `<p id="dexDisplay">DEX: ${getModifier(document.getElementById("NPCDex").value)}</p>`;
  conHTML.innerHTML = `<p id="conDisplay">CON: ${getModifier(document.getElementById("NPCCon").value)}</p>`;
  intHTML.innerHTML = `<p id="intDisplay">INT: ${getModifier(document.getElementById("NPCInt").value)}</p>`;
  wisHTML.innerHTML = `<p id="wisDisplay">WIS: ${getModifier(document.getElementById("NPCWis").value)}</p>`;
  chaHTML.innerHTML = `<p id="chaDisplay">CHA: ${getModifier(document.getElementById("NPCCha").value)}</p>`;
  if(document.getElementById("NPCChoice").value=="Monster"){
    tlevelHTML.innerHTML = `<p id="tlevelDisplay">Total Level: ${document.getElementById("MonsterLevel").value}</p>`;
    clevelHTML.innerHTML = `<p id="clevelDisplay">Class Levels: ${document.getElementById("MonsterLevel").value}</p>`;
  }else{
    tlevelHTML.innerHTML = `<p id="tlevelDisplay">Total Level: ${getTotalClassLevels()}</p>`;
    clevelHTML.innerHTML = `<p id="clevelDisplay">Class Levels: ${getClassListWithLevel()}</p>`;
  }
  raceHTML.innerHTML = `<p id="raceDisplay">Race: ${document.getElementById("NPCType").value}</p>`;
  alignmentHTML.innerHTML = `<p id="alignmentDisplay">Alignment: ${document.getElementById("NPCAlignment").value}</p>`;
  fortHTML.innerHTML = `<p id="fortDisplay">Base Fort Save: ${getSaveBonus("Fort")}</p>`;
  refHTML.innerHTML = `<p id="refDisplay">Base Ref Save: ${getSaveBonus("Ref")}</p>`;
  willHTML.innerHTML = `<p id="willDisplay">Base Will Save: ${getSaveBonus("Will")}</p>`;
  healthDisplay.appendChild(healthHTML);
  featDisplay.appendChild(featHTML);
  skillDisplay.appendChild(skillHTML);
  babDisplay.appendChild(babHTML);
  strDisplay.appendChild(strHTML);
  dexDisplay.appendChild(dexHTML);
  conDisplay.appendChild(conHTML);
  intDisplay.appendChild(intHTML);
  wisDisplay.appendChild(wisHTML);
  chaDisplay.appendChild(chaHTML);
  tlevelDisplay.appendChild(tlevelHTML);
  clevelDisplay.appendChild(clevelHTML);
  raceDisplay.appendChild(raceHTML);
  alignmentDisplay.appendChild(alignmentHTML);
  fortDisplay.appendChild(fortHTML);
  refDisplay.appendChild(refHTML);
  willDisplay.appendChild(willHTML);
  createFormListenersFeatsAndSkills(skillList);
  createListeners("dropdownSelectionclasses",`change`,classListener);
  classListener();
  createListeners("NPCCon",`input`,classListener);
  updateFormOnType();
  createListeners("usesSphereOption","change",updateFeats);
  createListeners("usesSphereOption","change",updateClasses);
  createListeners("MonsterLevel","change",updateFeatDetails);
  createListeners("MonsterLevel","change",updateSaveValues);
  createListeners("NPCFort","change",updateSaveValues);
  createListeners("NPCRef","change",updateSaveValues);
  createListeners("NPCWill","change",updateSaveValues);
  createListeners("NPCChoice","change",updateSaveValues);
  createListeners("NPCChoice","change",updateFeatDetails);
  createListeners("NPCStr","change",updateFeatDetails);
  createListeners("NPCDex","change",updateFeatDetails);
  createListeners("NPCCon","change",updateFeatDetails);
  createListeners("NPCInt","change",updateFeatDetails);
  createListeners("NPCWis","change",updateFeatDetails);
  createListeners("NPCCha","change",updateFeatDetails);
  createListeners("NPCBaB","change",updateFeatDetails);
  createListeners("NPCAlignment","change",updateFeatDetails);
  createListeners("NPCType","change",updateFeatDetails);
  // createListeners("classesList","change",updateFeatDetails);
  createListeners("NPCChoice","change",setSkillPoints)
  createListeners("NPCChoice","change",setFeatsAvailable)
  createVariableListener("meleeSelection","change",setAttackChoice,"melee")
  createVariableListener("rangeSelection","change",setAttackChoice,"range")
  updateSaveValues();
  setAttackChoice("range");
  setAttackChoice("melee");
}



function testSpellList(className){
  console.log(classSpellListJson[className]["0th"]);
}


function features(item){
  let isReturn = (item==="return"?"block":"none");
  let isAbilities = (item==="abilities"?"block":"none");
  document.getElementById("classSelection").style.display=isReturn;
  document.getElementById("classDisplay").style.display=isReturn;
  document.getElementById("abilitiesChoice").style.display=isAbilities;
}

//<button class="button" onclick="displayChange('other')">Misc</button>