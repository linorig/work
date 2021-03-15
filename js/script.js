"use strict";

let num = 20; //Глобальная переменная

function showFirstMassage(text) {
    console.log(text);
    let num = 4; //Эта функция только будет использываться локально

    console.log (num);
}

showFirstMassage("Приветствие!");
console.log(num); //Глобальная переменная выводим только её
