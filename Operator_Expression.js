// Assignment operator
// let x = 10;

// x += 80;

// console.log("x : ", x)

// object 
// let person = {name : "sabrina", age : 21};

// // array 
// let fruits = ["mangga", "apel", "jeruk"];

// // assisgnment terhadap atribut object 
// person.name = "agus";
// console.log("person ", person)

// // assisgnment terhadap item di dalam array
// fruits[0] = "semangka"
// console.log("fruits ", fruits)

// melakukan destructuring dari array dan object
// let person = {name : "sabrina", age : 21};

// let fruits = ["mangga", "apel", "jeruk"];

// let {name} = person;
// let [firstfruit] = fruits;

// console.log("name : ", name);
// console.log("firstfruit : ", firstfruit);

// Comparison Operator 
// const x = 10;
// const y = 100;

// const isXBiggerThanY = x > 10;
// console.log("isXBiggerThanY : ", isXBiggerThanY);

// Arithmetic Operator
// const x = 1;
// const y = 10;

// console.log(x + y);

// Logical Operator
// keadaan true
// console.log(1 && 10);
// console.log(0 || 100);
// console.log(true && false);
// console.log(true && false || "ya elah");

// const x = 10;
// const y = 100;

// if (x * y % 100 === 0) {
//     console.log("ok");
// } else {
//     console.log("salah");
// }

// String Operator
// let name = "sabrina";
// let greetingMessage = "Hai ,";

// console.log(greetingMessage + name);

// greetingMessage += name;
// greetingMessage += "!";
// console.log(greetingMessage);

// Relational Operator
// const stockFruits = ["mangga", "apel", "jeruk"];
// const isMyFavouriteFruitInStock = "Semangka" in stockFruits;
// console.log(isMyFavouriteFruitInStock);

// in 
// const stockFruits = ["mangga", "apel", "jeruk"];
// const person = {
//     name : "sabella",
//     age : 21,
//     ktpNumber : "123456789"
// };

// const isMyFavouriteFruitInStock = "Semangka" in stockFruits;
// console.log(isMyFavouriteFruitInStock);

// const doesPersonHaveKtp = "ktpNumber" in person;
// console.log(person.name, doesPersonHaveKtp ? "has KTP" : "does not have KTP");

// console.log(person instanceof Date)

// const date = new Date();
// console.log(date instanceof Date);

// Unary Operator
// delete dan typeof
// const x = 10;
// const person = {
//     name : "sabrina",
//     age : 21
// }

// delete person.name

// console.log(person);

// console.log(typeof person);

// console.log(typeof x);

// Conditional (Ternary) Operator
const isTodayRaining = true;
const thingsToBring = isTodayRaining ? "umbrella" : "aviator";

const x = 10;
const y = 20;

const luckyNumber = x === y ? 72 : 32;