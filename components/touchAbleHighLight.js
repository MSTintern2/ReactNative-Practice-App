import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const TouchAbleHighLight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Touch Able High Light</Text>
      <Text style={styles.text}>Touch Able High Light used to create custom buttons</Text>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.btn1]}>Button Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.btn2]}>Button Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.btn3]}>Button Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.btn4]}>Button Error</Text>
      </TouchableHighlight>
      <Text></Text>
    </View>
  )
}

export default TouchAbleHighLight

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    text: {
        fontSize: 20,
        color: '#000000',
        paddingVertical: 8,
    },
    btn: {
        fontSize: 22,
        backgroundColor: 'green',
        textAlign: 'center',
        padding: 10,
        margin: 10,
        color: '#ffffff',
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    btn1: {backgroundColor: 'green'},
    btn2: {backgroundColor: 'blue'},
    btn3: {backgroundColor: '#D4AC0D'},
    btn4: {backgroundColor: 'red'},
})