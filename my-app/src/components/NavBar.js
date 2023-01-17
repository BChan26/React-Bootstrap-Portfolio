import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useState, useEffect} from "react";

import BCLogo from '../assets/img/BCLogoSmall.png';
import navIcon1 from '../assets/img/nav-icon1.svg';



export const  NavBar = () =>  {

//Event Listener for NavBar Link/Section To Jump To
const [activeLink, setActiveLink] = useState('home');

//UseState and Hook if user has scrolled
const [scrolled, setScrolled] = useState(false);
useEffect (() => {
    const onScroll = () => {
    if (window.scrollY > 50) {
        setScrolled (true);
    }
    else {setScrolled(false)
    }
    }
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll())
}, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value)
}


    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>

            {/* Logo */}
            <Navbar.Brand href="#home">
                    <img src={BCLogo} className="BCLogo" alt="BC Logo Template Created By Garis Pena from https://www.vecteezy.com/ and Template from Youtube's Webdecoded"/>
            </Navbar.Brand>

            {/* NavBarToggle for Mobile*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon">
                </span>
            </Navbar.Toggle>

            {/* Navbar Content if/when Collapse AKA dropdown*/}
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('home')}>Home</Nav.Link>

                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('skills')}> Skills </Nav.Link>

                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
            
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/bchan26/" target="_blank" rel="noreferrer"><img src={navIcon1} alt=""/></a>
                    </div>

                    
                    <a href="https://drive.google.com/file/d/1HmdCw3XEHKRmio977CZvELNn6dE17V5r/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="contactButton">
                        Resume
                    </button>
                    </a>

                    <button className="contactButton" onClick={() =>
                    window.location = 'mailto:bchan26@bu.edu'}>
                        BChan26@bu.edu
                    </button>
                </span>

            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;