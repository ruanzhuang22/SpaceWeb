const menu=document.querySelector(".menu-button");
const nav = document.querySelector(".nav-list");
menu.addEventListener("click",()=>{
    const menuLogo = document.querySelector("#menu-logo");
    if (menuLogo.src.match('./assets.share/icon-hamburger.svg')) {
        menuLogo.src = "./assets/shared/icon-close.svg";
        nav.style.transform = "scale(1)";
    }
    else{
        menuLogo.src ="./assets/shared/icon-hamburger.svg";
        nav.style.transform="scale(0)";
    }
})
// end nav
const navText = document.querySelectorAll(".navText");
const planeImg = document.querySelectorId("img-destination");
const tabpanels = document.querySelectorAll('.tabpanel');
console.log(navText,planeImg, tabpanels);