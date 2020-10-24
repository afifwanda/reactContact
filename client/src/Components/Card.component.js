import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../Store/action';
import {Fade} from 'react-awesome-reveal';
import swal from 'sweetalert';
import '../Styles/card.style.css';
import image from '../assets/user.png'

function Card(props){

  const dispatch = useDispatch();
  const history = useHistory();

  function handleDelete(id){
    console.log(id,'ini id')
    swal({
      title: "Are you sure want to delete",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deleteContact(id))
        history.push('/admin')
        swal("success!", {
          icon: "success",
        });
      } else {
        swal("canceled!");
      }
    });
  }

  return(
  <div className='card-wrapper'>
    <div className='main-card'>
      <div className='left-card'>
        <h1 className='first-name'>{props.firstName}</h1>
        <h2 className='last-name'>{props.lastName}</h2>
      </div>
      <div className='right-card'>
        <div>
          {
            props.photo !== 'N/A' ?
            <img className='card-image' alt='img' src={props.photo} /> :
            <img className='card-image'alt='img' src={image} />
          }
          
        </div>
      </div>
    </div>
    <div className='action-container'>
      <Link to={{ pathname: `/edit/${props.id}`, 
      state: { 
        firstNameDetail: props.firstName,
        lastNameDetail: props.lastName,
        photoDetail: props.photo,
        ageDetail: props.age
      }}}
      ><button type="button" className="btn btn-warning">Edit</button></Link>
      <button type="button" className="btn btn-danger" onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
  </div>
  )

}

export default Card