//import liraries
import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Confirmation from '../pages/auth/confirmation';
import Welcome from '../pages/auth/welcome';
import Login from '../pages/auth/login';
import { AuthHeaderConfigs } from '../shared/utils';
import ForgotPassword from '../pages/auth/forgot';
import Signup from '../pages/auth/signup';


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <>
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor={'white'}
            />
            <Stack.Navigator screenOptions={AuthHeaderConfigs}>
                <Stack.Screen
                    name="confirmation"
                    component={Confirmation}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        title: 'Login'
                    }}
                />
                <Stack.Screen
                    name="forgot"
                    component={ForgotPassword}
                    options={{
                        title: 'Forgot Password'
                    }}
                />
                <Stack.Screen
                    name="register"
                    component={Signup}
                    options={{
                        title: 'Sign up'
                    }}
                />
            </Stack.Navigator>
        </>
    );
};

export default AuthStack;
