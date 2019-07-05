/* Webpages: This class should handle opening all the md files,
 * loading them to whatever place is asked of them. This will
 * replace openPage(id) which was written in js/index.js
 * */
class Webpages {
    /* The constructor should do nothing more than to initialize the interface
     * that will be used (API calls). For now, it'll take the location of the
     * md files.
     * */
    constructor(path, preload=false) {
        this.md = new Remarkable('commonmark', {
            html : true,
            breaks: true
        });
        this.path = path + "/";
        this.files= ["about-me", "adventures", "contact", "education", "experience", "welcome"]
        if (preload) {
            this.load(this.files[0] + ".md");
        }
    }
    /* This function will load a file from the directory. assumes starting from
     * the path given in the constructor
     */
    async load(filename) {
        let temp = "";
        await fetch(this.path + filename).then(
            function(response) {
                return response.text();
            },
            error => console.log(error)
        ).then(
            function(text) {
                temp = this.md.render(text);
            }.bind(this),
            error => console.log(error)
        );
        return temp;
    }
    async loadAll(elem) {
        for (let file of this.files) {
            console.log(file)
            elem.innerHTML = await this.load(file + ".md");
        }
    }
}
instance = new Webpages("../md", false);
instance.loadAll(document.getElementById("allContents"));
