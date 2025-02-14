//

let square = (a,b)=> a*b;
console.log(square(10,5));

//
let roundSquare = (radius)=> 3.14 * radius * radius;
console.log(roundSquare(2));

//
let squareCylinder = (radius, height) => 2 * 3.14 * radius * height;
console.log(squareCylinder(3,4));

//
let foobar = (array)=> {
    for (const item of array){
        console.log (item);
    }
};
//foobar();

//

let writer = (text) =>{
    document.write(`<p>${text}</p>`);
}
writer('hello');

//
let list = (text)=>{
    document.write(`
                  <ul>
                   <li>${text}</li>
                   <li>${text}</li>
                   <li>${text}</li>
                        </ul>`)
};
list('cool');

//
let listNumber = (text, number) =>{
    document.write(`<ul>`)
    for (let i=0; i<number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
listNumber ('hello world', 2);

//

let listPrimitive = (array) =>{
    document.write (`<ul>`)
    for (let item of array){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
listPrimitive([1,2,3,4]);

//

let arrayObjects = (users) =>{
    for (let user of users){
        document.write(`<div>${user} ${user.id} ${user.name} ${user.age}</div>`);
    }
}
arrayObjects([{id:1, name: 'Maria', age:30}]);

//
let arrayNumbers = (numbers)=>{
    let minNumber = numbers[0];
    for (let number of numbers){
        if (number < minNumber){
            minNumber = number;
        }
    }
    return minNumber
}
console.log (arrayNumbers ([3,4,2,5,6]));

//
let sum = (arr)=>{
    let numberList = 0;
    for (const number of arr){
        numberList = numberList + number;
    }
    return numberList;
}
console.log (sum([1,2,3]));

//
let swap = (arr, i1, i2) =>{
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}

console.log(swap([11,22,33,44],0,1));
 //
let exchange =(sumUAH, currencyValues, exchangeCurrency)=>{
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


