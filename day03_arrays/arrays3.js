console.clear();
/*
For Loop : Same as in apex
For Each Loop : forEach is a function of array. it loops through from the beginning to the end
Map :
*/

const numbers = [3,56,2,48,5];

//Using for loop:
for (let i = 0; i<numbers.length; i++ ){
  console.log(numbers[i]);//3,56,2,48,5
}

//for each loop:
//forEach function gets each item from an array, and returns them automatically
//forEach function gets the items in order from the beginning till the end
numbers.forEach(
  function(eachNumber){
    console.log(eachNumber);//3,56,2,48,5
  } 
)

//for each 
numbers.forEach( 
  (eachNumber) => console.log(eachNumber)
)

//MAP: similar to forEach
//But map returns a new array as well
//Map takes a function as parameter
//returns a new array

const newNumbers = numbers.map( 
function double(eachNumber){
  return eachNumber*2;
}
)

console.log(newNumbers);//[6, 112, 4, 96, 10]

const newNumbers1 = numbers.map( (eachNumber)=> eachNumber*2 )












