import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { interests, technologies } from '../data/data'

const AboutScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About Me</Text>
        <Image
          source={require('../../assets/about.jpg')}
          style={styles.image}
        />
        <Text style={{ ...styles.text, padding: 10 }}>
          My name is Robyn, I am an apprentice software engineer at Asda working
          towards my level 4 qualification.
        </Text>
        <Text style={{ ...styles.text, padding: 10 }}>
          I am most comfortable working on react and react-native applications,
          but I do have experience in Node.js, Java, and C#.
        </Text>
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.title}>
          Technologies and Skills I'm Interested In
        </Text>
        {technologies.map((technology, i) => (
          <Text key={i} className={'technology'} style={styles.list}>
            {<FontAwesomeIcon icon={faStar} fill="#f1c232" />}
            {technology}
          </Text>
        ))}
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.title}>My Interests</Text>
        {interests.map((interest, i) => (
          <Text key={i} className={'interest'} style={styles.list}>
            {<FontAwesomeIcon icon={faStar} fill="#f1c232" />}
            {interest}
          </Text>
        ))}

        <View style={styles.link}>
          <Text className={'website'} style={styles.text}>
            {' '}
            For More Information, Visit My{' '}
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://rbursnell.netlify.app/')}
          >
            <Text style={{ ...styles.text, color: '#b067d8' }}>Website</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    padding: 5,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 200,
    margin: 10
  },
  text: {
    fontSize: 15,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  list: {
    textAlign: 'left',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  link: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10
  }
})

export default AboutScreen
