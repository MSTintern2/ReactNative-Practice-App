import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const FetchAPI = () => {
    //to display data on screen
    const [data, setData] = useState("")
    //async fun to get api, fetch api, json format
    const getAPIData = async () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
        let result = await fetch(apiURL);
        result = await result.json();
        setData(result)
    }
    //useEffect to load api on Mount
    useEffect(() => {
        getAPIData();
    }, []);

    return (
        <ScrollView>
            <View style={styles.home}>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.welcometext}>API Call</Text>
                    <Text style={[styles.introtext, { textAlign: 'justify' }]}>
                        First of all make a async function. Get API URL in a variable. Fetch data from URL and save it in a variable with await.
                        Convert it into JSON formate with await. Make a useState to display data on screen. Store result in useState. We use useEffect bcs we want to load API
                        on Mount.
                    </Text>
                </View>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.welcometext}>API URL</Text>
                    <Text style={[styles.introtext, { textAlign: 'justify' }]}>https://jsonplaceholder.typicode.com/posts/1</Text>
                    <Text style={styles.welcometext}>API Data</Text>
                    <Text style={[styles.introtext, { textAlign: 'justify' }]}>ID: {data.id}</Text>
                    <Text style={[styles.introtext, { textAlign: 'justify' }]}>USer ID: {data.userId}</Text>
                    <Text style={[styles.introtext, { textAlign: 'justify' }]}>Title: {data.title}</Text>
                    <Text style={[styles.introtext, { textAlign: 'justify' }]}>Body: {data.body}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default FetchAPI

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
        paddingHorizontal: 10,
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
})