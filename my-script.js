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


// let weight = prompt("Enter your weight in kg")
// let heightInMeters = prompt("Enter your height in meters")

// let bodyMassIndex = weight / (heightInMeters **2);

// if (bodyMassIndex < 18.5) {
//     console.log("Underweight");
// } else if (bodyMassIndex < 25) {
//     console.log("Normal weight");
// } else if (bodyMassIndex < 30) {
//     console.log("Slightly overweight");
// } else if (bodyMassIndex < 35) {
//     console.log("Obese");
// } else {
//     console.log("Clinically obese");
// }

 /* LESSION #7 */

// let height = prompt("Enter your height in a cm")

// let totalPrice = 0;

// if (height >= 120) {
//     // console.log(`You can ride`);
//     let age = prompt(`Enter your age`)
//     if (age >= 18) {
//         totalPrice = 90;
//     } else if (age >= 12) {
//         totalPrice = 70;
//     } else {
//         totalPrice = 50;
//     };
    
//     let photo = prompt("Do you want a photo?");
//     if (photo === "yes") {
//         if (age < 65) {
//             totalPrice += 25;
//         }
//         alert("The total price is " + totalPrice + "kr")
    
//     } else {
//         console.log("Sorry, you are too short!");
//     }
// }

// let yourOrder = prompt("Which size pizza do you want? S, M or L").toLowerCase();
// let totalPrice = 0;

// if (yourOrder === "s") {
//     totalPrice = 15;
// } else if (yourOrder === "m") {
//     totalPrice = 20;
// } else if(yourOrder === "l") {
//     totalPrice = 25;
// } else (
//     alert("Sorry, you need to choose size of pizza! You have 3 size: S, M or L")
// )
// let addPepperoni = prompt("Do you want pepperoni for your pizza?").toLowerCase();
// if (yourOrder === "s" && addPepperoni === "yes") {
//     totalPrice += 2
// } else if (yourOrder === "m"  && addPepperoni === "yes") {
//     totalPrice += 3
// } else if (yourOrder === "l" && addPepperoni === "yes") {
//     totalPrice += 3
// }
// // замість 2 else if - просто добавляємо else (і додаємо 3 доллари)
// // else {
// //     totalPrice += 3;
// // }

// let addCheese = prompt("Do you want extra cheese for pizza, it's only 1$ extra!)").toLowerCase();
// if (addCheese === "yes") {
//     totalPrice +=1
// }
// alert("The total price of your order is a " + totalPrice + "$")

 /* ------ LESSION #8 ------ */

// let num1 = 10
// let num2 = 20
// let num3 = 30

// if (num1 + num2 === num3 || num3 - num1 === num3) {
//     console.log("The numbers are correct");
// } else {
//      console.log("The numbers are incorrect");
// }

// let fruit = "apple";

// switch (fruit) {
//     case "banana":
//         console.log("I'm a banana");
//         break;
//     case "apple":
//         console.log("I'm an apple");
//         break;
//     case "orange":
//         console.log("I'm an orange");
//         break;
// }

// let day = prompt("Day of the week?")
// day = parseInt(day);
// if (day >= 1 && day <= 7) {
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     }
// } else {
//     console.log("false");
// }

// let states = ["NY", "NJ"]
// states.push("CA")

// console.log(states);

 /* ------ HM #8 ------ */

// alert('You are welcome to big game: "Infinity"');

// let startGame = prompt("If you want to continue this game - put here OK!").toLowerCase();

// if (startGame === "ok") {
//     alert("You're in the game. You are a brave person!");

