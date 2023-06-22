let nav = document.getElementById("navigation");

const WhileScrolling = () => {
    if (window.scrollY >= 100) {
        nav.classList.add("dark__shade")
    } else {
        nav.classList.remove("dark__shade")
    }

}

window.addEventListener("scroll", WhileScrolling)
