import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Section_List = () => {
    const users = [
        { id: 1, name: 'Haider', work: 'mobile dev', data:["PHP","React"] },
        { id: 2, name: 'Ali', work: 'web dev', data:["React","C++"] },
        { id: 3, name: 'Sikander', work: 'ios dev', data:["PHP","React js"] },
        { id: 4, name: 'Hamza', work: 'cloud dev', data:["React","React js","C#"] },
        { id: 5, name: 'Shaoib', work: 'meta dev', data:["PHP","CSS","HTML"] }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Section List</Text>
            <SectionList 
                sections={users}
                renderItem={({item})=><Text style={styles.list}>{item}</Text>}
                renderSectionHeader={({section:{name}})=>(<Text style={styles.listheading}>{name}:</Text>)}
            />
            <Text></Text>
        </View>
    )
}

export default Section_List

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
        fontSize: 18,
        color: '#0A79DF',
        padding: 2,
        marginLeft: 20,
    },
    listheading: {
        fontSize: 20,
        color: '#000000',
        margin: 6,
    }
})