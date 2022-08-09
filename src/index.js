import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Lab 1
// const fullName = { firstName: 'Supparat', lastName: 'T' };
/*
const fullName = 'Supparat T.';
const birthYear = 2001;

<h1>{fullName}</h1>
<p>{birthYear}</p>
*/

// Lab 2
/*
const height = 149;
const weight = 38;

function calcBMI(height, weight) {
  const bmi = weight / height ** 2;
  return bmi;
}

<h1>{calcBMI(height, weight)}</h1>
*/

// Lab 3
/*
<label htmlFor="username">Username:</label>
<input className="username" id="username" name="username"></input>
*/

// Lab 4
/*
function App() {
  return (
    <h1>Welcome to Thailand</h1>
    <h2>Land of smile</h2>
  );
}
Nah, because it has 2 root elements = it's won't work.
Root element = the big box. You only can create other elements inside that root element, not a root element's sibling.
*/

// Lab 5
/* No, thought other elements are inside the root element, but br doesn't have closing tag <br />*/

// Lab 6
/*
const name = 'Leelee';
const age = 20;
const isMarried = false;
const hasChildren = null;
const isSingled = undefined;

<h1>
    {name}, {age}, {isMarried}, {hasChildren}, {isSingled}
</h1>
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
