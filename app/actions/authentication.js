import {
    LOGIN_FAILED,
    LOGIN_REQUESTED,
    LOGIN_SUCCEEDED
} from './types';

const loginDataMock = {
    'email': 'joel.lauret@gmail.com',
    'password': 'password',
};

const credentials = {
    'username': 'Colzak',
    'firstName': 'Joel',
    'lastName': 'Lauret',
};

const loginError = {
    title: 'Login Error',
    body: 'Incorrect email / password combination',
};

const checkLogin = (loginData) => {
    return loginData.email === loginDataMock.email && loginData.password === loginDataMock.password
};

export function login(loginData) {
    return (dispatch) => {
        dispatch(loginRequested(loginData));

        if (checkLogin(loginData) === false) {
            return dispatch(loginFailed(loginError));
        }

        return dispatch(loginSucceeded(credentials));
    }
}

export function loginSucceeded(credentials) {
    return {
        type: LOGIN_SUCCEEDED,
        credentials,
    };
}

export function loginFailed(error) {
    return {
        type: LOGIN_FAILED,
        error,
    };
}

export function loginRequested(loginData) {
    return {
        type: LOGIN_REQUESTED,
        loginData,
    };
}
