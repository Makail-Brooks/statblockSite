function getModifier(val){
  if(val=="-"){
    return 0;
  }
  //IF((B2-10)/2 > 0, ROUNDDOWN((B2-10)/2, 0), ROUNDUP((B2-10)/2))
  return Math.floor((val-10)/2);
//  let calc = round((val-10)/2);
}


/**
 * returns ability modifier for skill asked for
 * @param {string} skill 
 * @param {json} NPCData 
 * @returns int
 */
function skillModifier(skill,NPCData){
  switch(skill){
    case "Acrobatics":
      return getModifier(NPCData.dex);
    case "Athletics":
      return getModifier(NPCData.str);
    case "Appraise":
      return getModifier(NPCData.int);
    case "Bluff":
      return getModifier(NPCData.cha);
    case "Climb":
        return getModifier(NPCData.str);
    case "Craft":
      return getModifier(NPCData.int);
    case "Diplomacy":
      return getModifier(NPCData.cha);
    case "DisableDevice":
      return getModifier(NPCData.dex);
    case "Deception":
      return getModifier(NPCData.cha);
    case "Disguise":
      return getModifier(NPCData.cha);
    case "EscapeArtist":
      return getModifier(NPCData.dex);
    case "Fly":
      return getModifier(NPCData.dex);
    case "HandleAnimals":
      return getModifier(NPCData.cha);
    case "AnimalHandling":
      return getModifier(NPCData.wis);
    case "Heal":
      return getModifier(NPCData.wis);
    case "Medicine":
      return getModifier(NPCData.wis);
    case "Intimidate":
      return getModifier(NPCData.cha);
    case "Intimidation":
      return getModifier(NPCData.cha);
    case "Arcane":
      return getModifier(NPCData.int);
    case "History":
      return getModifier(NPCData.int);
    case "KnowledgeArcana":
      return getModifier(NPCData.int);
    case "KnowledgeDungeoneering":
      return getModifier(NPCData.int);
    case "KnowledgeEngineering":
      return getModifier(NPCData.int);
    case "KnowledgeGeography":
      return getModifier(NPCData.int);
    case "KnowledgeHistory":
      return getModifier(NPCData.int);
    case "KnowledgeLocal":
      return getModifier(NPCData.int);
    case "KnowledgeNature":
      return getModifier(NPCData.int);
    case "KnowledgeNobility":
      return getModifier(NPCData.int);
    case "KnowledgePlanes":
      return getModifier(NPCData.int);
    case "KnowledgeReligion":
      return getModifier(NPCData.int);
    case "Linguistics":
      return getModifier(NPCData.int);
    case "Perception":
      return getModifier(NPCData.wis);
    case "Perform":
      return getModifier(NPCData.cha);
    case "Profession":
      return getModifier(NPCData.wis);
    case "Ride":
      return getModifier(NPCData.dex);
    case "SenseMotive":
      return getModifier(NPCData.wis);
    case "Insight":
      return getModifier(NPCData.wis);
    case "SleightOfHand":
      return getModifier(NPCData.dex);
    case "Spellcraft":
      return getModifier(NPCData.int);
    case "Investigation":
      return getModifier(NPCData.int);
    case "Nature":
      return getModifier(NPCData.int);
    case "Religion":
      return getModifier(NPCData.int);
    case "Stealth":
      return getModifier(NPCData.dex);
    case "Survival":
      return getModifier(NPCData.wis);
    case "Swim":
      return getModifier(NPCData.str);
    case "UseMagicDevice":
      return getModifier(NPCData.cha);
    case "Performance":
      return getModifier(NPCData.cha);
    case "Persuasion":
      return getModifier(NPCData.cha);
    default:
      return 0;
  }
}

/**gets focus feat bonus
 * @param {int} val
 * @returns int 
 */
function focusBonus(val){
  return val>=10?6:3;
};

function getRacialBonus(racialBonusArray,skill){
    let returnedBonus = 0;
    if(racialBonusArray!=null){
        Object.keys(racialBonusArray).forEach(bonus=>{
            if(bonus.toLowerCase().includes(skill.toLowerCase())){
              return racialBonusArray[bonus];
            }
        })
    }
    return returnedBonus;
}

