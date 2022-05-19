// Глобальные переменные
const starsBlock = document.getElementsByClassName("bottom__star_container");
let activeStarsBlock = starsBlock[1];

windiw530();

const stars = activeStarsBlock.getElementsByTagName("img");
let starsArr = [];
let allSelectedStars;

const starOne = "image/icon/star 1.png";
const starTwo = "image/icon/star 2.png";
const starThree = "image/icon/star 3.png";

let blueStarNum;



// Изменение отображения слайдера на смартфонах
function windiw530 () {
    const sliderImages = document.getElementsByClassName("slider__image_container");
    if (window.matchMedia("(max-width: 530px)").matches) {
        sliderImages[0].classList.toggle("slider__image_active");
        activeStarsBlock = starsBlock[0];
    }
}



// Блок со звездами
function returnStarsId () {
    for (let star of stars) {
        starsArr.push(star);
    }
}

returnStarsId();



function checkMouseOnStars () {
    for (let star of starsArr) {
        star.onmouseout = () => {
            for (star of starsArr) {
                if (starsArr.indexOf(star) <=  blueStarNum - 1) {
                    star.src = starOne;
                } else {
                    star.src = starThree;
                }
            }
        }
    }
};

checkMouseOnStars();



function cursorOverStarColorSelect (num) {
    allSelectedStars = starsArr.filter((item, index) => {
        if (index <= num - 1) {
            return item;
        }
    });
    allSelectedStars.map(item => item.src = starTwo);
}



function clickOnStar (num) {
    if (blueStarNum >= num) {
        for (let star of starsArr) {
            star.src = starThree;
        }
    };
    
    allSelectedStars = starsArr.filter((item, index) => {
        if (index <= num - 1) {
            return item;
        }
    });
    allSelectedStars.map(item => item.src = starOne);

    blueStarNum = num;
}