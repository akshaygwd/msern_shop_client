import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import  { login } from '../../actions/authAction';
import  { clearErrors } from '../../actions/errorAction';

class LogimModal extends Component {

    state = {
      modal: false,
      email: '',
      password: '',
      message: null,
    }

    componentDidUpdate(preprops) {
        const { error } = this.props;
        if(error != preprops.error)
        {
            if(error.id == 'LOGIN_FAIL') {
                this.setState({
                    message: error.message.message
                })
            }
            else {
                this.setState({
                    message: null
                })
            }
        }

        if(this.state.modal) {
            if(this.props.isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
      this.props.onClearError();
    }

    onChangHandler = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    onFormSubmit = (e) => {
      e.preventDefault();
      const { email, password } = this.state;
      const user = {
        email,
        password
      }
      this.props.onLogin(user);
    }

    render() {
      return(
        <div>
          <NavLink onClick={() =>this.toggle()} href="#">
              Login
          </NavLink>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>
              Login
            </ModalHeader>
            <ModalBody>
             {this.state.message ? <Alert>{this.state.message}</Alert> : null }
              <Form onSubmit={(e) => this.onFormSubmit(e)}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="add email"
                    onChange={(e) => this.onChangHandler(e) }
                    value={this.state.value}
                  />
                  <Label for="password">password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="add password"
                    onChange={(e) => this.onChangHandler(e) }
                    value={this.state.value}
                  />
                  <Button color="dark" style={{marginTop: '2rem'}}>Login</Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      );
    }

  }

  const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    }
  }

  const mapDispatchToProps = dispatch => {
      return {
          onLogin: (user) => dispatch(login(user)),
          onClearError: () => dispatch(clearErrors())
        }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LogimModal);