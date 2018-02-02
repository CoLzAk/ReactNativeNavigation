import React, { Component } from 'react';
import { BackHandler } from 'react-native';

import {
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation';

import { connect } from 'react-redux';

import {
    SecurityNavigator,
    MainNavigator,
} from "./appNavigator";

import { SecurityActions } from '../actions';

class AppNavigation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(SecurityActions.isLoggedIn());

        BackHandler.addEventListener("hardwareBackPress", () => this.onBackPress());
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", () => this.onBackPress());
    }

    onBackPress() {
        if (this.props.navigation.stateForLoggedIn.index === 0) {
            BackHandler.exitApp();

            return;
        }

        this.props.dispatch(NavigationActions.back());

        return true;
    };

    render() {
        const { navigation, dispatch, credentials } = this.props;

        if (credentials === null) {
            return (
                <SecurityNavigator navigation={ addNavigationHelpers({ dispatch, state: navigation.stateForLoggedOut }) } />
            );
        }

        return (
            <MainNavigator navigation={ addNavigationHelpers({ dispatch, state: navigation.stateForLoggedIn }) } />
        );
    }
}

const mapStateToProps = state => {
    return {
        credentials: state.application.credentials,
        navigation: state.navigation,
    };
};

export default connect(mapStateToProps)(AppNavigation);
