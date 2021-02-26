//Write a Java program to calculate the factorial value of a given number

const prompt = require ("prompt-sync")();
let num =  +prompt("enter a number: ");
let fact=1;   
for(let i=1; i<=num; i++){
    fact*=i;
    }
    console.log(`Factorial of ${num}= ${fact}`);
