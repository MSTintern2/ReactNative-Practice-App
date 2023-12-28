import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect_hook = () => {
  const [value, setValue] = useState(0)
  //useEffect run automatically on start & on update of any UI,State,Props
  useEffect(()=>{
    console.warn('useEffect: Call on Mount')
  },[]);//empty array (call only on Mount) useEffect not call on update of state
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>UseEffect hook on Mount</Text>
      <Text style={styles.text}>UseEffect hook call on mount and update of state</Text>
      <Text style={styles.text}>Counter : {value}</Text>
      {/* Button update state to show useEffect call on update of state */}
      <View style={styles.btn}>
        <Button title='Press for Update' color={'#239B56'} onPress={()=>setValue(value+1)} />
      </View>
      <Text></Text> 
      <Text></Text> 
    </View>
  )
}

export default UseEffect_hook

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
  text: {
    fontSize: 18,
    color: '#000000',
  }
})