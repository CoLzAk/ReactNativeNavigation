import React, { Component } from 'react';

import {
    Container,
    Content,
    Button,
    Text,
    Item,
    Input,
} from 'native-base';

import t from 'tcomb-form-native';

import { RegisterForm } from '../../models/forms';

const Form = t.form.Form;

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.registerForm = new RegisterForm();
    }

    navigateToLogin() {
        this.props.navigateToLogin();
    }

    submit() {
        const registerData = this.refs.registerData.getValue();

        if (registerData === null) {
            return;
        }

        return this.props.register(registerData);
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Form ref="registerData"
                          type={ this.registerForm.getType() } />

                    <Button block
                            primary
                            onPress={ () => this.submit() }>
                        <Text>form.button.register</Text>
                    </Button>

                    <Button block
                            transparent
                            onPress={ () => this.navigateToLogin() }>
                        <Text>link.login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
