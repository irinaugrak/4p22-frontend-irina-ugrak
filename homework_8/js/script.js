'use strict';

const btn = document.getElementById('btn');
const signInput = document.getElementById('sign');
const signList = document.getElementById('sign-list');
const signItems = document.querySelectorAll('.form__sign-item');

signInput.addEventListener('click', () => {
    if(!signList.classList.contains('form__sign-list_active')) {
        signList.classList.add('form__sign-list_active');
    } else {
        signList.classList.remove('form__sign-list_active');
    }
});


signItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        signInput.value = event.target.innerText;
        signList.classList.remove('form__sign-list_active');
    });
});


btn.addEventListener('click', (event) => {
    event.preventDefault();

    let result = '';
    const num1 = document.getElementById('num-1').value;
    const num2 = document.getElementById('num-2').value;
    const sign = signInput.value;
    
    let res = document.getElementById('res');
    let alert = document.getElementById('alert');
    let alertBlock = document.getElementById('alert-block');
    let alertMessage = '';

    res.value = '';

    console.log(sign);

    switch (sign) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '×':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            result = Number(num1) / Number(num2);
            break;
        default:
            result = '';
    };

    if(num1 === '') {
        alertMessage = 'Первое число не указано\n';
    }

    if(num2 === '') {
        alertMessage = alertMessage + 'Второе число не указано\n';
    }

    if(sign === '') {
        alertMessage = alertMessage + 'Не введен знак\n';
    }
    
    if(sign !== '' && sign !== '+' && sign !== '-' && sign !== '×' && sign !== '/') {
        alertMessage = alertMessage + 'Программа не поддерживает такую операцию\n';
    }

    if(isNaN(Number(num1))) {
        alertMessage = alertMessage + 'Некорректный ввод первого числа\n';
    }

    if(isNaN(Number(num2))) {
        alertMessage = alertMessage + 'Некорректный ввод второго числа\n';
    }

    if(isNaN(result) || result === Infinity || result === -Infinity ) {
        alertMessage = alertMessage + 'Операция некорректна\n';
    }

    if(alertMessage) {
        alertBlock.classList.add('form__alert_active');
    } else {
        alertBlock.classList.remove('form__alert_active');
    }
   
    alert.innerText = alertMessage;

    if(!alertMessage) {
        res.value = result;
    }
});


