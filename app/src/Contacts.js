import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import EditPopUp from './EditPopUp';


function Contacts({contacts, loadContacts}) {
  const [modalShow, setModalShow] = useState(false);
  const [contactToBeEdited, setContactToBeEdited] = useState('');
  
  return (
    <div>
      <h3>Contact List</h3>
      <div className='table-responsive'>
        <table className='table table-hover'>
            <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Notes</th>
            </tr>
            </thead>
            <tbody>
              {
                contacts.map((contact) => (
                  <tr key={contact.id}>
                    <th>
                      <button variant='primary' 
                      onClick={() => {
                          setContactToBeEdited(contact);
                          setModalShow(true)
                        }
                      }>Edit</button>
                    </th>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.notes}</td>
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>
      <EditPopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
        contactToBeEdited={contactToBeEdited}
        loadContacts={loadContacts}
      />
    </div>
  )
}

export default Contacts;