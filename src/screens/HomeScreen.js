import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MenuButton } from '../components/MenuButton'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>Please select a screen to view</Text>
      <View style={styles.navigationButtons}>
        <MenuButton 
          title='About Me'
          navigateTo='About'
          navigation={navigation}
        />
        <MenuButton 
          title='Why Me? Why Asda?'
          navigateTo='Developer'
          navigation={navigation}
        />
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
  }
});

export default HomeScreen