import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactsTab from './contactsTab';
import StatesTab from './statesTab';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <View style={styles.tabnavcontainer}>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#467cdb' },
                    headerTintColor: '#ffffff',
                    tabBarLabelStyle: { color: "#ffffff", fontSize: 18, paddingVertical: 12, },
                    tabBarStyle: { backgroundColor: "#467cdb" },
                    // tabBarOptions: {tabBarIcon: null,}
                }}
            >
                <Tab.Screen name='Contacts' component={ContactsTab} options={{
                    headerRight: () => <TouchableHighlight
                        onPress={() => console.warn("Warning: This is my profile.")}
                        underlayColor={'transparent'}>
                        <Image
                            style={styles.dp}
                            source={require('../assets/images/p1.jpg')}
                        />
                    </TouchableHighlight>
                }} />
                <Tab.Screen name='States' component={StatesTab} options={{
                    headerRight: () => <TouchableHighlight
                        onPress={() => console.warn("Warning: This is my profile.")}
                        underlayColor={'transparent'}>
                        <Image
                            style={styles.dp}
                            source={require('../assets/images/p1.jpg')}
                        />
                    </TouchableHighlight>
                }} />
            </Tab.Navigator>
        </View>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabnavcontainer: {
        height: '100%',
    },
    dp: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10,
    },
})