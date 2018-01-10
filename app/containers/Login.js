import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Button,
    Text,
    Form,
    Item,
    Label,
    Input,
} from 'native-base';
import t from 'tcomb-form-native';

const TForm = t.form.Form;

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
        console.log(this.state.loginData);

        return this.props.login(this.state.loginData);
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <TForm type={LoginForm} />
                    <Form>
                        <Item floatingLabel>
                            <Label>form.label.email</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                            <Label>form.label.password</Label>
                            <Input secureTextEntry />
                        </Item>

                        <Button block primary>
                            <Text>form.button.login</Text>
                        </Button>
                    </Form>

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

function mapStateToProps(state) {
    return {
        loginData: state.loginData,
    };
}

export default connect(mapStateToProps)(Login);
