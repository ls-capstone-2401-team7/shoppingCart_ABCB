import Product from "./Product.jsx";
import AddProductForm from "./AddProductForm.jsx";
import { useState } from 'react';

const Main = ({ products }) => {
  const [isProductFormVisible, setIsProductFormVisible] = useState(false);

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </ul>
      </div>
      {
        isProductFormVisible
        ? <AddProductForm />
        : <p><button className="add-product-button" onClick={() => setIsProductFormVisible(prevVisibility => !prevVisibility)}>Add A Product</button></p>
      }
    </main>
  );
};

export default Main;
