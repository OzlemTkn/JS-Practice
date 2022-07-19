/*
String Manupilations:
Ask user to enter a name: and print “name”
Make sure only the first initial is always capital and the rest always small
Eg:
var name=ahmet;  =>>>>Ahmet
var name=aHmet;  =>>>>Ahmet
var name=AHMET   =>>>>Ahmet
*/
console.clear();
//Getting the data from a user using prompt
//return type of prompt is string
var fname = prompt('Enter your name');
console.log(fname);
var capitalize=fname.trim().substring(0,1).toUpperCase() + fname.trim().substring(1).toLowerCase();
console.log(capitalize);

//${} Using backtick
var c=`${fname.trim().substring(0,1).toUpperCase()}${fname.trim().substring(1).toLowerCase()}`;
console.log(c)

