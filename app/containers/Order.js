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

class Order extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // this.props.dispatch(UserActions.getPlaces(this.props.currentUser));
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <PlaceContainer { ...this.props } />
                    <Text>This is order main page</Text>
                </Content>
            </Container>
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
)(Order);
