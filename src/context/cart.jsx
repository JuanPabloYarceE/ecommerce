import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

//1. Crear contexto
export const CartContext = createContext();


function useCartReducer(){
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    const minusToCart = (product) =>
    dispatch({
      type: "MINUS_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

    return {state, addToCart,minusToCart, removeFromCart, clearCart}
}
//2. Crear provider
export function CartProvider({ children }) {
  const{state, addToCart,minusToCart, removeFromCart, clearCart} = useCartReducer();
  
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart,minusToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
