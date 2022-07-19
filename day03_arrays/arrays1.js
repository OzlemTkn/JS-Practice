

console.clear();
/*
ARRAY:
Arrays are special type of objects
Use index to get he values from an array. Index starts at 0.
Use [] to create arrays
*/

//Create an array
//                0.       1.    2.      3.     4
let friendList = [ 'Sam', 'Tim', 'Bob', 'tom', 'Nancy' ]
//Call the values
console.log(friendList[0]);//"Sam"
console.log(friendList[1]);//"Tim"
console.log(friendList[5]);//undefined

for(let i=0;i<friendList.length;i++){
  console.log(friendList[i])
}
//We can add values in an array:
//1. push('elements') : add elements at the end of an array
console.log('BEFORE : '+friendList);//["Sam", "Tim", "Bob", "tom", "Nancy"]
friendList.push('Ahmet');
console.log('AFTER : '+ friendList);//["Sam", "Tim", "Bob", "tom", "Nancy", "Ahmet"]


//2.unshift('element') : add elements at the beginning of an array
friendList.unshift('Aysun','Zeliha');
console.log(friendList);//["Aysun", "Zeliha", "Sam", "Tim", "Bob", "tom", "Nancy", "Ahmet"]

//adding a different data types. Adding 10 and true on my friendList array
friendList.push(10,true);
console.log(friendList);//["Aysun", "Zeliha", "Sam", "Tim", "Bob", "tom", "Nancy", "Ahmet", 10, true]

// //We can push an array into another array
// var names = ['Ercan','Canan','Zeliha'];
// friendList.push(names);
// console.log(friendList);


//3. pop() : remove the last elements from the array
friendList.pop();
console.log(friendList);//["Aysun", "Zeliha", "Sam", "Tim", "Bob", "tom", "Nancy", "Ahmet", 10]

friendList.pop();
console.log(friendList);//["Aysun", "Zeliha", "Sam", "Tim", "Bob", "tom", "Nancy", "Ahmet"]

//4. shift() : remote the first element from an array
friendList.shift();
console.log(friendList);//["Zeliha", "Sam", "Tim", "Bob", "tom", "Nancy", "Ahmet"]

