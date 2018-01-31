import { NavigationActions } from 'react-navigation';

import {
    NAVIGATE_TO_LOGIN,
    NAVIGATE_TO_REGISTER,
    LOGIN_SUCCEEDED,
} from '../actions/types';
import { createReducer } from '../helpers';
import {
    AppNavigator,
    AuthNavigator,
    MainNavigator,
} from '../navigation/appNavigator';

const ActionForLoggedOut = AuthNavigator.router.getActionForPathAndParams('login');
const ActionForLoggedIn = MainNavigator.router.getActionForPathAndParams('order');
const stateForLoggedOut = AuthNavigator.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = MainNavigator.router.getStateForAction(ActionForLoggedIn);

const initialState = { stateForLoggedIn, stateForLoggedOut };

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
            stateForLoggedOut: AuthNavigator.router.getStateForAction(
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
            stateForLoggedOut,
        };
    },

    [NAVIGATE_TO_LOGIN](state) {
        return {
            ...state,
            stateForLoggedOut: AuthNavigator.router.getStateForAction(
                AuthNavigator.router.getActionForPathAndParams('login'),
                stateForLoggedOut,
            ),
        };
    },

    [NAVIGATE_TO_REGISTER](state) {
        return {
            ...state,
            stateForLoggedOut: AuthNavigator.router.getStateForAction(
                AuthNavigator.router.getActionForPathAndParams('register'),
                stateForLoggedOut,
            ),
        };
    }
});