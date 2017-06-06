import { StyleSheet } from 'react-native';
import { colors } from './../../configs/styles';

export const styles = StyleSheet.create({
    faveScheduleItem: {
        width: '100%',
        height: 60,
    },
    faveScheduleTitle: {
        width: '100%',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    faveScheduleLocation: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heart: {
        color: colors.red,
    }
})
