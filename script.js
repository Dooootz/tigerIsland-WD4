// if (window.localStorage.getItem('menustate') === null) {
//     setMenu('pageOne');
//     pageOne.style.border = "solid red 5px";
// } else {
//     var menuItem = readMenu()
//     document.getElementById(menuItem).style.border = "solid green 5px"
// }

// function setMenu(clickedOn) {
//     clearMenus();
//     window.localStorage.setItem('menustate', clickedOn);
//     document.getElementById(clickedOn).style.border = "solid green 5px"

// }

// function readMenu() {
//     return window.localStorage.getItem('menustate');
// }


// function doMenu(clickedElement) {
//     setMenu(clickedElement);
//     document.getElementById(clickedElement).focus();
// }


// function reloadPage() {
//     window.location.reload();
// }



function pageOne() {
    let pageOne = document.querySelector("#page-1")
    let pageTwo = document.querySelector("#page-2")
    let pageThree = document.querySelector("#page-3")
    let pageFour = document.querySelector("#page-4")
    let pageFive = document.querySelector("#page-5")
    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")
    let btn3 = document.querySelector("#btn3")
    let btn4 = document.querySelector("#btn4")
    let btn5 = document.querySelector("#btn5")

    createItem('lastClicked', 'pageOne')


    if (pageOne.style.display === "none") {
        // page toggle
        pageOne.style.display = "block"
        pageTwo.style.display = "none"
        pageThree.style.display = "none"
        pageFour.style.display = "none"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "#ffb977";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "white";

    } else {
        //page toggle
        pageOne.style.display = "block"
        pageTwo.style.display = "none"
        pageThree.style.display = "none"
        pageFour.style.display = "none"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "#ffb977";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "white";
    }

}

function pageTwo() {
    let pageOne = document.querySelector("#page-1")
    let pageTwo = document.querySelector("#page-2")
    let pageThree = document.querySelector("#page-3")
    let pageFour = document.querySelector("#page-4")
    let pageFive = document.querySelector("#page-5")
    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")
    let btn3 = document.querySelector("#btn3")
    let btn4 = document.querySelector("#btn4")
    let btn5 = document.querySelector("#btn5")

    createItem('lastClicked', 'pageTwo')

    if (pageTwo.style.display === "none") {
        // page toggle
        pageOne.style.display = "none"
        pageTwo.style.display = "block"
        pageThree.style.display = "none"
        pageFour.style.display = "none"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "#ffb977";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "white";

    } else {
        // page toggle
        pageOne.style.display = "none"
        pageTwo.style.display = "block"
        pageThree.style.display = "none"
        pageFour.style.display = "none"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "#ffb977";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "white";


    }
}

function pageThree() {
    let pageOne = document.querySelector("#page-1")
    let pageTwo = document.querySelector("#page-2")
    let pageThree = document.querySelector("#page-3")
    let pageFour = document.querySelector("#page-4")
    let pageFive = document.querySelector("#page-5")
    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")
    let btn3 = document.querySelector("#btn3")
    let btn4 = document.querySelector("#btn4")
    let btn5 = document.querySelector("#btn5")

    createItem('lastClicked', 'pageThree')

    if (pageThree.style.display === "none") {
        // page toggle
        pageOne.style.display = "none"
        pageTwo.style.display = "none"
        pageThree.style.display = "block"
        pageFour.style.display = "none"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "#ffb977";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "white";

    } else {
        // page toggle 
        pageOne.style.display = "none"
        pageTwo.style.display = "none"
        pageThree.style.display = "block"
        pageFour.style.display = "none"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "#ffb977";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "white";

    }
}

function pageFour() {
    let pageOne = document.querySelector("#page-1")
    let pageTwo = document.querySelector("#page-2")
    let pageThree = document.querySelector("#page-3")
    let pageFour = document.querySelector("#page-4")
    let pageFive = document.querySelector("#page-5")
    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")
    let btn3 = document.querySelector("#btn3")
    let btn4 = document.querySelector("#btn4")
    let btn5 = document.querySelector("#btn5")

    createItem('lastClicked', 'pageFour')

    if (pageFour.style.display === "none") {
        // page toggle 
        pageOne.style.display = "none"
        pageTwo.style.display = "none"
        pageThree.style.display = "none"
        pageFour.style.display = "block"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "#ffb977";
        btn5.style.backgroundColor = "white";

    } else {
        // page toggle 
        pageOne.style.display = "none"
        pageTwo.style.display = "none"
        pageThree.style.display = "none"
        pageFour.style.display = "block"
        pageFive.style.display = "none"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "#ffb977";
        btn5.style.backgroundColor = "white";

    }
}

function pageFive() {
    let pageOne = document.querySelector("#page-1")
    let pageTwo = document.querySelector("#page-2")
    let pageThree = document.querySelector("#page-3")
    let pageFour = document.querySelector("#page-4")
    let pageFive = document.querySelector("#page-5")
    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")
    let btn3 = document.querySelector("#btn3")
    let btn4 = document.querySelector("#btn4")
    let btn5 = document.querySelector("#btn5")

    createItem('lastClicked', 'pageFive')

    if (pageFour.style.display === "none") {
        // page toggle 
        pageOne.style.display = "none"
        pageTwo.style.display = "none"
        pageThree.style.display = "none"
        pageFour.style.display = "none"
        pageFive.style.display = "block"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "#ffb977";

    } else {
        // page toggle 
        pageOne.style.display = "none"
        pageTwo.style.display = "none"
        pageThree.style.display = "none"
        pageFour.style.display = "none"
        pageFive.style.display = "block"
        // button toggle
        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "#ffb977";

    }
}


function createItem(a, b) {
    localStorage.setItem(a, b);
}


function getValue() {
    return localStorage.getItem('lastClicked');

}

var memory = getValue()
console.log(memory + " Memory")
window[memory]()