
1 functional programming vs object oriented programming?
2 how do you hoist a function
3 inheritance through prototype and =========
Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
 In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.

 // object person
let person = {
	talk: true,
	Canfly() {
		return "Sorry, Can't fly";
	},
};
// Object GFGuser
let GFGuser = {
	CanCode: true,
	CanCook() {
		return "Can't say";
	},
	
	//  Inheriting the properties and methods of person
	__proto__: person, 
};

// Printing on console
// Property of person
console.log("Can a GFG User talk: " + GFGuser.talk); 

// Method of person
console.log("Can a GFG User fly: " + GFGuser.Canfly()); 

// Property of GFGuser
console.log("Can a GFG User code: " + GFGuser.CanCode); 

// Method of GFGuser
console.log("Can a GFG User cook: " + GFGuser.CanCook()); 
========================================================================

4 how to create object of a function==============
Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person;
x.age = 10;      // Will change both x.age and person.age

===============================================================

5 how to create a constructor of a function

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8


q- create a class keep a function inside it and print this keyword inside it.

class TestClass {
    constructor(userName) {
        this._userName = userName;
    }

    getName() {
        return this._userName;
    }
}

TestClass.getName2 = function() {
    // returns undefined now
    console.log(this._userName);
};

var test = new TestClass("Joe");

console.log(test.getName()); // returns Joe

///////////////

TestClass.getName2(); // returns undefined
let testClassName = TestClass.name; // Just a little proof of what is returned below
console.log(testClassName); // returns TestClass

=========================================
class TestClass {
  constructor(myName) {
    this.name = myName;
  }

  getName() {
    return this.name;
  }

  static getName2() {
    return 'getName2 result';
  }
}
...is exactly equivalent to this:

const TestClass = function(myName) {
  this.name = myName;
}

TestClass.prototype.getName = function() {
  return this.name;
}

TestClass.getName2 = function() {
  return 'getName2 result';
}
===============================================

q- same as above but outside the class



q- change the previous function to arrow function inside a class

class SomeClass {
    constructor() {
        this.someProp = 'Hello World';
    }
printName = () => { // Arrow function
        console.log(this.someProp);
    }
}

let instance = new SomeClass();
let funcVariable = instance.printName;
funcVariable(); // logs 'Hello World'

const { printName } = instance; // destructuring also works!
printName(); // logs 'Hello World'

q- work on these
join
map 
keys
enteries
create &
assign the above mentioned 

The only difference is that the Object.keys() method returns only the own property names and it only works for ES5 while Object.entries() method returns an array of arrays with key and value and it works from ES6.

q- creating a immutable object in js
ans- object.freeze().
