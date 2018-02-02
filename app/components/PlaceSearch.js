import React, { Component } from 'react';

import t from 'tcomb-form-native';

// TODO: move
const Form = t.form.Form;
const SearchForm = t.struct({
    slug: t.String,
});

export default class PlaceSearch extends Component {
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