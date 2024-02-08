export const getCart = async (signal) => {
  const response = await fetch("/api/cart", {
    method: "get",
    signal: signal,
  });

  return await response.json();
}

export const addToCart = async (productIdToAdd) => {
  const response = await fetch(`/api/add-to-cart`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productIdToAdd),
  });

  return await response.json()
}