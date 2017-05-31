import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { _fetchsessions } from './../../redux/modules/sessions';

import Schedule from './Schedule';

import {
  ActivityIndicator,
  ListView
} from 'react-native';

class ScheduleContainer extends Component {

    static propTypes = {

    }

    static route = {
        navigationBar: {
        title: 'Schedule',
        }
    }

    componentDidMount () {
        this.props.fetchSessions()
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
        isLoading: state.sessions.isloading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSessions () {
            dispatch(_fetchsessions())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
