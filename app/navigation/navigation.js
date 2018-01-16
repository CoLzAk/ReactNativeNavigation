import React, { Component } from 'react';

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import {
    Home,
    Main,
    Login,
    Orders,
    Register,
    User,
} from '../containers';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthenticationStack = StackNavigator({
    login: {
        screen: Login
    },
    register: {
        screen: Register
    },
});

const accountTab = {
    screen: AuthenticationStack,
    navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
                name='account-outline'
                size={26}
                style={{ color: tintColor }}
            />
        ),
    },
};

const homeTab = {
    screen: Home,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
                name='hanger'
                size={26}
                style={{ color: tintColor }}
            />
        ),
    },
};

const ordersTab = {
    screen: Orders,
    navigationOptions: {
        tabBarLabel: 'Orders',
        tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
                name='credit-card'
                size={26}
                style={{ color: tintColor }}
            />
        ),
    },
};

const userTab = {
    screen: User,
    navigationOptions: {
        tabBarLabel: 'User',
        tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
                name='account-outline'
                size={26}
                style={{ color: tintColor }}
            />
        ),
    },
};

const Navigation = TabNavigator({
    home: homeTab,
    orders: ordersTab,
    user: userTab,
}, {
    // tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
    }
});

// const Navigation = StackNavigator({
//     home: homeTab,
//     orders: ordersTab,
//     user: userTab,
// });

// const Navigation = StackNavigator({
//     main: {
//         screen: Main,
//     },
// });

export default Navigation;
