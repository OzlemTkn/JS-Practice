/*
If Statement: 
If stament is used to control the flow of the code
If statement compare values and execute the codes based of the resuts

if(boolean-true or false){
execute if true
}else if(boolean-true or false){
}else{
execute if false
}
*/
console.clear();
if(4>5){ 
  console.log('4 is greater than 5');
} else if(4==5){
  console.log('4 is equal to 5');
} else{
  console.log('None of the above is true');//"None of the above is true"
}
// && and || operator in if statement
if(4>3 && 6==="6"){
  console.log('block 1');
}else if(4>3 && 6=="6"){
  console.log('block 2');//"block 2"
}


if(4>3 || 6==="6"){
  console.log('block 1');//"block 1"
}else if(4>3 || 6=="6"){
  console.log('block 2');
}



/*NOTE: 5 values are false
fasle, 0, null, NaN, "" or '',undefined
*/
if(false){
  console.log('block 1');
}else{
  console.log('block 2');//block 2
}


if(0){
  console.log('block 1');
}else{
  console.log('block 2');//"block 2"
}

if(100){
  console.log('block 1');//"block 1"
}else{
  console.log('block 2');
}

if(-100){
  console.log('block 1');//"block 1"
}else{
  console.log('block 2');
}

if(null){
  console.log('block 1');
}else{
  console.log('block 2');//"block 2"
}

if(NaN){
  console.log('block 1');
}else{
  console.log('block 2');//"block 2"
}


if(''){
  console.log('block 1');
}else{
  console.log('block 2');//"block 2"
}

if(' '){
  console.log('block 1');//"block 1"
}else{
  console.log('block 2');
}

if('apple'){
  console.log('block 1');//"block 1"
}else{
  console.log('block 2');
}



if(undefined){
  console.log('block 1');
}else{
  console.log('block 2');//"block 2"
}