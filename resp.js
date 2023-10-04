burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navbarList = document.querySelector(".navbar-list");
rightnav = document.querySelector(".rightnav");
burger.addEventListener("click", () => {
    navbarList.classList.toggle("v-class-resp");
    rightnav.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp");

});
