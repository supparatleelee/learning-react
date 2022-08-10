import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // Lab 1
    /*
  <div>
    <button className="margin-right">+</button>
    <p className="inline margin-right">0</p>
    <button className="margin-right">-</button>
    <button>Reset</button>
  </div>
  */

    // Lab 2
    <div>
      <button className="block">Add</button>
      <p
        style={{
          display: 'inline',
          color: 'green',
          textDecoration: 'line-through',
        }}
      >
        Task 1
      </p>
      <button>Edit</button> <button>Del</button>
      <div>
        <p style={{ display: 'inline' }}>Task 2</p> <button>Edit</button>{' '}
        <button>Del</button>
      </div>
    </div>
  );
}

export default App;
