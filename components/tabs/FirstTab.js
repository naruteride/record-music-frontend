import React from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderBar from "../Header.js";
// import { SearchBar } from 'react-native-elements';   // 검색바 관련 모듈

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';




const Drawer = createDrawerNavigator(); // 좌측 슬라이드 메뉴


const FirstStack = createStackNavigator();
function FirstStackNavigator() {
    return (
        <FirstStack.Navigator>
            <FirstStack.Screen
                name="First"
                component={FirstScreen}
                options={{
                    headerTitle: props => <HeaderBar {...props} />
                }}
            />
        </FirstStack.Navigator>
    );
}



function FirstScreen({ navigation }) {
    return (
        <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} />
    );
}

const styles = StyleSheet.create({

});

export default FirstStackNavigator;