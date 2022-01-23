import React from 'react';
import { Navbar, Container,  Nav, } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';



const Header = () => {
    const { pathname } = useLocation();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Link className='nav-link' to="/" replace={pathname === '/'}>
                            AIA-Assesment
                        </Link>
                    </Nav>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;