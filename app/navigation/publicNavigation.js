import { StackNavigator } from 'react-navigation';

import {
    Login,
    Register,
} from '../containers';

import {
    HomeScreen,
} from '../screens';

const publicNavigation = StackNavigator({
    login: {
        screen: Login
    },
    register: {
        screen: Register
    },
    home: {
        screen: HomeScreen,
    }
});

export default publicNavigation;