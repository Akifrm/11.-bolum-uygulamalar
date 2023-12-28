window.addEventListener("scroll", function () {
    const element = document.getElementsByTagName('header')[0];
    const menu = document.getElementById('menu');
    if (scrollY > 0) {
        element.style.opacity = .9;
        element.style.backgroundColor = 'white';
    } else {
        if (menu.classList.item(0) === 'active') {
            element.style.opacity = 1;
            element.style.backgroundColor = null;
        }
    }
});

function menuOpen() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');
    const element = document.getElementsByTagName('header')[0];

    button.style.display = 'none';
    button2.style.display = 'inline';
    menu.classList.remove('active');
    element.style.opacity = .9;
    element.style.backgroundColor = 'white';
}

function menuClose() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');
    const element = document.getElementsByTagName('header')[0];

    button.style.display = 'inline';
    button2.style.display = 'none';
    menu.classList.add('active');
    element.style.opacity = 1;
    element.style.backgroundColor = null;
}