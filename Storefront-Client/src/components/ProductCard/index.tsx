import './product.scss';

import { Product as IProduct } from 'types/product';

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  return (
    <div className="product">
      <div className="wrapper">
        <div className="image">
          <img src="/images/product.jpg" alt="" />
        </div>
        <div className="details">
          <h6>{ product.name }</h6>
          <p className="price">{ product.price }$</p>
          <p className="category">{ product.category }</p>
        </div>
        <div className="buy-now">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Product