import { Navbar, Nav } from 'react-bootstrap';

const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="light" className="d-flex justify-content-between">
        <Navbar.Brand>Blog</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#home" className="">Home</Nav.Link>
          <Nav.Link href="#features">Add new blog</Nav.Link>
        </Nav>
      </Navbar>
    </div>
   );
}

export default MainNavbar;
