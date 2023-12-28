import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Dialog_Box = () => {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Modal ( Dialog Box )</Text>
      <View style={styles.btn}>
        <Button title='Open Modal' onPress={() => setShow(true)} />
      </View>
      <Modal transparent={true} visible={show} animationType='slide'>
        <View style={styles.v1}>
          <View style={styles.v2}>
            <Text style={styles.text}>This is Modal in React Native</Text>
            <View style={styles.btn}>
              <Button title='Close Modal' onPress={() => setShow(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <Text></Text>
    </View>
  )
}

export default Dialog_Box

const styles = StyleSheet.create({
  container: {
    margin: 8,
    felx: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
  btn: {
    margin: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: '#000000',
  },
  v1: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 350,
  },
  v2: {
    backgroundColor: '#FEF9E7',
    borderRadius: 12,
    elevation: 10,
    shadowColor: 'black',
    padding: 10,
  },
})