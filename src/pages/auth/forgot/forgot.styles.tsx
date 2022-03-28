import { StyleSheet } from 'react-native';
import { THEME } from '../../../shared/theme';
import { RF } from '../../../shared/theme/global.styles';

export const STYLES = StyleSheet.create({
    mrgnBtm: {
        marginBottom: RF(20)
    },
    orWrap: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: RF(20),
    },
    line: {
        flex: 0.43,
        height: RF(1),
        backgroundColor: THEME.colors.border
    },
    ort: {
        color: THEME.colors.greyish,
        fontSize: RF(12),
        fontFamily: THEME.fonts.medium
    },
    actionWrap: {
        marginTop: RF(20),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStl: {
        width: '100%'
    },
});
