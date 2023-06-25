import React,{createContext, useState} from 'react'
import { PRODUCTS } from '../product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
       let cart= {};
       for( let i = 1; i < PRODUCTS.length + 1; i++) {
              cart[i] = 0;
       }
       return cart;

}

export const ShopContextProvider = (props) => {
       const [cartItems, setCartItems] = useState(getDefaultCart()); 
       
       const getTotalCart = () => {
              let totalAmount = 0;
              for(const item in cartItems) {
                if(cartItems[item] > 0) {
                       let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                       totalAmount += cartItems[item] * itemInfo.price;
                 }
                     
              }
              
            return totalAmount;
              
       }
           
       const addToCart = (item) => {
              setCartItems((prev) => ({...prev, [item]: prev[item] + 1}));
       }

       const remuveFromCard = (item) => {
              setCartItems((prev) => ({...prev, [item]: prev[item] - 1}));
       }
       const updateCartItems = (newAmaunt, itemId) => {
              setCartItems((prev) => ({...prev, [itemId]: newAmaunt}))
       }

       const contextValue = {cartItems, addToCart, remuveFromCard, updateCartItems,getTotalCart};
       
  return (
    <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
  )
};
