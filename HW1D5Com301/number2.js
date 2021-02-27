/* Write a function that computes and returns area of a circle based on the value of input radius.
a. Write a function that compute volume of a cylinder and making use of function that
computes area of a circle. */

const prompt= require ("prompt-sync")();
let p= Math.PI;
let radius= +prompt("Enter Radius: ");
let height= +prompt("Enter Height: ");
function circleArea(radius){
    return (p* (radius**2));
}

function cylinderVolume(rad,height){
return ((2*p*(rad*height))+ 2*(circleArea(rad)));
}

console.log(cylinderVolume(radius,height));