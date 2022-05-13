const allLinks = document.querySelectorAll("nav a");

allLinks.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        allLinks.forEach((elem) => elem.classList.remove("selected"));
        e.currentTarget.classList.add("selected");
    })
});
