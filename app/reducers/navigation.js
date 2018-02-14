import { NavigationActions } from 'react-navigation';

import {
    NAVIGATE_TO_CART,
    NAVIGATE_TO_LOGIN,
    NAVIGATE_TO_REGISTER,
    LOGIN_SUCCEEDED,
} from '../actions/types';

import { createReducer } from '../helpers';

import {
    MainNavigator,
    SecurityNavigator,
} from '../navigation/appNavigator';

const ActionForLoggedOut = SecurityNavigator.router.getActionForPathAndParams('login');
const ActionForLoggedIn = MainNavigator.router.getActionForPathAndParams('order');
const stateForLoggedOut = SecurityNavigator.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = MainNavigator.router.getStateForAction(ActionForLoggedIn);

const initialState = {
    stateForLoggedIn,
    stateForLoggedOut,
};

export const navigation = createReducer(initialState, {
    ['Navigation/BACK'](state) {
        return {
            ...state,
            stateForLoggedIn: MainNavigator.router.getStateForAction(
                NavigationActions.back(),
                stateForLoggedIn,
            ),
            stateForLoggedOut: MainNavigator.router.getStateForAction(
                NavigationActions.back(),
                stateForLoggedOut,
            ),
        };
    },

    ['Navigation/NAVIGATE'](state, action) {
        return {
            ...state,
            stateForLoggedIn: MainNavigator.router.getStateForAction(
                action,
                state.stateForLoggedIn,
            ),
            stateForLoggedOut: SecurityNavigator.router.getStateForAction(
                action,
                state.stateForLoggedOut,
            ),
        };
    },

    [LOGIN_SUCCEEDED](state) {
        return {
            ...state,
            stateForLoggedIn: MainNavigator.router.getStateForAction(
                stateForLoggedIn,
            ),
        };
    },

    [NAVIGATE_TO_CART](state) {
        return {
            ...state,
            stateForLoggedIn: SecurityNavigator.router.getStateForAction(
                MainNavigator.router.getActionForPathAndParams('cart'),
                stateForLoggedIn,
            ),
        };
    },

    [NAVIGATE_TO_LOGIN](state) {
        return {
            ...state,
            stateForLoggedOut: SecurityNavigator.router.getStateForAction(
                ActionForLoggedOut,
                stateForLoggedOut,
            ),
        };
    },

    [NAVIGATE_TO_REGISTER](state) {
        return {
            ...state,
            stateForLoggedOut: SecurityNavigator.router.getStateForAction(
                SecurityNavigator.router.getActionForPathAndParams('register'),
                stateForLoggedOut,
            ),
        };
    }
});