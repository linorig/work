"use strict";

if (4 == 4) {
    console.log('Да');
} else {
    console.log('Ошибка');
}

const num = 50;

if (num <49){
    console.log('Ошибка');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Да');
}

(num === 50) ? console.log('да') : console.log('Ошибка');

switch (num) {
    case 49: 
    console.log('Неверно');
    break;
    case 100: 
    console.log('Неверно');
    break;
    case 50: 
    console.log('В точку');
    break;

    default:
        console.log('не в этот раз');
        break;
}