import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { goToSession } from './../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

class FaveScheduleItem extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return (
        <TouchableHighlight onPress={() => goToSession( this.props.currentNavigatorUID, this.props.rowData )}>
            <View style={styles.faveScheduleItem}>
                <Text style={styles.faveScheduleTitle}>
                    {this.props.rowData.title}
                </Text>
                <View style={styles.faveScheduleLocation}>
                    <Text>{this.props.rowData.location}</Text>
                    <Icon style={styles.heart}name={Platform.OS === 'ios'? 'ios-heart': 'md-heart'} size={14} />
                </View>
            </View>
        </TouchableHighlight>
        );
    }
}

FaveScheduleItem.propTypes = {
    rowData: PropTypes.object,
    currentNavigatorUID: PropTypes.string
};

export default FaveScheduleItem;
