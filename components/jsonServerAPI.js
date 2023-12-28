import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContactsTab from './contactsTab';

const JSONServerAPI = () => {
    const [data, setData] = useState("")
    const url = "http://10.0.2.2:3000/users";
    const getAPIData = async () => {
        let result = await fetch(url);
        result = await result.json()
        setData(result);
    }
    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <ScrollView>
            <View style={styles.home}>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.welcometext}>JSON Server API</Text>
                    {
                        data.length ?
                            <FlatList
                                data={data}
                                renderItem={({ item }) =>
                                    <View style={styles.apidatacontainer}>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>ID: {item.id}</Text>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Name: {item.name}</Text>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Age: {item.age}</Text>
                                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Email: {item.email}</Text>
                                    </View>
                                }
                            />
                            : null
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default JSONServerAPI

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
        margin: 8,
        borderRadius: 15,
    },
})