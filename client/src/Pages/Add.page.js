import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addContact } from '../Store/action';
import image from '../assets/editing.png';
import Navbar from '../Components/Navbar.component';
import '../Styles/add.style.css';
import swal from 'sweetalert';

function Add(){

  const [id,setId] = useState(Date.now());
  const [check,setCheck] = useState(false);
  const [firstName,setFirstName] = useState(null);
  const [photo,setPhoto] = useState('N/A');
  const [lastName,setLastName] = useState(null);
  const [age,setAge] = useState(null);
  const baseUrl = 'https://secure-coast-32465.herokuapp.com';

  const dispatch = useDispatch();
  const history = useHistory();

  function uploadImage(data){
    fetch(`${baseUrl}/upload`,{
      method: "POST",
      body: data
      })
      .then(response=>response.json())
      .then(response=>{
        setPhoto(`${baseUrl}/${response.imageUrl}`);
        setCheck(true)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  const selectFiles = (event) => {
    let images = event.target.files[0]
    let data = new FormData();
    data.append("image",images,images.name);
    uploadImage(data)
  }


  const handleAdd = () => {
    swal({
      title: "Are you sure want to add?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willAdd) => {
      if (willAdd) {
        setCheck(false);
        dispatch(addContact(id,firstName,lastName,age,photo))
        history.push('/admin')
        swal("success!", {
          icon: "success",
        });
        setCheck(false);
      } else {
        swal("canceled!");
      }
    });
  }


  return(
    <>
      <Navbar/>
      <div className='add-container'>
      <div className='inner-box'>
        <div className='left-add-container'>
        <div className='image-container'>
            <img className='image-add' alt='img' src={image} />
          </div>
        </div>
        <div className='right-add-container'>
          <div className='wrapper-right'>
            <div className='login-title-container'>
              <h1>Add Contact</h1>
            </div>
              <div className='form-container'>
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter First Name" 
                    onChange={(e)=>setFirstName(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type='text'
                    className="form-control" 
                    placeholder="Enter Last Name"
                    onChange={(e)=>setLastName(e.target.value)}
                    required  
                  />
                </div>
                <div className="form-group">
                  <label>Profile Picture</label>
                  <input
                    type='file'
                    className="form-control-file"
                    onChange={selectFiles}
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type='text'
                    className="form-control" 
                    placeholder="Enter Age"
                    onChange={(e)=>setAge(e.target.value)}
                    required  
                  />
                </div>
                <div className="login-button-container">
                    <button type="button" 
                    className="btn btn-warning"
                    onClick={handleAdd}
                    >Add Contacts</button>
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