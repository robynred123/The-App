import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextCarousel } from '../components/TextCarousel';
import { data } from '../data/data';

const DeveloperScreen = () => {
  return (
    <ScrollView>
    <View>

      <Text style={styles.title}>What Can I Bring To Asda?</Text>
    
      <TextCarousel 
        data={data} 
      />

    </View>
    <View>
      <Text style={styles.title}>Why Do I Want to Be A Developer?</Text>
      <Text style={styles.text}>
          Before beginning my apprenticeship I felt that I had reached a wall in my ability to improve in my previous job, and I was looking for a
          position where I could continuously learn. At Asda I have been introduced to a lot of new experiences, 
          and have been given the opportunity to continue to improve my skills,
          and learn about new technologies. 
      </Text>
      <Text style={styles.text}>
          I want to continue to work as a developer to continue this learning and to be able to make applications that people will enjoy using. 
          In addition I want to work towards encouraging other females to get into technology and specifically development, 
          as I feel that when I was considering career options, it wasn't 
          something that I was made aware of, despite my keen interest in technology.    
      </Text>
    </View>
    </ScrollView>
  );
}
    
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5
  },
  text: {
    padding: 10,
    fontSize: 15,
    flexWrap: 'wrap',
    textAlign: 'center'
  }
});

export default DeveloperScreen