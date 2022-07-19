/*data types:
1. string  
2. number
3. boolean
4. null
5. undefined
-------
*/
// 1. creating a string variable
// we can use '' or "" to create strings
var myName = 'Ahmet';
console.log(myName);
console.log(typeof(myName));//"string"
var myLName="Bayram";
console.log(myLName);
console.log(typeof(myLName));//"string"
// 2. number
var myNum1 = "5";//string
console.log(typeof(myNum1));//"string"
var myNum2 = 5; //number
console.log(typeof(myNum2));//"number"
// 3. boolean
var isSmart = true;
console.log(typeof(isSmart));//"boolean"
// 4. null 
var carModel = null;
console.log(carModel);//null
console.log(typeof(carModel));//"object"
// 5. undefined : 
//When the variable do not have a valid assigned data, then we get undefined
//When you forget to assign a value for variable, then it will be undefined
var selectedCar;
console.log(typeof(selectedCar));//"undefined"
var isRich=undefined;//NEVER DO THIS
console.log(typeof(isRich));//"undefined"
// What is the difference between null and undefined?
// Null means the variable has an assigned null value. It can be changed with another value. It is initialized.
// undefined means the variable do NOT have an assinged value