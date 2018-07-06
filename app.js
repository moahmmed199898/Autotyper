"use strict";
addEventListener("load", () => {
    var tags = document.querySelectorAll("typer");
    init(tags[0]);


})

function init(tag) {
    //geting the information
    var words = tag.innerHTML;
    var typing_speed = tag.dataset.typespeed === undefined ? 0.2 : tag.dataset.typespeed;
    var cursor_speed = tag.dataset.cursorspeed === undefined ? 0.2 : tag.dataset.cursorspeed;
    var cursor_wanted = tag.hasAttribute("data-cursor");
    prep(tag);
    if (cursor_wanted) {
        cursor(words, cursor_speed);
    }
    typing(words, typing_speed);
}

function prep(tag) {
    //clear the tag
    tag.innerHTML = "";
    //creating span for the typing
    var typer_span = document.createElement("span");
    typer_span.className = "typer";
    tag.appendChild(typer_span);
    //create span for cursor 
    var cursor_span = document.createElement("span");
    cursor_span.className = "cursor"
    tag.appendChild(cursor_span);
}

function typing(words, typing_speed) {
    //look here there is a hot fix need to be changed!
    let typer_span = document.getElementsByClassName("typer")[0];
    var i = 0;
    var words_array = [];
    let typer = setInterval(() => {
        words_array.push(words[i]);
        typer_span.innerHTML = words_array.join("");
        if (words.length === i) {
            clearInterval(typer);
        } else i++;
    }, typing_speed * 1000);
}

function cursor(words, cursor_speed) {
    //look here there is a hot fix need to be changed!
    let cursor_span = document.getElementsByClassName("cursor")[0];
    //cursor function 
    if (words.length % 2 !== 0) {
        cursor_span.innerHTML = "|";
    }
    var cursor = setInterval(() => {
        if (cursor_span.innerHTML === "") {
            cursor_span.innerHTML = "|";
        } else {
            cursor_span.innerHTML = "";
        }
    }, cursor_speed * 1000)
}

