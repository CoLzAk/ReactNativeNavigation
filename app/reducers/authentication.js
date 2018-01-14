import { createReducer } from '../helpers';

import { AuthenticationService } from '../services';
import { LOGIN_SUCCEEDED } from '../actions/types';

const initialState = {
    isLoggedIn: false,
};

export const authentication = createReducer(initialState, {
    [LOGIN_SUCCEEDED](state, action) {
        AuthenticationService.saveCredentials(action.credentials);

        return {
            ...state,
            isLoggedIn: true,
        };
    },
});
