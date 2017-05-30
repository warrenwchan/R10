import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const ConductiveItem = ({ title, description }) => {
    return (
        <View style={styles.itemContain}>
            <Text style={styles.itemTitle}>
                {title}
            </Text>
            <Text style={styles.itemDesc}>
                {description}
            </Text>
        </View>
    )
}

export default ConductiveItem;
