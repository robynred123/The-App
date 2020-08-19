import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MenuButton } from '../components/MenuButton'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text>Please select a screen to view</Text>
      </View>
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
    paddingBottom: 80
  },
  textContainer: {
    alignItems: 'center',
    paddingBottom: 80
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
  }
});

export default HomeScreen