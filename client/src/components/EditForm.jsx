import { useState } from "react";

const EditForm = ({ productInfo, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(productInfo.title);
  const [price, setPrice] = useState(productInfo.price);
  const [quantity, setQuantity] = useState(productInfo.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productUpdate = { title, price, quantity };
    onSubmit(productUpdate, productInfo._id);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            onChange={(e) => setTitle(() => e.target.value)}
            value={title}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            onChange={(e) => setPrice(() => e.target.value)}
            value={price}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            onChange={(e) => setQuantity(() => e.target.value)}
            value={quantity}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
