console.log("hello world");


// function togglehide() {
//     let menu = document.getElementById("menu-icon")
//     let navlist = document.getElementById("navlist");

//     if (navlist.style.display != 'none') {
//         navlist.style.display = 'none';
//     }
//     else {
//         navlist.style.display = 'block';
//     }
// }

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', { delay: 300, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    console.log("Menu icon clicked");
    menu.classList.toggle('bx-x');
    if (navlist.style.display != 'none') {
        navlist.style.display = 'none';
    }
    else {
        navlist.style.display = 'block';
    }

}

