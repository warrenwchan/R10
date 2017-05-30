import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';

        fetch(endpoint)
            // if fetch is successful, read our JSON out of the response
            .then((response) => response.json())
            .then((result) => {
                this.setState({ abouts: result });
            })
            .catch(error => console.log(`Error fetching JSON: ${error}`));
    }

    componentDidUpdate () {
        if ( this.state.abouts.length && this.state.isLoading ) {
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
                    datas={this.state.abouts}
                />
            );
        }
    }
}

export default AboutContainer
