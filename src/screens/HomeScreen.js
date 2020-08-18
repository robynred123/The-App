import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>Please select a screen to view</Text>
      <View>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => console.log("button pressed!")}
        >
          <Text>About Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => console.log("button pressed!")}
        >
          <Text>Why I Want To Be A Developer</Text>
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