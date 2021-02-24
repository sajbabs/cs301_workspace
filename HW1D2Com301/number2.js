//Write a JavaScript program that asks a user for a distance in kilometers and then convert that
//value in miles.
const prompt = require("prompt-sync")();
const value= Number(0.621);
const num= +prompt("Enter Number of Kilometers: ");

console.log("Number in miles= "+ num*value+ "miles");