import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

import ConductiveItem from './../../components/ConductItem'

const Schedule = ({ datas }) => {
    // console.log(data)
    return (
        <View style={styles.container}>
            <Text>Hello from Schedule</Text>
        </View>
    );
}

Schedule.propTypes = {

};

export default Schedule;
