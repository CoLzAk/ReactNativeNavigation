import { combineReducers } from 'redux';

import * as AuthenticationReducers from './authentication';

export default combineReducers(Object.assign(
    AuthenticationReducers,
));
