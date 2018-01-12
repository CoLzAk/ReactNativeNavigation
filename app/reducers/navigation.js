import createReducer from '../helpers';

import { LOGIN_SUCCEEDED } from '../actions/types';

import AppNavigator from '../navigation/publicNavigation';

const actionForLoggedIn = AppNavigator.router.getActionForPathAndParams('home');
const actionForLoggedOut = AppNavigator.router.getActionForPathAndParams('login');

const stateForLoggedIn = AppNavigator.router.getStateForAction(actionForLoggedIn);
const stateForLoggedOut = AppNavigator.router.getStateForAction(actionForLoggedOut);

const initialState = { stateForLoggedIn, stateForLoggedOut };

// export const navigation = (state = initialState, action) => {
//     const newState = AppNavigator.router.getStateForAction(action, state);
//     return newState || state;
// };

export const navigation = createReducer(initialState, {
    ['@@redux/INIT'](state) {
        return {
            ...state,
            stateForLoggedIn: AppNavigator.router.getStateForAction(
                actionForLoggedIn,
                stateForLoggedOut
            )
        };
    },
    [LOGIN_SUCCEEDED](state) {
        return {
            ...state,
            stateForLoggedIn: AppNavigator.router.getStateForAction(
                actionForLoggedIn,
                stateForLoggedOut
            )
        };
    }
});