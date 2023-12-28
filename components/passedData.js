import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PassedData = (props) => {
    const {name}= props.route.params;
    const {email}= props.route.params;
    const {password}= props.route.params;
    return (
        <View style={styles.home}>
            <View style={styles.introtextcontainer}>
                <Text style={styles.welcometext}>Pass data between Screens in Stack Navigation</Text>
                <View style={styles.inputcontainer}>
                    <Text style={styles.introtext}>
                        Name: {name}
                    </Text>
                </View>
                <View style={styles.inputcontainer}>
                    <Text style={styles.introtext}>
                        Email: {email}
                    </Text>
                </View>
                <View style={styles.inputcontainer}>
                    <Text style={styles.introtext}>
                        Password: {password}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PassedData

const styles = StyleSheet.create({
    home: {
        height: '100%',
        backgroundColor: '#dee3fc',
        paddingBottom: 10,
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
    inputcontainer: {
        flex: 0,
        flexDirection: 'row',
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
})