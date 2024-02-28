import { useId, useState } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, minusToCart } = useCart();
  const [total, setTotal] = useState(0);

  const calculateCompra = () => {
    const totalCompra = cart.reduce((accumulator, item) => {
      const { price, quantity } = item;
      const subtotal = price * quantity;
      return accumulator + subtotal;
    }, 0);
    console.log(totalCompra);
    setTotal(totalCompra);
  };

  function CartItem({ price, title, quantity, addToCart, minusToCart }) {
    return (
      <li>
        <img
          src="https://img2.rtve.es/i/?w=1600&i=1634549481092.jpg"
          alt="batman"
        />
        <div>
          <strong>{title}</strong> - ${price}
        </div>

        <footer>
          <small>Qty: {quantity}</small>
          {quantity > 1 && <button onClick={minusToCart}>-</button>}
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    );
  }

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              minusToCart={() => minusToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        {cart.length > 0 && (
          <button onClick={calculateCompra}>
            Comprar <CartIcon />
          </button>
        )}
        <p>
          {cart.length > 0 && total !== 0 && (
            <span>El valor de la compra es {total}</span>
          )}
        </p>
      </aside>
    </>
  );
}
