import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const Home = (props) => {
    return (
        <ScrollView>
            <View style={styles.home}>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.introtext}>
                        This app is a collection of interactive examples of the components and features that I have learned while learning React Native. I created this app to help myself practice and solidify my understanding of the framework, and I hope that it will be a valuable resource for other React Native learners.
                    </Text>
                </View>
                <Text style={styles.welcometext}>Click on buttons to explore the components and features that I have learned while learning React Native.</Text>
                <View style={styles.buttonscontainer}>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("First App")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>First App</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("Text Handling")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Text Handling</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("Basic Form")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Basic Form</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("List")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>List</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("UI")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>UI</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("Cards")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Cards</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("Use Effect")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Use Effect</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("Dialog Box")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Dialog Box</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("Others")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Others...</Text>
                </TouchableHighlight>
                <TouchableHighlight
                        onPress={() => props.navigation.navigate("APIs")}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>APIs</Text>
                </TouchableHighlight>
                </View>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.welcometext}>Check Operating System</Text>
                    <Text style={[styles.introtext,{textAlign:'center'}]}>
                        You are using {Platform.OS} operating system.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {
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
        fontSize: 20,
        textAlign: 'justify',
        padding: 10,
        fontFamily: 'serif',
        color: '#3052ce',
    },
    welcometext: {
        fontSize: 22,
        textAlign: 'center',
        padding: 10,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#193091',
        marginHorizontal: 20,
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
})
