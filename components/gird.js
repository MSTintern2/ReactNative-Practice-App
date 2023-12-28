import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Grid = () => {
    const users = [
        { id: 1, name: 'Haider', work: 'mobile dev' },
        { id: 2, name: 'Ali', work: 'web dev' },
        { id: 3, name: 'Sikander', work: 'ios dev' },
        { id: 4, name: 'Hamza', work: 'cloud dev' },
        { id: 5, name: 'Shaoib', work: 'meta dev' }//add data the grid will generate automatically
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Grid (Static)</Text>
            <View style={styles.grid}>
                <Text style={styles.cards}>Box 1</Text>
                <Text style={styles.cards}>Box 2</Text>
                <Text style={styles.cards}>Box 3</Text>
                <Text style={styles.cards}>Box 4</Text>
                <Text style={styles.cards}>Box 5</Text>
            </View>
            <Text></Text> 
            <Text style={styles.heading}>Grid (Dynamic)</Text>
            <View style={styles.grid}>
            {
                users.map((item)=><Text style={styles.cards}>{item.id} - {item.name} - {item.work}</Text>)
            }
            </View>
            <Text></Text> 
            <Text></Text> 
        </View>
    )
}

export default Grid

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    cards: {
        width: 100,
        height: 100,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#67E6DC',
        margin: 4,
    },
    grid: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap', //if this flex wrap not here content will hide outside screen
    },
})