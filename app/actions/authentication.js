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
export const isLoggedIn = () => {
    return async (dispatch) => {
        const credentials = await AuthenticationService.isLoggedIn();

        if (credentials === null) {
            return dispatch(logoutSucceeded());
        }

        return dispatch(loginSucceeded(credentials));
    }
};

/**
 * @description Log the user in
 * @param loginData
 * @returns {function(*)}
 */
export const login = (loginData) => {
    return async (dispatch) => {
        const userExists = await userExists(loginData);

        if (userExists === false) {
            return dispatch(loginFailed(loginError));
        }

        const credentials = await AuthenticationService.login(loginData);

        return dispatch(loginSucceeded(credentials));
    }
};

/**
 * @returns {function(*)}
 */
export const logout = () => {
    return async (dispatch) => {
        await AuthenticationService.logout()
        dispatch(logoutSucceeded());
    }
};

export const register = (registerData) => {
    return async (dispatch) => {
        const loginData = await AuthenticationService.register(registerData);
        const credentials = await AuthenticationService.login(loginData);

        return dispatch(logoutSucceeded(credentials));
    }
};

/**
 * @param loginData
 * @returns {boolean}
 */
async function userExists(loginData) {
    const user = await AuthenticationService.getUserByCredentials(loginData);

    if (user.length === 0) {
        return false;
    }

    return loginData.email === user[0].email && loginData.password === user[0].password;
}

/**
 * @param credentials
 * @returns {{type, credentials: *}}
 */
const loginSucceeded = (credentials) => {
    return {
        type: LOGIN_SUCCEEDED,
        credentials,
    };
};

/**
 * @param error
 * @returns {{type, error: *}}
 */
const loginFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        error,
    };
};

/**
 * @returns {{type}}
 */
const logoutSucceeded = () => {
    return {
        type: LOGOUT
    }
};
