import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';



function SignInEmailScreen({ navigation }) {

	const emailIsNormal = false;
	const passwordIsNormal = false;


	return (
		<View style={styles.signInEmailScreen}>
			<View style={styles.signInEmailLogoContainer}>
				<Image
					style={styles.logo}
					source={require("./../images/image6.png")}
				/>
			</View>
			<View style={styles.signInInputContainer} >
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
				</View>
				<Button
					title="로그인"
					buttonStyle={{
						...buttonStyles,
						backgroundColor: '#0C154A',
					}}
					onPress={() => navigation.navigate('MainPage')}
				>
				</Button>

				<View
					style={{
						flex: 0,
						flexDirection: "row",
						width: 300,
					}}
				>
					<TouchableOpacity style={{flex: 1, }}>
						<Text style={styles.informationFindButton} >
							아이디 찾기
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={{flex: 1}}>
						<Text style={styles.informationFindButton} >
							비밀번호 찾기
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	signInEmailScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	signInEmailLogoContainer: {
		flex: 0,
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "20%",
		marginTop: "10%",
	},
	logo: {
		height: 80,
		resizeMode: "contain",
	},
	signInInputContainer: {
		flex: 0,
		height: "70%",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	idPwContainer: {
		width: 300,
	},
	informationFindButton: {
		color: "#606060",
		textAlign: 'center'
	}
})


const buttonStyles = {
	width: 300,
	height: 45,
	borderColor: "gray",
}

export default SignInEmailScreen;