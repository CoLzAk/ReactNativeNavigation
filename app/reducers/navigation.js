import { NavigationActions } from 'react-navigation';

import { LOGIN_SUCCEEDED } from '../actions/types';
import { createReducer } from '../helpers';
import { AppNavigator } from '../navigation/appNavigator';

const actionForOrder = AppNavigator.router.getActionForPathAndParams('order');
const actionForLogin = AppNavigator.router.getActionForPathAndParams('login');
const stateForOrder = AppNavigator.router.getStateForAction(actionForOrder);
const stateForLogin = AppNavigator.router.getStateForAction(actionForLogin);

// const actionForLogin = TestNav.router.getActionForPathAndParams('login');
// const stateForLogin = TestNav.router.getActionForPathAndParams('actionForLogin');

const initialState = { stateForOrder, stateForLogin };
// const initialState = { stateForLogin };

// export const navigation = createReducer(initialState, {});
export const navigation = createReducer(initialState, {
    ['Navigation/BACK'](state) {
        return {
            ...state,
            stateForOrder: AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                stateForOrder,
            ),
        };
    },

    ['Navigation/NAVIGATE'](state, action) {
        return {
            ...state,
            stateForOrder: AppNavigator.router.getStateForAction(
                action,
                state.stateForOrder,
            ),
        };
    },

    [LOGIN_SUCCEEDED](state) {
        return {
            ...state,
            stateForOrder: AppNavigator.router.getStateForAction(
                stateForOrder,
            )
        };
    },
});
