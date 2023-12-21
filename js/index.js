window.addEventListener("scroll", function () {
    const element = document.getElementsByTagName('header')[0];
    if (scrollY > 0) {
        element.style.opacity = .9;
        element.style.backgroundColor = 'white';
    } else {
        element.style.opacity = 1;
        element.style.backgroundColor = null;
    }
});