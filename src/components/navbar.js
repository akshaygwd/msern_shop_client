import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Container
  } from 'reactstrap';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/logout';
import { connect } from 'react-redux';

class NavigationBar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <>
        <NavItem>
          <strong>
            {user ? `Welcome ${user.name}` : null }
          </strong>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </>
    );
    const GuestLinks = (
      <>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
      </>
    );
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              ShoppingList
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggle()}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                { isAuthenticated ?
                 authLinks
                 :
                 GuestLinks
                }
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.auth, 'auth');
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(NavigationBar);