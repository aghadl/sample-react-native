//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GST } from '../../../shared/theme/global.styles';
import { STYLES } from './signup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import QratedInput from '../../../shared/components/input';
import QratedBtn from '../../../shared/components/button';

// create a component
const Signup = () => {
    return (
        <View style={GST.pageWrap}>
            <KeyboardAwareScrollView style={STYLES.container}>
                <QratedInput
                    placeholder='Last name'
                    wrapStyle={GST.inpMarginBottom} />
                <QratedInput
                    placeholder='First name'
                    wrapStyle={GST.inpMarginBottom} />
                <QratedInput
                    placeholder='Phone number'
                    wrapStyle={GST.inpMarginBottom}
                    keyboardType={'email-address'} />
                <QratedInput
                    placeholder='Email'
                    wrapStyle={GST.inpMarginBottom}
                    keyboardType={'email-address'} />
                <View style={STYLES.actionWrap}>
                    <QratedBtn
                        wrapStyle={STYLES.btnStl}
                        text={'Sign Up'} />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default Signup;
