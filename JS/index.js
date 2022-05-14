window.onscroll = function () { scrollFunction() };
const dropSourceBarJs = document.querySelectorAll('.dropSourceBar');
const dropSourceJs = document.querySelectorAll('.dropSource');
const dropSourceText = document.querySelectorAll('.dropSourceText');
const btnAddEquipment = document.querySelectorAll('.equipImgContainer');
const classPickerBarJs = document.querySelectorAll('.classPickerBar');
const classPickerBarById = document.getElementById("classPickerBarId");
const classPickerById = document.getElementById('classPickerId');
const attributePickerJs = document.querySelectorAll('.attributePicker');
const dropSourceBarById = document.getElementById("dropSourceBarId");
const selectClassById = document.getElementById("selectClass");
const deathKnightOptionJs = document.getElementById("deathKnightOption");
const demonHunterOptionJs = document.getElementById("demonHunterOption");
const druidOptionJs = document.getElementById("druidOption");
const evokerOptionJs = document.getElementById("evokerOption");
const hunterOptionJs = document.getElementById("hunterOption");
const mageOptionJs = document.getElementById("mageOption");
const monkOptionJs = document.getElementById("monkOption");
const paladinOptionJs = document.getElementById("paladinOption");
const priestOptionJs = document.getElementById("priestOption");
const rogueOptionJs = document.getElementById("rogueOption");
const shamanOptionJs = document.getElementById("shamanOption");
const warlockOptionJs = document.getElementById("warlockOption");
const warriorOptionJs = document.getElementById("warriorOption");
const imgClassPickerIdJs = document.getElementById("imgClassPickerId");
const emptyOptionJs = document.getElementById("emptyOption");
const selectSpecByJs = document.getElementById("selectSpec");
const specSelectedAreaJs = document.getElementById("specSelectedArea");
const spec1Js = document.getElementById("spec1");
const spec2Js = document.getElementById("spec2");
const spec3Js = document.getElementById("spec3");
const spec4Js = document.getElementById("spec4");
const imgSpecPickerJs = document.getElementById("imgSpecPickerId");
const specSelectedJs = document.getElementById("specSelectedId");
var modalClose = document.getElementsByClassName("close")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var modal = document.getElementById("equipmentModal");
var dungeonSourceClicked, raideSourceClicked, pvpSourceClicked, professionSourceClicked,
    criticalClicked, hasteClicked, masteryClicked, versatilityClicked = false;
const colorNone = "#aeaeae";
const colorHunter = "#abd473";
const colorRogue = "#fff569";
const colorWarlock = "#9482c9";
const colorDruid = "#ff7d0a";
const colorPriest = "#fff";
const colorMage = "#69ccf0";
const colorDemonHunter = "#a330c9";
const colorDeathKnight = "#c41f3b";
const colorMonk = "#00ff96";
const colorPaladin = "#f58cba";
const colorWarrior = "#c79c6e";
const colorShaman = "#0070de";
const colorEvoker = "#33937F";
var currentColor = colorNone;
var classSelected, specSelected = "none";

function resetSpec(){
    specSelected = "none";
    specSelectedJs.innerText = "Select a Spec";
    specSelectedAreaJs.style.backgroundColor = "rgb(100, 100, 100)";
    specSelectedJs.style.color = "#282828";
    $(imgSpecPickerJs).hide();
}

