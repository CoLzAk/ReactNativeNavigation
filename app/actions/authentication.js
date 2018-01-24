import { NavigationActions } from "react-navigation";

import { AuthenticationService } from '../services';

import {
    LOGIN_FAILED,
    LOGIN_REQUESTED,
    LOGIN_REQUIRED,
    LOGIN_SUCCEEDED,
    LOGOUT,
} from './types';

const loginDataMock = {
    'email': 'Joel',
    'password': 'Joel',
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

export function isLoggedIn() {
    return (dispatch) => {
        return AuthenticationService
            .hasCredentials()
            .then((credentials) => {
                if (credentials !== null) {
                    return dispatch(loginSucceeded(credentials));
                }

                return dispatch(logoutSuccess());
            });
    }
}

export function login(loginData) {
    console.log('login');

    return (dispatch) => {
        dispatch(loginRequested(loginData));

        if (checkLogin(loginData) === false) {
            return dispatch(loginFailed(loginError));
        }

        return AuthenticationService
            .saveCredentials(loginData)
            .then((credentials) => {
                console.log('credentials : ', credentials);
                return dispatch(loginSucceeded(credentials));
            });
    }
}

export function loginSucceeded(credentials) {
    console.log('loginSucceeded');

    return {
        type: LOGIN_SUCCEEDED,
        credentials,
    };
}

export function loginFailed(error) {
    console.log('loginFailed');

    return {
        type: LOGIN_FAILED,
        error,
    };
}

export function loginRequested(loginData) {
    console.log('loginRequested');

    return {
        type: LOGIN_REQUESTED,
        loginData,
    };
}

export function logout() {
    console.log('logout');

    return (dispatch) => {
        return AuthenticationService
            .removeCredentials()
            .then(() => {
                dispatch(logoutSuccess());
            });
    }
}

const logoutSuccess = () => {
    console.log('logoutSuccess');

    return {
        type: LOGOUT
    }
};
