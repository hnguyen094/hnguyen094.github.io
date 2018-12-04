class Mods {
    constructor() {
        document.addEventListener("keypress", this.changeInputStyle);
    }
    changeInputStyle() {
        const inputField = document.querySelector('.Input');
        inputField.style.position= "relative";
        inputField.style.width = "50vw";
        inputField.style.animation = "slide 1s";
        inputField.style.webkitAnimation = "slide 1s";
    }
}
const mods = new Mods();
