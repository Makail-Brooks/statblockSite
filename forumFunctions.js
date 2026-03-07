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
  input.setAttribute("title",`creature ${choiceName}`);
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
  AName.setAttribute("title",`creature ${overallElementName}`);
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
  ADetails.setAttribute("title",`creature ${overallElementName}`);
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
  let choice = document.getElementById("forum").querySelector(`.${overallElementName}`).childElementCount;
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  var br3 = document.createElement("br");
  var br4 = document.createElement("br");
  var div = document.createElement("div");
  div.setAttribute("class",`${overallElementName}`);
  var CAName = document.createElement("textarea");
  CAName.setAttribute("type",`text`);
  CAName.setAttribute("class","searchBarCreation");
  CAName.setAttribute("name",`${overallElementName}Name${choice}`);
  CAName.setAttribute("id",`${overallElementName}Name${choice}`);
  CAName.setAttribute("placeholder",`${placeholderText1}`);
  CAName.setAttribute("title",`creature ${overallElementName}`);
  var ADice = document.createElement("input");
  ADice.setAttribute("type",`number`);
  ADice.setAttribute("class","searchBarCreation");
  ADice.setAttribute("name",`${overallElementName}diceCount${choice}`);
  ADice.setAttribute("id",`${overallElementName}diceCount${choice}`);
  ADice.setAttribute("placeholder",`${placeholderText2}`);
  ADice.setAttribute("title",`creature ${overallElementName}`);
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
  toHitModifier.setAttribute("title",`creature ${overallElementName}`);
  var enchantments = document.createElement("button");
  enchantments.setAttribute("type","button");
  enchantments.setAttribute("class","formButton");
  enchantments.setAttribute("onClick",`createArrayChoice('enchantment${overallElementName}${choice}','Enchantment','Enchantment',true)`);
  enchantments.textContent = "Add Enchantment";
  var divZone = document.createElement("div3");
  divZone.setAttribute("class",`enchantment${overallElementName}${choice}`);
  divZone.setAttribute("id",`enchantmentArea${overallElementName}${choice}`);
  divZone.setAttribute("style","display:flex;  flex-direction: column;");
        //   <br><button type="button" class="formButton" onclick="createArrayChoice('sense','Sense','Sense')">Add Sense</button>
        // <div class="sense" id="senseArea"></div>
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
  div.appendChild(button);
  document.getElementById("forum").querySelector(`.${overallElementName}`).appendChild(div);
  //body.appendChild(x);
}
/**
 * delete pathfinder attacks
 * @param {int} choiceID 
 * @param {string} overallElementName 
 */
