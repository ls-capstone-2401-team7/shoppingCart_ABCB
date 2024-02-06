import EditForm from "./EditForm.jsx";
import { useState } from "react";

const Product = ({ title, price, quantity }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  let disabled = quantity === 0 ? true : false;

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
        <button className="delete-button">
          <span>X</span>
        </button>
      </div>
      {isEditFormVisible && <EditForm />}
    </li>
  );
};

export default Product;
