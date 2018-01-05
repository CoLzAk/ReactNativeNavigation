import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput } from 'react-native-elements'

const {
    View,
} = ReactNative;

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
    }

    submit() {
        console.log('submit form');
    }

    render() {
        return (
            <View>
                <FormLabel>EMAIL</FormLabel>
                <FormInput placeholder="example@example.co" />

                <FormLabel>PASSWORD</FormLabel>
                <FormInput placeholder="********"
                           secureTextEntry={true} />

                <Button
                    component="TouchableHighlight"
                    onPress={ () => this.submit() }
                    title="LOGIN" />

                <Button
                    backgroundColor="none"
                    component="TouchableOpacity"
                    onPress={() => this.props.navigation.navigate('Register')}
                    title="Don't have an account yet ? Register" />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginData: state.loginData,
    };
}

export default connect(mapStateToProps)(Login);
