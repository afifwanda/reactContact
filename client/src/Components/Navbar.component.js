import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import '../Styles/navbar.style.css';

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory();

  const handleLogout = () => {
    swal({
      title: "Are you sure want to logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willLogout) => {
      if (willLogout) {
        localStorage.removeItem('token')
        history.push('/login')
        swal("success!", {
          icon: "success",
        });
      } else {
        swal("canceled!");
      }
    });
  }

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
              <Link to="/admin" className='nav-links' onClick={closeMobileMenu}>
                DASHBOARD
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/add" className='nav-links' onClick={closeMobileMenu}>
                ADD CONTACT
              </Link>
            </li>
            <li className='nav-item' onClick={handleLogout}>
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