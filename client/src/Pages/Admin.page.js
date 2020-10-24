import React, { useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getData,findContact} from '../Store/action';
import '../Styles/admin.style.css';
import Navbar from '../Components/Navbar.component';
import Button from '../Components/Button.component';
import Card from '../Components/Card.component'

function Admin(){
  const [check,setCheck] = useState(false);
  const [isSearch,setIsSearch] = useState(false);
  const [keyword,setKeyword] = useState(null);

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
  const searchedContact = useSelector(state=>state.reducer.searchContact)
  console.log(searchedContact)
  let contacts = listContact

  function handleSearch(keyword){
    dispatch(findContact(keyword))
    setIsSearch(true)
  }

  const handleBack = () => {
    setIsSearch(false);
    setKeyword(null);
    contacts = listContact
  }

  if(isSearch){contacts=searchedContact}

  return(
  <>
    <Navbar/>
    <div className='search-container'>
      <input 
        type="text" 
        className="form-control search" 
        id="search" 
        placeholder="Input First Name" 
        onChange={(e)=>setKeyword(e.target.value)}
      />
      <i className='fa fa-search'
        onClick={()=>handleSearch(keyword)}
      />
      {isSearch ? 
        <Button
        className='btn-primary'
        buttonStyle='btn--outline'
        buttonSize='btn--small'
        onClick={handleBack}
        >
        Back</Button> :
        <></>
      }
    </div>
    <div className='admin-container'>
      <div className='big-container'>
        <div className='card-container'>
          {
            contacts.map(element=>{
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