window.addEventListener("scroll", function () {
    const element = document.getElementsByTagName('header')[0];
    if (scrollY > 0) {
        element.style.opacity = .9;
    } else {
        element.style.opacity = 1;
    }
});