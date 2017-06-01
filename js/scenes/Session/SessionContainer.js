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

    static propTypes = {

    }

    static route = {
        navigationBar: {
        title: 'Speakers',
        }
    }

    componentDidMount () {
        this.props.fetchSpeakers()
    }

    render () {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
            } else {
            return (
                <Session
                    speaker={this.props.dataSource}
                />
            );
        }
    }
}

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

function mapStateToProps(state) {
    return {
        dataSource: ds.cloneWithRowsAndSections(
            state.Speakers.sessionsData.dataBlob,
            state.Speakers.sessionsData.sectionIds,
            state.Speakers.sessionsData.rowIds
        ),
        isLoading: state.Speakers.isloading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSpeakers ( speakerId) {
            dispatch(_fetchSpeakers( speakerId ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
