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

/***********************************
Ternary Operator
***********************************/
/*
var firstName = "John";
var age = 22;

age >= 18 ? console.log(firstName + ' can drink beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/***********************************
Challenge 2
***********************************/

/*
var johnsTeam =(89 + 120 + 103) / 3;
var mikesTeam = (116 + 94 + 123) / 3;

mikesTeam > johnsTeam ? console.log("Mike's team wins with average score of " + mikesTeam + ".") : console.log("John's team wins with average score of " + johnsTeam + ".");
*/

/***********************************
Function Expression
***********************************/

/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives for Uber';
        case 'designer':
            return firstName + ' designs websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Jim'));
*/

/***********************************
Challenge 3
***********************************/
/*
function calculateTip(bill) {
    var percentage;
    if(bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]),
            calculateTip(bills[1]),
            calculateTip(bills[2])];

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/***********************************
Challenge 4
***********************************/
/*
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(john.calculateBMI() > mark.calculateBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}
else if(mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
}
else {
    console.log('They have the same BMI')
}
*/

/***********************************
Challenge 5
***********************************/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calculateTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if(bill < 50) {
                percentage = .2;
            }
            else if(bill >= 50 && bill < 200) {
                percentage = .15;
            }
            else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calculateTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if(bill < 100) {
                percentage = .2;
            }
            else if(bill >= 100 && bill < 300) {
                percentage = .10;
            }
            else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calculateAverage(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

john.calculateTips();
mark.calculateTips();

john.average = calculateAverage(john.tips);
mark.average = calculateAverage(mark.tips);

console.log(john, mark);

if(john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
}
else if(mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
