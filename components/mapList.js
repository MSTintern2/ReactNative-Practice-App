import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MapList = () => {
    const users = [
        { id: 1, name: 'Haider', work: 'mobile dev' },
        { id: 2, name: 'Ali', work: 'web dev' },
        { id: 3, name: 'Sikander', work: 'ios dev' },
        { id: 4, name: 'Hamza', work: 'cloud dev' },
        { id: 5, name: 'Shaoib', work: 'meta dev' }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Custom List (Map Function)</Text>
            {
                users.map((item)=><Text style={styles.list}>{item.id} - {item.name} - {item.work}</Text>)
            }
            <Text></Text>
            <Text></Text>
        </View>
    )
}

export default MapList

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    list: {
        fontSize: 20,
        color: '#4834DF',
        padding: 6,
        backgroundColor: '#DAE0E2',
        borderWidth: 1,
        margin: 4,
    },
})