export const getProducts = async (signal) => {
  const response = await fetch("/api/products", {
    method: "get",
    signal: signal,
  });

  return await response.json();
}

export const updateProduct = async (requestedUpdate, id) => {
  const response = await fetch(`/api/products/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestedUpdate),
  });

  return await response.json()
}

export const createProduct = async (requestedProduct) => {
  const response = await fetch(`/api/products`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestedProduct),
  });

  return await response.json()
}

export const deleteProduct = async (id) => {
  await fetch(`/api/products/${id}`, {
    method: "delete",
  });

  return
}