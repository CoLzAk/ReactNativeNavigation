import React, { Component } from 'react';

import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    Content,
    Text,
} from 'native-base';

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

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(AuthenticationActions, dispatch);
// }

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
    };
}

export default connect(
    mapStateToProps,
)(OrderHistory);
