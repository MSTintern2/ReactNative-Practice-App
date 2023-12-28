import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const VideoCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Video Card</Text>
            <View style={styles.c1}>
            <WebView
                source={{ uri: "R34.mp4" }}
                automaticallyPlay={true}
                resizeMode="contain"
                controls={true}
                />
            <Text style={styles.heading}>Video Card</Text>
            </View>
        </View>
    )
}

export default VideoCard

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
        height: 400,
        backgroundColor: '#82E0AA',
    },
})