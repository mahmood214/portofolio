let startGame = document.querySelector(".start "),
    userName = document.querySelector("#userName span"),
    wrongTries = document.querySelector("#wrongTries span"),
    splashScreen = document.querySelector(".intro");

let i = 0,
    n = 0;


startGame.onclick = _ => {
    startGame.style.cssText = "display:none"
    document.querySelector(".intro > div ").style.cssText = "opacity:1";
    document.querySelector(".intro > div>span ").onclick = () => {
        let name = document.querySelector(".intro > div>input ").value;
        ;
        if (name == null || name == "") {
            userName.textContent = 'Unknown';
            document.querySelector(".end > div >h1>span ").textContent = 'Unknown';
        } else {
            userName.textContent = name;
            document.querySelector(".end > div >h1>span ").textContent = name;
        }
        splashScreen.remove();
    }
};

document.querySelector(".end > div >span ").onclick = () => {
    location.reload(false)
}

function removeFreez() {
    cards.forEach(el => {
        el.classList.remove("freez")
    })
}
function stopclicking(newCards, cards) {
    if (newCards.length == 2) {
        cards.forEach((el) => {
            el.classList.add("freez");
            setTimeout(removeFreez, duration)
            if (newCards[0].getAttribute("data") == newCards[1].getAttribute("data")) {
                newCards[0].classList.add("fliped");
                newCards[1].classList.add("fliped");
                n = n + 2;
            } else if (newCards[0].getAttribute("data") != newCards[1].getAttribute("data")) {
                wrongTries.textContent = `go on ${Math.ceil(i++ / 16)}`;
            }
        })
    }
}


let cardsContainer = document.querySelector(".cardsContainer"),
    cards = Array.from(cardsContainer.children),
    duration = 1000;


function flip(el) {
    el.classList.add("flip");
    setTimeout(function () {
        el.classList.remove("flip");
    }, duration);
}


cards.forEach(card => {
    card.onclick = () => {

        flip(card);

        var newCards = cards.filter(x => x.classList.contains("flip"));
        stopclicking(newCards, cards);
        console.log(n)

        if (n === cards.length * cards.length) {
            console.log(n);
            document.querySelector(".end").classList.add("show");
            setTimeout(() => {
                document.querySelector(".end").style.cssText = ";opacity:1;transition: all 5s"

            }, 100);


        }


    }
});



let orderRange = Array.from(Array(cards.length).keys());
// re ordiring
shuffle(orderRange);


// Add Order Css Property To Game Blocks
cards.forEach((block, index) => {
    // Add CSS Order Property
    block.style.order = orderRange[index];
    // Add Click Event

});



// Shuffle Function
function shuffle(array) {
    // Settings Vars
    let current = array.length,
        temp,
        random;
    while (current > 0) {

        // Get Random Number
        random = Math.floor(Math.random() * current);
        // Decrease Length By One
        current--;
        /*
        // [1] Save Current Element in Stash
        temp = array[current];
        // [2] Current Element = Random Element
        array[current] = array[random];
        // [3] Random Element = Get Element From Stash
        array[random] = temp;
        */
        [array[current], array[random]] = [array[random], array[current]];
    }
    return array;
}



