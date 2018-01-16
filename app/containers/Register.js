import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';

const {
    View,
    Text
} = ReactNative;

class Register extends Component {
    constructor(props) {
        super(props);
    }

    submit() {
        console.log('submit form');
    }

    render() {
        return (
            <View>
                <Text>Register</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginData: state.loginData,
    };
}

export default connect(mapStateToProps)(Register);
