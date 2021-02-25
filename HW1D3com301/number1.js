/*Write a program that helps a user choose the correct footwear for the day’s weather based on
the table shown below. If the user enters any other weather type, your program should output
“sneakers”*/
const prompt= require ("prompt-sync")();

const weather= prompt("Hello, What is the Weather like today?: ");
let shoe;

switch (weather){
    case 'hot': 
     shoe= sandals;
     break;
    case 'rain':
     shoe= galoshes;
     break;
    case 'snow':
        shoe= 'boots';
        break;
    default:
        shoe= 'sneakers'
}

console.log("Preffered Shoe of the Day: " + shoe);
console.log("\n");
console.log("Do have a Great Day!!!")