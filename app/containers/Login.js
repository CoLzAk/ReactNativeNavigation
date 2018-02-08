import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    NavigationActions,
    SecurityActions,
} from '../actions';

import { LoginComponent } from '../components';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LoginComponent { ...this.props } />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...SecurityActions,
        ...NavigationActions,
    }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps,
)(Login);
