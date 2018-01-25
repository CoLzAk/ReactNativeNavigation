import { combineReducers } from 'redux';

import * as AuthenticationReducers from './authentication';
import * as NavigationReducers from './navigation';
import * as UserReducers from './user';

export default combineReducers(Object.assign(
    AuthenticationReducers,
    NavigationReducers,
    UserReducers,
));
