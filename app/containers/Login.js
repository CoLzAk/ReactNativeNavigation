import React, { Component } from 'react';

import { NavigationActions } from "react-navigation";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    Content,
    Button,
    Text,
    Item,
    Label,
    Input,
} from 'native-base';

import t from 'tcomb-form-native';

import { AuthenticationActions } from '../actions';

const Form = t.form.Form;

const LoginForm = t.struct({
    email: t.String,
    password: t.String,
});

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
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
                    <Form ref="loginData"
                           type={ LoginForm } />

                    <Button block
                            primary
                            onPress={ () => this.submit() }>
                        <Text>form.button.login</Text>
                    </Button>

                    <Button block
                            transparent
                            primary
                            onPress={ () => this.navigateToRegister() }>
                        <Text>link.register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AuthenticationActions, dispatch);
}

function mapStateToProps(state) {
    console.log(state);
    return {
        isLoggedIn: state.authentication.isLoggedIn,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
