/*
String Manupilations:
*/
console.clear();
//length   012345678
var str = 'I like js';
//               -2-1


var len = str.length
console.log(len);//9

//indexOf
var indexOfLike = str.indexOf('like');
console.log(indexOfLike);//2

//substring
var sub1 = str.substring(2);//returns all characters after 2nd index
console.log(sub1);//"like js"
var sub2 = str.substring(2,5);//2,3,4
console.log(sub2);//lik


var sub7 = str.substring(5,2);//"lik"
// substring(5,2)  = substring(2,5)
console.log(sub7);


//slice
var sub3 = str.slice(2);
console.log(sub3);//"like js"
var sub4=str.slice(2,5);
console.log(sub4);//"lik"

//using negative index
//- index means start from the end
var sub5 = str.slice(-1);
console.log(sub5);//"s"
var sub6= str.slice(5,2);
console.log(sub6);//"". EMPTRY if start > end


//We can use 2 negative index start index(included) < end index(excluded)
var sub8 = str.slice(-4,-1);//-4,-3,-2
//'I like js';
console.log(sub8);//"e j"