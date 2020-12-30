import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen.js';

function LogoTitle() {
	return (
		<View style={{
			flex: 1,
			justifyContent: 'space-between',
			alignContent: "center",
			flexDirection: 'row',
		}}>
			<Image
				style={{ width: 32, height: 32 }}
				source={require('./images/image6.png')}
			/>
			<Text style={{ textAlignVertical: 'center', backgroundColor: "blue" }}>
				asdf
			</Text>
			<Image
				style={{ width: 32, height: 32 }}
				source={require('./images/image6.png')}
				onClick={() => alert('This is a button!')}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function RootStack() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ gestureEnabled: false }}
		>
			<Stack.Screen
				name="Home"
				component={MainScreen}
				options={{
					headerTitle: props => <LogoTitle {...props} />,
				}}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return <NavigationContainer>
		<RootStack />
	</NavigationContainer>;
}

const styles = {

}