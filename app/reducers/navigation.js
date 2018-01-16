import { NavigationActions } from 'react-navigation';

import { LOGIN_SUCCEEDED } from '../actions/types';
import { createReducer } from '../helpers';
import AppNavigator from '../navigation/navigation';

const actionForHome = AppNavigator.router.getActionForPathAndParams('home');
const stateForHome = AppNavigator.router.getStateForAction(actionForHome);

const initialState = { stateForHome };

export const navigation = createReducer(initialState, {
    ['Navigation/BACK'](state) {
        return {
            ...state,
            stateForHome: AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                stateForHome,
            ),
        };
    },

    ['Navigation/NAVIGATE'](state, action) {
        return {
            ...state,
            stateForHome: AppNavigator.router.getStateForAction(
                action,
                state.stateForHome,
            ),
        };
    },

    [LOGIN_SUCCEEDED](state) {
        return {
            ...state,
            stateForHome: AppNavigator.router.getStateForAction(
                stateForHome,
            )
        };
    },
});
