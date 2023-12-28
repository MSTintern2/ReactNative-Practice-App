import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Fancycard = () => {
  return (
    <View>
      <Text style={styles.heading}>Image Card</Text>
      <View style={styles.container}>
        <View>
            <Image
                style={styles.cardimage}
                source={{uri: 'https://www.thediaryofanomad.com/wp-content/uploads/2020/04/best-places-to-visit-in-lahore-badshahi-mosque-7.jpg'}}
            />
        </View>
        <View>
            <View style={styles.cardhead}>
                <Text style={styles.name}>Badshahi Mosque</Text>
                <Text style={styles.place}>Lahore, Pakistan</Text>
            </View>
            <Text style={styles.info}>The Badshahi Mosque is an iconic Mughal-era congregational mosque in Lahore, Punjab, Pakistan. The mosque is located opposite of Lahore Fort in the outskirts of the Walled City and is widely considered to be one of Lahore's most iconic landmarks.</Text>
        </View>
      </View>
      <Text></Text>  
    </View>
  )
}

export default Fancycard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D4F1F4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    cardhead: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000000',
    },
    place: {
        fontSize: 16,
    },
    info: {
        paddingHorizontal: 5,
        fontSize: 15,
        textAlign: 'justify',
        color:'#000000',
    }
})