/*  Write a program that calculates down payment for a home loan 
Cost of House Down Payment
$0 to less than 50K ---5% of the cost
$50K to less than 100K--- $1000 + 10% of (cost - $50K)
$100K to less than 200K--- $2000 + 15% of (cost - $100K)
$200K and above---- $5000 + 10% of (cost - $200K) */

const prompt= require("prompt-sync")();

let cost = +prompt("Enter House Price: ");

let dPayment;
if (cost> 0 && cost<50000){
    dPayment= ((cost/100)*5);
}else if (cost>= 50000 && cost<100000){
    dPayment= ((((cost-50000)/100)*10)+1000);
} else if (cost>= 100000 && cost<200000){
    dPayment= ((((cost-100000)/100)*15)+2000);
}else if (cost>= 200000 ){
    dPayment= ((((cost-200000)/100)*10)+5000);
}
console.log("Down Paymenet: "+ dPayment);