prop drilling
composition vs inheritance


counter app

import React from 'react';
import './style.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count >= 0) {
      this.setState({
        bgColor: 'green',
      });
    }
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
    if (this.state.count <= 0) {
      this.setState({
        bgColor: 'red',
      });
    }
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  // change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={(e) => this.increment(e)}>
          Increment
        </button>
        <button className="dec" onClick={(e) => this.decrement(e)}>
          Decrement
        </button>
        <button className="reset" onClick={(e) => this.reset(e)}>
          Reset
        </button>
        <h1 style={{ color: this.state.bgColor }}>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;


React - JS library for creating UI
	Focuses only on UI and not logics

VDOM
	reconcilation
	Snapshot
	Diffing algorithm
JSX
	HTML look like syntax
	React api - React.createElement(),React.createClass() etc...	

TS - strongly 

Synthetic events - wrapper around browser events

Component based architecture - Angular React
	Root (Parent)
	Modules

chunks.js

transpiler - src to src format - JSX---ES6+ES5

Babel - v7

Bundler

web pack

DOM tree


Routing - SPA

Lazy loading
	React.suspense()
	React.Lazy()
class and functional component
NPX vs NPM 

npm i -g create-react-app
npx create-react-app myfirstapp - one time usage
https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/
https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/#:~:text=Npm%20is%20a%20tool%20that,pollution%20in%20the%20long%20term.

Props:
======

are immutable 
hold values 
attributes in html


<tagName/compName props1={} props={}/>


class CompName{

	//we can access the props which is opassed from the parent
} 
Npm vs npx — What’s the Difference?

If you’ve ever used Node.js [https://nodejs.org/], then you must have used npm  for sure. npm (node package manager) is the dependency/package manager you get out of the box when you install Node.js. It provides a way for developers to install packages both globally and locally.  Sometimes you might

freeCodeCamp.org
