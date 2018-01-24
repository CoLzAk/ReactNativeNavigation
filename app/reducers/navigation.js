import { NavigationActions } from 'react-navigation';

import { LOGIN_SUCCEEDED } from '../actions/types';
import { createReducer } from '../helpers';
import { AppNavigator } from '../navigation/appNavigator';

const stateForLoggedIn = AppNavigator.router.getStateForAction(NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'main',
        }),
    ],
}));

// const stateForLoggedOut = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('login'));
const stateForLoggedOut = AppNavigator.router.getStateForAction(NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'auth',
        }),
    ],
}));

const initialState = { stateForLoggedIn, stateForLoggedOut };

// export const navigation = (state = initialState, action) => {
//     const nextState = AppNavigator.router.getStateForAction(action, state);
//
//     // Simply return the original `state` if `nextState` is null or undefined.
//     return nextState || state;
// };

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
        console.log(state);
        console.log(action);
        return {
            ...state,
            stateForLoggedIn: AppNavigator.router.getStateForAction(
                action,
                state.stateForLoggedIn,
            ),
            stateForLoggedOut,
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
});