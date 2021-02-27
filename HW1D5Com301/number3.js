let prompt = require("prompt-sync")();


let sweep = prompt("Enter sweep of the house :");

let height = prompt("Enter height of the house:");
height = parseFloat(height);

let width = prompt("Enter width of the house :");
width = parseFloat(width);

let depth = prompt("Enter the depth of the house :");
depth = parseFloat(depth);

console.log("house volume is :" + houseVolume(width, depth, height, sweep));

function houseVolume(width, depth, height, sweep) {
 return roofVolume(width, sweep, depth) + livingVolume(width, height, depth);
}

function livingVolume(wid, hgt, dep) {
 return wid * hgt * dep;
}

function roofVolume(w, sw, d) {
 return triangleArea(w, sw) * d;
}


function triangleArea(w, sw) {
 let s = (w + 2 * sw) / 2;
 let x = (s - w) * (s - sw) * (s - sw);
 return Math.sqrt(s * x);
}