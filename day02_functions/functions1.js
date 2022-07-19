/*
Functions : 
A function performs a task or calculates a value

*/
console.clear();

//1. Declare/create a function
function greet(){
  console.log('Hi, How is everthing?')
}

//2. calling the function
 greet();//"Hi, How is everthing?"
 greet();//"Hi, How is everthing?"

//3. create a function with a parameter
function personInfo(fName,lName,age,isEmployed){
  console.log(`Name : ${fName}. Last Name : ${lName}. Age : ${age}. isEmployed : ${isEmployed}`)
}

//4.use the function
personInfo('John','Walten',10,false);
personInfo('Nancy','Brown',100,true);