class App {
  constructor() {
    const menu = document.querySelectorAll('.menu-item');
    for (let menu_item of menu) {
      menu_item.addEventListener("mouseover", () => {
        menu_item.classList.add('hover');
        menu_item.classList.remove('unhover');
      });
      menu_item.addEventListener("mouseout", () => {
        menu_item.classList.remove('hover');
        menu_item.classList.add('unhover');
      });
      menu_item.addEventListener("click", () => {
        for (let item of menu) {
          item.classList.add('unselected');
          item.classList.remove('selected');
        }
        menu_item.classList.add('selected');
        menu_item.classList.remove('unselected');
        this.openPage();
      });
    }
  }
  openPage() {
    let content = document.querySelector('#content');
    content.querySelector('h1').innerHTML = "potatoes";
    content.querySelector('span').innerHTML = "<p>text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum text lorum ipsum</p>";
  }
}

const app = new App();
