window.onscroll = function() {scrollFunction()};
const dropSourceBarList = document.querySelectorAll('.dropSourceBar');
const dropSourceList = document.querySelectorAll('.dropSource');
const dropSourceText = document.querySelectorAll('.dropSourceText');
const btnAddEquipment = document.querySelectorAll('.equipImgContainer');
const dropSourceBarById = document.getElementById("dropSourceBarId");
var modalClose = document.getElementsByClassName("close")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var modal = document.getElementById("equipmentModal");
var dungeonSourceClicked, raideSourceClicked, pvpSourceClicked, professionSourceClicked = false;

$(document).ready(function(){ 
    $('#dropSourceDungeonId').click(function(){
        if(dungeonSourceClicked == true){
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

    $('#dropSourceRaideId').click(function(){
        if(raideSourceClicked == true){
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

    $('#dropSourcePvpId').click(function(){
        if(pvpSourceClicked == true){
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

    $('#dropSourceProfessionId').click(function(){
        if(professionSourceClicked == true){
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

    $(btnAddEquipment).click(function(){
        modal.style.display = "block";
        bodyTag.style.overflowY = "hidden";
        bodyTag.style.marginRight = "18px";
        dropSourceBarById.style.right = "8px";
        dropSourceBarById.style.transition = "0s";
    });

    $(modalClose).click(function(){
        modal.style.display = "none";
        bodyTag.style.overflowY = "auto";
        bodyTag.style.marginRight = "0px";
        dropSourceBarById.style.right = "0px";
        setTimeout(function() {
            dropSourceBarById.style.transition = "0.4s";
        }, 500);
    });

    $(window).click(function(event){
        if (event.target == modal) {
            modal.style.display = "none";
            bodyTag.style.overflowY = "auto";
            bodyTag.style.marginRight = "0px";
            dropSourceBarById.style.right = "0px";
            setTimeout(function() {
                dropSourceBarById.style.transition = "0.4s";
            }, 500);
        }
    });
});

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    dropSourceBarList.forEach(dropSourceBar => {
        dropSourceBar.style.top = "0px";
        dropSourceBar.style.height = "80px"
    });

    dropSourceList.forEach(dropSource => {
        dropSource.classList.remove('dropSource','dropSourceSmall');
        dropSource.classList.add('dropSourceSmall');
    });

    dropSourceText.forEach(dropSourceText => {
        dropSourceText.style.top = "42.5%";
    });

  } else {
    dropSourceBarList.forEach(dropSourceBar => {
        dropSourceBar.style.top= "40px";
        dropSourceBar.style.height = "205px"
    });

    dropSourceList.forEach(dropSource => {
        dropSource.classList.remove('dropSource','dropSourceSmall');
        dropSource.classList.add('dropSource');
    });

    dropSourceText.forEach(dropSourceText => {
        dropSourceText.style.top = "42.5%";
    });
  }
}
