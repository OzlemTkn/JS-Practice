console.clear();
/*
In javascript there are different reference types
Function
Object
Arrays

How to create an object in js?
{} : curly braces is used for creaing objects
:  : is used to create key-value pairs
,  : is used to create more than one key-value pairs
*/

let fName = 'John';
let lName = 'Parker';
let age = 30;


//I can use one single object to store this person's data

//Creating a OBJECT
let person = {
  fName : 'John',
  lName : 'Parker',
  age : 30,
  isEmployed : true
}
//Calling the OBJECT
console.log(person.fName);//"John"
console.log(typeof(person.fName));//"string"
console.log(person.lName);//"Parker"
console.log(person.age);//30
console.log(typeof(person.age));//"number"
console.log(person.isEmployed);//true


console.log(person);

const personName = person.fName;
console.log(personName);//"John"