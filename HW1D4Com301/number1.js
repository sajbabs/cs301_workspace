/* A prime number (or a prime) is a natural number greater than 1 that is not a product of two
smaller natural numbers. In other words, it is a number that is only perfectly divisible by number
1 and itself. Write a JavaScript program to test weather user input is a prime number or not. */

const prompt = require ("prompt-sync")();

let num = +prompt("Enter a Number: ");
let key=2;
if (num===1){
    console.log("Number is a Prime number")
}
while (key< num){
    if (num % key ===0) {
 console.log("Number is not a Prime");
break;
    }
    key++;

}if (num==key){
 console.log("number is a prime number.")
}