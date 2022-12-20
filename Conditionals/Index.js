// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let user = prompt("Enter Your age");
// let a = 18 - user;
// if (user >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   console.log(`Wait for ${a} years `);
// }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myage = 20;
// let yourage = prompt("Enter Your Age");
// let difference1 = myage - yourage;
// let difference2 = yourage - myage;
// if (myage > yourage) {
//   console.log(`You are ${difference1} younger than me`);
// } else {
//   console.log(`You are ${difference2} older than me `);
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.

// let a = 4;
// let b = 3;

// a > b ? console.log("a is greater than b") : console.log("a is smaller than b");

// Write a program which tells the number of days in a month.

let monthuserinput = prompt("Enter month");
let month = monthuserinput.toLowerCase();

switch (month) {
  case "january":
    console.log("January has 31 Days");
    break;
  case "february":
    console.log("February has 29 Days");
    break;
  case "March":
    console.log("March has 31 Days");
    break;
  case "april":
    console.log("April has 30 Days");
    break;
  case "may":
    console.log("May has 31 Days");
    break;
  case "june":
    console.log("June has 30 Days");
    break;
  case "july":
    console.log("July has 31 Days");
    break;
  case "august":
    console.log("August has 31 Days");
    break;
  case "september":
    console.log("September has 30 Days");
    break;
  case "october":
    console.log("October has 31 days");
    break;
  case "november":
    console.log("November has 30 Days");
    break;
  case "december":
    console.log("December has 31 Days");
    break;

  default:
    console.log("It is not a month");
}
