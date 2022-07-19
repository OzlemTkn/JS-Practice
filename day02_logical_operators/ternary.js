/*
Ternary Operator:
                        
(EXPRESSION-true or false) ? (DO THIS IF TRUE)  : (DO THIS IF FALSE)

if(EXPRESSION-true or false){(DO THIS IF TRUE)}else{(DO THIS IF FALSE)}

*/
console.clear();
const x=5;
const y=6;

x>y ? console.log('statement is true') 
    : console.log('statement is false');//"statement is false"


const result = x > 3 ? 'Expensive' : 'Cheap';
console.log(result);//"Expensive"


//Nested Ternary
const isExpensive = x>9 ? (y<4 ? 'y is less than 4' : 'y is not less than 4') : 'cheap';
// if x is greater than 4 then evaluate (y<4 ? 'y is less than 4' : 'y is not less than 4')
//(y<4 ? 'y is less than 4' : 'y is not less than 4') -> if y is less than 4 then 'y is less than 4'
//else 'y is not less than 4'


//if x is not greater than 4 then 'cheap'

console.log(isExpensive);//"y is not less than 4"








