import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import ShoppingContext from '../../context/shopping/shoppingContext'
import {auth} from "../../Firebase"

export default function Header() {

  const shoppingContext = useContext(ShoppingContext);
  const {basket, user} = shoppingContext;  

  function handleAuthentication() {
    if(user) {
      auth.signOut();
    }
  }
    return (
      
      <header className='header'>
        <Link to="/">
          <img className='header-logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt='amazon logo'
          />
        </Link>
        
  
        <div className='header-search'>
          <input className='header-input' type="text"/>
          <SearchIcon className="search-icon"/>
        </div>
  
        <div className='header-nav'>
          <Link to={!user  && "/login"}>
                <div className='header-option' onClick={handleAuthentication}>
                  <span className='header-option-one'>Hello {!user? "Guest" : user.email}</span>
                  <span className='header-option-two'>{!user  ? "Sign In" : "Sign Out"}</span>
                </div>
          </Link>
            
          
  
            <div className='header-option'>
              <span className='header-option-one'>Returns</span>
              <span className='header-option-two'>& Orders</span>
            </div>
  
            <div className='header-option'>
              <span className='header-option-one'>Your</span>
              <span className='header-option-two'>Prime</span>
            </div>
            
            <Link to='/checkout'>
            <div className='header-option-basket'>
              <ShoppingBasketIcon className=""/>
              <span className='header-option-two header-basket-count'>{basket?.length}</span>
            </div>
            </Link>
           
        </div>
      </header>
    )
  
}


