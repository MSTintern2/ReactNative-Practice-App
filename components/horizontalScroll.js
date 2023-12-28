import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HorizontalScroll = () => {
    return (
        <View>
            <Text style={styles.heading}>Horizontal Scroll View</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.text}>Scroll</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Me</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>For</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>More</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>More...</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>😀</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>😁</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>😎</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>🤣</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>🤩</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>😋</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>😏</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>😱</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>🥵</Text>
                </View>
            </ScrollView>
            <Text></Text>  
        </View>
    )
}

export default HorizontalScroll;

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    container: {
        // backgroundColor: '#F5BCBA',
        marginTop: 8,
        marginBottom: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        padding: 8,
    },
    card: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 8,
        backgroundColor: '#74B9FF',
        borderRadius: 8,
    },
})