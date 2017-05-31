import React from 'react';

import {
    Text,
    View,
    Image,
    ListView
} from 'react-native';

import PropTypes from 'prop-types';

import { styles } from './styles';

const Schedule = ({ sessions }) => {
    return (
        <ListView
            dataSource={ sessions }
            renderRow={(data) => (
                <Text>
                    {data.title}
                </Text>
            )}
        />
    );
}

Schedule.propTypes = {

};

export default Schedule;
