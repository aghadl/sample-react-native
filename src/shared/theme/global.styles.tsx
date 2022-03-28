import { StyleSheet } from 'react-native';
import { RFValue as RF } from 'react-native-responsive-fontsize';
import { THEME } from '.';

const GST = StyleSheet.create({
    backIcon: {
        fontSize: RF(20),
    },
    backWrap: {
        width: RF(25),
        // height: RF(25),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: RF(10),
    },
    headerTitle: {
        fontSize: RF(20),
        fontFamily: THEME.fonts.medium,
        color: THEME.colors.dark,
    },
    headerStyle: {
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 0
    },
    pageWrap: {
        flex: 1,
        paddingTop: RF(35),
        paddingLeft: RF(15),
        paddingRight: RF(15),
        backgroundColor: THEME.colors.light,
        alignItems: 'flex-start',
    },
    inpMarginBottom: {
        marginBottom: RF(20)
    }
});

export { GST, RF }