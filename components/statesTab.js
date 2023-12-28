import { StyleSheet, Text, View,  Image } from 'react-native'
import React from 'react'

const StatesTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contactcontainer}>
      <Image
        style={styles.dp}
        source={require('../assets/images/s1.png')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>My States</Text>
          <Text style={styles.text1}>No states</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
      <Image
        style={styles.dp}
        source={require('../assets/images/p1.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Willow Gentry</Text>
          <Text style={styles.text1}>Yesterday</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
      <Image
        style={styles.dp}
        source={require('../assets/images/p2.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Maverick Avila</Text>
          <Text style={styles.text1}>Today</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
      <Image
        style={styles.dp}
        source={require('../assets/images/p3.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Tiana Lugo</Text>
          <Text style={styles.text1}>Yesterday</Text>
        </View>
      </View>
    </View>
  )
}

export default StatesTab

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#dee3fc',
  },
  contactcontainer: {
    backgroundColor: '#b1c5e7',
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 12,
    padding: 10,
    flex: 0,
    flexDirection: 'row',
  },
  dp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#00c350',
  },
  textcontainer: {
    paddingLeft: 13,
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  text1: {
    fontSize: 16,
  },
})