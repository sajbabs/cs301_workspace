//Write a JavaScript program that ask a user for a volume in quarts then converts that value in liters.
const prompt = require("prompt-sync")();
let lit= Number(0.95);

let quart= +prompt("Enter Number of Quarts: ");
console.log(`Value in Liters= ` + quart*lit + "L");
