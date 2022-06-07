// List item switching
function listItemClick () {
    const list = document.querySelector(".video__list");
    const listItems = list.querySelectorAll(".list__item");
    let listItemsArr = [];

    for (let i = 0; i < listItems.length; i++) {
        listItemsArr[i] = listItems[i];
    }

    for (let listItem of listItemsArr) {
        listItem.onclick = () => {
            listItemsArr.map((item, index) => {
                if (item === listItem) {
                    itemActiveClassSwitching(index);
                    playerBGSwitching(index);
                    videoDescriptionSwitching(index);
                }
            })
        }
    }
}

listItemClick();



function itemActiveClassSwitching (num) {
    const list = document.querySelector(".video__list");
    const listItems = list.querySelectorAll(".list__item");

    listItems[num].classList.add("list__item_active");

    for (let i = 0; i < listItems.length; i++) {
        if (i !== num) {
            listItems[i].classList.remove("list__item_active");
        }
    }
}



function playerBGSwitching (num) {
    const player = document.querySelector(".video__player");

    num += 1;

    if (player.classList.item(0) === "video__player") {
        player.classList.remove(player.classList.item(1));
    } else {
        player.classList.remove(player.classList.item(0));
    }

    player.classList.add(`item__image_${num}`);
}



function videoDescriptionSwitching (num) {
    const list = document.querySelector(".video__list");
    const listItems = list.querySelectorAll(".list__item");
    const listItem = listItems[num];
    const itemDescription = listItem.querySelector(".item__description");
    const itemName = itemDescription.querySelector(".item__name");
    const itemDuration = itemDescription.querySelector(".item__duration");

    const player = document.querySelector(".video__player");
    const videoDescription = player.querySelector(".video__description");
    const videoName = videoDescription.querySelector(".video__name");
    const videoDuration = videoDescription.querySelector(".video__duration");

    videoName.textContent = itemName.textContent;
    videoDuration.textContent = itemDuration.textContent;
}



function playClick () {
    const player = document.querySelector(".video__player");
    const playerGradient = player.querySelector(".video__gradient");

    player.onclick = () => playerGradient.classList.toggle("video_active");
}

playClick();