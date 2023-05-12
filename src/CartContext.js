import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {

    const [items, setItems] = useState([]);

    const handleAddToCart = (name, price) => {
        setItems((prevState) => [...prevState, {name,price}])
        console.log(items)
    }

    return (
        <CartContext.Provider value={{items, handleAddToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;