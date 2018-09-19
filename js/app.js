(() => {
    "use strict";

    class Typer {
        constructor(tag) {
            this.tag = tag;
            this.words = this.tag.innerHTML.split("");
            this.delaystart = this.tag.dataset.delaystart || null
            this._i = 0;
            this._output = [];
            this.init();
        }
        //clear and decide whether time is required
        init() {
            this.render();
            if(this.delaystart > 0){
                this.timer();
            } else {
                this.process();
            }
        }
        //delayes the typing for this.delaystart
        timer() {
            this.render()
            setTimeout(() => {
                this.process();
            }, this.delaystart*1000)
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
            this.tag.innerHTML = this._output.join("");
        }
    }

  //This code is used to automate the code so as soon as the page loads it will loop throw all the elements that have the tag "typer" 
  //and run new Typer on it. Each tag can be customized using the data- attributes
  window.addEventListener("load",()=>{
        let tags = document.getElementsByTagName("typer");
        for(let i = 0; i<tags.length; i++) {
            new Typer(tags[i])
        }
    })
})()