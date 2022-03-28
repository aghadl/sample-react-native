//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import QratedBtn from '../../../shared/components/button';
import QratedInput from '../../../shared/components/input';
import { GST } from '../../../shared/theme/global.styles';
import { STYLES } from './forgot.styles';

// create a component
const ForgotPassword = () => {
    return (
        <View style={GST.pageWrap}>
            <QratedInput
                placeholder='Email'
                wrapStyle={STYLES.mrgnBtm}
                keyboardType={'email-address'} />
            <View style={STYLES.orWrap}>
                <View style={STYLES.line}></View>
                <View>
                    <Text style={STYLES.ort}>OR</Text>
                </View>
                <View style={STYLES.line}></View>
            </View>
            <QratedInput
                placeholder='Phone'
                wrapStyle={STYLES.mrgnBtm}
                keyboardType={'number-pad'} />
            <View style={STYLES.actionWrap}>
                <QratedBtn
                    wrapStyle={STYLES.btnStl}
                    text={'Recover Password'} />
            </View>
        </View >
    );
};

export default ForgotPassword;
