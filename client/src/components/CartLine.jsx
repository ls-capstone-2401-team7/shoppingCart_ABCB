const CartLine = ({item}) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
    </tr>
  );
};

export default CartLine;
