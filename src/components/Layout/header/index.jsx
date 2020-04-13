import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, NavDropdown, Nav } from 'react-bootstrap'
import Logo from '../../../assets/interview.svg'
import TextLogo from '../../../assets/TextLogo.png'
import './style.css'

export default class Header extends Component {
    render() {
        return (
            <Navbar className='header' bg="default" fixed='top' border='dark' variant='light' expand="lg">
                <Navbar.Brand href="#home" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={Logo}
                        alt="Logo"
                        height="40"
                        style={{ marginRight: 5 }}
                    />
                    <img src={TextLogo}
                        alt=""
                        height="35"
                        alt="Startup fest" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Avaliações</Nav.Link>
                        <Nav.Link href="#link">Contete-nos</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
