import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // CONTROL COMPONENTS - REACT RECOMMENDED
  // = everytime we need to handle with form, do these 3 steps.
  // else, user can't type, but only can read
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('nan');

  return (
    <div className="App">
      {/* input state, but react state still not re-render because react don't know */}
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      {/* so react create controlled components concept for this form case */}
      {/* by creating state -> 1. const [input, setInput] = useState('') + 2. onChange={(event) => setInput(event.target.value)}*/}
      {/* === everytime user type, the state always change... but still can't type */}
      {/* === change 3. value={input} */}

      {/* Textarea and input use these same steps */}

      {/* Select */}
      {/* put value={state} in the roof select element with created new state */}
      {/* const [select, setSelect] = useState(''); */}
      <select
        onChange={(event) => setSelect(event.target.value)}
        value={select}
      >
        <option value="bangkok">Bangkok</option>
        <option value="nonthaburi">Nonthaburi</option>
        <option value="nan">Nan</option>
        {/* Note: selected props = choose this option as a default*/}
        {/* if value undefined, it will automatically use the elemenet value as a value */}
        {/* === value should not be the same as the element value - BEST PRACTICE */}
        {/* i.e. value='1' */}
        {/* i.e. value='2' */}
        {/* i.e. value='3' */}
      </select>

      {/* UNCONTROL COMPONENT */}
      {/* some input can't be control components */}
      <input
        type="file"
        onChange={(event) => console.log(event.target.files)}
      ></input>
    </div>
  );
}

export default App;
