import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ASYNCStorage = () => {
    const [userData, setUserData] = useState("")
    //setdata
    const setData = async () => {
        // await AsyncStorage.setItem("key", "Value")
        await AsyncStorage.setItem("name", "Haider Mukhtar")
    }
    //getdata
    const getData = async () => {
        // const name = await AsyncStorage.getItem("key")
        const name = await AsyncStorage.getItem("name")
        console.warn(name)
        setUserData(name)
    }
    //removeData
    const removeData = async () => {
        await AsyncStorage.removeItem("name")
        setUserData("")
    }
    return (
        <View style={styles.home}>
            <View style={styles.introtextcontainer}>
                <Text style={styles.welcometext}>Search With API</Text>
                <View style={styles.buttonscontainer}>
                    <TouchableHighlight
                        onPress={setData}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Set Data</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={getData}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Get Data</Text>
                    </TouchableHighlight>
                    <Text style={styles.welcometext}>Data get from Async Storage: {userData}</Text>
                    <TouchableHighlight
                        onPress={removeData}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Remove Data</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default ASYNCStorage

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
    buttonscontainer: {
        width: '100%',
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
    introtextcontainer: {
        width: 390,
        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
})