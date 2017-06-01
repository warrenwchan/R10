import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { goToSession } from './../../lib/navagationHelpers';

import { styles } from './styles';

const ScheduleItem = ({ currentNavigatorUID, rowData }) => {
    return (
        <TouchableHighlight onPress={() => goToSession( currentNavigatorUID, rowData )}>
            <View style={styles.scheduleItem}>
                <Text style={styles.scheduleTitle}>
                    {rowData.title}
                </Text>
                <Text style={styles.scheduleLocation}>
                    {rowData.location}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

ScheduleItem.propTypes = {
    rowData: PropTypes.object,
    currentNavigatorUID: PropTypes.string
};


export default ScheduleItem;
