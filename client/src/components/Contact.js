import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import { deleteContact } from '../redux/actions/contactAction';
import { DELETE_CONTACT } from '../redux/actions/Type';
import { useDispatch } from 'react-redux';

const Contact = ({contact}) => {
    const dispatch = useDispatch()
    
  return (
    <Toast onClose={ () => dispatch(deleteContact(contact._id))}>
    <Toast.Header>
      <img  
      src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">{contact.name}</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body style={{color: "black"}}> 
        <div>{contact.age}</div>
        <div>{contact.email}</div>
        <div>{contact.address}</div>
    </Toast.Body>
  </Toast>
  )
}

export default Contact