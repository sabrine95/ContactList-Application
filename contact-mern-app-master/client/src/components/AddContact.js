import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addContact } from '../redux/actions/contactAction';
import { useDispatch } from 'react-redux';

const AddContact = () => {
const [data, setData] = useState({})
const dispatch = useDispatch()

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

  return (
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" name="email" 
        onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name"  name="name" 
        onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="age" name="age" 
        onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="address" name="address"
        onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit"  
      onClick={() => dispatch(addContact(data))} >
         add
      </Button>
    </Form>
  )
}

export default AddContact