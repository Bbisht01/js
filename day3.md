"6"/2
3
"66a"/3
NaN
Number('66a')
NaN
parseInt("66abc")
66
parseInt("6655555abc")
6655555
parseInt("y66h55555abc")
NaN
Array methods 

Object methods

Underscore js

Moment js


function sumAll(x,y,z,...args) { 
  let sum = 0;

  for (let arg in args) sum += arg;

  return sum;
}


sumAll(2,4,6,7,8,9);

function sumAll(x,y,z,...args) { 
  let sum = 0;

  for (let arg in args)
	{
 console.log(typeof arg);
	}

}
sumAll(2,4,6,7,8,9);

function fun(x,y,z){
	console.log(x);
	console.log(y);
	console.log(z);
}

let userInput=["abc","cbbb","show"];
fun(...userInput);

fun(...rest){

	var s=rest[0];
	//usage spread syntax
}

fun('a','b','c');

30??'no value'
30
null??'no value'
'no value'
undefined??'ggg'
'ggg'
null??null
null
New Message
const empList=[
	{id:12,name:'ajay'},
	{id:13,name:'jay'},
	{id:11,name:'ajeesh'},
]


empList.forEach((x)=>x);
undefined
const empList=[
	{id:12,name:'ajay'},
	{id:13,name:'jay'},
	{id:11,name:'ajeesh'},
]


empList.forEach((x)=>console.log(x));
VM334:8 {id: 12, name: 'ajay'}
VM334:8 {id: 13, name: 'jay'}
VM334:8 {id: 11, name: 'ajeesh'}
undefined
empList.map((x)=>console.log(x));
VM524:1 {id: 12, name: 'ajay'}
VM524:1 {id: 13, name: 'jay'}
VM524:1 {id: 11, name: 'ajeesh'}
(3) [undefined, undefined, undefined]
empList.map((x)=>console.log(x.key));
3VM574:1 undefined
(3) [undefined, undefined, undefined]