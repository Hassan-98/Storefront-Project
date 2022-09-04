import { useState, useEffect } from 'react';
import Product from 'components/ProductCard';

import { Product as IProduct } from 'types/product';

import axios, { generateAuthHeaders } from 'utils/axios'

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const response = await axios.get('/products', { headers: generateAuthHeaders() }).catch(err => console.log(err.response.data.err));

    if (!response || !response.data) return;

    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home-page" style={{padding: '100px 0 130px'}}>
      <h5 style={{ maxWidth: '80%', margin: '0 auto 20px'}}>Explore Featured Products</h5>
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '80%', margin: '0 auto', justifyContent: 'center' }}>
        {
          products.length
          ?
          products.map(product => (
            <Product key={product.id} product={product} />
          ))
          :
          <p>No Products Found</p>
        }
      </div>
    </div>
  )
}

export default Home