// mouse cursor js start
document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 15;
    let mousey = event.clientY - 15;
    let elem = document.querySelector('.cursor-glow');
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});
let mouseNormal = document.querySelector('.normal');
let mouseCircle = document.querySelector('.circle');
let elem = document.querySelector('.cursor-glow');
let body = document.querySelector('body');
mouseNormal.onclick = function(){
    elem.style.display = 'none';
    body.style.cursor = 'auto';
}
mouseCircle.onclick = function(){
    elem.style.display = 'block';
    body.style.cursor = 'none';
}

// mouse cursor js end
// color panel js start
let colorPanel = document.querySelector('.color-panel');
let colorBtn = document.querySelector('.color-btn');
let colors = document.querySelectorAll('.color');
let colorize = document.getElementsByClassName('colorize');
let colorizeBorder = document.getElementsByClassName('colorize-border');
let colorizeLine = document.getElementsByClassName('colorize-line');
colorBtn.onclick = function(){
    colorPanel.classList.toggle('color-panel-toggle')
}
    // custom color element js start
for (let i = 0; i < colors.length; i++) {
    colors[i].onclick = function (){
        let currentColor = window.getComputedStyle(colors[i]).backgroundColor;
        for(let j = 0; j < colorize.length; j++){
            colorize[j].style.backgroundColor = currentColor;
        }
        for(let j = 0; j < colorizeBorder.length; j++){
            colorizeBorder[j].style.borderColor = currentColor;
        }
        for(let j = 0; j < colorizeLine.length; j++){
            colorizeLine[j].style.color = currentColor;
        }
        elem.style.setProperty('--boxAfter',currentColor);
    }
}
    // custom color element js end
// color panel js end
// loading screen js start
function loading() {
    let loader = document.querySelector(".loading")
    loader.style.display = "none"
}

window.addEventListener("load", loading);

$(window).load(function() {
    $('html, body').css('overflowY', 'auto'); 
});
// loading screen js end