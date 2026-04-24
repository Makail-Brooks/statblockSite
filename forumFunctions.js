function populateClassData(classArray){
    let nodes = document.getElementById("classesChoice").childNodes;
    let len = document.getElementById("classesChoice").childElementCount;
    for(var i =0;i<len;i++){
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


function populatexDay(array,elementName){
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
  for(var i = 0;i<len;i++){
    let val = document.getElementById(`${name}Choice`).children.item(i).getElementsByTagName("label").item(0).textContent;
    array.push(val);
  }
}

function populateDataDropDownJson(json,name){
  let len = document.getElementById(`${name}Choice`).childElementCount;
  let val = ""
  for(var i = 0;i<len;i++){
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
    let diceCount = document.getElementById(`${elementName}diceCount${i}`).value;
    if(diceCount<1){
      diceCount = 1;
    }
    let damageDice = document.getElementById(`damageDice${elementName}${i}`).value;
    let hasUniqueCrit = document.getElementById(`critStats${elementName}${i}Option`).checked;
    let hasRange = document.getElementById(`critRange${elementName}${i}Option`).checked;
    let hasMultiplier = document.getElementById(`critMultiplier${elementName}${i}Option`).checked;
    let hasUniqueDmg = document.getElementById(`extraDmg${elementName}${i}Option`).checked;
    let hasMultiAttack = document.getElementById(`multiAttack${elementName}${i}Option`).checked;
    let hasEnchants = document.getElementById(`enchantment${elementName}${i}0`)===null?false:true;
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
      let uniqueDamage = document.getElementById(`extraDmg${elementName}${i}`).value;
      json["uniqueDamage"]= uniqueDamage;
    }

    // let Enchantments = document.getElementById(`${elementName}Enchantments${i}`).value;
    // if(Enchantments!=""){
    //   json["Enchantments"]=Enchantments;
    // }
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
    json['isAlternative']=document.getElementById(`isAlternative${elementName}${i}Option`).checked;
    json['isAdditive']=document.getElementById(`isAdditive${elementName}${i}Option`).checked;
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
  var div = document.createElement("div");
  if(isNested){
    div = document.createElement("div4");
  }
  var input = document.createElement("textarea");
  input.setAttribute("type","text");
  input.setAttribute("class","searchBarCreation");
  input.setAttribute("name",`${choiceName}${choice}`);
  input.setAttribute("id",`${choiceName}${choice}`);
  input.setAttribute("placeholder",`${placeholderText}`);
  input.setAttribute("title",`NPC ${choiceName}`);
  var button = document.createElement("button");
  button.setAttribute("class","formButton");
  button.setAttribute("id",`delete${choiceName}${choice}`);
  button.setAttribute("type","button");
  button.setAttribute("onClick",`deleteArrayChoice(${choice},'${choiceName}')`);
  if(isNested){
    button.setAttribute("onClick",`deleteArrayChoice(${choice},'${choiceName}',true)`);
  }
    if(canHaveDC){
    var saveDCCheckLabel = document.createElement("p");
    saveDCCheckLabel.setAttribute("class","inputName");
    saveDCCheckLabel.textContent = "Has Save DC";
    var saveDCChoice = document.createElement("input");
    saveDCChoice.setAttribute("type","checkbox");
    saveDCChoice.setAttribute("id",`saveDC${choiceName}${choice}Option`);
    saveDCChoice.setAttribute("placeholder","toggle");
    saveDCChoice.setAttribute("onclick",`toggle('saveDC${choiceName}${choice}')`);
    saveDCCheckLabel.appendChild(saveDCChoice);
    var container = document.createElement("div2");
    container.setAttribute("id",`saveDC${choiceName}${choice}`);
    container.setAttribute("style","display:none");
    container.setAttribute("class","stairCase");
    var dcStat = document.createElement("select");
    dcStat.setAttribute("class","searchBarCreation");
    dcStat.setAttribute("name",`dcStat${choiceName}${choice}`);
    dcStat.setAttribute("id",`dcStat${choiceName}${choice}`);
    let saves=['Ref','Fort','Will'];
    let ability = ['Str','Dex','Con','Int','Wis','Cha'];
    createSelection(ability,dcStat);

  var DCLabel = document.createElement("label");
  DCLabel.setAttribute("class","inputName");
  DCLabel.setAttribute("for",`dcStat${choiceName}${choice}`);
  DCLabel.textContent="Save Type";

    DCLabel.appendChild(dcStat);
    container.appendChild(DCLabel);
    var br3 = document.createElement("p");
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
function createDualInformation(overallElementName,elementName1,elementName2,buttonText,placeholderText1,placeholderText2,buttonType1,buttonType2,canHaveDC=false,needSaveType=false,canBeAnAura=false,hasUniqueTrait=false,canHaveDamage=false){
  let choice = document.getElementById("forum").querySelector(`.${overallElementName}`).childElementCount;
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  var div = document.createElement("div");
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
     var dcStat = document.createElement("select");
    dcStat.setAttribute("class","searchBarCreation");
    dcStat.setAttribute("name",`dcStat${overallElementName}${choice}`);
    dcStat.setAttribute("id",`dcStat${overallElementName}${choice}`);
    let ability = ['Str','Dex','Con','Int','Wis','Cha'];
    createSelection(ability,dcStat);
    var DCLabel = document.createElement("label");
    DCLabel.setAttribute("class","inputName");
    DCLabel.setAttribute("for",`dcStat${overallElementName}${choice}`);
    DCLabel.textContent="Relevant Ability Mod";
    DCLabel.appendChild(dcStat);
    container.appendChild(DCLabel);
    var br3 = document.createElement("br");
    container.appendChild(br3);
  }
    if(hasUniqueTrait){
            var uniqueTrait = document.createElement("select");
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
      var saveType = document.createElement("select");
      saveType.setAttribute("class","searchBarCreation");
      saveType.setAttribute("name",`saveType${overallElementName}${choice}`);
      saveType.setAttribute("id",`saveType${overallElementName}${choice}`);
      let saves=['Ref','Fort','Will'];
      createSelection(saves,saveType);
      var abilityLabel = document.createElement("label");
      abilityLabel.setAttribute("class","inputName");
      abilityLabel.setAttribute("for",`saveType${overallElementName}${choice}`);
      abilityLabel.textContent="Save Type";
      abilityLabel.appendChild(saveType);
      container.appendChild(abilityLabel)
    }
    if(canHaveDamage){
    // var auraDmgContainer = document.createElement("div2");
    // auraDmgContainer.setAttribute("id",`auraDmg${overallElementName}${choice}`);
    // auraDmgContainer.setAttribute("style","display:none");
    // auraDmgContainer.setAttribute("class","stairCase");

    var isAuraDmgCheckLabel = document.createElement("p");
    isAuraDmgCheckLabel.setAttribute("class","inputName");
    isAuraDmgCheckLabel.textContent = "Does Damage";
    var isAuraDmgChoice = document.createElement("input");
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
    var isAuraChoice = document.createElement("input");
    isAuraChoice.setAttribute("type","checkbox");
    isAuraChoice.setAttribute("id",`aura${overallElementName}${choice}Option`);
    isAuraChoice.setAttribute("placeholder","toggle");
    isAuraChoice.setAttribute("onclick",`toggle('aura${overallElementName}${choice}')`);
    isAuraCheckLabel.appendChild(isAuraChoice);

    var auraRadius = document.createElement("input");
    auraRadius.setAttribute("type","number");
    auraRadius.setAttribute("class","searchBarCreation");
    auraRadius.setAttribute("name",`auraRadius${overallElementName}${choice}`);
    auraRadius.setAttribute("id",`auraRadius${overallElementName}${choice}`);
    auraRadius.setAttribute("placeholder","aura Radius");
    auraRadius.setAttribute("title","auraRadius");
    auracontainer.appendChild(auraRadius);
  }
  var button = document.createElement("button");
  button.setAttribute("class","formButton");
  button.setAttribute("id",`delete${overallElementName}${choice}`);
  button.setAttribute("type","button");
  button.setAttribute("onClick",`deleteDualInformation(${choice},'${overallElementName}','${elementName1}','${elementName2}',${canHaveDC},${needSaveType},${canBeAnAura},${hasUniqueTrait},${canHaveDamage})`);
  button.textContent = `Delete ${buttonText}`;
  div.appendChild(AName)
  div.appendChild(br2);
  div.appendChild(ADetails);  
  if(hasUniqueTrait){
    var br4 = document.createElement("br");
    div.appendChild(br4);
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
  div.appendChild(br);
  div.appendChild(button);
  document.getElementById("forum").querySelector(`.${overallElementName}`).appendChild(div);
  //body.appendChild(x);
}

/**
 * deletes element based on id and adjust other elements
 * @param {int} choiceID 
 * @param {string} overallElementName 
 * @param {string} elementName1 
 * @param {string} elementName2 
 */
function deleteDualInformation(choiceID,overallElementName,elementName1,elementName2,canHaveDC,needSaveType,canBeAnAura,hasUniqueTrait,canHaveDamage){
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
  
  
elements.remove();
}
/**
 * creates element for pathfinder attacks
 * @param {string} overallElementName 
 * @param {string} placeholderText1 
 * @param {string} placeholderText2 
 */
function createAttackInformation(overallElementName,placeholderText1,placeholderText2){
  let attack = overallElementName.replace("Attack","")
  let choice = document.getElementById("forum").querySelector(`.${overallElementName}`).childElementCount;
  let curChoice = document.getElementById(`${attack}Selection`).value;
  var div = document.createElement("div");
  div.setAttribute("class",`${overallElementName}`);
  let displayText = document.createElement("label");
  displayText.textContent = `${capitalizedCaseCharacter(overallElementName.replace("Attack",""))} ${choice}:`;
  displayText.className="inputName";
  displayText.id=`${overallElementName}${choice}Label`;
  displayText.appendChild(document.createElement("br"));
  div.appendChild(displayText);
  if(curChoice=="Weapon"){
    let weapon = document.getElementById(`${attack}WeaponSelection`).querySelector("Select").value;
    let select = document.createElement("select");
    select.className="searchBarCreation";
    createSelection(meleeWeaponList,select,weapon);
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
        div.appendChild(document.createElement("br"));
    }
    document.getElementById("forum").querySelector(`.${overallElementName}`).appendChild(div);
      var button = document.createElement("button");
      button.setAttribute("class","formButton");
      button.setAttribute("id",`delete${overallElementName}${choice}`);
      button.setAttribute("type","button");
      button.setAttribute("onClick",`deleteAttackInformation(${choice},'${overallElementName}')`);
      button.textContent = `Delete ${overallElementName}`;

  }else{
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  var br3 = document.createElement("br");
  var br4 = document.createElement("br");
  var CAName = document.createElement("textarea");
  CAName.setAttribute("type",`text`);
  CAName.setAttribute("class","searchBarCreation");
  CAName.setAttribute("name",`${overallElementName}Name${choice}`);
  CAName.setAttribute("id",`${overallElementName}Name${choice}`);
  CAName.setAttribute("placeholder",`${placeholderText1}`);
  CAName.setAttribute("title",`NPC ${overallElementName}`);
  var ADice = document.createElement("input");
  ADice.setAttribute("type",`number`);
  ADice.setAttribute("class","searchBarCreation");
  ADice.setAttribute("name",`${overallElementName}diceCount${choice}`);
  ADice.setAttribute("id",`${overallElementName}diceCount${choice}`);
  ADice.setAttribute("placeholder",`${placeholderText2}`);
  ADice.setAttribute("title",`NPC ${overallElementName}`);
  var ALabel = document.createElement("label");
  ALabel.setAttribute("class","inputName");
  ALabel.setAttribute("for",`damageDice${overallElementName}${choice}`);
  ALabel.textContent="Damage Dice";
  var dmgDice = document.createElement("select");
  dmgDice.setAttribute("class","searchBarCreation");
  dmgDice.setAttribute("name",`damageDice${overallElementName}${choice}`);
  dmgDice.setAttribute("id",`damageDice${overallElementName}${choice}`);
  let diceArray = ['d4','d6','d8','d10','d12'];
  diceArray.forEach(dice=>{
    var option = document.createElement("option");
    option.value = dice;
    option.text = dice;
    dmgDice.appendChild(option);
  })
  // var Enchantments = document.createElement("input");
  // Enchantments.setAttribute("type",`text`);
  // Enchantments.setAttribute("class","searchBarCreation");
  // Enchantments.setAttribute("name",`${overallElementName}Enchantments${choice}`);
  // Enchantments.setAttribute("id",`${overallElementName}Enchantments${choice}`);
  // Enchantments.setAttribute("oncontextmenu",`clearText('${overallElementName}Enchantments${choice}')`);
  // Enchantments.setAttribute("placeholder",`Enchantments`);
  // Enchantments.setAttribute("title",`Weapon Enchantments`);
  // Enchantments.addEventListener("contextmenu",(e)=>{e.preventDefault()});
  var toHitModifier = document.createElement("input");
  toHitModifier.setAttribute("type",`number`);
  toHitModifier.setAttribute("class","searchBarCreation");
  toHitModifier.setAttribute("name",`${overallElementName}toHitModifier${choice}`);
  toHitModifier.setAttribute("id",`${overallElementName}toHitModifier${choice}`);
  toHitModifier.setAttribute("placeholder",`to hit modifier`);
  toHitModifier.setAttribute("title",`NPC ${overallElementName}`);
  var enchantments = document.createElement("button");
  enchantments.setAttribute("type","button");
  enchantments.setAttribute("class","formButton");
  enchantments.setAttribute("onClick",`createArrayChoice('enchantment${overallElementName}${choice}','Enchantment','Enchantment',true)`);
  enchantments.textContent = "Add Enchantment";
  var divZone = document.createElement("div3");
  divZone.setAttribute("class",`enchantment${overallElementName}${choice}`);
  divZone.setAttribute("id",`enchantmentArea${overallElementName}${choice}`);
  divZone.setAttribute("style","display:flex;  flex-direction: column;");
  var critZone = document.createElement("input");
  critZone.setAttribute("type","checkbox");
  critZone.setAttribute("id",`critStats${overallElementName}${choice}Option`);
  critZone.setAttribute("placeholder","toggle");
  critZone.setAttribute("onClick",`arrayToggle('critStats${overallElementName}${choice}',['Container','critRange','critMultiplier'])`);
  var checkboxText = document.createElement("p");
  checkboxText.setAttribute("class","inputName");
  checkboxText.textContent = "Has Unique Crit";
  checkboxText.appendChild(critZone);
  var container = document.createElement("div2");
  container.setAttribute("id",`critStats${overallElementName}${choice}Container`);
  container.setAttribute("style","display:none;");
  container.setAttribute("class","stairCase");
  var critRangeLabel = document.createElement("p");
  critRangeLabel.setAttribute("class","inputName");
  critRangeLabel.setAttribute("id",`critStats${overallElementName}${choice}critRange`);
  critRangeLabel.setAttribute("style","display:none;");
  critRangeLabel.textContent = "Has Increased Crit Range";
  var critRangeCheck = document.createElement("input");
  critRangeCheck.setAttribute("id",`critRange${overallElementName}${choice}Option`);
  critRangeCheck.setAttribute("class","inputName");
  critRangeCheck.setAttribute("type","checkbox");
  critRangeCheck.setAttribute("placeholder","toggle");
  critRangeCheck.setAttribute("onclick",`toggle('critRange${overallElementName}${choice}')`);
  var critRange = document.createElement("input");
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
  var critMultiplierLabel = document.createElement("p");
  critMultiplierLabel.setAttribute("class","inputName");
  critMultiplierLabel.setAttribute("id",`critStats${overallElementName}${choice}critMultiplier`);
  critMultiplierLabel.setAttribute("style","display:none;");
  critMultiplierLabel.textContent = "Has Unique Crit Multiplier";
  var critMultiplierCheck = document.createElement("input");
  critMultiplierCheck.setAttribute("id",`critMultiplier${overallElementName}${choice}Option`);
  critMultiplierCheck.setAttribute("class","inputName");
  critMultiplierCheck.setAttribute("type","checkbox");
  critMultiplierCheck.setAttribute("placeholder","toggle");
  critMultiplierCheck.setAttribute("onclick",`toggle('critMultiplier${overallElementName}${choice}')`);
  var critMultiplier = document.createElement("input");
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
  var extraDmgLabel = document.createElement("p");
  extraDmgLabel.setAttribute("class","inputName");
  extraDmgLabel.setAttribute("id",`extraDmgLabel${overallElementName}${choice}`);
  extraDmgLabel.textContent = "Has Unique Damage Effects";
  var extraDmgCheck = document.createElement("input");
  extraDmgCheck.setAttribute("id",`extraDmg${overallElementName}${choice}Option`);
  extraDmgCheck.setAttribute("class","inputName");
  extraDmgCheck.setAttribute("type","checkbox");
  extraDmgCheck.setAttribute("placeholder","toggle");
  extraDmgCheck.setAttribute("onclick",`toggle('extraDmg${overallElementName}${choice}')`);
  var extraDmg = document.createElement("textarea");
  extraDmg.setAttribute("type","text");
  extraDmg.setAttribute("class","searchBarCreation");
  extraDmg.setAttribute("name",`extraDmg${overallElementName}${choice}`);
  extraDmg.setAttribute("id",`extraDmg${overallElementName}${choice}`);
  extraDmg.setAttribute("style","display:none;");
  extraDmg.setAttribute("placeholder","extraDmg");
  extraDmg.setAttribute("title","extraDmg");
  extraDmgLabel.appendChild(extraDmgCheck);
  var multiAttackLabel = document.createElement("p");
  multiAttackLabel.setAttribute("class","inputName");
  multiAttackLabel.setAttribute("id",`multiAttackLabel${overallElementName}${choice}`);
  multiAttackLabel.textContent = "Can MultiAttack with this Attack";
  var multiAttackCheck = document.createElement("input");
  multiAttackCheck.setAttribute("id",`multiAttack${overallElementName}${choice}Option`);
  multiAttackCheck.setAttribute("class","inputName");
  multiAttackCheck.setAttribute("type","checkbox");
  multiAttackCheck.setAttribute("placeholder","toggle");
  multiAttackCheck.setAttribute("onclick",`toggle('multiAttack${overallElementName}${choice}')`);
  var multiAttack = document.createElement("input");
  multiAttack.setAttribute("type","number");
  multiAttack.setAttribute("class","searchBarCreation");
  multiAttack.setAttribute("name",`multiAttack${overallElementName}${choice}`);
  multiAttack.setAttribute("id",`multiAttack${overallElementName}${choice}`);
  multiAttack.setAttribute("style","display:none;");
  multiAttack.setAttribute("placeholder","number of attacks");
  multiAttack.setAttribute("title","multiAttack");
  multiAttackLabel.appendChild(multiAttackCheck);
  var isAlternativeLabel = document.createElement("p");
  isAlternativeLabel.setAttribute("class","inputName");
  isAlternativeLabel.setAttribute("id",`isAlternativeLabel${overallElementName}${choice}`);
  isAlternativeLabel.textContent = "This is an Alternative Attack";
  var isAlternativeCheck = document.createElement("input");
  isAlternativeCheck.setAttribute("id",`isAlternative${overallElementName}${choice}Option`);
  isAlternativeCheck.setAttribute("class","inputName");
  isAlternativeCheck.setAttribute("type","checkbox");
  isAlternativeCheck.setAttribute("placeholder","toggle");
  isAlternativeLabel.appendChild(isAlternativeCheck);
  var isAdditiveLabel = document.createElement("p");
  isAdditiveLabel.setAttribute("class","inputName");
  isAdditiveLabel.setAttribute("id",`isAdditiveLabel${overallElementName}${choice}`);
  isAdditiveLabel.textContent = "This is an Additive Attack";
  var isAdditiveCheck = document.createElement("input");
  isAdditiveCheck.setAttribute("id",`isAdditive${overallElementName}${choice}Option`);
  isAdditiveCheck.setAttribute("class","inputName");
  isAdditiveCheck.setAttribute("type","checkbox");
  isAdditiveCheck.setAttribute("placeholder","toggle");
  isAdditiveLabel.appendChild(isAdditiveCheck);
  var button = document.createElement("button");
  button.setAttribute("class","formButton");
  button.setAttribute("id",`delete${overallElementName}${choice}`);
  button.setAttribute("type","button");
  button.setAttribute("onClick",`deleteAttackInformation(${choice},'${overallElementName}')`);
  button.textContent = `Delete ${overallElementName}`;
  div.appendChild(CAName)
  div.appendChild(br4);
  div.appendChild(ADice);
  div.appendChild(toHitModifier);
  div.appendChild(br);
  div.appendChild(ALabel);
  div.appendChild(dmgDice);
  div.appendChild(br2);
  // div.appendChild(Enchantments);
  div.appendChild(enchantments);
   div.appendChild(br3);
  div.appendChild(divZone);
  div.appendChild(checkboxText);
  div.appendChild(container);
  div.appendChild(extraDmgLabel);
  div.appendChild(extraDmg);
  div.appendChild(multiAttackLabel);
  div.appendChild(multiAttack);
  div.appendChild(isAlternativeLabel);
  div.appendChild(isAdditiveLabel);
  //body.appendChild(x);
}
div.appendChild(button);
document.getElementById("forum").querySelector(`.${overallElementName}`).appendChild(div);
if(curChoice.toLocaleLowerCase()=="custom"){
  createListeners(`${overallElementName}Name${choice}`,'keyup',doAttacksDropdown);
}
}
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
  let elements = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div").item(choiceID);
  let elementals = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div");
    let element;
    for(let i=elementals.length-1;i>choiceID;i--){
      element = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div")[i];
      if(document.getElementById(`${overallElementName}Name${i}`.name)!=null){
      element.querySelector(`#${overallElementName}Name${i}`).name=`${overallElementName}Name`+(i-1);
      element.querySelector(`#${overallElementName}Name${i}`).id=`${overallElementName}Name`+(i-1);
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
      element.querySelector(`#extraDmg${overallElementName}${i}Option`).setAttribute("onclick",`toggle('extraDmg${overallElementName}${(i-1)}')`);
      element.querySelector(`#extraDmg${overallElementName}${i}`).name=`extraDmg${overallElementName}${(i-1)}`;
      element.querySelector(`#extraDmg${overallElementName}${i}`).id=`extraDmg${overallElementName}${(i-1)}`;
      element.querySelector(`#extraDmgLabel${overallElementName}${i}`).id=`extraDmgLabel${overallElementName}${(i-1)}`;
      element.querySelector(`#extraDmg${overallElementName}${i}Option`).id=`extraDmg${overallElementName}${(i-1)}Option`
      element.querySelector(`#multiAttack${overallElementName}${i}Option`).setAttribute("onclick",`toggle('multiAttack${overallElementName}${(i-1)}')`);
      element.querySelector(`#multiAttack${overallElementName}${i}`).name=`multiAttack${overallElementName}${(i-1)}`;
      element.querySelector(`#multiAttack${overallElementName}${i}`).id=`multiAttack${overallElementName}${(i-1)}`;
      element.querySelector(`#multiAttackLabel${overallElementName}${i}`).id=`multiAttackLabel${overallElementName}${(i-1)}`;
      element.querySelector(`#multiAttack${overallElementName}${i}Option`).id=`multiAttack${overallElementName}${(i-1)}Option`
      element.querySelector(`#isAlternativeLabel${overallElementName}${i}`).id=`isAlternativeLabel${overallElementName}${(i-1)}`;
      element.querySelector(`#isAlternative${overallElementName}${i}Option`).id=`isAlternative${overallElementName}${(i-1)}Option`
      element.querySelector(`#isAdditiveLabel${overallElementName}${i}`).id=`isAdditiveLabel${overallElementName}${(i-1)}`;
      element.querySelector(`#isAdditive${overallElementName}${i}Option`).id=`isAdditive${overallElementName}${(i-1)}Option`
    }
      element.querySelector(`#delete${overallElementName}${i}`).setAttribute("onClick",`deleteAttackInformation(${(i-1)},'${overallElementName}')`);
      element.querySelector(`#delete${overallElementName}${i}`).id=`delete${overallElementName}`+(i-1);
      element.querySelector(`#${overallElementName}${i}Label`).textContent=`${capitalizedCaseCharacter(overallElementName.replace("Attack",""))} ${i-1}:`;
      element.querySelector(`#${overallElementName}${i}Label`).appendChild(document.createElement("br"));
      element.querySelector(`#${overallElementName}${i}Label`).id=`${overallElementName}${i-1}Label`;

    }
  
  
elements.remove();
}



/**
 * toggles a singular element
 * @param {string} toggle 
 */
function toggle(toggle){
  var checkbox = document.getElementById(`${toggle}Option`);
  var element = document.getElementById(`${toggle}`);
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
    var checkbox = document.getElementById(`${optionName}Option`);
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
  var checkbox = document.getElementById(`${toggle}Option`);
  var element;
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
  switch(sys){
    case "pathfinder":
      document.getElementById("creationDis").innerHTML="";
      document.getElementById("hotBar").innerHTML="";
      document.getElementById("choiceDrop").innerHTML="";
      generateForum();
      break;
    case "5e":
      document.getElementById("creationDis").innerHTML="";
      document.getElementById("hotBar").innerHTML="";
      document.getElementById("choiceDrop").innerHTML="";
      generateForum();
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
  let special_attacks ="";
  if(document.getElementById("special_attacks").value!=''){
    special_attacks = document.getElementById("special_attacks").value;
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
    populatexDay(xDay,'xDay');
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
    var button = document.createElement("button");
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
  console.log(informationName);
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
  let itemBlock = item.replace(" ","");
  let inputList = document.getElementById(`${listName}Input`).children;
  if(validInformation(item,inputList)){
    let divZone = document.createElement("div");
    divZone.setAttribute("id",`${itemBlock}Choice`);
    let itemName = document.createElement("label");
    itemName.setAttribute("class","inputName");
    itemName.setAttribute("for",`${listName}${itemBlock}`);
    itemName.textContent = item;
    divZone.appendChild(itemName);
    divZone.appendChild(document.createElement("br"));
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
    if(isThereDiv){
      arrayToDropdown(getAttacks(),`attackSection${itemBlock}`,"Select",true,document.getElementById("curseArea").querySelectorAll("li"));
      createVariableListener(`dropdownattackSection${itemBlock}`,'click',dropdownInteraction,`dropdownattackSection${itemBlock}`,true);
      createVariableArrayListener(`dropdownattackSection${itemBlock}`,'keyup',searchDrop,[`dropdownattackSection${itemBlock}`,`searchattackSection${itemBlock}`]);
      multiChoice(`dropdownattackSection${itemBlock}`);
      if(document.getElementById("meleeAttackArea").childElementCount<1){
        createAttackInformation('meleeAttack','Melee Attack Name','Melee Attack Dice Count');
        document.getElementById("meleeAttackName0").textContent="Slam";
        document.getElementById("meleeAttackdiceCount0").value="1";
      }
      if(document.getElementById("meleeAttackArea").childElementCount>0){
        if(document.getElementById("meleeAttackName0").textContent==""){
          document.getElementById("meleeAttackName0").textContent="Slam";
        }
        if(document.getElementById("meleeAttackdiceCount0").value==""){
          document.getElementById("meleeAttackdiceCount0").value="1";
        }
      }
    }
    document.getElementById("monsterAbilitiesInput").innerHTML="";
    document.getElementById("searchmonsterAbilities").value="";
    document.getElementById(`dropdownSelection${listName}`).value = "Select";
    modifyList(listName);
  }
}

function createElementSetup(elementTag,element,item,listName,labelID){
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
        var option = document.createElement("option");
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
      newEl.setAttribute("id",`textarea${listName}${item}`);
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
    if(additionalValidation==false){
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
    var textSelected = document.createElement("label");
    textSelected.textContent = val;
    if(val.includes("\'")){
      val=val.replace("\'","");
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
        createVariableListener(`dropdown${val}`,'click',dropdownInteraction,`dropdown${val}`,true);
        createVariableArrayListener(`dropdown${val}`,'keyup',searchDrop,[`dropdown${val}`,`search${val}`]);
        selectionCreation(`dropdown${val}`);
      }
    if(listName=="classes"){
      createListeners(`classes${val}`,`input`,classListener);
      createListeners(`classes${val}`,`input`,setSkillPoints);
      createListeners(`classes${val}`,`input`,updateFeatDetails);
    }
    if(secondaryInputType=="number"){
      createVariableListener(`${listName}${val}`,`input`,setProperMinLevel,`${listName}${val}`);
      createVariableListener(`${listName}${val}`,`focusout`,setProperMinLevel,`${listName}${val}`);
      createVariableListener(`${listName}${val}`,`focusout`,enforceMinLevel,`${listName}${val}`);
      createVariableListener(`${listName}${val}`,`keyup`,setProperMinLevel,`${listName}${val}`);
    }

    if(listName=="monsterAbilities"){
      createVariableListener(`monsterAbilities${val}`,`input`,setProperMinLevel,`monsterAbilities${val}`);
    }
    }
    modifyList(listName);
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
  var isNPCClass= false;
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
  document.getElementById(id).remove();
  modifyList(list)
}

function deleteObject(id){
  document.getElementById(id).remove();
}

function modifyList(list){
  var arr = []
  var isDropDown;
  isDropDown = document.getElementById(`dropdown${list}`).querySelector("ul");
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
      if(document.getElementById(`${spacelessCapitalizedCaseCharacter(name)}Choice`)==null&&document.getElementById(`${name.toLocaleLowerCase()}Choice`)==null){
        var option = document.createElement("li");
        option.dataset.value = name;
        option.textContent = getName(list,name);
        option.className="dropdown-item";
        isDropDown.appendChild(option);
      }
    })
    selectionCreation(`dropdown${list}`);
  }

function createDatalist(arr,element,listName,sort=true){
  if(sort){
    console.log(sort);
    arr.sort();
  }
    var customDalist = document.createElement("div");
  customDalist.className="dropdown-box";
  customDalist.setAttribute("id",`dropdown${listName}`);
  var inputVeiw = document.createElement("div");
  var inputText = document.createElement("input");
  inputVeiw.className="selected-item";
  inputText.setAttribute("id",`dropdownSelection${listName}`);
  inputText.type="text";
  inputText.className="searchBarCreation";
  inputText.value="Select";
  inputText.readOnly=true;
  inputVeiw.appendChild(inputText);
  customDalist.appendChild(inputVeiw)
  var dropdownContext = document.createElement("div");
  dropdownContext.setAttribute("class","dropdown-content");
  var inputSection = document.createElement("div");
  inputSection.className="search-input";
  var usersinput = document.createElement("input");
  usersinput.setAttribute("id",`search${listName}`);
  usersinput.className="searchBarCreation";
  inputSection.appendChild(usersinput);
  dropdownContext.appendChild(inputSection);
  var ulElement = document.createElement("ul");
  arr.forEach(name=>{
    if(document.getElementById(`${capitalizedCaseCharacter(name)}Choice`)==null){
        var option = document.createElement("li");
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

  // var searchDropdown = document.createElement("input");
  // searchDropdown.setAttribute("list",listName);
  // searchDropdown.setAttribute("id",`${listName}List`);
  // searchDropdown.setAttribute("class","searchBarCreation");
  // searchDropdown.setAttribute("placeholder",`${placeHoldertext}`);
  customDalist.appendChild(dropdownContext);
  element.appendChild(customDalist);
}
//Insert ${listName} type here
function arrayToDropdown(arr,listName,placeHoldertext,enableOnCreation=false,enablerList=[]){
  const targetArea = document.getElementById(`${listName}Area`);
  targetArea.innerHTML="";
  var customDalist = document.createElement("div");
  customDalist.className="dropdown-box";
  customDalist.setAttribute("id",`dropdown${listName}`);
  var inputVeiw = document.createElement("div");
  var inputText = document.createElement("input");
  inputVeiw.className="selected-item";
  inputText.setAttribute("id",`dropdownSelection${listName}`);
  inputText.type="text";
  inputText.className="searchBarCreation";
  inputText.value=placeHoldertext;
  inputText.readOnly=true;
  inputVeiw.appendChild(inputText);
  customDalist.appendChild(inputVeiw)
  var dropdownContext = document.createElement("div");
  dropdownContext.setAttribute("class","dropdown-content");
  var inputSection = document.createElement("div");
  inputSection.className="search-input";
  var usersinput = document.createElement("input");
  usersinput.setAttribute("id",`search${listName}`);
  usersinput.className="searchBarCreation";
  inputSection.appendChild(usersinput);
  dropdownContext.appendChild(inputSection);
  var ulElement = document.createElement("ul");
  arr.forEach(name=>{
    if(document.getElementById(`${capitalizedCaseCharacter(name)}Choice`)==null||listName=="chosenClasses"){
        var option = document.createElement("li");
        option.dataset.value = name;
        option.textContent = getName(listName,name);
        option.className="dropdown-item";
        if(listName=="curse"){
          option.id=`${name}cursesList`;
        }
        if(enableOnCreation){
          enablerList.forEach(e=>{
            if(e.className.includes("active") && name==e.dataset.value){
              option.classList.add("active");
            }

          })
        }
        ulElement.appendChild(option);
      }
    })
    dropdownContext.appendChild(ulElement);

  // var searchDropdown = document.createElement("input");
  // searchDropdown.setAttribute("list",listName);
  // searchDropdown.setAttribute("id",`${listName}List`);
  // searchDropdown.setAttribute("class","searchBarCreation");
  // searchDropdown.setAttribute("placeholder",`${placeHoldertext}`);
  customDalist.appendChild(dropdownContext);
  document.getElementById(`${listName}Area`).appendChild(customDalist);
}
function arrayToDropdownSub(arr,listName,placeHolderText,target,archetypeSelected=""){
  listName = listName.toLocaleLowerCase();
  // const targetArea = document.getElementById(`${target}`);
  // targetArea.innerHTML="";
  var customDalist = document.createElement("div");
  customDalist.className="dropdown-box";
  customDalist.setAttribute("id",`dropdown${target}`);
  var inputVeiw = document.createElement("div");
  var inputText = document.createElement("input");
  inputVeiw.className="selected-item";
  inputText.setAttribute("id",`dropdownSelection${target}`);
  inputText.type="text";
  inputText.className="searchBarCreation";
  inputText.value=placeHolderText;
  inputText.readOnly=true;
  inputVeiw.appendChild(inputText);
  customDalist.appendChild(inputVeiw)
  var dropdownContext = document.createElement("div");
  dropdownContext.setAttribute("class","dropdown-content");
  var inputSection = document.createElement("div");
  inputSection.className="search-input";
  var usersinput = document.createElement("input");
  usersinput.setAttribute("id",`search${target}`);
  usersinput.className="searchBarCreation";
  inputSection.appendChild(usersinput);
  dropdownContext.appendChild(inputSection);
  var ulElement = document.createElement("ul");
//  isDropDown.setAttribute("autocomplete","off");
  arr.forEach(name=>{
    var option = document.createElement("li");
    option.dataset.value = name;
    option.textContent = name;
    option.className="dropdown-item";
    ulElement.appendChild(option);
  })
  dropdownContext.appendChild(ulElement);
  // var searchDropdown = document.createElement("input");
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
  createVariableListener(`dropdown${target}`,'click',dropdownInteraction,`dropdown${target}`,true);
  createVariableArrayListener(`dropdown${target}`,'keyup',searchDrop,[`dropdown${target}`,`search${target}`]);
  selectionCreation(`dropdown${target}`);
  // if(listName.includes("archetype")){
  //   var name=listName.replace("archetype","").trim();
  //  //   createVariableListener(`${listName}subList`,`input`,constrainedDropdown,name);
  // }
}



function constrainedDropdown(item){
  var list = [];
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
    var option = document.createElement("option");
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
  document.getElementById("classButton").style.display = doDisplay==true?"block":"none";
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
                    i=0;
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
                      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
                    }else{
                      arr = ['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'];
                      toggleArray(arr)
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
    var languageVar = document.getElementById(`${name}Choice`);
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
          createVariableListener(`dropdown${element[1]}`,'click',dropdownInteraction,`dropdown${element[1]}`,true);
          createVariableArrayListener(`dropdown${element[1]}`,'keyup',searchDrop,[`dropdown${element[1]}`,`search${element[1]}`]);
          let elementID=`dropdown${element[1]}`;
          selectionCreation(elementID);
    })
}

function selectionCreation(elementID){
  const dropdown = document.getElementById(elementID);
  const dropdownItems = document.getElementById(elementID).querySelectorAll(".dropdown-item");
  dropdownItems.forEach(dropdownItem=>{
  dropdownItem.addEventListener("click",(e)=>{
    e.stopPropagation();
    dropdownItems.forEach(innerDropdownItem=>{
    innerDropdownItem.classList.remove("active");
  })
  dropdownItem.classList.add("active");
  const selectedItemInput = document.getElementById(elementID).querySelector(".selected-item input");
  selectedItemInput.value = dropdownItem.dataset.value;
  const changeEvent = new Event('change',{bubbles:true});
  selectedItemInput.dispatchEvent(changeEvent);
  closeAllDropdowns();
    })
  })
}


function additionalClick(elementID,functionName){
  const dropdown = document.getElementById(elementID);
  const dropdownItems = document.getElementById(elementID).querySelectorAll(".dropdown-item");
  dropdownItems.forEach(dropdownItem=>{
  dropdownItem.addEventListener("click",(e)=>{
    e.stopPropagation();
      functionName(e.target.textContent);
    })
  })
}

function multiChoice(elementID){
  const dropdown = document.getElementById(elementID);
  const dropdownItems = document.getElementById(elementID).querySelectorAll(".dropdown-item");
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
      var option = document.createElement("li");
      option.dataset.value = name;
      option.textContent = getName("classes",name);
      option.className="dropdown-item";
      element.appendChild(option);
    }
  })
}





