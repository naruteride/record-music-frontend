import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

// import SignInEmailScreen from "./SignInEmail.js";



const DrawerStack = createStackNavigator();


function DrawerStackScreen() {

	return (
		<DrawerStack.Navigator screenOptions={{ headerShown: false }}>
			<DrawerStack.Screen
				name="Drawer"
				component={DrawerScreen}
			/>
		</DrawerStack.Navigator>
	);
}



function DrawerScreen({ navigation }) {
	return (
		<View style={styles.drawerContainer}>
			<Text>fuck</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	drawerContainer: {
        // width: 100,
        // height: 100,
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		// backgroundColor: "gold",
        // opacity: 1,
	}
});

export default DrawerStackScreen;