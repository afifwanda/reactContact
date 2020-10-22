import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/editing.png';
import Navbar from '../Components/Navbar.component';
import '../Styles/add.style.css';

function Add(){
  return(
    <>
      <Navbar/>
      <div className='add-container'>
      <div className='inner-box'>
        <div className='left-container'>
        <div className='image-container'>
            <img className='image-login' src={image} />
          </div>
        </div>
        <div className='right-container'>
          <div className='wrapper-right'>
            <div className='login-title-container'>
              <h1>Add Contact</h1>
            </div>
              <div className='form-container'>
              <form>
                <div className="form-group">
                  <label for="Title">First Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="Enter Username" 
                  />
                </div>
                <div className="form-group">
                  <label for="content">Last Name</label>
                  <input
                    type='password'
                    className="form-control" 
                    id="password" 
                    placeholder="password" 
                  />
                </div>
                <div className="form-group">
                  <label for="content">Profile Picture</label>
                  <input
                    type='file'
                    className="form-control-file"
                  />
                </div>
                <div className="form-group">
                  <label for="content">Age</label>
                  <input
                    type='password'
                    className="form-control" 
                    id="password" 
                    placeholder="password" 
                  />
                </div>
                <div className="login-button-container">
                  <Link to='/admin'>
                    <button type="button" className="btn btn-warning">Login</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>  
  )
}

export default Add