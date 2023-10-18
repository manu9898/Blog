
const menu = document.querySelector(".wrapper");


const menuHeight = menu.clientHeight;


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;


    if (scrollPosition > menuHeight) {

        menu.classList.add("scrolled");
    } else {

        menu.classList.remove("scrolled");
    }
});



