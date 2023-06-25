import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom"; 

export const Cart = () => {
  const { cartItems, getTotalCart } = useContext(ShopContext);

  const totalAmountIs = getTotalCart();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Wagenkorp</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          } else{
            return null;
          }
          
        })}
      </div>

     {(totalAmountIs > 0) ?<div className="checkout">
        <p>Total Price:{totalAmountIs} €</p>
        <button 
        onClick={() => navigate('/')}
        className="btn">Continue Shoping</button>
        <button 
        
        className="btn">CheckOUT</button>
      </div>
      : <div>
        <h1> Deine einkauf wager ist leer</h1>
        <img width={400}
        src="https://d3m4cch8el4nlz.cloudfront.net/einkaufswagen-wanzl-el-150--119704--470x470--p.jpg" alt="wage" />
      </div>}
    </div>
  );
};
