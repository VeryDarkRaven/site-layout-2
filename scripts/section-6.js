let selectsArr = [];

function selectClick () {
    const form = document.querySelector(".discount__form");
    const selects = form.querySelectorAll(".select");

    for (let i = 0; i < selects.length - 1; i++) {
        selectsArr[i] = selects[i];
    }

    for (let select of selectsArr) {
        let selectHeader = select.querySelector(".select__header");
        selectHeader.onclick = () => {
            const selectList = select.querySelector(".select__list");

            selectList.classList.toggle("select__list_active");

            const selectIndex = selectsArr.indexOf(select);

            anotherSelectClick(selectIndex);
            listClick(selectIndex);
        }
    }
}

selectClick();



function anotherSelectClick (num) {
    for (let i = 0; i < selectsArr.length; i++) {
        if (i !== num) {
            const newList = selectsArr[i].querySelector(".select__list");

            if (newList === null) {
                console.log(selectsArr.length);
            }

            if (newList.classList.item(0) === "select__list_active" || newList.classList.item(1) === "select__list_active") {
                newList.classList.remove("select__list_active");
            }
        }
    }
}



function listClick (num) {
    const form = document.querySelector(".discount__form");
    const selects = form.querySelectorAll(".select");

    let selectText = selects[num].querySelector(".select__text").querySelector("p");

    const selectList = selects[num].querySelector(".select__list");
    const listItems = selectList.querySelectorAll(".select__item");

    for (let item of listItems) {
        item.onclick = () => {
            selectText.textContent = item.querySelector("p").textContent;

            selectList.classList.remove("select__list_active");
        }
    }
}