function populateProfs(skillJson){
  let skillList = ['Acrobatics','AnimalHandling','Arcana','Athletics','Athletics','Deception','History','Insight','Intimidation','Investigation','Medicine','Nature','Perception','Performance','Persuasion','Religion','SleightofHand','Stealth','Survival'];
  skillList.forEach(skill=>{
    skillJson[`${skill}`]=document.getElementById(`${skill}ProficiencyOption`).checked;

  })
}

/**
 * returns pathfinder bab
 * @param {string} babSpeed 
 * @param {int} level 
 * @returns int
 */
function getBaB(babSpeed,level){
    let bab = 0;
            switch(babSpeed){
            case "Fast":
                bab = Number(level);
                break;
            case "Medium":
                bab = Math.floor(Number(level)*(3/4));
                break;
            case "Slow":
                bab = Math.floor(Number(level)*(1/2));
                break;
            default:
                break;
        }
        return bab;
}

function getNPCSizeMod(size,type=""){
  switch(size){
    case "Colossal":
        return -8;
    case "Gargantuan":
      return -4-(type=="fly"?2:0);
    case "Huge":
      return -2-(type=="fly"?2:0);
    case "Large":
      return -1*(type=="fly"?2:1);
    case "Small":
      return 1*(type=="fly"?2:1);
    case "Tiny":
      return 2*(type=="fly"?2:1);
    case "Diminutive":
      return 4+(type=="fly"?2:0);
    case "Fine":
      return 8;
    default:
      return 0;
  }
}

/**
 * 
 * @param {NPCInfo.cr} cr 
 * @return {int}
 */
function getEXP(cr){
  switch(cr){
    case "1/8":
      return 50;
    case "1/6":
      return 65;
    case "1/4":
      return 100;
    case "1/3":
      return 135;
    case "1/2":
      return 200;
    case "1":
      return 400;
    case "2":
      return 600;
    case "3":
      return 800;
    case "4":
      return 1200;
    case "5":
      return 1600;
    case "6":
      return 2400;
    case "7":
      return 3200;
    case "8":
      return 4800;
    case "9":
      return 6400;
    case "10":
      return 9600;
    case "11":
      return 12800;
    case "12":
      return 19200;
    case "13":
      return 25600;
    case "14":
      return 38400;
    case "15":
      return 51200;
    case "16":
      return 76800;
    case "17":
      return 102400;
    case "18":
      return 153600;
    case "19":
      return 204800;
    case "20":
      return 307200;
    case "21":
      return 409600;
    case "22":
      return 614400;
    case "23":
      return 819200;
    case "24":
      return 1228800;
    case "25":
      return 1638400;
    case "26":
      return 2457600;
    case "27":
      return 3276800;
    case "28":
      return 4915200;
    case "29":
      return 6553600;
    case "30":
      return 9830400;
    default:
      return 0;
  }
}

/**
 * 
 * @param {JSON} NPCInfo 
 * @returns {int}
 */
function getHP(NPCInfo,sys){
  let health = 0;
  let hitDice = Number(NPCInfo.hitDice.replace("d",""));
  let level = NPCInfo.level;
  switch(sys){
    case "pathfinder":
      let conBonus = getModifier(NPCInfo.con)*Number(NPCInfo.level)+getFeatBonuses("con",NPCInfo.feats,NPCInfo.level,NPCInfo);
      if(NPCInfo.type.toLowerCase().includes("construct")){
        conBonus = getConstructBonusHealth(NPCInfo.size);
      }
      switch(NPCInfo.NPCType){
        case "Monster":
          if(NPCInfo.rate=="Monster"){
            health = Math.floor(conBonus+(((hitDice/2)+0.5)*level));
          }else if(NPCInfo.rate=="Player"){
            health = Math.floor(conBonus+(((hitDice/2)+1)*(level-1)))+hitDice;
          }
          break;
        case "NPC":
          health = getClassBasedHealthDisplay(NPCInfo,conBonus);
          break;
      }

      break;
    case "5e":
      let highRollCount = Math.floor(level/2);
      let half = hitDice/2;
      health = ((highRollCount*(half+1))+((level-highRollCount)*half)+(getModifier(NPCInfo.con)*level));
      if(health<0){
        health=1;
      }
      break;
  }
    return health;
}

