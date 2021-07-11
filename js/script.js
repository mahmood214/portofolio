// variables
let myColors = document.querySelectorAll("body .control .colors .color");
let myGear = document.querySelector("body .control > div:nth-child(2)");
let colorsBox = document.querySelector("body .control .colors");
let navControl = document.querySelector("body .navbar  .navControl");
let burger = document.querySelectorAll("body .navbar  .navControl div");
let navText = document.querySelectorAll("body .navbar .content div span");
let pageList = document.querySelectorAll("body .navbar .content div");




// changing the main color
myColors.forEach(color => {
    color.onclick = () => {
        document.documentElement.style.setProperty('--color1', color.getAttribute("data-color1"));
        document.documentElement.style.setProperty('--color2', color.getAttribute("data-color2"));
    }
});
function test() {
    myColors.forEach(color => {
        color.style.backgroundColor = `${color.getAttribute("data-color1")}`
    });
    document.querySelector("body > .control > div:nth-child(2) > div").style.borderColor = `  ${myColors[0].getAttribute("data-color1")} ${myColors[3].getAttribute("data-color1")}  ${myColors[2].getAttribute("data-color1")} ${myColors[1].getAttribute("data-color1")}`
}
test();
// moving the gear (the color controlor)
function gearFunc() {
    if (myGear.getAttribute("state") === "active") {
        myGear.removeAttribute("state");
        colorsBox.style.cssText = `opacity: 0;`
        myColors.forEach(color => {
            document.querySelector("body .control").style.cssText = `right: ${myColors.offsetWidth}px`
        });
    } else {
        myGear.setAttribute("state", "active")
        colorsBox.style.cssText = `opacity: 1;`
        myColors.forEach(color => {
            document.querySelector("body .control").style.cssText = `right: 2vw`
        });
    }
}
myGear.onclick = () => {
    gearFunc();
}


// controlling the nav
function mobileNav() {
    window.onload = () => {

        navControl.state = "false"
    }
    if (navControl.hasAttribute("state") === true) {
        for (var i = 0; i <= burger.length - 1; i++) {
            burger[i].style.cssText = `width:100%;`
        }
        for (var n = 0; n <= navText.length - 1; n++) {
            navText[n].style.cssText = `width:auto;`
        }
        document.querySelector("body>.navbar>h2").style.cssText = "display:block ";
        document.querySelector("body>.navbar").style.cssText = "width:50vw ";
        document.querySelector("body>.navbar").style.cssText = "width:min-width ";
        document.querySelector("body>.active").style.cssText = `left:-1${document.querySelector("body .navbar").offsetWidth}px`

        navControl.removeAttribute("state");

    } else {
        for (var i = 0; i <= burger.length - 1; i++) {
            burger[i].style.cssText = `width:${25 + i * 25}%;`;
        }
        for (var n = 0; n <= navText.length - 1; n++) {
            navText[n].style.cssText = `width:0;margin: 2vw 0.25vw 2vw 0.25vw`;
        }
        document.querySelector("body .navbar h2").style.cssText = "display:none ";
        document.querySelector("body>.navbar").style.cssText = "width:min-width ";
        document.querySelector("body>.active").style.cssText = `filter: grayscale(0%);left:${document.querySelector("body .navbar").offsetWidth}px;`
        navControl.setAttribute("state", "")

    }
}
function desktopNav() {
    if (navControl.hasAttribute("state") === true) {

        for (var i = 0; i <= burger.length - 1; i++) {
            burger[i].style.cssText = `width:100%;`
        }
        for (var n = 0; n <= navText.length - 1; n++) {
            navText[n].style.cssText = `width:auto;`
        }
        document.querySelector("body>.navbar>h2").style.cssText = "display:block ";
        document.querySelector("body>.active").style.cssText = `left:${document.querySelector("body .navbar").offsetWidth}px`
        navControl.removeAttribute("state");
    } else {
        for (var i = 0; i <= burger.length - 1; i++) {
            burger[i].style.cssText = `width:${25 + i * 25}%;`;
        }
        for (var n = 0; n <= navText.length - 1; n++) {
            navText[n].style.cssText = `width:0;margin: 2vw 0.25vw 2vw 0.25vw`;
        }
        document.querySelector("body .navbar h2").style.cssText = "display:none ";
        document.querySelector("body>.active").style.cssText = `left:${document.querySelector("body .navbar").offsetWidth}px;`
        navControl.setAttribute("state", "")
    }
}
function navFunc() {
    if (window.innerWidth < 850) {
        mobileNav();
    } else {
        desktopNav();
    }
}
navControl.onclick = () => {
    navFunc();
}

