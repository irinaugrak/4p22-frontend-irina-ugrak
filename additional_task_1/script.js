'use strict';

const person = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 97,
    child1: {
        firstName: 'Petr',
        lastName: 'Ivanov',
        age: 77,
        child1: {
            firstName: 'Natalia',
            lastName: 'Ivanova',
            age: 50,
            child1: {
                firstName: 'Kostya',
                lastName: 'Ivanov',
                age: 30,
                child1: {
                    firstName: 'Kostya',
                    lastName: 'Ivanov',
                    age: 5,
                },
                child2: {
                    firstName: 'Lesha',
                    lastName: 'Ivanov',
                    age: 6,
                },
                child3: {
                    firstName: 'Vladimir',
                    lastName: 'Ivanov',
                    age: 7,
                }
            },
            child2: {
                firstName: 'Matvey',
                lastName: 'Ivanov',
                age: 28
            }
        },
        child2: {
            firstName: 'Olga',
            lastName: 'Ivanova',
            age: 55
        }
    },
    child2: {
        firstName: 'Maria',
        lastName: 'Ivanova',
        age: 67
    }
}

const obhod = (obj, space) => {
    let arr = Object.entries(obj);
    arr.map(([key, value]) => {
        let isObject = typeof value === 'object';
        let keyStr = isObject ? `<span class="key-obj">${key}:</span>` : `<span class="key">${key}:</span> `;
        let valueStr = `<span class="value">${isObject ? '' : value}</span>`;
        let comaStr = `${isObject ? '' : ','}`;
        res = res + `<div class="str">${space}${keyStr}${valueStr}${comaStr}</div>\n`;
        if(isObject) {
            let spaceNew = space + spaceStart;
            obhod(value, spaceNew);
        };
    });
    
    return res;
}

let res = '<div class="str"><span class="name">person:</span></div>';
let spaceStart = '\u00A0\u00A0\u00A0\u00A0';
let space = spaceStart;
let result = obhod(person, space);
let root = document.getElementById('root');
root.innerHTML = result;








