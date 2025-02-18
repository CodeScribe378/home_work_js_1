// Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3= 'javascript is cool';
console.log(str3.length);

// Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let s1= 'HELLO WORLD'
console.log(s1.toLowerCase());

let s2= 'LOREM IPSUM';
console.log(s2.toLowerCase());

let s3= 'JAVASCRIPT IS COOL';
console.log(s3.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let s4= ' dirty string   '
console.log(s4.trim());

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str){
    return str.split(' ');
}
console.log(stringToarray('Ревуть воли як ясла повні'))

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let number= [10,8,-7,55,987,-1011,0,1050,0]

let stringNumbers= number.map(value=>value.toString());
console.log(stringNumbers);

//- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction){
if (direction === 'ascending'){
    return array.sort((a,b)=>a-b);
}
if (direction==='descending'){
        return array.sort((a,b)=> b-a);
    }
}

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let sort= coursesAndDurationArray.sort((a, b)=>{
    return b.monthDuration-a.monthDuration;
})
console.log(sort);

let coursesAndDurationArrayFiltered= coursesAndDurationArray.filter(value=>value.monthDuration>5)
console.log(coursesAndDurationArrayFiltered);

let mapedCoursesAndDurationArray = coursesAndDurationArray.map(function (value, index){
    return{
        title: value.title,
        monthDuration: value.monthDuration,
        id: index+1,
    }
});
console.log(mapedCoursesAndDurationArray)

//описати колоду карт (від 6 до туза без джокерів)

const cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },

    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },

    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },

    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];

//знайти піковий туз
let find=cards.find(card=>card.cardSuit==='spade' && card.value==='ace');
console.log(find);

//всі шістки
let filteredCardsSix= cards.filter(cards=>cards.value=== '6');
console.log(filteredCardsSix);

// всі червоні карти
let filteredCardsRed= cards.filter(cards=>cards.color==='red');
console.log(filteredCardsRed);

//всі буби
let filteredCardsDiamond= cards.filter(cards=>cards.cardSuit==='diamond');
console.log(filteredCardsDiamond);

//всі трефи від 9 та більше
let filteredCardsClubs=cards.filter(cards=>cards.cardSuit==='clubs'&& (cards.value!=='6'&& cards.value!=='7'&& cards.value!=='8'&& cards.value!=='9'));
console.log(filteredCardsClubs);

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//
//{
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((accumulator, cards)=>{
    switch(cards.cardSuit){
        case 'spade':
            accumulator.spades.push(cards);
            break;
        case 'diamond':
            accumulator.diamonds.push(cards);
            break;
        case 'heart':
            accumulator.hearts.push(cards);
            break;
        case 'clubs':
            accumulator.club.push(cards);
            break;
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], club:[]});
console.log(reduce);

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sassCourse= coursesArray.filter((course)=>course.modules.includes ('sass'));
console.log(sassCourse);

let dockerCourse= coursesArray.filter(course=>course.modules.includes('docker'));
console.log(dockerCourse);

