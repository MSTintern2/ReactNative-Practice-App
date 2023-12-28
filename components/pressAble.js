import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PressAble = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Press Able</Text>
      <Pressable
        onPress={()=>console.warn('Normal Press')}
        onLongPress={()=>console.warn('Long Press')}
      >
        <Text style={[styles.btn,styles.btn4]}>Press Able (Normal & Long)</Text>
      </Pressable>
      <Pressable
        onPressIn={()=>console.warn('Press IN')}
      >
        <Text style={[styles.btn,styles.btn4]}>Press Able (In)</Text>
      </Pressable>
      <Pressable
        onPressOut={()=>console.warn('Press Out')}
      >
        <Text style={[styles.btn,styles.btn4]}>Press Able (Out)</Text>
      </Pressable>
      <Text></Text>
    </View>
  )
}

export default PressAble

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
    btn4: {backgroundColor: '#6495ED'},
})