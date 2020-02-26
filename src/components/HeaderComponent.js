import React,{useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <Navbar light expand="md" className="header-bar">
                <NavbarBrand href="/">Mini e-shop</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Contact us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    )
};

export default Header;
