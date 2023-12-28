import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect_Hook_2 = () => {
  const [show, setShow] = useState(true)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>UseEffect hook on UnMount</Text>
      <Text style={styles.text}>UseEffect hook call on un-mount of component</Text>
      <View style={styles.btn}>
        <Button title='Toggle Student Component' color={'#3498DB'} onPress={() => setShow(!show)} />
      </View>
      {
        show ? <Student /> : null
      }
      <Text></Text>
      <Text></Text>
    </View>
  )
}

const Student = () => {
  useEffect(()=>{
    return(
      ()=>{console.warn("useEffect: Call on Un-Mount");}
    )
  },[])
  return (
    <View style={styles.box}>
      <Text style={styles.text1}>Student Component</Text>
    </View>
  )
}

export default UseEffect_Hook_2

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
    paddingTop: 10,
  },
  text1: {
    fontSize: 20,
    color: 'red',
    paddingVertical: 8,
  },
  text: {
    fontSize: 18,
    color: '#000000',
  },
  box: {
    width: 'auto',
    height: 80,
    backgroundColor: '#BB8FCE',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 15,
},
})