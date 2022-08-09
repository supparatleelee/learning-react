import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Lab #1
/*
function Profile(props) {
  return (
    <div>
      <h1>
        Name: {props.name}, Age: {props.age}
      </h1>
    </div>
  );
}

<Profile name="John Doe" age="20" />
*/

// Lab #2
/*
Honda
1000000
undefined // not show // because no value
*/

// Lab #3 & #4
/*
function ProductItem(props) {
  return (
    <div>
      <h1>Product Name: {props.item.product}</h1>
      <h2>Price: {props.item.price}</h2>
      <p>Description: {props.item.info}</p>
    </div>
  );
}
// Lab 3
<ProductItem product="Pen" price="20" info="For Writing" />
// Lab 4
<ProductItem item={{ product: 'Pen', price: 20, info: 'For Writing' }} />
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductItem item={{ product: 'Pen', price: 20, info: 'For Writing' }} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
