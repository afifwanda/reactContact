const initialState = {
  contact : [],
  detailContact : [],
  searchContact : [],
}

const reducer = (state = initialState,action) =>{
  switch (action.type){
    case "GET_CONTACT":
      return{...state, contact : action.payload.contacts};
    case "ADD_CONTACT":
      let newContacts = state.contact.concat(action.payload.newContact);
      return {...state, contact: newContacts}
    case "DETAIL_CONTACT":
      let newDetailContact = state.contact.filter(obj => {
        return obj.id === action.payload.id.id
      });
      return {...state, detailContact: newDetailContact}
    case "EDIT_CONTACT":
      let newEditedContact = state.contact.map(obj=>action.payload.editedContact.find(o=>o.id === obj.id)||obj);
      return {...state, contact: newEditedContact}
    case "DELETE_CONTACT":
      console.log()
      let afterDeletedContact = state.contact.filter(function(el){
        return el.id !== action.payload.deletedContact;
      })
      console.log(afterDeletedContact)
      return {...state, contact: afterDeletedContact}
    case "SEARCH_CONTACT":
      let newResultContact = state.contact.filter(obj => {
        return obj.firstName.toLowerCase().match(action.payload.keyword.toLowerCase())
      });
      return {...state, searchContact: newResultContact};
    default:
      return state
  }
}

export default reducer