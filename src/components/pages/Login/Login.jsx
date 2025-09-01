import React from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../../fireBase'
import netflix_spinner from '../../../assets/netflix_spinner.gif'
const Login = () => {

const [signState, setSignState] = useState('Sign In')

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false);

const user_auth = async (e) => {
  e.preventDefault();
  setLoading(true);
  if (signState === 'Sign In') {
   
    await login(email, password);
  }
  else { 
    await signup(name, email, password);
  }
  setLoading(false);
}

  return (


    loading ? <div className='loading-spinner'>
      <img src={netflix_spinner} alt="Loading..." />
    </div> :




    <div className='login'>
      <img src={logo} alt="Logo" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState ==='Sign Up'?<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />:<></>}
          
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In'? <p>New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up Now</span></p>
           : <p>Already have Account? <span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login