import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar  expand="lg" className='menu-bg'>
      <Container>
        <Navbar.Brand href="#home">Logo here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
      </Container>
    </Navbar>
  );
}

export default Header;