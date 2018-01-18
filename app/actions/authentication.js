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
    'email': 'joel',
    'password': 'joel',
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

        return AuthenticationService
            .saveCredentials(loginData)
            .then((credentials) => {
                return dispatch(loginSucceeded(credentials));
            });
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

export function loginRequired() {
    return (dispatch) => {
        return AuthenticationService
            .hasCredentials()
            .then((hasCredentials) => {
                console.log(hasCredentials);
                let navigateToLoginAction = NavigationActions.navigate({
                    routeName: "login",
                });

                return dispatch(navigateToLoginAction);
            });
    }
}

export function logout() {
    return (dispatch) => {
        return AuthenticationService
            .removeCredentials()
            .then(() => {
                // dispatch(logoutSuccess());
            });
    }
}

const logoutSuccess = () => {
    return {
        type: LOGOUT
    }
};
