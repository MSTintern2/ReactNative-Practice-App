import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'

const APIs = (props) => {
    return (
            <View style={styles.home}>
                <View style={styles.buttonscontainer}>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("Fetch API")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Fetch Rest API</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("List With API")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>List With API</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("JSON Server API")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>JSON Server API</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("Simple Post API")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Simple Post API</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("Post API with Form Data")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Post API with Form Data</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("API List With Delete & Update")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>API List With Delete & Update</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("Search With API")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Search With API</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("Async Storage")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Async Storage</Text>
                    </TouchableHighlight>
                </View>
            </View>
    )
}

export default APIs

const styles = StyleSheet.create({
    home: {
        height: '100%',
        backgroundColor: '#dee3fc',
        paddingBottom: 10,
        paddingTop: 10,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    introtextcontainer: {
        width: 350,
        backgroundColor: '#ffffff',
        margin: 20,
        padding: 10,
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    introtext: {
        fontSize: 22,
        textAlign: 'justify',
        padding: 10,
        fontFamily: 'serif',
        color: '#3052ce',
    },
    inputtext: {
        width: 230,
        fontSize: 20,
        fontFamily: 'serif',
        color: '#000000',
    },
    welcometext: {
        fontSize: 22,
        textAlign: 'center',
        padding: 10,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#193091',
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    buttonscontainer: {
        width: 350,
    },
    btn: {
        fontSize: 24,
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 10,
        marginTop: 10,
        margin: 10,
        color: '#ffffff',
        borderRadius: 12,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    btn1: { backgroundColor: '#467cdb' },
    inputcontainer: {
        flex: 0,
        flexDirection: 'row',
    },
})