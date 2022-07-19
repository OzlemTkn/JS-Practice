/*
Logical Operators:

=== -> checkes both values and data types
==  -> checks ONLY values

*/
console.clear();
console.log(1=="1");//true
console.log(1==1);//true
console.log(1!="1");//false

console.log(1==="1");//false
console.log(1===1);//true
console.log(1!=="1");//true


/*
Logical Operators:
&&  : And operator
||  : Or operator
!   : not operator. this returns the opposite of a boolean
*/
console.clear();
const x=true;
const y=true;
const z=false;
//&& operator
console.log(x&&y);//true && true = true
console.log(x&&z);//true && false= false
console.log(false&&z);//false && false = false
// || operator
console.log(x||y);//true || true = true
console.log(x||z);//true || false= true
console.log(false||z);//false || false = false
// ! operator
console.log(!x);//false
console.log(!z);//true
//null values
console.log(null);//null. THIS IS NOT USED.
console.log(!null);//true. THIS CAN BE USED.