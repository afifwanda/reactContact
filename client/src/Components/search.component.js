import React, { useEffect } from 'react';
import '../Styles/admin.style.css';

function Search(){

  return(
  <>
  <div className='search-container'>
    <input 
      type="text" 
      className="form-control search" 
      id="search" 
      placeholder="Input Name" 
    />
    <i className='fa fa-search' />
  </div>
  </>  
  )

}

export default Search