import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    numeroCarrito: 0
})

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const numeroCarrito = cart.reduce((acc, prod) => acc + prod.quantity, 0);
    const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart((prev) => [...prev, {...item, quantity}])
        } else {
            alert('El producto ya fue agregado');
        }
    }
    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }
    const clearCart = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const increaseQuantity = (itemId) => {
        setCart((prevCart) =>
          prevCart.map((prod) => prod.id === itemId
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod
          )
        );
      };
      const decreaseQuantity = (itemId) => {
        setCart((prevCart) =>
          prevCart
            .map((prod) =>
              prod.id === itemId
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
            )
            .filter((prod) => prod.quantity > 0)
        );
      };


    return(
        <CartContext.Provider value= {{cart, addItem, removeItem, clearCart, numeroCarrito, increaseQuantity, decreaseQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )

}