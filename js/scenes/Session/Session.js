import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

import {
    Text,
    View,
    Image,
    ListView
} from 'react-native';

const Session = ({ speaker }) => {
    return (
        <View>
            <Text>{speaker.name}</Text>
        </View>
    );
}

Session.propTypes = {
    speaker: PropTypes.object
};

export default Session;
