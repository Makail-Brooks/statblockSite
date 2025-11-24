// window.onload=function(){
// console.log(document.body);
// //document.getElementById("cols").addEventListener("click",changePage(element.name));
// }
fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>loadSideNav(jsonList))


    
function loadSideNav(list){
  try{

    var creatureList = document.getElementById("cols");
    let index = -1;
    list.creatures.forEach(element => {
        index++;
        let addCreatures = document.createElement("div");
        addCreatures.classList.add("cols");
        let barName = "";
        if(element.name!="Home"){
          barName+="-"
        }
        barName+=`${element.name}\n(${element.system})`;
        addCreatures.innerHTML = `<a href=${element.path}?creature=${index} onclick="changePage('${index}','${element.name}','${element.system}')" onauxclick="alternativeClick('${index}','${element.name}','${element.system}')"> <p class="creatures"> ${barName}</p> </a></div>`;
        creatureList.appendChild(addCreatures);
        
    });
  }catch(err){

  }
        //cName = list.creatures[i].name;
    
}

fetch("./systems.json")
    .then(response=>response.json())
    .then(systems=>loadSystemsOptions(systems))
function loadSystemsOptions(list){
  try{
    var systemList = document.getElementById("colis");
    list.systems.forEach(element => {
        let addSystem = document.createElement("div");
        addSystem.classList.add("cols");
        let name = element.name.replace(element.name.charAt(0),element.name[0].toUpperCase());
        addSystem.innerHTML = `<a href=${element.path} onclick="systemPage('${element.name}')"> <p class="system"> ${name}</p> </a></div>`;
        systemList.appendChild(addSystem);
        
    });
  }catch(err){

  }
        //cName = list.creatures[i].name;
    
}

function systemPage(sys){
  sessionStorage.setItem("system",sys);
}

function createCreature(){
  let cinfo ={"path":"./creatureDisplay.html"};
  let cname = document.getElementById("creatureName").value;
  createCreatureJson(cinfo);
  fetch('http://localhost:8080/create',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cinfo)
  })
  .then(res => res.text())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Fetch error:", err));
  let lengthOfJson = 0;
  fetch("./list.json")
  .then(response=>response.json())
  .then(jsonList=>switchToCreation(jsonList,cname))

}
//editcreaturestuff
  function completeCreatureEdit(){
  let cinfo ={"path":"./creatureDisplay.html"};
  let cname = document.getElementById("creatureName").value;
  let system = sessionStorage.getItem("system");
  createCreatureJson(cinfo);
  // let entry = sessionStorage.getItem("creature");
  let param = new URLSearchParams(window.location.search);
  entry = param.get("creature");
  fetch(`http://localhost:8080/update/${entry}`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cinfo)
  })
  .then(res => res.text());
  fetch("./list.json")
  .then(response=>response.json())
  .then(jsonList=>completeEdit(entry,cname,system))
}

function completeEdit(id,name,system){
  callFetch(id,name,system);
  window.location.href = `./creatureDisplay.html?creature=${id}`;
}

function switchToCreation(list,cname){
  let len = list.creatures.length;
  sessionStorage.setItem("creature",len);
  let system = sessionStorage.getItem("system");
  callFetch(len,cname,system);
  window.location.href = `./creatureDisplay.html?creature=${len}`;

}






function search(){
  let input, filter;
  input = document.getElementById("entrySearch");
  filter = input.value.toLowerCase();
  var list = document.getElementById("cols");
  let listlength = list.getElementsByTagName("div").length;
  for(let i=0;i<listlength;i++){
      let a = list.getElementsByTagName("div")[i].getElementsByTagName("a")[0];
      if(a.innerHTML.toLowerCase().indexOf(filter)>-1){
        list.getElementsByTagName("div")[i].style.display="";
      }else{
        list.getElementsByTagName("div")[i].style.display="none";
      }
  }
}


fetch("http://localhost:8080/json")
  .then(response=>response.json())
  .then(givenRes=>displayResponse(givenRes))


function displayResponse(response){
  try{   
      var visted = document.getElementById("rows");
      let index = -1;
      let path = "./creatureDisplay.html";
      response.pages.forEach(element => {
          let addVisits = document.createElement("div");
          addVisits.classList.add("rows");
          let barName = ""
          barName+=`${element.name}\n(${element.system})`;
          index = element.index;
          addVisits.innerHTML = `<div>
          <a href=${path}?creature=${index} class="LastVisit" onclick="changePage('${index}','${element.name}','${element.system}')" onauxclick="alternativeClick('${index}','${element.name}','${element.system}')"> 
          <p > ${barName}</p> 
          </a>
          </div>`;
          visted.appendChild(addVisits);
          
   });
  }catch(err){

  }
}

function alternativeClick(index,name,system){
  sessionStorage.setItem("creature",index);
  callFetch(index,name,system);
}

function changePage(index,name,system){
  sessionStorage.setItem("creature",index);
  callFetch(index,name,system);
}
function openNav() {
  document.getElementById("sideNav").style.width = "300px";
  document.getElementById("offClick").style.width = "90%";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("offClick").style.width = "0";
}
function goHome(){
     window.location.href = "./index.html";
}

function create(){
  window.location.href = "./creationChoice.html";
}

function createCreatureForm(){
  window.location.href = "./creationCreature.html";
}

function createCharacter(){
  window.location.href = "./charactercreation.html";
}

function callFetch(id,name,system){
  let cinfo = { "name":name, "index":id, "system":system}  
  fetch('http://localhost:8080/write',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cinfo)
  })
  .then(res => res.text())
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Fetch error:", err));

}

function deleteEntry(){
  let entry = sessionStorage.getItem("creature");
  let text = "Do you wish to delete this entry?"
 if(confirm(text)==true){
    fetch(`http://localhost:8080/deleteEntry/${entry}`,{
      method: 'DELETE',
     headers: { 'content-type': 'application/json' },
    })
   window.location.href = "./index.html";
  }
}

function display(){
  console.log("callback ping!");
}


/**
 * gets json to be used in editing
 */
function editCreature(){

  fetch("./list.json")
  .then(response=>response.json())
  .then(givenRes=>switchToEdit(givenRes))
}
/**
 * changes page to edit creature page and stores needed information
 * @param {json} json 
 */
function switchToEdit(json){
  let id = sessionStorage.getItem("creature");
  let param = new URLSearchParams(window.location.search);
  id = param.get("creature");
  let sys = json.creatures[id].system;
 sessionStorage.setItem("system",sys);
 window.location.href = `./creatureEdit.html?creature=${id}`;

}
/**
 * simply goes to information page
 */
function goToInformation(){
  window.location.href = "./entryKeys.html";
}

/**sends page to display of creature */
function returnToCreature(){
  let param = new URLSearchParams(window.location.search);
  id = param.get("creature");
  window.location.href = `./creatureDisplay.html?creature=${id}`;
}


/**
 * creates form for site to use
 * @param {string} sys
 * @param {string} forumType  
 * @returns string
 */
