"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
 for (let i=0; i< arr1.length;i++){
     for (let j=0; j<arr2.length;j++){
         if (i===j)return true;
     }
 }
    return false;
}

/**
 * 
 * @param {array} arr array of numbers
 * @param {number} firstNumber value of number in first position
 * @param {number} lastNumber value of number in last position
 * @returns {number} result of addition of first and last elements of the array 
 */
function addend(arr){
    let firstNumber = arr[0];
    let lastNumber= arr[arr.length-1];
    let add=firstNumber+lastNumber;

    return add;
}

/**
 * 
 * @param {array} arr array of numbers
 * @param {average} average of the even numbers
 * @param {length}  length of the array
 * @returns {number} number middle number of the array
 */
function getMiddle(arr){
let length= arr.length;
let index= Math.floor(length/2);
if (length%2===0){
    let average=(arr[index] + arr[index+1])/2;
    return average;
}
return arr[index];
}

/**
 * Flip Array to Right
 * @param {array} arr array to 
 * @returns {array} flipped to the left array will be  returned 
 */
function rotateLeft(arr){
    let value1= arr[0];
    for (let i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]= value1;

}

/**
 * Flip Array to Right
 * @param {array} arr array of values
 * @returns {array} flipped to the left array will be returned 
 */
function rotateRight(arr) {
    let value=arr[arr.length-1];
    for(let i=arr.length-1;i>=0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=value;
}

/**
 * 
 * @param {Array} arr arrays of numbers; 
 * @param {Number} num is number of times to rotate right;
 * @returns {Array} a rotated array; 
 */
function rotateNRight(arr,num){
    let arr1=[];
    for (let i=0;i<arr.length;i++){
        let j = (i+num)%arr.length;
        arr1[j]= arr[i];
    }
    arr=arr1;
    return arr;
}

/**
 * 
 * @param {Array} inputExp  array of expressions
 * @returns {boolean} if balance
 */
function isExpressionBalance(inputExp){
    let arr= [];
    if (inputExp[0]===")" || inputExp[0]==="]" || inputExp[0]==="}")
    return false;
    for (let i=0; i<inputExp.length; i++){
        if (inputExp[i]==="(" || inputExp[i]==="[" || inputExp[i]==="{"){
            arr.push(inputExp[i]);
        }else if (
            (arr [arr.length-1]=== "(" && inputExp[i]===")") || (arr[arr.length-1]==="[" && inputExp[i]==="]")||
            (arr[arr.length-1]=== "{" && inputExp[i]==="}")
        )
        arr.pop();
    }
    if (arr.length===0)return true;
    else return false;

}

/**
 * 
 * @param {Array} arr1 second array
 * @param {Array} arr2 second array
 * @returns {Array} array of array merged 
 */
function mergeArrays (arr1,arr2){
    let arr3=[];
    let lower;
    let length= arr1.length + arr2.length;
    for (let i=0; i<length; i++){
    lower= (arr1[0]<arr2[0])? arr1 : arr2;
    arr3.push(lower.shift());
    }
    return arr3;
}

/**
 * 
 * @param {Array} arr of strings
 * @returns {String} transformed strings 
 */
function arrayTrans(arr){
    let str= "";
    
    for (let i=0; i<arr.length ;i++){
        if (i===arr.length-1){
            str= arr[i];
        }else{
        str+= arr[i] + "_";
        }
    }
    return str;
}

/**
 * 
 * @param {Array} arr to search; 
 * @param {number} value is elements of the Array
 * @returns {Array} arrays of boolean and number 
 */
function enhancedIncludes (arr, value){
    let arr1=[];
    let pos1=-1; // first position 
    let pos2=-1; //second position
    let index = -1;
    let count = 0;

    for (let i=0; i<arr.length; i++){
        if (arr[i] === value) {
            index = i;
            count++;
        }
          if (count === 1) pos1 = index;
          if (count > 1) pos2 = index;
}
        if (pos1 > -1){
          arr1.push(true);
          arr1.push(pos1);
          arr1.push(pos2);
        }
        else{
          arr1.push(false);
          arr1.push(pos1);
          arr1.push(pos2);
        }
         return arr1;
}

/**
 * 
 * @param {Array} arr to process
 * @returns {Array} array in reverse 
 */
function reversedArray(arr){
    let arr1=[];
    for(let i=0; i< arr.length; i++){
        let extra=arr.slice (i, i+1);
        arr1.unshift(extra);
    }
    return arr1;
}

/**
 * @param {Array} arr of elements
 * @param {number} avalue element of the set 
 * @param {number} bvalue element of the set
 * @returns {Array} values in range
 */
function filterRange (arr,avalue,bvalue){
        let array=[];
        let index=0;
       for(let i=avalue;i<=bvalue;i++) {
           array[index++]=arr[i];
       }
       return array;
    
}

"use strict";
//Do matrix addition and print result on matrix format for following:
/**
 * 
 * @param {Array} arr1 input parametre
 * @param {Array} arr2 input parametere;
 * @return{string} return in matrix format;
 */
function matrixAddition(arr1,arr2){
    let result=[];
    for(let i=0;i<arr1.length;i++){
        let row=[];
        for(let j=0;j<arr1[i].length;j++){
            let extra=arr1[i][j]+arr2[i][j];
            row.push(extra);
        } 
        result.push(row);   
    }
return result;
}


    


module.exports= {isArrayEqual, addend, getMiddle, rotateLeft, rotateRight, rotateNRight, mergeArrays, arrayTrans, enhancedIncludes,reversedArray, filterRange,matrixAddition};