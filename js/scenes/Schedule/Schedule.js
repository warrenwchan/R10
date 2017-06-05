import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

import ScheduleItem from './../../components/ScheduleItem'

import { ListView, View } from 'react-native';

const Schedule = ({ sessions }) => {
    return (
        <ListView
            dataSource={ sessions }
            renderRow={(rowData) => (
                <View style={styles.container}>
                    <ScheduleItem rowData={rowData} currentNavigatorUID='schedule'/>
                </View>
            )}
        />
    );
}

Schedule.propTypes = {
    sessions: PropTypes.object
};

export default Schedule;