function getForum(sys,forumType){
  let submitButton = "createCreature()";
  if(forumType==="edit"){
    submitButton = "completeCreatureEdit()";
  }
  let forum = ""
  switch(sys){
    case "pathfinder":
          forum = `<form id="forum">
        <div class="creationSetup">
        <div>
        <p class="Title">Required:</p>
        <label class="inputName" for="creatureName">Creature Name:</label><br>
        <input type="text" class="searchBarCreation" name="creatureName" id="creatureName" placeholder="Name" title="Creature Name" value="Mimic"><br>

        <label class="inputName" for="creatureType">Creature Type:</label><br>
        <select class="searchBarCreation" name="creatureType" id="creatureType" placeholder="Type" title="Creature Type"><br>
        <option selected>Aberration</option>
        <option>Animal</option>
        <option>Construct</option>
        <option>Dragon</option>
        <option>Fey</option>
        <option>Humanoid</option>
        <option>Magical Beast</option>
        <option>Monstrous Humanoid</option>
        <option>Ooze</option>
        <option>Outsider</option>
        <option>Plant</option>
        <option>Undead</option>
        <option>Vermin</option>
        <option>Custom</option>
        </select>
        <input type="text" class="searchBarCreation" name="customType" id="customType" style="display: none;" placeholder="customType" title="customType">
        <p class="inputName">Has Subtype<input type="checkbox" id="SubtypeOption" placeholder="toggle" onclick="toggle('Subtype')"></p>
        <input type="text" class="searchBarCreation" name="Subtype" id="Subtype" style="display: none;" placeholder="Subtype" title="Subtype">
        <label class="inputName" for="creatureTitle">Creature Title:</label><br>
        <input type="text" class="searchBarCreation" name="creatureTitle" id="creatureTitle" placeholder="Title" title="Creature Title" value="Mimic"><br>

        <label class="inputName" for="creatureCR">Creature CR:</label><br>
        <select class="searchBarCreation" name="creatureCR" id="creatureCR" placeholder="CR" title="Creature CR">
        <option>1/8</option>
        <option>1/6</option>
        <option>1/4</option>
        <option>1/2</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option selected>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        </select>
        <br>

        <label class="inputName" for="creatureLevel">Creature Level:</label><br>
        <input type="number" class="searchBarCreation" name="creatureLevel" id="creatureLevel" placeholder="Level" title="Creature Level" value="7"><br>
        <label class="inputName" for="creatureHitDice">Creature Hit Dice:</label><br>
        <select class="searchBarCreation" name="creatureHitDice" id="creatureHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        </select><br>
        <label class="inputName" for="creatureHitDice">Creature HP Gain Rate:</label><br>
        <select class="searchBarCreation" name="creatureHitDiceRate" id="creatureHitDiceRate">
        <option>Monster</option>
        <option>Player</option>
        </select><br>

        <p class="inputName">Set HP Information <input type="checkbox" id="setHPInformationOption" placeholder="toggle" onclick="toggle('setHPInformation')"></p>
        <div id="setHPInformation" style="display: none;" class="stairCase">

        <label class="inputName" for="creatureSetHP">Set Creature HP:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSetHP" id="creatureSetHP" placeholder="SetHP" title="Creature SetHP"><br>
        <label class="inputName" for="creatureSetHD">Set Creature hitDice:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSetHD" id="creatureSetHD" placeholder="SetHD" title="Creature SetHD"><br>
        </div>

        <label class="inputName" for="creatureSpeed">Creature Speed:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSpeed" id="creatureSpeed" placeholder="Speed" title="Creature Speed" value="30"><br>

        <label class="inputName" for="creatureStr">Creature Str:</label><br>
        <input type="text" class="searchBarCreation" name="creatureStr" id="creatureStr" placeholder="Str" title="Creature Str" value=19><br>

        <label class="inputName" for="creatureDex">Creature Dexterity:</label><br>
        <input type="text" class="searchBarCreation" name="creatureDex" id="creatureDex" placeholder="Dex" title="Creature Dex" value=12><br>

        <label class="inputName" for="creatureCon">Creature Con:</label><br>
        <input type="text" class="searchBarCreation" name="creatureCon" id="creatureCon" placeholder="Con" title="Creature Con" value=17><br>

        <label class="inputName" for="creatureInt">Creature Intelligence:</label><br>
        <input type="text" class="searchBarCreation" name="creatureInt" id="creatureInt" placeholder="Int" title="Creature Int" value=10><br>

        <label class="inputName" for="creatureWis">Creature Wisdom:</label><br>
        <input type="text" class="searchBarCreation" name="creatureWis" id="creatureWis" placeholder="Wis" title="Creature Wis" value=13><br>

        <label class="inputName" for="creatureCha">Creature Charisma:</label><br>
        <input type="text" class="searchBarCreation" name="creatureCha" id="creatureCha" placeholder="Cha" title="Creature Cha" value=10><br>
        
        <label class="inputName" for="creatureBaB">Creature BaB:</label><br>
        <select class="searchBarCreation" name="creatureBaB" id="creatureBaB">
        <option>Fast</option>
        <option Selected>Medium</option>
        <option>Slow</option>
        </select><br>


        <label class="inputName" for="creatureSkillProgression">Creature Skill Progression:</label><br>
        <select class="searchBarCreation" name="creatureSkillProgression" id="creatureSkillProgression">
        <option>High</option>
        <option Selected>Middle</option>
        <option>Low</option>
        </select><br>

        <label class="inputName" for="creatureFort">Creature Fort Bonus:</label><br>
        <select class="searchBarCreation" name="creatureFort" id="creatureFort">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="creatureRef">Creature Ref Bonus:</label><br>
        <select class="searchBarCreation" name="creatureRef" id="creatureRef">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="creatureWill">Creature Will Bonus:</label><br>
        <select class="searchBarCreation" name="creatureWill" id="creatureWill">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="creatureAlignment">Creature Alignment:</label><br>
        <select class="searchBarCreation" name="creatureAlignment" id="creatureAlignment">
        <option>LE</option>
        <option>LN</option>
        <option>LG</option>
        <option>NG</option>
        <option selected>N</option>
        <option>NE</option>
        <option>CE</option>
        <option>CN</option>
        <option>CG</option>
        </select><br>

        <label class="inputName" for="creatureSize">Creature Size:</label><br>
        <select class="searchBarCreation" name="creatureSize" id="creatureSize">
        <option>Fine</option>
        <option>Diminutive</option>
        <option>Tiny</option>
        <option>Small</option>
        <option selected>Medium</option>
        <option>Large</option>
        <option>Huge</option>
        <option>Gargantuan</option>
        <option>Colossal</option>
        </select><br>

        </div>
        <div>
        <p class="Title">Choices:</p>
        <p class="inputName">Has bonuses to AC <input type="checkbox" id="bonusACOption" placeholder="toggle" onclick="arrayToggle('bonusAC',['Container','Armor','Deflection','Dodge','Shield','Natural','Extra'])"></p>
        <div id="bonusACContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="bonusACArmor" style="display: none;">Has Armor <input id="armorOption" type="checkbox" placeholder="toggle" onclick="toggle('armor')"></p> 
        <input type="number" class="searchBarCreation" name="armor" id="armor" style="display: none;" placeholder="armor" title="armor">
        
        <p class="inputName" id="bonusACDeflection" style="display: none;">Has Deflection <input id="deflectionOption" type="checkbox" placeholder="toggle" onclick="toggle('deflection')"></p> 
        <input type="number" class="searchBarCreation" name="deflection" id="deflection" style="display: none;" placeholder="deflection" title="deflection">

        <p class="inputName" id="bonusACDodge" style="display: none;">Has Dodge <input id="dodgeOption" type="checkbox" placeholder="toggle" onclick="toggle('dodge')"></p> 
        <input type="number" class="searchBarCreation" name="dodge" id="dodge" style="display: none;" placeholder="dodge" title="dodge">

        <p class="inputName" id="bonusACShield" style="display: none;">Has Shield <input id="shieldOption" type="checkbox" placeholder="toggle" onclick="toggle('shield')"></p> 
        <input type="number" class="searchBarCreation" name="shield" id="shield" style="display: none;" placeholder="shield" title="shield">

        <p class="inputName" id="bonusACNatural" style="display: none;">Has Natural <input id="naturalOption" type="checkbox" placeholder="toggle" onclick="toggle('natural')"></p> 
        <input type="number" class="searchBarCreation" name="natural" id="natural" style="display: none;" placeholder="natural" title="natural">

        <p class="inputName" id="bonusACExtra" style="display: none;">Has Extra Bonuses <input id="extraBonusesOption" type="checkbox" placeholder="toggle" onclick="toggle('extraBonuses')"></p> 

        <div style="display: none;" id="extraBonuses"><button type="button" class="formButton" onclick="createDualInformation('extra','name','amount','Extra Bonus','Bonus Name','Bonus Amount','text','number')">Add Extra Bonuses</button>
        <div class="extra" id="extraArea"></div></div>
        </div>

        <p class="inputName">Has Defensive Traits <input type="checkbox" id="defensiveTraitsOption" placeholder="toggle" onclick="arrayToggle('defensiveTraits',['Container','DA','DR','Immune','Resist','SR'])"></p>
        <div id="defensiveTraitsContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="defensiveTraitsDA" style="display: none;">Has Defensive Abilities <input id="DAOption" type="checkbox" placeholder="toggle" onclick="toggle('DA')"></p> 
        <input type="text" class="searchBarCreation" name="DA" id="DA" style="display: none;" placeholder="Defensive Ability" title="DA">
        
        <p class="inputName" id="defensiveTraitsDR" style="display: none;">Has DR <input id="DROption" type="checkbox" placeholder="toggle" onclick="toggle('DR')"></p> 
        <input type="text" class="searchBarCreation" name="DR" id="DR" style="display: none;" placeholder="DR" title="DR">

        <p class="inputName" id="defensiveTraitsImmune" style="display: none;">Has Immunities <input id="ImmuneOption" type="checkbox" placeholder="toggle" onclick="toggle('Immune')"></p> 
        <input type="text" class="searchBarCreation" name="Immune" id="Immune" style="display: none;" placeholder="Immune" title="Immune">

        <p class="inputName" id="defensiveTraitsResist" style="display: none;">Has Energy Resistances <input id="ResistOption" type="checkbox" placeholder="toggle" onclick="toggle('Resist')"></p> 
        <input type="text" class="searchBarCreation" name="Resist" id="Resist" style="display: none;" placeholder="Resist" title="Resist">

        <p class="inputName" id="defensiveTraitsSR" style="display: none;">Has SR <input id="SROption" type="checkbox" placeholder="toggle" onclick="toggle('SR')"></p> 
        <input type="number" class="searchBarCreation" name="SR" id="SR" style="display: none;" placeholder="SR" title="SR">
        </div>

        <p class="inputName">Has Reach <input type="checkbox" id="reachOption" placeholder="toggle" onclick="arrayToggle('reach',['Container','reach_bonus_effects','Space'])"></p>
        <div id="reachContainer" style="display: none;" class="stairCase">

        <input type="text" class="searchBarCreation" name="reach" id="reach" placeholder="Reach" title="reach">
        
        <p class="inputName" id="reachreach_bonus_effects" style="display: none;">Has Reach Bonus Effects<input id="reach_bonus_effectsOption" type="checkbox" placeholder="toggle" onclick="toggle('reach_bonus_effects')"></p> 
        <input type="text" class="searchBarCreation" name="reach_bonus_effects" id="reach_bonus_effects" style="display: none;" placeholder="Reach Bonus Effects" title="reach_bonus_effects">

        <p class="inputName" id="reachSpace" style="display: none;">Has Space <input id="spaceOption" type="checkbox" placeholder="toggle" onclick="toggle('space')"></p> 
        <input type="text" class="searchBarCreation" name="space" id="space" style="display: none;" placeholder="Space" title="space">
        </div>

        <p class="inputName">Has Special Attack<input type="checkbox" id="special_attacksOption" placeholder="toggle" onclick="toggle('special_attacks')"></p>
        <textarea class="searchBarCreation" name="special_attacks" id="special_attacks" style="display: none;" placeholder="Special Attacks" title="special_attacks"></textarea>

        <p class="inputName">Has Spells<input type="checkbox" id="spellsOption" placeholder="toggle" onclick="arrayToggle('spells',['Container','InnateOption','PreparedOption'])"></p>
        <div id="spellsContainer" style="display: none;" class="stairCase">
        

        <p class="inputName" style="display: flex">Has Innate<input type="checkbox" id="spellsInnateOption" placeholder="toggle" onclick="arrayToggle('spellsInnate',['Container','Constant','atWill','xDay'])"></p> 
        <div id="spellsInnateContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="creatureSpellModInnate">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="creatureSpellModInnate" id="creatureSpellModInnate">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

        <p class="inputName" id="innateCasterLevelZone";">Set Caster Level Innate <input id="innateCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('innateCasterLevel')"></p>
        <div id="innateCasterLevel" style="display: none;" class="stairCase">
        <input type="number" class="searchBarCreation" name="CLInnate" id="CLInnate" placeholder="CLInnate" title="CLInnate">      
        <input type="number" class="searchBarCreation" name="ConcentrateInnate" id="ConcentrateInnate"" placeholder="ConcentrateInnate" title="ConcentrateInnate">
        </div>

        <p class="inputName" id="spellsInnateConstant" style="display: none;">Has Constant <input id="constantOption" type="checkbox" placeholder="toggle" onclick="toggle('constant')"></p> 
        <input type="text" class="searchBarCreation" name="constant" id="constant" style="display: none;" placeholder="Constant" title="constant">

        <p class="inputName" id="spellsInnateatWill" style="display: none;">Has atWill <input id="atWillOption" type="checkbox" placeholder="toggle" onclick="toggle('atWill')"></p> 
        <input type="text" class="searchBarCreation" name="atWill" id="atWill" style="display: none;" placeholder="atWill" title="atWill">

        <p class="inputName" id="spellsInnatexDay" style="display: none;">Has xDay <input id="xDayOption" type="checkbox" placeholder="toggle" onclick="toggle('xDay')"></p> 
        <div style="display: none;" id="xDay"><button type="button" class="formButton" onclick="createDualInformation('xDay','perDay','List','xDay Spell','Amount Per Day','SpellList','number','text')">Add xDay Spells</button>
        <div class="xDay" id="xDayArea"></div></div>
        </div>


        <p class="inputName" style="display: flex">Has Prepared <input type="checkbox" id="spellsPreparedOption" placeholder="toggle" onclick="arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth'])"></p>
        
        <div id="spellsPreparedContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="creatureSpellModPrepared">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="creatureSpellModPrepared" id="creatureSpellModPrepared">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

         <p class="inputName" id="preparedCasterLevelZone";">Set Caster Level Prepared <input id="preparedCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('preparedCasterLevel')"></p>
        <div id="preparedCasterLevel" style="display: none;" class="stairCase">
        <input type="number" class="searchBarCreation" name="CLPrepared" id="CLPrepared" placeholder="CLPrepared" title="CLPrepared">      
        <input type="number" class="searchBarCreation" name="ConcentratePrepared" id="ConcentratePrepared"" placeholder="ConcentratePrepared" title="ConcentratePrepared">
        </div>


        <p class="inputName" id="spellsPreparedNinth" style="display: none;">Has 9th level Spells<input id="ninthOption" type="checkbox" placeholder="toggle" onclick="toggle('ninth')"></p> 
        <input type="text" class="searchBarCreation" name="ninth" id="ninth" style="display: none;" placeholder="Ninth" title="ninth">

        <p class="inputName" id="spellsPreparedEighth" style="display: none;">Has 8th level Spells<input id="eighthOption" type="checkbox" placeholder="toggle" onclick="toggle('eighth')"></p> 
        <input type="text" class="searchBarCreation" name="eighth" id="eighth" style="display: none;" placeholder="Eighth" title="eighth">

        <p class="inputName" id="spellsPreparedSeventh" style="display: none;">Has 7th level Spells<input id="seventhOption" type="checkbox" placeholder="toggle" onclick="toggle('seventh')"></p> 
        <input type="text" class="searchBarCreation" name="seventh" id="seventh" style="display: none;" placeholder="Seventh" title="seventh">

        <p class="inputName" id="spellsPreparedSixth" style="display: none;">Has 6th level Spells<input id="sixthOption" type="checkbox" placeholder="toggle" onclick="toggle('sixth')"></p> 
        <input type="text" class="searchBarCreation" name="sixth" id="sixth" style="display: none;" placeholder="Sixth" title="sixth">

        <p class="inputName" id="spellsPreparedFifth" style="display: none;">Has 5th level Spells<input id="fifthOption" type="checkbox" placeholder="toggle" onclick="toggle('fifth')"></p> 
        <input type="text" class="searchBarCreation" name="fifth" id="fifth" style="display: none;" placeholder="Fifth" title="fifth">

        <p class="inputName" id="spellsPreparedFourth" style="display: none;">Has 4th level Spells<input id="fourthOption" type="checkbox" placeholder="toggle" onclick="toggle('fourth')"></p> 
        <input type="text" class="searchBarCreation" name="fourth" id="fourth" style="display: none;" placeholder="Fourth" title="fourth">
        
        <p class="inputName" id="spellsPreparedThird" style="display: none;">Has 3rd level Spells<input id="thirdOption" type="checkbox" placeholder="toggle" onclick="toggle('third')"></p> 
        <input type="text" class="searchBarCreation" name="third" id="third" style="display: none;" placeholder="Third" title="third">

        <p class="inputName" id="spellsPreparedSecond" style="display: none;">Has 2nd level Spells<input id="secondOption" type="checkbox" placeholder="toggle" onclick="toggle('second')"></p> 
        <input type="text" class="searchBarCreation" name="second" id="second" style="display: none;" placeholder="Second" title="second">

        <p class="inputName" id="spellsPreparedFirst" style="display: none;">Has 1st level Spells<input id="firstOption" type="checkbox" placeholder="toggle" onclick="toggle('first')"></p> 
        <input type="text" class="searchBarCreation" name="first" id="first" style="display: none;" placeholder="First" title="first">

        <p class="inputName" id="spellsPreparedZeroth" style="display: none;">Has 0 level Spells<input id="zerothOption" type="checkbox" placeholder="toggle" onclick="toggle('zeroth')"></p> 
        <input type="text" class="searchBarCreation" name="zeroth" id="zeroth" style="display: none;" placeholder="Zeroth" title="zeroth">
        </div>
        </div>

        <p class="inputName">Has HP Traits<input type="checkbox" id="HPTraitsOption" placeholder="toggle" onclick="toggle('HPTraits')"></p>
        <input type="text" class="searchBarCreation" name="HPTraits" id="HPTraits" style="display: none;" placeholder="HPTraits" title="HPTraits">
        
        <p class="inputName">Has Weakness<input type="checkbox" id="weaknessOption" placeholder="toggle" onclick="toggle('weakness')"></p>
        <input type="text" class="searchBarCreation" name="weakness" id="weakness" style="display: none;" placeholder="Weakness" title="weakness">

        <p class="inputName">Has Melee Attack<input type="checkbox" id="meleeOption" placeholder="toggle" onclick="toggle('melee')"></p>
        <div style="display: none;" id="melee"><button type="button" class="formButton" onclick="createAttackInformation('meleeAttack','Melee Attack Name','Melee Attack Dice Count')">Add Melee Attack</button>
        <div class="meleeAttack" id="meleeAttackArea"></div></div>

        <p class="inputName">Has Range Attack<input type="checkbox" id="rangeOption" placeholder="toggle" onclick="toggle('range')"></p>
        <div style="display: none;" id="range"><button type="button" class="formButton" onclick="createAttackInformation('rangeAttack','Range Attack Name','Range Attack Dice Count')">Add Range Attack</button>
        <div class="rangeAttack" id="rangeAttackArea"></div></div>

        

       <p class="inputName">Has Gear<input type="checkbox" id="gearOption" placeholder="toggle" onclick="toggle('gear')"></p>
        <input type="text" class="searchBarCreation" name="gear" id="gear" style="display: none;" placeholder="Gear" title="gear">

        <p class="inputName">Has Skills <input type="checkbox" id="skillsOption" placeholder="toggle" onclick="arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'])"></p>
        <div id="skillsContainer" style="display: none;" class="stairCase">
        <p id="skillPoints"></p>
        <p class="inputName" id="skillsAcrobatics" style="display: none;">Has Acrobatics <input id="AcrobaticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Acrobatics')"></p> 
        <input type="number" class="searchBarCreation" name="Acrobatics" id="Acrobatics" style="display: none;" placeholder="Acrobatics" title="Acrobatics">
        
        <p class="inputName" id="skillsAppraise" style="display: none;">Has Appraise <input id="AppraiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Appraise')"></p> 
        <input type="number" class="searchBarCreation" name="Appraise" id="Appraise" style="display: none;" placeholder="Appraise" title="Appraise">

        <p class="inputName" id="skillsBluff" style="display: none;">Has Bluff<input id="BluffOption" type="checkbox" placeholder="toggle" onclick="toggle('Bluff')"></p> 
        <input type="number" class="searchBarCreation" name="Bluff" id="Bluff" style="display: none;" placeholder="Bluff" title="Bluff">

        <p class="inputName" id="skillsClimb" style="display: none;">Has Climb <input id="ClimbOption" type="checkbox" placeholder="toggle" onclick="toggle('Climb')"></p> 
        <input type="number" class="searchBarCreation" name="Climb" id="Climb" style="display: none;" placeholder="Climb" title="Climb">

        <p class="inputName" id="skillsCraft" style="display: none;">Has Craft <input id="CraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Craft')"></p> 
        <div style="display: none;" id="Craft"><button type="button" id="craftButton" class="formButton" onclick="createDualInformation('Craft','Name','Value','Craft','Craft Name','Craft Value','text','number')">Add Craft</button>
        <div class="Craft" id="CraftArea"></div></div>

        <p class="inputName" id="skillsDiplomacy" style="display: none;">Has Diplomacy <input id="DiplomacyOption" type="checkbox" placeholder="toggle" onclick="toggle('Diplomacy')"></p> 
        <input type="number" class="searchBarCreation" name="Diplomacy" id="Diplomacy" style="display: none;" placeholder="Diplomacy" title="Diplomacy">
        
        <p class="inputName" id="skillsDisableDevice" style="display: none;">Has Disable Device <input id="DisableDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('DisableDevice')"></p> 
        <input type="number" class="searchBarCreation" name="DisableDevice" id="DisableDevice" style="display: none;" placeholder="DisableDevice" title="DisableDevice">

        <p class="inputName" id="skillsDisguise" style="display: none;">Has Disguise <input id="DisguiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Disguise')"></p> 
        <input type="number" class="searchBarCreation" name="Disguise" id="Disguise" style="display: none;" placeholder="Disguise" title="Disguise">

        <p class="inputName" id="skillsEscapeArtist" style="display: none;">Has Escape Artist <input id="EscapeArtistOption" type="checkbox" placeholder="toggle" onclick="toggle('EscapeArtist')"></p> 
        <input type="number" class="searchBarCreation" name="EscapeArtist" id="EscapeArtist" style="display: none;" placeholder="EscapeArtist" title="EscapeArtist">

        <p class="inputName" id="skillsFly" style="display: none;">Has Fly <input id="FlyOption" type="checkbox" placeholder="toggle" onclick="toggle('Fly')"></p> 
        <input type="number" class="searchBarCreation" name="Fly" id="Fly" style="display: none;" placeholder="Fly" title="Fly">

        <p class="inputName" id="skillsHandleAnimal" style="display: none;">Has Handle Animal <input id="HandleAnimalOption" type="checkbox" placeholder="toggle" onclick="toggle('HandleAnimal')"></p> 
        <input type="number" class="searchBarCreation" name="HandleAnimal" id="HandleAnimal" style="display: none;" placeholder="HandleAnimal" title="HandleAnimal">

        <p class="inputName" id="skillsHeal" style="display: none;">Has Heal <input id="HealOption" type="checkbox" placeholder="toggle" onclick="toggle('Heal')"></p> 
        <input type="number" class="searchBarCreation" name="Heal" id="Heal" style="display: none;" placeholder="Heal" title="Heal">

        <p class="inputName" id="skillsIntimidate" style="display: none;">Has Intimidate <input id="IntimidateOption" type="checkbox" placeholder="toggle" onclick="toggle('Intimidate')"></p> 
        <input type="number" class="searchBarCreation" name="Intimidate" id="Intimidate" style="display: none;" placeholder="Intimidate" title="Intimidate">

        <p class="inputName" style="display: flex">Has Knowledge<input type="checkbox" id="skillsKnowledgeOption" placeholder="toggle" onclick="arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion','All'])"></p> 
        <div id="skillsKnowledgeContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="skillsKnowledgeArcana" style="display: none;">Has Arcana <input id="ArcanaOption" type="checkbox" placeholder="toggle" onclick="toggle('Arcana')"></p> 
        <input type="number" class="searchBarCreation" name="Arcana" id="Arcana" style="display: none;" placeholder="Arcana" title="Arcana">

        <p class="inputName" id="skillsKnowledgeDungeoneering" style="display: none;">Has Dungeoneering <input id="DungeoneeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Dungeoneering')"></p> 
        <input type="number" class="searchBarCreation" name="Dungeoneering" id="Dungeoneering" style="display: none;" placeholder="Dungeoneering" title="Dungeoneering">

        <p class="inputName" id="skillsKnowledgeEngineering" style="display: none;">Has Engineering <input id="EngineeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Engineering')"></p> 
        <input type="number" class="searchBarCreation" name="Engineering" id="Engineering" style="display: none;" placeholder="Engineering" title="Engineering">

        <p class="inputName" id="skillsKnowledgeGeography" style="display: none;">Has Geography <input id="GeographyOption" type="checkbox" placeholder="toggle" onclick="toggle('Geography')"></p> 
        <input type="number" class="searchBarCreation" name="Geography" id="Geography" style="display: none;" placeholder="Geography" title="Geography">

        <p class="inputName" id="skillsKnowledgeHistory" style="display: none;">Has History <input id="HistoryOption" type="checkbox" placeholder="toggle" onclick="toggle('History')"></p> 
        <input type="number" class="searchBarCreation" name="History" id="History" style="display: none;" placeholder="History" title="History">

        <p class="inputName" id="skillsKnowledgeLocal" style="display: none;">Has Local <input id="LocalOption" type="checkbox" placeholder="toggle" onclick="toggle('Local')"></p> 
        <input type="number" class="searchBarCreation" name="Local" id="Local" style="display: none;" placeholder="Local" title="Local">

        <p class="inputName" id="skillsKnowledgeNature" style="display: none;">Has Nature <input id="NatureOption" type="checkbox" placeholder="toggle" onclick="toggle('Nature')"></p> 
        <input type="number" class="searchBarCreation" name="Nature" id="Nature" style="display: none;" placeholder="Nature" title="Nature">

        <p class="inputName" id="skillsKnowledgeNobility" style="display: none;">Has Nobility <input id="NobilityOption" type="checkbox" placeholder="toggle" onclick="toggle('Nobility')"></p> 
        <input type="number" class="searchBarCreation" name="Nobility" id="Nobility" style="display: none;" placeholder="Nobility" title="Nobility">

        <p class="inputName" id="skillsKnowledgePlanes" style="display: none;">Has Planes <input id="PlanesOption" type="checkbox" placeholder="toggle" onclick="toggle('Planes')"></p> 
        <input type="number" class="searchBarCreation" name="Planes" id="Planes" style="display: none;" placeholder="Planes" title="Planes">

        <p class="inputName" id="skillsKnowledgeReligion" style="display: none;">Has Religion <input id="ReligionOption" type="checkbox" placeholder="toggle" onclick="toggle('Religion')"></p> 
        <input type="number" class="searchBarCreation" name="Religion" id="Religion" style="display: none;" placeholder="Religion" title="Religion">

        <p class="inputName" id="skillsKnowledgeAll" style="display: none;">Has All <input id="AllOption" type="checkbox" placeholder="toggle" onclick="toggle('All')"></p> 
        <input type="number" class="searchBarCreation" name="All" id="All" style="display: none;" placeholder="All" title="All">
                
        </div>

        <p class="inputName" id="skillsLinguistics" style="display: none;">Has Linguistics <input id="LinguisticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Linguistics')"></p> 
        <input type="number" class="searchBarCreation" name="Linguistics" id="Linguistics" style="display: none;" placeholder="Linguistics" title="Linguistics">

        <p class="inputName" id="skillsPerception" style="display: none;">Has Perception <input id="PerceptionOption" type="checkbox" placeholder="toggle" onclick="toggle('Perception')"></p> 
        <input type="number" class="searchBarCreation" name="Perception" id="Perception" style="display: none;" placeholder="Perception" title="Perception">

        <p class="inputName" id="skillsPerform" style="display: none;">Has Perform <input id="PerformOption" type="checkbox" placeholder="toggle" onclick="toggle('Perform')"></p> 
        <input type="number" class="searchBarCreation" name="Perform" id="Perform" style="display: none;" placeholder="Perform" title="Perform">

        <p class="inputName" id="skillsProfession" style="display: none;">Has Profession <input id="ProfessionOption" type="checkbox" placeholder="toggle" onclick="toggle('Profession')"></p> 
        <div style="display: none;" id="Profession"><button type="button" id="professionButton" class="formButton" onclick="createDualInformation('Profession','Name','Value','Profession','Profession Name','Profession Value','text','number')">Add Profession</button>
        <div class="Profession" id="ProfessionArea"></div></div>

        <p class="inputName" id="skillsRide" style="display: none;">Has Ride <input id="RideOption" type="checkbox" placeholder="toggle" onclick="toggle('Ride')"></p> 
        <input type="number" class="searchBarCreation" name="Ride" id="Ride" style="display: none;" placeholder="Ride" title="Ride">

        <p class="inputName" id="skillsSenseMotive" style="display: none;">Has Sense Motive <input id="SenseMotiveOption" type="checkbox" placeholder="toggle" onclick="toggle('SenseMotive')"></p> 
        <input type="number" class="searchBarCreation" name="SenseMotive" id="SenseMotive" style="display: none;" placeholder="SenseMotive" title="SenseMotive">

        <p class="inputName" id="skillsSleightofHand" style="display: none;">Has Sleight of Hand <input id="SleightofHandOption" type="checkbox" placeholder="toggle" onclick="toggle('SleightofHand')"></p> 
        <input type="number" class="searchBarCreation" name="SleightofHand" id="SleightofHand" style="display: none;" placeholder="SleightofHand" title="SleightofHand">

        <p class="inputName" id="skillsSpellcraft" style="display: none;">Has Spellcraft <input id="SpellcraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Spellcraft')"></p> 
        <input type="number" class="searchBarCreation" name="Spellcraft" id="Spellcraft" style="display: none;" placeholder="Spellcraft" title="Spellcraft">

        <p class="inputName" id="skillsStealth" style="display: none;">Has Stealth <input id="StealthOption" type="checkbox" placeholder="toggle" onclick="toggle('Stealth')"></p> 
        <input type="number" class="searchBarCreation" name="Stealth" id="Stealth" style="display: none;" placeholder="Stealth" title="Stealth">

        <p class="inputName" id="skillsSurvival" style="display: none;">Has Survival <input id="SurvivalOption" type="checkbox" placeholder="toggle" onclick="toggle('Survival')"></p> 
        <input type="number" class="searchBarCreation" name="Survival" id="Survival" style="display: none;" placeholder="Survival" title="Survival">

        <p class="inputName" id="skillsSwim" style="display: none;">Has Swim <input id="SwimOption" type="checkbox" placeholder="toggle" onclick="toggle('Swim')"></p> 
        <input type="number" class="searchBarCreation" name="Swim" id="Swim" style="display: none;" placeholder="Swim" title="Swim">

        <p class="inputName" id="skillsUseMagicDevice" style="display: none;">Has Use Magic Device <input id="UseMagicDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('UseMagicDevice')"></p> 
        <input type="number" class="searchBarCreation" name="UseMagicDevice" id="UseMagicDevice" style="display: none;" placeholder="UseMagicDevice" title="UseMagicDevice">
        </div>
        </div>
        <div>
        <p class="Title">Infinite Extras:</p>
        <br><button type="button" class="formButton" onclick="createArrayChoice('sense','Sense','Sense')">Add Sense</button>
        <div class="sense" id="senseArea"></div>

        <br><button type="button" class="formButton" onclick="createDualInformation('aura','Aura','Radius','Aura','Aura','Radius','text','number',true,false,false,false,true);">Add Aura</button>
        <div class="aura" id="auraArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('saveBonus','Save Bonus','Save Bonus Amount')">Add Save Bonus</button>
        <div class="saveBonus" id="saveBonusArea"></div>
        <p id="featCount"></p>
        <br><button type="button" id="featButton" class="formButton" onclick="createArrayChoice('feat','Feat','Feat Name')">Add feat</button>
        <div class="feat" id="featArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('racialMod','Racial Modifier','Racial Modifier Bonus')">Add Racial Modifier</button>
        <div class="racialMod" id="racialModArea"></div>

        <br><button type="button" class="formButton" onclick="createDualInformation('cmdMod','Details','Bonus','cmdMod','CMD Modifier Details','CMD Modifier Value','text','number')">Add CMD Modifier</button>
        <div class="cmdMod" id="cmdModArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('language','Language','Language Name')">Add language</button>
        <div class="language" id="languageArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('SQ','Special Quality','Special Quality Name')">Add Special Quality</button>
        <div class="SQ" id="SQArea"></div>

        <br><button type="button" class="formButton" onclick="createDualInformation('SpecialAbility','Name','Details','Special Ability','Special Ability Name','Special Ability Details','text','text',true,true,true,true)">Add Special Ability</button>
        <div class="SpecialAbility" id="specialAbilityArea"></div>
        </div>
        </div>
        <br><input type="Submit" class="formButton" onclick="${submitButton}">
        </div></form>`
        break;
    case "5e":
      forum =`<form id="forum">
        <div class="creationSetup">
        <div>
        <p class="Title">Required:</p>
        <label class="inputName" for="creatureName">Creature Name:</label><br>
        <input type="text" class="searchBarCreation" name="creatureName" id="creatureName" placeholder="Name" title="Creature Name" value="Mimic"><br>

        <label class="inputName" for="creatureType">Creature Type:</label><br>
        <input type="text" class="searchBarCreation" name="creatureType" id="creatureType" placeholder="Type" title="Creature Type" value="Aberration(shapechanger)"><br>

        <label class="inputName" for="creatureTitle">Creature Title:</label><br>
        <input type="text" class="searchBarCreation" name="creatureTitle" id="creatureTitle" placeholder="Title" title="Creature Title" value="Mimic"><br>

        <label class="inputName" for="creatureCR">Creature CR:</label><br>
        <input type="text" class="searchBarCreation" name="creatureCR" id="creatureCR" placeholder="CR" title="Creature CR" value="4"><br>

        <label class="inputName" for="creatureXP">Creature XP:</label><br>
        <input type="number" class="searchBarCreation" name="creatureXP" id="creatureXP" placeholder="XP" title="Creature XP" value="1200"><br>

        <label class="inputName" for="creatureLevel">Creature Hit Dice Count:</label><br>
        <input type="number" class="searchBarCreation" name="creatureLevel" id="creatureLevel" placeholder="hit dice" title="Creature Level" value="7"><br>

        <label class="inputName" for="creatureHitDice">Creature Hit Dice:</label><br>
        <select class="searchBarCreation" name="creatureHitDice" id="creatureHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        <option>d20</option>
        </select><br>

        <label class="inputName" for="ac">Creature ac bonus:</label><br>
        <input type="text" class="searchBarCreation" name="ac" id="ac" placeholder="ac" title="Creature ac" value=0><br>
    
        <label class="inputName" for="creatureSpeed">Creature Speed:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSpeed" id="creatureSpeed" placeholder="Speed" title="Creature Speed" value="30"><br>

        <label class="inputName" for="creatureStr">Creature Str:</label><br>
        <input type="number" class="searchBarCreation" name="creatureStr" id="creatureStr" placeholder="Str" title="Creature Str" value=19><br>

        <label class="inputName" for="creatureDex">Creature Dexterity:</label><br>
        <input type="number" class="searchBarCreation" name="creatureDex" id="creatureDex" placeholder="Dex" title="Creature Dex" value=12><br>

        <label class="inputName" for="creatureCon">Creature Con:</label><br>
        <input type="number" class="searchBarCreation" name="creatureCon" id="creatureCon" placeholder="Con" title="Creature Con" value=17><br>

        <label class="inputName" for="creatureInt">Creature Intelligence:</label><br>
        <input type="number" class="searchBarCreation" name="creatureInt" id="creatureInt" placeholder="Int" title="Creature Int" value=10><br>

        <label class="inputName" for="creatureWis">Creature Wisdom:</label><br>
        <input type="number" class="searchBarCreation" name="creatureWis" id="creatureWis" placeholder="Wis" title="Creature Wis" value=13><br>

        <label class="inputName" for="creatureCha">Creature Charisma:</label><br>
        <input type="number" class="searchBarCreation" name="creatureCha" id="creatureCha" placeholder="Cha" title="Creature Cha" value=10><br>

        <label class="inputName" for="creatureProficiency">Creature Proficiency:</label><br>
        <input type="number" class="searchBarCreation" name="creatureProficiency" id="creatureProficiency" placeholder="Proficiency" title="Creature Proficiency" value=5><br>
        <label class="inputName" for="creatureAlignment">Creature Alignment:</label><br>
        <select class="searchBarCreation" name="creatureAlignment" id="creatureAlignment">
        <option>LE</option>
        <option>LN</option>
        <option>LG</option>
        <option>NG</option>
        <option selected>N</option>
        <option>NE</option>
        <option>CE</option>
        <option>CN</option>
        <option>CG</option>
        </select><br>
        <label class="inputName" for="creatureSense">Creature Sense:</label><br>
        <input type="text" class="searchBarCreation" name="creatureSense" id="creatureSense" placeholder="Sense" title="Creature Sense" value="Senses"><br>

        <label class="inputName" for="creatureSize">Creature Size:</label><br>
        <select class="searchBarCreation" name="creatureSize" id="creatureSize">
        <option>Tiny</option>
        <option>Small</option>
        <option selected>Medium</option>
        <option>Large</option>
        <option>Huge</option>
        <option>Gargantuan</option>
        </select><br>
        </div>
        <div>
        <p class="Title">Choices:</p>
        <p class="inputName">Str Saving Throw Proficiency<input type="checkbox" id="StrSavingThrowProficiencyOption" placeholder="StrSavingThrowProficiency"></p>
        <p class="inputName">Dex Saving Throw Proficiency<input type="checkbox" id="DexSavingThrowProficiencyOption" placeholder="DexSavingThrowProficiency"></p>
        <p class="inputName">Con Saving Throw Proficiency<input type="checkbox" id="ConSavingThrowProficiencyOption" placeholder="ConSavingThrowProficiency"></p>
        <p class="inputName">Int Saving Throw Proficiency<input type="checkbox" id="IntSavingThrowProficiencyOption" placeholder="IntSavingThrowProficiency"></p>
        <p class="inputName">Wis Saving Throw Proficiency<input type="checkbox" id="WisSavingThrowProficiencyOption" placeholder="WisSavingThrowProficiency"></p>
        <p class="inputName">Cha Saving Throw Proficiency<input type="checkbox" id="ChaSavingThrowProficiencyOption" placeholder="ChaSavingThrowProficiency"></p>
        <p class="inputName">Has Damage Vulnerabilities<input type="checkbox" id="damage_vulnerabilitiesOption" placeholder="toggle" onclick="toggle('damage_vulnerabilities')"></p>
        <input type="text" class="searchBarCreation" name="damage_vulnerabilities" id="damage_vulnerabilities" style="display: none;" placeholder="Damage Vulnerabilities" title="damage_vulnerabilities">
        <p class="inputName">Has Damage Resistances<input type="checkbox" id="damage_resistancesOption" placeholder="toggle" onclick="toggle('damage_resistances')"></p>
        <input type="text" class="searchBarCreation" name="damage_resistances" id="damage_resistances" style="display: none;" placeholder="Damage Resistances" title="damage_resistances">
        <p class="inputName">Has Damage Immunities<input type="checkbox" id="damage_immunitiesOption" placeholder="toggle" onclick="toggle('damage_immunities')"></p>
        <input type="text" class="searchBarCreation" name="damage_immunities" id="damage_immunities" style="display: none;" placeholder="Damage Immunities" title="damage_immunities">
        <p class="inputName">Has Condition Immunities<input type="checkbox" id="condition_immunitiesOption" placeholder="toggle" onclick="toggle('condition_immunities')"></p>
        <input type="text" class="searchBarCreation" name="condition_immunities" id="condition_immunities" style="display: none;" placeholder="Condition Immunities" title="condition_immunities">
        <p class="inputName">Has Legendary Actions<input id="legendaryAbilitiesOption" type="checkbox" placeholder="toggle" onclick="toggle('legendaryAbilities')"></p> 
        <div id="legendaryAbilities" style="display: none;" class="stairCase">
        <input type="text" class="searchBarCreation" name="legendary_details" id="legendary_details" placeholder="Legendary Details" title="legendary_details">
        <div id="legendaryActions"><button type="button" class="formButton" onclick="createDualInformation('legendaryActions','name','details','legendary Action','Legendary Action Name','Legendary Action Details','text','text')">Add Legendary Action</button>
        <div class="legendaryActions" id="legendaryActionsArea"></div></div>
        </div>

        </div>
        <div>
        <p class="Title">Infinite Extras and Skills:</p>
                <br><button type="button" class="formButton" onclick="createDualInformation('Ability','name','details','Ability','Ability Name','Ability Details','text','text')">Add Ability</button>
        <div class="Ability" id="AbilityArea"></div>
                <br><button type="button" class="formButton" onclick="createDualInformation('Action','name','details','Action','Action Name','Action Details','text','text')">Add Action</button>
        <div class="Action" id="ActionArea"></div>
        <p class="inputName">Acrobatics Proficiency<input type="checkbox" id="AcrobaticsProficiencyOption" placeholder="AcrobaticsProficiency"></p>
        <p class="inputName">Animal Handling Proficiency<input type="checkbox" id="AnimalHandlingProficiencyOption" placeholder="Animal HandlingProficiency"></p>
        <p class="inputName">Arcana Proficiency<input type="checkbox" id="ArcanaProficiencyOption" placeholder="ArcanaProficiency"></p>
        <p class="inputName">Athletics Proficiency<input type="checkbox" id="AthleticsProficiencyOption" placeholder="AthleticsProficiency"></p>
        <p class="inputName">Deception Proficiency<input type="checkbox" id="DeceptionProficiencyOption" placeholder="DeceptionProficiency"></p>
        <p class="inputName">History Proficiency<input type="checkbox" id="HistoryProficiencyOption" placeholder="HistoryProficiency"></p>
        <p class="inputName">Insight Proficiency<input type="checkbox" id="InsightProficiencyOption" placeholder="InsightProficiency"></p>
        <p class="inputName">Intimidation Proficiency<input type="checkbox" id="IntimidationProficiencyOption" placeholder="IntimidationProficiency"></p>
        <p class="inputName">Investigation Proficiency<input type="checkbox" id="InvestigationProficiencyOption" placeholder="InvestigationProficiency"></p>
        <p class="inputName">Medicine Proficiency<input type="checkbox" id="MedicineProficiencyOption" placeholder="MedicineProficiency"></p>
        <p class="inputName">Nature Proficiency<input type="checkbox" id="NatureProficiencyOption" placeholder="NatureProficiency"></p>
        <p class="inputName">Perception Proficiency<input type="checkbox" id="PerceptionProficiencyOption" placeholder="PerceptionProficiency"></p>
        <p class="inputName">Performance Proficiency<input type="checkbox" id="PerformanceProficiencyOption" placeholder="PerformanceProficiency"></p>
        <p class="inputName">Persuasion Proficiency<input type="checkbox" id="PersuasionProficiencyOption" placeholder="PersuasionProficiency"></p>
        <p class="inputName">Religion Proficiency<input type="checkbox" id="ReligionProficiencyOption" placeholder="ReligionProficiency"></p>
        <p class="inputName">Sleight of Hand Proficiency<input type="checkbox" id="SleightofHandProficiencyOption" placeholder="SleightofHandProficiency"></p>
        <p class="inputName">Stealth Proficiency<input type="checkbox" id="StealthProficiencyOption" placeholder="StealthProficiency"></p>
        <p class="inputName">Survival Proficiency<input type="checkbox" id="SurvivalProficiencyOption" placeholder="SurvivalProficiency"></p>
        </div>
        </div>
        <br><input type="Submit" class="formButton" onclick="${submitButton}">
        </form>
        `;
      break;
  }
  return forum;

}

