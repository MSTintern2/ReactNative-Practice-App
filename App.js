import { Button, Image, StyleSheet, StatusBar, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/welcome';
import Home from './components/home';
import FirstApp from './components/firstApp';
import TextInputHandling from './components/textInputHandling';
import BasicForm from './components/basicForm';
import List from './components/list';
import Flat_List from './components/flat_list';
import MapList from './components/mapList';
import FlastlistProps from './components/flatListProps';
import Section_List from './components/sectionList';
import UI from './components/ui';
import Grid from './components/gird';
import Flexboxes from './components/flexBoxes';
import Flexboxes1 from './components/flexBoxes1';
import HorizontalScroll from './components/horizontalScroll';
import Show_Hide_Toggle from './components/showHideToggle';
import Responsive_Layout from './components/responsiveLayout';
import Fancycard from './components/imageCard';
import Cards from './components/cards';
import Actioncard from './components/actionCard';
import VideoCard from './components/videoCard';
import UseEffect from './components/useEffect';
import UseEffect_hook from './components/useeffectHook';
import UseEffect_Hook_1 from './components/useeffectHook1';
import UseEffect_Hook_2 from './components/useeffectHook2';
import TouchAbleHighLight from './components/touchAbleHighLight';
import Dynamic_Radio_Button from './components/dynamicRadioButton';
import Radio_Button from './components/radioButton';
import PressAble from './components/pressAble';
import Loading from './components/loading';
import Dialog_Box from './components/dialogBox';
import Others from './components/others';
import Status_Bar from './components/statusBar';
import WebView_npm_Package from './components/webviewNpmPackage';
import PassedData from './components/passedData';
import TabNavigation from './components/tabNavigation';
import Contacts from './components/contactsTab';
import ContactsTab from './components/contactsTab';
import StatesTab from './components/statesTab';
import TopTabNavigation from './components/topTabNavigation';
import Gallery from './components/gallery';
import APIs from './components/apis';
import FetchAPI from './components/fetchAPI';
import ListWithAPI from './components/listWithApi';
import JSONServerAPI from './components/jsonServerAPI';
import SimplePostAPI from './components/simplePostAPI';
import PostAPIwithFormData from './components/postAPIwithFormData';
import APIListWithDeleteUpdate from './components/apiListwithDeleteUpdate';
import SearchWithAPI from './components/searchWithAPI';
import AsyncStorage from './components/asyncStorage';
import ASYNCStorage from './components/asyncStorage';


const App = () => {
  const Stack = createNativeStackNavigator();
  const btnaction = () => {
    console.warn("Warning: This app is still under development.")
  }
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#3056d3"
        barStyle="light-content"
      />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3056d3' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontFamily: 'serif', }
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home} options={{headerTitle:()=><Button title='Warning' color={'orange'} onPress={btnaction}/>}}/> */}
        <Stack.Screen name="Home" component={Home} options={{ headerRight: () => <Button title='Warning' color={'orange'} onPress={btnaction} /> }} />
        <Stack.Screen name="First App" component={FirstApp} />
        <Stack.Screen name="Text Handling" component={TextInputHandling} />
        <Stack.Screen name="Basic Form" component={BasicForm} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Flat List" component={Flat_List} />
        <Stack.Screen name="Map List" component={MapList} />
        <Stack.Screen name="Flastlist using Props" component={FlastlistProps} />
        <Stack.Screen name="Section List" component={Section_List} />
        <Stack.Screen name="UI" component={UI} />
        <Stack.Screen name="Grid" component={Grid} />
        <Stack.Screen name="Flexboxes" component={Flexboxes} />
        <Stack.Screen name="Flexboxes1" component={Flexboxes1} />
        <Stack.Screen name="HorizontalScroll" component={HorizontalScroll} />
        <Stack.Screen name="Show Hide Toggle" component={Show_Hide_Toggle} />
        <Stack.Screen name="Responsive Layout" component={Responsive_Layout} />
        <Stack.Screen name="Touch Able High Light" component={TouchAbleHighLight} />
        <Stack.Screen name="Radio Button" component={Radio_Button} />
        <Stack.Screen name="Dynamic Radio Button" component={Dynamic_Radio_Button} />
        <Stack.Screen name="Press Able" component={PressAble} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Image Card" component={Fancycard} />
        <Stack.Screen name="Action Card" component={Actioncard} />
        <Stack.Screen name="Video Card" component={VideoCard} />
        <Stack.Screen name="Use Effect" component={UseEffect} />
        <Stack.Screen name="UseEffect Hook (Mount)" component={UseEffect_hook} />
        <Stack.Screen name="UseEffect Hook (Update)" component={UseEffect_Hook_1} />
        <Stack.Screen name="UseEffect Hook (UnMount)" component={UseEffect_Hook_2} />
        <Stack.Screen name="Dialog Box" component={Dialog_Box} />
        <Stack.Screen name="Others" component={Others} />
        <Stack.Screen name="Status Bar" component={Status_Bar} />
        <Stack.Screen name="WebView npm Package" component={WebView_npm_Package} />
        <Stack.Screen name="Passed Data" component={PassedData} />
        <Stack.Screen name="Tab Navigation" component={TabNavigation} />
        <Stack.Screen name="Contact Tab" component={ContactsTab} />
        <Stack.Screen name="States Tab" component={StatesTab} />
        <Stack.Screen name="Top Tab Navigation" component={TopTabNavigation} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="APIs" component={APIs} />
        <Stack.Screen name="Fetch API" component={FetchAPI} />
        <Stack.Screen name="List With API" component={ListWithAPI} />
        <Stack.Screen name="JSON Server API" component={JSONServerAPI} />
        <Stack.Screen name="Simple Post API" component={SimplePostAPI} />
        <Stack.Screen name="Post API with Form Data" component={PostAPIwithFormData} />
        <Stack.Screen name="API List With Delete & Update" component={APIListWithDeleteUpdate} />
        <Stack.Screen name="Search With API" component={SearchWithAPI} />
        <Stack.Screen name="Async Storage" component={ASYNCStorage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})