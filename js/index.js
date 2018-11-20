class Website {
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
        let newstr = str.replace(/\n/g, '<br>'); // \n as new <br>
        newstr = newstr.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // \t
        let regex = /\[[^\[\]]+\]\([^\(\)]+\)/g;
        newstr = newstr.replace(regex, function(st) { // match []()
            console.log(st);
            const dat = this.parsePattern(st, "[]()");
            return this.createHyperlink(dat[0], dat[1]);
        }.bind(this));
        regex = /\[[^\[\]]+\]\{[^\{\}]+\}/g;
        newstr = newstr.replace(regex, function(st) { // match []{}
            const dat = this.parsePattern(st, "[]{}");
            return this.createPopup(dat[0], dat[1]);
        }.bind(this));

        if (newstr[0] == '#') { // # as <h2>
            newstr = '<h2>' + newstr.substr(1, newstr.length-1) + '</h2>';
            const subIndex = newstr.indexOf('##');
            if (subIndex > -1) { // ## as sub-title to h2
                const subtitle = newstr.substr(subIndex + 2).trim();
                newstr = newstr.substr(0, newstr.indexOf('##')) +
                    '<br><a class=\"sub-title\">' + subtitle + '</a>';
            }
        }
        return '<p>' + newstr+ '</p>';
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

    createHyperlink(txt, url) {
        return '<a href=\"' + url + '\" target=\"_blank\"> ' +
            (txt.length == 0? url : txt) + '</a>';
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
