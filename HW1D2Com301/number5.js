/*When you exercise to strengthen your heart, you should maintain your heart rate within a
range. To find that range, subtract your age from 220. This difference is your maximum heart
rate per minute. Your heart simply will not beat faster than this maximum (220 − age). When
exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of
your heart’s maximum. Write a JavaScript program that asks for a person’s age and computes
and outputs the slowest and fastest rates necessary to strengthen his heart.*/
const prompt= require("prompt-sync")();
let age = +prompt("Enter your Age: ");
let maxRate= 220 - age;
 let slowRate= ((maxRate*65)/100);
 let fastRate= ((maxRate*85)/100);

 console.log("Your heart Slowest Rate: " + slowRate);
 console.log("Your heart Fastest Rate: " + fastRate);