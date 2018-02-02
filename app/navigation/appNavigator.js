import React, { Component } from 'react';

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import {
    Account,
    Login,
    Order,
    OrderHistory,
    Register,
} from '../containers';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const accountTab = {
    screen: Account,
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

const orderTab = {
    screen: Order,
    navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
                name='hanger'
                size={26}
                style={{ color: tintColor }}
            />
        ),
    },
};

const orderHistoryTab = {
    screen: OrderHistory,
    navigationOptions: {
        tabBarLabel: 'Order History',
        tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
                name='credit-card'
                size={26}
                style={{ color: tintColor }}
            />
        ),
    },
};

export const SecurityNavigator = StackNavigator({
    login: {
        screen: Login
    },
    register: {
        screen: Register
    },
}, {
    headerMode: 'none',
});

export const MainNavigator = TabNavigator({
    order: orderTab,
    orders: orderHistoryTab,
    account: accountTab,
}, {
    // tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
    }
});



