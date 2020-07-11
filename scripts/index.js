// function sortGallery(classList) {
//     if (typeof(classList) != String) {
//         console.log("Error in sortGallery: param is not a string");
//         return;
//     }
    
// }

function initBody(elem) {
    const title = elem.getElementsByClassName("item-title")[0];
    const computedHeight = window.getComputedStyle(title).getPropertyValue("height");
    const body = elem.getElementsByClassName("item-body")[0];
    body.style.opacity = 0;
}

function toggleBody(elem, event = null) {
    if(event && event.key !== "Enter" && event.key !== ' ') return;
    if(event) event.preventDefault();
    const body = elem.getElementsByClassName("item-body")[0];
    if (body.style.opacity === "0" || body.style.opacity === "") {
        showBody(elem);
    } else {
        const link = elem.getElementsByClassName("link")[0];
        if (link) window.open(link.textContent, '_blank');
        hideBody(elem);
    }
}

function showBody(elem) {
    const body = elem.getElementsByClassName("item-body")[0];
    const title = elem.getElementsByClassName("item-title")[0];
    const body_overlay = elem.getElementsByClassName("color-body")[0];
    const img = elem.getElementsByClassName("gallery-image")[0];

    const computedHeight = window.getComputedStyle(title).getPropertyValue("height");
    title.style.transform = "translateY(" + (parseInt(computedHeight) / 4) + "px)";
    body.style.transform = "";
    body.style.opacity = 1;
    title.style.opacity = 0;
    body_overlay.style.opacity = 1;
    body_overlay.style.borderTop = "4vw";
    body_overlay.style.borderRight = "4vw";
    if(matchMedia('(pointer:fine)').matches) {
        img.style.width = "95%";
        img.style.height = "95%";
    }
    // title.style.alignItems = "flex-start";

    const left = elem.getElementsByClassName("left-corner")[0];
    if (left) {
        left.style.opacity = 0;
    }
    const right = elem.getElementsByClassName("right-corner")[0];
    if (right) {
        right.style.opacity = 0;
    }
}

function hideBody(elem) {
    const body = elem.getElementsByClassName("item-body")[0];
    const title = elem.getElementsByClassName("item-title")[0];
    const body_overlay = elem.getElementsByClassName("color-body")[0];
    const img = elem.getElementsByClassName("gallery-image")[0];
    if (body.style.opacity !== "0") {
        // const computedHeight = window.getComputedStyle(title).getPropertyValue("height");
        title.style.transform = "";    
        body.style.transform = "";//"translateY(" + (-parseInt(computedHeight) / 4) + "px)";
        body.style.opacity = 0;
        title.style.opacity = "";
        body_overlay.style.opacity = "";
        body_overlay.style.borderTop = "";
        body_overlay.style.borderRight = "";
        if(matchMedia('(pointer:fine)').matches) {
            img.style.width = "";
            img.style.height = "";
        }
        // title.style.alignItems = "";
    }

    const left = elem.getElementsByClassName("left-corner")[0];
    if (left) {
        left.style.opacity = "";
    }
    const right = elem.getElementsByClassName("right-corner")[0];
    if (right) {
        right.style.opacity = "";
    }
}