import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Button,
    Text,
} from 'react-native-elements';

import {
    UserActions,
    SecurityActions,
} from '../actions';

import { UserCard } from '../components';


class Account extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.logout();
    }

    render() {
        if (this.props.currentUser === null) {
            return null;
        }

        return (
            <View>
                <UserCard user={ this.props.currentUser } />

                <Button onPress={ () => { this.logout(); } }
                        block
                        primary>
                    <Text>action.logout</Text>
                </Button>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...SecurityActions,
        ...UserActions,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        currentUser: state.application.currentUser,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Account);
