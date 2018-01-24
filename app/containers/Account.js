import React, { Component } from 'react';

import {
    Modal,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Button,
    Container,
    Content,
    Text,
} from 'native-base';

import { AuthenticationActions } from '../actions';

import { Login } from './';

class Account extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.dispatch(AuthenticationActions.logout());
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Button onPress={ () => { this.logout(); }}
                            block
                            primary>
                        <Text>action.logout</Text>
                    </Button>
                    <Text>This is user</Text>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AuthenticationActions, dispatch);
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
    };
}

export default connect(
    mapStateToProps,
)(Account);
