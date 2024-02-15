import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';
import { UserContext } from '../../Context/userContext';
import { useContext } from 'react';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';


function Header(progs) {
    const { logout, user } = useContext(UserContext)

    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate('/')
        toast.success('Log out success!')
    }
    return (
      <header className='header'>
          <Navbar expand="lg" className="bg-body-tertiary" >
                <Container className='navbar-container'>
                    <Navbar.Brand href="/" bsPrefix="navbar-brand">SHOP H3T</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Sale</Nav.Link>
                        <NavDropdown title="About Shop" id="basic-nav-dropdown" className='navshop'>
                            <NavDropdown.Item href="/" className='item'>Product</NavDropdown.Item>
                            <NavDropdown.Item href="/" className='item'>
                                Contact
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/" className='item item-3'>Infomation </NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {user && user.auth === true &&
                            <div className="header__cart">
                                <i className="fa-solid fa-cart-shopping header__cart-icon"></i>
                                <div className="header__cart-list header__cart-list--no-cart">
                                    <span>Chưa có sản phẩm</span>
                                </div>
                                <span className='header__cart-quantity'>0</span>
                            </div>
                        }   
                        {user && user.auth === true && user.name &&  <span className='nav-link'>Xin chào {user.name}</span>}
                        {user && user.auth !== true ?
                           <>
                             <Nav.Link href="/register">
                                <span className='header-register'>Register</span>
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <span className='header-login'>Login</span>
                            </Nav.Link>
                           </>
                           : <NavLink to='/login' className='nav-link' onClick={() => {handleLogout()}}><span>Log out</span></NavLink> 
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </header>
    )
}

export default Header