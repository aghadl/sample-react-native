//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QratedBtn from '../../../shared/components/button';
import QratedInput from '../../../shared/components/input';
import Wrapper from '../../../shared/components/wrapper';
import { GenericNavigation } from '../../../shared/models/interfaces';
import { GST } from '../../../shared/theme/global.styles';
import { STYLES } from './login.styles';

// create a component
const Login = ({ navigation }: GenericNavigation) => {

    return (
        <View style={GST.pageWrap}>
            <QratedInput
                placeholder='Email'
                wrapStyle={STYLES.mrgnBtm}
                keyboardType={'email-address'} />
            <QratedInput
                secureTextEntry={true}
                placeholder='Password'
                keyboardType={'email-address'}
                rightIcon={() => (
                    <TouchableOpacity style={STYLES.showBtnWrap}>
                        <Text style={STYLES.showTxt}>SHOW</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={STYLES.actionWrap}>
                <QratedBtn
                    wrapStyle={STYLES.btnStl}
                    text={'Log In'} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('forgot');
                    }}
                    style={STYLES.forgot}>
                    <Text style={STYLES.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
