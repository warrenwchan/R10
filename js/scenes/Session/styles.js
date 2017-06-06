import { StyleSheet } from  'react-native';
import { fonts, colors } from './../../configs/styles';

import PropTypes from 'prop-types'

export const styles = StyleSheet.create({
    sessionHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heart: {
        color: colors.red,
    },
    sessionContain: {
        flex: 1,
        padding: 20,
    },
    sessionGreyText: {
        fontFamily: fonts.fontMain,
        color: colors.mediumGrey,
        fontSize: 13,
        marginBottom: 15
    },
    sessionTitle: {
        fontFamily: fonts.fontMain,
        fontSize: 22,
        marginBottom: 15
    },
    sessionTime: {
        fontFamily: fonts.fontMain,
        fontSize: 13,
        color: colors.red,
        marginBottom: 15
    },
    sessionDescription: {
        fontFamily: fonts.fontMainLight,
        fontSize: 14,
        marginBottom: 15
    },
    sessionSpeakerName: {
        fontFamily: fonts.fontMain,
        fontSize: 13,
        marginBottom: 15
    },
    speakerContain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    speakerImage: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 25,
        marginBottom: 20
    },
    faveButton: {
        margin: 20,
        alignItems: 'center',
    },
    buttonTitle: {
        color: colors.white
    },
    linearGradient: {
        padding:10,
        backgroundColor: 'transparent',
        width: '80%',
        alignItems: 'center',
        borderRadius: 15,
    }
});

styles.propTypes = {
    fonts: PropTypes.object,
    colors: PropTypes.object,
}
