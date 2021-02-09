import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from "react-native-vector-icons";

import SignInEmailScreen from "./SignInEmail.js";
import SignUpStackScreen from "./SignUp.js";



const SignInStack = createStackNavigator();


function SignInStackScreen() {

	// 토큰 변수
	isSignedInToken = true;

	// 만약 토큰이 있을 경우 메인페이지로 보내버림
	// if (isSignedInToken) {
	// 	() => navigation.navigate("MainPage");
	// 	alert("asdf");
	// }

	return (
		<SignInStack.Navigator screenOptions={{ headerShown: false }}>
			<SignInStack.Screen
				name="SignIn"
				component={SignInScreen}
			/>
			<SignInStack.Screen
				name="SignInEmail"
				component={SignInEmailScreen}
			/>
			<SignInStack.Screen
				name="SignUp"
				component={SignUpStackScreen}
			/>
		</SignInStack.Navigator>
	);
}



function SignInScreen({ navigation }) {
	return (
		<View style={styles.signInScreen}>
			<View style={styles.signInLogoContainer}>
				<Image
					style={styles.logo}
					source={require("./../images/image6.png")}
				/>
			</View>
			<View style={styles.signInButtonContainer} >
				<Button
					title="이메일로 로그인"
					buttonStyle={{
						...buttonStyles,
						backgroundColor: '#0C154A',
					}}
					onPress={() => navigation.navigate("SignInEmail")}
				/>
				<View>
					<Text style={styles.or}>or</Text>
				</View>
				<Button
					type="outline"
					icon={{
						name: "google",
						size: 15,
						color: "#DB4437",
						type: "font-awesome-5",
					}}
					title="구글로 로그인"
					buttonStyle={{
						...buttonStyles
					}}
					titleStyle={{
						...buttonTitleStyles
					}}
				/>

				<Button
					type="outline"
					icon={{
						name: "facebook-square",
						size: 20,
						color: "#4267B2",
						type: "font-awesome-5",
					}}
					title="페이스북으로 로그인"
					buttonStyle={{
						...buttonStyles
					}}
					titleStyle={{
						...buttonTitleStyles
					}}
				/>

				<Button
					type="outline"
					icon={{
						name: "instagram",
						size: 20,
						color: "#8a3ab9",
						type: "font-awesome-5",
					}}
					title="인스타그램으로 로그인"
					buttonStyle={{
						...buttonStyles
					}}
					titleStyle={{
						...buttonTitleStyles
					}}
				/>
				<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
					<Text style={styles.goToSignUpButtonContainer} >
						혹시, 기프트뮤직이 처음이신가요? <Text style={{ color: "#1A2778" }}>회원가입</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	signInScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	signInLogoContainer: {
		flex: 0,
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "30%",
		marginTop: "10%",
	},
	logo: {
		height: 120,
		resizeMode: "contain",
	},
	signInButtonContainer: {
		flex: 0,
		height: "60%",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	or: {
		color: "gray",
		fontSize: 15,
	},
	goToSignUpButtonContainer: {
		color: "#606060",
	}
});

const buttonStyles = {
	width: 300,
	height: 45,
	borderColor: "gray",
}
const buttonTitleStyles = {
	color: "#606060"
}

export default SignInStackScreen;