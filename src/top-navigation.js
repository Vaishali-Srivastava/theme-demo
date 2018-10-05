import React, { Component } from 'react'
import { MenuItem, NavItem, Navbar, Nav, NavDropdown, FormGroup, Button, FormControl, Form } from 'react-bootstrap';

export default class TopNav extends Component {
  render() {
    return (
      <div>
        <header role="header" data-qa="header" className="top-navigation">
            <Navbar inverse collapseOnSelect fixedTop>
                        <Navbar.Header>
                            <Navbar.Brand>
                            <a href="javascript:void(0)">React-Bootstrap</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    Design
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    Develop
                                </NavItem>
                                <NavItem eventKey={3} href="#">
                                    <i className="fa fa-search"></i>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
        </header>
      </div>
    )
  }
}
