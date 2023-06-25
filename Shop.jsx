import React from 'react'
import { PRODUCTS } from '../../product'
import './Shop.css'
import { Product } from './Product'

export const Shop = () => {
  return (
    <div className='shop'>
     <div className='shopTitle'>
          <h1>ARTI Shopp</h1>
          <div  className='products'>
               {PRODUCTS.map((e, id) => (
                    <div key={id} >
                         <Product data={e}/>
                    </div> 


               ))}
          </div>
     </div>
     <div className='products'>

     </div>
    </div>
  )
}