/**
 * creates form for site to use
 * @param {string} sys
 * @param {string} forumType  
 * @returns string
 */
function getForumCharacter(sys,forumType){
  let submitButton = "createCharacter()";
  if(forumType==="edit"){
    submitButton = "completeCharacterEdit()";
  }
  let forum = ""
  switch(sys){
    case "pathfinder":
          forum = `<form id="forum">
        <div class="creationSetup">
        <div>
        <p class="Title">Required:</p>
        <label class="inputName" for="characterName">character Name:</label><br>
        <input type="text" class="searchBarCreation" name="characterName" id="characterName" placeholder="Name" title="CHaracter Name" value="Mimic"><br>

        <label class="inputName" for="characterRace">Character Type:</label><br>
        <select class="searchBarCreation" name="Character race" id="characterRace" placeholder="Type" title="Character Race"><br>
        <option selected>Human</option>
        <option>Elf</option>
        <option>Half-Elf</option>
        <option>Custom</option>
        </select>
        <input type="text" class="searchBarCreation" name="customCharacterType" id="customType" style="display: none;" placeholder="customCharacterType" title="customCharacterType">
        <p class="inputName">Has Subtype<input type="checkbox" id="SubtypeOption" placeholder="toggle" onclick="toggle('Subtype')"></p>
        <input type="text" class="searchBarCreation" name="Subtype" id="Subtype" style="display: none;" placeholder="Subtype" title="Subtype">
        <label class="inputName" for="characterTitle">character Title:</label><br>
        <input type="text" class="searchBarCreation" name="characterTitle" id="characterTitle" placeholder="Title" title="Character Title" value="Mimic"><br>


        <label class="inputName" for="characterLevel">character Level:</label><br>
        <input type="number" class="searchBarCreation" name="characterLevel" id="characterLevel" placeholder="Level" title="character Level" value="7"><br>
        <label class="inputName" for="characterHitDice">character Hit Dice:</label><br>
        <select class="searchBarCreation" name="characterHitDice" id="characterHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        </select><br>
        <label class="inputName" for="characterHitDice">character HP Gain Rate:</label><br>
        <select class="searchBarCreation" name="characterHitDiceRate" id="characterHitDiceRate">
        <option>Monster</option>
        <option>Player</option>
        </select><br>

        <label class="inputName" for="characterSpeed">character Speed:</label><br>
        <input type="text" class="searchBarCreation" name="characterSpeed" id="characterSpeed" placeholder="Speed" title="Character Speed" value="30"><br>

        <label class="inputName" for="characterStr">Character Str:</label><br>
        <input type="text" class="searchBarCreation" name="characterStr" id="characterStr" placeholder="Str" title="Character Str" value=19><br>

        <label class="inputName" for="characterDex">Character Dexterity:</label><br>
        <input type="text" class="searchBarCreation" name="characterDex" id="characterDex" placeholder="Dex" title="Character Dex" value=12><br>

        <label class="inputName" for="characterCon">Character Con:</label><br>
        <input type="text" class="searchBarCreation" name="characterCon" id="characterCon" placeholder="Con" title="Character Con" value=17><br>

        <label class="inputName" for="characterInt">Character Intelligence:</label><br>
        <input type="text" class="searchBarCreation" name="characterInt" id="characterInt" placeholder="Int" title="Character Int" value=10><br>

        <label class="inputName" for="characterWis">Character Wisdom:</label><br>
        <input type="text" class="searchBarCreation" name="characterWis" id="characterWis" placeholder="Wis" title="Character Wis" value=13><br>

        <label class="inputName" for="characterCha">Character Charisma:</label><br>
        <input type="text" class="searchBarCreation" name="characterCha" id="characterCha" placeholder="Cha" title="Character Cha" value=10><br>
        
        <label class="inputName" for="characterBaB">Character BaB:</label><br>
        <select class="searchBarCreation" name="characterBaB" id="characterBaB">
        <option>Fast</option>
        <option Selected>Medium</option>
        <option>Slow</option>
        </select><br>


        <label class="inputName" for="characterSkillProgression">Character Skill Progression:</label><br>
        <select class="searchBarCreation" name="characterSkillProgression" id="characterSkillProgression">
        <option>High</option>
        <option Selected>Middle</option>
        <option>Low</option>
        </select><br>

        <label class="inputName" for="characterFort">Character Fort Bonus:</label><br>
        <select class="searchBarCreation" name="characterFort" id="characterFort">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="characterRef">Character Ref Bonus:</label><br>
        <select class="searchBarCreation" name="characterRef" id="characterRef">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="characterWill">Character Will Bonus:</label><br>
        <select class="searchBarCreation" name="characterWill" id="characterWill">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="characterAlignment">Character Alignment:</label><br>
        <select class="searchBarCreation" name="characterAlignment" id="characterAlignment">
        <option>LE</option>
        <option>LN</option>
        <option>LG</option>
        <option>NG</option>
        <option selected>N</option>
        <option>NE</option>
        <option>CE</option>
        <option>CN</option>
        <option>CG</option>
        </select><br>

        <label class="inputName" for="characterSize">Character Size:</label><br>
        <select class="searchBarCreation" name="characterSize" id="characterSize">
        <option>Fine</option>
        <option>Diminutive</option>
        <option>Tiny</option>
        <option>Small</option>
        <option selected>Medium</option>
        <option>Large</option>
        <option>Huge</option>
        <option>Gargantuan</option>
        <option>Colossal</option>
        </select><br>

        </div>
        <div>
        <p class="Title">Choices:</p>
        <p class="inputName">Has bonuses to AC <input type="checkbox" id="bonusACOption" placeholder="toggle" onclick="arrayToggle('bonusAC',['Container','Armor','Deflection','Dodge','Shield','Natural','Extra'])"></p>
        <div id="bonusACContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="bonusACArmor" style="display: none;">Has Armor <input id="armorOption" type="checkbox" placeholder="toggle" onclick="toggle('armor')"></p> 
        <input type="number" class="searchBarCreation" name="armor" id="armor" style="display: none;" placeholder="armor" title="armor">
        
        <p class="inputName" id="bonusACDeflection" style="display: none;">Has Deflection <input id="deflectionOption" type="checkbox" placeholder="toggle" onclick="toggle('deflection')"></p> 
        <input type="number" class="searchBarCreation" name="deflection" id="deflection" style="display: none;" placeholder="deflection" title="deflection">

        <p class="inputName" id="bonusACDodge" style="display: none;">Has Dodge <input id="dodgeOption" type="checkbox" placeholder="toggle" onclick="toggle('dodge')"></p> 
        <input type="number" class="searchBarCreation" name="dodge" id="dodge" style="display: none;" placeholder="dodge" title="dodge">

        <p class="inputName" id="bonusACShield" style="display: none;">Has Shield <input id="shieldOption" type="checkbox" placeholder="toggle" onclick="toggle('shield')"></p> 
        <input type="number" class="searchBarCreation" name="shield" id="shield" style="display: none;" placeholder="shield" title="shield">

        <p class="inputName" id="bonusACNatural" style="display: none;">Has Natural <input id="naturalOption" type="checkbox" placeholder="toggle" onclick="toggle('natural')"></p> 
        <input type="number" class="searchBarCreation" name="natural" id="natural" style="display: none;" placeholder="natural" title="natural">

        <p class="inputName" id="bonusACExtra" style="display: none;">Has Extra Bonuses <input id="extraBonusesOption" type="checkbox" placeholder="toggle" onclick="toggle('extraBonuses')"></p> 

        <div style="display: none;" id="extraBonuses"><button type="button" class="formButton" onclick="createDualInformation('extra','name','amount','Extra Bonus','Bonus Name','Bonus Amount','text','number')">Add Extra Bonuses</button>
        <div class="extra" id="extraArea"></div></div>
        </div>

        <p class="inputName">Has Defensive Traits <input type="checkbox" id="defensiveTraitsOption" placeholder="toggle" onclick="arrayToggle('defensiveTraits',['Container','DA','DR','Immune','Resist','SR'])"></p>
        <div id="defensiveTraitsContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="defensiveTraitsDA" style="display: none;">Has Defensive Abilities <input id="DAOption" type="checkbox" placeholder="toggle" onclick="toggle('DA')"></p> 
        <input type="text" class="searchBarCreation" name="DA" id="DA" style="display: none;" placeholder="Defensive Ability" title="DA">
        
        <p class="inputName" id="defensiveTraitsDR" style="display: none;">Has DR <input id="DROption" type="checkbox" placeholder="toggle" onclick="toggle('DR')"></p> 
        <input type="text" class="searchBarCreation" name="DR" id="DR" style="display: none;" placeholder="DR" title="DR">

        <p class="inputName" id="defensiveTraitsImmune" style="display: none;">Has Immunities <input id="ImmuneOption" type="checkbox" placeholder="toggle" onclick="toggle('Immune')"></p> 
        <input type="text" class="searchBarCreation" name="Immune" id="Immune" style="display: none;" placeholder="Immune" title="Immune">

        <p class="inputName" id="defensiveTraitsResist" style="display: none;">Has Energy Resistances <input id="ResistOption" type="checkbox" placeholder="toggle" onclick="toggle('Resist')"></p> 
        <input type="text" class="searchBarCreation" name="Resist" id="Resist" style="display: none;" placeholder="Resist" title="Resist">

        <p class="inputName" id="defensiveTraitsSR" style="display: none;">Has SR <input id="SROption" type="checkbox" placeholder="toggle" onclick="toggle('SR')"></p> 
        <input type="number" class="searchBarCreation" name="SR" id="SR" style="display: none;" placeholder="SR" title="SR">
        </div>

        <p class="inputName">Has Spells<input type="checkbox" id="spellsOption" placeholder="toggle" onclick="arrayToggle('spells',['Container','InnateOption','PreparedOption'])"></p>
        <div id="spellsContainer" style="display: none;" class="stairCase">
        

        <p class="inputName" style="display: flex">Has Innate<input type="checkbox" id="spellsInnateOption" placeholder="toggle" onclick="arrayToggle('spellsInnate',['Container','Constant','atWill','xDay'])"></p> 
        <div id="spellsInnateContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="characterSpellModInnate">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="characterSpellModInnate" id="characterSpellModInnate">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

        <p class="inputName" id="innateCasterLevelZone";">Set Caster Level Innate <input id="innateCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('innateCasterLevel')"></p>
        <div id="innateCasterLevel" style="display: none;" class="stairCase">
        <input type="number" class="searchBarCreation" name="CLInnate" id="CLInnate" placeholder="CLInnate" title="CLInnate">      
        <input type="number" class="searchBarCreation" name="ConcentrateInnate" id="ConcentrateInnate"" placeholder="ConcentrateInnate" title="ConcentrateInnate">
        </div>

        <p class="inputName" id="spellsInnateConstant" style="display: none;">Has Constant <input id="constantOption" type="checkbox" placeholder="toggle" onclick="toggle('constant')"></p> 
        <input type="text" class="searchBarCreation" name="constant" id="constant" style="display: none;" placeholder="Constant" title="constant">

        <p class="inputName" id="spellsInnateatWill" style="display: none;">Has atWill <input id="atWillOption" type="checkbox" placeholder="toggle" onclick="toggle('atWill')"></p> 
        <input type="text" class="searchBarCreation" name="atWill" id="atWill" style="display: none;" placeholder="atWill" title="atWill">

        <p class="inputName" id="spellsInnatexDay" style="display: none;">Has xDay <input id="xDayOption" type="checkbox" placeholder="toggle" onclick="toggle('xDay')"></p> 
        <div style="display: none;" id="xDay"><button type="button" class="formButton" onclick="createDualInformation('xDay','perDay','List','xDay Spell','Amount Per Day','SpellList','number','text')">Add xDay Spells</button>
        <div class="xDay" id="xDayArea"></div></div>
        </div>


        <p class="inputName" style="display: flex">Has Prepared <input type="checkbox" id="spellsPreparedOption" placeholder="toggle" onclick="arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth'])"></p>
        
        <div id="spellsPreparedContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="characterSpellModPrepared">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="characterSpellModPrepared" id="characterSpellModPrepared">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

         <p class="inputName" id="preparedCasterLevelZone";">Set Caster Level Prepared <input id="preparedCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('preparedCasterLevel')"></p>
        <div id="preparedCasterLevel" style="display: none;" class="stairCase">
        <input type="number" class="searchBarCreation" name="CLPrepared" id="CLPrepared" placeholder="CLPrepared" title="CLPrepared">      
        <input type="number" class="searchBarCreation" name="ConcentratePrepared" id="ConcentratePrepared"" placeholder="ConcentratePrepared" title="ConcentratePrepared">
        </div>


        <p class="inputName" id="spellsPreparedNinth" style="display: none;">Has 9th level Spells<input id="ninthOption" type="checkbox" placeholder="toggle" onclick="toggle('ninth')"></p> 
        <input type="text" class="searchBarCreation" name="ninth" id="ninth" style="display: none;" placeholder="Ninth" title="ninth">

        <p class="inputName" id="spellsPreparedEighth" style="display: none;">Has 8th level Spells<input id="eighthOption" type="checkbox" placeholder="toggle" onclick="toggle('eighth')"></p> 
        <input type="text" class="searchBarCreation" name="eighth" id="eighth" style="display: none;" placeholder="Eighth" title="eighth">

        <p class="inputName" id="spellsPreparedSeventh" style="display: none;">Has 7th level Spells<input id="seventhOption" type="checkbox" placeholder="toggle" onclick="toggle('seventh')"></p> 
        <input type="text" class="searchBarCreation" name="seventh" id="seventh" style="display: none;" placeholder="Seventh" title="seventh">

        <p class="inputName" id="spellsPreparedSixth" style="display: none;">Has 6th level Spells<input id="sixthOption" type="checkbox" placeholder="toggle" onclick="toggle('sixth')"></p> 
        <input type="text" class="searchBarCreation" name="sixth" id="sixth" style="display: none;" placeholder="Sixth" title="sixth">

        <p class="inputName" id="spellsPreparedFifth" style="display: none;">Has 5th level Spells<input id="fifthOption" type="checkbox" placeholder="toggle" onclick="toggle('fifth')"></p> 
        <input type="text" class="searchBarCreation" name="fifth" id="fifth" style="display: none;" placeholder="Fifth" title="fifth">

        <p class="inputName" id="spellsPreparedFourth" style="display: none;">Has 4th level Spells<input id="fourthOption" type="checkbox" placeholder="toggle" onclick="toggle('fourth')"></p> 
        <input type="text" class="searchBarCreation" name="fourth" id="fourth" style="display: none;" placeholder="Fourth" title="fourth">
        
        <p class="inputName" id="spellsPreparedThird" style="display: none;">Has 3rd level Spells<input id="thirdOption" type="checkbox" placeholder="toggle" onclick="toggle('third')"></p> 
        <input type="text" class="searchBarCreation" name="third" id="third" style="display: none;" placeholder="Third" title="third">

        <p class="inputName" id="spellsPreparedSecond" style="display: none;">Has 2nd level Spells<input id="secondOption" type="checkbox" placeholder="toggle" onclick="toggle('second')"></p> 
        <input type="text" class="searchBarCreation" name="second" id="second" style="display: none;" placeholder="Second" title="second">

        <p class="inputName" id="spellsPreparedFirst" style="display: none;">Has 1st level Spells<input id="firstOption" type="checkbox" placeholder="toggle" onclick="toggle('first')"></p> 
        <input type="text" class="searchBarCreation" name="first" id="first" style="display: none;" placeholder="First" title="first">

        <p class="inputName" id="spellsPreparedZeroth" style="display: none;">Has 0 level Spells<input id="zerothOption" type="checkbox" placeholder="toggle" onclick="toggle('zeroth')"></p> 
        <input type="text" class="searchBarCreation" name="zeroth" id="zeroth" style="display: none;" placeholder="Zeroth" title="zeroth">
        </div>
        </div>

        <p class="inputName">Has HP Traits<input type="checkbox" id="HPTraitsOption" placeholder="toggle" onclick="toggle('HPTraits')"></p>
        <input type="text" class="searchBarCreation" name="HPTraits" id="HPTraits" style="display: none;" placeholder="HPTraits" title="HPTraits">
        
        <p class="inputName">Has Weakness<input type="checkbox" id="weaknessOption" placeholder="toggle" onclick="toggle('weakness')"></p>
        <input type="text" class="searchBarCreation" name="weakness" id="weakness" style="display: none;" placeholder="Weakness" title="weakness">

        <p class="inputName">Has Melee Attack<input type="checkbox" id="meleeOption" placeholder="toggle" onclick="toggle('melee')"></p>
        <div style="display: none;" id="melee"><button type="button" class="formButton" onclick="createAttackInformation('meleeAttack','Melee Attack Name','Melee Attack Dice Count')">Add Melee Attack</button>
        <div class="meleeAttack" id="meleeAttackArea"></div></div>

        <p class="inputName">Has Range Attack<input type="checkbox" id="rangeOption" placeholder="toggle" onclick="toggle('range')"></p>
        <div style="display: none;" id="range"><button type="button" class="formButton" onclick="createAttackInformation('rangeAttack','Range Attack Name','Range Attack Dice Count')">Add Range Attack</button>
        <div class="rangeAttack" id="rangeAttackArea"></div></div>

        

       <p class="inputName">Has Gear<input type="checkbox" id="gearOption" placeholder="toggle" onclick="toggle('gear')"></p>
        <input type="text" class="searchBarCreation" name="gear" id="gear" style="display: none;" placeholder="Gear" title="gear">

        <p class="inputName">Has Skills <input type="checkbox" id="skillsOption" placeholder="toggle" onclick="arrayToggle('skills',['Container','Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','DisableDevice','Disguise','EscapeArtist','Fly','HandleAnimal','Heal','Intimidate','KnowledgeOption','Linguistics','Perception','Perform','Profession','Ride','SenseMotive','SleightofHand','Spellcraft','Stealth','Survival','Swim','UseMagicDevice'])"></p>
        <div id="skillsContainer" style="display: none;" class="stairCase">
        <p id="skillPoints"></p>
        <p class="inputName" id="skillsAcrobatics" style="display: none;">Has Acrobatics <input id="AcrobaticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Acrobatics')"></p> 
        <input type="number" class="searchBarCreation" name="Acrobatics" id="Acrobatics" style="display: none;" placeholder="Acrobatics" title="Acrobatics">
        
        <p class="inputName" id="skillsAppraise" style="display: none;">Has Appraise <input id="AppraiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Appraise')"></p> 
        <input type="number" class="searchBarCreation" name="Appraise" id="Appraise" style="display: none;" placeholder="Appraise" title="Appraise">

        <p class="inputName" id="skillsBluff" style="display: none;">Has Bluff<input id="BluffOption" type="checkbox" placeholder="toggle" onclick="toggle('Bluff')"></p> 
        <input type="number" class="searchBarCreation" name="Bluff" id="Bluff" style="display: none;" placeholder="Bluff" title="Bluff">

        <p class="inputName" id="skillsClimb" style="display: none;">Has Climb <input id="ClimbOption" type="checkbox" placeholder="toggle" onclick="toggle('Climb')"></p> 
        <input type="number" class="searchBarCreation" name="Climb" id="Climb" style="display: none;" placeholder="Climb" title="Climb">

        <p class="inputName" id="skillsCraft" style="display: none;">Has Craft <input id="CraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Craft')"></p> 
        <div style="display: none;" id="Craft"><button type="button" id="craftButton" class="formButton" onclick="createDualInformation('Craft','Name','Value','Craft','Craft Name','Craft Value','text','number')">Add Craft</button>
        <div class="Craft" id="CraftArea"></div></div>

        <p class="inputName" id="skillsDiplomacy" style="display: none;">Has Diplomacy <input id="DiplomacyOption" type="checkbox" placeholder="toggle" onclick="toggle('Diplomacy')"></p> 
        <input type="number" class="searchBarCreation" name="Diplomacy" id="Diplomacy" style="display: none;" placeholder="Diplomacy" title="Diplomacy">
        
        <p class="inputName" id="skillsDisableDevice" style="display: none;">Has Disable Device <input id="DisableDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('DisableDevice')"></p> 
        <input type="number" class="searchBarCreation" name="DisableDevice" id="DisableDevice" style="display: none;" placeholder="DisableDevice" title="DisableDevice">

        <p class="inputName" id="skillsDisguise" style="display: none;">Has Disguise <input id="DisguiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Disguise')"></p> 
        <input type="number" class="searchBarCreation" name="Disguise" id="Disguise" style="display: none;" placeholder="Disguise" title="Disguise">

        <p class="inputName" id="skillsEscapeArtist" style="display: none;">Has Escape Artist <input id="EscapeArtistOption" type="checkbox" placeholder="toggle" onclick="toggle('EscapeArtist')"></p> 
        <input type="number" class="searchBarCreation" name="EscapeArtist" id="EscapeArtist" style="display: none;" placeholder="EscapeArtist" title="EscapeArtist">

        <p class="inputName" id="skillsFly" style="display: none;">Has Fly <input id="FlyOption" type="checkbox" placeholder="toggle" onclick="toggle('Fly')"></p> 
        <input type="number" class="searchBarCreation" name="Fly" id="Fly" style="display: none;" placeholder="Fly" title="Fly">

        <p class="inputName" id="skillsHandleAnimal" style="display: none;">Has Handle Animal <input id="HandleAnimalOption" type="checkbox" placeholder="toggle" onclick="toggle('HandleAnimal')"></p> 
        <input type="number" class="searchBarCreation" name="HandleAnimal" id="HandleAnimal" style="display: none;" placeholder="HandleAnimal" title="HandleAnimal">

        <p class="inputName" id="skillsHeal" style="display: none;">Has Heal <input id="HealOption" type="checkbox" placeholder="toggle" onclick="toggle('Heal')"></p> 
        <input type="number" class="searchBarCreation" name="Heal" id="Heal" style="display: none;" placeholder="Heal" title="Heal">

        <p class="inputName" id="skillsIntimidate" style="display: none;">Has Intimidate <input id="IntimidateOption" type="checkbox" placeholder="toggle" onclick="toggle('Intimidate')"></p> 
        <input type="number" class="searchBarCreation" name="Intimidate" id="Intimidate" style="display: none;" placeholder="Intimidate" title="Intimidate">

        <p class="inputName" style="display: flex">Has Knowledge<input type="checkbox" id="skillsKnowledgeOption" placeholder="toggle" onclick="arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion','All'])"></p> 
        <div id="skillsKnowledgeContainer" style="display: none;" class="stairCase">

        <p class="inputName" id="skillsKnowledgeArcana" style="display: none;">Has Arcana <input id="ArcanaOption" type="checkbox" placeholder="toggle" onclick="toggle('Arcana')"></p> 
        <input type="number" class="searchBarCreation" name="Arcana" id="Arcana" style="display: none;" placeholder="Arcana" title="Arcana">

        <p class="inputName" id="skillsKnowledgeDungeoneering" style="display: none;">Has Dungeoneering <input id="DungeoneeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Dungeoneering')"></p> 
        <input type="number" class="searchBarCreation" name="Dungeoneering" id="Dungeoneering" style="display: none;" placeholder="Dungeoneering" title="Dungeoneering">

        <p class="inputName" id="skillsKnowledgeEngineering" style="display: none;">Has Engineering <input id="EngineeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Engineering')"></p> 
        <input type="number" class="searchBarCreation" name="Engineering" id="Engineering" style="display: none;" placeholder="Engineering" title="Engineering">

        <p class="inputName" id="skillsKnowledgeGeography" style="display: none;">Has Geography <input id="GeographyOption" type="checkbox" placeholder="toggle" onclick="toggle('Geography')"></p> 
        <input type="number" class="searchBarCreation" name="Geography" id="Geography" style="display: none;" placeholder="Geography" title="Geography">

        <p class="inputName" id="skillsKnowledgeHistory" style="display: none;">Has History <input id="HistoryOption" type="checkbox" placeholder="toggle" onclick="toggle('History')"></p> 
        <input type="number" class="searchBarCreation" name="History" id="History" style="display: none;" placeholder="History" title="History">

        <p class="inputName" id="skillsKnowledgeLocal" style="display: none;">Has Local <input id="LocalOption" type="checkbox" placeholder="toggle" onclick="toggle('Local')"></p> 
        <input type="number" class="searchBarCreation" name="Local" id="Local" style="display: none;" placeholder="Local" title="Local">

        <p class="inputName" id="skillsKnowledgeNature" style="display: none;">Has Nature <input id="NatureOption" type="checkbox" placeholder="toggle" onclick="toggle('Nature')"></p> 
        <input type="number" class="searchBarCreation" name="Nature" id="Nature" style="display: none;" placeholder="Nature" title="Nature">

        <p class="inputName" id="skillsKnowledgeNobility" style="display: none;">Has Nobility <input id="NobilityOption" type="checkbox" placeholder="toggle" onclick="toggle('Nobility')"></p> 
        <input type="number" class="searchBarCreation" name="Nobility" id="Nobility" style="display: none;" placeholder="Nobility" title="Nobility">

        <p class="inputName" id="skillsKnowledgePlanes" style="display: none;">Has Planes <input id="PlanesOption" type="checkbox" placeholder="toggle" onclick="toggle('Planes')"></p> 
        <input type="number" class="searchBarCreation" name="Planes" id="Planes" style="display: none;" placeholder="Planes" title="Planes">

        <p class="inputName" id="skillsKnowledgeReligion" style="display: none;">Has Religion <input id="ReligionOption" type="checkbox" placeholder="toggle" onclick="toggle('Religion')"></p> 
        <input type="number" class="searchBarCreation" name="Religion" id="Religion" style="display: none;" placeholder="Religion" title="Religion">

        <p class="inputName" id="skillsKnowledgeAll" style="display: none;">Has All <input id="AllOption" type="checkbox" placeholder="toggle" onclick="toggle('All')"></p> 
        <input type="number" class="searchBarCreation" name="All" id="All" style="display: none;" placeholder="All" title="All">
                
        </div>

        <p class="inputName" id="skillsLinguistics" style="display: none;">Has Linguistics <input id="LinguisticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Linguistics')"></p> 
        <input type="number" class="searchBarCreation" name="Linguistics" id="Linguistics" style="display: none;" placeholder="Linguistics" title="Linguistics">

        <p class="inputName" id="skillsPerception" style="display: none;">Has Perception <input id="PerceptionOption" type="checkbox" placeholder="toggle" onclick="toggle('Perception')"></p> 
        <input type="number" class="searchBarCreation" name="Perception" id="Perception" style="display: none;" placeholder="Perception" title="Perception">

        <p class="inputName" id="skillsPerform" style="display: none;">Has Perform <input id="PerformOption" type="checkbox" placeholder="toggle" onclick="toggle('Perform')"></p> 
        <input type="number" class="searchBarCreation" name="Perform" id="Perform" style="display: none;" placeholder="Perform" title="Perform">

        <p class="inputName" id="skillsProfession" style="display: none;">Has Profession <input id="ProfessionOption" type="checkbox" placeholder="toggle" onclick="toggle('Profession')"></p> 
        <div style="display: none;" id="Profession"><button type="button" id="professionButton" class="formButton" onclick="createDualInformation('Profession','Name','Value','Profession','Profession Name','Profession Value','text','number')">Add Profession</button>
        <div class="Profession" id="ProfessionArea"></div></div>

        <p class="inputName" id="skillsRide" style="display: none;">Has Ride <input id="RideOption" type="checkbox" placeholder="toggle" onclick="toggle('Ride')"></p> 
        <input type="number" class="searchBarCreation" name="Ride" id="Ride" style="display: none;" placeholder="Ride" title="Ride">

        <p class="inputName" id="skillsSenseMotive" style="display: none;">Has Sense Motive <input id="SenseMotiveOption" type="checkbox" placeholder="toggle" onclick="toggle('SenseMotive')"></p> 
        <input type="number" class="searchBarCreation" name="SenseMotive" id="SenseMotive" style="display: none;" placeholder="SenseMotive" title="SenseMotive">

        <p class="inputName" id="skillsSleightofHand" style="display: none;">Has Sleight of Hand <input id="SleightofHandOption" type="checkbox" placeholder="toggle" onclick="toggle('SleightofHand')"></p> 
        <input type="number" class="searchBarCreation" name="SleightofHand" id="SleightofHand" style="display: none;" placeholder="SleightofHand" title="SleightofHand">

        <p class="inputName" id="skillsSpellcraft" style="display: none;">Has Spellcraft <input id="SpellcraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Spellcraft')"></p> 
        <input type="number" class="searchBarCreation" name="Spellcraft" id="Spellcraft" style="display: none;" placeholder="Spellcraft" title="Spellcraft">

        <p class="inputName" id="skillsStealth" style="display: none;">Has Stealth <input id="StealthOption" type="checkbox" placeholder="toggle" onclick="toggle('Stealth')"></p> 
        <input type="number" class="searchBarCreation" name="Stealth" id="Stealth" style="display: none;" placeholder="Stealth" title="Stealth">

        <p class="inputName" id="skillsSurvival" style="display: none;">Has Survival <input id="SurvivalOption" type="checkbox" placeholder="toggle" onclick="toggle('Survival')"></p> 
        <input type="number" class="searchBarCreation" name="Survival" id="Survival" style="display: none;" placeholder="Survival" title="Survival">

        <p class="inputName" id="skillsSwim" style="display: none;">Has Swim <input id="SwimOption" type="checkbox" placeholder="toggle" onclick="toggle('Swim')"></p> 
        <input type="number" class="searchBarCreation" name="Swim" id="Swim" style="display: none;" placeholder="Swim" title="Swim">

        <p class="inputName" id="skillsUseMagicDevice" style="display: none;">Has Use Magic Device <input id="UseMagicDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('UseMagicDevice')"></p> 
        <input type="number" class="searchBarCreation" name="UseMagicDevice" id="UseMagicDevice" style="display: none;" placeholder="UseMagicDevice" title="UseMagicDevice">
        </div>
        </div>
        <div>
        <p class="Title">Infinite Extras:</p>
        <br><button type="button" class="formButton" onclick="createArrayChoice('sense','Sense','Sense')">Add Sense</button>
        <div class="sense" id="senseArea"></div>


        <br><button type="button" class="formButton" onclick="createArrayChoice('saveBonus','Save Bonus','Save Bonus Amount')">Add Save Bonus</button>
        <div class="saveBonus" id="saveBonusArea"></div>
        <p id="featCount"></p>
        <br><button type="button" id="featButton" class="formButton" onclick="createArrayChoice('feat','Feat','Feat Name')">Add feat</button>
        <div class="feat" id="featArea"></div>

        <br><button type="button" class="formButton" onclick="createDualInformation('cmdMod','Details','Bonus','cmdMod','CMD Modifier Details','CMD Modifier Value','text','number')">Add CMD Modifier</button>
        <div class="cmdMod" id="cmdModArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('language','Language','Language Name')">Add language</button>
        <div class="language" id="languageArea"></div>

        <br><button type="button" class="formButton" onclick="createArrayChoice('SQ','Special Quality','Special Quality Name')">Add Special Quality</button>
        <div class="SQ" id="SQArea"></div>

        </div>
        <br><input type="Submit" class="formButton" onclick="${submitButton}">
        </div></form>`
        break;
  }
  return forum;
}