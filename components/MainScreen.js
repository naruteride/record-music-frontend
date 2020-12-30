import React from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Icon } from 'native-base';

function MainScreen() {

    return (
        <View style={styles.container}>
            <Text>asdf</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E0E0E0",
    },
});

export default MainScreen;