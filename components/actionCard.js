import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import React from 'react';

const Actioncard = () => {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.heading}>Action Card ( Blog card )</Text>  
      <View style={styles.container}>
        <Text style={styles.name}>Nissan Skyline GT-R (R34)</Text>
        <Image
                style={styles.cardimage}
                source={{uri: 'https://fox59.com/wp-content/uploads/sites/21/2023/05/645913f5e3fc64.30473982.jpg'}}
            />
        <Text style={styles.info}>The Nissan Skyline GT-R is a Japanese sports car based on the Nissan Skyline range. The first cars named "Skyline GT-R" were produced between 1969 and 1972 under the model code KPGC10, and were successful in Japanese touring car racing events.</Text>
        <TouchableOpacity onPress={() => {openWebsite('https://en.wikipedia.org/wiki/Nissan_Skyline_GT-R')}}>
            <Text style={styles.weblink}>Read More...</Text>
        </TouchableOpacity>
      </View>
      <Text></Text>
    </View>
  )
}

export default Actioncard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D4F1F4',
        borderRadius: 10,
        margin: 8,
        paddingBottom: 8,
        elevation: 8,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        padding: 8,
    },
    cardimage: {
        height: 300,
        width: 'auto',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000000',
        textAlign: 'center',
        paddingVertical: 6,
    },
    info: {
        paddingHorizontal: 5,
        paddingTop: 6,
        fontSize: 15,
        textAlign: 'justify',
        color:'#000000',
    },
    weblink: {
        fontSize: 18,
        textAlign: 'right',
        paddingRight: 8,
        color:'#0A79DF',
    },
})