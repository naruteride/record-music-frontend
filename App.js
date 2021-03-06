import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

// 하단 탭에 들어갈 컴포넌트들
import MainPageStackNavigator from './components/MainPage.js';
import SignInStackScreen from "./components/SignIn.js";
import SignUpStackScreen from "./components/SignUp.js";

const Stack = createStackNavigator();

export default function App() {

	let isSignedInToken = false;

	if (isSignedInToken) {
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="MainPage" component={MainPageStackNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		)
	} else {
		return (
			<NavigationContainer>

				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="SignIn" component={SignInStackScreen} />
					<Stack.Screen name="MainPage" component={MainPageStackNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}

//	         ___
//	 `-._\ /     `~~"--.,_
//	 ------>|              `~~"--.,_
//	  _.-'/ '.____,,,,----"""~~```'


/************************************************************

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



// 하단 네비게이션
const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="First"
				component={FirstStackNavigator}
				options={{
					tabBarLabel: 'First',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="로그인" component={LoginStackScreen}
				options={{
					tabBarLabel: '로그인',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="Third" component={ThirdStackScreen}
				options={{
					tabBarLabel: 'Third',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="Fourth" component={FourthStackScreen}
				options={{
					tabBarLabel: 'Fourth',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="Fifth" component={FifthStackScreen}
				options={{
					tabBarLabel: 'Fifth',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = {

}

********************************************/