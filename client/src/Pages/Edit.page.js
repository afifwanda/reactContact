import React, { useState } from 'react';
import { useHistory,useParams,useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { editContact } from '../Store/action';
import image from '../assets/editing.png';
import Navbar from '../Components/Navbar.component';
import '../Styles/add.style.css';
import swal from 'sweetalert';

function Edit(){
  const contactId = useParams()
  const data = useLocation()

  const [check,setCheck] = useState(false);
  const [firstName,setFirstName] = useState(data.state.firstNameDetail);
  const [photo,setPhoto] = useState(data.state.photoDetail);
  const [lastName,setLastName] = useState(data.state.lastNameDetail);
  const [age,setAge] = useState(data.state.ageDetail);
  const baseUrl = 'https://secure-coast-32465.herokuapp.com';

  const history = useHistory();
  const dispatch = useDispatch();

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


  const handleEdit = () => {
    swal({
      title: "Are you sure want to edit?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willAdd) => {
      if (willAdd) {
        setCheck(false);
        dispatch(editContact(contactId,firstName,lastName,age,photo))
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
              <h1>Edit Contact</h1>
            </div>
              <div className='form-container'>
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    defaultValue = {data.state.firstNameDetail}
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
                    defaultValue = {data.state.lastNameDetail}
                    onChange={(e)=>setLastName(e.target.value)}
                    required  
                  />
                </div>
                <div className="form-group">
                  <label>Profile Picture</label>
                  <img className='preview-image' alt='img' src={photo} />
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
                    defaultValue = {data.state.ageDetail}
                    onChange={(e)=>setAge(e.target.value)}
                    required  
                  />
                </div>
                <div className="login-button-container">
                    <button type="button" 
                    className="btn btn-warning"
                    onClick={handleEdit}
                    >Edit Contacts</button>
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

export default Edit