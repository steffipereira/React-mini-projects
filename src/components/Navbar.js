import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <div className="bg-light">
      <Navbar className="d-flex justify-content-between container">
        <Navbar.Brand>
          <Link to="/">
            React Mini Projects
          </Link>
        </Navbar.Brand>
        <Nav>
            <Link to="/home" className="mx-2">Blogs</Link>
            <Link to="/blog/create">Add Blog</Link>
            <Link to="/ticktack" className="mx-2">Tick-tac-toe</Link>
            <Link to="/todolist">Todo list</Link>
        </Nav>
      </Navbar>
    </div>
   );
}

export default MainNavbar;
