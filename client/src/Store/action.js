const baseUrl = 'https://simple-contact-crud.herokuapp.com/';

export const loginUser = (username,password) => {
  if(username === 'admin' && password === 'admin'){
    localStorage.setItem('token','myToken')
  } else {
    return false
  }
}

export const getData = () => {
  return async dispatch => {
    const result = await fetch(`${baseUrl}contact`)
    const dataResult = await result.json()
    dispatch({
      type: 'GET_CONTACT',
      payload: {
        contacts : dataResult.data
      }
    })
  }
}

export const addContact = (id,firstName,lastName,age,photo) => {
  let objId = {
    "id": id
  }
  let obj = {
    "firstName": firstName,
    "lastName": lastName,
    "age": age,
    "photo": photo
  }
  objId={...objId,...obj};
  return async dispatch => {
    const result = await fetch(baseUrl+"contact",{
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(obj)
    })
    dispatch({
      type: 'ADD_CONTACT',
      payload:{
        newContact : objId
      }
    })
  }
}

export const detailContact = (id) => ({
  type: 'DETAIL_CONTACT',
  payload: {
    id,
  }
})

export const editContact = (id,firstName,lastName,age,photo) => {
  let obj = {
    "firstName": firstName,
    "lastName": lastName,
    "age": age,
    "photo": photo
  }
  let objId = {
    "id": id.id
  }
  objId={...obj,...objId};
  return async dispatch => {
    const result = await fetch(baseUrl+"contact/"+id.id,{
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(obj)
    })
    dispatch({
      type: 'EDIT_CONTACT',
      payload:{
        editedContact : [objId]
      }
    })
  }
}

export const deleteContact = (id) => {
  return async dispatch => {
    const result = await fetch(baseUrl+"contact/"+id,{
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
    })
    const addResult = await result.json()
    dispatch({
      type: 'DELETE_CONTACT',
      payload:{
        deletedContact : id
      }
    })
  }
}