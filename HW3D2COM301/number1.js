"use strict";
/**
 * @param {number} num is whole number;
 * @param {number} pow is the power value;
 * @returns {number} the output of the prob;em;
 */
function power (num,pow){
    if (pow==0)
    return 1;
    return num* power(num,pow-1);
}

/**
 * @param {number} digits that are to be counted;
 * @returns {number} number if digits
 */
function countDigits(digits){
    if (digits===0)
    return 0;
    return 1+countDigits(Math.floor(digits/10));
}

/**
 * @param { String} str to be reversed
 * @returns {String} the reveersed spelling
 */
function reverseString(str){
    if (str.length===0)
    return "";
    if (str.length===1)
    return str;
    return str[str.length-1]+ reverseString(str.substring(0,str.length-1));
}



module.exports={power, reverseString, countDigits}


console.log (power(2,10));

//  console.log(countDigits(556679987261));

//  console.log(reverseString("I love Javascript"));