import axios from 'axios';
import { returnErrors } from '../actions/errorAction'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../actions/types';


export const loadUser = () => {
    return (dispatch, getState) => {
        console.log('hit me now');
        dispatch({
            type: USER_LOADING
        });

        axios.get('https://mernshopserver.herokuapp.com/api/auth/user', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch((error) => {
            console.log(error.response, 'error');
            dispatch(returnErrors(error.response.data, error.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
    }
}


export const register = ({name, email, password}) => {
    return (dispatch) => {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const body = JSON.stringify({
            name, email, password
        })

        axios.post('https://mernshopserver.herokuapp.com/api/users', body, config)
        .then((res) => {
            console.log(res, 'res');
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch((error) => {
            console.log(error, 'erroror mew');
            dispatch({
                type: REGISTER_FAIL
            });
            dispatch(returnErrors(error.response.data,
                error.response.status, 'REGISTER_FAIL'))
        })
    }
}


export const login = ({email, password}) => {
    return (dispatch) => {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const body = JSON.stringify({
            email, password
        })

        axios.post('https://mernshopserver.herokuapp.com/api/auth', body, config)
        .then((res) => {
            console.log(res, 'res');
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch((error) => {
            console.log(error, 'erroror mew');
            dispatch({
                type: LOGIN_FAIL
            });
            dispatch(returnErrors(error.response.data,
                error.response.status, 'LOGIN_FAIL'))
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

//set config

export const tokenConfig = getState => {
    const token = getState().auth.token;
    console.log(token, 'hit');

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        if(token) {
            config.headers['x-auth-token'] = token;
        }

        return config;
}