import Product from "./Product.jsx";
import AddProductForm from "./AddProductForm.jsx";
import { useState } from "react";
import EditableProduct from "./EditableProduct.jsx";

const Main = ({
  products,
  onSubmit,
  onAddProductSubmit,
  onDelete,
  onAddProductToCart,
}) => {
  const [isProductFormVisible, setIsProductFormVisible] = useState(false);

  const handleAddProductSubmit = async (requestedProduct) => {
    await onAddProductSubmit(requestedProduct);
    // handle showing the new product form
    setIsProductFormVisible(false);
  };

  // handle canceling a new product (i.e. don't show the new product form)
  const handleCancel = () => {
    setIsProductFormVisible(false);
  };

  // handle showing the new product form
  const handleShowProductForm = () => {
    setIsProductFormVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {products.map((product) => {
            return (
              <EditableProduct
                key={product._id}
                {...product}
                onSubmit={onSubmit}
                onDelete={onDelete}
                onAddProductToCart={onAddProductToCart}
              />
            );
          })}
        </ul>
      </div>
      {isProductFormVisible ? (
        <AddProductForm
          onSubmit={handleAddProductSubmit}
          onCancel={handleCancel}
        />
      ) : (
        <p>
          <button
            className="add-product-button"
            onClick={handleShowProductForm}
          >
            Add A Product
          </button>
        </p>
      )}
    </main>
  );
};

export default Main;
