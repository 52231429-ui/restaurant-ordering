 import "./App.css";
 import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Cart from "./Cart";
import Contact from "./contact";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  function addToCart(food) {
    setCart([...cart, food]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((food, i) => i !== index));
  }

  return (
    <div>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("menu")}>Menu</button>
        <button onClick={() => setPage("contact")}>Contact</button>
        <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
      </nav>

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "menu" && <Menu addToCart={addToCart} />}
      {page === "contact" && <Contact />}
      {page === "cart" && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;