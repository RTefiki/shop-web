import React,{useContext} from 'react'
import { ShopContext } from "../../context/shop-context";
import './Cart.css'




export const CartItem = (props) => {
       const {  id, name, price, image } = props.data;

       const { cartItems, addToCart, remuveFromCard } = useContext(ShopContext);

  return (
    <div key={id} className='cartItem'>
       <img src={image} alt={name} />
       <div  className="descriptions">
        <div>
           <h1 className="names">{name}</h1>
        </div>
        <p className="prices">Price: {price} €</p>
        <div className='countHandler'>
              <button onClick={() => remuveFromCard(id)}>-</button>
              <input  value={cartItems[id]} onChange={e => cartItems(e.target.value)} />
              <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
     
    </div>
  )
}
