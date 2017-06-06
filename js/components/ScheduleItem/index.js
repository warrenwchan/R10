import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { goToSession } from './../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';
import { queryFaves } from './../../configs/models';

import { styles } from './styles';

class ScheduleItem extends Component {

    toggleFave (favedId) {
        return favedIds.includes(favedId) && <Icon style={styles.heart} name={Platform.OS === 'ios'? 'ios-heart': 'md-heart'} size={14} />
    }

    render() {
        return (
        <TouchableHighlight onPress={() => goToSession( this.props.currentNavigatorUID, this.props.rowData )}>
            <View style={styles.scheduleItem}>
                <Text style={styles.scheduleTitle}>
                    {this.props.rowData.title}
                </Text>
                <View style={styles.scheduleLocation}>
                    <Text>{this.props.rowData.location}</Text>
                    {this.toggleFave(this.props.rowData.session_id)}
                </View>
            </View>
        </TouchableHighlight>
        );
    }
}

const favedIds = queryFaves()

ScheduleItem.propTypes = {
    rowData: PropTypes.object,
    currentNavigatorUID: PropTypes.string
};

export default ScheduleItem;
