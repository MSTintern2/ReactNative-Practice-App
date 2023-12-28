import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebView_npm_Package = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>WebView npm Package</Text>
                <View style={styles.c1}>
                    <WebView source={{ uri: "http://www.mikrostartech.com/index.html" }} />
                </View>
        </View>
    )
}

export default WebView_npm_Package

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 6,
    },
    c1: {
        width: 'auto',
        height: 750,
    },
})