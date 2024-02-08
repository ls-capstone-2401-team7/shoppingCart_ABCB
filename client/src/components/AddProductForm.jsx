import { useState } from "react";

const AddProductForm = ({onSubmit, onCancel}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0); // check this initial value?
  const [quantity, setQuantity] = useState(0); // check this initial value?

  const handleSubmit = (e) => {
    e.preventDefault();
    const productUpdate = { title, price, quantity };
    onSubmit(productUpdate);
  };

  return (
    <div className="add-form visible">
      <p>
        <button className="add-product-button">Add A Product</button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            onChange={(e) => setTitle(() => e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            onChange={(e) => setPrice(() => e.target.value)}
            value={price}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            onChange={(e) => setQuantity(() => e.target.value)}
            value={quantity}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
