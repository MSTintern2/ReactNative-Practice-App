//import react
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

const FirstApp = () => {
  let company = "MikroStar Tech"; //access this in other components
  const [name, setName] = useState('Name: Haider Mukhtar') //by default value
const fun = () => {return(setName('Work: Software Internee'))} //onPress value change
  return ( 
  <View>
    <Text style={{fontSize:35, fontWeight:'bold', color: '#000000', textAlign: 'center', margin: 8,}}>React Native Practice</Text>
    <Text style={{fontSize:20}}>States are accessable only in its component. To get variables or data from one component to another component, We use Props.</Text>
    <Text style={{fontSize:30}}> </Text>
    <Text style={{fontSize:30,fontStyle:'italic'}}>Parent Component.</Text>
    <Text style={{fontSize:20}}>{name}</Text>
    <Text style={{fontSize:20}}>Company Name: {company}</Text>
    <Button title="Press Me for work Info." color={'green'} onPress={fun}></Button>
    {/* <Button title="Press Me for work Info." color={'green'} onPress={()=>{setName('Software Internee')}}/>*/}
    <User company={company} name={name} />
  </View>
  );
};

const User = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; company: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  return(
    <View>
      <Text style={{fontSize:30}}> </Text>
      <Text style={{fontSize:30,fontStyle:'italic'}}>Child Component.</Text>
      <Text style={{fontSize:20}}>{props.name}</Text>
      <Text style={{fontSize:20}}>Company Name: {props.company}</Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};
                   
export default FirstApp;