import { ActivityIndicator, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'

const Loading = () => {
    const [show, setShow] = useState(false)
    const display = ()=> {
        setShow(true);
        setTimeout(
            ()=>{setShow(false)}
        , 5000);
    } 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Activity Indicator ( Loading )</Text>
      <ActivityIndicator size={80} animating={show}/>
      <TouchableHighlight onPress={display}>
        <Text style={[styles.btn,styles.btn4]}>Show Loader</Text>
      </TouchableHighlight>
      <Text></Text>
    </View>
  )
}

export default Loading

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
        color: '#ffffff',
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    btn4: {backgroundColor: '#D4AC0D'},
})