import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Fade} from 'react-awesome-reveal';
import '../Styles/card.style.css';

function Card(){

  return(
  <div className='card-wrapper'>
    <div className='main-card'>
      <div className='left-card'>
        <h1>Adam</h1>
        <h2 style={{marginLeft:'15%',fontWeight:'bold',fontSize:'2.5rem'}}>Smith</h2>
      </div>
      <div className='right-card'>
        <div>
          <img className='card-image' src='https://images.newindianexpress.com/uploads/user/imagelibrary/2020/3/6/w1200X800/Ronaldinho_AP.jpg' />
        </div>
      </div>
    </div>
    <div className='action-container'>
      <button type="button" className="btn btn-warning">Edit</button>
      <button type="button" className="btn btn-danger">Delete</button>
    </div>
  </div>
  )

}

export default Card