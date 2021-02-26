/* Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.” */

const prompt= require ("prompt-sync")();
let num=1;

const pass = 1234;

let passW= +prompt("Enter pin: ");
    while (num<3) {
        if (passW === pass) {
            console.log("Correct, Welcome Back"); break
        }
    else if (passW!=pass){
       passW= +prompt("Incorrect, Retry Pin: ")
     }
     num++;
    }
    if (num===3 )console.log("Sorry you have been locked out: Entered wrong pin 3 times");