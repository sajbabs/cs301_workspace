/* An employee at a grocery store must frequently place boxes of cans in stacks. Write a program
that allows him to enter the total number of boxes and the number of boxes he will place in
each stack. Your program must output the number of stacks he will have to make. All the stacks
except the last one must have the exact number of boxes that the employee specifies. The last
stack must have the exact number or fewer boxes. For example, if the employee enters 74 total
boxes and 6 boxes in each stack your program must output 13. */

const prompt = require ("prompt-sync")();
let num = +prompt("Enter Total Number of Boxes: ");
let stac= +prompt("Enter Number in Stack: ");
let total= Math.ceil(num/stac);
console.log("You'll have to make "+ total + " Stacks");