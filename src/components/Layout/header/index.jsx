import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, NavDropdown, Nav } from 'react-bootstrap'
import Logo from '../../../assets/interview.svg'
import TextLogo from '../../../assets/TextLogo.png'
import './style.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
                <Navbar.Brand href="#home">
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#rate" onClick={() => this.props.changeMenu(1)}>Avaliar</Nav.Link>
                        <Nav.Link href="#rates" onClick={() => this.props.changeMenu(2)}>Avaliações</Nav.Link>
                        <Nav.Link href="#info" onClick={() => this.props.changeMenu(3)}>Informações</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const changeMenu = (value) => {
    return {
        type: 'CHANGE_MENU',
        payload: value
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeMenu }, dispatch)


export default connect(null, mapDispatchToProps)(Header)