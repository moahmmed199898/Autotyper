"use strict";
addEventListener("load", () => {
    var tags = document.querySelector("typer");
    function typeing(tag, speed) {
        //geting the information
        var words = tag.innerHTML;
        var typing_speed = tag.dataset.typespeed === undefined? 0.2 : tag.dataset.typespeed;
        var cursor_speed = tag.dataset.cursorspeed === undefined? 0.2 : tag.dataset.cursorspeed;
        console.log(typing_speed)
        //clear the tag
        tag.innerHTML = "";
        //creating span for the typing
        var typer_span = document.createElement("span");
        tag.appendChild(typer_span);
        //create span for cursor 
        var cursor_span = document.createElement("span");
        tag.appendChild(cursor_span);
        //typing function
        var i = 0;
        var words_array = [];
        var typer = setInterval(() => {
            words_array.push(words[i]);
            typer_span.innerHTML = words_array.join("");
            if (words.length === i) {
                clearInterval(typer);
                clearInterval(cursor);
            } else i++;
        }, typing_speed * 1000)
        //cursor function 
        var cursor = setInterval(() => {
            if (cursor_span.innerHTML === "") {
                cursor_span.innerHTML = "|";
            } else {
                cursor_span.innerHTML = "";
            }
        }, cursor_speed*1000)
    }
    typeing(tags);

})
