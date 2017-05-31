import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { _fetchConduct } from './../../redux/modules/conduct';

import About from './About';

import {
  ActivityIndicator
} from 'react-native';

class AboutContainer extends Component {

    static propTypes = {

    }

    static route = {
        navigationBar: {
        title: 'About',
        }
    }

    constructor () {
        super();

        this.state = {
            abouts: [],
            isLoading: true
        };
    }

    componentDidMount () {
        this.props.dispatch(_fetchConduct())
    }

    componentDidUpdate () {
        if ( this.state.abouts && this.state.isLoading ) {
            this.setState({ isLoading: false, });
        }
    }

    render () {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
            } else {
            return (
                <About
                    datas={this.props.abouts.conductData}
                />
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        abouts: state.conduct
    }
}

export default connect(mapStateToProps)(AboutContainer);
