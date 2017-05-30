import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

import ConductiveItem from './../../components/ConductItem'

const About = ({ data }) => {
    // console.log(data)
    return (
        <View style={styles.container}>
            {data.map((data) => (
                <ConductiveItem
                    key={data.title}
                    title={data.title}
                    description={data.description}
                />
            ))}
        </View>
    );
}

About.propTypes = {

};

export default About;
