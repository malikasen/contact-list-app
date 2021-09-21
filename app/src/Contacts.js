import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";


function Contacts({contacts}) {
  
  


  return (
    <div>
      <h3>Contact List</h3>
      <div className='table-responsive'>
        <table className='table table-hover'>
            <thead>
            <tr>
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
    </div>
  )
}

export default Contacts;