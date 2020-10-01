import {  GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEM_LOADING } from './types';
import axios from 'axios';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';

export const getItems = () => {

    return (dispatch) => {
        dispatch(setItemLoading());
        axios.get('https://mernshopserver.herokuapp.com/api/items')
        .then((res) => {
            console.log(res, 'here me');
            dispatch({
                type: GET_ITEMS,
                payload: res.data.items
            })
        })
        .catch((error) => {
            returnErrors(error.response.data, error.response.status)
        })
    }
}

export const deleteItem = (id) => {
    return (dispatch, getState) => {
        dispatch(setItemLoading());
        axios.delete('https://mernshopserver.herokuapp.com/api/items/'+id, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: DELETE_ITEMS,
                payload: id
            })
        })
        .catch((error) => {
            returnErrors(error.response.data, error.response.status)
        })
    }
}

export const addItem = (item) => {
    return (dispatch, getState) => {
        dispatch(setItemLoading());
        axios.post('https://mernshopserver.herokuapp.com/api/items', item, tokenConfig(getState))
        .then((res) => {
            console.log(res, 'hit');
            dispatch({
                type: ADD_ITEMS,
                payload: res.data.item
            })
        })
        .catch((error) => {
            returnErrors(error.response.data, error.response.status)
        })
    }
}

export const setItemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}