import React, {useContext} from 'react'
import ShoppingContext from "../context/shopping/shoppingContext"
import "./Subtotal.css"
import { useHistory } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'

export default function Subtotal() {

  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const {basket, getBasketTotal} = shoppingContext;
    

  return (
    <div className='subtotal'>
      <CurrencyFormat renderText={(value) => 
        <>
         <p>
            Subtotal ({basket?.length} items):<strong>{value}</strong>      
        </p>
        <small className='subtotal-gift'>
            <input type='checkbox' />
            This order contains a gift
        </small>
        </>
        }

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>

    </div>
  )
}

