class Mods {
    constructor() {
        document.addEventListener("keypress", this.changeInputStyle);
    }
    changeInputStyle() {
        const inputField = document.querySelector('.Input');
        inputField.style.position= "relative";
        inputField.style.width = "50vw";
    }
}
const mods = new Mods();
