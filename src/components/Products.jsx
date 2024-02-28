import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
//import {Products} from '../mocks/products.json';

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {

          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img
                src="https://img2.rtve.es/i/?w=1600&i=1634549481092.jpg"
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button style={{backgroundColor: isProductInCart ? 'red' : '#09f'}} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                  {
                    isProductInCart
                    ? <RemoveFromCartIcon/>
                    : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
