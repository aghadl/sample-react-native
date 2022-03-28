import React from 'react';
import { TouchableOpacity } from 'react-native';
import B from 'react-native-vector-icons/Ionicons';
import { GenericNavigation } from '../models/interfaces';
import { GST } from '../theme/global.styles';

export const AuthHeaderConfigs: any = ({ navigation }: GenericNavigation) => {
    return {
        headerTitleAlign: 'center',
        headerStyle: GST.headerStyle,
        headerTitleStyle: GST.headerTitle,
        headerLeft: () => (
            <TouchableOpacity style={GST.backWrap} onPress={() => {
                navigation.goBack();
            }}>
                <B name={'ios-arrow-undo-sharp'} style={GST.backIcon} />
            </TouchableOpacity>
        )
    }
}