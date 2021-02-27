/* Write a function named checkPrime that accepts a parameter and returns true if the argument
is a prime number otherwise returns false. */
const prompt= require("prompt-sync")();

function checkPrime(num){
    let i;
    if (num===1|| num===2)console.log("number is Prime");
   let n= Math.ceil(num/2);
    for ( i=2; i<n; i++){
       if(num%i===0){
           console.log("not a prime");break
       }
    }
    if(n===i)console.log("Numeber is Prime");
}

let number= +prompt("Enter a Number to determine if Prime: ");

checkPrime(number);