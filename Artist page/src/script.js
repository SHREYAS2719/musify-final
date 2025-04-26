let menu = document.querySelector(".menu-icon");
let close = document.querySelector(".close");
let sidebar = document.querySelector(".side-menu-bar");
let playline = document.querySelector(".play-line");
let seemorebtn = document.querySelector(".see-more-btn");
let seemoreclick = document.querySelector(".see-more-click");
let seemore = document.querySelector(".see-more");
let randomsong = document.querySelector(".random-song");
let lessmoreclick = document.querySelector(".less-more-click");
let down = document.querySelector(".down");
let downplayline = document.querySelector(".down-play-line");



menu.addEventListener("click", function () {
    sidebar.style.display = "block"
})

close.addEventListener("click", function () {
    sidebar.style.display = "none"
})

seemoreclick.addEventListener("click", function () {
    seemorebtn.style.display = "none"
    seemore.style.display = "flex"
    randomsong.style.height = "1000px"
})

lessmoreclick.addEventListener("click", function () {
    seemorebtn.style.display = "block"
    seemore.style.display = "none"
    randomsong.style.height = "500px"
})



var click = 0;

const mediaQuery = window.matchMedia('(max-width: 500px)');
downplayline.addEventListener("click", function () {
    if (click == 0) {
        playline.style.display = "none";
        playline.style.position = 'absolute';
        playline.style.top = "46px";
        down.style.position = 'absolute'
        down.style.top = "2%"
        click = 1
    } else{
        playline.style.position = 'absolute';
        playline.style.top = "700px";
        down.style.top = "-12.3px"
        click = 0
    }
})







