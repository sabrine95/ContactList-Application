import React from 'react'
import Contact from './Contact'

const ContactList = ({contacts}) => {

  return (
    <div>
        { 
        contacts.map((el) => <Contact contact={el} />) 
        }
    </div>
  )
}

export default ContactList