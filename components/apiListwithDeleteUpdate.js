import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, Modal, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

const APIListWithDeleteUpdate = (props) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState("")
    const [userData, setUserData] = useState("")

    // GET

    const getAPIList = async () => {
        const url = "http://10.0.2.2:3000/formdata";
        // const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIList();
    }, []);

    // Delete 

    const deleteAPIList = async (id) => {
        const url = "http://10.0.2.2:3000/formdata";
        // const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
        // console.warn(`${url}/${id}`)
        let result = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });
        result = await result.json();
        if (result) {
            console.warn("Deleted successfully.");
            getAPIList();
        }
    }

    //Update

    const updateAPIList = (data) => {
        setShow(true)
        setUserData(data)
    }

    return (
        <ScrollView>
            <View style={styles.home}>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate("Post API with Form Data")}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn3]}>Add Data in API List</Text>
                </TouchableHighlight>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.welcometext}>API List with Delete & Update</Text>
                    {
                        data.length ?
                            <FlatList
                                data={data}
                                renderItem={({ item }) =>
                                    <View style={styles.apidatacontainer}>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>ID: {item.id}</Text>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>First Name: {item.fname}</Text>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Last Name: {item.lname}</Text>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Age: {item.age}</Text>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Email: {item.email}</Text>
                                        <View style={styles.btncontainer}>
                                            <TouchableHighlight
                                                onPress={() => updateAPIList(item)}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Update</Text>
                                            </TouchableHighlight>
                                            <TouchableHighlight
                                                onPress={() => deleteAPIList(item.id)}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn2]}>Delete</Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                }
                            />
                            : null
                    }
                </View>
                <Modal transparent={true} visible={show} animationType='slide'>
                    <UpdateModal setShow={setShow} userData={userData} getAPIList={getAPIList} />
                </Modal>
            </View>
        </ScrollView>
    )
}
//modal
const UpdateModal = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        if (props.userData) {
            setFname(props.userData.fname)
            setLname(props.userData.lname)
            setAge(props.userData.age.toString())
            setEmail(props.userData.email)
        }
    }, [props.userData])
    // console.warn(props.userData)
    const updateData = async () => {
        const url = "http://10.0.2.2:3000/formdata";
        // const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
        const id = props.userData.id;
        let result = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fname, lname, age, email })
        });
        result = await result.json();
        if (result) {
            props.getAPIList();
            props.setShow(false)
        }
    }
    return (
        <View style={styles.v1}>
            <View style={styles.v2}>
                <Text style={styles.welcometext}>Update Data</Text>
                <Text style={styles.introtext1}>First Name:</Text>
                <TextInput placeholder='Enter first name' style={styles.inputtext1} value={fname} onChangeText={(text) => setFname(text)} />
                <Text style={styles.introtext1}>Last Name:</Text>
                <TextInput placeholder='Enter last name' style={styles.inputtext1} value={lname} onChangeText={(text) => setLname(text)} />
                <Text style={styles.introtext1}>Age:</Text>
                <TextInput placeholder='Enter age' style={styles.inputtext1} value={age} onChangeText={(text) => setAge(text)} />
                <Text style={styles.introtext1}>Email:</Text>
                <TextInput placeholder='Enter email' style={styles.inputtext1} value={email} onChangeText={(text) => setEmail(text)} />
                <TouchableHighlight
                    onPress={updateData}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn3]}>Save</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => props.setShow(false)}
                    underlayColor={'transparent'}>
                    <Text style={[styles.btn, styles.btn3]}>Close</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default APIListWithDeleteUpdate

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
        width: 390,
        backgroundColor: '#ffffff',
        margin: 10,
        paddingBottom: 10,
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
    apidatacontainer: {
        backgroundColor: '#dee3fc',
        marginHorizontal: 14,
        marginVertical: 10,
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    btn: {
        fontSize: 24,
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 10,
        margin: 10,
        color: '#ffffff',
        borderRadius: 12,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    btn1: { backgroundColor: '#00c350' },
    btn2: { backgroundColor: '#E71C23' },
    btn3: { backgroundColor: '#467cdb' },
    btncontainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    v1: {
        height: '100%',
        felx: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    v2: {
        width: 360,
        backgroundColor: '#b8c3f9',
        borderRadius: 12,
        elevation: 10,
        shadowColor: 'black',
        padding: 10,
        borderWidth: 1,
        borderColor: '#7F8C8D',
    },
    introtext1: {
        fontSize: 20,
        textAlign: 'justify',
        paddingHorizontal: 10,
        fontFamily: 'serif',
        color: '#3052ce',
    },
    inputtext1: {
        margin: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        fontFamily: 'serif',
        color: '#000000',
        borderWidth: 1,
        borderColor: '#7F8C8D',
    },
})