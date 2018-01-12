import { TabNavigator } from "react-navigation";

import {
    DetailsScreen,
    HomeScreen,
} from '../screens';

const protectedNavigation = TabNavigator({
    details: {
        screen: DetailsScreen
    },
    home: {
        screen: HomeScreen
    },
});

export default protectedNavigation;