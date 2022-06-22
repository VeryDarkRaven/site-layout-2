const categoriesSliderContainer = document.querySelector(".categories__slider");
let categoriesSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");

const categoriesArrows = document.querySelector(".categories__arrow");
const categoriesLeftArrow = categoriesArrows.querySelector(".categories__left");
const categoriesRightArrow = categoriesArrows.querySelector(".categories__right");

let categoriesSliderArr = [];

for (let i = 0; i < categoriesSliderItems.length; i++) {
    categoriesSliderArr[i] = categoriesSliderItems[i];
    categoriesSliderItems[i].remove();
}

let categoriesStep = 0;



function categoriesSliderItemAdd () {
    let div = document.createElement("div");

    if (window.matchMedia("(max-width: 630px)").matches) {
        div = categoriesSliderArr[categoriesSliderArr.length - 1];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_1", "slider__item_opacity");

        div = categoriesSliderArr[categoriesStep];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_3", "slider__item_opacity", "slider__item_active");

        div = categoriesSliderArr[categoriesStep + 1];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_5", "slider__item_opacity");
    } else {
        div = categoriesSliderArr[categoriesSliderArr.length - 2];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_1", "slider__item_opacity");

        div = categoriesSliderArr[categoriesSliderArr.length - 1];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_2", "slider__item_opacity");

        div = categoriesSliderArr[categoriesStep];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_3", "slider__item_opacity", "slider__item_active");

        div = categoriesSliderArr[categoriesStep + 1];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_4", "slider__item_opacity");

        div = categoriesSliderArr[categoriesStep + 2];
        categoriesSliderContainer.appendChild(div);
        div.classList.add("slider__item_position_5", "slider__item_opacity");
    }
}



function categoriesSliderLeft (num) {
    let div = document.createElement("div");
    div = categoriesSliderArr[num];
    categoriesSliderContainer.appendChild(div);
}



function categoriesLeft () {
    categoriesRightArrow.onclick = null;

    let newSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");

    opacityToggle("left");

    setTimeout(function() {
        categoriesSliderClassRemove();

        let indexElement = findDeleteElement("left");

        newSliderItems[0].remove();
        categoriesSliderLeft(indexElement);

        categoriesSliderClassAdd();

        setTimeout(function() {
            opacityToggle("left", "add");
        }, 600);

        setTimeout(function() {
            categoriesRightArrow.onclick = categoriesLeft;
        }, 600);
    }, 300);
}




function categoriesSliderRight (num) {
    let div = document.createElement("div");
    div = categoriesSliderArr[num];
    categoriesSliderContainer.insertBefore(div, categoriesSliderContainer.firstElementChild);
}



function categoriesRight () {
    categoriesLeftArrow.onclick = null;

    let newSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");

    opacityToggle("right");

    setTimeout(function() {
        categoriesSliderClassRemove();

        let indexElement = findDeleteElement("right");

        newSliderItems[newSliderItems.length - 1].remove();
        categoriesSliderRight(indexElement);

        categoriesSliderClassAdd();

        setTimeout(function() {
            opacityToggle("right", "add");
        }, 600);

        setTimeout(function() {
            categoriesLeftArrow.onclick = categoriesRight;
        }, 600);
    }, 300);
}




categoriesSliderItemAdd();

categoriesLeftArrow.onclick = categoriesRight;
categoriesRightArrow.onclick = categoriesLeft;



let categoriesSliderClassArr = [];



function categoriesArrClassConstructor () {
    let newSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");

    for (let i = 0; i < newSliderItems.length; i++) {
        categoriesSliderClassArr[i] = newSliderItems[i];
    }

    if (window.matchMedia("(max-width: 630px)").matches) {
        categoriesSliderClassArr = categoriesSliderClassArr.map(item => {
            if (item.classList.item(0) === "slider__item_position_1" ||
            item.classList.item(0) === "slider__item_position_3" ||
            item.classList.item(0) === "slider__item_position_5") {
                return item.classList.item(0);
            } else if (item.classList.item(1) === "slider__item_position_1" ||
            item.classList.item(1) === "slider__item_position_3" ||
            item.classList.item(1) === "slider__item_position_5") {
                return item.classList.item(1);
            } else if (item.classList.item(2) === "slider__item_position_1" ||
            item.classList.item(2) === "slider__item_position_3" ||
            item.classList.item(2) === "slider__item_position_5") {
                return item.classList.item(2);
            } else if (item.classList.item(3) === "slider__item_position_1" ||
            item.classList.item(3) === "slider__item_position_3" ||
            item.classList.item(3) === "slider__item_position_5") {
                return item.classList.item(3);
            } else {
                return item.classList.item(4);
            }
        })
    } else {
        categoriesSliderClassArr = categoriesSliderClassArr.map((item, index) => {
            if (item.classList.item(0) === `slider__item_position_${index + 1}`) {
                return item.classList.item(0);
            } else if (item.classList.item(1) === `slider__item_position_${index + 1}`) {
                return item.classList.item(1);
            } else if (item.classList.item(2) === `slider__item_position_${index + 1}`) {
                return item.classList.item(2);
            } else {
                return item.classList.item(3);
            }
        })
    }
}

categoriesArrClassConstructor();



function categoriesSliderClassRemove () {
    let newSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");
    let newSliderArr = [];

    for (let i = 0; i < newSliderItems.length; i++) {
        newSliderArr[i] = newSliderItems[i];
    }

    newSliderArr.map((item, index) => item.classList.remove(categoriesSliderClassArr[index], "slider__item_active"));
}



function categoriesSliderClassAdd () {
    let newSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");
    let newSliderArr = [];

    for (let i = 0; i < newSliderItems.length; i++) {
        newSliderArr[i] = newSliderItems[i];
    }

    newSliderArr.map((item, index) => item.classList.add(categoriesSliderClassArr[index]));

    if (window.matchMedia("(max-width: 630px)").matches) {
        newSliderArr[1].classList.add("slider__item_active");
    } else {
        newSliderArr[2].classList.add("slider__item_active");
    }
}



function findDeleteElement (str) {
    let newSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");

    if (str === "left") {
        return categoriesSliderArr.indexOf(newSliderItems[0]);
    }

    if (str === "right") {
        return categoriesSliderArr.indexOf(newSliderItems[newSliderItems.length - 1]);
    }
}



function opacityToggle (str, action = "remove") {
    let newSliderItems = categoriesSliderContainer.querySelectorAll(".slider__item");
    let newSliderArr = [];

    for (let i = 0; i < newSliderItems.length; i++) {
        newSliderArr[i] = newSliderItems[i];
    }

    if (str === "left") {
        if (action === "remove") {
            newSliderArr[0].classList.remove("slider__item_opacity");
        }
        
        if (action === "add") {
            newSliderArr[newSliderArr.length - 1].classList.add("slider__item_opacity");
        }
    }

    if (str === "right") {
        if (action === "remove") {
            newSliderArr[newSliderArr.length - 1].classList.remove("slider__item_opacity");
        }
        
        if (action === "add") {
            newSliderArr[0].classList.add("slider__item_opacity");
        }
    }
}