export const getCart = async (signal) => {
  const response = await fetch("/api/cart", {
    method: "get",
    signal: signal,
  });

  return await response.json();
};

export const addToCart = async (productIdToAdd) => {
  const obj = { productId: productIdToAdd };
  const response = await fetch(`/api/add-to-cart`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return await response.json();
};

export const checkoutCart = async () => {
  await fetch("/api/checkout", {
    method: "post",
  });
};
