import React from 'react';
import PropTypes from 'prop-types';

import ScheduleItem from './../../components/ScheduleItem'

import { ListView } from 'react-native';

const Schedule = ({ sessions }) => {
    return (
        <ListView
            dataSource={ sessions }
            renderRow={(rowData) => (
                <ScheduleItem
                    rowData={rowData}
                />
            )}
        />
    );
}

Schedule.propTypes = {
    sessions: PropTypes.object
};

export default Schedule;
