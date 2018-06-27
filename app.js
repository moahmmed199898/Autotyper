"use strict";
addEventListener("load",()=>{
    var tags = document.querySelector("typer");
    function typeing(tag,speed) {
        var words = tag.innerHTML;
        var speed = tag.dataset.speed;
        var i=0;
        var words_array = [];
        tags.innerHTML="";
        var typer = setInterval(()=>{
            words_array.push(words[i]);
            tag.innerHTML = words_array.join("");
            if(words.length === i) {
                clearInterval(typer);
            } else i++;            
        },speed*1000)
    }
    typeing(tags);
    
    })
