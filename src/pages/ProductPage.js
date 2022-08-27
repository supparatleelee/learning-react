// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Menu from '../components/Menu';

function ProductPage() {
  const params = useParams();

  // Example:
  // useEffect(() => {
  //   axios.get('/products/' + params.productId).then(res => {
  //     setProduct(res.data.product)
  //   })
  // }, [])

  return (
    <div>
      {/* react-router-dom will me automatically conntect it for us - between HomePage.js & Menu.js*/}
      <h1>Product Page</h1>
      <h2>Product Id: {params.productId}</h2>
    </div>
  );
}

export default ProductPage;
