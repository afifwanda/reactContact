import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/login.style.css';
import image from '../assets/Hello.png';

function Login(){
  return(
    <div className='home-container'>
      <div className='inner-box'>
        <div className='left-container'>
        <div className='image-container'>
            <img className='image-login' src={image} />
          </div>
        </div>
        <div className='right-container'>
          <div className='wrapper-right'>
            <div className='login-title-container'>
              <h1>Welcome Back !</h1>
            </div>
              <div className='form-container'>
              <form>
                <div className="form-group">
                  <label for="Title">Username</label>
                  <input 
                    type="title" 
                    className="form-control" 
                    id="title" 
                    placeholder="Enter Title" 
                  />
                </div>
                <div className="form-group">
                  <label for="content">Password</label>
                  <input
                    className="form-control" 
                    rows="3" id="content" 
                    placeholder="Enter Content" 
                  />
                </div>
                <div className="login-button-container">
                  <button type="button" className="btn btn-warning">Login</button>
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