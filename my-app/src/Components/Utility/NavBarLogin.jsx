import React, { useEffect, useState } from 'react';
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png';
import loginIcon from '../../images/login.png';
import cartIcon from '../../images/cart.png';
import NavbarSearchHook from './../../hook/search/navbar-search-hook';
import GetAllUserCartHook from './../../hook/cart/get-all-user-cart-hook';

const NavBarLogin = () => {
    const [OnChangeSearch, searchWord] = NavbarSearchHook();
    const [user, setUser ] = useState('');
    const [itemsNum] = GetAllUserCartHook();

    useEffect(() => {
        const storedUser  = localStorage.getItem("user");
        if (storedUser ) {
            setUser (JSON.parse(storedUser ));
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser ('');
    };

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' alt="Logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        onChange={OnChangeSearch}
                        type="search"
                        placeholder="Search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        {user ? (
                            <NavDropdown title={user.name} id="basic-nav-dropdown">
                                {user.role === "admin" ? (
                                    <NavDropdown.Item href="/admin/all-products">Dashboard</NavDropdown.Item>
                                ) : (
                                    <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                                )}
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logOut} href="/">Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link href='/login' className="nav-text d-flex mt-3 justify-content-center">
                                <img src={loginIcon} className="login-img" alt="Login" />
                                <p style={{ color: "white" }}>Login</p>
                            </Nav.Link>
                        )}
                        <Nav.Link href='/cart' className="nav-text position-relative d-flex mt-3 justify-content-center" style={{ color: "white" }}>
                            <img src={cartIcon} className="cart-img" alt="Cart" />
                            <p style={{ color: "white" }}>Cart</p>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {itemsNum || 0}
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarLogin;