import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      {/* what are inside here are route of routes */}
      <Route path="/aaa" element={<Layout />}>
        {/* Nested Route won't render children routes */}
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Route>
      <Route
        path="*"
        element={
          <h1>
            Error 404! <br /> This Page is not found.
          </h1>
        }
      ></Route>
    </Routes>
  );
}

export default App;
