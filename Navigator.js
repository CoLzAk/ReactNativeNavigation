import { StackNavigator, TabNavigator } from 'react-navigation';

import {
    DetailsScreen,
    HomeScreen,
} from './app/screens';

import {
    Login,
    Register,
} from './app/containers';

const PublicNavigator = StackNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
});

const ProtectedNavigator = TabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

export {
    PublicNavigator,
    ProtectedNavigator,
};