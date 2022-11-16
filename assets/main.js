/*=====================================
=== Main Variables used
=====================================*/
let toggler = document.querySelector(".toggler_icon");
let body = document.body;
let smallToggle = document.querySelector(".small-toggle");

/*=====================================
=== Change Mode when click Toggle Buttone
=====================================*/
function checkMode() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("social-mode", "light");
        smallToggle.classList.add("active");
    }
    else if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("social-mode", "dark");
        smallToggle.classList.remove("active");
    }
}
toggler.addEventListener("click", checkMode);

/*=====================================
=== to get theme from local storage
=====================================*/

function toggleTheme() {
    if (localStorage.getItem("social-mode") !== null) {
        body.className = "";
        if (localStorage.getItem("social-mode") === "light") {
            body.classList.add("light");
            smallToggle.classList.add("active");
        } else {
            body.classList.add("dark");
            smallToggle.classList.remove("active");
        }
    }
}
toggleTheme();