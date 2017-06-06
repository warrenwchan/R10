import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { _fetchsessions } from './../../redux/modules/sessions';
import { _fetchFaves } from './../../redux/modules/faves';
import realm from './../../configs/models';

import Schedule from './Schedule';

import {
  ActivityIndicator,
  ListView
} from 'react-native';

class ScheduleContainer extends Component {
    constructor() {
        super();

        realm.addListener('change', () => {
            this.props.fetchSessions()
            this.props.fetchFaves()
        })
    }

    static route = {
        navigationBar: {
        title: 'Schedule',
        }
    }

    componentDidMount () {
        this.props.fetchSessions()
        this.props.fetchFaves()

    }

    render () {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
            } else {
            return (
                <Schedule
                    sessions={this.props.dataSource}
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
            state.sessions.sessionsData.dataBlob,
            state.sessions.sessionsData.sectionIds,
            state.sessions.sessionsData.rowIds
        ),
        isLoading: state.sessions.isloading,
        favedIds: state.faves.favedIds
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSessions () {
            dispatch(_fetchsessions())
        },
        fetchFaves () {
            dispatch(_fetchFaves())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
