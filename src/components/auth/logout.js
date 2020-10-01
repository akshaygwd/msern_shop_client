import React, { Component } from 'react';
import { logout } from '../../actions/authAction';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';

export class Logout extends Component {
    render() {
        return (
            <>
                <NavLink onClick={this.props.logout} href="#">
                    Logout
                </NavLink>
            </>
        )
    }
}

export default connect(null, { logout })(Logout);