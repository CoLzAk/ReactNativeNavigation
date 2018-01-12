import { combineReducers } from 'redux';

import * as AuthenticationReducers from './authentication';
import * as NavigationReducers from './navigation';

export default combineReducers(Object.assign(
    AuthenticationReducers,
    NavigationReducers,
));
