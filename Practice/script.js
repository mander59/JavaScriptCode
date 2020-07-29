/***********************************
Variables
***********************************/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = '38';

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/***********************************
Variable mutation and type coercion
***********************************/

/*
var firstName = 'John';
var age = 38;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'Uber driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/***********************************
Operators
***********************************/
/*
var currentYear, JohnsBirthYear, MarksBirthYear;
currentYear = 2020;
JohnsBirthYear = currentYear - 38;
MarksBirthYear = currentYear - 33;
console.log(JohnsBirthYear);

var JohnOlder = JohnsBirthYear < MarksBirthYear;
console.log(JohnOlder);

console.log(typeof JohnOlder);
*/

/***********************************
Operator Precedence
***********************************/

/*
var currentYear = 2020;
var johnsBirthYear = 1989;
var adult = 21;

var isAdult = currentYear - johnsBirthYear >= adult;
console.log(isAdult);

var johnsAge = currentYear - johnsBirthYear;
var marksAge = 23;
var averageAge = (johnsAge + marksAge) / 2;
console.log(averageAge);
*/

/***********************************
Challenge 1
***********************************/

/*
var markHeight =  1.78;
var markMass = 80;
var johnHeight = 1.68;
var johnMass = 84;
var johnBMI, markBMI;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI is " + markBMI + " and John's BMI is " + johnBMI + ".");
var markHigher = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's BMI?" + markHigher);
*/