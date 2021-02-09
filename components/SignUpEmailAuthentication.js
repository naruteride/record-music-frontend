import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input, Card } from 'react-native-elements';


function SignUpEmailAuthenticationScreen() {

    const emailAuthenticationIsNormal = false;


    return (
        <View style={styles.signUpEmailAuthenticationScreen}>
            <Card style={{ flex: 0, }} containerStyle={{ ...cardStyles }}>
                <Card.Title>email@address.com</Card.Title>
                <Card.Divider />
                <Text style={{
                    marginTop: "10%", 
                    marginBottom: 20,
                    height: "20%",
                }}>
                    위 이메일로 인증 코드를 보내시겠습니까?
                </Text>
                <Button title="인증코드 보내기"></Button>
            </Card>
            <View style={styles.signUpEmailAuthenticationInputContainer} >
                <View style={styles.codeContainer}>
                    <Input
                        label="이메일 인증 코드"
                        leftIcon={{ type: "font-awesome", name: "envelope", color: "#86929E" }}
                        placeholder="XXXXXX"

                        errorStyle={{ color: "red" }}
                        errorMessage={emailAuthenticationIsNormal ? "" : "코드가 틀립니다."}
                    />
                </View>
                <Button
                    title="인증하기"
                    buttonStyle={{
                        ...buttonStyles,
                        backgroundColor: '#0C154A',
                    }}
                // onPress={() => navigation.navigate("SignInEmail")}
                >
                </Button>
                {/* <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
					<Text style={styles.noAuthCodeButtonContainer} >
						혹시, 인증코드가 오지 않았나요? <Text style={{ color: "#1A2778" }}>재전송</Text>
					</Text>
				</TouchableOpacity> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    signUpEmailAuthenticationScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    signUpEmailAuthenticationInputContainer: {
        flex: 0,
        height: "50%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    codeContainer: {
        width: 300,
    },
	// noAuthCodeButtonContainer: {
	// 	color: "#606060",
	// }
})

const cardStyles = {
    flex: 0,
    width: 300,
    height: "40%",
    paddingBottom: 0,
    // backgroundColor: "gold"
}
const buttonStyles = {
    width: 300,
    height: 45,
    borderColor: "gray",
}

export default SignUpEmailAuthenticationScreen;