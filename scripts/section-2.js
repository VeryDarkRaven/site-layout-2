// Slider
const arrows = document.querySelector(".slider__arrow");
const leftArrow = arrows.querySelector(".slider__left");
const rightArrow = arrows.querySelector(".slider__right");

const sliderContainer = document.querySelector(".slider");
let sliderImageContainers = sliderContainer.querySelectorAll(".slider__image_container");
let imageContainersArr = [];

for (let i = 0; i < sliderImageContainers.length; i++) {
    imageContainersArr[i] = sliderImageContainers[i];
    sliderImageContainers[i].remove();
}

let step = 0;



function slider () {
    let div = document.createElement("div");

    div = imageContainersArr[imageContainersArr.length - 1];
    sliderContainer.appendChild(div);
    div.classList.add("slider__image_container_1");

    div = imageContainersArr[step];
    sliderContainer.appendChild(div);
    div.classList.add("slider__image_container_2");
    div.classList.add("slider__image_active");

    div = imageContainersArr[step + 1];
    sliderContainer.appendChild(div);
    div.classList.add("slider__image_container_3");
}



function sliderLeft () {
    if (step === imageContainersArr.length - 1) {
        step = 1;
    } else if (step === imageContainersArr.length - 2) {
        step = 0;
    } else {
        step += 2;
    }

    let div = document.createElement("div");
    div = imageContainersArr[step];
    sliderContainer.appendChild(div);

    if (step === 0) {
        step = imageContainersArr.length - 1;
    } else {
        step -= 1;
    }
}



function left () {
    rightArrow.onclick = null;

    let newImageContainersArr = sliderContainer.querySelectorAll(".slider__image_container");

    sliderSmoothStar(0);

    slideMoving("left");

    setTimeout(function () {
        sliderClassRemove();

        newImageContainersArr[0].remove();
        sliderLeft();

        sliderClassAdd();

        setTimeout(function () {
            slideMoving("return");
        }, 300);

        setTimeout(function () {
            variables();

            sliderSmoothStar(1);

            rightArrow.onclick = left;
        }, 600);
    }, 600);
}



function sliderRight () {
    if (step === 0) {
        step = imageContainersArr.length - 2;
    } else if (step === 1) {
        step = imageContainersArr.length - 1;
    } else {
        step -= 2;
    }

    let div = document.createElement("div");
    div = imageContainersArr[step];

    sliderContainer.insertBefore(div, sliderContainer.firstElementChild);

    if (step === imageContainersArr.length - 1) {
        step = 0;
    } else {
        step += 1;
    }

    sliderClassAdd();
}



function right () {
    leftArrow.onclick = null;

    let newImageContainersArr = document.querySelectorAll(".slider__image_container");

    sliderSmoothStar(0);

    slideMoving("right");

    setTimeout(function () {
        sliderClassRemove();

        newImageContainersArr[newImageContainersArr.length - 1].remove();
        sliderRight();

        setTimeout(function () {
            slideMoving("return");
        }, 300);

        setTimeout(function () {
            variables();

            sliderSmoothStar(1);

            leftArrow.onclick = right;
        }, 600);
    }, 600);
}



slider();
step = 0;

leftArrow.onclick = right;
rightArrow.onclick = left;



let sliderClassArr = [];



function arrClassConstructor () {
    let newImageContainersArr = sliderContainer.querySelectorAll(".slider__image_container");

    for (let i = 0; i < newImageContainersArr.length; i++) {
        sliderClassArr[i] = newImageContainersArr[i];
    }

    sliderClassArr = sliderClassArr.map(item => {
        if (item.classList.item(0) === "slider__image_container") {
            if (item.classList.item(1) === "slider__image_active") {
                return item.classList.item(2);
            } else {
                return item.classList.item(1);
            }
        }
    })
}

arrClassConstructor();



