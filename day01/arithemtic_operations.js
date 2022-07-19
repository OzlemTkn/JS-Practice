/*
Arithemtic Operations
+,-,*,/,%,++,--,**

%   -> module gives the remainder
++  -> increment
--  -> decrement
*/
var x = 12;
var y = 3;

console.log(x+y); //15
console.log(x-y); //9
console.log(x*y); //36
console.log(x/y); //4
console.log(x%y); // 3*4+ 0(remainder)  = 12

// Pre Increment  : ++variable 
console.log(++x);//First add 1 then prints. 13 
//x=13

// Post increment : variable++
console.log(x++);//print first, then add 1. 13
//x=14
console.log(x);//14
//x=14
console.log(x++);//14
console.log(x);//15

// Pre decrement
//y=3
// y = y-1  SHORT    y--
// y = y+1  SHORT    y++
console.log(--y);//2. decrease y by 1 first, then prints the new value

//y=2
console.log(y);//2
// Post decrement
//y=2
console.log(y--);//2. print first. 
console.log(y);//1

var z= 10;
// z=z+5; same as z+=5;
z+=5;
console.log(z);//15

var myNum = 20;
// myNum = myNum * 5; is same as myNum*=5;
myNum*=5;
console.log(myNum);//100