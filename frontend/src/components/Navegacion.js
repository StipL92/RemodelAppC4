import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/Logo.png'
import {Link} from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa'

function Navegacion() {
    return (
        <>
        <div className='divisor nav-bar'>
                <Navbar collapseOnSelect className='nav-bar' expand='xxl' bg="light" variant="light">
                    <Container>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img src={logo} height="130" className="d-inline-block align-top" alt="Logotipo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link className='aNavBar' to='/'>INICIO</Link></Nav.Link>
                                <Nav.Link><Link className='aNavBar'>CATEGORIAS</Link></Nav.Link>
                                <NavDropdown className='aNavBar' title="PRODUCTOS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link className='aNavDrop' to='/categoria/Baño'>BAÑO</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link className='aNavDrop' to='/categoria/Carpintería'>CARPINTERIA</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link className='aNavDrop' to='/categoria/Cocina'>COCINA</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link className='aNavDrop' to='/categoria/Pintura'>PINTURA</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link className='aNavDrop' to='/categoria/Piso'>PISOS</Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link><Link className='aNavBar' to='/login'>LOGIN<span><FaUserAlt /></span></Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
        </>
    )
}

export default Navegacion;