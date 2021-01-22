import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Button,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const LoginStack = createStackNavigator();
function LoginStackScreen() {
	;

	return (
		<LoginStack.Navigator>
			<LoginStack.Screen
				name="임시 로그인 페이지"
				component={LoginScreen}
			/>
		</LoginStack.Navigator>
	);
}



function LoginScreen({ navigation }) {
	
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../images/image6.png")} />

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Email."
					placeholderTextColor="#003f5c"
					// onChangeText={(email) => setEmail(email)}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Password."
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					// onChangeText={(password) => setPassword(password)}
				/>
			</View>

			<TouchableOpacity>
				<Text style={styles.forgot_button}>Forgot Password?</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.loginBtn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		</View>

	);
}

// 디테일스
function DetailsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Details!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	image: {
		marginBottom: 40,
	},

	inputView: {
		backgroundColor: "#B8D1EC",
		borderRadius: 30,
		width: "70%",
		height: 45,
		marginBottom: 20,

		alignItems: "center",
	},

	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		alignSelf: 'flex-start',
		marginLeft: 20,
	},

	forgot_button: {
		height: 30,
		marginBottom: 30,
	},

	loginBtn: {
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#324C69",
	},
	loginText: {
		color: "#fff"
	}
});

export default LoginStackScreen;