function getClassBasedHealthDisplay(NPCInfo,conBonus){
  let con = NPCInfo.con;
  let firstClass = true;
  let totalHealth = 0;
  let classIndex = 0;
  let archetype = "None";
  // let feats=getf();
  NPCInfo.class.forEach(className=>{
    classIndex = getClassIndexDisplay(NPCInfo,className.name);
    archetype = NPCInfo.class[classIndex].archetype;
    if(firstClass){
      firstClass = false;
      totalHealth+=Number(getHitDice(className.name,archetype))+getModifier(con);
      if((className.level-1)>0){
        totalHealth+=Math.floor((getHitDice(className.name,archetype)/2)+1)*(Number(className.level)-1);
      }
    }else{
      totalHealth+=Math.floor((getHitDice(className.name,archetype)/2)+1)*(Number(className.level))
    }
  });
  totalHealth+=conBonus;
  return totalHealth;
}

/**
 * 
 * @param {Array} array 
 * @param {JSON} NPCInfo 
 * @returns 
 */

function getSpecialValue(array,NPCInfo){
    let total = 0;
    let math = "";
    let doMath = false;
    let elNum = 0;
    array.forEach(element=>{
        if(element=="+"||element=="-"||element=="*"||element=="/"){
            doMath = true;
            math = element;
        }else{
            if(doMath==false){
                if(isNumericString(element)){
                    total = Number(element);
                }else{
                    total = getElementData(NPCInfo,element);
                }
            }else{
                
                if(isNumericString(element)){
                    elNum = Number(element);
                }else{
                    elNum = getElementData(NPCInfo,element);
                }
                switch(math){
                    case "+":
                        total = total+elNum;
                        break;
                    case "-":
                        total = total-elNum;
                        break;
                    case "*":
                        total = total*elNum;
                        break;
                    case "/":
                        total = Math.floor(total/elNum);
                        break;
                }
            }
        }
    })
    return total;
}
/**
 * 
 * @param {JSON} NPCInfo 
 * @param {string} element 
 * @returns 
 */
function getElementData(NPCInfo,element){
    switch(element){
        case "level":
            return Number(NPCInfo.level);
        case "max health"||"max hp"||"hp"||"total hp":
            return getHP(NPCInfo,NPCInfo.system);
    }
}
/**
 * 
 * @param {string} str 
 * @returns 
 */
function isNumericString(str){
    return !isNaN(str);
}

/**
 * 
 * @param {NPCInfo.size} size 
 * @returns 
 */
function getConstructBonusHealth(size){
    switch(size.toLocaleString()){
        case "small":
            return 10;
        case "Medium":
            return 20;
        case "Large":
            return 30;
        case "Huge":
            return 40;
        case "Gargantuan":
            return 60;
        case "Colossal":
            return 80;
        default:
            return 0;
    }
}

function getAttackDetails(attackPath,NPCInfo,enchantedGear,type){
    let k=0;
    let attackString = "";
    attackPath.forEach(attackData=>{
        k++;
        if(k>1){
            if(attackData.isAlternative===true){
                attackString+= " or ";
            }else if(attackData.isAdditive===true){
                attackString+= " and ";
            }else{
                attackString +=", "
            }
        }
        let bab=0;
        bab = getBaB(NPCInfo.bab,NPCInfo.level);
        let abilityBonus = getModifier(NPCInfo.dex);
        if(type==="melee"){
            abilityBonus=getModifier(NPCInfo.str);
        }
        let toHit = abilityBonus+(bab)+getFeatBonuses(type+"attack",NPCInfo.feats,bab,NPCInfo,attackData.name);
        if(attackData.toHitModifier){
            toHit+=Number(attackData.toHitModifier);
        }
        if(toHit>=0){
            toHit = "+"+toHit;
        }
        //do multi-attack
        if(attackData.multiAttack){
            let multiAttack = toHit
            let curToHit = Number(toHit);
            for(let l=0;l<attackData.multiAttack;l++){
                let newHit = "";
                curToHit = Number(curToHit)-5;
                newHit = curToHit;
                if(newHit>=0){
                    newHit = "+"+newHit;
                }
                multiAttack = `${multiAttack}/${newHit}`;
            }
            toHit = multiAttack;
        }
        attackString+= `${attackData.name} ${toHit}`;
        let damageBonus = 0;
        viableForStrength =['dagger','composite longbow'];
        if(viableForStrength.includes(attackData.name)||type==="melee"){
                damageBonus =getModifier(NPCInfo.str)+getFeatBonuses((type+"damage"),NPCInfo.feats,bab,NPCInfo);
        }
        if(attackData.enchantments){
            damageBonus+=getMagicBonuses("damageBonus",attackData.enchantments,NPCInfo.bab,NPCInfo,getModifier(NPCInfo.str),getModifier(NPCInfo.dex));
        }
        if(damageBonus>0){
            damageBonus = "+"+damageBonus;
        }else if(damageBonus==0){
            damageBonus="";
        }else{
            damageBonus = damageBonus;
        }
        let damageString = `(${attackData.diceCount}${attackData.damageDice}${damageBonus})`;
        let cr = 20;
        if(attackData.critRange){
            cr = Number(attackData.critRange);
        }
        if(attackData.enchantments){
            enchantedGear.push(`${attackData.name}(${(attackData.enchantments).toString().replace(",",", ")})`);
        }
        let trueCRange = cr-getMagicBonuses("critRange",attackData.enchantments,NPCInfo.bab,NPCInfo);
        if(trueCRange<20){
            damageString=damageString.replace(")",`/${trueCRange}-20)`);
        }
        if(attackData.critMultiplier){
            damageString=damageString.replace(")",`/x${attackData.critMultiplier})`);
        }
        if(attackData.uniqueDamage){
            damageString=damageString.replace(")",` ${attackData.uniqueDamage})`);
        }
        attackString = `${attackString} ${damageString}`
        
    })
    return attackString;
}

