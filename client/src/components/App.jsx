import Header from "./Header.jsx";
import Main from "./Main.jsx";
import { useState, useEffect } from "react";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../services/products.js";
import { addToCart, getCart } from "../services/cart.js";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isProductFormVisible, setIsProductFormVisible] = useState(false);

  // get current cart
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchCart = async () => {
      try {
        const body = await getCart(signal);
        setCart(body);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchCart();

    return () => {
      controller.abort();
    };
  }, []);

  // get current products
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchProducts = async () => {
      try {
        const body = await getProducts(signal);
        setProducts(body);
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

  // handle editing a product
  const handleSubmit = async (requestedUpdate, id) => {
    try {
      const updatedProduct = await updateProduct(requestedUpdate, id);
      setProducts((prevProducts) => {
        return prevProducts.map((product) => {
          if (product._id === id) {
            return updatedProduct;
          }
          return product;
        });
      });
    } catch (e) {
      console.error(e);
    }
  };

  // handle adding a new product
  const handleAddProductSubmit = async (requestedProduct) => {
    try {
      const newProduct = await createProduct(requestedProduct);
      setProducts((prevProducts) => {
        return [...prevProducts, newProduct];
      });
      setIsProductFormVisible(false);
    } catch (e) {
      console.error(e);
    }
  };

  // handle canceling a new product (i.e. don't show the new product form)
  const handleCancel = () => {
    setIsProductFormVisible(false);
  };

  // handle deleting a product
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => {
        return prevProducts.filter((product) => product._id !== id);
      });
    } catch (e) {
      console.error(e);
    }
  };

  // handle showing the new product form
  const handleShowProductForm = () => {
    setIsProductFormVisible((prevVisibility) => !prevVisibility);
  };

  // START HERE --- NEED TO ADD THIS HANDLER TO THE MAIN COMPONENT
  const handleAddProductToCart = async (productId) => {
    try {
      const responseBody = await addToCart(productId);
      const updatedProduct = responseBody.product;
      const updatedCartItem = responseBody.item;
      // update products state
      setProducts((prevProducts) => {
        return prevProducts.map((product) => {
          if (product._id === updatedProduct._id) {
            return updatedProduct;
          }
          return product;
        });
      });
      // add item to cart state
      setCart((prevCart) => {
        let isAlreadyInCart = false;
        const newCart = prevCart.map((item) => {
          // update item quantity if already in the cart
          if (item.productId === updatedCartItem.productId) {
            isAlreadyInCart = true;
            return updatedCartItem;
          }
          return item;
        });

        // if we didn't already have the item in the cart, add the item to the cart
        if (!isAlreadyInCart) {
          newCart.append(updatedCartItem);
        }

        return newCart;
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Header cart={cart} />
      <Main
        products={products}
        isProductFormVisible={isProductFormVisible}
        onSubmit={handleSubmit}
        onAddProductSubmit={handleAddProductSubmit}
        onCancel={handleCancel}
        onDelete={handleDelete}
        onShowProductForm={handleShowProductForm}
      />
    </div>
  );
};

export default App;
