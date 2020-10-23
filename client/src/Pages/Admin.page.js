import React, { useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getData} from '../Store/action';
import '../Styles/admin.style.css';
import Navbar from '../Components/Navbar.component';
import Search from '../Components/search.component';
import Card from '../Components/Card.component'

function Admin(){
  const [check,setCheck] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    setCheck(true)
    dispatch(getData())
    setTimeout(() => {
      setCheck(false)
    }, 100);
    console.log('ok')
  },[dispatch]);

  const listContact = useSelector(state=>state.reducer.contact)

  return(
  <>
    <Navbar/>
    <Search/>
    <div className='admin-container'>
      <div className='big-container'>
        <div className='card-container'>
          {
            listContact.map(element=>{
              return <Card 
              key = {element.id}
              id = {element.id}
              firstName = {element.firstName}
              lastName = {element.lastName}
              age = {element.age}
              photo = {element.photo}
            />
            })
          }
        </div>
      </div>
    </div>
  </>  
  )

}

export default Admin