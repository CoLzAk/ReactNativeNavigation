import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    Content,
    Text,
} from 'native-base';

import { AuthenticationActions } from '../actions'

class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>This is order main page</Text>
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
    mapDispatchToProps,
)(Order);
