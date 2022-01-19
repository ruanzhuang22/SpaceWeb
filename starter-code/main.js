// const btnHamburger = document.querySelector('.menu-button');
// const headerHome = document.querySelector('.header-home');
// const headerMenu = document.querySelector('.header-menu');

// btnHamburger.addEventListener("click",()=>{
//     console.log("hello");
//     if(headerHome.classList.contains("open")){
//         headerHome.classList.remove("open");
//         headerMenu.style.display="none";
//     }
//     else{
//         headerHome.classList.add("open");
//         headerMenu.style.display="block";
//     }
// })

const menu=document.querySelector(".menu-button");
const nav = document.querySelector(".nav-list");
menu.addEventListener("click",()=>{
    const menuLogo = document.querySelector("#menu-logo");
    if (menuLogo.src.match('./assets/shared/icon-hamburger.svg')) {
        menuLogo.src = "./assets/shared/icon-close.svg";
        nav.style.transform = "scale(1)";
    }
    else{
        menuLogo.src ="./assets/shared/icon-hamburger.svg";
        nav.style.transform="scale(0)";
    }
})
// end nav
const navText = document.querySelectorAll(".nav-text");
const planeImg = document.getElementById("img-destination");
const tabpanels = document.querySelectorAll('.tabpanel');
// console.log(navText,planeImg, tabpanels);
var clickHandlerDes = function clickHandler(e) {
    tabpanels.forEach(function (el) {
        if (el.getAttribute("aria-labelledby")==e.target.id) {
            el.removeAttribute("hidden");
            e.target.ariaSelected = true;
            e.target.classList.add("visited-link");
            navText.forEach(function (ele) {
                if(ele.id != e.target.id){
                    ele.ariaSelected = "false";
                    ele.classList.remove("visited-link");
                }
            })
            switch(e.target.id){
                case'moon-tab':
                    planeImg.src="./assets/destination/image-moon.png";
                    break;
                case'mars-tab':
                    planeImg.src="./assets/destination/image-mars.png";
                    break;
                case'eurapo-tab':
                    planeImg.src="./assets/destination/image-eurapo.png";
                    break;
                case'titan-tab':
                    planeImg.src="./assets/destination/image-titan.png";
                    break;
            }
        }
        else{
            var attr = document.createAttribute("hidden");
            el.setAttributeNode(attr);
        }
    })
    
}
navText.forEach(function (params) {
    params.addEventListener("click",clickHandlerDes);
});
// end destination
const btnTab = document.querySelectorAll(".btn");
const peopleImg = document.getElementById("img-crew");
const textCrew = document.querySelectorAll('.text-crew');
// console.log(btnTabCrew,peopleImg,textCrew);
var clickHandlerCrew = function clickHanlder(e) {
    textCrew.forEach(function (el) {
        if (el.getAttribute("aria-labelledby")==e.target.id) {
            el.removeAttribute("hidden");
            e.target.asiaSelected = true;
            e.target.classList.add("vistied-link");
            btnTab.forEach(function (ele) {
                if (ele.id != e.target.id) {
                    ele.ariaSelected = "flase";
                    ele.classList.remove("visited-link");
                }  
            })
            switch (e.target.id) {
                case "btn1-tab":
                    peopleImg.src = ("./assets/crew/image-anousheh-ansari.png");
                    break;
                case "btn2-tab":
                    peopleImg.src = ("./assets/crew/image-douglas-hurley.png");
                    break;
                case "btn3-tab":
                    peopleImg.src = ("./assets/crew/image-mark-shuttleworth.png");
                    break;
                case "btn4-tab":
                    peopleImg.src = ("./assets/crew/image-victor-glover.png");
                    break;
            }
        }
        else{
            var attrCrew = document.createAttribute("hidden");
            el.setAttributeNode(attrCrew);
        }
    })
    
}

btnTab.forEach(function (params) {
    params.addEventListener("click",clickHandlerCrew);
});
// end crew
const btnTech = document.querySelectorAll(".btnn");
const techImg = document.getElementById("technology-img");
const firstImg = document.getElementById("firstSrc");
const secondImg = document.getElementById("secondSrc");
const textTech = document.querySelectorAll(".text-tech");
// console.log(btnTech,techImg,textTech);
var clickHandlerTech = function clickHandler(e) {
    textTech.forEach(function (el) {
        if (el.getAttribute("aria-labelledby")==e.target.id) {
            el.removeAttribute("hidden");
            e.target.asiaSelected = true;
            e.target.classList.add("visited-link");
            btnTech.forEach(function (ele) {
                if(ele.id != e.target.id){
                    ele.asiaSelected = "false";
                    ele.classList.remove("visited-link");
                }
            })
            switch (e.target.id) {
                case 'btn01-tab':
                    techImg.src = ("./assets/technology/image-launch-vehicle-landscape.jpg");
                    firstImg.srcset = ("./assets/technology/image-launch-vehicle-landscape.jpg");
                    secondImg.srcset = ("./assets/technology/image-launch-vehicle-portrait.jpg")
                    break;;
                case 'btn02-tab':
                    techImg.src = ("./assets/technology/image-space-capsule-landscape.jpg");
                    firstImg.srcset = ("./assets/technology/image-space-capsule-landscape.jpg");
                    secondImg.srcset = ("./assets/technology/image-space-capsule-portrait.jpg");
                    break;
                case 'btn03-tab':
                    techImg.src = ("./assets/technology/image-spaceport-landscape.jpg");
                    firstImg.srcset = ("./assets/technology/image-spaceport-landscape.jpg");
                    secondImg.srcset = ("./assets/technology/image-spaceport-portrait.jpg");
                    break;
            }
        }
        else{
            var attrTech = document.createAttribute("hidden");
            el.setAttributeNode(attrTech);
        }
        
    })
}
btnTech.forEach(function (params) {
    params.addEventListener("click", clickHandlerTech);
});
