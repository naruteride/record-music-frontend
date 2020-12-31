import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 하단 탭에 들어갈 컴포넌트들
import MainScreen from './components/MainScreen.js';
import HomeStackScreen from "./components/AppTabNavigator/HomeTab.js";


// App()
export default function App() {
	return (
		<>
			< NavigationContainer >
				<MyTabs />
			</NavigationContainer >
		</>
	);
};



// 해더
function HeaderBar() {
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
			<Text>asdfasdfasdf</Text>
			<TouchableOpacity onPress={() => alert('This is a button!')}>
				<Image
					style={{ width: 32, height: 32 }}
					source={require('./images/image6.png')}
				/>
			</TouchableOpacity>
		</View>
	);
}




// 하단 네비게이션
const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Main" component={MainScreen} />
			<Tab.Screen name="Home" component={HomeStackScreen} />
			<Tab.Screen name="Settings" component={SettingsStackScreen} />
		</Tab.Navigator>
	);
}


// 셋팅
const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen name="Details" component={DetailsScreen} />
		</SettingsStack.Navigator>
	);
}



function SettingsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
}


function DetailsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Details!</Text>
		</View>
	);
}







const styles = {

}