let nav = document.querySelector("nav");
let navOffest = nav.offsetTop;
var navHeight = nav.offsetHeight;
let header = document.querySelector("header");
window.onscroll = () => {
    scrollSection();
    navsectionScroll();
    showTopButton();
    navScroll();
};
function navScroll() {

    if (window.pageYOffset > (navOffest + navHeight)) {
        let now = window.pageYOffset;
        header.classList.add("scroll");
        nav.style.display = "block";
        setTimeout(() => {
            if ((screen.Width > 1200) || (window.innerWidth > 1020)) {
                if (window.pageYOffset === now) {
                    nav.style.display = "none";
                }
            }
        }, 2000);
    }
    if (window.pageYOffset < (navHeight)) {
        header.classList.remove("scroll");
        nav.style.display = "block";
    };
};



// end nav
// start sections
let sections = document.querySelectorAll("section");
let mySections = Array.from(sections);
let navLi = document.querySelectorAll("nav ul li");
let liNav = Array.from(navLi);
function scrollSection() {
    mySections.forEach(section => {
        if (window.pageYOffset >= (section.offsetTop - section.offsetHeight * 0.5)) {
            mySections.forEach(section => {
                section.classList.remove("active");
            });
            section.classList.add("active");
        }
    });
}
function navsectionScroll() {
    for (let i = 0; i < liNav.length; i++) {
        if (mySections[i].classList.contains("active")) {
            liNav.forEach(li => {
                li.classList.remove("active");
            })
            liNav[i].classList.add("active");
        }
    }
}
// end sections
// start top button
const scrollTop = document.querySelector(".to-top");
const topText = document.querySelector("div>span");
topText.onmouseenter = () => {
    view()
}
topText.onmouseleave = () => {
    hide()
}
scrollTop.onmouseenter = () => {
    view()
}
scrollTop.onmouseleave = () => {
    hide()
}
function view() {
    scrollTop.style.cssText = "border-color: transparent transparent #009688;";
}
function hide() {
    scrollTop.style.cssText = "border-color: transparent transparent #0096876c;";
}
function showTopButton() {
    if (window.pageYOffset < screen.height * 0.8) {
        scrollTop.style.display = "none";
        topText.style.display = "none"
    } else {
        scrollTop.style.display = "inline-block";
        topText.style.display = "inline-block"
    }
}

// end top button
//  start burger menue
var burger = document.querySelector(".burger");
burger.onclick = () => {
    if (burger.classList.contains("active")) {
        burger.classList.remove("active");
        nav.classList.remove("onclick");
    } else {
        burger.classList.add("active");
        nav.classList.add("onclick");
    }
}
// end burger menue

