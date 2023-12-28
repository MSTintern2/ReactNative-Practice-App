import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BasicForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [display, setDisplay] = useState("")
    const cleardisplay = () => {
        setDisplay('false'), setName(""), setEmail(""), setPassword("")
    }
    const [passwordVisible, setPasswordVisible] = useState(true)
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Basic Form in react native</Text>
                    <Text style={styles.title}>Enter Name:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter Your Name'
                        value={name}
                        onChangeText={(text) => setName(text)}//call back function
                    />
                    <Text style={styles.title}>Enter Email:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter Your Email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}//call back function
                    />
                    <Text style={styles.title}>Enter Password:</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter Your Password'
                        secureTextEntry={passwordVisible} //for password ******
                        value={password}
                        onChangeText={(text) => setPassword(text)}//call back function
                    />
                    <View style={styles.btn}>
                        <Button
                            title={'Show Password'}
                            color={'#74B9FF'}
                            onPress={
                                passwordVisible ? () => setPasswordVisible(false) : () => setPasswordVisible(true)}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button
                            color={'#D63031'}
                            title='Clear Info'
                            onPress={cleardisplay}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button
                            color={'#43BE31'}
                            title='Print Info'
                            onPress={() => setDisplay('true')}
                        />
                    </View>
                    <View>
                        {
                            display ?
                                <View>
                                    <Text>User Name: {name}</Text>
                                    <Text>User Email: {email}</Text>
                                    <Text>User Password: {password}</Text>
                                </View> : null //if display true show view otherwise null
                        }
                    </View>
                </View>
                <Text></Text>
                <Text></Text>
            </SafeAreaView>
        </View>
    )
}

export default BasicForm

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    title: {
        fontSize: 22,
        paddingVertical: 8,
        fontWeight: 'bold',
    },
    textinput: {
        fontSize: 20,
        paddingHorizontal: 8,
        backgroundColor: '#DAE0E2',
        borderWidth: 1,
    },
    btn: {
        paddingTop: 15,
    },
    showpassword: {
        fontSize: 16,
        paddingTop: 4,
        color: '#0A79DF',
    }
})