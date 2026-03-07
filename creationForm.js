var creationDisplay = document.getElementById("creationDis");
var creationHTML = document.createElement("div");
let system;
let skillPoints =0;
system = sessionStorage.getItem("system");
creationHTML.innerHTML+=getForum(system);
creationDisplay.appendChild(creationHTML);
let formInputs=document.getElementsByClassName("searchBarCreation");
// for(let i=0;formInputs.length>i;i++){
//     formInputs.item(i).addEventListener("contextmenu",(e)=>{e.preventDefault()})
// }
var skillDisplay = document.getElementById("skillPoints");
var skillHTML = document.createElement("div");
skillHTML.innerHTML = `<p class="inputName" id="skillPointsDisplay">Remaining Ranks: ${setSkillPoints()}</p>`;
var featDisplay = document.getElementById("featCount");
var featHTML = document.createElement("div");
featHTML.innerHTML = `<p class="inputName" id="featAmountDisplay">Remaining Feats: ${setFeatsAvailable()}</p>`;
featDisplay.appendChild(featHTML);
skillDisplay.appendChild(skillHTML);
let skillCont = document.getElementById("skillsContainer");
let skillList = skillCont.getElementsByClassName("searchBarCreation")
var healthDisplay = document.getElementById("calcHealth");
var healthHTML = document.createElement("div");
healthHTML.innerHTML = `<p class="inputName" id="calculateHealth">Health: ${getForumHP()}</p>`;
healthDisplay.appendChild(healthHTML);
createFormListenersFeatsAndSkills(skillList);
createListeners("creatureLevel",'input',setFeatsAvailable);
createListeners("creatureType",`change`,creatureTypeListener);
createListeners("creatureLevel",`change`,updateHealthDisplay);
createListeners("creatureHitDice",`change`,updateHealthDisplay);
creatureTypeListener();
createDropDownChoices(dropDownArray);
createVariableEnhancedListener('senseList','keyup',toggleInput,'senseInput');
createVariableEnhancedListener('featList','keyup',toggleInput,'featInput');
const targetNode = document.getElementById('featChoice');
const config = {attributes:true,childList:true,subtree:true,CharacterData:true};
observer.observe(targetNode,config);

function createDropDownChoices(arr){
    arr.forEach(element=>{
        arrayToDropdown(element[0],element[1]);
    })
}