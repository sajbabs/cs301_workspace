//Write JS code to print following patterns using nested loops.

const prompt=require('prompt-sync')();
let n=+prompt("enter number of patterns to print:")
for(let i=1;i<n;i++){
 let k='';
 for(let j=i;j<n;j++){
 k+=i;
 }
 console.log(k) 
}
console.log("*********************")
for(let i=1;i<n;i++){
 let k='';
 for(let j=1;j<=i;j++){
 k+=i;
 }
 console.log(k)
}
console.log("***************************")
for(let i=1;i<n;i++){
 let k='';
 for(let j=1;j<=i;j++){
 k+=j;
 }
 console.log(k)
}
console.log("***************************")
for(let i=n;i>0;i--){
 let k='';
 for(let j=i;j>=1;j--){
 k+=i;
 }
 console.log(k)
}
 
console.log(null==false)