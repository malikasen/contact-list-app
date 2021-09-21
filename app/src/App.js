import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Tasks from "./Tasks";
import Contacts from "./Contacts";
import CreateContact from "./CreateContact";
import ViewContact from "./ViewContact";
import './App.css' 
import * as apiClient from "./apiClient";

const App = () => (
  <main className="App">
    <Navbar className='navbar' collapseOnSelect expand='md' bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Contact list</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </main>
);

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [permanentContacts, setPermanentContacts] = useState([]);

  const loadContacts = async () => {
    setContacts(await apiClient.getContacts());
    setPermanentContacts(await apiClient.getContacts());
  }

  useEffect(() => {
    loadContacts();
  }, []);
  return (
    <>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h2>{process.env.REACT_APP_SUBTITLE}</h2>
      <Tasks />
      <Contacts contacts={contacts} />
      <CreateContact loadContacts={loadContacts}/>
      {/* <ViewContact /> */}
    </>
  )
}
  
const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
