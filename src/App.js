import { useState } from 'react';

function App() {
  console.log('App Executed');
  // let count = 0; // we declare the variable as we used to, but react donesn't know this kind of variable is a state. So, it thought it's the same component and not evaluate the new state for us.
  // React know what is a state by using useState function (built-in function from React library)
  // in order to use this function, we need to import this function first
  // useState() import as a name so need to put import {useState } from 'react' (it's in node_modules)
  // the paremeter in useState is initial value i.e. 0
  // useState function return value as an array that always has length = 2
  // the first element is a state value (i.e. = 0) => [0] // state[0] index 0
  // the second element is a function that use as a state updater => [0, function] which is where state could make change // state[1] index 1
  const state = useState(0); // [1234] - state[0] - initial value
  //useState() will be 0 only the starting point. After that, it will remember the lastest value = initial value -> current value

  //But write like this, it's hard to read - use destructuring
  // const [stateDe, fnSate] = useState(0)
  //Convention - name the state value's name related to its function === Best Practice
  // = divide it into 2 variables & name it mantually
  // == the variable will be more readable
  ///////////
  // const [count, setCount] = useState(0);
  //////////

  // one component can has many useState's value
  const [cart, setCarts] = useState({
    age: 42,
    fruit: 'banana',
    item: [{ text: 'pen, ruler' }], // if an object, need to put expression inside (?) -- complicated
  });

  const handleClickAdd = () => {
    // count++;
    // console.log(count);
    //not working because react doesn't know that we want count to be a state value

    //put () because it's a function
    //i.e. state[1](100) & useState(0) + state[0] -> new state = state[0] = 100
    state[1](state[0] + 1);
    //But write like this, it's hard to read - use destructuring

    // state[1](state[0] + 1);
    // state[1](state[0] + 1);
    // state[1](state[0] + 1);
    // state[1](state[0] + 1);
    // the value won't be 5 because react doesn't want it to rerender multiple like that because it will worked more than necessary.
    // So react group it into 1 and update it.
    // so if the 5 above have different value to +, it will choose the belowest one.
    // this way is not callback function, just a normal function

    // ANOTHER WAY TO UPDATE STATE -- Callback function
    // use in case of the next state's value depends on the current value i.e. 1 + 2 = 3 + 1 = 4 + 1 = 5
    // state[1](callback) // setCount(callback) = have 1 parameter
    // it will get the value from the memory for us automatically.
    // In this way, it can now execute as we expected.
    state[1](function (currentCount) {
      // currentCount = 1
      return currentCount + 1; // 2
    });
    state[1](function (currentCount) {
      // 2
      return currentCount + 1; // 3
    });
    state[1](function (currentCount) {
      // 3
      return currentCount + 1; // 4
    });
    state[1](function (currentCount) {
      // 4
      return currentCount + 1; // 5
    });
    console.log(state[0]);
    // 1 click === 5, unlike the above one -- it saves in the memory
    // but console.log(state[0]) will still be 0 because it will exceute first, then finished all the code lines === next log then will be 5
    // i.e. click === 5, log === 0. Next click === 10, log === 5.
  };

  const handleClickSubtract = () => {
    // if (count > 0) {
    // check first - use if statement
    // count--;
    // console.log(count);
    //not working
    // }

    if (state[0] > 0) {
      state[1](state[0] - 1);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
      {/* component function - like a new tag */}
      <Test />
      <button onClick={handleClickSubtract}>-</button>
      {/* <span>{count}</span> */}
      <span>{state[0]}</span>
      <button onClick={handleClickAdd}>+</button>
    </div>
  );
}

// create component function
function Test() {
  const stateTest = useState(0);
  console.log('Test');
  return <h1 onClick={() => stateTest[1](stateTest[0] + 1)}>Test</h1>;
}
// when do this function the stateTest only rerun, not an app function.
// i.e. stateTest belong to Test() = rerun only this
// state is belong to App() = App rerun

export default App;
