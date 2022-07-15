import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css';



const Header = () => {
    return (
        <div>

            <Navbar bg="white" expand="lg" sticky="top 2rem" className='header'>
                <Container>
                    <CustomLink className='title' to='/'>
                        <Navbar.Brand className='logo' to="/">

                            <img srcSet='logo-bugatti_84x44.webp' alt='bugatti' />

                        </Navbar.Brand>
                    </CustomLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'>

                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-link fw-bold">
                            <CustomLink className='link' to='/'>Home</CustomLink>
                            <CustomLink className='link' to='/reviews'>Reviews</CustomLink>
                            <CustomLink className='link' to='/dashboard'>Dashboard</CustomLink>
                            <CustomLink className='link' to='/blogs'>Blogs</CustomLink>
                            <CustomLink className='link' to='/about'>About</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;