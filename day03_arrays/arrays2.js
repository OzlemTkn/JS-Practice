console.clear();
/*
ARRAY:
Arrays are special type of objects
Use index to get he values from an array. Index starts at 0.
Use [] to create arrays
*/

//Create an array
//                0.       1.       2.        3.   4
let myList = [ 'apple','apple', 'orange', 'banana', false, 10 ]

/*5. splice
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

splice is used to add or insert or update or delete items in ANY INDEX of an array

*/
console.log('Before : '+myList);//"Before : apple,orange,banana,false,10"

// //splice(start)
// myList.splice(1);//Means Staring index : 1(included). delete count : UNTILL THE END
// //This means start from index of 1(included) and delete the rest
// console.log('After : '+myList);//"After : apple"

//splice(start, deleteCount)
myList.splice(3,2);
//start index(included): 1
//deleteCount : 2
//Meaning that starign from index 1, 2 items will be deleted
console.log('After : '+myList);

//.         0.         1.       2
let cities=['dallas','berlin','paris','oslo','toronto','london','van'];
//add tokat between berlin and paris
cities.splice(2,0,'tokat');
console.log(cities);
//["dallas", "berlin", "tokat", "paris", "oslo",??? ,"toronto", "london", "van"]
//add istanbul between oslo and toronto
cities.splice(5,0,'istanbul');
console.log(cities);


//Replace berlin for 'malatya' : delte berlin and put malatya
cities.splice(1,1,'malatya')
console.log(cities);//["dallas", "malatya", "tokat", "paris", "oslo", "istanbul", "toronto", "london", "van"]

//In summary, we can use pop,push,shift,unshift to add or remove ONLY
//fron the beginnign or from the end
//Splica can do all those and more.
//We can add or remove or insert in ANY index of an array


//- index means the start index will begind from the last
cities.splice(-1);//delete the last index
console.log(cities);//["dallas", "malatya", "tokat", "paris", "oslo", "istanbul", "toronto", "london"]