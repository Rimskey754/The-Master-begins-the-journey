// ТИПЫ ДАННЫХ

// ИМЯ ПЕРЕМЕННОЙ ДОЛЖНО БЫТЬ УНИКАЛЬНЫМ

// строка
let box = "apple";

// число
let number = 5;

// boolean
let isActive = true;

// объекты

let cat = {
  age: "21",
  name: "cris",
};

let dog = {
  age: "12",
  name: "dubok",
};

alert(cat.age); // - выводит 21;

// массив

let numbers = [1, 2, 3, 4, 5];

let cars = ["BMW", "Mercedes", "Audi"];

let users = [
  { name: "John", age: 25 },
  { name: "Mike", age: 30 },
];

// null - пустое значение

// 1
let empty1 = null;

// 2
let empty2;

// undefined - неопределенное значение

///////////////// СПОСОБЫ ОБЪЯВЛЯНИЯ ПЕРЕМЕННОЙ

// 1. var - не рекомендуется (-)
var name = "John";
// 2. let - изменемая переменная
let name = "John";
// 3. const - не изменяемая переменная
const name = "John";

// ФУНКЦИИ - ВВОД

// 1 способ объявления функции

function nameFunction1() {
  alert("hello_nameFunction1");
}

nameFunction1();

// 2 способ объявления функции, с использованием стрелочной функции (тоже самое, но короче)

const nameFunction2 = () => {
  alert("hello_nameFunction2");
};

nameFunction2();

// 3 способ объявления функции, при помощи переменной

const nameFunction3 = function () {
  alert("hello_nameFunction3");
};

nameFunction3();

// ФУНКЦИИ - ПАРАМЕТРЫ

function canculator(number1, number2) {
  alert(number1 + number2);
}

// ПЕРЕДАЛИ ПАРАМЕТРЫ В ФУНКЦИЮ
canculator(1, 3);

// УСЛОВНЫЕ ОПЕРАТОРЫ

// if
// else
// if else

// if

if (2 < 1) {
  alert("ЕБАТЬ ТЫ ГЕЙ");
}

// if else

if (2 < 1) {
  alert("ЕБАТЬ ТЫ ГЕЙ");
} else {
  alert("ТЫ НЕ ГЕЙ");
}

// 1 === 1 - один равен одному
// 2 !== 1 - два не равны одному

// if else if else

if (2 < 1) {
  alert("ЕБАТЬ ТЫ ГЕЙ");
} else if (2 > 3) {
  alert("ТЫ НЕ ГЕЙ");
} else {
  alert("ТЫ ТОЧНО НЕ ГЕЙ");
}

// ТВОЯ ПЕРВАЯ ПРОГА

const nameFunction = (number1, number2, number3) => {
  if (number3 === 0) {
    alert("Иди нахуй");
  } else if (number1 > number2) {
    alert("Не идёшь нахуй");
  } else {
    alert(number1 + number2 + number3);
  }
};

nameFunction(1, 2, 5);

//допилить
const recruits = [
  { name: "Igor", shurname: "Dend", age: 20}
  { name: "Evgen", shurname: "Gazprom", age: 20}
  { name: "Vlad", shurname: "Dick", age: 20}
  { name: "Ser", shurname: "Gay", age: 29}
  { name: "Pavel", shurname: "Volya", age: 40}
  { name: "Tedd", shurname: "Tondy", age: 18}
  { name: "Choko", shurname: "Pay", age: 22}

]

