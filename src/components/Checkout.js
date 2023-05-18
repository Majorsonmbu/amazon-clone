import React from 'react'
import "./Checkout.css"
import { useContext } from 'react'
import ShoppingContext from "../context/shopping/shoppingContext"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

export default function Checkout () {

    const shoppingContext = useContext(ShoppingContext);
    const {basket, user} = shoppingContext;
  return (
    <div className='checkout'>
      <div className='checkout-leftside'>
        <img className='checkout-ad'
            src="https://images-na.
        ssl-images-amazon.com/images/G/02/
        UK_CCMP/TM/0CC_Amazon1.
        _CB423492668_.jpg" alt=""/>

        <div>
            <h3>Hello, {user ?.email}</h3>
            <h2 className='checkout-title'>Your Shopping Cart</h2>
            {
                basket.map(item=> 
                    (
                    <CheckoutProduct 
                        key={item.id}
                        id={item.id} 
                        title={item.title}
                        rating={item.rating}
                        image={item.image}
                        price={item.price}
                     />
                    )
                )
            }
        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal/>
      </div>
    </div>
  )
}


