import CartLine from "./CartLine.jsx";

const Cart = ({ cart }) => {
  const cartTotal = cart.reduce((sum, cartItem) => {
    return (sum += cartItem.price * cartItem.quantity); // may need to coerce into numbers?
  }, 0);

  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem) => {
          return <CartLine key={cartItem._id} item={cartItem} />;
        })}
        {/* <tr>
        <td>Amazon Kindle E-reader</td>
        <td>2</td>
        <td>$79.99</td>
      </tr>
      <tr>
        <td>Apple 10.5-Inch iPad Pro</td>
        <td>1</td>
        <td>$649.99</td>
      </tr> */}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            Total: ${cartTotal}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Cart;
