import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

const ListWithAPI = () => {

    const [data, setData] = useState("")
    const getAPIList = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIList();
    }, []);

    return (
        <ScrollView>
            <View style={styles.home}>
                <View style={styles.introtextcontainer}>
                    <Text style={styles.welcometext}>List with API Data</Text>
                    {/* {
                        data.length ? 
                        data.map((item)=>
                        <View style={styles.apidatacontainer}>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>ID: {item.id}</Text>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>UserID: {item.userId}</Text>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Title: {item.title}</Text>
                        <Text style={[styles.introtext, { textAlign: 'justify' }]}>Body: {item.body}</Text>
                        </View>
                        ) : null
                    } */}
                    {
                        data.length ? 
                        <FlatList
                            data={data}
                            renderItem={({item})=>
                            <View style={styles.apidatacontainer}>
                            <Text style={[styles.introtext, { textAlign: 'justify' }]}>ID: {item.id}</Text>
                            <Text style={[styles.introtext, { textAlign: 'justify' }]}>UserID: {item.userId}</Text>
                            <Text style={[styles.introtext, { textAlign: 'justify' }]}>Title: {item.title}</Text>
                            <Text style={[styles.introtext, { textAlign: 'justify' }]}>Body: {item.body}</Text>
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

export default ListWithAPI

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