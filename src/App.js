import './App.css';
import React, { useContext, useEffect } from 'react';
import { Route, Switch , Redirect} from 'react-router-dom';
import Products from './components/Products';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Home from './components/Home';
import Header from './components/layouts/Header';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { auth } from './Firebase';
import ShoppingContext from './context/shopping/shoppingContext'
import Checkout from './components/Checkout';
import Payment from './components/Payment';

const promise = loadStripe("pk_test_51N4QtpLVtgU5sOvyXEKc6moErkuaMc2zJLUDoCELBFmln9IV1cwfSntnlwmbqqMskZmuyLnjwmGfCKCMXPY3FStg00KRk3balc")

function App() {

  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("isLoggedIn");

  //   if(userInfo === 1) {
  //     setIsLoggedIn(true);
  //   }
  // }, [])

  // function loginHandler(email, password) {
  //   localStorage.setItem("isLoggedIn", 1);
  //   setIsLoggedIn(true);
  // }

  // function logoutHandler() {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // }

  const shoppingContext = useContext(ShoppingContext);
  const {setUser} = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        setUser(authUser)
      }else {
        setUser(null)
      }
    })
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact> 
            <Redirect to="/home"/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/products" exact>
            <Products/>
          </Route>

          <Route path="/products/:id">
            <ProductDetails/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
             <Payment/>
            </Elements> 
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </main>
     
    </>
  );
}

export default App;
