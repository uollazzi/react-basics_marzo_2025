import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { useState } from "react";

const App2 = () => {
  const [cartItems, setCartItems] = useState(["Ciabatte", "Pallone"]);

  return (
    <div className="max-w-4xl mx-auto">
      <NavBar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => setCartItems([])}
        onRemove={(p) => setCartItems(cartItems.filter((i) => i != p))}
      />
    </div>
  );
};

export default App2;
