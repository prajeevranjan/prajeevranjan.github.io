let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.oneclick = () => {
    menu.classList.toggle('fa-solid');
    navbar.classList.toogle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer', 'Web Designer', 'Youtuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });