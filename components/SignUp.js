import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpEmailAuthenticationScreen from "./SignUpEmailAuthentication.js";



const SignUpStack = createStackNavigator();

function SignUpStackScreen() {
	return (
		<SignUpStack.Navigator screenOptions={{ headerShown: false }}>
			<SignUpStack.Screen
				name="SignUp"
				component={SignUpScreen}
			/>
			<SignUpStack.Screen
				name="SignUpEmailAuthentication"
				component={SignUpEmailAuthenticationScreen}
			/>
		</SignUpStack.Navigator>
	);
}

function SignUpScreen({ navigation }) {

	const emailIsNormal = false;
	const passwordIsNormal = false;
	const confirmPasswordIsNotNormal = false;


	return (
		<View style={styles.signUpScreen}>
			<View style={styles.signUpInputContainer} >
				<View style={styles.idPwContainer}>
					<Input
						label="이메일 주소"
						leftIcon={{ type: "font-awesome", name: "envelope", color: "#86929E" }}
						placeholder="email@address.com"

						errorStyle={{ color: "red" }}
						errorMessage={emailIsNormal ? "" : "올바른 이메일 형식이 아닙니다."}
					/>

					<Input
						label="비밀번호"
						leftIcon={{ type: "font-awesome", name: "lock", color: "#86929E" }}
						placeholder="••••••••••"
						secureTextEntry={true}

						errorStyle={{ color: "red" }}
						errorMessage={passwordIsNormal ? "" : "비밀번호는 8자 이상, 30자 이하입니다."}
					/>

					<Input
						label="비밀번호 확인"
						leftIcon={{ type: "font-awesome", name: "lock", color: "#86929E" }}
						placeholder="••••••••••"
						secureTextEntry={true}

						errorStyle={{ color: "red" }}
						errorMessage={confirmPasswordIsNotNormal ? "" : "비밀번호가 일치하지 않습니다."}
					/>
				</View>
				<Button
					title="다음단계"
					buttonStyle={{
						...buttonStyles,
					}}
					icon={{
						type: "font-awesome",
						name: "chevron-right",
						size: 15,
						color: "white"
					}}
					onPress={() => navigation.navigate("SignUpEmailAuthentication")}
				>
				</Button>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	signUpScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	signUpInputContainer: {
		flex: 0,
		height: "80%",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	idPwContainer: {
		width: 300,
	},
})


const buttonStyles = {
	flexDirection: "row-reverse",
	width: 300,
	height: 45,
	backgroundColor: '#0C154A',
}

export default SignUpStackScreen;