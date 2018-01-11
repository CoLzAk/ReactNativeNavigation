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

    submit() {
        let loginData = this.refs.loginData.getValue();

        return this.props.login(loginData);
    };

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
                            onPress={ () => this.props.navigation.navigate('Register') }>
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
    return {
        loginData: state.loginData,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
