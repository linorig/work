/*Здесь мы расмотрим переменные и строгий режим */

"use strict";

let number = 5; //Объявляем переменную через  let
const leftBorderWidth = 1; //Константу менять нельзя const

number = 20; //Переменная с цифрой  её выводим чрез консоле лог
console.log(number);

const obj = {
    a: 5
};

obj.a = 15;
console.log(obj);

console.log(name);
var name = 'alecs'; //Старый вывод через вар нейм будет зачёркнут

{
    var result = 70;
}
console.log(result);

alert(10);
[].push('a'); //не забываем ставить точки с запятыми