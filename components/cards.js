import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const Cards = (props) => {
    return (
        <View style={styles.home}>
            <View style={styles.buttonscontainer}>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Image Card")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Image Card</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Action Card")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Action Card</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Video Card")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Video Card</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    home: {
        height: '100%',
        backgroundColor: '#dee3fc',
        paddingBottom: 10,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
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
})