import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark">
            <Navbar.Brand as={Link} to="/" className="text-color">SALOZEN</Navbar.Brand>
            <Navbar.Toggle
            style={{borderColor: "white"}} aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about" className="text-color">About</Nav.Link>
                    <Nav.Link as={Link} to="/" className="text-color">Service</Nav.Link>
                    <Nav.Link as={Link} to="/academy" className="text-color">Academy</Nav.Link>
                    {loggedInUser.email && <Nav.Link as={Link} to="/dashboard" className="text-color">Dashboard</Nav.Link>}
                </Nav>
                <Nav>
                <Nav.Link href="https://www.facebook.com/Muhammad-Tajbiul-104608361728432/" target="_blank" className="text-color"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
                <Nav.Link href="https://www.instagram.com/tajbiul.insta/" target="_blank" className="text-color">
                <FontAwesomeIcon icon={faInstagram}/>
                </Nav.Link>
                {loggedInUser.isLoggedIn && (
                <img
                  style={{ borderRadius: "50%", height: "39px", marginLeft:"1vw"}}
                  src={loggedInUser.photoURL}
                  alt="Profile"
                />
                )}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;