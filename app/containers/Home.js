import React, { Component } from 'react';

import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    Content,
    Text,
} from 'native-base';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.isLoggedIn);
    }

    componentDidUpdate() {
        console.log(this.props.isLoggedIn);
    }

    navigateToRegister() {
        let navigateToRegisterAction = NavigationActions.navigate({
            routeName: "register",
        });

        this.props.navigation.dispatch(navigateToRegisterAction);
    }

    submit() {
        let loginData = this.refs.loginData.getValue();

        if (loginData === null) {
            return;
        }

        return this.props.login(loginData);
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>This is home</Text>
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
)(Home);
