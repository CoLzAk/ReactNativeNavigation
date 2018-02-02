import { SecurityService } from '../services';
import { UserActions } from './';

import {
    LOGIN_FAILED,
    LOGIN_SUCCEEDED,
    LOGOUT,
    REGISTRATION_FAILED,
} from './types';

import { SecurityApi } from '../api';

/**
 * @description Check if the user is already logged in
 *
 * @returns {function(*)}
 */
export const isLoggedIn = () => {
    return async (dispatch) => {
        const credentials = await SecurityService.getCredentials();

        // TODO: check if credentials have not expired
        if (credentials === null) {
            return dispatch(logoutSucceeded());
        }

        dispatch(UserActions.getCurrentUser(credentials));

        return dispatch(loginSucceeded(credentials));
    }
};

/**
 * @description Log the user in
 * @param loginData
 *
 * @returns {function(*)}
 */
export const login = (loginData) => {
    return async (dispatch) => {
        try {
            const securityApi = new SecurityApi();
            const user = await securityApi.login(loginData);
            await SecurityService.saveCredentials(loginData);

            return dispatch(loginSucceeded(user));
        } catch (error) {
            return dispatch(loginFailed(error));
        }
    }
};

/**
 * @description Log the user out
 *
 * @returns {function(*)}
 */
export const logout = () => {
    return async (dispatch) => {
        await SecurityService.logout();

        return dispatch(logoutSucceeded());
    }
};

/**
 * @description Register the user
 * @param registerData
 *
 * @returns {function(*)}
 */
export const register = (registerData) => {
    return async (dispatch) => {
        try {
            const securityApi = new SecurityApi();
            await securityApi.register(registerData);
            const credentials = await securityApi.login({ email: registerData.email, password: registerData.password });

            return dispatch(loginSucceeded(credentials));
        } catch (error) {
            return dispatch(registrationFailed(error));
        }

    }
};

/**
 * @param {Credentials} credentials
 * @returns {{type, credentials}}
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
 * @param error
 * @returns {{type, error: *}}
 */
const registrationFailed = (error) => {
    return {
        type: REGISTRATION_FAILED,
        error,
    };
};

/**
 * @returns {{type}}
 */
const logoutSucceeded = () => {
    return {
        type: LOGOUT,
    }
};
