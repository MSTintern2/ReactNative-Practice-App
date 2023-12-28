import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TextInput, Modal, Button } from 'react-native'
import React, { useState } from 'react'

const PostAPIwithFormData = () => {
    const [show, setShow] = useState(false)
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [fnameError, setFnameError] = useState(false);
    const [lnameError, setLnameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const submit = async () => {
        { !fname ? setFnameError(true) : setFnameError(false) }
        // if (!fname) {
        //     setFnameError(true)
        // } else {
        //     setFnameError(false)
        // }
        if (!lname) {
            setLnameError(true)
        } else {
            setLnameError(false)
        }
        if (!age) {
            setAgeError(true)
        } else {
            setAgeError(false)
        }
        if (!email) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        if (!fname || !lname || !age || !email) {
            return;
        }
        // console.warn("hello")
        const url = "http://10.0.2.2:3000/formdata";
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fname, lname, age, email })
        });
        result = await result.json();
        // console.warn(result);
        setShow(true)
    };
    const reset = () => {
        setFname(""), setAge(""), setLname(""), setEmail("")
    }
    return (
        <View style={styles.home}>
            <View style={styles.introtextcontainer}>
                <Text style={styles.welcometext}>General Form</Text>
                <View>
                    <Text style={styles.introtext}>First Name:</Text>
                    <TextInput placeholder='Enter first name' style={styles.inputtext} value={fname} onChangeText={(text) => setFname(text)} />
                    {
                        fnameError ? <Text style={styles.errortext}>Please enter first name.</Text> : null
                    }
                    <Text style={styles.introtext}>Last Name:</Text>
                    <TextInput placeholder='Enter last name' style={styles.inputtext} value={lname} onChangeText={(text) => setLname(text)} />
                    {
                        lnameError ? <Text style={styles.errortext}>Please enter last name.</Text> : null
                    }
                    <Text style={styles.introtext}>Age:</Text>
                    <TextInput placeholder='Enter age' style={styles.inputtext} value={age} onChangeText={(text) => setAge(text)} />
                    {
                        ageError ? <Text style={styles.errortext}>Please enter age.</Text> : null
                    }
                    <Text style={styles.introtext}>Email:</Text>
                    <TextInput placeholder='Enter email' style={styles.inputtext} value={email} onChangeText={(text) => setEmail(text)} />
                    {
                        emailError ? <Text style={styles.errortext}>Please enter email.</Text> : null
                    }
                </View>
                <View style={styles.btncontainer}>
                    <TouchableHighlight
                        onPress={submit}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn1]}>Submit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={reset}
                        underlayColor={'transparent'}>
                        <Text style={[styles.btn, styles.btn2]}>Reset</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <Modal transparent={true} visible={show} animationType='slide'>
                <View style={styles.v1}>
                    <View style={styles.v2}>
                        <Text style={styles.welcometext}>Form data entered Successfully</Text>
                        <TouchableHighlight
                            onPress={() => setShow(false)}
                            underlayColor={'transparent'}>
                            <Text style={[styles.btn, styles.btn3]}>Close</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default PostAPIwithFormData

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
        paddingVertical: 10,
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
    btn2: { backgroundColor: '#E71C23' },
    btn3: { backgroundColor: '#467cdb' },
    btncontainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    introtext: {
        fontSize: 20,
        textAlign: 'justify',
        paddingHorizontal: 10,
        fontFamily: 'serif',
        color: '#3052ce',
    },
    inputtext: {
        margin: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        fontFamily: 'serif',
        color: '#000000',
        borderWidth: 1,
        borderColor: '#7F8C8D',
    },
    v1: {
        height: '100%',
        felx: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    v2: {
        width: 300,
        backgroundColor: '#b8c3f9',
        borderRadius: 12,
        elevation: 10,
        shadowColor: 'black',
        padding: 10,
    },
    errortext: {
        fontSize: 15,
        paddingHorizontal: 10,
        color: '#E71C23',
    }
})