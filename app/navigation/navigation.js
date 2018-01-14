import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import {
    Home,
    Login,
    Register,
} from '../containers';

const AuthenticationStack = StackNavigator({
    login: {
        screen: Login
    },
    register: {
        screen: Register
    },
});

const Navigation = TabNavigator({
    home: {
        screen: Home,
    },
    authentication: {
        screen: AuthenticationStack,
    },
});

export default Navigation;
