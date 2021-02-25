/* Write a defining table and then a program that determines what time a child should go to bed.
Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
keyboard and output the child’s bedtime according to this table: */
const prompt= require("prompt-sync")();

let age= +prompt("Enter Child\'s Age: ");
let season= prompt("Enter Season: ");

let bTime;
if (age <= 5){
    if (season == "summer" || season== 'fall'){
        bTime= "8:30pm";
    }else if (season== "winter" || season=="spring"){
        bTime= "8:00pm";
    }
}else if (age>=6 || age <= 12) {
    if (season == "summer"){
        bTime= "9:30pm";
    }else if (season== "winter" || season=="spring" || season== "fall"){
        bTime= "8:30pm";
    }
}else if (age >= 13){
    if (season == "summer" ){
        bTime= "10:30pm";
    }else if (season== "winter" || season=="spring" ||season== 'fall' ){
        bTime= "9:30pm";
    }
}
console.log(`Bedtime= ${bTime}`);