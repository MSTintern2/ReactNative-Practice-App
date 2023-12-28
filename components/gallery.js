import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Gallery = () => {
    return (
        <ScrollView>
            <View>
                <View style={styles.grid}>
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/p3.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/p1.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/p2.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/j1.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/j3.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/j2.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/j4.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/p2.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/p3.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/j3.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/p1.jpg')}
                    />
                    <Image
                        style={styles.dp}
                        source={require('../assets/images/p2.jpg')}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Gallery

const styles = StyleSheet.create({
    cards: {
        width: 100,
        height: 100,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#67E6DC',
        margin: 4,
    },
    grid: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap', //if this flex wrap not here content will hide outside screen
    },
    dp: {
        width: 200,
        height: 200,
        margin: 2,
    },
})