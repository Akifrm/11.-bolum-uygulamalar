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

function menuOpen() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');

    button.style.display = 'none';
    button2.style.display = 'inline';
    menu.classList.remove('active');
}

function menuClose() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');

    button.style.display = 'inline';
    button2.style.display = 'none';
    menu.classList.add('active');
}