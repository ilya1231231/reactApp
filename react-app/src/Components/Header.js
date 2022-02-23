import React, { Component } from 'react'
import { Button, Container, FormControl, Navbar, NavLink, Nav, Form } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
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
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About us</Nav.Link>
                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                <Nav.Link href='/blog'>Blog</Nav.Link>
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
      </>
    );
  }
}