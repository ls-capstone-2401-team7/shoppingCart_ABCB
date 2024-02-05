import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Header),
    React.createElement(Main),
  );
};

const Header = () => {
  return React.createElement(
    "header",
    null,
    React.createElement("h1", null, "The Shop!"),
    React.createElement(
      "div",
      { className: "cart" },
      React.createElement("h2", null, "Your Cart"),
      React.createElement("p", null, "Your cart is empty"),
      React.createElement("p", null, "Total: $0"),
      React.createElement(
        "button",
        { className: "checkout", disabled: true },
        "Checkout",
      ),
    ),
  );
};

const Main = () => {
  return React.createElement(
    "main",
    null,
    React.createElement(
      "div",
      { className: "product-listing" },
      React.createElement("h2", null, "Products"),
      React.createElement(
        "ul",
        { className: "product-list" },
        React.createElement(Product, {
          title: "Amazon Kindle E-reader",
          price: 79.99,
          quantity: 5,
        }),
        React.createElement(Product, {
          title: "Apple 10.5-Inch iPad Pro",
          price: 649.99,
          quantity: 2,
        }),
        React.createElement(Product, {
          title: "Yamaha Portable Keyboard",
          price: 155.99,
          quantity: 0,
        }),
      ),
    ),
  );
};

const Product = ({ title, price, quantity }) => {
  let disabled = quantity === 0 ? true : false;

  return React.createElement(
    "li",
    { className: "product" },
    React.createElement(
      "div",
      { className: "product-details" },
      React.createElement("h3", null, title),
      React.createElement("p", { className: "price" }, `$${price}`),
      React.createElement(
        "p",
        { className: "quantity" },
        `${quantity} left in stock`,
      ),
      React.createElement(
        "div",
        { className: "actions product-actions" },
        React.createElement(
          "button",
          { className: "add-to-cart", disabled: disabled },
          "Add to Cart",
        ),
        React.createElement("button", { className: "edit" }, "Edit"),
      ),
      React.createElement(
        "button",
        { className: "delete-button" },
        React.createElement("span", null, "X"),
      ),
    ),
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));
