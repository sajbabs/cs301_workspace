/*Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
user to enter the beginning and ending odometer readings and the number of gallons of gas
used and should output the mileage in miles per gallon. */
const prompt = require("prompt-sync")();

let beginMile= +prompt("Enter Start Milelage: ");
let startGas= +prompt("Enter Gas Gauge before Takeoff: ");
console.log("");
let endMile = +prompt("Enter End Milelage: ");
let endGas= +prompt("Enter Gas Gauge after Arrival: ");

let diffMile= endMile-beginMile;
let gasUsed= startGas- endGas;
console.log("Mileage Used: "+(Math.ceil(diffMile/gasUsed)) + "mpg");