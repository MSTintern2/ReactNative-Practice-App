import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Show_Hide_Toggle = () => {
    const [show, setShow] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Show & Hide & Toggle</Text>
            {
                show ? <User /> : null
            }
            <View style={styles.btn}>
                <Button title='Hide Component' color={'#FF5233'} onPress={() => setShow(false)} />
            </View>
            <View style={styles.btn}>
                <Button title='Show Component' color={'#28B463'} onPress={() => setShow(true)} />
            </View>
            <View style={styles.btn}>
                <Button title='Toggle Component' color={'#3498DB'} onPress={() => setShow(!show)} />
            </View>
            <Text></Text>
            <Text></Text>
        </View>
    )
}

const User = () => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>UI Component</Text>
        </View>
    )
}

export default Show_Hide_Toggle

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    box: {
        width: 'auto',
        height: 150,
        backgroundColor: '#BB8FCE',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 15,
    },
    btn: {
        paddingTop: 8,
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    }
})