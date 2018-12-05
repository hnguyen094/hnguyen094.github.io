class Mods {
    constructor() {
        document.addEventListener("keypress", this.changeInputStyle);
        document.addEventListener("click", this.pullKeyboard);
        document.getScroll = function() {
            if (window.pageYOffset != undefined) {
                return [pageXOffset, pageYOffset];
            } else {
                var sx, sy, d = document,
                    r = d.documentElement,
                    b = d.body;
                sx = r.scrollLeft || b.scrollLeft || 0;
                sy = r.scrollTop || b.scrollTop || 0;
                return [sx, sy];
            }
        }
        this.clockTicking = new Audio('clock-ticking-slow.wav');
        this.clockTicking.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
        }, false);
    }

    pullKeyboard() {
        const inputField = document.querySelector('.Input');
        inputField.focus();
    }

    changeInputStyle(event) {
        const inputField = document.querySelector('.Input');

        // if (event.keycode == 13)
        //   console.log("you pressed enter!");

        // for (const thing of document.querySelectorAll('.Style_normal'))
        //   thing.style.display = "inline-block";
        // inputField.style.position= "relative";
        // inputField.style.width = "auto";
        // inputField.style.display = "inline-block";
        // inputField.style.width = "50vw";
        // inputField.style.animation = "slide 1s";
        // inputField.style.webkitAnimation = "slide 1s";
        // inputField.style.OAnimation = "slide 1s";
        // inputField.style.MozAnimation = "slide 1s";
    }

    changeOnEnter() { // can be called where the console.log is
      // *** The End *** .Style_alert
      const alerts = document.querySelectorAll("span.Style_alert");
      for (const alert of alerts) {
        const endText = "*** The End ***";
        if (alert.innerText.indexOf(endText) !== -1) {
          const body = document.querySelector(".play");
          body.classList.add("noselect");
          body.classList.add("end");
          setTimeout(function(){
            this.clockTicking.pause();
          }.bind(this), 16000);
          const input = document.querySelector(".Input");
          input.remove();
        }
      }

      const lines = document.querySelectorAll("span.Style_normal");
      for (let i = 0; i < lines.length; i++) { // everything but the last
        const prompt = "What do you do this moment?";
        if(lines[i].innerText.indexOf(prompt) !== -1) {
          if (i!== lines.length-1) {
            lines[i].innerText = lines[i].innerText.replace(prompt,"");
          } else {
            lines[i].style.color = "grey";
          }
        }
        const clockTicks = "In the silence, the clock ticks.";
        if (lines[i].innerText.indexOf(clockTicks) !== -1) {
          this.clockTicking.play();
        }
        const endText = "Would you like to RESTART, RESTORE a saved game, QUIT or UNDO the last command?";
        if (lines[i].innerText.indexOf(endText) !== -1) {
          lines[i].innerText = "";
        }
      }

    }
}
const mods = new Mods();
