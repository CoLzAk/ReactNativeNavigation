import { combineReducers } from 'redux';

import * as ApplicationReducers from './application';
import * as NavigationReducers from './navigation';
import * as PlaceReducers from './place';
import * as UserReducers from './user';

export default combineReducers(Object.assign(
    ApplicationReducers,
    NavigationReducers,
    PlaceReducers,
    UserReducers,
));
