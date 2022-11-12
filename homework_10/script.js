'use strict';

async function getUsers(page) {
    let result = null;
    try {
        let resolve = await fetch(`https://reqres.in/api/users?page=${page}`)
        result = await resolve.json();
    } catch(error) {
        console.log(error);
    }

    return result;
}

async function dataOfUsers() {
    let users = [];

    for(let page = 1; page < 3; page++) {
        try {
            let result = await getUsers(page);
            if(result !== null) {
                users = users.concat(result.data.slice(0));
            }
        } catch(error) {
            console.log(error);
        }
    };

    let lastNameList = users.map((item) => item.last_name ? item.last_name : '');
    let usersFList = users.filter((item) => item.last_name[0] === 'F');
    let namesList = users.reduce((str, item, index, arr) => {
        let comma = index === arr.length - 1 ? '' : ',';
        return `${str}${item.first_name} ${item.last_name}${comma} `;
    }, 'Наша база содержит данные следующих пользователей: ');

    let keysList = [];
    users.forEach((item) => {
        for( let key of Object.keys(item)) {
            if (keysList.indexOf(key) === -1) {
                keysList.push(key);
            }
        }
    });

    let lastNameListNode = document.getElementById('last-name-list');
    let usersFListNode = document.getElementById('users-f-list');
    let namesListNode = document.getElementById('names-list');
    let keysListNode = document.getElementById('keys-list');

    if (lastNameListNode && lastNameList) {
        lastNameListNode.innerText = lastNameList.join(', ');
    }

    if(usersFListNode && usersFList && keysList) {
        let innerHTML = '<ul class="list">';
        usersFList.forEach((item) => {
            let innerElementHTML = '<li class="item">';
            keysList.forEach((key) => {
                let keyElement = '<div class="key">';
                if(key === 'avatar') {
                    keyElement = keyElement + `
                        <img src="${item[key]}"></img>
                    `;
                } else {
                    keyElement = keyElement + `
                        <span class="item-title">${key}: </span>
                        ${item[key]}
                `;
                };
                keyElement = keyElement + '</div>';
                innerElementHTML = innerElementHTML + keyElement;
            });
            innerElementHTML = innerElementHTML + '</li>';
            innerHTML = innerHTML + innerElementHTML;
        });
        innerHTML = innerHTML + '</ul>';
        usersFListNode.innerHTML = innerHTML;
    }

    if(namesListNode && namesList) {
        namesListNode.innerText = namesList;
    }

    if(keysListNode && keysList) {
        let innerHTML = '<ul>'; 
        keysList.forEach((item) => {
            innerHTML = innerHTML + `
                <li>${item}</li>
            `;
        })
        keysListNode.innerHTML = innerHTML;
    }
}  

dataOfUsers();


