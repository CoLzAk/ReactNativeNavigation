import { combineReducers } from 'redux';

import * as ApplicationReducers from './application';
import * as NavigationReducers from './navigation';
import * as UserReducers from './user';

export default combineReducers(Object.assign(
    ApplicationReducers,
    NavigationReducers,
    UserReducers,
));
