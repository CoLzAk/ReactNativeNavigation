import { AuthenticationService } from '../services';

import {
    LOGIN_FAILED,
    LOGIN_REQUESTED,
    LOGIN_SUCCEEDED,
    LOGOUT,
} from './types';

const loginError = {
    title: 'Login Error',
    body: 'Incorrect email / password combination',
};

/**
 * @description Check if the user is already logged in
 * @returns {function(*)}
 */
export function isLoggedIn() {
    console.log('isLoggedIn');
    return (dispatch) => {
        return AuthenticationService
            .isLoggedIn()
            .then((credentials) => {
                console.log('credentials > ', credentials);
                if (credentials !== null) {
                    return dispatch(loginSucceeded(credentials));
                }

                return dispatch(logoutSucceeded());
            });
    }
}

/**
 * @description Log the user in
 * @param loginData
 * @returns {function(*)}
 */
export function login(loginData) {
    return (dispatch) => {
        dispatch(loginRequested(loginData));

        return userExists(loginData)
            .then((userExists) => {
                console.log('userExists : ', userExists);
                if (userExists === false) {
                    console.log('there');

                    return dispatch(loginFailed(loginError));
                }

                console.log('here');

                return AuthenticationService
                    .login(loginData)
                    .then((credentials) => {
                        return dispatch(loginSucceeded(credentials));
                    });
            })
    }
}

/**
 * @returns {function(*)}
 */
export function logout() {
    return (dispatch) => {
        return AuthenticationService
            .logout()
            .then(() => {
                dispatch(logoutSucceeded());
            });
    }
}

export function register(registerData) {
    return (dispatch) => {
        return AuthenticationService
            .register(registerData)
            .then((loginData) => {
                return AuthenticationService
                    .login(loginData);
            })
            .then((credentials) => {
                return dispatch(loginSucceeded(credentials));
            });
    }
}

/**
 * @param loginData
 * @returns {boolean}
 */
function userExists(loginData) {
    return AuthenticationService
        .getUserByCredentials(loginData)
        .then((user) => {
            if (user.length === 0) {
                return false;
            }

            return loginData.email === user[0].email && loginData.password === user[0].password;
        });

}

/**
 * @param credentials
 * @returns {{type, credentials: *}}
 */
function loginSucceeded(credentials) {
    return {
        type: LOGIN_SUCCEEDED,
        credentials,
    };
}

/**
 * @param error
 * @returns {{type, error: *}}
 */
function loginFailed(error) {
    return {
        type: LOGIN_FAILED,
        error,
    };
}

/**
 * @param loginData
 * @returns {{type, loginData: *}}
 */
function loginRequested(loginData) {
    return {
        type: LOGIN_REQUESTED,
        loginData,
    };
}

/**
 * @returns {{type}}
 */
function logoutSucceeded() {
    return {
        type: LOGOUT
    }
}
