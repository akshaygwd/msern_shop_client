import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemAction';



class PopupModal extends Component {

  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChangHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: this.state.name
    }

    this.props.onAddItem(newItem);
    this.toggle();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return(
      isAuthenticated &&
      <div>
        <Button
          color="dark"
          onClick={()=> this.toggle()}
          style={{marginBottom: '2rem'}}>
          AddItem
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add to Shopping List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => this.onFormSubmit(e)}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="add item"
                  onChange={(e) => this.onChangHandler(e) }
                  value={this.state.value}
                />
                <Button color="dark" style={{marginTop: '2rem'}}>Add Item</Button>
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
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (item) => dispatch(addItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupModal);