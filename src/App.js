import logo from './logo.svg';
//Need to import ./App.css in order to use external css
import './App.css';
// import classes from './App.module.css'; // this classes can import in index.js - error

// css styling
// 1. Inline css // used often
// 2. External css // used often - Taiwan
// 3. css module // learn by yourself if interested
// 4. css in JS // learn by yourself if interested

const styles = {
  width: '400px',
  height: '300px',
  border: '1px solid red',
};

function App() {
  return (
    // 1. Inline css
    // <div style={styles}>
    //   <h1 style={{ color: 'green', fontSize: '100px' }}>Inline CSS</h1>
    // </div>

    //2. External css
    <div className="w-200 h-100 border-green-2 border-red-4">External CSS</div>

    //3. CSS Module - filename: [name].module.css
    // need to create App.module.css file
    // <div className={classes.test}></div>
    //https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
    // also there is a way to put multiple className like expression {`${classes['w-100']} ${classes['h-100']}`} -> error = find a way later

    //4.css in JS - Style component
    // need to import library into the file
    //styled-components.com
  );
}

export default App;
