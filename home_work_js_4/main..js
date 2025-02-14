// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    let result= a * b;
    return result;
}
let s = square (10, 5);
console.log (s)

//  створити функцію яка обчислює та повертає площу кола з радіусом r;
function roundSquare(radius){
    let result = 3.14 * radius * radius;
    return result;
}
let sCircle = roundSquare(2);
console.log(sCircle);

//  створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(radius, height){
    let result = 2 * 3.14 * radius * height;
    return result;
}
let sCylinder = squareCylinder( 3,4 );
console.log(sCylinder);

//створити функцію яка приймає масив та виводить кожен його елемент

function foobar (array){
     for (const item of array){
       console.log (item);
     }
}
//foobar();

// створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function writer(text){
  document.write(`<p>${text}</p>`)
 }
writer('hello');

//створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function list (text){

  document.write(`
                  <ul>
                   <li>${text}</li>
                   <li>${text}</li>
                   <li>${text}</li>
                        </ul>`)
}
list('cool');

//створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function listNumber (text, number){
    document.write(`<ul>`)
    for (let i=0; i<number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
listNumber ('hello world', 2);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function listPrimitive (array){
    document.write (`<ul>`)
    for (let item of array){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
listPrimitive([1,2,3,4]);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrayObjects(users){
    for (let user of users){
        document.write(`<div>${user} ${user.id} ${user.name} ${user.age}</div>`);
    }
}
arrayObjects([{id:1, name: 'Maria', age:30}]);

// створити функцію яка повертає найменьше число з масиву
function arrayNumbers (numbers){
    let minNumber = numbers[0];
    for (let number of numbers){
        if (number < minNumber){
           minNumber = number;
        }
    }
    return  minNumber;
}

console.log (arrayNumbers([3,4,2,5,6]));

//створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum (arr){
    let numberList = 0;
    for (const number of arr){
        numberList = numberList + number;
    }
    return numberList;
}
console.log (sum([1,2,3]));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах.//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
 return arr;
}

console.log(swap([11,22,33,44],0,1));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currencySpecified;
    for (const item of currencyValues){
        if (item.currency === exchangeCurrency){
            currencySpecified = item;
        }
    }
    let result = sumUAH/currencySpecified.value;
    return result;
}
exchange ();

