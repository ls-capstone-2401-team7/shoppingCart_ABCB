import Cart from "./Cart.jsx";

const Header = ({cart}) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (<>
          <p>Your cart is empty</p> 
          <p>Total: $0</p>
        </>)
        : <Cart cart={cart} />}

        <button className="checkout" disabled>
          Checkout
        </button>
      </div>
    </header>
  );
};

export default Header;
