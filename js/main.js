
var newWindow = document.createElement("div");
newWindow.setAttribute("id","newWindow");
newWindow.setAttribute("width", window.innerWidth);
newWindow.setAttribute("height", window.innerHeight);

var header = document.getElementById("header");
var buttons = document.getElementById("buttonContainer")

window.onload = setPortfolio();

function setPortfolio() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    //if (detectMobile()) {drawMobile();}

    const options = document.getElementsByClassName("option");
    for(let i=0; i<options.length; i++) {
        options[i].onclick = function() {
            optionSelect(options[i]);
        }
    }
}

function optionSelect(option) {

    switch (option.getAttribute("id")) {
        case 'resume':
            window.location.href = "data/2025resume.pdf";
            break;
        case 'mapwork':
            window.location.href = "mapwork.html";
            break;
        case 'personal':
            window.location.href = "personal.html";
            break;
    }
}
