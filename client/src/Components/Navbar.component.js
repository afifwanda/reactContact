import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import '../Styles/navbar.style.css';

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Kontakt !
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/articles" className='nav-links' onClick={closeMobileMenu}>
                DASHBOARD
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/add" className='nav-links' onClick={closeMobileMenu}>
                ADD CONTACT
              </Link>
            </li>
            <li className='nav-item'>
              <div className='nav-links'>
                LOGOUT
              </div>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar