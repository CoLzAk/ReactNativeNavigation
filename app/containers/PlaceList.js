import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Button,
    Container,
    Content,
    Text,
} from 'native-base';

import {
    UserActions,
} from '../actions';
import PlaceList from "../components/PlaceList";

class PlaceListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <PlaceList />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...UserActions,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        credentials: state.application.credentials,
        currentUser: state.application.currentUser,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlaceListContainer);
