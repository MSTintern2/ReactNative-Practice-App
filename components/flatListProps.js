import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlastlistProps = () => {
    const users = [
        { id: 1, name: 'Haider', work: 'mobile dev' },
        { id: 2, name: 'Ali', work: 'web dev' },
        { id: 3, name: 'Sikander', work: 'ios dev' },
        { id: 4, name: 'Hamza', work: 'cloud dev' },
        { id: 5, name: 'Shaoib', work: 'meta dev' }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Component in loop with Flat List</Text>
            <FlatList
                data={users} //data come from user always array
                renderItem={({item}) => <UserData item={item}/>}//component in loop of map using props
            />
            <Text></Text>
        </View>
    )
}
//make component dymanic for use of props
const UserData = (props: { item: any }) => {
    const item=props.item;
    return(
        <View>
            <Text style={styles.list}>{item.id} - {item.name} - {item.work}</Text>
        </View>
    )
}

export default FlastlistProps

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
        color: '#2B2B52',
        padding: 6,
        backgroundColor: '#F9DDA4',
        borderWidth: 1,
        margin: 4,
    },
})