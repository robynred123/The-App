import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>Please select a screen to view</Text>
      <View>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text>About Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Developer')}
        >
          <Text>Why Me? Why Asda?</Text>
        </TouchableOpacity>
      </View>
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

export default HomeScreen