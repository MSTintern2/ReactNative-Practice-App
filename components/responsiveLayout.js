import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Responsive_Layout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Responsive Layout with Flex</Text>
      <View style={styles.card}>
        <View style={styles.v1}>
            <View style={styles.c1}></View>
            <View style={styles.c2}></View>
            <View style={styles.c3}></View>
        </View>
        <View style={styles.v2}></View>
        <View style={styles.v3}></View>
      </View>
      <Text></Text> 
    </View>
  )
}

export default Responsive_Layout

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    card: {
        margenTop: 4,
        backgroundColor: '#F9E79F',
        width: 'auto',
        height: 700,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
    },
    v1: {
        backgroundColor: '#67E6DC',
        flex: 2,
        flexDirection: 'row',
    },
    c1: {
        backgroundColor: '#CACFD2', flex: 1, margin: 4, 
    },
    c2: {
        backgroundColor: '#EB984E', flex: 1, margin: 4,
    },
    c3: {
        backgroundColor: '#27AE60', flex: 1, margin: 4,
    },
    v2: {
        backgroundColor: '#F1C40F',
        flex: 1,
    },
    v3: {
        backgroundColor: '#E74C3C',
        flex: 2,
    },
})