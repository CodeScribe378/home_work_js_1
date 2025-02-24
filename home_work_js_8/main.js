
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function deepCopyWithFunction (obj){
 if (Number.isNaN(obj)|| obj===undefined ||  obj===null){
     return obj
    }
 if (typeof obj==='function'){
     return obj
 }
let copy ={};
for (let key in obj){
if (obj.hasOwnProperty(key)){
    copy[key]=deepCopyWithFunction(obj[key])
}
}
return copy
}


// //- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// //за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// //Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesMaped= coursesAndDurationArray.map((value,index)=>({id:index+1, title:value.title, monthDuration: value.monthDuration}))
console.log(coursesMaped)
