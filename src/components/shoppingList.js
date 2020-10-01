import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemAction';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

  componentDidMount() {
    this.props.onGetItems();
  }

  render() {
    const { items, auth } = this.props;
    const { isAuthenticated } = auth;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {
              items  && items.map(({_id, name}, index) => {
                return (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      {isAuthenticated ?
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={()=>this.props.onDeleteItem(_id)}
                      >
                        Delete
                      </Button>
                      :
                      null
                      }

                      {name}
                    </ListGroupItem>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}


const mapStateToProps = state => {
  console.log(state, 'state');
  return {
    items: state.item.items,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetItems: () => dispatch(getItems()),
    onDeleteItem: (id) => dispatch(deleteItem(id))
  }
}

ShoppingList.protoTypes = {
  onGetItems: PropTypes.func.isRequired,
  item:  PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);