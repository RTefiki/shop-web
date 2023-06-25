import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './Shop.css'



export const Product = (props) => {
  const {  id, name, price, image } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
  
  return (
    <div className="product" key={id}>
      <img src={image} alt={name} />
      <div  className="description">
           <h2 className="name">{name}</h2>
        
           <p className="price">{price}€</p>
      </div>
     <button onClick={() => addToCart(id)} className="addToCartBttn">
      Add to card
      {cartItemAmount > 0 &&  <div className="contProduct">{ cartItemAmount} </div> }
      </button>
    
      
    </div>
   
  );
};
