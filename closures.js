// Dynamic Scope vs. Static Scope

var x = 10;

function foo() {
  var y = x + 5;
  return y;
}
 
function bar() {
  var x = 2;
  return foo();
}
 
function main() {
  foo(); // Static scope: 15; Dynamic scope: 15
  bar(); // Static scope: 15; Dynamic scope: 7
  return 0;
}

//eg. 2
var myVar = 100;
 
function foo() {
  console.log(myVar);
}
 
foo(); // Static scope: 100; Dynamic scope: 100
 
(function () {
  var myVar = 50;
  foo(); // Static scope: 100; Dynamic scope: 50
})();

// Higher-order function
(function (arg) {
  var myVar = 1500;
  arg();  // Static scope: 100; Dynamic scope: 1500
})(foo);

//==============Closures==============

// Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.

function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  var initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure(); 

  
//The line of code above outputs “Vivian is awesome” and this is possible because of closure.
// When the function randomFunc() runs, it sees that the returning function is using the variable obj1 inside it:
//Therefore randomFunc(), instead of destroying the value of obj1 after execution, saves the value in the memory for further reference. This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed.
// This ability of a function to store a variable for further reference even after it is executed, is called Closure.


