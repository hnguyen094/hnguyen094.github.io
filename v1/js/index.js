
class Website {
    constructor() {
        this.md = new Remarkable('commonmark', {
            html :  true,
            breaks: true
        });
        // this.md = new showdown.Converter();
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
        fetch("md/" + id + ".md")
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                const contentText = this.md.render(text); // uses remarkable
                // const contentText = this.md.makeHtml(text); // uses showdown
                content.innerHTML = this.formatText(contentText);
            }.bind(this));
    }

    formatText(str) {
        let newstr = str.replace(/\\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'); // \t
        let regex = /\[[^\[\]]+\]\{[^\{\}]+\}/g;
        newstr = newstr.replace(regex, function(st) { // match []{}
            const dat = this.parsePattern(st, "[]{}");
            return this.createPopup(dat[0], dat[1]);
        }.bind(this));
        return newstr;
    }

    parsePattern(st, chars) { // such as "[]()"
        const first = st.substr(st.indexOf(chars[0]) + 1, st.indexOf(chars[1]) -
            st.indexOf(chars[0]) - 1).trim();
        const second= st.substr(st.indexOf(chars[2]) + 1, st.indexOf(chars[3]) -
            st.indexOf(chars[2]) - 1).trim();
        return [first, second];
    }

    createPopup(text, popup) {
        const fn = '\"website.togglePopup(event)\"';
        return '<a class=\"popup\" onmouseleave=' +  fn +
            'onmouseenter='+ fn + '>' +
            text + ' &#9432;<span class=\"popuptext\">' + popup + '</span></a>';
    }

    togglePopup(e) {
        let popup = "";
        if (e.target.classList.contains("popup"))
            popup = e.target.querySelector(".popuptext");
        else
            popup = e.target;
        popup.classList.toggle("show");
    }
}

const website = new Website();