// display the page i want with nice animation
function pageFunc() {
    pageList.forEach(page => {
        page.onclick = () => {
            pageList.forEach(ele => {
                setTimeout(function opacity() {
                    document.querySelector(`body .${ele.className}.page`).style.cssText = `left:0.5vw;opacity:0`
                }, 20)
                document.querySelector(`body .${ele.className}.page`).classList.remove("active");
            });
            if (navControl.hasAttribute("state") === true) {
                setTimeout(function opacity() {
                    document.querySelector(`body .${page.className}.page`).style.cssText = `left:${document.querySelector("body>.navbar").offsetWidth}px;opacity:1`
                }, 20)
            } else {
                setTimeout(function opacity() {
                    document.querySelector(`body .${page.className}.page`).style.cssText = `left:${document.querySelector("body>.navbar").offsetWidth}px;opacity:1`
                }, 20)
            }
            if (window.innerWidth < 850) {
                if (navControl.hasAttribute("state") === false) {
                    for (var i = 0; i <= burger.length - 1; i++) {
                        burger[i].style.cssText = `width:${25 + i * 25}%;`;
                    }
                    for (var n = 0; n <= navText.length - 1; n++) {
                        navText[n].style.cssText = `width:0;margin: 2vw 0.25vw 2vw 0.25vw`;
                    }
                    document.querySelector("body .navbar h2").style.cssText = "display:none ";
                    document.querySelector("body>.navbar").style.cssText = "width:min-width ";
                    navControl.setAttribute("state", "")
                }
            }
            document.querySelector(`body .${page.className}.page`).classList.add("active");
        }
    });
}
pageFunc();

function positionFunc() {
    document.querySelector(`body .page.active`).style.cssText = `left:${document.querySelector("body>.navbar").offsetWidth}px`
}
positionFunc();
window.onresize = () => {
    if (window.innerWidth < 850) {
        for (var i = 0; i <= burger.length - 1; i++) {
            burger[i].style.cssText = `width:${25 + i * 25}%;`;
        }
        for (var n = 0; n <= navText.length - 1; n++) {
            navText[n].style.cssText = `width:0;margin: 2vw 0.25vw 2vw 0.25vw`;
        }
        document.querySelector("body .navbar h2").style.cssText = "display:none ";
        navText.forEach(text => {
            text.style.cssText = "display:none ";
        });
        navControl.setAttribute("state", "")
        document.querySelector("body>.navbar").style.cssText = "width:min-width ";
        document.querySelector("body>.active").style.cssText = `left:${document.querySelector("body .navbar").offsetWidth}px;`
    } else {
        document.querySelector("body>.active").style.cssText = `left:${document.querySelector("body .navbar").offsetWidth}px;`
    }
}

// hiding the color word 
window.onscroll = () => {
    if (window.pageYOffset > window.innerHeight * 0.1) {
        document.querySelector("body .control p").style.cssText = "display:none"
    } else {
        document.querySelector("body .control p").style.cssText = "display:block"
    }
}
//href for the projects
/*let links = document.querySelectorAll(".links");
links.forEach(link => {
    link.onclick = () => {
        let href = link.getAttribute("link");
        // location.assign(href)
        // location.href = (href)
        window.open(href, '_blank')

    }
});*/







