import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut, adminLogOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            {user.email ? (
              <Nav.Link as={NavLink} onClick={logOut} to='/'>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} onClick={adminLogOut} to='/'>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
