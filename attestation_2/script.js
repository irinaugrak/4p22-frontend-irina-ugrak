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

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

let btnRegistration = document.getElementById('btn-registration');
btnRegistration.addEventListener('click', (event) => {
    event.preventDefault();
    
    const err1 = 'Поле обязательно для заполнения';
    const err2 = 'Email введён некорректно';
    const err3 = 'Пароль должен содержать не менее 8 символов';
    const err4 = 'Пароли не совпадают';

    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password');
    let inputConfirmPassword = document.getElementById('confirm-password');
    let radioGender = document.querySelector('input[name="gender"]:checked');
    let textareaAbout = document.getElementById('about');
    let checkboxAgreement = document.getElementById('agreement');

    const alertEmail = document.getElementById('email-alert');
    const alertPassword = document.getElementById('password-alert');
    const alertConfirmPassword = document.getElementById('confirm-password-alert');

    let submitForm = true;

    if(inputEmail.value === '' || !validateEmail(inputEmail.value)) {
        submitForm = false;

        if(!inputEmail.classList.contains('input-group__input_error')) {
            inputEmail.classList.add('input-group__input_error');
        }
        if(inputEmail.value === '') {
            alertEmail.innerText = err1;
        }
        if(inputEmail.value !== '' && !validateEmail(inputEmail.value)) {
            alertEmail.innerText = err2;
        }
    } else {
        if(inputEmail.classList.contains('input-group__input_error')) {
            inputEmail.classList.remove('input-group__input_error');
        }
        alertEmail.innerText = '';
    }

    if(inputPassword.value === '' || !validatePassword(inputPassword.value)) {
        submitForm = false;

        if(!inputPassword.classList.contains('input-group__input_error')) {
            inputPassword.classList.add('input-group__input_error');
        }
        if(inputPassword.value === '') {
            alertPassword.innerText = err1;
        }
        if(inputPassword.value !== '' && !validatePassword(inputPassword.value)) {
            alertPassword.innerText = err3;
        }
    } else {
        if(inputPassword.classList.contains('input-group__input_error')) {
            inputPassword.classList.remove('input-group__input_error');
        }
        alertPassword.innerText = '';
    }

    if(inputConfirmPassword.value === '' || !validateConfirmPassword(inputPassword.value, inputConfirmPassword.value)) {
        submitForm = false;

        if(!inputConfirmPassword.classList.contains('input-group__input_error')) {
            inputConfirmPassword.classList.add('input-group__input_error');
        }
        if(inputConfirmPassword.value === '') {
            alertConfirmPassword.innerText = err1;
        }
        if(inputConfirmPassword.value !== '' && !validateConfirmPassword(inputConfirmPassword.value)) {
            alertConfirmPassword.innerText = err4;
        }
    } else {
        if(inputConfirmPassword.classList.contains('input-group__input_error')) {
            inputConfirmPassword.classList.remove('input-group__input_error');
        }
        alertConfirmPassword.innerText = '';
    }

    if(submitForm) {
        const dataForm = {
            email: inputEmail.value,
            password: inputPassword.value,
            confirm_password: inputConfirmPassword.value,
            gender: radioGender.value,
            about: textareaAbout.value,
            agreement: checkboxAgreement.checked

        };
        console.log(dataForm);
    }
});





