import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/croods.png';
import '../Styles/home.style.css';
import Button from '../Components/Button.component';
import {Fade} from 'react-awesome-reveal';

function Home(){
  
  return(
    <div className='home-container'>
      <Fade triggerOnce duration={1000}>
        <div className='left-container'>
          <div className='sub-left-container'>
            <div className='title-container'>
              <h1>Kontakt!</h1>
            </div>
            <div className='text-container'>
              <h2>Organized your contact easy like 1,2,3</h2>
            </div>
            <div className='button-container'>
              <Link to='/Login'>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--medium'
              >Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='right-container'>
          <div className='image-container'>
            <img className='image-homepage' src={image} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Home