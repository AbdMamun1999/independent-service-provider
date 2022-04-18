import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)

  const handleToSignOut = () =>{
    signOut(auth)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span>Picturesque</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {user ? <botton className="btn  btn-link text-white text-decoration-none d-block" style={{padding:"6px 0",textAlign:"left"}} onClick={handleToSignOut}>Sign Out</botton>
              : <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;