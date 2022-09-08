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
    localStorage.setItem('mouseStatus','mouseNormal');
}
mouseCircle.onclick = function(){
    elem.style.display = 'block';
    localStorage.setItem('mouseStatus','mouseCircle');
}
if(localStorage.mouseStatus === 'mouseNormal'){
    elem.style.display = 'none';
    body.style.cursor = 'auto';
}else{
    elem.style.display = 'block';
}
// mouse cursor js end
// color panel with local storage js start
let colorPanel = document.querySelector('.color-panel');
let colorBtn = document.querySelector('.color-btn');
let colors = document.querySelectorAll('.color');
let colorize = document.getElementsByClassName('colorize');
let colorizeBorder = document.getElementsByClassName('colorize-border');
let colorizeLine = document.getElementsByClassName('colorize-line');
let colorizeLineLink = document.getElementsByClassName('colorize-line-link');
let menu = document.getElementById('menu');
let links = menu.getElementsByClassName('link');
colorBtn.onclick = function(){
    colorPanel.classList.toggle('color-panel-toggle')
}
    // custom color element js start
for(let j = 0; j < colorize.length; j++){
    colorize[j].style.backgroundColor = localStorage.getItem('currentColor');
}
for(let j = 0; j < colorizeBorder.length; j++){
    colorizeBorder[j].style.borderColor = localStorage.getItem('currentColor');
}
for(let j = 0; j < colorizeLine.length; j++){
    colorizeLine[j].style.color = localStorage.getItem('currentColor');
}
for(let j = 0; j < colorizeLineLink.length; j++){
    colorizeLineLink[j].style.color = localStorage.getItem('currentColor');
}
elem.style.setProperty('--box-After',localStorage.getItem('currentColor'));
if(localStorage.getItem('currentColor')){
    for (let i = 0; i < colors.length; i++) {
        colors[i].onclick = function (){
            let currentColor = window.getComputedStyle(colors[i]).backgroundColor;
            let clr = currentColor;
            localStorage.setItem('currentColor',currentColor);
            localStorage.setItem('clr',clr);
                for(let j = 0; j < colorize.length; j++){
                    colorize[j].style.backgroundColor = localStorage.getItem('currentColor');
                }
                for(let j = 0; j < colorizeBorder.length; j++){
                    colorizeBorder[j].style.borderColor = localStorage.getItem('currentColor');
                }
                for(let j = 0; j < colorizeLine.length; j++){
                    colorizeLine[j].style.color = localStorage.getItem('currentColor');
                }
                for(let j = 0; j < colorizeLineLink.length; j++){
                    colorizeLineLink[j].style.color = localStorage.getItem('currentColor');
                }
                elem.style.setProperty('--box-After',localStorage.getItem('currentColor'));
        }
<<<<<<< HEAD
        for(let j = 0; j < colorizeBorder.length; j++){
            colorizeBorder[j].style.borderColor = currentColor;
        }
        for(let j = 0; j < colorizeLine.length; j++){
            colorizeLine[j].style.color = currentColor;
        }
        for(let j = 0; j < colorizeLineLink.length; j++){
            colorizeLineLink[j].style.color = currentColor;
        }
        elem.style.setProperty('--box-After',currentColor);
    }
}
// navbar js start
=======
    }
}
        // navbar js start
>>>>>>> color-control-local-storage
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("colorize-line-link");
        current[0].className = current[0].className.replace("colorize-line-link", "");
        this.className += " colorize-line-link";
<<<<<<< HEAD
        this.style.setProperty('--hover-color',clr);
=======
        this.style.setProperty('--hover-color',localStorage.getItem('clr'));
>>>>>>> color-control-local-storage
    });
    links[i].addEventListener("mouseover", mouseOver);
    links[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
<<<<<<< HEAD
        links[i].style.color = clr;
=======
        links[i].style.color = localStorage.getItem('clr');
>>>>>>> color-control-local-storage
    }
    function mouseOut(){
        // links[i].style.color = '#fff';
        if(links[i].classList[1] === "colorize-line-link"){
            for(let j = 0; j < links.length; j++){
                if(links[j] === links[i]){
<<<<<<< HEAD
                    links[j].style.color = clr;
=======
                    links[j].style.color = localStorage.getItem('clr');
>>>>>>> color-control-local-storage
                }else{
                    links[j].style.color = '#fff';
                }
            }
        }else{
            links[i].style.color = '#fff';
        }
    }     
}
<<<<<<< HEAD
// navbar js end
=======
        // navbar js end
>>>>>>> color-control-local-storage
    // custom color element js end
// color panel with local storage js end
