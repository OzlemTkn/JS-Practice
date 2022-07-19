/*
Strings:
'' Single quote
"" Double quote
`` Backtick -> we can pass string or variable 
INSIDE the backtick
*/
console.clear();
var str1='Ahmet';
console.log(str1);//"Walker"
var str2='Walker';
console.log(str2);//"Walker"

// To write a work in a quote, use \'word\'
// OR use single quote in a double quore, "'word'"
// My name is 'Ahmet'
var sentences = 'My name is \'Ahmet\'';//"My name is 'Ahmet'"
console.log(sentences)
sentences = "i like 'Tesla'";//"i like 'Tesla'"
console.log(sentences);


//We can use backtick `` for string creations
var fName ='John';
var lName ='Walten';
var age = 50;

//Without backtick
var info1 = 'First name : '+fName+'. '+'Last name : '+lName+'. '+'Age : '+age+'.'
console.log(info1);//"First name : John. Last name : Walten. Age : 50."

//With backtick
var info2 = `First name : '${fName}'. Last name : ${lName}. Age : ${age}.`;
console.log(info2)