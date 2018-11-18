class App {
    constructor() {
        const menu = document.querySelectorAll('.menu-item');
        const startpage = "welcome";
        this.openPage(startpage);

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
                this.openPage(menu_item.id);
            });
        }
    }

    openPage(id) {
        // TODO: put the selected and unselected here.
        const content = document.querySelector('#content');
        const title = pages[id][0];
        content.querySelector('h1').innerHTML = title;
        let body = '';
        for (let i = 1; i < pages[id].length; i++)
            body += this.formatText(pages[id][i]);
        content.querySelector('span').innerHTML = body;
    }

    formatText(str) {
        let newstr = str.replace(/\n/g, '</p><p>'); // \n as new <p>
        const regex = /\[.*\]\(.*\)/g; // match []() link
        newstr = newstr.replace(regex, function(st) { // replace first instance of []()
            const url = st.substr(st.indexOf('(') + 1, st.indexOf(')') - st.indexOf('(') -1).trim();
            const txt = st.substr(st.indexOf('[') + 1, st.indexOf(']') - st.indexOf('[') -1).trim();
            return '<a href=\"' + url + '\" target=\"_blank\"> ' + (txt.length == 0? url:txt) + '</a>';
        });
        if (newstr[0] == '#') {
            newstr = '<h2>' + newstr.substr(1, newstr.length-1) + '</h2>';
            const subIndex = newstr.indexOf('##');
            if (subIndex > -1) {
                const subtitle = newstr.substr(subIndex + 2).trim();
                newstr = newstr.substr(0, newstr.indexOf('##')) + '<br><a class=\"sub-title\">' + subtitle + '</a>';
            }
        }
        return '<p>' + newstr + '</p>';
    }
}
const app = new App();
