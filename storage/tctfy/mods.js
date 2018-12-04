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
    changeInputStyle() {
        console.log(document.getScroll());
        const inputField = document.querySelector('.Input');
        inputField.style.position= "relative";
        inputField.style.width = "50vw";
        inputField.style.animation = "slide 1s";
        inputField.style.webkitAnimation = "slide 1s";
        inputField.style.OAnimation = "slide 1s";
        inputField.style.MozAnimation = "slide 1s";
    }
}
const mods = new Mods();
