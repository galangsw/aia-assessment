import React from 'react';
import { Navbar, Container,  Nav, } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const { pathname } = useLocation();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Link className='nav-link' to="/" replace={pathname === '/'}>
                            Testing React
                        </Link>
                        <Link className='nav-link' to="/Search" replace={pathname === '/'}>
                            Search
                        </Link>
                    </Nav>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;