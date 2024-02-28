import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () =>{
    const context = useContext(CartContext)

    if (context === undefined){
        throw new Error('Using context in a place where dont have perms')
    }

    return context
}