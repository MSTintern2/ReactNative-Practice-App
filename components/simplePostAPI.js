import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native'
import React from 'react'

const SimplePostAPI = () => {

    const saveAPIData = async () => {
        // if(!data)
        // {
        //     console.warn("JSON Server Offline.")
        // } else {
        //     console.warn(result)
        // }
        const data = {
            name: "Arham",
            age: 20,
            email: "arham123@gmail.com"
        };
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        result = await result.json();
        
    }

    return (
        <View style={styles.home}>
            <View style={styles.introtextcontainer}>
                <Text style={styles.welcometext}>Simple Post API</Text>
                <TouchableHighlight
                    onPress={saveAPIData}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Post Data ( API Call )</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default SimplePostAPI

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
        width: 390,
        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
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
})