//import liraries
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { QratedInpType } from '../models/interfaces';
import { THEME } from '../theme';
import { RF } from '../theme/global.styles';

// create a component
const QratedInput = (props: QratedInpType) => {
    const { rightIcon, wrapStyle } = props;
    return (
        <View style={[styles.container, wrapStyle]}>
            <TextInput style={styles.inp} {...props} />
            {
                rightIcon ? rightIcon() : null
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: THEME.colors.inputBackground,
        borderWidth: RF(1),
        borderRadius: RF(8),
        borderColor: THEME.colors.border
    },
    inp: {
        flex: 1,
        paddingTop: RF(10),
        paddingBottom: RF(10),
        paddingLeft: RF(10),
        paddingRight: RF(10),
    }
});

//make this component available to the app
export default QratedInput;
