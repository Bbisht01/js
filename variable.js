types of JsVM

chrome - V8
safari - JSCore , Nitro
firefox - SpiderMonkey
edge IE- Chakra 

let 
const
var


var a=90;
function fun(){
	var a=9000;
	{
		let a=900;
		console.log(a);
	}
	console.log(a);
	
}
fun();

case 2:
=======
var a=90;
function fun(){
	let a=9000;
	{
		let a=90000;
		let a=900;
		console.log(a);
	}
	console.log(a);
	
}
fun();

case 3:
=======

var a=90;
function fun(){
	
	{
		var a=90000;
		let a=900;
		console.log(a);
	}
	console.log(a);
	
}
fun();

case 4:
========

var a=90;
function fun(){
	var a=900;
	console.log(a);
}

console.log(a);

case 5:
========
var a=90;
function fun(){
	var a=900;
	console.log(a);
}
fun();
console.log(a);


var a;
console.log(a);

console.log(h);
var h;

var a=0;
typeof(a);
a='hi';
typeof(a);
a="hello"
typeof(a);


console.log(0.3===(0.1+0.2));