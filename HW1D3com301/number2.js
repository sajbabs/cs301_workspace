/* Write a program that reads from the keyboard a student's name and number of completed
credits and then outputs the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60
c. "Junior" if 60<=credits<90
d. "Senior" if credits>90 */

const prompt= require ('prompt-sync')();
let name= prompt("Enter Name: ");
let num= +prompt("Enter Number of Completed Credits: ");

let label;

if (0< num && num <30) {
    label= "Freshman";
}else if (num >= 30 && num <= 60){
    label= "Sophomore";
}else if (num >= 60 && num <=90){
    label= "Junior";
} else  if (num> 90){
    label= "Senior";
}
console.log(`${name}, you're a  ${label}.`);