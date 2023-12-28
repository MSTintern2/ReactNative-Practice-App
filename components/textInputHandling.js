import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const TextInputHandling = () => {
  const [name, setName] = useState("") //state
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Text Input Handling</Text>
        <Text style={styles.title}>Enter Name:</Text>
        <TextInput
          style={styles.textinput}
          placeholder='Enter Your Name'
          value={name} //to clear text field
          onChangeText={(text) => setName(text)} // call state
        />
        <Text style={styles.title}>Your Name is : {name} </Text>
        <Button
          color={'#D63031'}
          title='Clear Input Text Field'
          onPress={()=>setName("")} //clear text field and state
        />
      </View>
    </SafeAreaView>
  )
}

export default TextInputHandling

const styles = StyleSheet.create({
  container: {
    margin:8,
  },
  heading:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
  title: {
    fontSize: 22,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  textinput: {
    fontSize: 20,
    paddingHorizontal: 8,
    backgroundColor: '#DAE0E2',
    borderWidth: 1,
  },
})