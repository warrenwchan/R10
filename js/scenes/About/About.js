import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

import ConductiveItem from './../../components/ConductItem'

const About = ({ datas }) => {
    // console.log(data)
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logoContain}>
                    <Image source={require('./../../assets/images/r10_logo.png')}/>
                </View>
                {datas.map((data) => (
                    <ConductiveItem
                        key={data.title}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

About.propTypes = {

};

export default About;
