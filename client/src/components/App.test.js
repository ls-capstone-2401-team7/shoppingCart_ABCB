/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { findByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {
  getProducts,
  updateProduct,
  createProduct,
} from "../services/products";
import { getCart } from "../services/cart";

jest.mock("../services/products.js");
jest.mock("../services/cart.js");

afterEach(() => {
  jest.resetAllMocks();
});

const mockProductsData = [
  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
];

const mockCartData = [
  {
    _id: "51d754d72092473333a809e1",
    title: "Mac Mini",
    price: 850,
    quantity: 2,
    productId: "51d754d72092473333a809e1",
  },
];

const mockUpdatedProductData = {
  id: 1,
  title: "grape",
  quantity: 5,
  price: 79.99,
};

const mockAddedProductData = {
  id: 2,
  title: "orange",
  quantity: 43,
  price: 89.99,
};

test("Loads products from server", async () => {
  getProducts.mockResolvedValue(mockProductsData);
  getCart.mockResolvedValue(mockCartData);
  render(<App />);
  const productTitle = await screen.findByRole("heading", {
    level: 3,
    name: "Amazon Kindle E-reader",
  });
  expect(productTitle).toBeInTheDocument();
});

test("Loads cart from server", async () => {
  getProducts.mockResolvedValue(mockProductsData);
  getCart.mockResolvedValue(mockCartData);
  render(<App />);
  const cartItemTitle = await screen.findByRole("cell", {
    name: "Mac Mini",
  });
  expect(cartItemTitle).toBeInTheDocument();
});

test("Edits are rendered from server", async () => {
  // setup and mock functions
  getProducts.mockResolvedValue(mockProductsData);
  getCart.mockResolvedValue(mockCartData);
  updateProduct.mockResolvedValue(mockUpdatedProductData);
  const user = userEvent.setup();
  render(<App />);

  // click the edit button
  const editButton = await screen.findByRole("button", {
    name: "Edit",
  });
  await user.click(editButton);

  // change name in edit form
  const nameInput = screen.getByRole("textbox", {
    name: "Product Name",
  });

  await user.type(nameInput, "grape");

  // click the update button
  const updateButton = screen.getByRole("button", {
    name: "Update",
  });
  await user.click(updateButton);

  // check if updated product is on screen
  const updatedProductLine = await screen.findByRole("heading", {
    level: 3,
    name: "grape",
  });

  expect(updatedProductLine).toBeInTheDocument();
});

test("New products from server are rendered", async () => {
  // setup and mock functions
  getProducts.mockResolvedValue(mockProductsData);
  getCart.mockResolvedValue(mockCartData);
  createProduct.mockResolvedValue(mockAddedProductData);
  const user = userEvent.setup();
  render(<App />);

  // click add a product button
  const addProductButton = await screen.findByRole("button", {
    name: "Add A Product",
  });
  await user.click(addProductButton);

  // change name in add product form
  const nameInput = screen.getByRole("textbox", {
    name: "Product Name:",
  });

  await user.type(nameInput, "orange");

  // change quantity in add product form
  const quantityInput = screen.getByRole("spinbutton", {
    name: "Quantity:",
  });

  await user.type(quantityInput, "43");

  // change price in add product form
  const priceInput = screen.getByRole("spinbutton", {
    name: "Price:",
  });

  await user.type(priceInput, "89.99");

  // click the add button in the add a product form
  const addButton = screen.getByRole("button", {
    name: "Add",
  });
  await user.click(addButton);

  // check if created product is on screen
  const createdProductLine = await screen.findByRole("heading", {
    level: 3,
    name: "orange",
  });

  expect(createdProductLine).toBeInTheDocument();
});

test("Existing product that is delete from server is not rendered", async () => {
  // setup and mock functions
  getProducts.mockResolvedValue(mockProductsData);
  getCart.mockResolvedValue(mockCartData);

  const user = userEvent.setup();
  render(<App />);

  // click the delete button
  const deleteButton = await screen.findByRole("button", {
    name: "X",
  });
  await user.click(deleteButton);

  // check that the delete product is not on the page
  const createdProductLine = screen.queryByRole("heading", {
    level: 3,
    name: "Amazon Kindle E-reader",
  });

  expect(createdProductLine).not.toBeInTheDocument();
});
