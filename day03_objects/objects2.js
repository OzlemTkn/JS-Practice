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

//Nested Objects
const people = {
  person1 :{
    fName : 'John',
    lName : 'Walker',
    age : 10,
    eyeColor:'blue',
    height : '5.8 ft',
    childNum: 4
  },
  person2 :{
    fName : 'Tim',
    lName : 'Sue',
    age : 20
  },
  person3 :{
    fName : 'Tedd',
    lName : 'Mosby',
    age : 30
  }
}

console.log(people);
//getting the person2 object
console.log(people.person2)
//get teh last name of person2
console.log(people.person2.lName);//"Sue"


//Objects can have strings, numbers, boolean, objects, arrays, and function
//
const personInfo ={
  fName : 'Ercan',
  lName : 'Test',
  age : 20,
  address : {
    city : 'dallas',
    state:'TX',
    zip : 99999
  },
  hobbies : ['soccer','hiking','jogging']//ARRAY
  //.          0.       1        2
  //.    hobbies[0]  hobbies[1]  hobbies[2]
}
console.log(personInfo.age);//20
console.log(personInfo.address.state);//TX
console.log(personInfo.hobbies[1]);//"hiking"