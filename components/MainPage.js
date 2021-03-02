import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import BottomDrawer from 'rn-bottom-drawer';
import Drawer from "./Drawer.js";


const TAB_BAR_HEIGHT = 40;
const HEADER_HEIGHT = 0;


function MainPage() {

	function tangsuyuk() {
		alert("마커 클릭");
	}

	return (
		<>
			<View style={styles.body}>
				<MapView
					style={{ flex: 1 }}
					provider={PROVIDER_GOOGLE}
					initialRegion={{
						latitude: 37.300228031632635,
						longitude: 126.83764906912629,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}// 37.300228031632635, 126.83764906912629
				>
					<Marker
						coordinate={{
							latitude: 37.300228031632635,
							longitude: 126.83764906912629
						}}
						title="학교 앞 밥먹으면서"
						description="사랑비 - 김태우"
						onPress={tangsuyuk}
					>
						<Image
							source={require("./../images/KakaoTalk_20210209_174508299.jpg")}
							style={{
								height: 50,
								width: 50,
								objectFit: "cover",
								borderRadius: 25,
							}}
						/>
					</Marker>
				</MapView>

				<BottomDrawer
					style={styles.bottomDrawer}
					containerHeight={550}
					offset={TAB_BAR_HEIGHT + HEADER_HEIGHT}
					onExpanded={() => { console.log('expanded') }}
					onCollapsed={() => { console.log('collapsed') }}
					downDisplay={400}
					startUp={false}
					shadow={true}
				>
					<Drawer />
				</BottomDrawer>
			</View>
		</>
	)
}



const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: "#f0f0f0",
	},
	bottomDrawer: {
		overflow: "hidden",
	}
});


export default MainPage;