import React, { Component } from 'react';
import {Navbar,Nav,MenuItem,NavDropdown,NavItem,FormGroup,Button,FormControl} from 'react-bootstrap';
import '../css/header1-style.css';
import '../css/header2-style.css';
import '../css/header3-style.css';
class HeaderThird extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default HeaderThird;