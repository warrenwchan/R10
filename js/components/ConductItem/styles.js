import { StyleSheet } from 'react-native';
import { colors, fonts } from './../../configs/styles';

export const styles = StyleSheet.create({
    itemContain: {
    },
    itemTitle: {
        color: colors.purple,
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    itemDesc: {
        fontSize: 14,
        fontFamily: fonts.fontMainLight,
        paddingBottom: 10
    },
    infoButton: {
        marginRight: 10
    },
    infoClosed: {
        height: 0,
    },
});
