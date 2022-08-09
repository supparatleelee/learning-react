import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const nickname = 'John';

let message;
if (nickname === 'John') {
  message = <p>He is a boy</p>;
} else {
  message = <p>She is a girl</p>;
}

function greeting(name) {
  return <p>Hello {name}</p>;
}

const classesH1 = 'main-header padding-top-3px';

const element = (
  <div id="main" className="main">
    <h1 className={classesH1}>
      Hello JSX {nickname}, {2 + 15 + ' years old'}
    </h1>
    {message}
    {/* p tag */}
    {greeting('Leelee')}
    <label htmlFor="username">Username:</label>
    <input type="text" id="username"></input>
    {/* JSX can only render to these 3 types: String, Number, Array of JSX / String / NUmber */}
    <h1>{'Render String'}</h1>
    <h1>{'123456'}</h1>
    <h1>
      {[
        <span>JSX Array Element</span>,
        <p>test</p>,
        'String array element *****',
        384982383,
      ]}
    </h1>
    {/* Boolean, null, undefined are ignored */}
    <h1>
      {true}, {false}, {null}, {undefined}
    </h1>
    {/* Render object => error */}
    {/* <h1>{firstname: 'John', age: 20}</h1> */}
    {/* insert expression into attributes */}
    {/* put class in object -> convert object inro string */}
    <div className={undefined}></div>
    {/* = irgnore */}
  </div>
); // jsx convert -> React.createElement('div', {id: 'main', className: 'main'}, ...)

const root = ReactDOM.createRoot(document.getElementById('root'));
// delete react.StricMode first -- learn about this later
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
