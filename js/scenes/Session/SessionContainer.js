import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { _fetchSpeakers } from './../../redux/modules/speakers';

import Session from './Session';

import {
  ActivityIndicator,
  ListView
} from 'react-native';

class SessionContainer extends Component {

    static route = {
        navigationBar: {
        title: 'Sessions',
        }
    }

    componentDidMount () {
        this.props.fetchSpeakers(this.props.sessionData.speaker)
    }

    render () {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
            } else {
            return (
                <Session
                    session = {this.props.sessionData}
                    speaker = {this.props.speakers}
                />
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        speakers: state.speakers.speakerInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSpeakers ( speakerId ) {
            dispatch(_fetchSpeakers( speakerId ))
        }
    }
}

SessionContainer.PropTypes = {
    speakers: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
