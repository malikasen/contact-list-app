import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function ViewContact({permanentContacts}) {
  const [name, setName] = useState(""); 
  const [foundContact, setFoundContact] = useState("");
  
  const findContact = (e) => {
    e.preventDefault();
    permanentContacts.filter((contact) => {
      if(contact.name === name) {
        setFoundContact(contact);
        console.log("found contact", contact);
      }
    })
    setName('');
  }
  return (
    <div>
      <h2>Search by name</h2>
      <form className='form-horizontal' action="#">
        <fieldset className="form-group row">
          <label className="col-sm-2 control-label" for="name-search">Name</label>
          <div className='col-sm-10'>
            <input type="text" id="name-search" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        </fieldset>
        <div className="form-group row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <input type="submit" className='button' value="Search" onClick={(e) => findContact(e)}/>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
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
            <tr>
              <td>{foundContact.name}</td>
              <td>{foundContact.email}</td>
              <td>{foundContact.phone}</td>
              <td>{foundContact.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ViewContact;