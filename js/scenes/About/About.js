import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

import ConductiveItem from './../../components/ConductItem'

const About = ({ datas }) => {
    // console.log(data)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoContain}>
                <Image
                    source={require('./../../assets/images/r10_logo.png')}
                />
            </View>
            <View style={styles.heading}>
                <Text style={styles.subText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
                <Text style={styles.subTitle}>Date & Venue</Text>
                <Text style={styles.subText}>The R10 conference will take place on Tuesday, June 27,2017 in Vancouver, BC.</Text>
                <Text style={styles.subTitle}>Code of Conduct</Text>
            </View>
            {datas.map((data) => (
                <ConductiveItem
                    key={data.title}
                    title={data.title}
                    description={data.description}
                />
            ))}
        </ScrollView>
    );
}

About.propTypes = {
    datas: PropTypes.array
};

export default About;
