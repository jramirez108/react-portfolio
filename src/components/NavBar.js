import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import { Link } from "react-router-dom";
import icon from '../img/JR.png';
import aboutIcon from '../img/manager.svg'
import projectIcon from '../img/project.svg'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand><Link to="/"><img src={icon} alt="jr" height="40px" />  Jose Ramirez</Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar >
                        <Link to="/about"><NavItem><img className='nav-icon' src={aboutIcon} alt='aboutIcon' /><div className='linkText'> About</div></NavItem></Link>
                        <Link to="/projects"><NavItem><img className='nav-icon' src={projectIcon} alt='projectIcon' /><div className="linkText"> Projects</div></NavItem></Link>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
