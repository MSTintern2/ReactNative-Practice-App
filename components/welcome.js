import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';

const Welcome = (props) => {
    return (
        <View>
            <Image
                style={styles.heroimage}
                // source={{uri: 'url'}}
                source={require('../assets/images/rn1.png')}
            />
            <View style={styles.welcomecontainer}>
                <View style={styles.contentcontainer}>
                    <Text style={styles.welcometext}>Welcome</Text>
                    <Text style={styles.introtext}>
                        My React Native practice app is a showcase of the components and features I've learned while learning the framework. Explore the app and learn from my work!</Text>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("Home")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Get Started</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    heroimage: {
        resizeMode: 'cover',
        width: '100%',
    },
    welcomecontainer: {
        position: 'absolute',
        top: 420,
        backgroundColor: '#dee3fc',
        height: 400,
        width: '100%',
        borderTopEndRadius: 60,
        borderTopStartRadius: 60,
    },
    contentcontainer: {
        margin: 20,
        padding: 10,
    },
    welcometext: {
        fontSize: 48,
        textAlign: 'center',
        padding: 10,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#193091',
    },
    introtext: {
        fontSize: 20,
        textAlign: 'justify',
        padding: 10,
        fontFamily: 'serif',
        color: '#3052ce',
    },
    btn: {
        fontSize: 24,
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 10,
        marginTop: 20,
        margin: 10,
        color: '#ffffff',
        borderRadius: 30,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    btn1: { backgroundColor: '#467cdb' },
})