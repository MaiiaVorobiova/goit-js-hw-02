'use strict'
let input;
const numbers = [];
let total = 0;
while (true) {
    let input = prompt('Пожалуйста введите число');
   
    if (input === null) {
        break
    }
    numbers.push(input);
    for (const number of numbers) {
        total += number;
    }
}
   
 alert(`Общая сумма чисел равна ${total}`);