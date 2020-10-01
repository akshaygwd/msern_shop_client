import { v4 as uuidv4 } from 'uuid';
import {  GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEM_LOADING } from '../actions/types';

const initialState = {
  items: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    case DELETE_ITEMS:
      console.log(action)
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }

    case ADD_ITEMS:
      console.log(action.payload, 'payload');
      console.log(state.items);
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case ITEM_LOADING:
      console.log('me');
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}