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
            this.init();
        }
        
        init() {
            //clear and decide whether time is required
            this.render();
            if(this.delaystart > 0){
                this.timer();
            } else {
                this.process();
            }
        }
        
        timer() {
            //delayes the typing for this.delaystart
            this.render()
            setTimeout(() => {
                this.process();
            }, this.delaystart*1000)
        }

        pause() {
            this._paused = true
        }
        unpause() {
            this._paused = false
            this.process()
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
        render() {
            //simply output whatever in this._output
            this.tag.innerHTML = this._output.join("");
        }
    }

  //This code is used to automate the code so as soon as the page loads it will loop throw all the elements that have the tag "typer" 
  //and run new Typer on it. Each tag can be customized using the data- attributes
//   window.addEventListener("load",()=>{
//         let tags = document.getElementsByTagName("typer");
//         for(let i = 0; i<tags.length; i++) {
//             let a = new Typer(tags[i])
//         }
//     })

    var a = new Typer(document.getElementsByTagName("typer")[1])