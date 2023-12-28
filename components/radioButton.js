import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Radio_Button = () => {
    const [radio, setRadio] = useState(1)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Radio Button (React Native)</Text>
            <View style={styles.container1}>
                <TouchableOpacity onPress={() => setRadio(1)}>
                    <View style={styles.r1}>
                        <View style={styles.radio}>
                            {
                                radio === 1 ? <View style={styles.radiobg}></View> : null
                            }
                        </View>
                        <Text style={styles.text}>Radio 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRadio(2)}>
                    <View style={styles.r1}>
                        <View style={styles.radio}>
                            {
                                radio === 2 ? <View style={styles.radiobg}></View> : null
                            }
                        </View>
                        <Text style={styles.text}>Radio 2</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Radio_Button

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    container1: {
        backgroundColor: '#99ff66',
        width: 'auto',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
        
    },
    r1: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: '#000000',
    },
    radio: {
        height: 26,
        width: 26,
        borderRadius: 20,
        borderWidth: 2,
        margin: 10,
    },
    radiobg: {
        backgroundColor: '#000000',
        height: 18,
        width: 18,
        borderRadius: 20,
        margin: 2
    },
})