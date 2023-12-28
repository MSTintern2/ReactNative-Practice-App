import { StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'

const Status_Bar = () => {
    const [show, setShow] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Status Bar</Text>
      <StatusBar 
        backgroundColor="#3056d3"
        barStyle="light-content"
        hidden={show}
      />
      <TouchableHighlight onPress={() => setShow(!show)}>
        <Text style={[styles.btn,styles.btn4]}>Show/Hide Status Bar</Text>
      </TouchableHighlight>
      <Text></Text>
    </View>
  )
}

export default Status_Bar

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    btn: {
        fontSize: 22,
        backgroundColor: 'green',
        textAlign: 'center',
        padding: 10,
        margin: 10,
        color: '#000000',
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    btn4: {backgroundColor: '#B5FFF7'},
})