function deleteAttackInformation(choiceID,overallElementName){
  let elements = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div").item(choiceID);
  let elementals = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div");
    let element;
    for(let i=elementals.length-1;i>choiceID;i--){
      element = document.getElementById("forum").querySelector(`.${overallElementName}`).querySelectorAll("div")[i];
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
        enchantElement.querySelector(`#enchantment${overallElementName}${i}${j}`).title=`creature enchantment${overallElementName}${(i-1)}${j}`;
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
      element.querySelector(`#delete${overallElementName}${i}`).setAttribute("onClick",`deleteAttackInformation(${(i-1)},'${overallElementName}')`);
      element.querySelector(`#delete${overallElementName}${i}`).id=`delete${overallElementName}`+(i-1);
      
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
  let sys = sessionStorage.getItem("system").toLowerCase();
  let wisMod = 0;
  switch(sys){
    case "pathfinder":
      var featDisplay = document.getElementById("featCount");
      var skillDisplay = document.getElementById("skillPoints");
      featDisplay.removeChild(featDisplay.firstElementChild);
      skillDisplay.removeChild(skillDisplay.firstElementChild);
      clearDropList = ['language','sense','speed','feat','racialMod'];
      clearDropDowns(clearDropList);
        document.getElementById("bonusACOption").checked = false;
  document.getElementById("innateCasterLevelOption").checked=false;
  toggle("innateCasterLevel");
  document.getElementById("preparedCasterLevelOption").checked=false;
  document.getElementById("creatureSpellModInnate").value="Int";
    document.getElementById("creatureSpellModPrepared").value="Int";
  toggle("preparedCasterLevel");
  arrayToggle('bonusAC',['Container','Armor','Deflection','Dodge','Shield','Natural','Extra']);
  document.getElementById("defensiveTraitsOption").checked = false;
  arrayToggle('defensiveTraits',['Container','DA','DR','Immune','Resist','SR']);
  document.getElementById("spellsOption").checked = false;
  arrayToggle('spells',['Container','InnateOption','PreparedOption']);
  document.getElementById("SubtypeOption").checked=false;
  toggle("Subtype");
  document.getElementById("weaknessOption").checked = false;
  toggle('weakness');
  document.getElementById("meleeOption").checked = false;
  toggle('melee');
  document.getElementById("rangeOption").checked = false;
  toggle('range');
  document.getElementById("gearOption").checked = false;
  toggle('gear');
  document.getElementById("armorOption").checked = false;
  toggle('armor');
  document.getElementById("deflectionOption").checked = false;
  toggle('deflection');
  document.getElementById("dodgeOption").checked = false;
  toggle('dodge');
  document.getElementById("shieldOption").checked = false;
  toggle('shield');
  document.getElementById("naturalOption").checked = false;
  toggle('natural');
  document.getElementById("extraBonusesOption").checked = false;
  toggle('extraBonuses');
  document.getElementById("DAOption").checked = false;
  toggle('DA');
  document.getElementById("DROption").checked = false;
  toggle('DR');
  document.getElementById("ImmuneOption").checked = false;
  toggle('Immune');
  document.getElementById("ResistOption").checked = false;
  toggle('Resist');
  document.getElementById("SROption").checked = false;
  toggle('SR');
  document.getElementById("reach_bonus_effectsOption").checked = false;
  toggle('reach_bonus_effects')
  document.getElementById("spellsInnateOption").checked = false;
  arrayToggle('spellsInnate',['Container','Constant','atWill','xDay']);
  document.getElementById("constantOption").checked = false;
  toggle('constant');
  document.getElementById("atWillOption").checked = false;
  toggle('atWill');
  document.getElementById("xDayOption").checked = false;
  toggle('xDay');
  document.getElementById("spellsPreparedOption").checked = false;
  arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth']);
  document.getElementById("HPTraitsOption").checked = false;
  toggle("HPTraits");
  document.getElementById("setHPInformationOption").checked=false;
  toggle('setHPInformation');
  document.getElementById("creatureName").value = "Mimic";
  document.getElementById("creatureType")[0].selected=true;
  document.getElementById("customType").value="";
  document.getElementById("creatureTitle").value = "Mimic";
  document.getElementById("creatureCR")[7].selected=true;
  document.getElementById("creatureLevel").value="7";
  document.getElementById("creatureHitDice")[2].selected = true;
  document.getElementById("creatureSetHP").value="";
  document.getElementById("creatureSetHD").value="";
  document.getElementById("creatureFort")[1].selected = true;
  document.getElementById("creatureRef")[1].selected = true;
  document.getElementById("creatureWill")[0].selected = true;
  document.getElementById("creatureAlignment")[4].selected=true;
  document.getElementById("creatureStr").value="19";
  document.getElementById("creatureDex").value="12";
  document.getElementById("creatureCon").value="17";
  document.getElementById("creatureInt").value="10";
  document.getElementById("creatureWis").value="13";
  document.getElementById("creatureCha").value="10";
  document.getElementById("creatureBaB").value="Medium";
  document.getElementById("creatureSkillProgression").value="Middle";
  document.getElementById("creatureSize")[4].selected = true;
  creatureTypeListener();
  let spellLevelArray = ['ninth','eighth','seventh','sixth','fifth','fourth','third','second','first','zeroth'];
  clearArray(spellLevelArray);
  resetSkills();
  document.getElementById("speedList").remove();


  textBoxes = ['creatureSetHP','creatureSetHD','atWill','constant','weakness','gear','special_attacks','HPTraits','reach_bonus_effects','SR','Resist','Immune','DR','DA','natural','shield','dodge','deflection','ConcentratePrepared','CLPrepared','ConcentrateInnate','CLInnate'];
  textBoxes.forEach(elements=>{
    clearText(elements);
  })
    let len;
    let el;
    let AddArray =['sense','aura','saveBonus','feat','racialMod','language','SQ','SpecialAbility','xDay','extra','Profession','cmdMod','meleeAttack','rangeAttack','Craft','Profession'];
    AddArray.forEach(element=>{
      len = document.getElementById("forum").querySelector(`.${element}`).querySelectorAll("div").length;
      el = document.getElementById("forum").querySelector(`.${element}`).querySelectorAll("div");
      clearAdd(el,len);
    })
      break;
    case "5e":
      let length;
      let elements;
      document.getElementById("creatureName").value = "Mimic";
      document.getElementById("creatureType").value = "Aberration(shapechanger)";
      document.getElementById("creatureTitle").value = "Mimic";
      document.getElementById("creatureCR").value="4";
      document.getElementById("creatureXP").value="1200";
      document.getElementById("creatureLevel").value="7";
      document.getElementById("creatureSpeed").value = "30";
      document.getElementById("creatureAlignment").value="N";
      document.getElementById("creatureStr").value="19";
      document.getElementById("creatureDex").value="12";
      document.getElementById("creatureCon").value="17";
      document.getElementById("creatureInt").value="10";
      document.getElementById("creatureWis").value="13";
      document.getElementById("creatureCha").value="10";
      document.getElementById("creatureSize")[2].selected = true;


      document.getElementById("damage_vulnerabilitiesOption").checked = false;
      document.getElementById("damage_resistancesOption").checked = false;
      document.getElementById("damage_immunitiesOption").checked = false;
      document.getElementById("condition_immunitiesOption").checked = false;
      document.getElementById("legendaryAbilitiesOption").checked = false;
      sArray =['legendaryActions','Ability','Action'];
      sArray.forEach(element=>{
      length = document.getElementById("forum").querySelector(`.${element}`).querySelectorAll("div").length;
      elements = document.getElementById("forum").querySelector(`.${element}`).querySelectorAll("div");
      clearAdd(elements,length);
    })
    toggle('damage_vulnerabilities');
    toggle('damage_resistances');
    toggle('damage_immunities');
    toggle('condition_immunities');
    toggle('legendaryAbilities');
    document.getElementById("damage_vulnerabilities").value = "";
    document.getElementById("damage_resistances").value = "";
    document.getElementById("damage_immunities").value = "";
    document.getElementById("condition_immunities").value = "";
    document.getElementById("legendary_details").value = "";
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
 * @param {json} creatureInfo 
 * @param {string} sys 
 */
function resetEdit(creatureInfo,sys){
  reset();
  readJsonData(creatureInfo,sys);
}

function getForumHP(){
    let level = document.getElementById("creatureLevel").value;
    let hitDice = document.getElementById("creatureHitDice").value.replace("d","");
    let conStat = document.getElementById("creatureCon").value;
    let conBonus = getModifier(conStat)*Number(level)+getFeatBonuses("con",getForumFeats(),level,document.body,"forum");
      let bonuses = 0;
      if(document.getElementById("creatureType").value.toLowerCase().includes("construct")){
        bonuses = getConstructBonusHealth(creatureInfo.size);
        conBonus = 0
      }
      if(document.getElementById("creatureHitDiceRate").value=="Monster"){
        health = Math.floor(conBonus+(((hitDice/2)+0.5)*level))+bonuses;
        console.log(health);
      }else if(document.getElementById("creatureHitDiceRate").value=="Player"){
        health = Math.floor(conBonus+(((hitDice/2)+1)*(level-1)))+Number(hitDice)+Number(bonuses);
      }
    return health;
}
function getForumFeats(){
        let len = document.getElementById(`featChoice`).childElementCount;
    let val = ""
    let arrayFeats = [];
    for(var i = 0;i<len;i++){
      let entry = document.getElementById(`featChoice`).children.item(i).getElementsByTagName("label").item(0).textContent;
      arrayFeats.push(entry);
    }
    return arrayFeats;
    
}

/**
 * creates json for the site to read and modify
 * @param {json} cinfo 
 */
function createCreatureJson(cinfo){
  let system = sessionStorage.getItem("system").toLowerCase();
  switch(system){
    case "pathfinder":
  let hasBonusAC = document.getElementById("bonusACOption").checked;
  let hasDefensiveTraits = document.getElementById("defensiveTraitsOption").checked;
  let hasSpells = document.getElementById("spellsOption").checked;
  let hasWeakness = document.getElementById("weaknessOption").checked;
  let hasMeleeAttack = document.getElementById("meleeOption").checked;
  let hasRangedAttack = document.getElementById("rangeOption").checked;
  let hasGear = document.getElementById("gearOption").checked;
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
  let hasReach_bonus_effects = document.getElementById("reach_bonus_effectsOption").checked;
  let hasSpecial_attacks = document.getElementById("special_attacksOption").checked
  let hasInnate = document.getElementById("spellsInnateOption").checked;
  let hasConstant = document.getElementById("constantOption").checked;
  let hasatWill = document.getElementById("atWillOption").checked;
  let hasxDay = document.getElementById("xDayOption").checked;
  let hasPrepared = document.getElementById("spellsPreparedOption").checked;
  let hasSkillList = document.getElementById("skillsOption").checked;
  let hasHpTraits = document.getElementById("HPTraitsOption").checked;

  //s
  let cname = document.getElementById("creatureName").value;
  let type = document.getElementById("creatureType").value;
  let cType = document.getElementById("customType").value;
  let subtype = document.getElementById("Subtype").value;
  let hasSubtype = document.getElementById("SubtypeOption").checked;
  let title = document.getElementById("creatureTitle").value;
  let cr = document.getElementById("creatureCR").value;
  let lvl = document.getElementById("creatureLevel").value;
  let hitDice = document.getElementById("creatureHitDice").value
  let rate = document.getElementById("creatureHitDiceRate").value
  let setHP = document.getElementById("creatureSetHP").value
  let setHD = document.getElementById("creatureSetHD").value

  let hpTraits ="";
  if(document.getElementById("HPTraits")!=''){
    hpTraits = document.getElementById("HPTraits").value;
  }
  let fort = document.getElementById("creatureFort").value;
  let ref = document.getElementById("creatureRef").value;
  let will = document.getElementById("creatureWill").value;
  let alignment = document.getElementById("creatureAlignment").value;
  //ac
  let armor = 0;
  let deflection = 0;
  let dodge = 0;
  let shield = 0;
  let natural = 0;
if(hasBonusAC){
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
  //reach
  let reach_bonus_effects ="";
  if(document.getElementById("reach_bonus_effects").value!=''&&hasReach_bonus_effects){
    reach_bonus_effects = document.getElementById("reach_bonus_effects").value;
  }
  let special_attacks ="";
  if(document.getElementById("special_attacks").value!=''&&hasSpecial_attacks){
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
  innateJson["casterMod"]=document.getElementById("creatureSpellModInnate").value;
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
  prepared["casterMod"]=document.getElementById("creatureSpellModPrepared").value;
}
}
  let extra = [];  
  let weak = document.getElementById("weakness").value;
//  let melee = document.getElementById("melee").value;

  let size = document.getElementById("creatureSize").value;
  let str = document.getElementById("creatureStr").value;
  let dex = document.getElementById("creatureDex").value;
  let con = document.getElementById("creatureCon").value;
  let int = document.getElementById("creatureInt").value;
  let wis = document.getElementById("creatureWis").value;
  let cha = document.getElementById("creatureCha").value;
  let bab = document.getElementById("creatureBaB").value;
  str = checkStatVal(str);
  dex = checkStatVal(dex);
  con = checkStatVal(con);
  int = checkStatVal(int);
  wis = checkStatVal(wis);
  cha = checkStatVal(cha);
  let skillProgression = document.getElementById("creatureSkillProgression").value;
  let strModifier = getModifier(str);
  let dexModifier = getModifier(dex);
  let gear ="";
  if(document.getElementById("gear").value!=''){
    gear = document.getElementById("gear").value;
  }
    populateExtraAC(extra,'extra');
//  populateData(extra,'extra');

  let sizeMod =getCreatureSizeMod(size);

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
  console.log(racialMod);
  populateDataDropDownArray(language,'language');
  populateData(SQ,'SQ');
  populateAttackData(melee,'meleeAttack');
  populateAttackData(range,'rangeAttack');
  populateSpecialAbilityData(specialAbility,'SpecialAbility');
  wisMod = getModifier(wis);
  populateCMDBonusData(CMDBonus,"cmdMod");

  let list = ['Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','Knowledge','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'];
  populateSkills(skills,list);
  
  cinfo["system"]=system;
  cinfo["name"]=cname;
  cinfo["title"]=title;
  cinfo["cr"]=cr;
  cinfo["alignment"]=alignment;
  cinfo["size"]=size;
  cinfo["sizeType"]=document.getElementById("isItLongOption").checked;
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
  if(extra.length>0&&hasExtraBonuses&&hasBonusAC){
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
  cinfo['rate']=rate;
  if(document.getElementById("setHPInformationOption").checked==true){
    cinfo["setHP"]=setHP;
    cinfo["setHD"]=setHD;
  }
  if(hpTraits!=''&&hasHpTraits){
    cinfo["hp_traits"]=hpTraits;
  }
  cinfo["fort"]=fort;
  cinfo["ref"]=ref;
  cinfo["will"]=will;
//  cinfo["defensive_traits"]=defensiveTraits;
  if(saveBonus.length>0){
    cinfo["save_bonuses"]=saveBonus;
  }
  if(Object.keys(DT).length>0&&hasDefensiveTraits){
    cinfo["defensive_traits"]=DT;
  }
  if(document.getElementById("weakness").value!==''&&hasWeakness){
    cinfo["weaknesses"] = weak;
  }
  cinfo["speed"]=speed;
  if(document.getElementById("melee").value!==''&&hasMeleeAttack){
    cinfo["melee"] = melee;
  }
  if(document.getElementById("range").value!==''&&hasRangedAttack){
    cinfo["ranged"] = range;
  }
  if(reach_bonus_effects!=''&&hasReach_bonus_effects){
    cinfo["reach_bonus_effects"]=reach_bonus_effects;
  }
//  reach_bonus_effects
  if(special_attacks!=''&&hasSpecial_attacks){
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
  if(gear!='' && hasGear){
    cinfo["gear"]=gear;
  }
  if(SQ.length>0){
    cinfo["special_qualities"]=SQ;
  }
  if(specialAbility.length>0){
    cinfo["special_abilities"]=specialAbility;
  }
      break;

    case "5e":
      let legendaryActions = [];
      let ability = [];
      let action = [];
      let cname5e = document.getElementById("creatureName").value;
      let type5e = document.getElementById("creatureType").value;
      let cr5e = document.getElementById("creatureCR").value;
      let xp5e = document.getElementById("creatureXP").value;
      let lvl5e = document.getElementById("creatureLevel").value;
      let ac5e = document.getElementById("ac").value;
      let hd5e = document.getElementById("creatureHitDice").value;
      let speed5e = document.getElementById("creatureSpeed").value;
      let size5e = document.getElementById("creatureSize").value;
      let str5e = document.getElementById("creatureStr").value;
      let dex5e = document.getElementById("creatureDex").value;
      let con5e = document.getElementById("creatureCon").value;
      let int5e = document.getElementById("creatureInt").value;
      let wis5e = document.getElementById("creatureWis").value;
      let cha5e = document.getElementById("creatureCha").value;
      let proficiency = document.getElementById("creatureProficiency").value;
      let alignment5e = document.getElementById("creatureAlignment").value;
      let sense5e = document.getElementById("creatureSense").value;
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

/**
 * Sets displayed value for number of ranks available to be used
 * @returns int
 */
function setSkillPoints(){
  let skillCont = document.getElementById("skillsContainer");
  let skillList = skillCont.getElementsByClassName("searchBarCreation")
  let usedPoints = 0;
//  console.log(skillList);
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
    let skillProgression = document.getElementById("creatureSkillProgression").value;
    let availableSkillPoints =0;
    let intModifier = getModifier(document.getElementById("creatureInt").value);
    if(intModifier!="-"){
      if(intModifier<1){
        intModifier=1;
      }
    switch(skillProgression){
      case "Low":
        availableSkillPoints = (2+intModifier)*Number(document.getElementById("creatureLevel").value);
        break;
      case "Middle":
        availableSkillPoints = (4+intModifier)*Number(document.getElementById("creatureLevel").value);
        break;
      case "High":
        availableSkillPoints = (6+intModifier)*Number(document.getElementById("creatureLevel").value);
        break;
      default:
        break;
    }
    availableSkillPoints = availableSkillPoints-usedPoints;
  }else{
    availableSkillPoints = 0;
  }
  if(document.getElementById("skillPointsDisplay")){
    var skillDisplay = document.getElementById("skillPointsDisplay");
    skillDisplay.textContent=`Remaining Ranks: ${availableSkillPoints}`;
  }
  return availableSkillPoints;
//  let curSkillPointsAvail = Number(skillDisplay.textContent.replace(/[^0-9]/g, ''));
//  skillPoints

}

function addDropdownchoice(listName){
  let val = document.getElementById(`${listName}List`).value.toLowerCase();
  if(val!=""){
    var textSelected = document.createElement("label");
    textSelected.textContent = val;
    textSelected.className = "inputName"
    var button = document.createElement("button");
    button.setAttribute("class","formButton");
    button.setAttribute("id",`delete${val}`);
    button.setAttribute("type","button");
    button.setAttribute("onClick",`deleteChoice('${val}Choice','${listName}')`);
    button.textContent = `Delete`;
    let divZone = document.createElement("div");
    divZone.setAttribute("id",`${val}Choice`);
    divZone.appendChild(textSelected);
    if(listName=="sense"){
        let inputval = document.getElementById(`${listName}Temp`).value;
        let input = document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("class","searchBarCreation");
        input.setAttribute("name",`sense${val}`);
        input.setAttribute("id",`sense${val}`);
        input.setAttribute("title",`sense${val}`);
        input.setAttribute("placeholder",`Insert Vision Range Here`);
        input.value=inputval;
        divZone.appendChild(input);
        document.getElementById(`${listName}Temp`).value = "";
    }
    if(listName=="speed"){
        let inputval = document.getElementById(`${listName}Temp`).value;
        let input = document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("class","searchBarCreation");
        input.setAttribute("name",`speed${val}`);
        input.setAttribute("id",`speed${val}`);
        input.setAttribute("title",`speed${val}`);
        input.setAttribute("placeholder",`Insert Speed Distance Here`);
        input.value=inputval;
        divZone.appendChild(input);
        document.getElementById(`${listName}Temp`).value = "";
    }
    if(listName=="racialMod"){
        let inputval = document.getElementById(`${listName}Temp`).value;
        let input = document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("class","searchBarCreation");
        input.setAttribute("name",`racialMod${val}`);
        input.setAttribute("id",`racialMod${val}`);
        input.setAttribute("title",`racialMod${val}`);
        input.setAttribute("placeholder",`Insert Racial Modifier Here`);
        input.value=inputval;
        divZone.appendChild(input);
        document.getElementById(`${listName}Temp`).value = "";
    }
    if(listName=="feat"&&setFeatsAvailable()>0&&!notInputFeat(val)){
        let inputval = document.getElementById(`${listName}Temp`).value;
        let input = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("class","searchBarCreation");
        input.setAttribute("name",`feat${val}`);
        input.setAttribute("id",`feat${val}`);
        input.setAttribute("title",`feat${val}`);
        input.setAttribute("placeholder",`Insert Feat Details Here`);
        input.value=inputval;
        divZone.appendChild(input);
        document.getElementById(`${listName}Temp`).value = "";
    }
    divZone.appendChild(button);
    divZone.setAttribute("class","dropDownChoice");
    if(setFeatsAvailable()>0||listName!="feat"){
      document.getElementById(`${listName}Choice`).appendChild(divZone);
      document.getElementById(`${listName}List`).value="";
    }
  }
  modifyList(listName);

}

function deleteChoice(id,list){
  document.getElementById(id).remove();
  modifyList(list)
}

function modifyList(list){
  var arr = []
  var isDropDown;
  switch(list){
    case "language":
      isDropDown = document.getElementById("language");
      
      arr=lanList;
      break;
      case "sense":
        isDropDown = document.getElementById("sense");
        
        arr=senseList;
        break;
      case "feat":
        isDropDown = document.getElementById("feat");
        
        arr=showObtainableFeats(featList);
        break;
      case "speed":
        isDropDown = document.getElementById("speed");
        arr=movementList;
        break;
      case "racialMod":
        isDropDown = document.getElementById("racialMod");
        arr=racialModifiersList;
        break;
      }

    isDropDown.innerHTML="";
    arr.forEach(name=>{
      if(list=="sense"){
      }
      if(document.getElementById(`${name}Choice`)==null){
        var option = document.createElement("option");
        option.value = name;
        option.text = name;
        isDropDown.appendChild(option);
      }
    })
  }

function arrayToDropdown(arr,listName){
  var dalist = document.createElement("div");
  var isDropDown = document.createElement("datalist");
  isDropDown.setAttribute("class","searchBarCreation");
  isDropDown.setAttribute("id",listName);
  dalist.appendChild(isDropDown);
  arr.forEach(name=>{
    var option = document.createElement("option");
    option.value = name;
    option.text = name;
    isDropDown.appendChild(option);
  })
  var searchDropdown = document.createElement("input");
  searchDropdown.setAttribute("list",listName);
  searchDropdown.setAttribute("id",`${listName}List`);
  searchDropdown.setAttribute("class","searchBarCreation")
  searchDropdown.setAttribute("placeholder",`Insert ${listName} type here`)
  dalist.appendChild(searchDropdown);
  //class="searchBarCreation" name="creatureSize" id="creatureSize"
  document.getElementById(`${listName}Area`).appendChild(dalist);
  var choice = ""
}

/**
 * does a full scan of the form to get new elements that are added and removed from the form
 */
function refreshList(){
let skillCont = document.getElementById("skillsContainer");
let skillList = skillCont.getElementsByClassName("searchBarCreation")
for(let skill of skillList){
    createListeners(skill.name,'input',setSkillPoints);
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
    createListeners(skill.name,'input',setSkillPoints);
    createListeners(`${skillName}Option`,'input',setSkillPoints);
}
  createListeners("professionButton",'click',refreshList);
  createListeners("craftButton",'click',refreshList);
  createListeners(`ProfessionOption`,'input',setSkillPoints);
  createListeners(`CraftOption`,'input',setSkillPoints);
  createListeners("creatureSkillProgression","click",refreshList);
  createListeners("creatureInt","input",refreshList);
  createListeners("creatureLevel",'input',refreshList);
  createListeners("featButton",'click',refreshList);
}


function setFeatsAvailable(){
  let feats = Math.ceil((Number(document.getElementById("creatureLevel").value)-1)/2)+1;
  let createdFeats = document.getElementById("featChoice").childElementCount;
  let int = document.getElementById("creatureInt").value;
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
 * creates function listener for specified element and event type 
 * @param {String} elementID 
 * @param {String} eventType 
 * @param {Function} functionName 
 */
function createListeners(elementID,eventType,functionName){
  const newListener = document.getElementById(elementID);
  newListener.addEventListener(eventType,()=>functionName());
}

function createVariableEnhancedListener(elementID,eventType,functionName,variable1){
  const newListener = document.getElementById(elementID);
  newListener.addEventListener(eventType,()=>
    {
      if(rangelessSense.includes(newListener.value.toLowerCase()) && variable1=="senseInput"){
        functionName(variable1,"none");
      }else{
        functionName(variable1);
      }
      if(variable1=="featInput"&&notInputFeat(newListener.value.toLowerCase())&&newListener.value!=""){
        functionName(variable1,"none");
      }else{
        functionName(variable1);
      }
    });
}

function toggleInput(inputName,state="block"){
document.getElementById(inputName).style.display=state;
}

function createSelection(arrary,element){
    arrary.forEach(arr=>{
    var option = document.createElement("option");
    option.value = arr;
    option.text = arr;
    element.appendChild(option);
  })
}

function resetSkills(){
  let skills = ['Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'];
  let knowledge = ['Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion'];
  clearArray(skills);
  clearArray(knowledge);
  document.getElementById("AllOption").checked=false;
  document.getElementById("skillsOption").checked = false;
  arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
  document.getElementById("skillsKnowledgeOption").checked = false;
  arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
}

function creatureTypeListener(){
  const creatureType = document.getElementById("creatureType")
 if(creatureType.value==="Custom"){
    document.getElementById("customType").style.display="block";
 }else{
    document.getElementById("customType").style.display="none";
 }
 let skills = "";
 switch (creatureType.value) {
  case "Aberration":
      document.getElementById("creatureHitDice")[2].selected = true;
      document.getElementById("creatureBaB")[1].selected = true;
      document.getElementById("creatureSkillProgression")[1].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[1].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Acrobatics","Climb","EscapeArtist","Fly","Intimidate","Knowledge","Perception","Spellcraft","Stealth","Survival","Swim"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
  case "Animal":
      document.getElementById("creatureHitDice")[2].selected = true;
      document.getElementById("creatureBaB")[1].selected = true;
      document.getElementById("creatureSkillProgression")[1].selected = true;
      document.getElementById("creatureFort")[0].selected = true;
      document.getElementById("creatureRef")[0].selected = true;
      document.getElementById("creatureWill")[1].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Acrobatics","Climb","Fly","Perception","Stealth","Swim"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
    case "Construct":
      document.getElementById("creatureHitDice")[3].selected = true;
      document.getElementById("creatureBaB")[2].selected = true;
      document.getElementById("creatureSkillProgression")[2].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[1].selected = true;
      document.getElementById("creatureWill")[1].selected = true;
      resetSkills();
    break;
    case "Dragon":
      document.getElementById("creatureHitDice")[4].selected = true;
      document.getElementById("creatureBaB")[0].selected = true;
      document.getElementById("creatureSkillProgression")[0].selected = true;
      document.getElementById("creatureFort")[0].selected = true;
      document.getElementById("creatureRef")[0].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Appraise","Bluff","Climb","Craft","Diplomacy","Fly","Heal","Intimidate","Knowledge(All)","Perception","SenseMotive","Spellcraft","Stealth","Survival","Swim","UseMagicDevice"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
    case "Fey":
      document.getElementById("creatureHitDice")[1].selected = true;
      document.getElementById("creatureBaB")[0].selected = true;
      document.getElementById("creatureSkillProgression")[0].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[0].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Acrobatics","Bluff","Climb","Craft","Diplomacy","Disguise","EscapeArtist","Fly","Knowledge(Geography)","Knowledge(Local)","Knowledge(Nature)","Perception","Perform","Sense Motive","SleightofHand","Stealth","Swim","UseMagicDevice"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
    case "Humanoid":
      document.getElementById("creatureHitDice")[2].selected = true;
      document.getElementById("creatureBaB")[1].selected = true;
      document.getElementById("creatureSkillProgression")[1].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[1].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Climb","Craft","HandleAnimal","Heal","Profession","Ride","Survival"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
    case "Magical Beast":
      document.getElementById("creatureHitDice")[3].selected = true;
      document.getElementById("creatureBaB")[0].selected = true;
      document.getElementById("creatureSkillProgression")[1].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[0].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Acrobatics","Climb","Fly","Perception","Stealth","Swim"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
      case "Monstrous Humanoid":
      document.getElementById("creatureHitDice")[3].selected = true;
      document.getElementById("creatureBaB")[0].selected = true;
      document.getElementById("creatureSkillProgression")[1].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[0].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Acrobatics","Climb","Fly","Perception","Stealth","Swim"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
    case "Ooze":
      document.getElementById("creatureHitDice")[2].selected = true;
      document.getElementById("creatureBaB")[1].selected = true;
      document.getElementById("creatureSkillProgression")[2].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[1].selected = true;
      document.getElementById("creatureWill")[1].selected = true;
      resetSkills();
    break;
    case "Outsider":
      document.getElementById("creatureHitDice")[3].selected = true;
      document.getElementById("creatureBaB")[0].selected = true;
      document.getElementById("creatureSkillProgression")[0].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[0].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Bluff","Craft","Knowledge(Planes)","Perception","SenseMotive","Stealth"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
    case "Plant":
      document.getElementById("creatureHitDice")[2].selected = true;
      document.getElementById("creatureBaB")[1].selected = true;
      document.getElementById("creatureSkillProgression")[2].selected = true;
      document.getElementById("creatureFort")[0].selected = true;
      document.getElementById("creatureRef")[1].selected = true;
      document.getElementById("creatureWill")[1].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Perception","Stealth"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
    case "Undead":
      document.getElementById("creatureHitDice")[2].selected = true;
      document.getElementById("creatureBaB")[1].selected = true;
      document.getElementById("creatureSkillProgression")[1].selected = true;
      document.getElementById("creatureFort")[1].selected = true;
      document.getElementById("creatureRef")[1].selected = true;
      document.getElementById("creatureWill")[0].selected = true;
      resetSkills();
      document.getElementById("skillsOption").checked = true;
      skills = ["Climb","Disguise","Fly","Intimidate","Knowledge(Arcana)","Knowledge(Religion)","Perception","SenseMotive","Spellcraft","Stealth"];
      doSkills(skills,skills,true);
      arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice']);
      arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion']);
    break;
      case "Vermin":
      document.getElementById("creatureHitDice")[2].selected = true;
      document.getElementById("creatureBaB")[1].selected = true;
      document.getElementById("creatureSkillProgression")[2].selected = true;
      document.getElementById("creatureFort")[0].selected = true;
      document.getElementById("creatureRef")[1].selected = true;
      document.getElementById("creatureWill")[1].selected = true;
      resetSkills();
    break;
      case "Custom":
        document.getElementById("creatureHitDice")[0].selected = true;
        document.getElementById("creatureBaB")[0].selected = true;
        document.getElementById("creatureSkillProgression")[0].selected = true;
        document.getElementById("creatureFort")[0].selected = true;
        document.getElementById("creatureRef")[0].selected = true;
        document.getElementById("creatureWill")[0].selected = true;
        resetSkills();
  default:
    break;
 }
}

function doSkills(cSkills,skills,isJustEnable=false){
  cSkills.forEach(element=>{
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


function updateHealthDisplay(){
  var skillDisplay = document.getElementById("calculateHealth");
  skillDisplay.textContent=`Health: ${getForumHP()}`;
}