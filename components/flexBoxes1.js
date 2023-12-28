import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Flexboxes1 = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards ( in column )</Text>
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

export default Flexboxes1;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        backgroundColor: '#F5BCBA',
        margin: 8,
        justifyContent: 'space-around',
        paddingTop: 4,
        paddingBottom: 4,
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
        width: 'auto',
        height: 80,
        borderRadius: 8,
        margin: 8,
    },
    card1: {
        backgroundColor: '#FF3031',
    },
    card2: {
        backgroundColor: '#0A79DF'
    },
    card3: {
        backgroundColor: '#FFF222'
    },
})