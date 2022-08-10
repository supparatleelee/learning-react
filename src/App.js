import logo from './logo.svg';
import './App.css';

function App() {
  // Use Case of event handling = user submit email or something we need to use that value to compare with our database

  // in this js, can't use function confirm directly
  // window.confirm('Are you sure')

  // #1
  // const handleClick = () => {
  //   alert('Click');
  // };

  /////////////////////
  // create Handling function
  const handleInputChange = (event) => {
    console.log('Handle Input Change');
  };

  //
  const handleClickBtn = (name) => {
    console.log(name);
  };
  // 2.
  const handleClickAnotherBtn = (name) => (event) => {
    console.log(name);
  };
  //

  return (
    <div>
      {/* #1 */}
      {/* <button onClick={handleClick}>Click</button> */}

      {/* #2 */}
      {/* <button
        onClick={() => {
          alert('Click');
        }}
      >
        Click
      </button> */}

      {/* #3 */}
      {/* <input type="text" onChange={() => {
        console.log('change input')
      }}></input> */}

      {/* <input
        type="text"
        onChange={function () {
          console.log('input change');
        }}
      ></input> */}

      {/* Event Object */}
      {/* no matter what event occurs, browser/JS (?) will create event object for us and send it to us  */}
      {/* Event Object will tell us about the information about the event that occurs i.e. why this event happens and how */}
      {/* <input
        type="text"
        onChange={function (event) {
          console.log(event);
        }}
      ></input> */}
      {/* target (see in inspect in the web browser) = the element that makes this event happen */}
      {/* i.e. if we want to use value from the target in the code - event.target.value */}
      {/* <input
        type="text"
        onChange={function (event) {
          console.log(event.target.value);
        }}
      ></input> */}
      {/* unlike Vanilla JS (DOM) that we need to select the element first and blah blah i.e. document.getElementbyID('') */}

      {/* /////////////////////////////////////////////////////// */}

      {/* // */}
      {/* when click, log 1/ 2 */}
      {/* = bilding event function = onClick */}
      {/* How to send parameter then? -> 2 ways*/}
      {/* 1. annonymous value to function - onClick={() => {handleClickBtn(1);}} = callback function = if don't click this function won't work*/}
      <button
        onClick={() => {
          handleClickBtn(1);
        }}
      >
        Click One
      </button>
      {/* see insructor code again + my img in my iPhone */}

      {/* 2.  */}
      {/* handleClickAnotherBtn(2) ===> () => {console.log(3)} */}
      {/* onClick = [(event) => {console.log(3)}] */}
      {/* so we can send parameter directly like this in the form of function */}
      <button onClick={handleClickAnotherBtn(2)}>Click Two</button>
      {/* // */}

      {/* <form action="https://google.com"> */}
      {/* onSubmit = event occurs when user click submit button in the form */}
      <form
        onSubmit={(event) => {
          // preventDefault to stop browser send request to server. Then, we will send request by ourself.
          // event.preventDefault();
          event.preventDefault(alert('preventDefault'));
          console.log(event);
        }}
      >
        {/* if don't put action="" it will send the value to itself - localhost:3000/? */}
        <input
          type="text"
          // when the input value change, the browser will pass the event object to the parameter of the callback function / handling function.
          // onChange={function (event) {
          //   console.log(event);
          //   console.log(event.target.value);
          // }}
          // annonymus function - all the logics will be in here

          // /////////////////
          // when input value chane, the browser will execute handleInputChange(event)
          onChange={handleInputChange}
          //then the logic all will be in the function above -> the code will be much cleaner === Best Practice
        ></input>
        {/* button in form = input type="submit" = submit button to send the form value */}
        {/* if you have multiple button -> you need to set type="" property for it i.e. type="button", type="reset" */}
        <button>Submit Form</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

export default App;
