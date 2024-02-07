import { useState } from "react";

const EditForm = ({ productInfo }) => {
  const [name, setName] = useState(productInfo.title);
  const [price, setPrice] = useState(productInfo.price);
  const [quantity, setQuantity] = useState(productInfo.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productUpdate = { title, price, quantity }; // update reference to name title
    onSubmit(productUpdate);
  };

  // need to add onSubmit prop to <EditForm /> in Products.jsx and pass it down

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            onChange={(e) => setName(() => e.target.value)}
            value={name}
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
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
