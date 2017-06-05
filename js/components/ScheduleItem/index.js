import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { goToSession } from './../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

class ScheduleItem extends Component {
    constructor() {
        super();

        this.state = {

        }
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
                    <Icon name={Platform.OS === 'ios'? 'ios-heart': 'md-heart'} size={14} />
                </View>
            </View>
        </TouchableHighlight>
        );
    }
}

ScheduleItem.propTypes = {
    rowData: PropTypes.object,
    currentNavigatorUID: PropTypes.string
};

export default ScheduleItem;
