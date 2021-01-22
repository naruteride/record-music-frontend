import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import BottomDrawer from 'rn-bottom-drawer';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 하단 탭에 들어갈 컴포넌트들
import FirstStackNavigator from './components/tabs/FirstTab.js';
import SecondStackScreen from "./components/tabs/SecondTab.js";
import ThirdStackScreen from "./components/tabs/ThirdTab.js";
import FourthStackScreen from "./components/tabs/fourthTab.js";
import FifthStackScreen from "./components/tabs/FifthTab.js";
import LoginStackScreen from "./components/login.js";


const TAB_BAR_HEIGHT = 40;
const HEADER_HEIGHT = 0;


export default function App() {
	return (
		<>
			<View style={styles.body}>
				{/* <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} /> */}
				<BottomDrawer
					style={styles.bottomDrawer}
					containerHeight={550}
					offset={TAB_BAR_HEIGHT + HEADER_HEIGHT}
					onExpanded={() => { console.log('expanded') }}
					onCollapsed={() => { console.log('collapsed') }}
					downDisplay={420}
					startUp={false}
					shadow={true}
				>
					{renderContent()}
				</BottomDrawer>
			</View>
		</>
	)
}

function renderContent() {
	return (
		<View>
			<Text>asdf</Text>
		</View>
	)
}



const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: "#fff",
	},
	bottomDrawer: {
		color: "red"
	}
});




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