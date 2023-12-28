import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const UI = (props) => {
        return (
                <ScrollView>
                        <View style={styles.home}>
                                <View style={styles.buttonscontainer}>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Grid")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Grid</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Flexboxes")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Flexboxes (row)</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Flexboxes1")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Flexboxes (column)</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("HorizontalScroll")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Horizontal Scroll</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Show Hide Toggle")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Show, Hide, Toggle</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Responsive Layout")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Responsive Layout</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Touch Able High Light")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Touch Able High Light</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Radio Button")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Radio Button</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Dynamic Radio Button")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Dynamic Radio Button</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Press Able")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Press Able</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                                onPress={() => props.navigation.navigate("Loading")}
                                                underlayColor={'transparent'}>
                                                <Text style={[styles.btn, styles.btn1]}>Loading</Text>
                                        </TouchableHighlight>
                                </View>
                        </View>
                </ScrollView>
        )
}

export default UI

const styles = StyleSheet.create({
        home: {
                backgroundColor: '#dee3fc',
                paddingBottom: 10,
                flex: 0,
                justifyContent: 'center',
                alignItems: 'center'
        },
        buttonscontainer: {
                width: 350,
        },
        btn: {
                fontSize: 24,
                fontFamily: 'serif',
                textAlign: 'center',
                padding: 10,
                marginTop: 10,
                margin: 10,
                color: '#ffffff',
                borderRadius: 12,
                shadowColor: 'black',
                elevation: 10,
                shadowOpacity: 1,
        },
        btn1: { backgroundColor: '#467cdb' },
})