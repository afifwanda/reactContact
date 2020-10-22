import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Fade} from 'react-awesome-reveal';
import '../Styles/admin.style.css';
import Navbar from '../Components/Navbar.component';
import Search from '../Components/search.component';
import Card from '../Components/Card.component'

function Admin(){

  return(
  <>
    <Navbar/>
    <Search/>
    <div className='admin-container'>
      <div className='big-container'>
        <div className='card-container'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </>  
  )

}

export default Admin