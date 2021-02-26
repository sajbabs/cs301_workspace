/* Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
being positive integer from user input.  */

const prompt= require ("prompt-sync")();

let num= +prompt("Enter a Number: ");
let loop= [0, 1];
for (let i = 2; i <= num; i++) {
 let fib = loop[i] + loop[i - 1];
 loop.push(fib);
}
for(let i=0;i<loop.length;i++)
 console.log(loop[i]);