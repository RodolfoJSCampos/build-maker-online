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
const selectSpecById = document.getElementById("selectSpec");
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
            selectClassById.style.height = "40px";
            classPickerById.style.borderColor = currentColor;
            selectClassById.style.boxShadow = "0px 0px 0px 0px rgb(255, 255, 255)";
            classPickerById.style.boxShadow = "0px 0px 0px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "auto";
            classPickerById.style.cursor = "auto";
            
        })
        .mouseover(function () {
            selectClassById.style.height = "587px";
            classPickerById.style.borderColor = "white";
            selectClassById.style.boxShadow = "0px 0px 7px 0px rgb(255, 255, 255)";
            classPickerById.style.boxShadow = "0px 0px 7px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "pointer";
            classPickerById.style.cursor = "pointer";
        });

    $("div.classPicker")
        .mouseout(function () {
            selectClassById.style.height = "40px";
            classPickerById.style.borderColor = currentColor;
            selectClassById.style.boxShadow = "0px 0px 0px 0px rgb(255, 255, 255)";
            classPickerById.style.boxShadow = "0px 0px 0px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "auto";
            classPickerById.style.cursor = "auto";
        })
        .mouseover(function () {
            selectClassById.style.height = "587px";
            classPickerById.style.borderColor = "white";
            selectClassById.style.boxShadow = "0px 0px 7px 0px rgb(255, 255, 255)";
            classPickerById.style.boxShadow = "0px 0px 7px 0px rgb(255, 255, 255)";
            selectClassById.style.cursor = "pointer";
            classPickerById.style.cursor = "pointer";
        });

    $("#selectSpec")
        .mouseout(function () {
            selectSpecById.style.height = "40px";
        })
        .mouseover(function () {
            selectSpecById.style.height = "300px";
        });

    $(btnAddEquipment).click(function () {
        modal.style.display = "block";
        bodyTag.style.overflowY = "hidden";
        bodyTag.style.marginRight = "18px";
        dropSourceBarById.style.right = "8px";
        dropSourceBarById.style.transition = "0s";
        classPickerBarById.style.right = "8px";
        classPickerBarById.style.transition = "0s";
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
