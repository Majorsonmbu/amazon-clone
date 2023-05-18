import React, { useContext } from 'react'
import "./CheckoutProduct.css"
import ShoppingContext from '../context/shopping/shoppingContext'


export default function CheckoutProduct({id, image, title, rating, price, hideButton}) {
 
    const shoppingContext = useContext(ShoppingContext);
    const {removeFromBasket} = shoppingContext;

    function removeFromBasketHandler() {
        removeFromBasket({id: id});
    }

    return (
    <div className='checkout-product'>
      <img className='checkout-product-image' src={image} alt=''/>
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title} </p>

        <div className='checkout-product-rating'>
          {
            Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}> star</p>
              ))
          }
        </div>

        <p className='checkout-product-price'> 
            <small>$</small>
            <strong>{price}</strong> 
        </p>
        {!hideButton && <button onClick={removeFromBasketHandler}>Remove From Basket</button>}

      </div>

    </div>
  )
}

