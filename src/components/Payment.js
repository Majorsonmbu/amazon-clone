import React from 'react'
import "./Payment.css"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import ShoppingContext from "../context/shopping/shoppingContext"


export default function Payment() {

    const shoppingContext = useContext(ShoppingContext);
    const {basket, user} = shoppingContext;

  return (
    <div className='payment'>
        <div className='payment-container'>
            <h1>
                Checkout <Link to={'/checkout'}>{basket?.length} items</Link>
            </h1>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment-address'>
                    <p>{user?.email}</p>
                    <p> 123 ReactJS Road</p>
                    <p> Cape Town, South Africa</p>
                </div>
            </div>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review items and delivery</h3>
                </div>

                <div className='payment-items'>
                    {basket.map((item) => (
                        <CheckoutProduct 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>

                <div className='payemnt-details'>
                    {/* {STripe code will go here} */}
                </div>
            </div>
        </div>
    </div>
  )
}

