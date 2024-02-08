import EditForm from "./EditForm.jsx";
import { useState } from "react";

const Product = ({ title, price, quantity, _id, onSubmit, onDelete }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  let disabled = quantity === 0 ? true : false;

  const handleSubmit = (productUpdate, id) => {
    onSubmit(productUpdate, id);
    setIsEditFormVisible(false);
  };

  const handleCancel = () => {
    setIsEditFormVisible(false);
  };

  const handleDelete = () => {
    onDelete(_id);
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" disabled={disabled}>
            Add to Cart
          </button>
          <button
            className="edit"
            onClick={() =>
              setIsEditFormVisible((prevVisibility) => !prevVisibility)
            }
          >
            Edit
          </button>
        </div>
        <button className="delete-button" onClick={handleDelete}>
          <span>X</span>
        </button>
      </div>
      {isEditFormVisible && (
        <EditForm
          productInfo={{ title, price, quantity, _id }}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </li>
  );
};

export default Product;
