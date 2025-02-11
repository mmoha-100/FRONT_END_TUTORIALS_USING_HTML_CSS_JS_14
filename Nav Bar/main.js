let main = document.querySelector("main");
let toggleBtn = document.querySelector(".toggle");
let navMenu = document.querySelector("nav");
let navItems = document.querySelectorAll("nav ul li");
let closeBtn = document.querySelector("nav .close");

toggleBtn.onclick = function () {
    navMenu.style.left = "0";
};

function hideNavMenu() {
    navMenu.style.left = `-200px`;
}

navItems.forEach((item) => {
    item.addEventListener("click", hideNavMenu);
});
closeBtn.onclick = hideNavMenu;
main.onclick = hideNavMenu;
