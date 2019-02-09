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
        if (preload) {
            this.load("about-me.md");
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
        console.log(temp);
        return temp;
    }
}

instance = new Webpages("md", true);
