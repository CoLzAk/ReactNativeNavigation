import { NavigationActions } from 'react-navigation';

import {
    NAVIGATE_TO_LOGIN,
    NAVIGATE_TO_REGISTER,
    LOGIN_SUCCEEDED,
} from '../actions/types';
import { createReducer } from '../helpers';
import { AppNavigator } from '../navigation/appNavigator';

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams('login');
const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams('main');
const stateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut);

const initialState = { stateForLoggedIn, stateForLoggedOut };

export const navigation = createReducer(initialState, {
    ['Navigation/BACK'](state) {
        return {
            ...state,
            stateForLoggedIn: AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                stateForLoggedIn,
            ),
            stateForLoggedOut,
        };
    },

    ['Navigation/NAVIGATE'](state, action) {
        return {
            ...state,
            stateForLoggedIn: AppNavigator.router.getStateForAction(
                action,
                state.stateForLoggedIn,
            ),
        };
    },

    [LOGIN_SUCCEEDED](state) {
        return {
            ...state,
            stateForLoggedIn: AppNavigator.router.getStateForAction(
                stateForLoggedIn,
            ),
            stateForLoggedOut
        };
    },

    [NAVIGATE_TO_LOGIN](state) {
        return {
            ...state,
            stateForLoggedOut: AppNavigator.router.getStateForAction(
                AppNavigator.router.getActionForPathAndParams('login'),
                stateForLoggedOut
            )
        };
    },

    [NAVIGATE_TO_REGISTER](state) {
        return {
            ...state,
            stateForLoggedOut: AppNavigator.router.getStateForAction(
                AppNavigator.router.getActionForPathAndParams('register'),
                stateForLoggedOut
            )
        };
    }
});