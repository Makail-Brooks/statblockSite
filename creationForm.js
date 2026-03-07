var creationDisplay = document.getElementById("creationDis");
var creationHTML = document.createElement("div");
var hotbarDisplay = document.getElementById("hotBar");
var hotbarHTML = document.createElement("div");
var choiceDisplay = document.getElementById("choiceDrop");
var choiceHTML = document.createElement("div");
let system;
let skillPoints =0;
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
listenersSetup();