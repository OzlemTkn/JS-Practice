console.clear();
/*
Rounding Numbers
In js, rounding numbers are usefull
count, unit, age, currency,.. requires a certain format

*/
//Math.ceil(number); round up
var myNumber = 15.4567;
var roundedUp = Math.ceil(myNumber);
console.log(roundedUp);//16

//Math.floor(number); round down
var roundedDown = Math.floor(myNumber);
console.log(roundedDown);//15

//Math.round(number); round to the closes whole number
var rounded = Math.round(myNumber);
console.log(rounded);//15

//.toFixed(2); rounds to the nearest 2 digit after decimal point
var toFixedDigit = myNumber.toFixed(2);
console.log(typeof(toFixedDigit));//"string"
console.log(toFixedDigit);








