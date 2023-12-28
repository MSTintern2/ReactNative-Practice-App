import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Dynamic_Radio_Button = () => {
    const [radio, setRadio] = useState(1)
    const skills = [
        {id: 10, name: 'Java'},
        {id: 20, name: 'JS'},
        {id: 30, name: 'PHP'},
        {id: 40, name: 'React'},
        {id: 50, name: '.NET'},
        {id: 60, name: 'SQL'}
    ]
    return (
        <View style={styles.container}>
            {/* Dynamic Radio Button */}
            <Text style={styles.heading}>Dynamic Radio Button (React Native)</Text>
            <View style={styles.container1}>
                {
                    skills.map((item,index)=>
                    <TouchableOpacity key={index} onPress={() => setRadio(item.id)}>
                    <View style={styles.r1}>
                        <View style={styles.radio}>
                            {
                                radio === item.id ? <View style={styles.radiobg}></View> : null
                            }
                        </View>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                    )
                }
            </View>
            <Text></Text>
        </View>
    )
}

export default Dynamic_Radio_Button

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
        height: 300,
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