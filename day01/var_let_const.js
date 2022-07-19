/*
var   : the first js type. value can change. global scope.
let   : value can change. functional scope. scope is less than var
const : value does not change. functional scope. 
*/
var num1 = 5;
console.log(num1);//5
var num1 = 10;
console.log(num1);//10
var num1 = true;
console.log(num1);//true
//I can assign a new value without using var keyword
num1 = 'javascript';
console.log(num1);//"javascript"

// The problem with var is bu mistake you can override previous values
// with no error.
//let : this is similar to var
// there is a little bit restriction
// we cannot use let more than once to declare same variable
// we can override the value without using let twice
let num2 = 20;
console.log(num2);//20
num2 = 25;
console.log(num2);//"SyntaxError: Identifier 'num2' has already been declared
num2='apex';
console.log(num2);
let myClass = "js";
console.log(myClass);//js
myClass = "apex";
console.log(myClass);//apex
myClass = "HTML";
console.log(myClass);//HTML

//const : const is used for contant values, pi, ..
//You cannot change the value of a constant variable
const num3 = 10;
console.log(num3); 
// num3 = 20;// NOT ALLOWED
// console.log(num3);//"error"



