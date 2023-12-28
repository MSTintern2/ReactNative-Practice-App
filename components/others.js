import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'

const Others = (props) => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        return (
                <ScrollView>
                        <View style={styles.home}>
                                <View style={styles.buttonscontainer}>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Status Bar")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Status Bar</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("WebView npm Package")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>WebView npm Package</Text>
                                        </TouchableHighlight>
                                </View>
                                <View style={styles.introtextcontainer}>
                                        <Text style={styles.welcometext}>Pass data between Screens in Stack Navigation</Text>
                                        <View style={styles.inputcontainer}>
                                                <Text style={styles.introtext}>Name:</Text>
                                                <TextInput placeholder='Enter name' style={styles.inputtext} onChangeText={(text)=>setName(text)}/>
                                        </View>
                                        <View style={styles.inputcontainer}>
                                                <Text style={styles.introtext}>Email:</Text>
                                                <TextInput placeholder='Enter email' style={styles.inputtext} onChangeText={(text)=>setEmail(text)}/>
                                        </View>
                                        <View style={styles.inputcontainer}>
                                                <Text style={styles.introtext}>Password:</Text>
                                                <TextInput placeholder='Enter password' style={styles.inputtext} secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
                                        </View>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Passed Data",{name, email, password})}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Pass Data</Text>
                                        </TouchableHighlight>
                                </View>
                                <View style={styles.introtextcontainer}>
                                        <Text style={styles.welcometext}>Tab Navigation in React Native</Text>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Tab Navigation")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Tab Navigation</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Top Tab Navigation")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Top Tab Navigation</Text>
                                        </TouchableHighlight>
                                </View>
                        </View>
                </ScrollView>
        )
}

export default Others

const styles = StyleSheet.create({
        home: {
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