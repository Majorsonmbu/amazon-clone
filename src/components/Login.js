import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import "./Login.css"
import { auth } from '../Firebase'


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  
 // const emailRef = useRef();
  //const passwordRef = useRef();
  // useReducer manages complex component states
  // first parameter is the reducer function
  // second is the initial state


  

  function signIn(event) {
    event.preventDefault();
    //const enteredEmail = emailRef.current.value;
   // const enteredPassword = passwordRef.current.value;
    //localStorage.setItem("isLoggedIn", "1");
    //setIsLoggedIn(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(error => alert(error.message))

  }

  function register (event) {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      (auth) => {
        if(auth) {
          history.push("/");
        }
      }).catch(error => alert(error.message));
  }


  return (
    <div className='login'>
      <Link to="/">
        <img
          className='login-logo' 
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'/>
      </Link>

      <div className='login-container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type='text' onChange={e => setEmail(e.target.value)} value={email}/>

          <h5>Password</h5>
          <input type='password' onChange={e => setPassword(e.target.value)} value={password}/>

          <button onClick={signIn} type='submit' className='login-submit'>Sign In</button>
        </form>
        <p>By signing-in you agree to the AMAZON FAKE CLONE 
          Conditions of Use & Sale. Please see our Privacy Notice,
          our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login-register-button'> Create your Amazon Account </button>
      </div>
    </div>
  )

}

