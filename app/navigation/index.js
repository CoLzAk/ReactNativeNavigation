import React, { Component } from 'react';
import { BackHandler } from 'react-native';

import {
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation';

import { connect } from 'react-redux';

import PublicNavigation from "./publicNavigation";

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
        if (this.props.navigationState.stateForLoggedIn.index <= 1) {
            BackHandler.exitApp();

            return;
        }

        this.props.dispatch(NavigationActions.back());

        return true;
    };

    render() {
        let { navigationState, dispatch, isLoggedIn } = this.props;
        let state = isLoggedIn
            ? navigationState.stateForLoggedIn
            : navigationState.stateForLoggedOut;

        return (
            <PublicNavigation
                navigation={ addNavigationHelpers({ dispatch, state: state }) }
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
        navigationState: state.navigation,
    };
};

export default connect(mapStateToProps)(AppNavigation);