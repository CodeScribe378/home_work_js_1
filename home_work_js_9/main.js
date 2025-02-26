
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div')
div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')
div.innerText = 'hello';
div.style.display = 'flex';
div.style.alignItems= 'center';
div.style.justifyContent ='center';
document.body.append(div)
let cloneDiv = div.cloneNode(true)
console.log(cloneDiv)


// - Є масив:
  array = ['Main','Products','About us','Contacts']
//   Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ul= document.createElement('ul')
let li1= document.createElement ('li')
li1.innerText = 'Main'
let li2 =document.createElement('li')
li2.innerText='Products'
let li3 =document.createElement('li')
li3.innerText='About us'
let li4=document.createElement('li')
li4.innerText= 'Contacts'

ul.append(li1, li2, li3, li4)

document.body.appendChild(ul)

//////////////////
let arrUl = document.createElement('ul')
for (let arrLiElement of array){
    let li = document.createElement('li');
    li.innerText = arrLiElement
    arrUl.appendChild(li)
}

document.body.appendChild(arrUl)

//Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let item of coursesAndDurationArray){
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.innerText= item.title + ' ' +  item.monthDuration
    div.appendChild(p)
    document.body.appendChild(div)
}

//- Є масив
let coursesAndDurationArray2 = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
 ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (let item of coursesAndDurationArray2){
    let div = document.createElement('div')
    div.classList.add('item')
    let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = item.title;
    let p =document.createElement('p')
    p.classList.add('description')
    p.innerText = item.monthDuration
    div.append(h1, p)
    document.body.appendChild(div)
}




