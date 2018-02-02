import React, { Component } from 'react';

import t from 'tcomb-form-native';

// TODO: move
const Form = t.form.Form;
const OrderForm = t.struct({
    place: t.String,
    serviceType: t.String,
    articles: t.String,
});

export default class OrderFormComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form onChange={ () => this.autoComplete() }
                  ref="orderData"
                  type={ OrderForm } />
        )
    }
}