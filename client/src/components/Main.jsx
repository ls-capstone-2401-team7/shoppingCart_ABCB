import Product from "./Product.jsx";
import AddProductForm from "./AddProductForm.jsx";

const Main = ({products, isProductFormVisible, onSubmit, onAddProductSubmit, onCancel, onDelete, onShowProductForm}) => {
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {products.map((product) => {
            return (
              <Product key={product._id} {...product} onSubmit={onSubmit} onDelete={onDelete}/>
            );
          })}
        </ul>
      </div>
      {isProductFormVisible ? (
        <AddProductForm onSubmit={onAddProductSubmit} onCancel={onCancel}/>
      ) : (
        <p>
          <button
            className="add-product-button"
            onClick={onShowProductForm}
          >
            Add A Product
          </button>
        </p>
      )}
    </main>
  );
};

export default Main;
