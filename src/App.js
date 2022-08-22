import { useEffect, useState } from 'react';
import axios from 'axios';

// function App() {
//   const [toggle, setToggle] = useState(false);
//   const [count, setCount] = useState(0);
// Effect Hook
// useEffect(didUpdatefunction, dependencyArray)
// useEffect(function() {}, [])
// didUpdateFn will be called after the component is re-rendered in case of no dependency array -- useEffect(function() {})
// console.log('App run: before useEffect line');
// useEffect(function () {
//   console.log('Effect Run at the end');
// });
// App() -> console.log('App run') runs first (jsx) (re-render), then, after re-render, the didUpdateFn of useEffect will be run.
// App() will be re-render when we use useState)
// console.log('App run: after useEffect line');
// === useState change -> App() re-render -> useEffect runs <-- IF WE DO NOT PUT DEPENDENCY ARRAY[]

// Dependency array uses to control of effect function of useEffect.
// useEffect(function () {
//   console.log('Effect Run at the end');
// }, []);

// console.log('App run: after useEffect line');
// === Effect function in useEffect won't run here as we put dependency array[] as a second parameter === this useEffect function will be run only one time in the first run.

//////////////
// useEffect(
//   function () {
//     console.log('Effect Run at the end');
//   },
//   [toggle]
// );

// console.log('App run: after useEffect line');
// effect function will read 'toggle' variable and if this variable updates, it will run again.
// Otherwaise, when state Count changes, it won't know => it won't run again.

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           console.log(toggle);
//           setToggle(!toggle);
//         }}
//       >
//         toggle
//       </button>
//       <button
//         onClick={() => {
//           console.log(count);
//           setCount(count + 1);
//         }}
//       >
//         Increase count
//       </button>
//     </div>
//   );
// }

////////////////////////////////////////////
// use API to get data and create <li> and render data from the API in it.
// function App() {
//   const [state, setState] = useState([]);

//   // axios.get('https://jsonplaceholder.typicode.com/users').then(function(res) {
//   //   // setState(res.data) // Array [users]
//   //   // ===> Infinit Loop
//   //   // useEffect will help us here.
//   // })

//   console.log(state);
//   useEffect(function () {
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(function (res) {
//         setState(res.data); // Array [users]
//       });
//     // console.log(state);
//   }, []); // .get will run only one time.

//   return (
//     <ul>
//       {state.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }

////////////////////////////////////////////
// function App() {
//   const [editData, setEditData] = useState('');
//   return (
//     <>
//       <ul>
//         <li>
//           7-11 <button onClick={() => setEditData('7-11')}>Edit</button>
//         </li>
//         <li>
//           Big-C <button onClick={() => setEditData('Big-C')}>Edit</button>
//         </li>
//         <li>
//           Tesco Lotus{' '}
//           <button onClick={() => setEditData('Tesco Lotus')}>Edit</button>
//         </li>
//       </ul>
//       {editData && <Input data={editData} />}
//     </>
//   );
// }

// // Component Input
// function Input(props) {
//   // we want to change input ===> useEffect because we want to change it (internal factor) by syncing external factor (because the button is in the app, but the state is in the Input component)
//   const [input, setInput] = useState(props.data);

//   useEffect(() => {
//     setInput(props.data);
//   }, [props.data]);

//   return (
//     <input
//       type="text"
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//     />
//   );
// }

// CLEANING EFFECT
function App() {
  const [toggle, setToggle] = useState(false);

  // Case Study: search bar in e-commerce website -- make it delay in order to fetch data just one time
  const [input, setInput] = useState('');
  useEffect(() => {
    console.log('effect body');
    const id = setTimeout(() => {
      //sent request to fetch data
      console.log('request sent');
    }, 3000);
    return () => clearTimeout(id);
  }, [input]);

  return (
    <div>
      <input
        placeholder="Search Product"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <button onClick={() => setToggle(!toggle)}>Toggle Counter</button>
      {toggle && <Counter />}
      {/* if toggle is true = show Counter component */}
    </div>
  );
}

function Counter() {
  // const [toggle, setToggle] = useState(false);
  // which state/useEffect        in which component change, only that component re-renders, not the whole app()
  useEffect(() => {
    const intervalId = setInterval(() => console.log('count trigger'), 1000);
    // function on the right side of the = will won't, no need to use intervalId variable
    return () => {
      console.log('Counter is removed');
      clearInterval(intervalId);
    };
  }, []);
  // setInterval won't stop running though we click the button again and though we clear the console, it still won't stop running-- memory leak
  // solution: cleaning up an effect
  return <div onClick={() => setToggle(!toggle)}>Counter</div>;
}
// return in useEffect will not run untill the state change & it will run at the end before the next effect will be  started.

export default App;
