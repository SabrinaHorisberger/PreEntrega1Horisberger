import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const CartContext = createContext();

const CartComtextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart (item.id)) {
            const product = cart.find(prod => prod.id === item.id);
            product.quantity += quantity;
            setCart([...cart]); 

        }else {
            setCart([...cart, {...item, quantity:quantity}]);

        }

    }
    const removeItem = (id) => {
        const items = cart.filter(item => item.id !==id)
        setCart([...cart]);
    }

    const clear = () => {
       setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item=> item.id ===id);

    }

    const getTotalProducts = () => {
          return cart.reduce ((acumulador, item) => acumulador += item.quantity, 0);
    }

    const getSumProducts = () => {
        return cart.reduce ((acumulador, item) => {
            return acumulador += item.quantity * item.price, 0
        })
    }

    return(
        <CartContext.Provider value ={{ cart, addItem, removeItem, clear, getTotalProducts, getSumProducts}}>
         {children}
        </CartContext.Provider>
    )
}   

export default  CartComtextProvider;

