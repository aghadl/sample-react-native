import { NavigationProp, RouteProp } from "@react-navigation/native";
import { TextInputProps } from "react-native";

export interface Wrap {
    children?: any;
    style?: any;
}


export interface QratedBtnType {
    text: any,
    onPress?: () => void,
    textStyle?: any,
    wrapStyle?: any
}

export interface GenericNavigation {
    navigation: NavigationProp<any>;
    route: RouteProp<any, any>;
}

export interface QratedInpType extends TextInputProps {
    rightIcon?: any,
    wrapStyle?: any
}