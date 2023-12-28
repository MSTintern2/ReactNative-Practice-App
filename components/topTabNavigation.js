import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContactsTab from './contactsTab';
import StatesTab from './statesTab';
import Gallery from './gallery';

const Tab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <View style={styles.tabnavcontainer}>
        <Tab.Navigator
            screenOptions={{
            headerStyle: { backgroundColor: '#467cdb' },
            headerTintColor: '#ffffff',
                tabBarLabelStyle:{color: "#ffffff", fontSize: 18,},
                tabBarStyle: {backgroundColor: "#467cdb"},
                // tabBarOptions: {tabBarIcon: null,}
            }}
        >
            <Tab.Screen name='Gallery' component={Gallery}/>
            <Tab.Screen name='Contacts' component={ContactsTab}/>
            <Tab.Screen name='States' component={StatesTab}/>
        </Tab.Navigator>
    </View>
  )
}

export default TopTabNavigation

const styles = StyleSheet.create({
    tabnavcontainer: {
        height: '100%',
    },
})