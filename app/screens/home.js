import React, { Component } from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

export default class HomeScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={() => this.props.navigation.navigate('Details')}
                title="Go to details"
            />
        </View>;
    }
}
