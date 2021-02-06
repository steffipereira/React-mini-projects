import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="light" className="d-flex justify-content-between">
        <Navbar.Brand>Blog</Navbar.Brand>
        <Nav>
            <Link to="/home" className="mr-2">Home</Link>
            <Link to="/create">Add new blog</Link>
        </Nav>
      </Navbar>
    </div>
   );
}

export default MainNavbar;