function listenersSetup(){
  console.warn("Fill in class json information")
  console.warn("add in archetype details in archetype tab");
  createListeners("MonsterLevel",'input',setFeatsAvailable);
  createListeners("NPCType",`change`,NPCTypeListener);  
  createListeners("NPCChoice",`change`,NPCTypeListener);
  createVariableListener("MonsterLevel",'keyup',setProperMinLevel,'MonsterLevel');
  createVariableListener("classesTemp",'keyup',setProperMinLevel,'classesTemp');
  createVariableListener("MonsterLevel",'focusout',enforceMinLevel,'MonsterLevel');
  createVariableListener("classesTemp",'focusout',enforceMinLevel,'classesTemp');
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
  createToggleDisplayListener('dropdownsense','change',toggleInput,'senseInput');
  createToggleDisplayListener('dropdownspeed','change',toggleInput,'ManeuverabilitySection');
  createToggleDisplayListener('dropdownfeat','change',toggleInput,'featInput');
 createVariableArrayListener('dropdownmonsterAbilities','change',dynamicInputs,['dropdownSelectionmonsterAbilities',monsterAbilitiesJson,'monsterAbilitiesInput']);
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
  sizeListener();
  createStatListeners();
  var skillHTML = document.createElement("div");
  var featHTML = document.createElement("div");
  var healthHTML = document.createElement("div");
  let skillCont = document.getElementById("skillsContainer");
  let skillList = skillCont.getElementsByClassName("searchBarCreation")
  var skillDisplay = document.getElementById("skillPoints");
  var healthDisplay = document.getElementById("calcHealth");
  var featDisplay = document.getElementById("featCount");
  var babDisplay = document.getElementById("bab");
  var strDisplay = document.getElementById("str");
  var dexDisplay = document.getElementById("dex");
  var conDisplay = document.getElementById("con");
  var intDisplay = document.getElementById("int");
  var wisDisplay = document.getElementById("wis");
  var chaDisplay = document.getElementById("cha");
  var tlevelDisplay = document.getElementById("tlevel");
  var clevelDisplay = document.getElementById("clevel");
  var raceDisplay = document.getElementById("race");
  var alignmentDisplay = document.getElementById("alignment");
  var fortDisplay = document.getElementById("fortsave");
  var willDisplay = document.getElementById("refsave");
  var refDisplay = document.getElementById("willsave");
  var babHTML = document.createElement("div")
  var strHTML = document.createElement("div")
  var dexHTML = document.createElement("div")
  var conHTML = document.createElement("div")
  var intHTML = document.createElement("div")
  var wisHTML = document.createElement("div")
  var chaHTML = document.createElement("div")
  var tlevelHTML = document.createElement("div")
  var clevelHTML = document.createElement("div")
  var raceHTML = document.createElement("div")
  var alignmentHTML = document.createElement("div")
  var fortHTML = document.createElement("div")
  var refHTML = document.createElement("div")
  var willHTML = document.createElement("div")
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