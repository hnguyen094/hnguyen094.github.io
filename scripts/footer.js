function loadLastModified() {
    const footer = document.getElementsByTagName("footer")[0];
    if (!footer) {
        console.error("no element with tag footer");
    } 
    const elem = document.createElement("span");
    const text = document.createTextNode(document.lastModified);
    elem.appendChild(text);
    footer.appendChild(elem);

    console.log(footer, elem);
  }
  loadLastModified();