$(document).ready(function () {

    $('#dropSourceDungeonId').click(function () {
        if (dungeonSourceClicked == true) {
            dungeonSourceClicked = false;
            document.getElementById("dropSourceDungeonId").style.border = "0px";
            document.getElementById("dropSourceDungeonId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextDungeonId").style.color = "grey";
        } else {
            dungeonSourceClicked = true;
            document.getElementById("dropSourceDungeonId").style.border = "5px solid";
            document.getElementById("dropSourceDungeonId").style.borderColor = "white";
            document.getElementById("dropSourceDungeonId").style.borderStyle = "ridge";
            document.getElementById("dropSourceDungeonId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextDungeonId").style.color = "white";
        }
    });

    $('#dropSourceRaideId').click(function () {
        if (raideSourceClicked == true) {
            raideSourceClicked = false;
            document.getElementById("dropSourceRaideId").style.border = "0px";
            document.getElementById("dropSourceRaideId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextRaideId").style.color = "grey";
        } else {
            raideSourceClicked = true;
            document.getElementById("dropSourceRaideId").style.border = "5px solid";
            document.getElementById("dropSourceRaideId").style.borderColor = "white";
            document.getElementById("dropSourceRaideId").style.borderStyle = "ridge";
            document.getElementById("dropSourceRaideId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextRaideId").style.color = "white";
        }
    });

    $('#dropSourcePvpId').click(function () {
        if (pvpSourceClicked == true) {
            pvpSourceClicked = false;
            document.getElementById("dropSourcePvpId").style.border = "0px";
            document.getElementById("dropSourcePvpId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextPvpId").style.color = "grey";
        } else {
            pvpSourceClicked = true;
            document.getElementById("dropSourcePvpId").style.border = "5px solid";
            document.getElementById("dropSourcePvpId").style.borderColor = "white";
            document.getElementById("dropSourcePvpId").style.borderStyle = "ridge";
            document.getElementById("dropSourcePvpId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextPvpId").style.color = "white";
        }
    });

    $('#dropSourceProfessionId').click(function () {
        if (professionSourceClicked == true) {
            professionSourceClicked = false;
            document.getElementById("dropSourceProfessionId").style.border = "0px";
            document.getElementById("dropSourceProfessionId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextProfessionId").style.color = "grey";
        } else {
            professionSourceClicked = true;
            document.getElementById("dropSourceProfessionId").style.border = "5px solid";
            document.getElementById("dropSourceProfessionId").style.borderColor = "white";
            document.getElementById("dropSourceProfessionId").style.borderStyle = "ridge";
            document.getElementById("dropSourceProfessionId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextProfessionId").style.color = "white";
        }
    });

    $('#criticalOption').click(function () {
        if (criticalClicked == true) {
            criticalClicked = false;
            document.getElementById("criticalOption").style.backgroundColor = "rgb(80, 80, 80)";
            document.getElementById("criticalOption").style.color = "#282828"
            document.getElementById("criticalOption").style.border = "none";
            document.getElementById("criticalOption").style.paddingTop = "8px";
            document.getElementById("criticalOption").style.textShadow = "none";
        } else {
            criticalClicked = true;
            document.getElementById("criticalOption").style.backgroundColor = "OrangeRed";
            document.getElementById("criticalOption").style.color = "white"
            document.getElementById("criticalOption").style.border = "3px solid";
            document.getElementById("criticalOption").style.paddingTop = "5px";
            document.getElementById("criticalOption").style.borderColor = "white";
            document.getElementById("criticalOption").style.borderStyle = "ridge";
            document.getElementById("criticalOption").style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
        }
    });

    $('#hasteOption').click(function () {
        if (hasteClicked == true) {
            hasteClicked = false;
            document.getElementById("hasteOption").style.backgroundColor = "rgb(80, 80, 80)";
            document.getElementById("hasteOption").style.color = "#282828"
            document.getElementById("hasteOption").style.border = "none";
            document.getElementById("hasteOption").style.paddingTop = "8px";
            document.getElementById("hasteOption").style.textShadow = "none";
        } else {
            hasteClicked = true;
            document.getElementById("hasteOption").style.backgroundColor = "Gold";
            document.getElementById("hasteOption").style.color = "white"
            document.getElementById("hasteOption").style.border = "3px solid";
            document.getElementById("hasteOption").style.paddingTop = "5px";
            document.getElementById("hasteOption").style.borderColor = "white";
            document.getElementById("hasteOption").style.borderStyle = "ridge";
            document.getElementById("hasteOption").style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
        }
    });

    $('#masteryOption').click(function () {
        if (masteryClicked == true) {
            masteryClicked = false;
            document.getElementById("masteryOption").style.backgroundColor = "rgb(80, 80, 80)";
            document.getElementById("masteryOption").style.color = "#282828"
            document.getElementById("masteryOption").style.border = "none";
            document.getElementById("masteryOption").style.paddingTop = "8px";
            document.getElementById("masteryOption").style.textShadow = "none";
        } else {
            masteryClicked = true;
            document.getElementById("masteryOption").style.backgroundColor = "Purple";
            document.getElementById("masteryOption").style.color = "white"
            document.getElementById("masteryOption").style.border = "3px solid";
            document.getElementById("masteryOption").style.paddingTop = "5px";
            document.getElementById("masteryOption").style.borderColor = "white";
            document.getElementById("masteryOption").style.borderStyle = "ridge";
            document.getElementById("masteryOption").style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
        }
    });

    $('#versatilityOption').click(function () {
        if (versatilityClicked == true) {
            versatilityClicked = false;
            document.getElementById("versatilityOption").style.backgroundColor = "rgb(80, 80, 80)";
            document.getElementById("versatilityOption").style.color = "#282828"
            document.getElementById("versatilityOption").style.border = "none";
            document.getElementById("versatilityOption").style.paddingTop = "8px";
            document.getElementById("versatilityOption").style.textShadow = "none";
        } else {
            versatilityClicked = true;
            document.getElementById("versatilityOption").style.backgroundColor = "DodgerBlue";
            document.getElementById("versatilityOption").style.color = "white"
            document.getElementById("versatilityOption").style.border = "3px solid";
            document.getElementById("versatilityOption").style.paddingTop = "5px";
            document.getElementById("versatilityOption").style.borderColor = "white";
            document.getElementById("versatilityOption").style.borderStyle = "ridge";
            document.getElementById("versatilityOption").style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
        }
    });

    $("#selectClass")
        .mouseout(function () {
            if (classSelected == "none") {
                imgClassPickerIdJs.style.opacity = "50%";
            };
            selectClassById.style.height = "40px";
            classPickerById.style.borderColor = currentColor;
            classPickerById.style.boxShadow = "0px 0px 0px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "auto";
            classPickerById.style.cursor = "auto";
            selectClassById.style.borderRadius = "20px";
        })
        .mouseover(function () {
            imgClassPickerIdJs.style.opacity = "100%";
            selectClassById.style.height = "587px";
            classPickerById.style.borderColor = "white";
            classPickerById.style.boxShadow = "0px 0px 7px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "pointer";
            classPickerById.style.cursor = "pointer";
            selectClassById.style.borderRadius = "20px 20px 0px 0px";
        });

    $("div.classPicker")
        .mouseout(function () {
            if (classSelected == "none") {
                imgClassPickerIdJs.style.opacity = "50%";
            };
            classPickerById.style.borderColor = currentColor;
            selectClassById.style.height = "40px";
            classPickerById.style.boxShadow = "0px 0px 0px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "auto";
            classPickerById.style.cursor = "auto";
            selectClassById.style.borderRadius = "20px";
        })
        .mouseover(function () {
            imgClassPickerIdJs.style.opacity = "100%";
            selectClassById.style.height = "587px";
            classPickerById.style.borderColor = "white";
            classPickerById.style.boxShadow = "0px 0px 7px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "pointer";
            classPickerById.style.cursor = "pointer";
            selectClassById.style.borderRadius = "20px 20px 0px 0px";
        });

    $(deathKnightOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/DeathKnight.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorDeathKnight;
        emptyOptionJs.textContent = "Death Knight";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(demonHunterOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/DemonHunter.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorDemonHunter;
        emptyOptionJs.textContent = "Demon Hunter";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(druidOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Druid.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorDruid;
        emptyOptionJs.textContent = "Druid";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(evokerOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Evoker.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorEvoker;
        emptyOptionJs.textContent = "Evoker";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(hunterOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Hunter.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorHunter;
        emptyOptionJs.textContent = "Hunter";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(mageOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Mage.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorMage;
        emptyOptionJs.textContent = "Mage";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(monkOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Monk.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorMonk;
        emptyOptionJs.textContent = "Monk";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(paladinOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Paladin.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorPaladin;
        emptyOptionJs.textContent = "Paladin";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(priestOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Priest.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorPriest;
        emptyOptionJs.textContent = "Priest";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(rogueOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Rogue.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorRogue;
        emptyOptionJs.textContent = "Rogue";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(shamanOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Shaman.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorShaman;
        emptyOptionJs.textContent = "Shaman";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(warlockOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Warlock.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorWarlock;
        emptyOptionJs.textContent = "Warlock";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $(warriorOptionJs).click(function () {
        resetSpec();
        imgClassPickerIdJs.src = "./Images/Icons/ClassIcons/Warrior.png";
        imgClassPickerIdJs.style.opacity = "100%";
        currentColor = colorWarrior;
        emptyOptionJs.textContent = "Warrior";
        classSelected = emptyOptionJs.textContent;
        emptyOptionJs.style.backgroundColor = currentColor;
        emptyOptionJs.style.color = "white";
        emptyOptionJs.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1em black, 0 0 0.2em black";
    });

    $("#selectSpec")
        .mouseout(function () {
            selectSpecByJs.style.height = "40px";
            selectSpecByJs.style.borderRadius = "20px";
        })
        .mouseover(function () {
            selectSpecByJs.style.borderRadius = "20px 20px 0px 0px";

            switch (classSelected) {
                case "Death Knight":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Blood";
                    document.getElementById("spec2").textContent = "Frost";
                    document.getElementById("spec3").textContent = "Unholy";
                    break;
                case "Demon Hunter":
                    selectSpecByJs.style.height = "126px";
                    document.getElementById("spec1").textContent = "Havoc";
                    document.getElementById("spec2").textContent = "Vengeance";
                    break;
                case "Druid":
                    selectSpecByJs.style.height = "210px";
                    document.getElementById("spec1").textContent = "Balance";
                    document.getElementById("spec2").textContent = "Feral";
                    document.getElementById("spec3").textContent = "Guardian";
                    document.getElementById("spec4").textContent = "Restoration";
                    break;
                case "Evoker":
                    selectSpecByJs.style.height = "126px";
                    document.getElementById("spec1").textContent = "Devastation";
                    document.getElementById("spec2").textContent = "Preservation";
                    break;
                case "Hunter":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Beast Mastery";
                    document.getElementById("spec2").textContent = "Marksmanship";
                    document.getElementById("spec3").textContent = "Survival";
                    break;
                case "Mage":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Arcane";
                    document.getElementById("spec2").textContent = "Fire";
                    document.getElementById("spec3").textContent = "Frost";
                    break;
                case "Monk":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Brewmaster";
                    document.getElementById("spec2").textContent = "Mistweaver";
                    document.getElementById("spec3").textContent = "Windwalker";
                    break;
                case "Paladin":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Holy";
                    document.getElementById("spec2").textContent = "Protection";
                    document.getElementById("spec3").textContent = "Retribution";
                    break;
                case "Priest":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Discipline";
                    document.getElementById("spec2").textContent = "Holy";
                    document.getElementById("spec3").textContent = "Shadow";
                    break;
                case "Rogue":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Assassination";
                    document.getElementById("spec2").textContent = "Outlaw";
                    document.getElementById("spec3").textContent = "Subtlety";
                    break;
                case "Shaman":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Elemental";
                    document.getElementById("spec2").textContent = "Enhancement";
                    document.getElementById("spec3").textContent = "Restoration";
                    break;
                case "Warlock":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Affliction";
                    document.getElementById("spec2").textContent = "Demonology";
                    document.getElementById("spec3").textContent = "Destruction";
                    break;
                case "Warrior":
                    selectSpecByJs.style.height = "168px";
                    document.getElementById("spec1").textContent = "Arms";
                    document.getElementById("spec2").textContent = "Fury";
                    document.getElementById("spec3").textContent = "Protection";
                    break;
                default:
                    selectSpecByJs.style.borderRadius = "20px";
                    break;
            }
        });

    $("#specSelectedArea")
        .mouseout(function () {
            if (specSelected == "none"){
                specSelectedJs.style.color = "#282828";
            }
        })
        .mouseover(function () {
            specSelectedJs.style.color = "white";
        });

    $("#spec1")
        .mouseout(function () {
            document.getElementById("spec1").style.backgroundColor = "rgb(100, 100, 100)";
        })
        .mouseover(function () {
            switch (classSelected) {
                case "Death Knight":
                    spec1Js.style.backgroundColor = "#0e1a37";
                    break;
                case "Demon Hunter":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Druid":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Evoker":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Hunter":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Mage":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Monk":
                    spec1Js.style.backgroundColor = "#0e1a37";
                    break;
                case "Paladin":
                    spec1Js.style.backgroundColor = "#051f23";
                    break;
                case "Priest":
                    spec1Js.style.backgroundColor = "#051f23";
                    break;
                case "Rogue":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Shaman":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Warlock":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                case "Warrior":
                    spec1Js.style.backgroundColor = "#410001";
                    break;
                default:
                    break;
            }
        });

    $("#spec2")
        .mouseout(function () {
            document.getElementById("spec2").style.backgroundColor = "rgb(100, 100, 100)";
        })
        .mouseover(function () {
            switch (classSelected) {
                case "Death Knight":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                case "Demon Hunter":
                    spec2Js.style.backgroundColor = "#0e1a37";
                    break;
                case "Druid":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                case "Evoker":
                    spec2Js.style.backgroundColor = "#051f23";
                    break;
                case "Hunter":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                case "Mage":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                case "Monk":
                    spec2Js.style.backgroundColor = "#051f23";
                    break;
                case "Paladin":
                    spec2Js.style.backgroundColor = "#0e1a37";
                    break;
                case "Priest":
                    spec2Js.style.backgroundColor = "#051f23";
                    break;
                case "Rogue":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                case "Shaman":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                case "Warlock":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                case "Warrior":
                    spec2Js.style.backgroundColor = "#410001";
                    break;
                default:
                    break;
            }
        });

    $("#spec3")
        .mouseout(function () {
            document.getElementById("spec3").style.backgroundColor = "rgb(100, 100, 100)";
        })
        .mouseover(function () {
            switch (classSelected) {
                case "Death Knight":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Druid":
                    spec3Js.style.backgroundColor = "#0e1a37";
                    break;
                case "Hunter":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Mage":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Monk":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Paladin":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Priest":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Rogue":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Shaman":
                    spec3Js.style.backgroundColor = "#051f23";
                    break;
                case "Warlock":
                    spec3Js.style.backgroundColor = "#410001";
                    break;
                case "Warrior":
                    spec3Js.style.backgroundColor = "#0e1a37";
                    break;
                default:
                    break;
            }
        });

    $("#spec4")
        .mouseout(function () {
            document.getElementById("spec4").style.backgroundColor = "rgb(100, 100, 100)";
        })
        .mouseover(function () {
            switch (classSelected) {
                case "Druid":
                    spec4Js.style.backgroundColor = "#051f23";
                    break;
                default:
                    break;
            }
        });

    $(spec1Js).click(function () {
        switch (classSelected) {
            case "Death Knight":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/TankSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Demon Hunter":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Druid":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Evoker":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Hunter":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Mage":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Monk":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/TankSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Paladin":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/HealerSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Priest":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/HealerSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Rogue":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Shaman":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Warlock":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Warrior":
                specSelected = spec1Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec1Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            default:
                break;
        }
    });

    $(spec2Js).click(function () {
        switch (classSelected) {
            case "Death Knight":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Demon Hunter":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/TankSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Druid":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Evoker":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/HealerSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Hunter":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Mage":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Monk":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/HealerSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Paladin":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/TankSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Priest":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/HealerSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Rogue":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Shaman":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Warlock":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Warrior":
                specSelected = spec2Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec2Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            default:
                break;
        }
    });

    $(spec3Js).click(function () {
        switch (classSelected) {
            case "Death Knight":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Druid":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/TankSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Hunter":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Mage":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Monk":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Paladin":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Priest":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Rogue":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Shaman":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/HealerSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Warlock":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/DPSSmall.png";
                $(imgSpecPickerJs).show();
                break;
            case "Warrior":
                specSelected = spec3Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec3Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/TankSmall.png";
                $(imgSpecPickerJs).show();
                break;
            default:
                break;
        }
    });

    $(spec4Js).click(function () {
        switch (classSelected) {
            case "Druid":
                specSelected = spec4Js.innerText;
                specSelectedJs.innerText = specSelected;
                specSelectedAreaJs.style.backgroundColor = spec4Js.style.backgroundColor;
                specSelectedJs.style.color = "white";
                imgSpecPickerJs.style.visibility = "visible";
                imgSpecPickerJs.src = "./Images/Icons/RoleIcons/HealerSmall.png";
                $(imgSpecPickerJs).show();
                break;
            default:
                break;
        }
    });

    $(btnAddEquipment).click(function () {
        modal.style.display = "block";
        bodyTag.style.overflowY = "hidden";
        bodyTag.style.marginRight = "18px";
        dropSourceBarById.style.right = "8px";
        dropSourceBarById.style.transition = "0s";
        classPickerBarById.style.right = "8px";
        classPickerBarById.style.transition = "0s";

        fetch("./JS/EquipmentsData.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data[0].dungeonEquipments[0].id);
                console.log(data[0].dungeonEquipments[0].name);
                console.log(data[0].dungeonEquipments[0].stat.critical);
            })
            .catch((error) => {
                console.error(error);
            })

        /*
        //MODAL TEST START
        document.getElementById("innerModal").innerText = DATA.dungeonEquipments[12].dungeon;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].boss;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].name;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].slot;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].type;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].bonus.Use;
        //MODAL TEST END
        */
    });

    $(modalClose).click(function () {
        modal.style.display = "none";
        bodyTag.style.overflowY = "auto";
        bodyTag.style.marginRight = "0px";
        dropSourceBarById.style.right = "0px";
        classPickerBarById.style.right = "0px";
        setTimeout(function () {
            dropSourceBarById.style.transition = "0.4s";
            classPickerBarById.style.transition = "0.4s";
        }, 400);
    });

    $(window).click(function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            bodyTag.style.overflowY = "auto";
            bodyTag.style.marginRight = "0px";
            dropSourceBarById.style.right = "0px";
            classPickerBarById.style.right = "0px";
            setTimeout(function () {
                dropSourceBarById.style.transition = "0.4s";
                classPickerBarById.style.transition = "0.4s";
            }, 400);
        }
    });
});

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        dropSourceBarJs.forEach(dropSourceBar => {
            dropSourceBar.style.height = "70px";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.height = "40px";
        });

        dropSourceJs.forEach(dropSource => {
            dropSource.classList.remove('dropSource', 'dropSourceSmall');
            dropSource.classList.add('dropSourceSmall');
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.height = "40px";
        });

        dropSourceText.forEach(dropSourceText => {
            dropSourceText.style.top = "42.5%";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.top = "70px";
        });

    } else {
        dropSourceBarJs.forEach(dropSourceBar => {
            dropSourceBar.style.height = "205px";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.height = "80px";
        });

        dropSourceJs.forEach(dropSource => {
            dropSource.classList.remove('dropSource', 'dropSourceSmall');
            dropSource.classList.add('dropSource');
        });

        dropSourceText.forEach(dropSourceText => {
            dropSourceText.style.top = "42.5%";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.top = "205px";
        });
    }
}
