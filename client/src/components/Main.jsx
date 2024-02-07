import Product from "./Product.jsx";
import AddProductForm from "./AddProductForm.jsx";
import { useState, useEffect } from "react";

const Main = () => {
  const [isProductFormVisible, setIsProductFormVisible] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products", {
          method: "get",
          signal: signal,
        });
        setProducts(await response.json());
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

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
      {isProductFormVisible ? (
        <AddProductForm />
      ) : (
        <p>
          <button
            className="add-product-button"
            onClick={() =>
              setIsProductFormVisible((prevVisibility) => !prevVisibility)
            }
          >
            Add A Product
          </button>
        </p>
      )}
    </main>
  );
};

export default Main;
