import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, SearchBar } from 'react-native-elements';

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

	// 화면 너비를 받아오는 변수
	const windowWidth = useWindowDimensions().width;

	return (
		<View style={styles.drawer}>
			<View style={styles.handle} />
			{/* <SearchBar
				style={{
					flex: 0,
					width: ((windowWidth / 100) * 70 - 32),
				}}
				lightTheme={true}
				containerStyle={{
					width: "80%",
					borderWidth: 0,
					padding: 0,
					backgroundColor: "rgba(255, 255, 255, 0)",
				}}
				inputContainerStyle={{
					borderRadius: 30,
				}}
				inputStyle={{
					
				}}
				placeholder="ㅇㅇㅇ로"
				// onChangeText={this.updateSearch}
				// value={search}
			/> */}
		</View>
	);
}


const styles = StyleSheet.create({
	drawer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	handle: {
		flex: 0,
		height: 5,
		borderRadius: 2.5,
		width: 100,
		marginVertical: 15,
		backgroundColor: "#EAEBED",
	}
});

export default DrawerStackScreen;