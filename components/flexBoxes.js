import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Flexboxes = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards ( in row )</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.card1]}>
            <Text style={[{color:'#000000'},{fontWeight:'bold'}]}>Card 1</Text>
            <Text style={[{color:'#000000'},{fontWeight:'bold'}]}>Red</Text>
        </View>
        <View style={[styles.card,styles.card2]}>
            <Text style={[{color:'#000000'},{fontWeight:'bold'}]}>Card 2</Text>
            <Text style={[{color:'#000000'},{fontWeight:'bold'}]}>Blue</Text>
        </View>
        <View style={[styles.card,styles.card3]}>
            <Text style={[{color:'#000000'},{fontWeight:'bold'}]}>Card 3</Text>
            <Text style={[{color:'#000000'},{fontWeight:'bold'}]}>Yellow</Text>
        </View>
      </View>
      <Text></Text> 
    </View>
  )
}

export default Flexboxes;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#F5BCBA',
        margin: 8,
        justifyContent: 'space-around',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        padding: 8,
    },
    card: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 8,
    },
    card1: {
        backgroundColor: '#FF3031'
    },
    card2: {
        backgroundColor: '#0A79DF'
    },
    card3: {
        backgroundColor: '#FFF222'
    },
})