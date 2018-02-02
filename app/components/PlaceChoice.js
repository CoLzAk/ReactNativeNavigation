import React, { Component } from 'react';

import t from 'tcomb-form-native';

export default class PlaceChoice extends Component {
    constructor(props) {
        super(props);
    }

    autoComplete() {
        const search = this.refs.searchData.getValue();
        this.props.geocode(search.slug);
    }

    render() {
        return (
            <Form onChange={ () => this.autoComplete() }
                  ref="searchData"
                  type={ SearchForm } />
        )
    }
}