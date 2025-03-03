// Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let text= document.getElementById('text')
let b1= document.getElementById('b1')
b1.onclick = function(){
text.remove()
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.

let id1= document.getElementById('id1')
let b2 =document.getElementById('b2')
let p = document.getElementById('message')

b2.onclick=function(){
    if (id1.value >=18){
        p.innerText = 'You are 18 years old or older.'
    }
    if (id1.value<18){
        p.innerText='You are under 18 years old'
    }
}
//Стоврити форму з трьома полями для name, sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


let f1= document.forms.f1
let sButton = f1.submit
let div = document.getElementById('object')
sButton.onclick=function(ev){
    ev.preventDefault()
    let n1 = f1.userName.value
    let s1= f1.surName.value
    let a1= f1.userAge.value
    let obj={n1, s1, a1}
    div.innerText = obj.n1+' ' + obj.s1+ ' ' + obj.a1
}

//є сторінка, на якій є блок, якому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber= +localStorage.getItem('number')
currentNumber +=1;
localStorage.setItem('number', currentNumber)

document.getElementById('number').innerText=currentNumber;

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
sessionList.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionList))

//#Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let id2= document.getElementById('id2')
let res = document.getElementById('result')
id2.oninput= function(){
   let kg= this.value
    let lbs= kg * 2.20462;
   res.innerText= lbs.toFixed(2)
}

//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage
// та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage (arrayName, objToAdd){
    let array = JSON.parse(localStorage.getItem(arrayName)) || [];
    array.push(objToAdd)
    localStorage.setItem(arrayName, JSON.stringify(array))
}
addToLocalStorage()


// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const tableForm = document.forms['tableForm'];
const table= document.getElementById('table')


tableForm.onsubmit = function(e){
    e.preventDefault();
    const linesValue = +tableForm.lines.value;
    const cellsValue= +tableForm.cells.value;
    const dataValue= tableForm.data.value;
    console.log(linesValue, cellsValue, dataValue)

    for (let i=0; i<linesValue; i++){
        const tr = document.createElement('tr')

        for (let j=0; j<cellsValue; j++){
            const td = document.createElement('td')
            td.innerText = dataValue;
            tr.appendChild(td)

        }
     table.appendChild(tr);
    }
};
