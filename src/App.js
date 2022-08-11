const students = [
  'Bic', // <p key = '1'>Bic</p>
  'Job', // <p key = '2'>Job</p>
  'May', // <p key = '3'>May</p>
  'Leelee',
  'First',
  'Best',
  'Way',
  'Keaw',
  'Mind',
];

const data = [
  { id: 1, name: 'Coke', price: 20, stock: 23, description: '' }, //<div><h3>Coke</h3><p>20</p></div>
  { id: 2, name: 'Pepsi', price: 10, stock: 23, description: '' },
  { id: 3, name: 'Soda', price: 39, stock: 23, description: '' },
];

function App() {
  return (
    // <div style={{textAlign: 'center'}}>
    //   <p>{students[0]}</p>
    //   <p>{students[1]}</p>
    //   <p>{students[2]}</p>
    //   {[<p>Bic</p>, <p>Job</p>, <p>May</p>]}
    // </div>
    // <div style={{ textAlign: 'center' }}>
    //   {students.map((item, index) => (
    //     <p key={index}>{item}</p>
    //   ))}
    // </div>

    <div style={{ textAlign: 'center' }}>
      {/* {students.map((item, index) => ( */}
      {/* <p key={index}>{item}</p> */}
      {data.map((item, index) => (
        // key need to put in root element, don't put it in the child elements
        // <div key={index}>
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}

      {/* Destructuring -- depends on your perference*/}
      {data.map(({ id, name, price }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
