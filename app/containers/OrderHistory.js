import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    Content,
    Text,
} from 'native-base';

import { SecurityActions } from '../actions';

class OrderHistory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content padder>

                    <Text>This is order</Text>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(SecurityActions, dispatch);
}

export default connect(
    null,
    mapDispatchToProps,
)(OrderHistory);
