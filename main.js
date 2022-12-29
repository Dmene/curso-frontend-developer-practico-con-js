const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);


function toogleDesktopMenu (){
    console.log('cli')
    desktopMenu.classList.toggle('inactive')
} 

function toogleMobileMenu (){
    console.log('cli')
    mobileMenu.classList.toggle('inactive')
} 