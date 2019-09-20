//**************************
//i.skumatenko@yandex.ru
//https://learn.javascript.ru/js

// Лекция 1 "Переменные и типы данных в JS"

//console.log("Hello world!!!")


//Переменные

//var пытаться не использовать
//let oneF; обьявление переменный
//oneF = "Hello"; задаём переменной значение
//onef = 'World'; переназначаем переменную
//console.log(oneF);

//let infA = Infinity; Мат. бесконечность
//let nanA = NaN; Не число

//Смена типа переменной
//let bolA;
//bolA = true; переменная типа boolean
//console.log(typeof(bolA));
//bolA = bolA;
//bolA=oneF+bolA;
//console.log(typeof(bolA));
//console.log(bolA);

// есть ещё тип object

//Оператор(функция) просмотра типа переменной
//typeof one1;
//typeof (one1);

//Переменная, которая не может быть измененена
//const constantaOne;
//let undOne;
//undOne = undOne+1;
//console.log(undOne);



//************************************

// Лекция 2 "Операторы сравнения, условные операторы if, ?(тернарный), логические операторы, приоритеты операторов"



//console.log(true == 1);
//console.log(34<10);
//console.log("Ая" > "АА");
//console.log(false === 0);
// >= <= !== !===


/*
Проверка одного условия

let yearIvan = 2000;
const now = 2019;
let ab = (now-yearIvan)<19;

if (ab) {
    console.log("Иван несовершеннолетний")
} else {
    console.log("Иван совершеннолетний")
}
*/


/* Проверка вложенных условий
let yearIvan = 2000;
const now = 2019;
let age = (now-yearIvan);

if (age>19) {
    console.log("Иван совершеннолетний")
} else if (age<65) {
    console.log("Иван не на пенсии")
} 
*/

/*
Оператор "?"
let yearIvan = 2000;
const now = 2019;
let age = (now-yearIvan)>19;
let soversh = age ? "совершеннолетний":"не совершеннолетний";
console.log (soversh);
*/

/*

Логические операторы

|| - логиеское ИЛИ
&& -  логическое И
! - логическое отрицание

*/

/*
Ищем первое действительное значение
let aA, aB, aC;
aC=100;
let trueOne = aA || aB || aC;
console.log(trueOne);
*/




/*
**********************************************
    Лекция 3 "Введение в  Git"

Git derectory - каталог гита
working directory - рабочий каталог
staging area - область подготовленных файлов
*/



//********************************************
//  Лекция 4 "Конструкция switch и functions  в JS"

// switch
/*
let ageIvan = 99;
let ageAnton = 35;
let ageMaria = 41;
let ageKatya = 12;

if (ageIvan>ageAnton) {
    console.log("Иван старше, чем Антон")
} else if (ageIvan>ageMaria) {
    console.log("Иван старше, чем Маша")
} else if (ageIvan>ageKatya) {
    console.log("Иван старше, чем Катя")
}

switch (true) {
        case (ageIvan>ageAnton):
        console.log("Иван старше, чем Антон")
        break;
        case (ageIvan>ageMaria):
        console.log("Иван старше, чем Маша")
        case (ageIvan>ageKatya):
        console.log("Иван старше, чем Катя")
        break;
    default:
    break;
        }
*/



// Функции и JS
/*
let ageIvan = 1990;
let ageAnton = 1934;
let ageMaria = 2002;
let ageKatya = 1998;
let date = 2019;
let dateNext = 2020;

function age(ageName, dateT){
    console.log(dateT - ageName);
}

age(ageAnton, date);
age(ageIvan, date);
age(ageKatya, date);
age(ageKatya, dateNext);
*/

// let age = function();

/* return

function summ(a, b){
    return a+b;
}
let summa

summa = summ(10, 30);
console.log(summa);
*/


//let ageIvan = 99;
//let ageAnton = 35;
//let ageMaria = 41;
//let ageKatya = 12;
/*
switch (true) {
        case (ageIvan>ageAnton):
        console.log("Иван старше, чем Антон")
        break;
        case (ageIvan>ageMaria):
        console.log("Иван старше, чем Маша")
        case (ageIvan>ageKatya):
        console.log("Иван старше, чем Катя")
        break;
    default:
    break;
        }
*/
/*
function age(a,b) {
    if (a>b){
        console.log(a, " старше, чем ", b);
    } else {
        console.log(b, " старше, чем ", a);
    }
}

age(ageAnton, ageKatya);
*/



















