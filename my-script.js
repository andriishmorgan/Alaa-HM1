// console.log("Day 1 – Javascript console.log Function");
// console.log("The function is declared like this:");
// console.log(`Console.log("What to log")`);

// console.log(typeof("Hello world"));

// // console log returns value from typeof

// typeof ("Hello world");
// // alert(typeof("Hello world"))

// console.log(`Hi, guys`);

// console.log(1.55);

// const userName = "andrey.shmorgan@gmail.com";
// console.log(userName);
// // userName = "Its bad way";
// // console.log(userName);
// // константу не можемо змінювати, це буде ігнороване

// const course = "Javascript";
// let date = 2024;
// console.log("Welcome to the " + course + ", which started on " + date + " to our website");

// let num1 = "alla";
// let num2 = 2;

// let firstName = "Andrew";
// let lastName = "Shmorhan";
// let string = "My name is ";
// let number = 97;
// let bool = true;

// console.log(firstName, number);

// console.log(`${string}${firstName} ${lastName}`);

// console.log(`${string}${firstName} ${lastName} my ID is`, 100);

// console.log(typeof (firstName));

// console.log(typeof(number));

// console.log(typeof(bool));

// console.log("Lesson 2: String Manipulation");
// console.log(`You can Concatenate strings together using "+" sign.`);
// console.log(`For example print("Hello " + "world")`);

// let name = "John"
// let age = 21;
// let x = 10 * 5 / 2 + 5;

// console.log(`Hello ${name}, You are ${age} years old`);

// let nameUSer = "Andrew";
// let ageUser = 23;

// let a = "What is your name?";
// let b = prompt(a);
// alert(b);

// // // There are two variables, a and b from input
// let a = prompt("First Number")
// let b = prompt("Second Number")
// // // 🚨 Don't change the code above ☝
// // //####################################
// // // Write your code below this line 👇

// let c = a;
// a = b;
// b = c;


// // // 🚨 Don't change the code below 👇
// console.log("a: " + a)
// console.log("b: " + b)

// const userName = "Andrew";
// console.log(userName.length);

// let name = prompt("What is your name?");
// alert(`Your name has ${name.length} characters`);


 /* LESSION #4 */

// let userName = "abc";
// console.log(userName[1]);

// let surName = " Hello";

// console.log(surName.trimEnd());
// console.log(surName[2]);

// let num = 2;
// let num2 = 1

// console.log(num - num2 / 6 * 3);

// console.log(3 * 3 + 3 / 3 - 3);

// let a = toString(5)

// console.log(typeof (a));

// let kilomitersN = 20;
// let milesN = 1.609344;

// let calculate = kilomitersN / milesN;

// console.log(`${calculate} ml`);

// let weight = 75;
// let heightInMeters = 1.75;
// let heightInCentimeters = heightInMeters;

// let bodyMassIndex = weight / (heightInCentimeters **2);

// console.log(Math.floor(bodyMassIndex));

// let name = "Alaa"
// if (name == "alaa") {
//     console.log("true");
// } else {
//     console.log("false");
// }

// console.log(1 == true);

// let height = prompt("Enter your height in cm")
// if (height >= 120) {
//     console.log("You can ride");
// } else {
//     console.log("Sorry, you are too short");
// }

// let number = prompt("Enter a number: ")
// if ((number % 2 == 0)) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// let height = prompt("Enter your height in a cm")
// if (height >= 120) {
//     console.log("You can ride");
//     let age = prompt("Enter your age")
//     if (age >= 18) {
//         console.log("90 SEK");
//     } else if (age >= 12) {
//         console.log("70 SEK");
//     } else {
//         console.log("50 SEK");
//     }
// } else {
//     console.log("Sorry, you are too short!");
// }


let weight = prompt("Enter your weight in kg")
let heightInMeters = prompt("Enter your height in meters")
let heightInCentimeters = heightInMeters;

let bodyMassIndex = weight / (heightInCentimeters **2);

if (bodyMassIndex < 18.5) {
    console.log("Underweight");
} else if (bodyMassIndex < 25) {
    console.log("Normal weight");
} else if (bodyMassIndex < 30) {
    console.log("Slightly overweight");
} else if (bodyMassIndex < 35) {
    console.log("Obese");
} else {
    console.log("Clinically obese");
}