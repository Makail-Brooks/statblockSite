// window.onload=function(){
// console.log(document.body);
// //document.getElementById("cols").addEventListener("click",changePage(element.name));
// }
window.onclick = function(event) {
//  console.log(event.target.id=="miscButton");
  var miscArray = ["#miscButton","dropdown-misc"]
  var dtArray = ["#defensiveButton","dropdown-defensive"]
  var otArray = ["#offensiveButton","dropdown-offensive"]
  var dropDownArrayList = [miscArray,dtArray,otArray];
  dropDownArrayList.forEach(element=>{
    if (!(event.target.closest(element[0]))) {
      var dropdowns = document.getElementsByClassName(element[1]);
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  })
}
var arrList = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Wizard','Alchemist','Cavalier','Gunslinger','Inquisitor','Magus','Omdura','Oracle','Shifter','Summoner','Witch','Vampire Hunter','Vigilante','Arcanist','Bloodrager','Brawler','Hunter','Investigator','Shaman','Skald','Slayer','Swashbuckler','Warpriest','Kineticist','Medium','Mesmerist','Occultist','Psychic','Spiritualist','Antipaladin','Ninja','Samurai','Adept','Aristocrat','Commoner','Expert','Warrior'];

let playerClassList = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Wizard','Alchemist','Cavalier','Gunslinger','Inquisitor','Magus','Omdura','Oracle','Shifter','Summoner','Witch','Vampire Hunter','Vigilante','Arcanist','Bloodrager','Brawler','Hunter','Investigator','Shaman','Skald','Slayer','Swashbuckler','Warpriest','Kineticist','Medium','Mesmerist','Occultist','Psychic','Spiritualist','Antipaladin','Ninja','Samurai'];
let npcClassList = ['Adept','Aristocrat','Commoner','Expert','Warrior'];
let spherePlayerClassList = ['Incanter'];
var lanList = ['Common','Abyssal','Celestial','Aboleth','Aklo','Aquan','Auran','Boggard','Cyclops','Dark Folk','Draconic','Drow Sign Language','Druidic','Dwarven','D\'ziriak','Elven','Giant','Gnoll','Gnome','Goblin','Grippli','Halfling','Ignan','Infernal','Necril','Orc','Protean','Rougarou','Sphinx','Sylvan','Tengu','Terran','Treant','Undercommon','Vegepygmy'];
var senseList = ['Darkvision','Blindsight','Low-light vision','Blindsense','Scent','Tremorsense','Greensight','Keen Scent','Lifesense','Mistsight','See In Darkness','Thoughtsense','X-ray Vision','Thermalsense','Spirit Sense','Touchsight'];
//put a space after value in a datalist option allows for the text to be displayed along with the value text
var classList = ['Adept','Alchemist','Antipaladin','Arcanist','Aristocrat','Barbarian','Bard','Bloodrager','Brawler','Cavalier','Cleric','Commoner','Druid','Expert','Fighter','Gunslinger','Hunter','Inquisitor','Investigator','Kineticist','Magus','Medium','Mesmerist','Monk','Ninja','Occultist','Omdura','Oracle','Paladin','Psychic','Ranger','Rogue','Samurai','Shaman','Shifter','Skald','Slayer','Sorcerer','Spiritualist','Summoner','Swashbuckler','Vampire Hunter','Vigilante','Warpriest','Warrior','Witch','Wizard']
var sphereClassList = ["Armorist","Incanter","Elementalist","Eliciter","Fey Adept","Hedgewitch","Mageknight","Shifter","Soul Weaver","Symbiat","Thaumaturge","Wraith","Agent","Courser","Envoy","Genius","Mastermind","Professional","Advisor","Conduit","Armiger","Blacksmith","Commander","Conscript","Savant","Scholar","Sentinel","Striker","Technician","Bravo","Crimson Dancer","Dissident","Prodigy","Sage","Theorist","Troubadour","Warden","Dragoon","Mountebank","Necros","Raveler","Reaper"];
var rangelessSense = ['scent','low-light vision','keen scent','lifesense','mistsight','see in darkness','x-ray vision'];
var movementList = ['Burrow','Climb','Walk','Fly','Swim'];
var featsWithInput=['Skill Focus','Weapon Focus'];
var racialModifiersList = ['Acrobatics','Appraise','Bluff','Climb','Craft','Diplomacy','Disable Device','Disguise','Escape Artist','Fly','HandleAnimal','Heal','Intimidate','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion','Linguistics','Perception','Perform','Profession','Ride','Sense Motive','Sleight of Hand','Spellcraft','Stealth','Survival','Swim','Use Magic Device'];
var spherePowerList = ['Alteration','Destruction'];
var sphereMightList = ['Artifice']
var sphereGuileList = ['Alchemy']
var alterationList = ['Adaptive Physicality [utility]','Additional Limbs'];
var destructionList = ['Admixture','Cascade Failure','Clinging Blast'];
var monsterAbilitiesList = ['Regeneration','Rend','Absurd Reactions','Ability Damage','Bleed','Blood Drain','Breath Weapon','Frightful Presence','Ability Drain','All-Around Vision','All-Knowing','All-Sensing','Amazing Initative','Amorphous','Amphibious','Apocalyptic Resurrection','Archdevil Traits','Attach','Block Sensing','Blood Rage','Burn','Capsize','Channel Resistance','Change Shape','Compression','Constrict','Curse','Curse of Lycanthropy','Demon Lord Traits','Disease','Display of Strength','Distraction','Dual Initiative',
  'Dragon Senses','Earth Glide','Echosense/Echosight','Emotion Aura','Empyreal Lord Traits','Energy Drain','Engulf','Entrap','Expanding Blindsense','Fast Healing','Fast Swallow','Fear','Ferocity','Fight Through Restriction','Formian Traits','Fortification','Freeze','Gaze','Grab','Heat','Hold Breath','Horseman Traits','Incorporeal','Instant Action','Jet','Legendary Concentration','Legendary Saving Throw','Light Blindness','Light Sensitivity','Lycanthropic Empathy','Material sense','Mental Static Aura',
  'Mythic Durability','Mythic Immortality','Mythic Magic','Mythic Power','Multiweapon Mastery','Natural Invisibility','Negative Energy Affinity','No Breath','Outside Time','Paralysis','Planar Knowledge','Plantbringer','Plant Traits','Poison','Poisonous Blood','Pounce','Powerful Blows','Powerful Charge','Primed Action','Psychic Magic','Psychic Resilience','Pull','Push','Qlippoth Lord Traits','Rake','Recuperation','Rock Catching','Rock Throwing','Smother','Sound Mimicry','Split','Stench','Strangle','Summon','Sunlight Powerlessness',
  'Superior Scent','Surge','Swallow Whole','Telepathy','Trample','Trip','Unbound Action','Undead Traits','Undersized Weapons','Unnatural Aura','Unstoppable','Water Breathing','Water Dependency','Web','Whirlwind'];
var meleeWeaponList = ['Morningstar','Dagger'];
var rangedWeaponList = ['Bow','Shortbow'];
meleeWeaponList.sort();
rangedWeaponList.sort();
lanList.sort();
senseList.sort();
featList.sort();
sphereFeatList.sort();
movementList.sort();
racialModifiersList.sort();
monsterAbilitiesList.sort();
classList.sort();
sphereClassList.sort();
classList.push('Custom');
var classJson = JSON.parse(classes);
var archetypeDetailsJson = JSON.parse(archetypeDetails);
var sphereClassArchetype = JSON.parse(sCArcs);
var monsterAbilitiesJson = JSON.parse(monsterAbilitiesInputs);
var classSpellListJson = JSON.parse(classSpellList);
var lanArray = [lanList,'language','Select'];
var senseArray = [senseList,'sense','Select'];
var featArray = [featList,'feat','Select'];
var movementArray = [movementList,'speed','Select'];
var racialModifierArray = [racialModifiersList,'racialMod','Select']
var classArray = [classList,'classes','Select Class'];
var monsterAbilitiesArray = [monsterAbilitiesList,'monsterAbilities','Select'];
var spherePowerArray = [spherePowerList,'spherePower','Select'];
var sphereMightArray = [sphereMightList,'sphereMight','Select'];
var sphereGuileArray = [sphereGuileList,'sphereGuile','Select'];
var dropDownArray =[lanArray,senseArray,featArray,movementArray,racialModifierArray,classArray,spherePowerArray,sphereMightArray,sphereGuileArray,monsterAbilitiesArray];
console.warn("this is how you get the name of the json key in abilities array")
// var idi  =2;
// if(typeof classJson.class[6].Abilities[idi] === 'object'){
//   console.log(Object.keys(classJson.class[6].Abilities[idi]).toString())
// }else{
//   console.log("not an object")
// }

fetch("./list.json")
    .then(response=>response.json())
    .then(jsonList=>loadSideNav(jsonList))


    
function loadSideNav(list){
  try{

    var NPCList = document.getElementById("cols");
    let index = -1;
    list.NPCs.forEach(element => {
        index++;
        let addNPCs = document.createElement("div");
        addNPCs.classList.add("cols");
        let barName = "";
        if(element.name!="Home"){
          barName+="-"
        }
        barName+=`${element.name}\n(${element.system})`;
        addNPCs.innerHTML = `<a href=${element.path}?NPC=${index} onclick="changePage('${index}','${element.name}','${element.system}')" onauxclick="alternativeClick('${index}','${element.name}','${element.system}')"> <p class="NPCs"> ${barName}</p> </a></div>`;
        NPCList.appendChild(addNPCs);
        
    });
  }catch(err){

  }
        //cName = list.NPCs[i].name;
    
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
        //cName = list.NPCs[i].name;
    
}

function systemPage(sys){
  sessionStorage.setItem("system",sys);
}

function createNPC(){
  let cinfo ={"path":"./NPCDisplay.html"};
  let cname = document.getElementById("NPCName").value;
  createNPCJson(cinfo);
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
//editNPCstuff
  function completeNPCEdit(){
  let cinfo ={"path":"./NPCDisplay.html"};
  let cname = document.getElementById("NPCName").value;
  let system = sessionStorage.getItem("system");
  createNPCJson(cinfo);
  let entry = sessionStorage.getItem("NPC");
  let param = new URLSearchParams(window.location.search);
  entry = param.get("NPC");
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
  window.location.href = `./NPCDisplay.html?NPC=${id}`;
}

function switchToCreation(list,cname){
  let len = list.NPCs.length;
  sessionStorage.setItem("NPC",len);
  let system = sessionStorage.getItem("system");
  callFetch(len,cname,system);
  window.location.href = `./NPCDisplay.html?NPC=${len}`;

}






function search(){
  let input, filter;
  input = document.getElementById("entrySearch");
  filter = input.value.toLocaleLowerCase();
  var list = document.getElementById("cols");
  let listlength = list.getElementsByTagName("div").length;
  for(let i=0;i<listlength;i++){
      let a = list.getElementsByTagName("div")[i].getElementsByTagName("a")[0];
      if(a.innerHTML.toLocaleLowerCase().indexOf(filter)>-1){
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
      let path = "./NPCDisplay.html";
      response.pages.forEach(element => {
          let addVisits = document.createElement("div");
          addVisits.classList.add("rows");
          let barName = ""
          barName+=`${element.name}\n(${element.system})`;
          index = element.index;
          addVisits.innerHTML = `<div>
          <a href=${path}?NPC=${index} class="LastVisit" onclick="changePage('${index}','${element.name}','${element.system}')" onauxclick="alternativeClick('${index}','${element.name}','${element.system}')"> 
          <p > ${barName}</p> 
          </a>
          </div>`;
          visted.appendChild(addVisits);
          
   });
  }catch(err){

  }
}

function alternativeClick(index,name,system){
  sessionStorage.setItem("NPC",index);
  callFetch(index,name,system);
}

function changePage(index,name,system){
  sessionStorage.setItem("NPC",index);
  callFetch(index,name,system);
}
function openNav() {
  document.getElementById("sideNav").style.width = "300px";
  // document.getElementById("offClick").style.width = "90%";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  // document.getElementById("offClick").style.width = "0";
}
function goHome(){
     window.location.href = "./index.html";
}

function create(){
  window.location.href = "./creationChoice.html";
}

function createNPCForm(){
  window.location.href = "./creationNPC.html";
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
  let entry = sessionStorage.getItem("NPC");
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
function editNPC(){

  fetch("./list.json")
  .then(response=>response.json())
  .then(givenRes=>switchToEdit(givenRes))
}
/**
 * changes page to edit NPC page and stores needed information
 * @param {json} json 
 */
function switchToEdit(json){
  let id = sessionStorage.getItem("NPC");
  let param = new URLSearchParams(window.location.search);
  id = param.get("NPC");
  let sys = json.NPCs[id].system;
 sessionStorage.setItem("system",sys);
 window.location.href = `./NPCEdit.html?NPC=${id}`;

}
/**
 * simply goes to information page
 */
function goToInformation(){
  window.location.href = "./entryKeys.html";
}

/**sends page to display of NPC */
function returnToNPC(){
  let param = new URLSearchParams(window.location.search);
  id = param.get("NPC");
  window.location.href = `./NPCDisplay.html?NPC=${id}`;
}
var last_combat = "defensiveTraits"
var lastSphereSelect = "selectionPower"
function displayChange(section){
    //   if(section=="offensiveTraits"||section=="defensiveTraits"){
    //   last_combat=section;
    // }
    let subSetOption = ["bonusACOption","resistanceOption","defensiveBonusOption","defensiveMiscOption","specialAttacksOption","specialAbilityOption","auraOption","meleeOption","rangeOption"];
    let combatList = ["combatTraits","bonusACOption","resistanceOption","defensiveBonusOption","defensiveMiscOption","specialAttacksOption","specialAbilityOption","auraOption","meleeOption","rangeOption"];
    let sphereListhotbar = ["spheres","selectionPower","selectionMight","selectionGuile"];
    document.getElementById("main").style.display = section=="main"? "flex":"none";
    document.getElementById("combatTraits").style.display = combatList.includes(section)? "block":"none";
    document.getElementById("classesSec").style.display = section=="class"? "flex":"none";
    document.getElementById("skills").style.display = section=="skills"? "block":"none";
    document.getElementById("spell").style.display = section=="spells"? "flex":"none";
    // document.getElementById("other").style.display = section=="other"? "flex":"none";
    document.getElementById("sensesSection").style.display = section=="senseSection"? "block":"none";
    document.getElementById("languageSection").style.display = section=="languageSection"? "block":"none";
    document.getElementById("gearSection").style.display = section=="gearSection"? "block":"none";
    document.getElementById("racialModSection").style.display = section=="racialModSection"? "block":"none";
    document.getElementById("combatSection").style.display = combatList.includes(section)? "block":"none";
    document.getElementById("MonsterAbilitiesSection").style.display = section =="MonsterAbilitiesSection"? "flex":"none";
    if(subSetOption.includes(section)){
      document.getElementById("bonusACOption").style.display = section=="bonusACOption"? "block":"none";
      document.getElementById("resistanceOption").style.display = section=="resistanceOption"? "block":"none";
      document.getElementById("defensiveBonusOption").style.display = section=="defensiveBonusOption"? "flex":"none";
      document.getElementById("specialAttacksOption").style.display = section=="specialAttacksOption"? "block":"none";
      document.getElementById("specialAbilityOption").style.display = section=="specialAbilityOption"? "block":"none";
      document.getElementById("auraOption").style.display = section=="auraOption"? "block":"none";
      document.getElementById("meleeOption").style.display = section=="meleeOption"? "block":"none";
      document.getElementById("rangeOption").style.display = section=="rangeOption"? "block":"none";
    }
    document.getElementById("SQSection").style.display = section=="SQSection"? "block":"none";
    document.getElementById("feats").style.display = section=="feats"? "block":"none";
    document.getElementById("spheres").style.display = sphereListhotbar.includes(section)? "block":"none";
    if(section=="spheres"){
      section=lastSphereSelect;
    }
    if(section=="selectionGuile"||section=="selectionMight"||section=="selectionPower"){
      lastSphereSelect = section;      
    }
    document.getElementById("selectionPower").style.display = section=="selectionPower"? "block":"none";
    document.getElementById("selectionMight").style.display = section=="selectionMight"? "block":"none";
    document.getElementById("selectionGuile").style.display = section=="selectionGuile"? "block":"none";
    document.getElementById("chosenClasses").style.display = section=="chosenClasses"? "flex":"none";
//    document.getElementById("main").style.display = document.getElementById("main").style.display=="block"?"none":"block";
}



function getChoiceDrop(system){
  let choice = ""
  switch(system){
    case "pathfinder":
      choice = `<div>
    <label class="inputName" for="NPCChoice">NPC Type:</label>
    <select class="searchBarCreation" name="NPCChoice" id="NPCChoice">
    <option>Monster</option>
    <option>NPC</option>
    </select>
    </div>`;
    break;
    default:
      break;
  }
  return choice;
}



const observer = new MutationObserver(function(MutationList,config){
  for(const mutation of MutationList){
    if(mutation.type==='childList'){
     setFeatsAvailable();
     updateFeatDetails();
     classListener();
     setSkillPoints();
     doAttacksDropdown();
    }
  }
})


function notInputFeat(input){
  let inputlessFeat = featList.filter(item=>!featsWithInput.includes(item));
  inputlessFeat = inputlessFeat.map(element=>element.toLocaleLowerCase());
  if(inputlessFeat.includes(input.toLocaleLowerCase())){
    return true;
  }else{
    return false;
  }
}



//needs to be reworked to use feat names as "call"


var baseJson ={
 "generic":{
  "name":"Generic",
  "prerequisites":{
    "stat":{
      "str":null,
      "dex":null,
      "con":null,
      "int":null,
      "wis":null,
      "cha":null
    },
    "class":null,
    "classFeature":[null],
    "alignment":null,
    "level":null,
    "skill":[null],
    "feats":[null],
    "race":null,
    "misc":[null],
    "benefit":""
  }
}}


function createMainForm(sys){
  document.getElementById("combatTraits").innerHTML=`<div class="doFlex">
        <div class="dropdown">
        <button type="button" class="button-blue" id="defensiveButton" onclick="dropdownOptions('DT')">Defensive Abilities</button>
        <div id="DTOptions" class="dropdown-defensive">
        <a class="object" onclick="displayChange('bonusACOption')">Armor</a>
        <a class="object" onclick="displayChange('resistanceOption')">Resistance</a>
        <a class="object" onclick="displayChange('defensiveBonusOption')">Defensive Bonuses</a>
        </div>
        </div>
        <div class="dropdown">
        <button type="button" class="button-red" id="offensiveButton" onclick="dropdownOptions('OT')">Offensive Abilities</button>
        <div id="OTOptions" class="dropdown-offensive">
        <a class="object" onclick="displayChange('specialAttacksOption')">Special Attack</a>
        <a class="object" onclick="displayChange('meleeOption')">Melee Attack</a>
        <a class="object" onclick="displayChange('rangeOption')">Ranged Attack</a>
        <a class="object" onclick="displayChange('auraOption')">Aura</a>
        <a class="object" onclick="displayChange('specialAbilityOption')">Special Ability</a>
        </div>
        </div>
        `;
}

/**
 * creates form for site to use
 * @param {string} sys
 * @param {string} forumType  
 * @returns string
 */
function getForum(sys,forumType){
  let submitButton = "createNPC()";
  if(forumType==="edit"){
    submitButton = "completeNPCEdit()";
  }
  let forum = ""
  switch(sys){
    case "pathfinder":
          forum = `<form id="forum">
        <div class="creationDisplay">
        <div class="creationSetup" id="main">
        <div>
        <label class="inputName" for="NPCName">NPC Name:</label><br>
        <input type="text" class="searchBarCreation" name="NPCName" id="NPCName" placeholder="Name" title="NPC Name" value="Mimic"><br>

        <label class="inputName" for="NPCType">NPC Type:</label><br>
        <select class="searchBarCreation" name="NPCType" id="NPCType" placeholder="Type" title="NPC Type"><br>
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
        <label class="inputName" for="NPCTitle">NPC Title:</label><br>
        <input type="text" class="searchBarCreation" name="NPCTitle" id="NPCTitle" placeholder="Title" title="NPC Title" value="Mimic"><br>

        <label class="inputName" for="NPCCR">NPC CR:</label><br>
        <select class="searchBarCreation" name="NPCCR" id="NPCCR" placeholder="CR" title="NPC CR">
        <option>1/8</option>
        <option>1/6</option>
        <option>1/4</option>
        <option>1/3</option>
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
        <div id="monsterHD">
        <label class="inputName" for="MonsterLevel">NPC Level:</label><br>
        <input type="number" min="1" class="searchBarCreation" name="MonsterLevel" id="MonsterLevel" placeholder="Level" title="NPC Level" value="7"><br>

        <label class="inputName" for="NPCHitDice">NPC Hit Dice:</label><br>
        <select class="searchBarCreation" name="NPCHitDice" id="NPCHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        </select><br>
        <label class="inputName" for="NPCHitDice">NPC HP Gain Rate:</label><br>
        <select class="searchBarCreation" name="NPCHitDiceRate" id="NPCHitDiceRate">
        <option>Monster</option>
        <option>Player</option>
        </select><br>
        <p id="calcHealth"></p>
        <p class="inputName">Set HP Information <input type="checkbox" id="setHPInformationOption" placeholder="toggle" onclick="toggle('setHPInformation')"></p>
        <div id="setHPInformation" style="display: none;" class="stairCase">
        <label class="inputName" for="NPCSetHP">Set NPC HP:</label><br>
        <input type="text" class="searchBarCreation" name="NPCSetHP" id="NPCSetHP" placeholder="SetHP" title="NPC SetHP"><br>
        <label class="inputName" for="NPCSetHD">Set NPC hitDice:</label><br>
        <input type="text" class="searchBarCreation" name="NPCSetHD" id="NPCSetHD" placeholder="SetHD" title="NPC SetHD"><br>
        </div>
        </div>
        </div>
        <div>
        <div>
        <label class="inputName" for="speedTemp">NPC Speed:</label><br>
        <div class=dropDownAddition>
        <div class="speed" id="speedArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('speed',true,'Speed'),toggleInput('ManeuverabilitySection','none')">Add speed</button>
        </div>
        <div id="speedInput" style="display:block;">
        <input type="number" min="1" class="searchBarCreation" name="speedTemp" id="speedTemp" placeholder="Insert Speed Here" title="SpeedTemp">
        </div>
        <div id="ManeuverabilitySection" style="display:none">
        <label class="inputName" for="NPCFlightManeuverability">Maneuverability:</label><br>
        <select class="searchBarCreation" name="NPCFlightManeuverability" id="NPCFlightManeuverability">
        <option>Clumsy</option>
        <option>Poor</option>
        <option selected>Average</option>
        <option>Good</option>
        <option>Perfect</option>
        </select><br>
        </div>
        <div id="speedChoice"></div>
        </div>
        <br>
        <label class="inputName" for="NPCStr">NPC Stength:</label><br>
        <input type="number" class="searchBarCreation" name="NPCStr" id="NPCStr" placeholder="Str" title="NPC Str" value=19><br>

        <label class="inputName" for="NPCDex">NPC Dexterity:</label><br>
        <input type="number" class="searchBarCreation" name="NPCDex" id="NPCDex" placeholder="Dex" title="NPC Dex" value=12><br>

        <label class="inputName" for="NPCCon">NPC Constitution:</label><br>
        <input type="number" class="searchBarCreation" name="NPCCon" id="NPCCon" placeholder="Con" title="NPC Con" value=17><br>

        <label class="inputName" for="NPCInt">NPC Intelligence:</label><br>
        <input type="number" class="searchBarCreation" name="NPCInt" id="NPCInt" placeholder="Int" title="NPC Int" value=10><br>

        <label class="inputName" for="NPCWis">NPC Wisdom:</label><br>
        <input type="number" class="searchBarCreation" name="NPCWis" id="NPCWis" placeholder="Wis" title="NPC Wis" value=13><br>

        <label class="inputName" for="NPCCha">NPC Charisma:</label><br>
        <input type="number" class="searchBarCreation" name="NPCCha" id="NPCCha" placeholder="Cha" title="NPC Cha" value=10><br>

        </div>
        <div>
        <div id="monsterProgression">
        <label class="inputName" for="NPCBaB">NPC BaB:</label><br>
        <select class="searchBarCreation" name="NPCBaB" id="NPCBaB">
        <option>Fast</option>
        <option Selected>Medium</option>
        <option>Slow</option>
        </select><br>

        <label class="inputName" for="NPCSkillProgression">NPC Skill Progression:</label><br>
        <select class="searchBarCreation" name="NPCSkillProgression" id="NPCSkillProgression">
        <option>High</option>
        <option Selected>Middle</option>
        <option>Low</option>
        </select><br>

        <label class="inputName" for="NPCFort">NPC Fort Bonus:</label><br>
        <select class="searchBarCreation" name="NPCFort" id="NPCFort">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="NPCRef">NPC Ref Bonus:</label><br>
        <select class="searchBarCreation" name="NPCRef" id="NPCRef">
        <option>Good</option>
        <option>Bad</option>
        </select><br>

        <label class="inputName" for="NPCWill">NPC Will Bonus:</label><br>
        <select class="searchBarCreation" name="NPCWill" id="NPCWill">
        <option>Good</option>
        <option>Bad</option>
        </select><br>
        </div>
        <label class="inputName" for="NPCAlignment">NPC Alignment:</label><br>
        <select class="searchBarCreation" name="NPCAlignment" id="NPCAlignment">
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

        <label class="inputName" for="NPCSize">NPC Size:</label><br>
        <select class="searchBarCreation" name="NPCSize" id="NPCSize">
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
        <p class="inputName" id="isitlong" style="display:none;">Long?<input type="checkbox" id="isItLongOption" placeholder="toggle"></p>
        <div id="choiceTabs">
        <p class="inputName" id="hasSkills">Has Skills<input type="checkbox" id="usesSkillOption" placeholder="toggle" onclick="adjustDisplay('Skill')"></p>
        <p class="inputName" id="usesSpells">Has Spells<input type="checkbox" id="usesSpellOption" placeholder="toggle" onclick="adjustDisplay('Spell')"></p>
        </div>
        <p class="inputName" id="usesSpheres">Uses Spheres of Power<input type="checkbox" id="usesSphereOption" placeholder="toggle" onclick="adjustDisplay('Sphere')"></p>
        </div>
        </div>
        <div class="creationLevel" id="combatTraits" style="display:none;">
        </div>
        <div id="combatSection" style="display:none">
        <div class="creationSetup">
        <div id="bonusACOption" style="display:block" class="display-blue">

        <p class="inputName" id="bonusACArmor" style="display: block;">Has Armor <input id="armorOption" type="checkbox" placeholder="toggle" onclick="toggle('armor')"></p> 
        <input type="number" class="searchBarCreation" name="armor" id="armor" style="display: none;" placeholder="armor" title="armor">
        
        <p class="inputName" id="bonusACDeflection" style="display: block;">Has Deflection <input id="deflectionOption" type="checkbox" placeholder="toggle" onclick="toggle('deflection')"></p> 
        <input type="number" class="searchBarCreation" name="deflection" id="deflection" style="display: none;" placeholder="deflection" title="deflection">

        <p class="inputName" id="bonusACDodge" style="display: block;">Has Dodge <input id="dodgeOption" type="checkbox" placeholder="toggle" onclick="toggle('dodge')"></p> 
        <input type="number" class="searchBarCreation" name="dodge" id="dodge" style="display: none;" placeholder="dodge" title="dodge">

        <p class="inputName" id="bonusACShield" style="display: block;">Has Shield <input id="shieldOption" type="checkbox" placeholder="toggle" onclick="toggle('shield')"></p> 
        <input type="number" class="searchBarCreation" name="shield" id="shield" style="display: none;" placeholder="shield" title="shield">

        <p class="inputName" id="bonusACNatural" style="display: block;">Has Natural <input id="naturalOption" type="checkbox" placeholder="toggle" onclick="toggle('natural')"></p> 
        <input type="number" class="searchBarCreation" name="natural" id="natural" style="display: none;" placeholder="natural" title="natural">

        <p class="inputName" id="bonusACExtra" style="display: block;">Has Extra Bonuses <input id="extraBonusesOption" type="checkbox" placeholder="toggle" onclick="toggle('extraBonuses')"></p> 

        <div style="display: none;" id="extraBonuses"><button type="button" class="formButton" onclick="createDualInformation('extra','name','amount','Extra Bonus','Bonus Name','Bonus Amount','text','number')">Add Extra Bonuses</button>
        <div class="extra" id="extraArea"></div></div>
        </div>
        <div id="resistanceOption" style="display: none;" class="display-blue">

        <p class="inputName" id="defensiveTraitsDA" style="display: block;">Has Defensive Abilities <input id="DAOption" type="checkbox" placeholder="toggle" onclick="toggle('DA')"></p> 
        <textarea class="searchBarCreation" name="DA" id="DA" style="display: none;" placeholder="Defensive Ability" title="DA"></textarea>
        
        <p class="inputName" id="defensiveTraitsDR" style="display: block;">Has Damage Reduction <input id="DROption" type="checkbox" placeholder="toggle" onclick="toggle('DR')"></p> 
        <textarea class="searchBarCreation" name="DR" id="DR" style="display: none;" placeholder="DR" title="DR"></textarea>

        <p class="inputName" id="defensiveTraitsImmune" style="display: block;">Has Immunities <input id="ImmuneOption" type="checkbox" placeholder="toggle" onclick="toggle('Immune')"></p> 
        <textarea class="searchBarCreation" name="Immune" id="Immune" style="display: none;" placeholder="Immune" title="Immune"></textarea>

        <p class="inputName" id="defensiveTraitsResist" style="display: block;">Has Energy Resistances <input id="ResistOption" type="checkbox" placeholder="toggle" onclick="toggle('Resist')"></p> 
        <textarea class="searchBarCreation" name="Resist" id="Resist" style="display: none;" placeholder="Resist" title="Resist"></textarea>

        <p class="inputName" id="defensiveTraitsSR" style="display: block;">Has SR <input id="SROption" type="checkbox" placeholder="toggle" onclick="toggle('SR')"></p> 
        <input type="number" min="1" class="searchBarCreation" name="SR" id="SR" style="display: none;" placeholder="SR" title="SR">
        
        <p class="inputName">Has Weakness<input type="checkbox" id="weaknessOption" placeholder="toggle" onclick="toggle('weakness')"></p>
        <textarea class="searchBarCreation" name="weakness" id="weakness" style="display: none;" placeholder="Weakness" title="weakness"></textarea>
        </div>

        <div id="defensiveBonusOption" style="display:none;">
        <br>
        <div>
        <button type="button" class="formButton" onclick="createArrayChoice('saveBonus','Save Bonus','Save Bonus Amount')">Add Save Bonus</button>
        <div class="saveBonus" id="saveBonusArea"></div>
        </div>
        <div>
        <button type="button" class="formButton" onclick="createDualInformation('cmdMod','Details','Bonus','cmdMod','CMD Modifier Details','CMD Modifier Value','text','number')">Add CMD Modifier</button>
        <div class="cmdMod" id="cmdModArea"></div>
        </div>


        </div>
        </div>



        <div class="creationSetup">
        <div id="specialAttacksOption" style="display:none;">
        <textarea class="searchBarCreation" name="special_attacks" id="special_attacks" style="display: block;" placeholder="Special Attacks" title="special_attacks"></textarea>
        </div>
        <div id="specialAbilityOption" style="display:none;">
        <button type="button" class="formButton" onclick="createDualInformation('SpecialAbility','Name','Details','Special Ability','Special Ability Name','Special Ability Details','text','text',true,true,true,true)">Add Special Ability</button>
        <div class="SpecialAbility" id="specialAbilityArea"></div>
        </div>
        <div id="auraOption" style="display:none;">
        <button type="button" class="formButton" onclick="createDualInformation('aura','Aura','Radius','Aura','Aura','Radius','text','number',true,false,false,false,true);">Add Aura</button>
        <div class="aura" id="auraArea"></div>
        </div>
        <div id="meleeOption" style="display:none;">
        <div id="melee">
        <select id="meleeSelection" class="searchBarCreation">
        <option>Weapon</option>
        <option>Custom</option>
        </select><br>
        <div style="display:flex;">
        <div id="meleeWeaponSelection"></div>
        <input type="text" class="searchBarCreation" name="material" id="meleeMaterial" style="display: none;" placeholder="Weapon Material" title="material">
        </div>
        <button type="button" class="formButton" onclick="createAttackInformation('meleeAttack','Melee Attack Name','Melee Attack Dice Count')">Add Melee Attack</button>
        <div class="meleeAttack" id="meleeAttackArea"></div></div>
        </div>
        <div id="rangeOption" style="display:none;">
        <div id="range">
        <select id="rangeSelection" class="searchBarCreation">
        <option>Weapon</option>
        <option>Custom</option>
        </select><br>
        <div id="rangeWeaponSelection"></div>
        <button type="button" class="formButton" onclick="createAttackInformation('rangeAttack','Range Attack Name','Range Attack Dice Count')">Add Range Attack</button>
        <div class="rangeAttack" id="rangeAttackArea"></div></div>
        </div>
        </div>
        </div>
        </div>


        <div class="creationDisplay">
        <div id="sensesSection" style="display: none;">
        <br>
        <div class=dropDownAddition>
        <div class="sense" id="senseArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('sense',true,'Vision Range','number')">Add sense</button>
        </div>
        <div id="senseInput" style="display:block;">
        <input type="number" min="1" class="searchBarCreation" name="senseTemp" id="senseTemp" placeholder="Insert Vision Range Here" title="SenseTemp"> <label class="inputName">ft.</label>
        </div>
        <div id="senseChoice"></div>
        </div>
        <br>
        <div id="gearSection" style="display: none;">
        <input type="text" class="searchBarCreation" name="gear" id="gear" placeholder="Gear" title="gear">
        </div>
        <div id="languageSection" style="display: none;">
        <br>
        <div class=dropDownAddition>
        <div class="language" id="languageArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('language')">Add language</button>
        </div>
        <div id="languageChoice"></div>
        </div>
        <div id="racialModSection" style="display: none;">
        <br>
        <div>
        <div class=dropDownAddition>
        <div class="racialMod" id="racialModArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('racialMod',true,'Racial Modifer','number')">Add racialMod</button>
        </div>
        <div id="racialModInput" style="display:block;">
        <input type="number" min="1" class="searchBarCreation" name="racialModTemp" id="racialModTemp" placeholder="Insert racial modifier Here" title="racialTemp">
        </div>
        <div id="racialModChoice"></div>
        </div>
        </div>
        <div id="SQSection" style="display: none;">
        <br>
        <button type="button" class="formButton" onclick="createArrayChoice('SQ','Special Quality','Special Quality Name')">Add Special Quality</button>
        <div class="SQ" id="SQArea"></div>
        </div>
        <div id="MonsterAbilitiesSection" style="display:none;">
        <div id="blockZone" style="display:block;">
        <div class=dropDownAddition>
        <div class="monsterAbilities" id="monsterAbilitiesArea"></div>
        <button type="button" class="formButton" onclick="addVariableDropdownchoice('monsterAbilities')">Add Monster Ability</button>
        </div>
        <div id="monsterAbilitiesInput">
        </div>
        </div>
        <div id="monsterAbilitiesChoice"></div>
        </div>
        </div>

        <div id="chosenClasses" class="creationDisplayBlock" style="display:none;">
        <div style="display:block;">
        <h1 class="inputName">Classes:</h1>
        <div class="chosenClasses" id="chosenClassesArea"></div>
        <div id="archetypesListArea" style="display:flex;"></div>
        <div><br><h4 class="inputName" id="archetypeDetails">Archetype Details:</h4></div>
        </div>
        <div id="selectedArchetypes"><h1 class="inputName">Current Archetypes:</h1></div>
        </div>

        <div class="creationDisplayBlock" id="classesSec" style="display: none;">
        <div id="classSelection">
        <p class="inputName" id="classHealth"></p>
        
        <div class=dropDownAddition>
        <div class="class" id="classesArea"></div>
        <button type="button" class="formButton" onclick="addDropdownchoice('classes',true,'Level','number',true)">Add class</button>
        </div>
        <div id="customClasses">
        <input type="text" class="searchBarCreation" name="customClasses" placeholder="Classes Name" title="customClasses">
        <input type="text" class="searchBarCreation" name="temporaryBAB" placeholder="Temporary Custom Class BAB" title="customBAB">
        
        </div>
        <div id="classesInput" style="display:block;">
        <input type="number" min="1" class="searchBarCreation" name="classesTemp" id="classesTemp" placeholder="Insert Level" title="classesTemp">
        </div>
        </div>
        <div id="classDisplay">
        <label class="inputName">Classes:</label>
        <button class="button classFeatureButton" type="button" onClick="features('abilities')">Class Feature Options</button>
        <br>
        <div id="classesChoice"></div>
        </div>
        <div class="gridSection" style="display:none;" id="abilitiesChoice">
        <div>
        <button class="button return" type="button" onClick="features('return')">&larr; Return to Classes</button>
        </div>
        <br>
        <br>
        <div class="gridPart"><h2>Class Abilities:</h2></div>
        </div>
        </div>

        <div id="skills" style="display:none;" class="creationDisplay">
        
        <div id="skillsContainer" class="stairCase-yellow">
        <p id="skillPoints"></p>
        <p class="inputName" id="skillsAcrobatics" >Has Acrobatics <input id="AcrobaticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Acrobatics')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Acrobatics" id="Acrobatics" style="display: none;" placeholder="Acrobatics" title="Acrobatics">
        
        <p class="inputName" id="skillsAppraise" >Has Appraise <input id="AppraiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Appraise')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Appraise" id="Appraise" style="display: none;" placeholder="Appraise" title="Appraise">

        <p class="inputName" id="skillsBluff" >Has Bluff<input id="BluffOption" type="checkbox" placeholder="toggle" onclick="toggle('Bluff')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Bluff" id="Bluff" style="display: none;" placeholder="Bluff" title="Bluff">

        <p class="inputName" id="skillsClimb" >Has Climb <input id="ClimbOption" type="checkbox" placeholder="toggle" onclick="toggle('Climb')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Climb" id="Climb" style="display: none;" placeholder="Climb" title="Climb">

        <p class="inputName" id="skillsCraft" >Has Craft <input id="CraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Craft')"></p> 
        <div style="display: none;" id="Craft"><button type="button" id="craftButton" class="formButton" onclick="createDualInformation('Craft','Name','Value','Craft','Craft Name','Craft Value','text','number')">Add Craft</button>
        <div class="Craft" id="CraftArea"></div></div>

        <p class="inputName" id="skillsDiplomacy" >Has Diplomacy <input id="DiplomacyOption" type="checkbox" placeholder="toggle" onclick="toggle('Diplomacy')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Diplomacy" id="Diplomacy" style="display: none;" placeholder="Diplomacy" title="Diplomacy">
        
        <p class="inputName" id="skillsDisableDevice" >Has Disable Device <input id="DisableDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('DisableDevice')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="DisableDevice" id="DisableDevice" style="display: none;" placeholder="DisableDevice" title="DisableDevice">

        <p class="inputName" id="skillsDisguise" >Has Disguise <input id="DisguiseOption" type="checkbox" placeholder="toggle" onclick="toggle('Disguise')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Disguise" id="Disguise" style="display: none;" placeholder="Disguise" title="Disguise">

        <p class="inputName" id="skillsEscapeArtist" >Has Escape Artist <input id="EscapeArtistOption" type="checkbox" placeholder="toggle" onclick="toggle('EscapeArtist')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="EscapeArtist" id="EscapeArtist" style="display: none;" placeholder="EscapeArtist" title="EscapeArtist">

        <p class="inputName" id="skillsFly" >Has Fly <input id="FlyOption" type="checkbox" placeholder="toggle" onclick="toggle('Fly')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Fly" id="Fly" style="display: none;" placeholder="Fly" title="Fly">

        <p class="inputName" id="skillsHandleAnimal" >Has HandleAnimal <input id="HandleAnimalOption" type="checkbox" placeholder="toggle" onclick="toggle('HandleAnimal')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="HandleAnimal" id="HandleAnimal" style="display: none;" placeholder="HandleAnimal" title="HandleAnimal">

        <p class="inputName" id="skillsHeal" >Has Heal <input id="HealOption" type="checkbox" placeholder="toggle" onclick="toggle('Heal')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Heal" id="Heal" style="display: none;" placeholder="Heal" title="Heal">

        <p class="inputName" id="skillsIntimidate" >Has Intimidate <input id="IntimidateOption" type="checkbox" placeholder="toggle" onclick="toggle('Intimidate')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Intimidate" id="Intimidate" style="display: none;" placeholder="Intimidate" title="Intimidate">

        <p class="inputName" style="display: flex">Has Knowledge<input type="checkbox" id="skillsKnowledgeOption" placeholder="toggle" onclick="arrayToggle('skillsKnowledge',['Container','Arcana','Dungeoneering','Engineering','Geography','History','Local','Nature','Nobility','Planes','Religion','All'])"></p> 
        <div id="skillsKnowledgeContainer"  class="stairCase">

        <p class="inputName" id="skillsKnowledgeAll" style="display: block;">Has All <input id="AllOption" type="checkbox" placeholder="toggle" onclick="toggle('All')"></p> 

        <p class="inputName" id="skillsKnowledgeArcana" style="display: none;">Has Arcana <input id="ArcanaOption" type="checkbox" placeholder="toggle" onclick="toggle('Arcana')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Arcana" id="Arcana" style="display: none;" placeholder="Arcana" title="Arcana">

        <p class="inputName" id="skillsKnowledgeDungeoneering" style="display: none;">Has Dungeoneering <input id="DungeoneeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Dungeoneering')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Dungeoneering" id="Dungeoneering" style="display: none;" placeholder="Dungeoneering" title="Dungeoneering">

        <p class="inputName" id="skillsKnowledgeEngineering" style="display: none;">Has Engineering <input id="EngineeringOption" type="checkbox" placeholder="toggle" onclick="toggle('Engineering')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Engineering" id="Engineering" style="display: none;" placeholder="Engineering" title="Engineering">

        <p class="inputName" id="skillsKnowledgeGeography" style="display: none;">Has Geography <input id="GeographyOption" type="checkbox" placeholder="toggle" onclick="toggle('Geography')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Geography" id="Geography" style="display: none;" placeholder="Geography" title="Geography">

        <p class="inputName" id="skillsKnowledgeHistory" style="display: none;">Has History <input id="HistoryOption" type="checkbox" placeholder="toggle" onclick="toggle('History')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="History" id="History" style="display: none;" placeholder="History" title="History">

        <p class="inputName" id="skillsKnowledgeLocal" style="display: none;">Has Local <input id="LocalOption" type="checkbox" placeholder="toggle" onclick="toggle('Local')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Local" id="Local" style="display: none;" placeholder="Local" title="Local">

        <p class="inputName" id="skillsKnowledgeNature" style="display: none;">Has Nature <input id="NatureOption" type="checkbox" placeholder="toggle" onclick="toggle('Nature')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Nature" id="Nature" style="display: none;" placeholder="Nature" title="Nature">

        <p class="inputName" id="skillsKnowledgeNobility" style="display: none;">Has Nobility <input id="NobilityOption" type="checkbox" placeholder="toggle" onclick="toggle('Nobility')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Nobility" id="Nobility" style="display: none;" placeholder="Nobility" title="Nobility">

        <p class="inputName" id="skillsKnowledgePlanes" style="display: none;">Has Planes <input id="PlanesOption" type="checkbox" placeholder="toggle" onclick="toggle('Planes')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Planes" id="Planes" style="display: none;" placeholder="Planes" title="Planes">

        <p class="inputName" id="skillsKnowledgeReligion" style="display: none;">Has Religion <input id="ReligionOption" type="checkbox" placeholder="toggle" onclick="toggle('Religion')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Religion" id="Religion" style="display: none;" placeholder="Religion" title="Religion">

                
        </div>

        <p class="inputName" id="skillsLinguistics" >Has Linguistics <input id="LinguisticsOption" type="checkbox" placeholder="toggle" onclick="toggle('Linguistics')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Linguistics" id="Linguistics" style="display: none;" placeholder="Linguistics" title="Linguistics">

        <p class="inputName" id="skillsPerception" >Has Perception <input id="PerceptionOption" type="checkbox" placeholder="toggle" onclick="toggle('Perception')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Perception" id="Perception" style="display: none;" placeholder="Perception" title="Perception">

        <p class="inputName" id="skillsPerform" >Has Perform <input id="PerformOption" type="checkbox" placeholder="toggle" onclick="toggle('Perform')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Perform" id="Perform" style="display: none;" placeholder="Perform" title="Perform">

        <p class="inputName" id="skillsProfession" >Has Profession <input id="ProfessionOption" type="checkbox" placeholder="toggle" onclick="toggle('Profession')"></p> 
        <div style="display: none;" id="Profession"><button type="button" id="professionButton" class="formButton" onclick="createDualInformation('Profession','Name','Value','Profession','Profession Name','Profession Value','text','number')">Add Profession</button>
        <div class="Profession" id="ProfessionArea"></div></div>

        <p class="inputName" id="skillsRide" >Has Ride <input id="RideOption" type="checkbox" placeholder="toggle" onclick="toggle('Ride')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Ride" id="Ride" style="display: none;" placeholder="Ride" title="Ride">

        <p class="inputName" id="skillsSenseMotive" >Has Sense Motive <input id="SenseMotiveOption" type="checkbox" placeholder="toggle" onclick="toggle('SenseMotive')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="SenseMotive" id="SenseMotive" style="display: none;" placeholder="SenseMotive" title="SenseMotive">

        <p class="inputName" id="skillsSleightofHand" >Has Sleight of Hand <input id="SleightofHandOption" type="checkbox" placeholder="toggle" onclick="toggle('SleightofHand')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="SleightofHand" id="SleightofHand" style="display: none;" placeholder="SleightofHand" title="SleightofHand">

        <p class="inputName" id="skillsSpellcraft" >Has Spellcraft <input id="SpellcraftOption" type="checkbox" placeholder="toggle" onclick="toggle('Spellcraft')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Spellcraft" id="Spellcraft" style="display: none;" placeholder="Spellcraft" title="Spellcraft">

        <p class="inputName" id="skillsStealth" >Has Stealth <input id="StealthOption" type="checkbox" placeholder="toggle" onclick="toggle('Stealth')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Stealth" id="Stealth" style="display: none;" placeholder="Stealth" title="Stealth">

        <p class="inputName" id="skillsSurvival" >Has Survival <input id="SurvivalOption" type="checkbox" placeholder="toggle" onclick="toggle('Survival')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Survival" id="Survival" style="display: none;" placeholder="Survival" title="Survival">

        <p class="inputName" id="skillsSwim" >Has Swim <input id="SwimOption" type="checkbox" placeholder="toggle" onclick="toggle('Swim')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="Swim" id="Swim" style="display: none;" placeholder="Swim" title="Swim">

        <p class="inputName" id="skillsUseMagicDevice" >Has Use Magic Device <input id="UseMagicDeviceOption" type="checkbox" placeholder="toggle" onclick="toggle('UseMagicDevice')"></p> 
        <input type="number" min="0" class="searchBarCreation" name="UseMagicDevice" id="UseMagicDevice" style="display: none;" placeholder="UseMagicDevice" title="UseMagicDevice">
        </div>


        </div>
        <div id="spell" class="creationDisplay" style="display: none;">
        <div id="spellsContainerInnate" class="stairCase">
        

        <p class="inputName" style="display: flex">Has Innate<input type="checkbox" id="spellsInnateOption" placeholder="toggle" onclick="arrayToggle('spellsInnate',['Container','Constant','atWill','xDay'])"></p> 
        <div id="spellsInnateContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="NPCSpellModInnate">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="NPCSpellModInnate" id="NPCSpellModInnate">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

        <p class="inputName" id="innateCasterLevelZone";">Set Caster Level Innate <input id="innateCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('innateCasterLevel')"></p>
        <div id="innateCasterLevel" style="display: none;" class="stairCase">
        <input type="number" min="0" class="searchBarCreation" name="CLInnate" id="CLInnate" placeholder="CLInnate" title="CLInnate">      
        <input type="number" min="0" class="searchBarCreation" name="ConcentrateInnate" id="ConcentrateInnate"" placeholder="ConcentrateInnate" title="ConcentrateInnate">
        </div>

        <p class="inputName" id="spellsInnateConstant" style="display: none;">Has Constant <input id="constantOption" type="checkbox" placeholder="toggle" onclick="toggle('constant')"></p> 
        <input type="text" class="searchBarCreation" name="constant" id="constant" style="display: none;" placeholder="Constant" title="constant">

        <p class="inputName" id="spellsInnateatWill" style="display: none;">Has atWill <input id="atWillOption" type="checkbox" placeholder="toggle" onclick="toggle('atWill')"></p> 
        <input type="text" class="searchBarCreation" name="atWill" id="atWill" style="display: none;" placeholder="atWill" title="atWill">

        <p class="inputName" id="spellsInnatexDay" style="display: none;">Has xDay <input id="xDayOption" type="checkbox" placeholder="toggle" onclick="toggle('xDay')"></p> 
        <div style="display: none;" id="xDay"><button type="button" class="formButton" onclick="createDualInformation('xDay','perDay','List','xDay Spell','Amount Per Day','SpellList','number','text')">Add xDay Spells</button>
        <div class="xDay" id="xDayArea"></div></div>
        </div>
        </div>
        <div id="spellsContainerPrepared" class="stairCase">
        <p class="inputName" style="display: flex">Has Prepared <input type="checkbox" id="spellsPreparedOption" placeholder="toggle" onclick="arrayToggle('spellsPrepared',['Container','Ninth','Eighth','Seventh','Sixth','Fifth','Fourth','Third','Second','First','Zeroth'])"></p>
        
        <div id="spellsPreparedContainer" style="display: none;" class="stairCase">

        <label class="inputName" for="NPCSpellModPrepared">Prepared Casting Modifier:</label><br>
        <select class="searchBarCreation" name="NPCSpellModPrepared" id="NPCSpellModPrepared">
        <option>Int</option>
        <option>Wis</option>
        <option>Cha</option>
        </select><br>

        <p class="inputName" id="preparedCasterLevelZone";">Set Caster Level Prepared <input id="preparedCasterLevelOption" type="checkbox" placeholder="toggle" onclick="toggle('preparedCasterLevel')"></p>
        <div id="preparedCasterLevel" style="display: none;" class="stairCase">
        <input type="number" min="0" class="searchBarCreation" name="CLPrepared" id="CLPrepared" placeholder="CLPrepared" title="CLPrepared">      
        <input type="number" min="0" class="searchBarCreation" name="ConcentratePrepared" id="ConcentratePrepared"" placeholder="ConcentratePrepared" title="ConcentratePrepared">
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
        </div>
        </div>
        </div>

        <div id="feats" style="display: none;">
        <div class="gapBetweenItems">
        <div class="cen">
        <p id="featCount"></p><br>
        <div>
        <div class=dropDownAddition>
        <div class="feat" id="featArea"></div>
        <button type="button" class="formButton" id="featButton" onclick="addDropdownchoice('feat')">Add feat</button>
        </div>
        <div id="featInput" style="display:block;">
        <input type="text"class="searchBarCreation" id="featTemp" name="featTemp" placeholder="Insert Feat Details Here" title="FeatTemp">
        </div>
        </div>
        <div id="featChoice"></div>
        </div>
        <div>
        <h1 class="inputName">Stats</h1>
        <h4 id="bab"></h4>
        <h4 id="str"></h4>
        <h4 id="dex"></h4>
        <h4 id="con"></h4>
        <h4 id="int"></h4>
        <h4 id="wis"></h4>
        <h4 id="cha"></h4>
        <h4 id="tlevel"></h4>
        <h4 id="clevel"></h4>
        </div>
        <div>
        <h1 class="inputName">Other Details</h1>
        <h4 id="race"></h4>
        <h4 id="alignment"></h4>
        <h4 id="fortsave"></h4>
        <h4 id="refsave"></h4>
        <h4 id="willsave"></h4>
        </div>
        </div>
        </div>
        <div class="spheres" id="spheres" style="display:none;">
        <div class="gapBetweenItems">
        <div>
        <button type="button" class="button-blue" id="spheresPower" onclick="displayChange('selectionPower')">Spheres of Power</button>
        </div>
        <div>
        <button type="button" class="button-orange" id="spheresMight" onclick="displayChange('selectionMight')">Spheres of Might</button>
        </div>
        <div>
        <button type="button" class="button-green" id="spheresGuile" onclick="displayChange('selectionGuile')">Spheres of Guile</button>
        </div>
        </div>
        <br>
        <div>
        <div id="selectionPower" class="creationDisplay">
          <div>
            <div class="spheresPower" id="spherePowerArea"></div>
              <button type="button" class="formButton" onclick="addDropdownchoice('spherePower',false,'','',true)">Add Power Sphere</button>
              </div>
              <div id="spherePowerChoice" class="dropDownChoice"></div>
            </div>
          <div id="selectionMight" class="creationDisplay" style="display:none;">
              <div>
              <div class="spheresMight" id="sphereMightArea"></div>
              <button type="button" class="formButton" onclick="addDropdownchoice('sphereMight',false,'','',true)">Add Might Sphere</button>
              </div>
              <div id="sphereMightChoice" style="display:flex";></div>
          </div>
          <div id="selectionGuile" class="creationDisplay" style="display:none;">
              <div>
              <div class="spheresGuile" id="sphereGuileArea"></div>
              <button type="button" class="formButton" onclick="addDropdownchoice('sphereGuile',false,'','',true)">Add Guile Sphere</button>
              </div>
              <div id="sphereGuileChoice" style="display:flex";></div>
          </div>
        </div>
        </div>
        </div>

        </div>
        </form>`
        break;
    case "5e":
      forum =`<form id="forum">
        <div class="creationSetup">
        <div>
        <p class="Title">Core:</p>
        <label class="inputName" for="NPCName">NPC Name:</label><br>
        <input type="text" class="searchBarCreation" name="NPCName" id="NPCName" placeholder="Name" title="NPC Name" value="Mimic"><br>

        <label class="inputName" for="NPCType">NPC Type:</label><br>
        <input type="text" class="searchBarCreation" name="NPCType" id="NPCType" placeholder="Type" title="NPC Type" value="Aberration(shapechanger)"><br>

        <label class="inputName" for="NPCTitle">NPC Title:</label><br>
        <input type="text" class="searchBarCreation" name="NPCTitle" id="NPCTitle" placeholder="Title" title="NPC Title" value="Mimic"><br>

        <label class="inputName" for="NPCCR">NPC CR:</label><br>
        <input type="text" class="searchBarCreation" name="NPCCR" id="NPCCR" placeholder="CR" title="NPC CR" value="4"><br>

        <label class="inputName" for="NPCXP">NPC XP:</label><br>
        <input type="number" class="searchBarCreation" name="NPCXP" id="NPCXP" placeholder="XP" title="NPC XP" value="1200"><br>

        <label class="inputName" for="NPCLevel">NPC Hit Dice Count:</label><br>
        <input type="number" class="searchBarCreation" name="NPCLevel" id="NPCLevel" placeholder="hit dice" title="NPC Level" value="7"><br>

        <label class="inputName" for="NPCHitDice">NPC Hit Dice:</label><br>
        <select class="searchBarCreation" name="NPCHitDice" id="NPCHitDice">
        <option>d4</option>
        <option>d6</option>
        <option selected>d8</option>
        <option>d10</option>
        <option>d12</option>
        <option>d20</option>
        </select><br>

        <label class="inputName" for="ac">NPC ac bonus:</label><br>
        <input type="text" class="searchBarCreation" name="ac" id="ac" placeholder="ac" title="NPC ac" value=0><br>
    
        <label class="inputName" for="NPCSpeed">NPC Speed:</label><br>
        <input type="text" class="searchBarCreation" name="NPCSpeed" id="NPCSpeed" placeholder="Speed" title="NPC Speed" value="30"><br>

        <label class="inputName" for="NPCStr">NPC Str:</label><br>
        <input type="number" class="searchBarCreation" name="NPCStr" id="NPCStr" placeholder="Str" title="NPC Str" value=19><br>

        <label class="inputName" for="NPCDex">NPC Dexterity:</label><br>
        <input type="number" class="searchBarCreation" name="NPCDex" id="NPCDex" placeholder="Dex" title="NPC Dex" value=12><br>

        <label class="inputName" for="NPCCon">NPC Con:</label><br>
        <input type="number" class="searchBarCreation" name="NPCCon" id="NPCCon" placeholder="Con" title="NPC Con" value=17><br>

        <label class="inputName" for="NPCInt">NPC Intelligence:</label><br>
        <input type="number" class="searchBarCreation" name="NPCInt" id="NPCInt" placeholder="Int" title="NPC Int" value=10><br>

        <label class="inputName" for="NPCWis">NPC Wisdom:</label><br>
        <input type="number" class="searchBarCreation" name="NPCWis" id="NPCWis" placeholder="Wis" title="NPC Wis" value=13><br>

        <label class="inputName" for="NPCCha">NPC Charisma:</label><br>
        <input type="number" class="searchBarCreation" name="NPCCha" id="NPCCha" placeholder="Cha" title="NPC Cha" value=10><br>



        <label class="inputName" for="NPCProficiency">NPC Proficiency:</label><br>
        <input type="number" class="searchBarCreation" name="NPCProficiency" id="NPCProficiency" placeholder="Proficiency" title="NPC Proficiency" value=5><br>
        <label class="inputName" for="NPCAlignment">NPC Alignment:</label><br>
        <select class="searchBarCreation" name="NPCAlignment" id="NPCAlignment">
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
        <label class="inputName" for="NPCSense">NPC Sense:</label><br>
        <input type="text" class="searchBarCreation" name="NPCSense" id="NPCSense" placeholder="Sense" title="NPC Sense" value="Senses"><br>

        <label class="inputName" for="NPCSize">NPC Size:</label><br>
        <select class="searchBarCreation" name="NPCSize" id="NPCSize">
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



function generateForum(){
    var creationDisplay = document.getElementById("creationDis");
    var creationHTML = document.createElement("div");
    var hotbarDisplay = document.getElementById("hotBar");
    var hotbarHTML = document.createElement("div");
    var choiceDisplay = document.getElementById("choiceDrop");
    var choiceHTML = document.createElement("div");
    let system;
    system = sessionStorage.getItem("system");
    hotbarHTML.innerHTML+=getHotbar(system);
    choiceHTML.innerHTML+=getChoiceDrop(system);
    creationHTML.innerHTML+=getForum(system);
    hotbarDisplay.appendChild(hotbarHTML);
    choiceDisplay.appendChild(choiceHTML);
    creationDisplay.appendChild(creationHTML);
    // let formInputs=document.getElementsByClassName("searchBarCreation");
    // for(let i=0;formInputs.length>i;i++){
    //     formInputs.item(i).addEventListener("contextmenu",(e)=>{e.preventDefault()})
    // }
    createMainForm(system);
    listenersSetup();
}

function updateMiscDropdown(){
  let system;
  system = sessionStorage.getItem("system");
  var misc = document.getElementById("miscOptions");
  document.getElementById("miscOptions").innerHTML="";
  var display = document.createElement("div");
  display.innerHTML+=getMiscdropdown();
  misc.append(display);
}

function getMiscdropdown(){
  let drop= `<a class="object" onclick="displayChange('senseSection')">Senses</a>
      <a class="object" onclick="displayChange('languageSection')">Languages</a>
      <a class="object" onclick="displayChange('racialModSection')">Racial Modifiers</a>
      <a class="object" onclick="displayChange('SQSection')">Special Qualities</a>
      <a class="object" onclick="displayChange('gearSection')">Gear</a>
      <a class="object" onclick="displayChange('MonsterAbilitiesSection')">Monster Abilities</a>`
      if(document.getElementById("NPCChoice").value=="NPC"){
        drop+=`<a class="object" onclick="displayChange('chosenClasses')">Class Archetypes</a>`
      }
  return drop;
}