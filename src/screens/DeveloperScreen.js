import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeveloperScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the developer screen</Text>
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

export default DeveloperScreen