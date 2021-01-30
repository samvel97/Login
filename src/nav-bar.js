import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
const Menu = ()=>{
  return(
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><Link to='/'>TestTask</Link></Navbar.Brand>
    <Nav className="mr-auto">
      
      <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
      <Nav.Link ><Link to='/news'>News</Link></Nav.Link>
      <Nav.Link ><Link to='/profile'>Profile</Link></Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default Menu;