//     let earthElement;
//     do {
//         earthElement = prompt("Choice your number. You have choice from 1 to 4!");
//         earthElement = parseInt(earthElement);
//         if (earthElement >= 1 && earthElement <= 4) {
//             alert("Now there will be questions, you can choose only one answer: \n A, B or C!")
//                 switch (earthElement)
//                 {
//                 case 1:
//                     let question1 = prompt("Question about Earth: Which of the following is a natural satellite of the Earth? \n A) Mars \n B) The Moon \n C) Jupiter");
//                     question1 = question1.toUpperCase();
//                     if (question1 === "B") {
//                         console.log("Correct! The Moon is a natural satellite of the Earth.");
//                     } else {
//                         console.log("Incorrect answer. The Moon is a natural satellite of the Earth.\n" +
//                         "              --      --\n" +
//                         "            .:\"  | .:'\" |\n" +
//                         "          --  ___   ___  -\n" +
//                         "        /:.  /  .\\ /.  \\ .\\\n" +
//                         "       |:|. ;\\___/O\\___/  :|\n" +
//                         "       |:|. |  `__|__'  | .|\n" +
//                         "       |:|.  \\_,     ,_/  /\n" +
//                         "        \\______       |__/\n" +
//                         "         |:.           \\\n" +
//                         "        /.:,|  |        \\\n" +
//                         "       /.:,.|  |         \\\n" +
//                         "       |::.. \\_;_\\-;       |\n" +
//                         " _____|::..    .::|       |\n" +
//                         "/   ----,     .::/__,    /__,\n" +
//                         "\\_______|,...____;_;_|../_;_|\n");
//                     }
//                     break;
//                 case 2:
//                     let question2 = prompt("Question about Water: What percentage of the Earth's surface is covered by water? \n A) 50% \n B) 70% \n C) 90%");
//                     question2 = question2.toUpperCase();
//                         if (question2 === "B") {
//                             console.log("Correct! Approximately 70% of the Earth's surface is covered by water.");
//                         } else {
//                             console.log(
//                                 "██╗      ██████╗ ███████╗███████╗██████╗\n" +
//                                 "██║     ██╔═══██╗██╔════╝██╔════╝██╔══██╗\n" +
//                                 "██║     ██║   ██║███████╗█████╗  ██████╔╝\n" +
//                                 "██║     ██║   ██║╚════██║██╔══╝  ██╔══██╗\n" +
//                                 "███████╗╚██████╔╝███████║███████╗██║  ██║\n" +
//                                 "╚══════╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝\n\n" +
//                                 "Incorrect answer. Approximately 70% of the Earth's surface is covered by water.");
//                         }
//                     break;
//                 case 3:
//                     let question3 = prompt("Question about Fire: What is the main component of a fire that causes it to burn? \n A) Water \n B) Oxygen \n C) Carbon dioxide");
//                     question3 = question3.toUpperCase();
//                     if (question3 === "B") {
//                       console.log("Correct! Oxygen is the main component of a fire that causes it to burn.");
//                     } else {
//                         console.log(
//                          " \\                                 />\n" +
//                          " \\__+_____________________/\\/\\___/ /|\n" +
//                          " ()______________________      / /|/\\\n" +
//                          "             /0 0  ---- |----    /---\\\n" +
//                          "            |0 o 0 ----|| - \\ --|      \\\n" +
//                          "             \\0_0/____/ |    |  |\\      \\\n" +
//                          "                         \\__/__/  |      \\\n" +
//                          "Bang! Bang!                       |       \\\n" +
//                          "                                  |         \\\n" +
//                          "                                  |__________|\n\n" +
//                          "Incorrect answer. Oxygen is the main component of a fire that causes it to burn.");
//                     }
//                     break;
//                 case 4:
//                     let question4 = prompt("Question about Air: Where is the highest place on Earth where you can breathe? \n A) Mount Everest \n B) The Dead Sea \n C) The Great Barrier Reef");
//                     question4 = question4.toUpperCase();
//                     if (question4 === "A") {
//                         console.log("Correct! Mount Everest is the highest place on Earth where you can breathe.");
//                     } else {
//                         console.log(
//                         "              (\n" +
//                         "               )\n" +
//                         "              (\n" +
//                         "        /\\  .-\"\"\"-.  /\\\n" +
//                         "       //\\\\/  ,,,  \\//\\\\\n" +
//                         "       |\\/| ,;;;;;, |\\/|\n" +
//                         "       //\\\\\\;-\"\"\"-;///\\\\\n" +
//                         "      //  \\/   .   \\/  \\\\\n" +
//                         "     (| ,-_| \\ | / |_-, |)\n" +
//                         "       //`__\\.-.-./__`\\\\\n" +
//                         "      // /.-(() ())-.\\\\ \\\n" +
//                         "     (\\ |)   '---'   (| /)\n" +
//                         "      ` (|           |) `\n" +
//                         "         \\)           (\n" +
//                         "\n" +
//                         "Incorrect answer. Mount Everest is the highest place on Earth where you can breathe.");
//                     }
//                     break;
//                 }
//     } else {
//         alert("The number is incorrect. Please choose a number from 1 to 4.");
//     }
//     } while (!(earthElement >= 1 && earthElement <= 4));
// } else {
//     console.log("He who does not take risks does not win\n"
//                + "                       -           -\n"
//                + "                      -   -    \n"
//                + "                         -         -\n"
//                + "                     -       -  - \n"
//                + "                  ________._____________\n"
//                + "                  |   .                |\n"
//                + "                  |^^^.^^^^^.^^^^^^.^^^|\n"
//                + "                  |     .   .   .      |\n"
//                + "                   \\      . . . .     /\n"
//                + "C H E E R S !!!      \\     .  .     / \n"
//                + "                       \\    ..    / \n"
//                + "                         \\      / \n"
//                + "                           \\  / \n"
//                + "                            \\/ \n"
//                + "                            ||\n"
//                + "                            ||\n"
//                + "                            ||\n"
//                + "                            ||\n"
//                + "                            ||\n"
//                + "                            /\\\n"
//                + "                           /;;\\\n"
//                + "                      ==============");
// }

 /* ------ LESSION #9 ------ */

