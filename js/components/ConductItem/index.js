import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const ConductiveItem = ({ title, description }) => {
    console.log(this.props.title)
    return (
        <View style={styles.ItemContain}>
            <Text>
                {this.props.title}
            </Text>
            <Text>
                {this.props.description}
            </Text>
        </View>
    )
}

export default ConductiveItem;
