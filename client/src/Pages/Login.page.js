import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/login.style.css';
import {loginUser} from '../Store/action';
import { Bounce } from 'react-awesome-reveal';
import image from '../assets/Hello.png';

function Login(){
  const [username,setUsername] = useState(null);
  const [password,setPassword] = useState(null);
  const [warning,setWarning] = useState(false);

  const history = useHistory();


  function loginCheck(){
    const token = localStorage.getItem('token')
    if(token === 'myToken'){
      history.push('/admin')
    } else{
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      },5000);
    }
  }

  function handleLogin(username,password){
    loginUser(username,password);
    loginCheck()
  }


  return(
    <div className='login-container'>
 
      <div className='inner-box'>
        <div className='left-container'>
        <div className='image-container'>
            <img className='image-logins' alt='img' src={image} />
          </div>
        </div>
        <div className='right-container'>
          <div className='wrapper-right'>
            <div className='login-title-container'>
              <h1>Welcome Back !</h1>
              {warning ? 
              <Bounce>
                <h5
                style={{color:'red'}}
                >wrong username/password!</h5>
              </Bounce>
               :
              <></>
              }
            </div>
              <div className='form-container'>
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="Enter Username" 
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type='password'
                    className="form-control" 
                    id="password" 
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)} 
                    required
                  />
                </div>
                <div className="login-button-container">
                    <button type="button" 
                    className="btn btn-warning"
                    onClick={()=>handleLogin(username,password)}
                    >Login
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login