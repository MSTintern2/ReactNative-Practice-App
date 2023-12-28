import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const List = (props) => {
    return (
        <View style={styles.home}>
            <View style={styles.buttonscontainer}>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Flat List")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Flat List</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Map List")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Map List</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Flastlist using Props")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Flastlist using Props</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Section List")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn1]}>Section List</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default List

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