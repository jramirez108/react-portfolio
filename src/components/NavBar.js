import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import {Link} from "react-router-dom";
import icon from '../img/JR.png';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const linkStyle ={
        textAlign: 'center',
        color: 'grey',
        padding: '10px'
    }

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={icon} alt="jr" height="40px"/>  Jose Ramirez</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <Link style={linkStyle} to="/about"><NavItem>About</NavItem></Link>
            <Link style={linkStyle} to="/projects"><NavItem>Projects</NavItem></Link>
        </Nav>
        </Collapse>
    </Navbar>
        </div>
    )
}
