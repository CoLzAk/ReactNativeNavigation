import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Button,
    Container,
    Content,
    Text,
} from 'native-base';

import {
    AuthenticationActions,
    UserActions,
} from '../actions';

import { UserCard } from '../components';


class Account extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
        this.props.getUser();
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <UserCard user={ this.props.user } />

                    <Button onPress={ () => { this.logout(); } }
                            block
                            primary>
                        <Text>action.logout</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...AuthenticationActions, ...UserActions }, dispatch);
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
        user: state.user,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Account);
