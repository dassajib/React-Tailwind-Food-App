import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const handleAddToCart = (name, price, quantity) => {
    const foundValue = items.find((el) => el.name === name);
    if (foundValue) {
      const a = items.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setItems([...a]);
    } else {
      const newObj = {
        name,
        price,
        quantity,
      };
      setItems((prevState) => [...prevState, newObj]);
    }
  };

  return (
    <CartContext.Provider value={{ items, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