function sliderClassRemove () {
    let newImageContainersArr = sliderContainer.querySelectorAll(".slider__image_container");
    let doubleNewContainersArr = [];

    for (let i = 0; i < newImageContainersArr.length; i++) {
        doubleNewContainersArr[i] = newImageContainersArr[i];
    }

    doubleNewContainersArr.map((item, index) => item.classList.remove(sliderClassArr[index], "slider__image_active"));
}



function sliderClassAdd () {
    let newImageContainersArr = sliderContainer.querySelectorAll(".slider__image_container");
    let doubleNewContainersArr = [];

    for (let i = 0; i < newImageContainersArr.length; i++) {
        doubleNewContainersArr[i] = newImageContainersArr[i];
    }

    doubleNewContainersArr.map((item, index) => item.classList.add(sliderClassArr[index]));
    
    doubleNewContainersArr[1].classList.add("slider__image_active");
}





// Изменение отображения слайдера на смартфонах
/*
function windiw530 () {
    const sliderImages = document.getElementsByClassName("slider__image_container");
    if (window.matchMedia("(max-width: 530px)").matches) {
        sliderImages[0].classList.toggle("slider__image_active");
    }
}

windiw530();
*/




// Stars
const starOne = "image/icon/star 1.png";
const starTwo = "image/icon/star 2.png";
const starThree = "image/icon/star 3.png";

let activeBlock;
let starContainer;
let stars;

let starsArr = [];



function variables () {
    activeBlock = document.querySelector(".slider__image_active");
    starContainer = activeBlock.querySelector(".bottom__star_container");
    stars = starContainer.querySelectorAll("img");

    for (let i = 0; i < stars.length; i++) {
        starsArr[i] = stars[i];
    }

    starController();
}

variables();



let numStar;



function starController () {
    for (let star of starsArr) {
        star.onmouseover = () => {
            numStar = starsArr.findIndex(item => item === star);
            starSelection(numStar);
        };
    
        star.onmouseout = () => starSelection(-1);
    
        star.onclick = () => starClick(numStar);
    }
}



function starSelection (num) {
    if (num === -1) {
        for (let star of starsArr) {
            if (star.classList.item(0) === "star_active") {
                star.src = starOne;
            } else {
                star.src = starThree;
            }
        }
    } else {
        for (let i = 0; i <= num; i++) {
            starsArr[i].src = starTwo;
        }
    }
}



let prevNum = 0;



function starClick (num) {
    starSelection(-1);

    let activeStarTotal = starContainer.querySelectorAll(".star_active");

    if (num < activeStarTotal.length) {
        for (let i = num; i < activeStarTotal.length; i++) {
            starsArr[i].classList.remove("star_active");
            starSelection(-1);
        }
    }

    for (let i = 0; i <= num; i++) {
        starsArr[i].src = starOne;
        starsArr[i].classList.add("star_active");
    }

    prevNum = num;
}





// Slider effects
function sliderSmoothStar (num) {
    const bottomContainer = activeBlock.querySelector(".bottom_container");

    if (num === 1) {
        setTimeout(function () {
            activeBlock.classList.add("slider__image_active_bottom");
            bottomContainer.style.opacity = "1";
        }, 0);
    }

    if (num === 0) {
        bottomContainer.style.opacity = "0";

        setTimeout(function () {
            activeBlock.classList.remove("slider__image_active_bottom");
        }, 0);
    }
}

sliderSmoothStar(1);



function slideMoving (str) {
    const sliderImageContainerOne = document.querySelector(".slider__image_container_1");
    const sliderImageContainerTwo = document.querySelector(".slider__image_container_2");
    const sliderImageContainerThree = document.querySelector(".slider__image_container_3");

    let containersArr = [
        sliderImageContainerOne,
        sliderImageContainerTwo,
        sliderImageContainerThree,
    ];

    if (str === "left") {
        sliderImageContainerOne.style.opacity = "0";
    }

    if (str === "right") {
        sliderImageContainerThree.style.opacity = "0";
    }

    if (str === "return") {
        for (let container of containersArr) {
            container.style.opacity = "1";
        }
    }
}