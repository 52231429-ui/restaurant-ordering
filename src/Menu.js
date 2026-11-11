function Menu({ addToCart }) {
  const foods = [
    { id: 1, name: "Burger", price: 5, image: "burger.jpg" },
    { id: 2, name: "Pizza", price: 8, image: "pizza.jpg" },
    { id: 3, name: "Chicken Sandwich", price: 6, image: "chicken.jpg" },
    { id: 4, name: "French Fries", price: 3, image: "fries.jpg" }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Menu</h1>

      <div className="menu-container">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img
              src={"/images/" + food.image}
              alt={food.name}
            />

            <h3>{food.name}</h3>
            <p>Price: ${food.price}</p>

            <button onClick={() => addToCart(food)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;