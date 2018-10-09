    "use strict";

    class Typer {
        constructor(tag) {
            this.tag = tag;
            this.words = this.tag.innerHTML.split("");
            //making delaystart optional
            this.delaystart = this.tag.dataset.delaystart || null
            //set up the speed of typing in secounds
            // the defult is 300ms
            this.speed = this.tag.dataset.speed || 0.3
            //this var stores the output array from 
            // process to be rejoined in the render method
            this._output = [];
            //this will determin weather the pause() method is called
            // by default it's not paused
            this._paused = false 
            //this _i is used for the for loop in process() the reason it is in the constructor 
            //is because I want to keep the progress when pausing and unpusing the code
            this._i = 0
            //cursor info
            this.cursorNeeded = this.tag.hasAttribute("data-cursor") || false;
            this.cursorSpeed = this.tag.dataset.cursorspeed || 0.3
            //this is needed in init and render
            this._wordsTag
            this.init();
        }
        
        init() {
            //clear and decide whether timer is required
            this.clear();
            //create an elememnt for the words 
            this._wordsTag = document.createElement("span")
            this._wordsTag.className = "words"
            this.tag.appendChild(this._wordsTag)
            //check if cursor needed
            if(this.cursorNeeded) {
                this.cursor()
            }
            //timer requried
            if(this.delaystart > 0){
                this.timer();
            } else {
                this.process();
            }
        }
        cursor() {
            //handels the cursor rendering 
            //create an element
            let cursor = document.createElement("span")
            cursor.className = "cursor"
            this.tag.appendChild(cursor)
            //render
            let _interval = setInterval(()=>{
                if(cursor.innerHTML === "|") {    
                    cursor.innerHTML = ""
                } else {
                    cursor.innerHTML = "|"
                }
            },this.cursorSpeed*1000)
        }
        timer() {
            //delayes the typing for this.delaystart
            this.render()
            setTimeout(() => {
                this.process();
            }, this.delaystart*1000)
        }

        process() {
            //core function
            // This method is the core method of the module.
            // This will run throw every letter and store in an array inside
            // this._output then it will call render on it. 
            let _interval = setInterval(() => {
                this._paused ? clearInterval(_interval) : null
                this._output.push(this.words[this._i]);
                this.render();
                if (this._i === this.words.length) {
                    clearInterval(_interval);
                } else {
                    this._i++;
                }
            }, this.speed*1000);

        }
        clear() {
            this.tag.innerHTML = ""
        }
        render() {
            //simply output whatever in this._output
            this._wordsTag.innerHTML = this._output.join("");
        }
        //These methods can be excuted by the devoloper
        pause() {
            //pauses the typing
            this._paused = true
        }
        unpause() {
            //unpauses the typing ( reverce pause())
            this._paused = false
            this.process()
        }
    }


  //example 
    //all typer tags will work when this code is excuted 
        //   window.addEventListener("load",()=>{
        //         let tags = document.getElementsByTagName("typer");
        //         for(let i = 0; i<tags.length; i++) {
        //             new Typer(tags[i])
        //         }
        //     })

//allow the devoloper more functionality
    var a = new Typer(document.getElementsByTagName("typer")[1])