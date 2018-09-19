(() => {
    "use strict";

    class Typer {
        constructor(words, id, delaytime) {
            this.words = words.split("");
            this.id = id;
            this.delaytime = delaytime || null
            this._element = document.getElementById(this.id);
            this._i = 0;
            this._output = [];
            this.init();
        }
        //clear and decide whether time is required
        init() {
            this.render();
            if(typeof this.delaytime === "number"){
                this.timer();
            } else {
                this.process();
            }
        }
        //delayes the typing for this.delaytime
        timer() {
            this.render()
            setTimeout(() => {
                this.process();
            }, this.delaytime)
        }

        //core function
        process() {

            //This method is the core method of the module. This will run throw every letter and store in an array inside this._output then it will call render on it. 
            let _interval = setInterval(() => {
                this._output.push(this.words[this._i]);
                this.render();
                if (this._i === this.words.length) {
                    clearInterval(_interval);
                } else {
                    this._i++;
                }
            }, 300);

        }
        //simply output whatever in this._output
        render() {
            this._element.innerHTML = this._output.join("");
        }
    }

    new Typer("Hello I am a test", "typer")
    new Typer("Hello I am a test2", "typer2", 2000)
})()