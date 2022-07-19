/*
Switch: is used to find the mathcing values
case keyword is used to add values
break keyword is used for stoping the code execution
*/
console.clear();

const favColor = 'red';

switch(favColor){
    
  case 'blue':
    console.log('Fav color is blue');
    break;
    
  case 'purple':
    console.log('Fav color is purple');
    break;
    
  case 'red':
    console.log('Fav color is red');//"Fav color is red"
    break;
    
  default:
    console.log('There is no match');
    break;
    
}
