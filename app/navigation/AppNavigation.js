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

class AppNavigation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", () => this.onBackPress());
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", () => this.onBackPress());
    }

    onBackPress() {
        if (this.props.navigation.stateForOrder.index <= 1) {
            BackHandler.exitApp();

            return;
        }

        this.props.dispatch(NavigationActions.back());

        return true;
    };

    render() {
        let { navigation, dispatch, isLoginRequired } = this.props;

        return (
            <AppNavigator
                navigation={ addNavigationHelpers({ dispatch, state: navigation.stateForOrder }) } />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoginRequired: state.authentication.isLoginRequired,
        navigation: state.navigation,
    };
};

export default connect(mapStateToProps)(AppNavigation);
