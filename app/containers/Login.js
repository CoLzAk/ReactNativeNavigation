import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    NavigationActions,
    SecurityActions,
} from '../actions';
import { LoginFormComponent } from '../components/security';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LoginFormComponent { ...this.props } />
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
