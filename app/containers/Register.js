import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    NavigationActions,
    SecurityActions,
} from '../actions';
import { RegisterFormComponent } from '../components/security';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RegisterFormComponent { ...this.props } />
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
)(Register);
