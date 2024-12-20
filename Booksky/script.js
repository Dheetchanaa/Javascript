var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");

function opened(){
    overlay.style.display = "block";
    popup.style.display = "block";
}

function closed(event){
    event.preventDefault(); //to prevent from page reload.
    overlay.style.display = "none";
    popup.style.display = "none";
}

var maincontainer = document.querySelector(".main-container");
var booktitle = document.getElementById("book-title");
var bookauthor = document.getElementById("book-author");
var bookdescription = document.getElementById("book-description");

function addition(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","container");
    div.innerHTML=`<h2>${booktitle.value}</h2><h5>${bookauthor.value}</h5><p>${bookdescription.value}</p><button onclick="del(event)">Delete</button>`
    maincontainer.append(div);
    overlay.style.display = "none";
    popup.style.display = "none";
}

function del(event){
    event.target.parentElement.remove();
}