import React from 'react';
import { Navbar, Container, Form, Nav, Button } from 'react-bootstrap';

function Navbar1() {
  return (
    <Navbar bg="secondary" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">MultiPlex</Navbar.Brand>
        <Form className="d-flex me-2">
          <Form.Control type="search" placeholder="Search" aria-label="Search" />
          <Button variant="success">Search</Button>
        </Form>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/movies" className="nav-link-dark">Movies</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/log" className="nav-link-dark">Login</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/signup" className="nav-link-dark">Signup</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navbar1;
