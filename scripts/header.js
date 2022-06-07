// Нажатие на ссылку шапки 
function navLinksClick () {
    const headerNavs = document.getElementsByClassName("nav");
    const burgerIcon = document.querySelector(".header__burger");

    const burgerClassList = burgerIcon.classList;
    let navLinks;

    for (let burgerClass of burgerClassList) {
        if (burgerClass === "header__burger_active") {
            navLinks = headerNavs[1].getElementsByTagName("a");
        } else {
            navLinks = headerNavs[0].getElementsByTagName("a");
        }
    }

    link: for (let link of navLinks) {
        for (let linkClass of link.classList) {
            if (linkClass === "sign-in") {
                continue link;
            }
        }

        link.onclick = () => {
            link.classList.add("nav__active-link");

            for (let activeLink of navLinks) {
                if (activeLink !== link) {
                    activeLink.classList.remove("nav__active-link");
                }
            }
        }

    }
}

navLinksClick();



// Нажатие на бургер 
function burgerClick () {
    const burgerIcon = document.querySelector(".header__burger");
    const dropdown = document.querySelector(".dropdown");

    burgerIcon.onclick = () => {
        burgerIcon.classList.toggle("header__burger_active");
        dropdown.classList.toggle("dropdown_active");

        navLinksClick();
    };
}

burgerClick();