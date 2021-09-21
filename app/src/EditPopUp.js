import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Modal'
import * as apiClient from "./apiClient";

function EditPopUp({show, onHide, contactToBeEdited, loadContacts}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [notes, setNotes] = useState();
  
  useEffect(() => {
    setName(contactToBeEdited.name);
    setEmail(contactToBeEdited.email);
    setPhone(contactToBeEdited.phone);
    setNotes(contactToBeEdited.notes);
  }, [contactToBeEdited])

  const editContact = (updatedContact) => apiClient.editContact(updatedContact).then(loadContacts);

  const editData = (e) => {
    e.preventDefault();
    const updatedContact = {id: contactToBeEdited.id, name: name, email: email, phone: phone, notes: notes}
    const canAdd = updatedContact !== "";
    if (canAdd) {
      editContact(updatedContact);

      setName('');
      setEmail('');
      setPhone('');
      setNotes('');
    }
  };
  console.log(name, email);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-horizontal" onSubmit={editData}>
          
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditPopUp;