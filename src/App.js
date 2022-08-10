import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  // if isLogged is true -> render welcome back
  // Else -> render go to login page
  // === render as we setting (condition)

  //1. Store jsx in a variable
  // const message = isLogged === true ? <h1>Welcome Back</h1> : <h1>Go to Login Page</h1>
  return (
    <div>
      {/* 1. */}
      {/* {message} */}

      {/* 2. */}
      {/* {isLogged && <h1>Welcome Back</h1>}
      {!isLogged && <h1>Go to Login Page</h1>} */}

      {/* 3. Ternary Operator */}
      {isLogged === true ? <h1>Welcome Back</h1> : <h1>Go to Login Page</h1>}
    </div>
  );

  //2. && Operator (null && <h1>Test</h1> ===> Boolean -> falsy value - return the fist one (?) ===> null)
  //(true && <h1>Test</h1> ===> <h1>Test</h1>)
}

export default App;
