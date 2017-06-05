import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

import FaveScheduleItem from './../../components/FaveItem'

import { ListView, View } from 'react-native';

const Faves = ({ faves }) => {
    return (
        <ListView
            dataSource={ faves }
            renderRow={(rowData) => (
                <View style={styles.container}>
                    <FaveScheduleItem rowData={rowData} currentNavigatorUID='schedule'/>
                </View>
            )}
        />
    );
}

Faves.propTypes = {
    faves: PropTypes.object
};

export default Faves;
