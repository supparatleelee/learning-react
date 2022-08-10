import logo from './logo.svg';
import './App.css';

// Lab 1
// receive user input = value => Then pass it to the event object
// const handleInputLog = (event) => {
//   console.log(event.target.value);
// };

// Lab 2
// const handleSelectLog = (event) => {
//   console.log(event.target.value);
// };

// Lab 3
// const handleCheckbox = (event) => {
//   // console.log(event.target.name);
//   // console.log(event.target.value);
//   // console.log(event.target.checked ? 'tick' : 'untick'); //true / false?

//   const { name, value, checked } = event.target; //destructuring with event object
//   console.log(name);
//   console.log(value);
//   console.log(checked ? 'tick' : 'untick');
// };

// Lab 4
const handleRedirect = (event) => {
  event.preventDefault(); //stop redirect // don't forget () because preventDefailt is a method.
  const redirect = window.confirm('Leave for https://google.com');
  if (redirect) {
    window.location.href = 'https://google.com';
  }
};

function App() {
  return (
    <div>
      {/* Lab 1 */}
      {/* <input onChange={handleInputLog} /> */}

      {/* Lab 2 */}
      {/* <select onChange={handleSelectLog}>
        <option value="Singapore">Singapore</option>
        <option value="Thailand">Thailand</option>
        <option value="US">US</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select> */}

      {/* Lab 3 */}
      {/* <form onChange={handleCheckbox}>
        <input type="checkbox" name="phoneBrand1" value="Apple" />
        <label htmlFor="phoneBrand1">Apple</label>
        <input type="checkbox" name="phoneBrand2" value="Samsung" />
        <label htmlFor="phoneBrand2">Samsung</label>
        <input type="checkbox" name="phoneBrand3" value="Oppo" />
        <label htmlFor="phoneBrand3">Oppo</label>
        <button>Submit</button>
      </form> */}

      {/* Lab 4 */}
      <a href="https://google.com" onClick={handleRedirect}>
        Google
      </a>
    </div>
  );
}

export default App;
