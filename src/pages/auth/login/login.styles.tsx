import { StyleSheet } from 'react-native';
import { THEME } from '../../../shared/theme';
import { RF } from '../../../shared/theme/global.styles';

export const STYLES = StyleSheet.create({
    mrgnBtm: {
        marginBottom: RF(20)
    },
    showBtnWrap: {
        paddingLeft: RF(10),
        paddingRight: RF(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    showTxt: {
        fontSize: RF(10),
        color: THEME.colors.appBlue,
        fontFamily: THEME.fonts.primary,
        letterSpacing: RF(2.25)
    },
    actionWrap: {
        marginTop: RF(50),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStl: {
        width: '100%'
    },
    forgot: {
        marginTop: RF(20),
    },
    forgotText: {
        fontFamily: THEME.fonts.medium,
        fontSize: RF(16),
        color: THEME.colors.appBlue
    }
});