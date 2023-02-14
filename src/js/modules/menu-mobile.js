export default function menuMobile() {
    if(document.querySelector(".menu-nav__mobile")) {
        let buttonMenu = document.querySelector(".menu-nav__button");
        let menu = document.querySelector(".menu-mobile");
        let menuContent = document.querySelector(".menu-nav");

        buttonMenu.addEventListener("click", () => {
            buttonMenu.classList.toggle("active");
            menu.classList.toggle("active");
            menuContent.classList.toggle("active");
        });
    }
}