function findSaveType(description,trueSaveType){
    if(description.includes(trueSaveType)){
        return trueSaveType;
    }
    if(description.includes("Will")){
        return "Will"
    }
    if(description.includes("Fort")){
        return "Fort"
    }
    if(description.includes("Ref")){
        return "Ref"
    }
}

function nonConditionBonus(stat,NPCInfo){
  let fort = 0;
  let ref = 0;
  let will =0
  if(NPCInfo.save_bonuses!=null){
    NPCInfo.save_bonuses.forEach(bonuses=>{
              let numVal = bonuses.replace(/[^0-9]/g, '')
              if(bonuses.includes("-")){
                  numVal*=-1;
              }
              if(!bonuses.includes("(")){
                  if(bonuses.includes("Fort")){
                  //    console.log(numVal)
                      fort+=Number(numVal)
                  }
                  if(bonuses.includes("Ref")){
                      ref+=Number(numVal)
                  }
                  if(bonuses.includes("Will")){
                      will+=Number(numVal)
                  }
              }
              })
      switch(stat){
        case "Fort":
          return fort;
        case "Ref":
          return ref;
        case "Will":
          return will;
        default:
          return 0;
      }
  }
  return 0;
}

function getSaveMod(save,NPCData){
    switch(save){
        case "Str":
            return NPCData.str!="-"? getModifier(NPCData.str):0;
        case "Dex":
            return NPCData.dex!="-"? getModifier(NPCData.dex):0;
        case "Con":
            return NPCData.con!="-"? getModifier(NPCData.con):0;
        case "Int":
            return NPCData.int!="-"? getModifier(NPCData.int):0;
        case "Wis":
            return NPCData.wis!="-"? getModifier(NPCData.wis):0;
        case "Cha":
            return NPCData.cha!="-"? getModifier(NPCData.cha):0;
        default:
            return 0;
    }
}

function getstatValue(value,NPCData){
  switch(value){
    case "Str":
      return NPCData.str!="-"? Number(NPCData.str):0;
    case "Dex":
      return NPCData.dex!="-"? Number(NPCData.dex):0;
    case "Con":
      return NPCData.con!="-"? Number(NPCData.con):0;
    case "Int":
      return NPCData.int!="-"? Number(NPCData.int):0;
    case "Wis":
      return NPCData.wis!="-"? Number(NPCData.wis):0;
    case "Cha":
      return NPCData.cha!="-"? Number(NPCData.cha):0;
    default:
      return 0;
  }
}

function checkStatVal(stat){
  if(isNaN(stat)||stat==""){
    if(stat!="-"){
      return "-1";
    }
  }
  return stat;
}






/**
 * 
 * @param {string} skill 
 * @param {array} feats 
 * @param {int} ranks 
 * @param {json} NPC 
 * @returns int
 */
