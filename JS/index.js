window.onscroll = function() {scrollFunction()};
const dropSourceBarList = document.querySelectorAll('.dropSourceBar');
const dropSourceList = document.querySelectorAll('.dropSource');
const dropSourceText = document.querySelectorAll('.dropSourceText');

$(document).ready(function(){ 
    $('#dropSourceDungeonId').click(function(){
        document.getElementById("dropSourceDungeonId").style.border = "5px solid";
        document.getElementById("dropSourceDungeonId").style.borderColor = "white";
        document.getElementById("dropSourceDungeonId").style.borderStyle = "ridge";
        document.getElementById("dropSourceDungeonId").style.filter = "grayscale(0%)";
        document.getElementById("dropSourceTextDungeonId").style.color = "white";
    });

    $('#dropSourceRaideId').click(function(){
        document.getElementById("dropSourceRaideId").style.border = "5px solid";
        document.getElementById("dropSourceRaideId").style.borderColor = "white";
        document.getElementById("dropSourceRaideId").style.borderStyle = "ridge";
        document.getElementById("dropSourceRaideId").style.filter = "grayscale(0%)";
        document.getElementById("dropSourceTextRaideId").style.color = "white";
    }); 

    $('#dropSourcePvpId').click(function(){
        document.getElementById("dropSourcePvpId").style.border = "5px solid";
        document.getElementById("dropSourcePvpId").style.borderColor = "white";
        document.getElementById("dropSourcePvpId").style.borderStyle = "ridge";
        document.getElementById("dropSourcePvpId").style.filter = "grayscale(0%)";
        document.getElementById("dropSourceTextPvpId").style.color = "white";
    }); 

    $('#dropSourceProfessionId').click(function(){
        document.getElementById("dropSourceProfessionId").style.border = "5px solid";
        document.getElementById("dropSourceProfessionId").style.borderColor = "white";
        document.getElementById("dropSourceProfessionId").style.borderStyle = "ridge";
        document.getElementById("dropSourceProfessionId").style.filter = "grayscale(0%)";
        document.getElementById("dropSourceTextProfessionId").style.color = "white";
    }); 
});

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    dropSourceBarList.forEach(dropSourceBar => {
        dropSourceBar.style.top = "0px";
        dropSourceBar.style.height = "80px"
    });

    dropSourceList.forEach(dropSource => {
        dropSource.style.maxHeight = "60px";
        dropSource.style.height = "50px";
    });

    dropSourceText.forEach(dropSourceText => {
        dropSourceText.style.top = "30%";
    });

  } else {
    dropSourceBarList.forEach(dropSourceBar => {
        dropSourceBar.style.top= "40px";
        dropSourceBar.style.height = "205px"
    });

    dropSourceList.forEach(dropSource => {
        dropSource.style.maxHeight = "185px";
        dropSource.style.height = "175px";
    });

    dropSourceText.forEach(dropSourceText => {
        dropSourceText.style.top = "40%";
    });
  }
}


