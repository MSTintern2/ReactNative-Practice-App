import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const ContactsTab = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p1.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Willow Gentry</Text>
          <Text style={styles.text1}>212-456-7890</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p2.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Maverick Avila</Text>
          <Text style={styles.text1}>234-555-1234</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p3.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Tiana Lugo</Text>
          <Text style={styles.text1}>250-555-0199</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p1.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Willow Gentry</Text>
          <Text style={styles.text1}>212-456-7890</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p2.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Maverick Avila</Text>
          <Text style={styles.text1}>234-555-1234</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p3.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Tiana Lugo</Text>
          <Text style={styles.text1}>250-555-0199</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p1.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Willow Gentry</Text>
          <Text style={styles.text1}>212-456-7890</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p2.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Maverick Avila</Text>
          <Text style={styles.text1}>234-555-1234</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p3.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Tiana Lugo</Text>
          <Text style={styles.text1}>250-555-0199</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p1.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Willow Gentry</Text>
          <Text style={styles.text1}>212-456-7890</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p2.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Maverick Avila</Text>
          <Text style={styles.text1}>234-555-1234</Text>
        </View>
      </View>
      <View style={styles.contactcontainer}>
        <Image
        style={styles.dp}
        source={require('../assets/images/p3.jpg')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Tiana Lugo</Text>
          <Text style={styles.text1}>250-555-0199</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default ContactsTab

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