import React, { Component } from 'react';

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

import {
    AuthenticationActions,
    NavigationActions,
} from '../actions';

const Form = t.form.Form;

const LoginForm = t.struct({
    email: t.String,
    password: t.String,
});

class Login extends Component {
    constructor(props) {
        super(props);
    }

    navigateToRegister() {
        this.props.navigateToRegister();
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
    return bindActionCreators({ ...AuthenticationActions, ...NavigationActions }, dispatch);
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