// let age = 12;
// age >= 18 ? console.log("You can drink wine") : console.log("You can drink water");

// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink);

// 'use strict'

// let hasDrivers = false;
// const passTest = true;

// if (passTest) hasDriver = true;
// if (hasDrivers) console.log("I can drive");

// let interface = "hello";
 
// function logger() {
//     console.log("My name is Andrew");
// }

// function fruiteProcessor(apples, oranges) { // parameters
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     // console.log(juice);
//     return juice
// }
// const appleJuice = fruiteProcessor(1, 3)
// console.log(appleJuice);

// const orangeJuice = fruiteProcessor(2, 6)
// console.log(orangeJuice);

/* ------ HM #9 ------ */
 
 /* ------ LESSION #10 ------ */

// function getSubstring(string) {
//   return string.length
// }
// const userString = getSubstring("apple")
// console.log(userString);

// let userString = prompt("Enter a date here")
// function userDateString (userString) {
    
// }

/* ------ HM #10 ------ */

// function extractYear(dateString) {
//     const yearIndex = dateString.indexOf('-');
//     const year = dateString.substring(0, yearIndex);
//     return year;
// }

// const userInput = prompt("Enter the date in the format YYYY-MM-DD:");
// const truncatedInput = userInput.slice(0, 10);
// const year = extractYear(truncatedInput);
// console.log("Year:", year);




// function addNumber(a, b) {
//     return a + b;
// }

// function subtractNumber(a, b) {
//     return a - b;
// }

// function multiplyNumber(a, b) {
//     return a * b;
// }

// function divideNumber(a, b) {
//     return a / b;
// }

// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return addNumber(a, b);
//         case '-':
//             return subtractNumber(a, b);
//         case '*':
//             return multiplyNumber(a, b);
//         case '/':
//             return divideNumber(a, b);
//         default:
//             return "Unsupported operator";
//     }
// }
// const num1 = 10;
// const num2 = 5;
// const operator = '+';

// const result = calculate(num1, num2, operator);
// console.log("Result:", result);

/* ------ LESSION #11 ------ */

// const age1 = clacAge1(1985)
 
// function clacAge1(birthYear) {
//      return 2024 - birthYear;
// }

// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear
// }

// const age2 = calcAge2(1985)
// console.log(age1, age2);

// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

// randomNumber = Math.floor(randomNumber) + 1
// console.log(randomNumber);

// let randomNumber = Math.floor(Math.random() * 6 + 1)
// console.log(randomNumber);

// let userInput = Math.floor(Math.random() * 100 + 1)
// console.log(userInput);



// guestList.push(name)
// console.log(guestList);

// let guestList = ["Alaa", "Ola", "Tania", "Oksana", "Anna", "Andrew"]

// let name = prompt("What is your name? ")

// if (guestList.includes(name)) {
//     alert("You are welcome")
// } else {
//     alert ("Sorry, we dont know you")
// }

// let namesParticipants = prompt("Write the names of the participants here, separated by commas. Ex: Ola, Tania, Oksana...")

// function randomName(names) {
//     let randomIndex = Math.floor(Math.floor() * names.length)
//     let choosenName = names[randomIndex];
//     console.log(`Chosen name: ${choosenName}`);
//     return choosenName
// }

// let names = [];
// let currentName = '';
// for (let i = 0; < namesParticipants.length; i++) {
//     if (namesParticipants[i] === ',') {
//         names.push(currentName);
//         currentName = '';
//     } else {
//         currentName += namesParticipants
//     }
// }

/* ------ LESSION #12 ------ */

let animals = ["Cow", "Rabbit", "Rabbit", "Monkey"]
// console.log(animals);
animals.push("Cat")
// console.log(animals);

let animalsCopy = [...animals]
// console.log(animalsCopy);
// animals.push("Dog")

// let count = 0;
// animals.forEach( c => {
//     console.log(c);
//     if (c === "Rabbit") {
//         count +=1
//     }
// });

// console.log(count);

// let deletedAnimals = animals.splice(3, 1, "Dog")
// deletedAnimals.push("text")
// console.log(animals);

animals.pop("Rabbit")
console.log("pop", animals);

animals.splice(animals.indexOf("Rabbit"), 1)

animals.shift()
console.log(animals.sort());

let numberList = [10, 12, 1, 4, 100, 200]
console.log(Math.max(...numberList));
console.log(Math.min(...numberList));

