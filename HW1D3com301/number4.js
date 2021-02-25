/* A university library that loans book to students, faculty, and the public has a written policy that
determines how long someone may borrow a book before it is due, which is shown on the table
below. Write a defining table and JavaScript program that determines how long a person may
borrow a book. */

const prompt= require("prompt-sync")();
let role= prompt("What is your Position: ");

let duration;   //loan durations in week
let num = prompt("How may books are you loaning?: ");       //number of books
switch(role){
    case "student":
        num ===0 ? duration=6 : (num< 3? duration:4, 2);
        break;
    case "faculty":
        num===0 ? duration=12 : (num< 3? duration:10,8);
        break;
    case "other":
        num===0 ? duration=4 : (num < 3? 3:duration,2)
        breeak

    default:
        console.log("Thank You");
}
console.log("Books shoule be returned within " + duration+ " weeks.");