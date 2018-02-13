import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Container,
    Content,
    Text,
} from 'native-base';

import { OrderDeliveryAddress } from './';
import {
    OrderDeliveryChoiceFormComponent,
    OrderDeliveryFormComponent,
    OrderServiceFormComponent,
} from '../components/order';

class Order extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log('order: ', this.props.order);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>form.order.new</Text>

                    <OrderDeliveryAddress />

                    {/*<OrderDeliveryFormComponent { ...this.props } />*/}









                    {/*<OrderServiceFormComponent { ...this.props } />*/}
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.application.currentUser,
        deliveryAddresses: state.user.deliveryAddresses,
        order: state.order,
    };
}

export default connect(
    mapStateToProps,
)(Order);
