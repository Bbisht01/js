google meet api
to book through calender
that if vacant seat or not
json mock server
create one component using typescript

VDOM
Reconciliation
diffing
jsx

shadow dom & shadow tree-difference

1.display ul ol using createElement
import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement;

const displayData = () =>
  element(
    "div",
    null,
    element("h1", { className: "Header" }, "unordered list"),
    element("p", null, "Look at this list:"),
    element(
      "ul",
      null,
      [1, 2, 3].map(function (number) {
        return element("li", { key: number }, "item " + number);
      })
    ),
    element("h1", { className: "Header2" }, "ordered list"),
    element(
      "ol",
      null,
      [1, 2, 3].map(function (number) {
        return element("li", { key: number }, "item " + number);
      })
    )
  );

ReactDOM.render(element(displayData), document.getElementById("root"));


2.react.createElement-input enter value and print

import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement;

const displayData = () =>
  element(
    "div",
    null,
    element("h1", { className: "Header" }, "form"),
    element("p", null, "Enter the value:"),
    element("input", { placeholder: "Enter a text", type: "text" })
  );

ReactDOM.render(element(displayData), document.getElementById("root"));



Shadow DOM
Shadow DOM, relates mostly to the concept of encapsulation. It is a tool that allows developers to overcome DOM encapsulation.
It refers to the browser’s potential to add a subtree of DOM elements into the rendering of a document, but not into the DOM tree of the main document.
Thus, it isolates the DOM and ensures that the DOM of a component is a separate element that won’t appear in a global DOM.
Contrary to the DOM, Shadow DOM occurs in smaller pieces, implying that (unlike the Virtual DOM) it is not a complete representation of the entire DOM.
It is also proven to be helpful with CSS scoping. The styles used in an application can overlap which makes it cumbersome to handle them. Shadow DOM ensures that the styles created inside a single Shadow DOM element remain isolated and within their own scope.