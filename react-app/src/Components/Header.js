import React, { Component } from 'react';
import { 
  Button, 
  Container, 
  FormControl, 
  Navbar,  
  Nav, 
  Form 
} from 'react-bootstrap';
import logo from './logo192.png';

import { BrowserRouter as Router, Route, Link, Routes, NavLink  } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href='/'>
                  <img
                    src={logo}
                    height="30"
                    width="30"
                    className="d-inline-block"
                    alt="Logo"
                  /> React App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                <Nav.Link as={NavLink} to='/about'>About us</Nav.Link>
                <Nav.Link as={NavLink} to='/contacts'>Contacts</Nav.Link>
                <Nav.Link as={NavLink} to='/blog'>Blog</Nav.Link>
              </Nav>
              <Form className='d-flex'>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className='me-2'
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contacts' element={<Contacts/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
      </>
    );
  }
}