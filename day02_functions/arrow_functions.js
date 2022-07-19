

console.clear();

/*ARROW FUNCTIONS*/
function sum(a){
  return a+100;
}

console.log(sum(10));//110

//Write the function as arrow function
//1. remove function keyword AND function name AND use => before the {}
//2. assign the return to a valriable so that we can use that function somewhereelse
let sum1 = (a) => { //arrow with 1 parameter. the parameter is a
  return a+100;
}

console.log(sum1(11));//111

//3. We can even remove curly braces and return keyuword
let sum2 = (a) => a+100;
console.log(sum2(12));//112

//4. we can even remove the () when there is ONLY ONE PARAMETER
let sum3 = a => a+100;
console.log(sum3(13));//113

//WRITE A FUNCTION THAT CALCULATES THE SQUARE OF A NUMBER?
//traditional function
function squareNumber(x){//function is used to create traditional function
  return x*x;
}
console.log(squareNumber(5));//25

//arrow function
let square = x => x*x;// Strint, Int,.. -> let, const ,var

console.log(square(6));//36

//WRITING ARROW FUCNTION WITH 3 PARAMETERS
function info(name,age,state){
  return `Name : ${name}. Age : ${age}. State : ${state}`
}
console.log(info('John',100,'NYC'));

//Creating arrow function
const myInfo = (name,age,state) =>{
  return `Name : ${name}. Age : ${age}. State : ${state}`
}

//using the function
console.log(myInfo('Tim',50,'CA'));


//Creating arrow function
const myFriendsInfo = (name,age,state) =>'Name : '+name+'. Age : '+age+'. State : '+state

console.log(myFriendsInfo('Nancy',30,'NYC'));



















