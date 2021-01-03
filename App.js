import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 하단 탭에 들어갈 컴포넌트들
import FirstStackNavigator from './components/AppTabNavigator/FirstTab.js';
import SecondStackScreen from "./components/AppTabNavigator/SecondTab.js";
import ThirdStackScreen from "./components/AppTabNavigator/ThirdTab.js";
import FourthStackScreen from "./components/AppTabNavigator/fourthTab.js";
import FifthStackScreen from "./components/AppTabNavigator/FifthTab.js";


// App()
export default function App() {
	return (
		<>
			<NavigationContainer>
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
			<Tab.Screen name="First" component={FirstStackNavigator} />
			<Tab.Screen name="Second" component={SecondStackScreen} />
			<Tab.Screen name="Third" component={ThirdStackScreen} />
			<Tab.Screen name="Fourth" component={FourthStackScreen} />
			<Tab.Screen name="Fifth" component={FifthStackScreen} />
		</Tab.Navigator>
	);
}




const styles = {

}