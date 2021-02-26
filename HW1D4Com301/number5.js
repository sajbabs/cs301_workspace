//Write a JavaScript program to compute sum of all the digits in a given integer number.

const prompt=require('prompt-sync')();
let input=+prompt('enter the number: ');
let sum=0;
while(input>9){
 sum+=input%10;
 input=parseInt(input/10) ;
}
sum+=input;
console.log("the sum of digit is :"+sum);