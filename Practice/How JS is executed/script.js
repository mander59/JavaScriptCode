/***********************************
Hoisting
***********************************/
// Functions
/*
calculateAge(1992);

function calculateAge(year) {
    console.log(2020-year);
}

var retirement = function(year) {
    console.log(65 - (2020 - year));
}

retirement(1990);

// Variables

console.log(age);
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/

/***********************************
Scoping
***********************************/
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d); clearly will not work
    console.log(a + d)
}
*/

/***********************************
This Keyword
***********************************/

// console.log(this); Window object
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);  // Still window object
}
*/
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){ // Method
        console.log(this); // John object
        console.log(2020 - this.yearOfBirth);

        /*
        function innerFunction() { // Regular function
            console.log(this); // Back to window object
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();