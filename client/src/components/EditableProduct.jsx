import EditForm from "./EditForm.jsx";
import Product from "./Product.jsx";
import { useState } from "react";

const EditableProduct = ({
  title,
  price,
  quantity,
  _id,
  onSubmit,
  onDelete,
  onAddProductToCart,
}) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleShowEditForm = () => {
    setIsEditFormVisible(true);
  };

  const handleSubmit = (productUpdate, id) => {
    onSubmit(productUpdate, id);
    setIsEditFormVisible(false);
  };

  const handleCancel = () => {
    setIsEditFormVisible(false);
  };

  return (
    <li className="product">
      <Product
        title={title}
        price={price}
        quantity={quantity}
        _id={_id}
        onDelete={onDelete}
        onShowEditForm={handleShowEditForm}
        onAddProductToCart={onAddProductToCart}
      />
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

export default EditableProduct;
