import { StyleSheet } from  'react-native';
import { fonts } from './../../configs/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    logoContain: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20,
    },
    heading: {
        paddingBottom: 10
    },
    subTitle: {
        fontSize: 18,
        paddingBottom: 10,
        fontFamily: fonts.fontMain
    },
    subText: {
        paddingBottom: 10,
        fontFamily: fonts.fontMainLight
    }
});
