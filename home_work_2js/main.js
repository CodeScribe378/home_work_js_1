//exercise1

let number;
number =[1,2,3,4,5,6,7,8,9,10];
console.log(number [0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);
console.log(number[5]);
console.log(number[6]);
console.log(number[7]);
console.log(number[8]);
console.log(number[9]);

//exercise2

let editor1={
    title: 'Pride and Prejudice',
    pageCount: 432,
    genre: 'novel',
    author: 'Jane Austin',
}
console.log(editor1);

let editor2={
    title: 'History of Ukraine',
    pageCount: 574,
    genre: 'history',
    author: 'Mijailo Hrushevski',
}
console.log(editor2);

let editor3={
    title: 'Capitalism and Freedom',
    pageCount: 208,
    genre: 'non-fiction',
    author: 'Milton Friedman',
}
console.log(editor3);

//exercise3
let book1={
    title:'Beautiful Creatures',
    pageCount: 300,
    genre: 'fantasy',
    authors: [
        {
            name:'Kami Garcia',
            age:52,
        },
        {
            name:'Margaret Stohl',
            age:57,
        }
    ]
}
console.log(book1);

let book2={
    title: 'Historia de arte',
    pageCount: 489,
    genre: ['history', 'non-fiction'],
    authors:[
        {
            name: 'Joan Ramón Triado Tur',
            age: 75,
        },
        {
            name: 'Isabel Pendas Garcia',
            age: 68,
        },
        {
            name: 'Triadó Subirana',
            age: 76,
        }
    ]
}
console.log(book2);

let book3={
    title: 'Domina tu motivación',
    pageCount: 198,
    genre: 'non-fiction',
    authors: [
        {
            name: 'Thibaiut Meurisse',
            age: 38,
        },
        {
            name: 'Juan Manuel Gimenez Sirimarco',
            age: 35,
        }
    ]
}
console.log(book3);

//exercise 4

let person=[
    {name: 'Julia', username: 'Julia-JS', password: 'julia@gmail.com',},
    {name: 'Brian', username: 'Brian-KJ', password: 'brian@gmail.com',},
    {name: 'Ursula', username: 'Ursula123', password: 'ursula@gmail.com',},
    {name: 'Tom', username: 'Tom456', password: 'tom@gmail.com',},
    {name:'Victor', username: 'Victor12', password: 'victor@gmail.com',},
    { name: 'Victoria', username: 'Victoria33', password: 'victoria@gmail.com',},
    { name: 'Luis', username: 'Luis23', password: 'luis@gmail.com',},
    {name: 'Lucia', username: 'Lucia-LP', password: 'lucia@gmail.com',},
    { name: 'Judit', username: 'Judit45', password: 'judit@gmail.com',},
    {name: 'Denis', username: 'Denis23', password: 'denis@gmail.com'}
]
console.log(person[0].password);
console.log(person[1].password);
console.log(person[2].password);
console.log(person[3].password);
console.log(person[4].password);
console.log(person[5].password);
console.log(person[6].password);
console.log(person[7].password);
console.log(person[8].password);
console.log(person[9].password);


//exercise5

let temperature=[
    {day:8, month:'february', morning:4, afternoon:9, evening:11},
    {day:9, month:'february', morning:5, afternoon:12, evening:10},
    {day:10, month:'february', morning:9, afternoon:11, evening:9},
    {day:11, month: 'february', morning:9, afternoon: 11, evening:10},
    {day:12, month: 'february', morning: 4, afternoon: 9, evening: 8},
    {day:13, month: 'february', morning: 5, afternoon: 8, evening:7},
    {day:14, month:'february', morning: 9, afternoon: 11, evening:10},
]
console.log(temperature);

//exercise6
let num=+prompt ('enter number');
if (num !==0){
    console.log('True');
}  else{
    console.log('False');
}
//exercise 7
let time = 8;
if (time =>0 && time<15){
    console.log('first-quarter');
}else if (time >15 && time<30){
    console.log('second-quarter');
} else if (time >30 && time<45){
    console.log('third-quarter');
} else if (time ===45 && time<60){
    console.log('quarter-part');
}

//exercise 8
let day=11;
if (day <=10){
    console.log('first-decade');
} else if (day <=20){
    console.log ('second-decade');
} else if (day <=31){
    console.log('third-decade');
}

//exercise 9
//to put in ('i') - day of the week
switch('i'){
    case 'Monday':
    console.log('go to work');
    console.log('go to gym');
    console.log('go to studio');
    console.log('lesson of IT')
    break;
    case 'Tuesday':
        console.log('go to work');
        console.log('homework IT');
        console.log('make project');
        break;
    case 'Wednesday':
        console.log('go to work');
        console.log('go to gym');
        console.log ('lesson of IT');
        break;

    case 'Thursday':
        console.log('go to work');
        console.log('homework');
        console.log('music project');
        break;
    case 'Friday':
        console.log('go to work');
        console.log('lesson IT');
        console.log('meet my friends');
        break;
    case 'Saturday':
        console.log('music project');
        console.log('shopping')
        console.log('homework IT');
        console.log('meet my friends');
        break;
    case 'Sunday':
        console.log('meet my family');
        break;
    default:
        console.log('nothing to do');
}

//exercise 10
let x=2;
    let y= 4;
    if (x>y){
        console.log(x);
    }else if (y>x){
        console.log(y);
    }else if(x===y){
        console.log('equal numbers');
    }

//exercise 11
let a=0;
    if(a===0){
        console.log('default');
    }else if (a===null){
        console.log(a='default');
    }else if (a===undefined){
        console.log(a='default');
    }else if(a===''){
        console.log(a='default');

    }else if(a===NaN){
        console.log(a='default');
    }

    //exercise 12
let coursesAndDurationArray=[
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray [2].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray [3].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray [4].monthDuration>5){
    console.log('super');
    }
if (coursesAndDurationArray [5].monthDuration>5){
    console.log('super');
}
