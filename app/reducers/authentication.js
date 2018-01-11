import { AsyncStorage } from 'react-native';

import createReducer from '../helpers';
import { LOGIN_SUCCEEDED } from '../actions/types';

const defaultState = {
    isLoggedIn: false,
};

export const login = createReducer(defaultState, {
    [LOGIN_SUCCEEDED](state, action) {
        state = Object.assign({}, state, { isLoggedIn: true });

        AsyncStorage.setItem('loggedIn', true);
        AsyncStorage.setItem('credentials', JSON.stringify(action.credentials));

        return state;
    }
});