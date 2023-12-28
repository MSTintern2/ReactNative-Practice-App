import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect_Hook_1 = () => {
    const [value, setValue] = useState(0);
    const [data, setData] = useState(10);
    //useEffect run automatically on start & on update of any UI,State,Props
    useEffect(()=>{
        console.warn('useEffect: Call on Update, Value Counter:', value)
    },[value])//empty array (call only on value) useEffect not call on Mount
    //[value,data] to call on both
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>UseEffect hook on Update</Text>
      <Text style={styles.text}>UseEffect hook call on update of states and props</Text>
      <Text style={styles.text}>Value Counter : {value}</Text>
      <View style={styles.btn}>
        <Button title='Press for Update' color={'#E67E22'} onPress={()=>setValue(value+1)} />
      </View>
      <Text></Text> 
      <Text style={styles.text}>UseEffect hook call on update of states and props (not for this state update)</Text>
      <Text style={styles.text}>Data Counter : {data}</Text>
      <View style={styles.btn}>
        <Button title='Press for Update' color={'#E67E22'} onPress={()=>setData(data+10)} />
      </View>
      <Text></Text> 
      <Text></Text> 
    </View>
  )
}

export default UseEffect_Hook_1

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