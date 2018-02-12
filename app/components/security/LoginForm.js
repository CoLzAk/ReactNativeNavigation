import React, { Component } from 'react';

import {
    Container,
    Content,
    Button,
    Text,
} from 'native-base';

import t from 'tcomb-form-native';

import { LoginForm } from '../../models/forms';

const Form = t.form.Form;

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.loginForm = new LoginForm();
    }

    navigateToRegister() {
        this.props.navigateToRegister();
    }

    submit() {
        const loginData = this.refs.loginData.getValue();

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
                          type={ this.loginForm.getType() }
                          options={ this.loginForm.getOptions() } />

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