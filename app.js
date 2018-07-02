"use strict";
addEventListener("load", () => {
    var tags = document.querySelector("typer");
    function typeing(tag) {
        //geting the information
        var words = tag.innerHTML;
        var typing_speed = tag.dataset.typespeed === undefined ? 0.2 : tag.dataset.typespeed;
        var cursor_speed = tag.dataset.cursorspeed === undefined ? 0.2 : tag.dataset.cursorspeed;
        var cursor_wanted = tag.hasAttribute("data-cursor");
        //clear the tag
        tag.innerHTML = "";
        //creating span for the typing
        var typer_span = document.createElement("span");
        tag.appendChild(typer_span);
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
        //Checking if the the user wants a cursor or not
        if (cursor_wanted) {
            //create span for cursor 
            var cursor_span = document.createElement("span");
            tag.appendChild(cursor_span);
            //cursor function 
            if(words.length % 2 !==0) {
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
    }
    typeing(tags);

})