function getFeatBonuses(skill,feats,ranks,NPC,extra=""){
  let totalBonuses = 0;
  let value = skill.replace(/[0-9] /g, '')
  let arr = []
  if(feats){
    if(extra!="forum"){
      arr = Object.keys(feats)
    }else{
      arr = feats;
    }
    arr.forEach(feat=>{
//   if(feat.includes("Skill Focus")){
//     feat = feat.replace(/\s/g,"");
//     focusedSkill = feat.replace("SkillFocus(","");
//     focusedSkill = focusedSkill.replace(")","");
//     if(focusedSkill.includes("Profession")||focusedSkill.includes("Craft")){
//       focusedSkill=focusedSkill.replace("Profession(","");
//       focusedSkill=focusedSkill.replace("Craft(","");  
//       focusedSkill = focusedSkill.replace(")","");
//     }
//     feat = "Skill Focus";
//   }
//   if(feat.includes("Weapon Focus")){
//   //  console.log(feat);
//     feat = feat.replace(/\s/g,"");
// //    console.log(feat);
//     focusedWeapon = feat.replace("WeaponFocus(","");
//     focusedWeapon = focusedWeapon.replace(")","");
//     feat = "Weapon Focus";

//   }
  switch(feat){
    case "Improved Initiative":
      if(skill==="init"){
        totalBonuses += 4;
      }
      break;
    case "Stealthy":
      if(skill==="Stealth"||skill==="EscapeArtist"){
        totalBonuses += 2;
        if(ranks>=10){
          totalBonuses+=2;
        }
      }
      break;
    case "Skill Focus":
      if(value.toLowerCase()===feats[feat].toLowerCase()){
        totalBonuses+= focusBonus(ranks);
      }
      break;
    case "Alertness":
      if(skill==="SenseMotive"||skill==="Perception"){
        totalBonuses += 2;
        
        if(ranks>=10){
          totalBonuses+=2;
        }
      }
      break;
    case "Persuasive":
      if(skill==="Diplomacy"||skill==="Intimidate"){
        totalBonuses += 2;
        if(ranks>=10){
          totalBonuses+=2;
        }
      }
      break;
    case "Animal Affinity":
      if(skill==="HandleAnimal"||skill==="Ride"){
        totalBonuses+=2;
      }
    case "Intimidating Prowess":
      if(skill==="Intimidate"){
        totalBonuses += getModifier(NPC.str);
      }
      break;
    case "Martial Dominance":
      if(skill==="Intimidate"){
        let bab=getBaB(NPC.bab,NPC.level);
        if(bab>ranks){
          totalBonuses+=bab-ranks;
        }
      }
      break;
    case "Lightning Reflexes":
      if(skill=== "Reflex"){
        totalBonuses += 2;
      }
      break;
    case "Toughness":
      if(skill==="con"){
        totalBonuses +=3;
        if(ranks-3>0){
          totalBonuses+= ranks-3;
        }
      }
        break;
    case "Weapon Focus":
      value = value.replace(/\s/g,"");
      if(extra.replace(/\s/g,"").toLowerCase()===feats[feat].replace(/\s/g,"").toLowerCase()){
          totalBonuses+=1;
      }
      break;
    case "Great Fortitude":
      if(skill==="Fort"){
        totalBonuses+=2;
      }
      break;
    case "Iron Will":
      if(skill==="Will"){
        totalBonuses+=2;
      }
      break;
    case "Acrobatic":
      if(skill==="Acrobatics"||skill=="Fly"){
        totalBonuses+=2;
      }
    case "Power Attack":
      let val = Math.floor((ranks-4)/4)+1;
      if(skill==="meleeattack"||skill==="CMB"){
        if(val<1){
          val=1;
        }
        totalBonuses-=val;
      }
      if(skill==="meleedamage"){
        val*=2;
        totalBonuses+=val;
      }
    case "Low Profile":
      if(skill==="armor"||skill==="touch"||skill==="dodge")
        totalBonuses+=1;
      break;
    case "Defensive Combat Training":
        if(skill==="CMD"){
          if(NPC.level>getBaB(NPC.bab,NPC.level)){
            totalBonuses+=NPC.level-getBaB(NPC.bab,NPC.level);
          }
        }
        break;
    case "Advanced Defensive Combat Training":
        if(skill==="CMD"){
        totalBonuses+=4;
      }
      break;
    case "Artful Dodge":
      if(skill==="armor"||skill==="touch"||skill==="dodge")
        totalBonuses+=1;
      break;
    case "Athletic":
      if(skill==="Climb"||skill==="Swim"){
        totalBonuses+=2;
      }
    // case "Gain Con":
    //   if(skill==="con"){
    //     totalBonuses+=getModifier(NPC.con)*Number(NPC.level);
    //   }
    //   break;
    case "Improved Natural Armor":
      if(skill==="natural")
        totalBonuses+=1;
      break;
    case "Aquatic Combatant":
      if(skill==="Swim"){
        totalBonuses+=2;        
      }
    default:
        totalBonuses += 0;
        break;
    }
  })
}
  return totalBonuses;
}

