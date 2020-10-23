const initialState = {
  contact : [],
  detailContact : [],
}

const reducer = (state = initialState,action) =>{
  switch (action.type){
    case "GET_CONTACT":
      return{...state, contact : action.payload.contacts};
    case "ADD_CONTACT":
      console.log(action.payload.newContact)
      let newContacts = state.contact.concat(action.payload.newContact);
      console.log(newContacts,'ini contacts')
      return {...state, contact: newContacts}
    case "DETAIL_CONTACT":
      let newDetailContact = state.contact.filter(obj => {
        return obj.id === action.payload.id.id
      });
      return {...state, detailContact: newDetailContact}
    case "EDIT_CONTACT":
      console.log(action.payload.editedContact)
      let newEditedContact = state.contact.map(obj=>action.payload.editedContact.find(o=>o.id === obj.id)||obj);
      return {...state, article: newEditedContact}
    case "DELETE_CONTACT":
      let afterDeletedContact = state.contact.filter(function(el){
        return el.id !== action.payload.deletedContact;
      })
      return {...state, article: afterDeletedContact}
    default:
      return state
  }
}

export default reducer