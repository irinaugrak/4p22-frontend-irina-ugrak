'use strict'

let signLinks = {
    signInLinks: document.querySelectorAll('.header-inner__sign-in'),
    signUpLinks: document.querySelectorAll('.header-inner__sign-up')
};

window.addEventListener('DOMContentLoaded', () => {
    let activeSignKey;
    let noActiveSignKey;

    if(document.URL.indexOf('sign-up') !== -1) {
        activeSignKey = 'signUpLinks';
        noActiveSignKey = 'signInLinks';
    } else {
        activeSignKey = 'signInLinks';
        noActiveSignKey = 'signUpLinks';
    }

    for(let activeLink of signLinks[activeSignKey]) {
        if(!activeLink.classList.contains('header-inner__sign_active')) {
            activeLink.classList.add('header-inner__sign_active');
        } 
    }
    for(let noActiveLink of signLinks[noActiveSignKey]) { 
        if(noActiveLink.classList.contains('header-inner__sign_active')) {
            noActiveLink.classList.remove('header-inner__sign_active');
        }
    }
})

let burgerList = document.querySelector('.burger__list');
let burgerImg = document.querySelector('.burger__img');

burgerImg.addEventListener('click', () => {
    if (burgerList.classList.contains('burger__list_visible')) {
        burgerList.classList.remove('burger__list_visible');
    } else {
        burgerList.classList.add('burger__list_visible');
    }
});





