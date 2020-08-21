import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { data } from '../data/data';
import { TextCarousel } from '../components/TextCarousel';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the about screen!</Text>
      <TextCarousel 
        data={data} 
        itemsPerInterval={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButton: {
    backgroundColor: '#b067d8',
    alignContent: 'space-between'
  }
});

export default AboutScreen