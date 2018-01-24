import React, { Component } from 'react';
import { BackHandler } from 'react-native';

import {
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation';

import { connect } from 'react-redux';

import {
    AppNavigator,
} from "./appNavigator";

import { AuthenticationActions } from '../actions';
class AppNavigation extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(AuthenticationActions.isLoggedIn());
    }

    componentDidMount() {
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
        let { navigation, dispatch, isLoggedIn } = this.props;

        console.log(isLoggedIn);
        let state = isLoggedIn === false ? navigation.stateForLoggedOut : navigation.stateForLoggedIn;

        return (
            <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: state }) } />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
        navigation: state.navigation,
    };
};

export default connect(mapStateToProps)(AppNavigation);
