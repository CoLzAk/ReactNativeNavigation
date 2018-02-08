import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Text,
} from 'react-native-elements';

import { SecurityActions } from '../actions';

class OrderHistory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>This is order</Text>
            </View>
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
