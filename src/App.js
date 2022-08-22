import logo from './logo.svg';
import './App.css';

function App() {
  // Lab 1
  const friends = ['May', 'Job', 'Bic', 'First', 'Best', 'Ball'];
  // Lab 2
  const Port = [
    { id: 1, message: 'Sleepy', Post: '11-08-2022', username: 'Harry' },
    { id: 2, message: 'HungryT T', Post: '11-08-2022', username: 'Alex' },
    { id: 3, message: '...', Post: '11-08-2022', username: 'John' },
  ];
  // Lab 3
  const post = [
    {
      id: 1,
      username: 'John',
      message: 'Happy new year',
      dateTime: '1/1/2021 00.01AM',
    },
    {
      id: 2,
      username: 'Jack',
      message: 'Programing is fun',
      dateTime: '30/6/2021 10.23AM',
    },
    {
      id: 3,
      username: 'Sarah',
      message: 'oh Amazing !!!',
      dateTime: '23/7/2021 08.17PM',
    },
  ];
  // Lab 4q

  // Lab 5
  return (
    <div className="App">
      {/* Lab 1 */}
      <div>
        {/* applied .map() function to get the item element */}
        {friends.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      {/* Lab 2 */}
      {Port.map(({ id, message, Post, username }) => (
        <div key={id} style={{ backgroundColor: 'salmon' }}>
          <h3>{username}</h3>
          <h4>{Post}</h4>
          <p>{message}</p>
        </div>
      ))}

      {/* Lab 3 */}
      {post.map(({ id, username, message, dateTime }) => (
        <div key={id} className="border margin padding">
          <p className="p-font">{message}</p>
          <h1 className="h1-font h1-margin-right">Author: {username}</h1>
          <h1 className="h1-font">{dateTime}</h1>
        </div>
      ))}
      {/* Lab 4 */}

      {/* Lab 5 */}
    </div>
  );
}

export default App;
