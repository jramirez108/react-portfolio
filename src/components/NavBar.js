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
import aboutIcon from '../img/manager.svg'
import projectIcon from '../img/project.svg'

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
            <Link style={linkStyle} to="/about"><NavItem><img src={aboutIcon} alt='aboutIcon'/> About</NavItem></Link>
            <Link style={linkStyle} to="/projects"><NavItem><img src={projectIcon} alt='projectIcon'/> Projects</NavItem></Link>
            </Nav>
        </Collapse>
    </Navbar>
        </div>
    )
}
