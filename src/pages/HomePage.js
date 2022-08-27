import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link to="product/1">Pepsi</Link>
        </li>
        <li>
          <Link to="product/2">Fanta</Link>
        </li>
        <li>
          <Link to="product/3">Coke</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
