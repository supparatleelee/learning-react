import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
  console.log('Welcome Component');
  return (
    <h1>
      Hi {props.name}, {props.age}
    </h1>
  );
}

// class Position extends React.Component {
class Position extends Component {
  render() {
    return <h1>Position Component</h1>;
    //about how to use props in class component will learn later.
  }
}

function MainContainer(props) {
  const birthDate = '2001-08-16'; // parent component
  // we can't modify props
  //props.age = 20 // like this DON'T
  // props.gender = 'Male' // never modify its own propps = pure function (= don't change its input & always return the same result for the same inputs)
  // because props is for read only
  console.logo(props.test);
  console.logo(props.obj.name);
  console.logo(props.boo); // true = boolean can exclude ={} in component case.
  return (
    <div>
      {/* Child component */}
      {/* unidirectional data flow: Parent component send data to Child component only */}
      <Welcome name="Bob" age="55" birthDate={birthDate} />
      <Position />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Position />
    {Welcome({ name: 'John' })}
    <Welcome name="Alex" age="20" />
    <Welcome name="Harry" />
    <Welcome name="Sam" />
    {Welcome({ name: 'Alex' })}
    {Welcome({ name: 'Harry' })}
    {Welcome({ name: 'Sam' })}
    {Welcome({ name: 'Peter' })} */}
    <MainContainer
      test={[1, 2, 3]}
      obj={{ name: 'Alex', surname: 'John' }}
      boo
    />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
