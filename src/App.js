import { useState } from 'react';

const data = {
  bangkok: ['Pathum Wan', 'Dusit', 'Ratchathewi'],
  nonthaburi: ['Pakkret', 'Bangyai'],
};

function App() {
  // Lab 1
  // 0. because we need to change the component props
  // And hide/show can use logical statement - true/false
  // = set showresult initial's value as true
  // const [showResult, setShowResult] = useState(true);

  // 2. go to this function to update the state
  // function onClick() {
  // setShowResult((ShowResult) => false); //ShowResult can change to other name = to understand that useState will know what it is as useState only has 2 parameters
  // I forgot how to update state value state[0] by using callback function
  // }

  // Lab 2
  // state[1] to update state[0] value
  // const [hidetext, setHidetext] = useState(true);

  // const onClick = () => {
  //   setHidetext((hidetext) => false);
  // };

  // Lab 3
  // const [changeText, setChangeText] = useState('Hide');

  // function onClick() {
  //   if (changeText === 'Hide') {
  //     setChangeText((changeText) => 'Show');
  //   } else {
  //     setChangeText((changeText) => 'Hide');
  //   }
  //   // setChangeText((changeText) => 'Show');
  // }

  // Lab 4
  // user input store as a state - for setConvertBath === control component
  // const [convertBath, setConvertBath] = useState(0);

  // const onChange = (event) => {
  //   // console.log(event.target.value);
  //   setConvertBath((convertBath) => {
  //     return event.target.value * 30;
  //     // convertBath = value * 30; // Can't do like this
  //   });
  // };

  ////////////////////// Instructor ////////////////////////////
  // create another state to get input value
  // const [input4, setInput4] = useState('')

  // Lab 5
  // GET tel input to use it the state[0] to check it in other
  // const [tel, setTel] = useState('');
  // // error text
  // const [text, setText] = useState('');

  // const check = (event) => {
  //   // setTel(''); // ??? why it doesn't disappear
  //   setTel(event.target.value);
  //   // console.log(tel);
  // };

  // const onClick = (event) => {
  //   if (tel === '') {
  //     setText('Phone number is required');
  //   } else if (isNaN(tel) === true) {
  //     // } else if (typeof tel !== 'number') {
  //     //???? why already num, but this still applied?
  //     // I guess it is because this condition that affect the error
  //     // convert to number is nan = Not a number
  //     setText('Phone number is invalid');
  //     // } else if (tel.split('').length !== 10) {
  //     //???? why still can't get into this condition??
  //   } else if (tel.length !== 10) {
  //     console.log(event.target.value);
  //     setText('Invalid length');
  //   } else {
  //     alert('Your number is valid');
  //   }
  // };

  // Lab 6
  const [district, setDistrict] = useState([]);

  return (
    <div>
      {/* Lab 1 */}
      {/* <button
        //3. to hide - display: none -- when the logical statement is false === can use ? :
        style={{ display: showResult ? 'inline' : 'none' }}
        onClick={onClick} //1. when click event happens
      >
        Click to hide me
      </button> */}

      {/* Lab 2 */}
      {/* <button onClick={onClick}>Click to hide text</button>
      <h1 style={{ display: hidetext ? 'block' : 'none' }}>Text</h1> */}

      {/* Lab 3 */}
      {/* <button onClick={onClick}>{changeText}</button> */}

      {/* Lab 4 */}
      {/* <label htmlFor="dollar">Enter Dollar: </label>
      <input
        type="number"
        id="dollar"
        name="dollar"
        onChange={onChange}
      ></input>
      <p>
        Convert to Bath: <span style={{ color: 'red' }}>{convertBath}</span>{' '}
        Bath
      </p> */}

      {/* Lab 5 */}
      {/* <form onSubmit={onSubmit}> */}
      {/* <input type="tel" placeholder="Phone Number" onChange={check}></input>
      <button onClick={onClick}>Check</button> */}
      {/* </form> */}
      {/* cuz the {text} won't last long */}
      {/* <br /> */}
      {/* <p style={{ color: 'red' }}>{text}</p> */}
      {/* Not good because it will always render the empty p tag */}
      {/* Conditional Rendering */}
      {/* {text && <p style={{ color: 'red' }}>{text}</p>} */}

      {/* Lab 6 */}
      <label htmlFor="province">Province: </label>
      <select
        id="provice"
        onChange={(event) => {
          console.log(event.target.value);
          setDistrict(data[event.target.value]);
        }}
      >
        {/* pass parameter into callback function */}
        <option value="bangkok">Bangkok</option>
        <option value="nonthaburi">Nonthaburi</option>
      </select>

      <br />

      <label htmlFor="district">District: </label>
      <select id="district">
        {/* still no need to put option because district will depend on provice */}
        {/* Need to create data mapping -- const data -- outside App() function*/}
        {/* things that {expression} can render -> 'string', number, ['12', '45'] */}
        {/* But it will render like a concat, not individual */}
        {/* but object, can't & not even concat === {name: 'test'} <- can't do it like this */}
        {/* so we need to convert it into array and make it concat as we wanted */}
        {/* one way: {[<option></option>, <option></option>]} */}
        {district.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
