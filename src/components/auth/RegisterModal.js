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
import  { register } from '../../actions/authAction';
import  { clearErrors } from '../../actions/errorAction';

class RegisterModal extends Component {

    state = {
      modal: false,
      name: '',
      email: '',
      password: '',
      message: null,
    }

    componentDidUpdate(preprops) {
        const { error } = this.props;
        if(error != preprops.error)
        {
            if(error.id == 'REGISTER_FAIL') {
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
      const { email, name, password  } = this.state;
      const newUSer = {
          name,
          email,
          password
      }
      this.props.onRegister(newUSer);
    }

    render() {
      return(
        <div>
          <NavLink onClick={() =>this.toggle()} href="#">
              Register
          </NavLink>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>
              Register
            </ModalHeader>
            <ModalBody>
             {this.state.message ? <Alert>{this.state.message}</Alert> : null }
              <Form onSubmit={(e) => this.onFormSubmit(e)}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="add Name"
                    onChange={(e) => this.onChangHandler(e) }
                    value={this.state.value}
                  />
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
                  <Button color="dark" style={{marginTop: '2rem'}}>Register</Button>
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
          onRegister: (user) => dispatch(register(user)),
          onClearError: () => dispatch(clearErrors())
        }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);