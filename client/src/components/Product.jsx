const Product = ({
  title,
  price,
  quantity,
  _id,
  onDelete,
  onShowEditForm,
  onAddProductToCart,
}) => {
  let disabled = quantity === 0 ? true : false;

  const handleDelete = () => {
    onDelete(_id);
  };

  const handleAddProductToCart = () => {
    onAddProductToCart(_id);
  };

  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button
          className="add-to-cart"
          onClick={handleAddProductToCart}
          disabled={disabled}
        >
          Add to Cart
        </button>
        <button className="edit" onClick={onShowEditForm}>
          Edit
        </button>
      </div>
      <button className="delete-button" onClick={handleDelete}>
        <span>X</span>
      </button>
    </div>
  );
};

export default Product;
