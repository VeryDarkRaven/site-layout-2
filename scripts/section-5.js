const experiencesSliderContainer = document.querySelector(".experiences__slider");
const experiencesItemsContainer = experiencesSliderContainer.querySelector(".slider__item_container");
let experiencesSliderItems = experiencesItemsContainer.querySelectorAll(".slider__item");

const experiencesArrows = experiencesSliderContainer.querySelector(".experiences__arrow");
const experiencesLeftArrow = experiencesArrows.querySelector(".experiences__left");
const experiencesRightArrow = experiencesArrows.querySelector(".experiences__right");

let experiencesSliderArr = [];

for (let i = 0; i < experiencesSliderItems.length; i++) {
    experiencesSliderArr[i] = experiencesSliderItems[i];
    experiencesSliderItems[i].remove();
}



function experiencesSlideItemAdd () {
    let div = document.createElement("div");

    div = experiencesSliderArr[counterItem];
    experiencesItemsContainer.appendChild(div);

    experiencesSlideTextСhange(counterItem);

    experiencesBottomLineСhange(counterItem);
}



function experiencesSliderLeft (num) {
    let div = document.createElement("div");
    div = experiencesSliderArr[num];
    experiencesItemsContainer.appendChild(div);
}



function experiencesLeft () {
    if (counterItem < experiencesSliderItems.length - 1) {
        counterItem++;

        experiencesRightArrow.onclick = null;

        let newSliderItems = experiencesItemsContainer.querySelectorAll(".slider__item");

        newSliderItems[0].remove();
        experiencesSliderLeft(counterItem);

        experiencesSlideTextСhange(counterItem);

        experiencesBottomLineСhange(counterItem);

        experiencesRightArrow.onclick = experiencesLeft;
    }
}



function experiencesSliderRight (num) {
    let div = document.createElement("div");
    div = experiencesSliderArr[num];
    experiencesItemsContainer.appendChild(div);
}



function experiencesRight () {
    if (counterItem > 0) {
        counterItem--;

        experiencesLeftArrow.onclick = null;

        let newSliderItems = experiencesItemsContainer.querySelectorAll(".slider__item");

        newSliderItems[0].remove();
        experiencesSliderLeft(counterItem);

        experiencesSlideTextСhange(counterItem);

        experiencesBottomLineСhange(counterItem);

        experiencesLeftArrow.onclick = experiencesRight;
    }
}



let counterItem = 0;

experiencesSlideItemAdd();

experiencesLeftArrow.onclick = experiencesRight;
experiencesRightArrow.onclick = experiencesLeft;



function experiencesSlideTextСhange (num) {
    const textOne = `"Curabitur posuere ullamcorper pulvinar. Donec dignissim bibendum leo, at faucibus enim aliquam eu. Nullam quis pulvinar diam, ac elementum urna. Integer id vehicula tortor, nec pulvinar libero. Ut elit elit, fringilla a nisi ut, dapibus eleifend quam."`;
    const textTwo = `"I'm Law Donquixote"`;
    const textThree = `"I'm No Donquixote Law"`;
    const textFour = `"Тут был хороший борщ с капустой, но не красной. Сосисочки. Ещё есть какой-то непонятный салат, куда крошат морковку, капусту и яблоки с ананасами. Вообще он меня бесит. Вот. Ещё чего. Вкусный чай. Он так утоляет жажду.Я чувствую себя человеком! Я - Никита Литвинков!"`;

    const textContainer = document.querySelector(".block__description_experiences");

    const textArr = [
        textOne,
        textTwo,
        textThree,
        textFour,
    ];

    textContainer.textContent = textArr[num];
}



function experiencesCreateBottomLines (num) {
    const linesContainer = experiencesSliderContainer.querySelector(".experiences__lines");

    for (let i = 0; i < experiencesSliderItems.length; i++) {
        let div = document.createElement("div");
        linesContainer.appendChild(div);
        div.classList.add("line");
    }
}



function experiencesBottomLineСhange (num) {
    const linesContainer = experiencesSliderContainer.querySelector(".experiences__lines");
    let lines = linesContainer.querySelectorAll(".line");
    let linesArr = [];

    for (let i = 0; i < lines.length; i++) {
        linesArr[i] = lines[i];
    }

    for (let i = 0; i < lines.length; i++) {
        if (i === num) {
            linesArr[i].classList.add("line_active");
        } else {
            linesArr[i].classList.remove("line_active");
        }
    }
}