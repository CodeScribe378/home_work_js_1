//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone){
    this.id = id;
    this.name=name;
    this.surname= surname;
    this.email = email;
    this.phone = phone;

}

let users =[];

let user1= new User (1, 'Judit', 'Suarez', 'judit@gmail.com', 6574839236)
console.log(users)
let user2=new User(2, 'Lucia', 'Vazquez', 'lucia@gmail.com', 635786577)
let user3= new User(3, 'Mireya', 'Gonzalez', 'mireya@gmail.com', 635748576)
let user4 = new User (4, 'Luis', 'Pou', 'luis@gmail.com', 635987466)
let user5 = new User (5, 'Camila', 'Brugarolaz', 'camila@brug.com', 648576846)
let user6= new User(6, 'Ella', 'Rusanen', 'ella@gmail.com', 634568766)
let user7= new User (7, 'Yulia', 'Fenko', 'yulia@gmail.com', 635968755)
let user8= new User (8, 'Melisa', 'Lala', 'melisa@gmail.es', 65867499)
let user9 = new User (9, 'Kateryna', 'Ryzhenko', 'katryna@gmail.com', 634758699 )
let user10= new User (10, 'Jenifer', 'Mendoza', 'jenifer@gmail.com', 6586735422)
users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersFiltered= users.filter(user=>user.id % 2===0);
console.log(usersFiltered)

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort= users.sort((u1, u2)=>{
    return u1.id - u2.id;
})
console.log(sort)

//створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, orderTitle){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=orderTitle;
}

let client= [
    new Client (1, 'Kira','Vasylivna','kira@gmail.com', 564357373, ['telephone', 'tv']),
    new Client (2, 'Kamil', 'Rozenkiewitch', 'kamil@gmail.com', 6483756583, ['mobilephone']),
    new Client (3, 'Yannis', 'Celis', 'yannis@gmail.com', 6595867433, ['vacuum cleaner', 'microwave']),
    new Client (4, 'Oscar', 'Melia', 'oscar@gmail.com', 645768544, ['oven','tv','coffee maker']),
    new Client (5, 'Yulia', 'Tsymbal', 'yulia@gmail.com', 657483745, ['computer']),
    new Client (6, 'Inna', 'Kurasova', 'kurasova@gmail.com', 564736455, ['mobilephone']),
    new Client (7, 'Denys', 'Tsemashko', 'denys@gmail.com', 658769403, ['computer', 'tv']),
    new Client (8, 'Lina', 'Petrovna', 'petrovna@gmail.com', 5647384765, ['refrigerator']),
    new Client (9, 'Laura', 'Orrego', 'orrego@gmail.com', 6574638432, ['coffee maker']),
    new Client (10, 'Laya', 'Lopez', 'lopez@gmail.com', 6586749307, ['computer', 'refrigerator', 'coffee maker']),
]
console.log(client)

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(client.sort((c1, c2)=>{
    return c1.order.length - c2.order.length
}))

//  Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model, manufacturer, year, maxSpeed, enginePower){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year= year;
    this.maxSpeed= maxSpeed;
    this.enginePower=enginePower;
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function(){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
let car1= new Car ('Tesla 3', 'Tesla', 2023, 262, 460);
car1.drive();

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

Car.prototype.info = function (){
    console.log(`model - ${this.model}`);
    console.log(`manufacturer - ${this.manufacturer}`);
    console.log(`year - ${this.year}`);
    console.log(`maxSpeed - ${this.maxSpeed}`);
    console.log(`enginePower - ${this.enginePower}`)
}
car1.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car.prototype.increaseMaxSpeed = function (NewSpeed){
    this.maxSpeed += NewSpeed
}

car1.increaseMaxSpeed(50)
car1.info()

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.newValue= function(newYear){
     this.year= newYear;
}
car1.newValue(2024);
car1.info();

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

Car.prototype.addDriver = function(driver) {
    this.driver = driver;
};

let driver ={age: 30, name:'John'};
car1.addDriver(driver);
console.log(car1)

//     (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ExCarClass{
    constructor(model, manufacturer, year, maxSpeed, enginePower) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year=year;
        this.maxSpeed =maxSpeed;
        this.enginePower= enginePower;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info (){
        console.log(`model - ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`enginePower - ${this.enginePower}`)
    }
    increaseMaxSpeed (NewSpeed){
        this.maxSpeed += NewSpeed
    }
    newValue (newYear){
        this.year= newYear;
    }
    addDriver (driver) {
        this.driver = driver;
    };
}

let car2= new ExCarClass ('Tesla 2', 'Tesla', 2025, 250, 350);
car2.drive();
car2.info();
car2.increaseMaxSpeed(50)
car2.info()
car2.newValue(2028);
car2.info();
car2.addDriver({})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {


    constructor(name, age, footSize) {
        this.name = name;
        this.age=age;
        this.footSize=footSize;
    }

}

class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age= age;
        this.shoe=shoe;
    }

}

let cinderellas= [
    new Cinderella ('Cinderella1', 25, 35),
    new Cinderella ('Cinderella2', 18,  28),
    new Cinderella ('Cinderella3', 23, 30),
    new Cinderella ('Cinderella4', 26, 37),
    new Cinderella ('Cinderella5', 23, 32),
    new Cinderella ('Cinderella6', 24, 30),
    new Cinderella ('Cinderella7', 26, 35),
    new Cinderella ('Cinderella8', 27, 34),
    new Cinderella ('Cinderella9', 19, 29),
    new Cinderella ('Cinderella10', 20, 30)
]
console.log(cinderellas)
let prince= new Prince('Prince Henry', 19, 28)
console.log(prince)

for(let item of cinderellas){
    if (item.footSize === prince.shoe){
     console.log(`${item.name} must be with ${prince.name}`)
    }
}
let find= cinderellas.find(cinderella=>cinderella.footSize===prince.shoe)
console.log(find);


// *Через Array.prototype. створити власний foreach, filter
Array.prototype.forEach= function(callback){
    for (const item of this){
        callback(item)
    }
}

Array.prototype.myFilter = function(callback) {
    let arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};

