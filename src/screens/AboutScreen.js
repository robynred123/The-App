import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Image source={require('../../assets/about.jpg')} style={styles.image} />
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    padding: 5
  },
  image: {
    width: 300,
    height: 200,
    margin: 10
  },
  text: {
    marginHorizontal: 10,
    padding: 5,
    fontSize: 15,
    flexWrap: 'wrap'
  }
});

export default AboutScreen