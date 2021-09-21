import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import * as apiClient from "./apiClient";

function CreateContact({loadContacts}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const addContact = (newContact) => apiClient.addContact(newContact).then(loadContacts);

  const collectData = (e) => {
    e.preventDefault();
    const newContact = {name: name, email: email, phone: phone, notes: notes}
    const canAdd = newContact !== "";
    if (canAdd) {
      addContact(newContact);

      setName('');
      setEmail('');
      setPhone('');
      setNotes('');
    }
  };
  return (
    <div>
      <h3>Create new contact</h3>
      <form className="form-horizontal" onSubmit={collectData}>
    
        <fieldset className="form-group row">
          <label for='name' className="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input id='name' name='name' type='text' className="form-control" value={name} onChange={(e) => setName(e.target.value)} required></input>
          </div>
        </fieldset>

        <fieldset className="form-group row">
          <label for='email' className="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input id='email' name='email' type='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group row">
          <label for='phone' className="col-sm-2 control-label">Phone</label>
          <div class="col-sm-10">
            <input id='phone' name='phone' type='text' className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group row">
          <label for='notes' className="col-sm-2 control-label">Notes</label>
          <div class="col-sm-10">
            <input id='notes' name='notes' type='text' className="form-control" value={notes} onChange={(e) => setNotes(e.target.value)} required></input>
          </div>
        </fieldset>

        <div className="form-group row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4" >
            <input type='submit' className='button' value='Submit'></input>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
 
    </div>
  );
}
export default CreateContact;