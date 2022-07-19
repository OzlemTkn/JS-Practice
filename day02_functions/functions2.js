/*
Functions : 
A function performs a task or calculates a value
A function can have a return keyword

*/
console.clear();

//creating a function with return keyword
function sum(){
  var x=5;
  var y=7;
  
  return x+y;
}

//calling sum function
console.log(sum());//12

//creating a function that returns the square of the number
//takes a parameter and multiply by itself to square that number
function square(num){
  return num*num;
}
console.log(square(5));//25
console.log(square(6));//36

//we can assign a default value in the parameter.NOTE THIS IS NOT COMMON
function addNums(num1=4,num2=5,num3=6){
  return num1+num2+num3;
}
console.log(addNums());//4+5+6 = 15

//we can assign new values
console.log(addNums(1,2,3));//1+2+3=6

//we can assign new values
console.log(addNums(1,2));//1+2+6=9

////Craete a function that returns a string

function personInfo(name, age, city){
  
  return 'Hi '+name+'. '+'You are '+age+' years old. You are from '+city;
}

console.log(personInfo('John',50,'LA'));




