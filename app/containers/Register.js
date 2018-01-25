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

const RegisterForm = t.struct({
    email: t.String,
    password: t.String,
    passwordVerification: t.String,
});

class Register extends Component {
    constructor(props) {
        super(props);
    }

    navigateToLogin() {
        this.props.navigateToLogin();
    }

    submit() {
        let registerData = this.refs.registerData.getValue();

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
                          type={ RegisterForm } />

                    <Button block
                            primary
                            onPress={ () => this.submit() }>
                        <Text>form.button.register</Text>
                    </Button>

                    <Button block
                            transparent
                            primary
                            onPress={ () => this.navigateToLogin() }>
                        <Text>link.login</Text>
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
)(Register);
