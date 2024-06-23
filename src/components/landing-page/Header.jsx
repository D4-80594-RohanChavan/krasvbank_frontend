import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LogoWhite from '../../assets/logo_white.png';

function Header() {
    return (
        <Navbar className="shadow" collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src={LogoWhite} alt="KRASV Bank" width="150px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/terms-and-conditions">Terms and Conditions</Nav.Link>
                        <Nav.Link as={NavLink} to="/privacy-policy">Privacy Policy</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
