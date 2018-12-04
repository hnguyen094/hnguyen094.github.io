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
        if (alert.indexOf(endText) !== -1) {
          document.querySelector(".play").classList.add("end"); //TODO: not working
        }
      }

      const lines = document.querySelectorAll("span.Style_normal");
      for (let i = 0; i < lines.length -1; i++) { // everything but the last
        const prompt = "What do you do this moment?";
        if(lines[i].innerText.indexOf(prompt) !== -1) {
          lines[i].innerText = lines[i].innerText.replace(prompt,"");
        }
      }

    }
}
const mods = new Mods();