/**
 * 
 * @param {string} value 
 * @param {array} Enchantments 
 * @param {int} ranks 
 * @param {json} NPC 
 * @param {int} strBonus 
 * @param {int} dexBonus 
 * @returns int
 */
function getMagicBonuses(value,Enchantments,ranks,NPC,strBonus,dexBonus){
  let totalBonuses =0;
  if(Enchantments){

    Enchantments.forEach(enchantment=>{
      switch(enchantment){
        case "Keen":
          if(value=="critRange"){
            totalBonuses +=1
          }
        case "Agile":
          if(value==="damageBonus"){
            if(strBonus<dexBonus){
              if(strBonus>-1){
                totalBonuses+=dexBonus-strBonus;
              }else{
                totalBonuses+=dexBonus+(strBonus*-1);
              }
            }
          }

          default:
            totalBonuses +=0;
            break;
          }
    })
  }
  return totalBonuses
};


function getIndex(json,className){
    var index = json.findIndex(obj=>obj.name==className);
    return index;
}

function getClassIndexDisplay(NPCInfo,className){
  var index = NPCInfo.class.findIndex(obj=>obj.name==className);
  return index;
}

function getArchetypeIndex(className,archetypeName){
    var classInformation = classJson.class[getIndex(classJson.class,className.toLowerCase())];
    var archetypeIndex = -1;
    if(archetypeName!="None"){
      archetypeIndex = classInformation.archetype.findIndex(obj=>obj.name==archetypeName);
    }
    return archetypeIndex;
}

function getSaveBonus(saveName){
  var rate = "Bad";
  var level = 0;
  let saveBonus = 0;
  if(document.getElementById("NPCChoice").value=="Monster"){
    rate = document.getElementById(`NPC${saveName}`).value;
    level = document.getElementById(`MonsterLevel`).value;
    switch(rate){
      case "Good":
        saveBonus = 2+Math.floor(level/2);
      case "Bad":
        saveBonus = Math.floor(level/3);
  }
  }else{
    let classArchetype = "";
    getClassesData().forEach(className=>{
    classArchetype="";
    if(document.getElementById(`archetype${className}subList`)!=null){
      classArchetype = document.getElementById(`archetype${className}subList`).value;
    }
    if(classArchetype==""){

      classArchetype="None";
    }
    classData = classJson.class[getIndex(classJson.class,className)];
    var archetypeIndex = -1; 
    if(classArchetype!="None"){
      archetypeIndex = getArchetypeIndex(className,classArchetype);
    }
    if(archetypeIndex!=-1){
      switch(saveName){
        case "Fort":
          if(classData.archetype[archetypeIndex].fortSave==null){
            archetypeIndex=-1;
          }
          break;
        case "Ref":
          if(classData.archetype[archetypeIndex].refSave==null){
            archetypeIndex=-1;
          }
          break;
      case "Will":
          if(classData.archetype[archetypeIndex].willSave==null){
            archetypeIndex=-1;
          }
          break;
      }
    }
    if(archetypeIndex==-1){
      switch(saveName){
        case "Will":
          rate = classData.willSave;
          break;
        case "Ref":
          rate = classData.refSave;
          break;
        case "Fort":
          rate = classData.fortSave;
          break;
      }
    }else{
      switch(saveName){
        case "Will":
          rate = classData.archetype[archetypeIndex].willSave;
          break;
        case "Ref":
          rate = classData.archetype[archetypeIndex].refSave;
          break;
        case "Fort":
          rate = classData.archetype[archetypeIndex].fortSave;
          break;
      }
    }
    switch(rate){
      case "Good":
         saveBonus +=2+Math.floor(getClassLevels(className)/2);
         break;
      case "Bad":
         saveBonus +=Math.floor(getClassLevels(className)/3);
         break;
      default:
        saveBonus += 0;
        break;
    }
    });
  }
  return saveBonus;
}

function convertSaveRateToValue(){
    fort = 2+ Math.floor(NPCInfo.level/2);
    fort = Math.floor(NPCInfo.level/3);
}