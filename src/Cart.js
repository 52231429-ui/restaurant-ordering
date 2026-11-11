 function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, food) => sum + food.price, 0
  );

  return (
    <div className="cart-page">
      <div className="cart-box">
        <h1>Your Shopping Cart</h1>
        <p>Review your delicious meals!</p>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>🛒</h2>
            <p>Your cart is empty.</p>
            <p>Add some food from our menu!</p>
          </div>
        ) : (
          cart.map((food, index) => (
            <div className="cart-item" key={index}>
              <img
                src={"/images/" + food.image}
                alt={food.name}
              />

              <div>
                <h3>{food.name}</h3>
                <p>${food.price}</p>
              </div>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))
        )}

        <div className="cart-total">
          <h2>Total: ${total}</h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;