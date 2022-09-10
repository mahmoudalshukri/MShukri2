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
    // localStorage.setItem('mouseStatus','mouseNormal');
}
mouseCircle.onclick = function(){
    elem.style.display = 'block';
    // localStorage.setItem('mouseStatus','mouseCircle');
}
// if(localStorage.mouseStatus === 'mouseNormal'){
//     elem.style.display = 'none';
//     body.style.cursor = 'auto';
// }else{
//     elem.style.display = 'block';
// }
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
let rMenu = document.getElementById('rmenu');
let links = menu.getElementsByClassName('link');
let resLinks = rMenu.getElementsByClassName('res-link');
let resColorizeLineLink = document.getElementsByClassName('res-colorize-line-link');
colorBtn.onclick = function(){
    colorPanel.classList.toggle('color-panel-toggle')
}
    // custom color element js start
// for(let j = 0; j < colorize.length; j++){
//     colorize[j].style.backgroundColor = localStorage.getItem('currentColor');
// }
// for(let j = 0; j < colorizeBorder.length; j++){
//     colorizeBorder[j].style.borderColor = localStorage.getItem('currentColor');
// }
// for(let j = 0; j < colorizeLine.length; j++){
//     colorizeLine[j].style.color = localStorage.getItem('currentColor');
// }
// for(let j = 0; j < colorizeLineLink.length; j++){
//     colorizeLineLink[j].style.color = localStorage.getItem('currentColor');
// }
// for(let j = 0; j < resColorizeLineLink.length; j++){
//     resColorizeLineLink[j].style.color = localStorage.getItem('currentColor');
// }
// elem.style.setProperty('--box-After',localStorage.getItem('currentColor'));
// if(localStorage.getItem('currentColor')){
    let currentColor = '#5e9e9f';
    let clr = '#5e9e9f';
    for (let i = 0; i < colors.length; i++) {
        colors[i].onclick = function (){
            currentColor = window.getComputedStyle(colors[i]).backgroundColor;
            clr = currentColor;
            // let currentColor = window.getComputedStyle(colors[i]).backgroundColor;
            // let clr = currentColor;
            // localStorage.setItem('currentColor',currentColor);
            // localStorage.setItem('clr',clr);
                for(let j = 0; j < colorize.length; j++){
                    colorize[j].style.backgroundColor = currentColor;
                    // colorize[j].style.backgroundColor = localStorage.getItem('currentColor');
                }
                for(let j = 0; j < colorizeBorder.length; j++){
                    colorizeBorder[j].style.borderColor = currentColor;
                    // colorizeBorder[j].style.borderColor = localStorage.getItem('currentColor');
                }
                for(let j = 0; j < colorizeLine.length; j++){
                    colorizeLine[j].style.color = currentColor;
                    // colorizeLine[j].style.color = localStorage.getItem('currentColor');
                }
                for(let j = 0; j < colorizeLineLink.length; j++){
                    colorizeLineLink[j].style.color = currentColor;
                    // colorizeLineLink[j].style.color = localStorage.getItem('currentColor');
                }
                for(let j = 0; j < resColorizeLineLink.length; j++){
                    resColorizeLineLink[j].style.color = currentColor;
                    // resColorizeLineLink[j].style.color = localStorage.getItem('currentColor');
                }
                elem.style.setProperty('--box-After',currentColor);
                // elem.style.setProperty('--box-After',localStorage.getItem('currentColor'));
        }
    }
// }
        // navbar js start
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("colorize-line-link");
        current[0].className = current[0].className.replace("colorize-line-link", "");
        this.className += " colorize-line-link";
        this.style.setProperty('--hover-color',clr);
        // this.style.setProperty('--hover-color',localStorage.getItem('clr'));
    });
    links[i].addEventListener("mouseover", mouseOver);
    links[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
        links[i].style.color = clr;
        // links[i].style.color = localStorage.getItem('clr');
    }
    function mouseOut(){
        // links[i].style.color = '#fff';
        if(links[i].classList[1] === "colorize-line-link"){
            for(let j = 0; j < links.length; j++){
                if(links[j] === links[i]){
                    links[j].style.color = clr;
                    // links[j].style.color = localStorage.getItem('clr');
                }else{
                    links[j].style.color = '#fff';
                }
            }
        }else{
            links[i].style.color = '#fff';
        }
    }     
}
        // navbar js end
    // custom color element js end
// color panel with local storage js end
// responsive menu js start
let bar = document.querySelector('.bar');
let resMenu = document.querySelector('.res-menu');
let span1 = document.querySelector('.one');
let span2 = document.querySelector('.two');
let span3 = document.querySelector('.three');
let special = document.querySelector('.special');
bar.onclick = function(){
    resMenu.classList.toggle('res-menu-toggle');
    span2.classList.toggle('rotate');
    special.classList.toggle('-rotate');
    span1.classList.toggle('hide');
    span3.classList.toggle('hide');
}
for (let i = 0; i < resLinks.length; i++) {
    resLinks[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("res-colorize-line-link");
        current[0].className = current[0].className.replace("res-colorize-line-link", "");
        this.className += " res-colorize-line-link";
        this.style.setProperty('--res-hover-color',clr);
        // this.style.setProperty('--res-hover-color',localStorage.getItem('clr'));
        
    });
    resLinks[i].addEventListener("mouseover", mouseOver);
    resLinks[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
        resLinks[i].style.color = clr;
        // resLinks[i].style.color = localStorage.getItem('clr');
    }
    function mouseOut(){
        if(resLinks[i].classList[1] === "res-colorize-line-link"){
            for(let j = 0; j < resLinks.length; j++){
                if(resLinks[j] === resLinks[i]){
                    resLinks[j].style.color = clr;
                    // resLinks[j].style.color = localStorage.getItem('clr');
                }else{
                    resLinks[j].style.color = '#fff';
                }
            }
        }else{
            resLinks[i].style.color = '#fff';
        }
    }     
}
// responsive menu js end
// website pages js start
let home = document.getElementById('home');
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let news = document.getElementById('news');
let contact = document.getElementById('contact');
let aHome = document.getElementById('a-home');
let aAbout = document.getElementById('a-about');
let aPortfolio = document.getElementById('a-portfolio');
let aNews = document.getElementById('a-news');
let aContact = document.getElementsByClassName('a-contact');
aHome.onclick = function(){
    home.style.zIndex = '8';
    about.style.zIndex = '0';
    portfolio.style.zIndex = '0';
    news.style.zIndex = '0';
    contact.style.zIndex = '0';
}
aAbout.onclick = function(){
    home.style.zIndex = '0';
    about.style.zIndex = '8';
    portfolio.style.zIndex = '0';
    news.style.zIndex = '0';
    contact.style.zIndex = '0';
}
aPortfolio.onclick = function(){
    home.style.zIndex = '0';
    about.style.zIndex = '0';
    portfolio.style.zIndex = '8';
    news.style.zIndex = '0';
    contact.style.zIndex = '0';
}
aNews.onclick = function(){
    home.style.zIndex = '0';
    about.style.zIndex = '0';
    portfolio.style.zIndex = '0';
    news.style.zIndex = '8';
    contact.style.zIndex = '0';
}
for(let i = 0; i < aContact.length; i++){
    aContact[i].onclick = function(){
        home.style.zIndex = '0';
        about.style.zIndex = '0';
        portfolio.style.zIndex = '0';
        news.style.zIndex = '0';
        contact.style.zIndex = '8';
    }
}
// website pages js end