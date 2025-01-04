// калькулятор

// function canculator() {
//   console.log(number1 + number2);
//   console.log(number1 - number2);
//   console.log(number1 / number2);
//   console.log(number1 * number2);
// }

// военкомат

let recruits = [
  {
    name: "Igor",
    shurname: "Dend",
    age: 20,
    diseases: ["Ссыться", "Отвалился писюн"],
  },
  {
    name: "Evgen",
    shurname: "Gazprom",
    age: 20,
    diseases: ["Плохое зрение", "Псих"],
  },
  { name: "Vlad", shurname: "Dick", age: 20, diseases: null },
  { name: "Ser", shurname: "Gay", age: 23, diseases: ["Искривление жопы"] },
  { name: "Pavel", shurname: "Volya", age: 35, diseases: null },
  { name: "Tedd", shurname: "Tondy", age: 18, diseases: ["Биполярка"] },
  { name: "Choko", shurname: "Pay", age: 22, diseases: null },
];

// { name: "Igor", shurname: "Dend", age: 20, diseases: ["Ссыться"] } - recruit - recruit.diseases recruit.age

function oculist(recruit) {
  if (recruit.diseases.find((disease) => disease === "Плохое зрение")) {
    return "Болен";
  } else {
    return "Годен";
  }
}

function gynecologist(recruit) {
  if (recruit.diseases.find((disease) => disease === "Отвалился писюн")) {
    return "Болен";
  } else {
    return "Годен";
  }
}

function psychologist(recruit) {
  if (
    recruit.diseases.find(
      (disease) => disease === "Псих" || disease === "Биполярка"
    )
  ) {
    return "Болен";
  } else {
    return "Годен";
  }
}

function medosmotr(recruit) {
  if (
    oculist(recruit) === "Годен" &&
    gynecologist(recruit) === "Годен" &&
    psychologist(recruit) === "Годен"
  ) {
    return "Годен";
  } else {
    return "Болен";
  }
}

console.log(recruits[0].name, medosmotr(recruits[0]));

// function findFit(recruits) {
//   return recruits.filter(
//     (recruit) => recruit.diseases === null && recruit.age < 30
//   );
// }

// console.log("Подходящие рекруты", findFit(recruits));
