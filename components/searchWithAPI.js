import { StyleSheet, Text, View, FlatList, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

const SearchWithAPI = () => {

    const [data, setData] = useState([])
    const searchData = async (text) => {
        // console.warm(text)
        const url = `http://10.0.2.2:3000/formdata?q=${text}`;
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
        // console.warm(url)
    }
    return (
        <ScrollView>
            <View style={styles.home}>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.welcometext}>Search With API</Text>
                    <TextInput placeholder='Search' style={styles.inputtext} onChangeText={(text) => searchData(text)} />
                    {
                        data.length ?
                            data.map((item) =>
                    <View style={styles.apidatacontainer}>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>ID: {item.id}</Text>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>First Name: {item.fname}</Text>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Last Name: {item.lname}</Text>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Age: {item.age}</Text>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Email: {item.email}</Text>
                    </View>)
                    : null
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default SearchWithAPI

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
        margin: 10,
        paddingHorizontal: 18,
        fontSize: 20,
        fontFamily: 'serif',
        color: '#000000',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#7F8C8D',
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