import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native'
import validator from 'validator'

const ContactScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [validationError, setValidationError] = useState(null)

  const handleOnSubmit = () => {
    let isValid = validateValues(name, email)
    if (isValid) {
      if (validationError === null) {
        return (
          Alert.alert(
            'Message Submitted',
            `Name: ${name}, Email: ${email}, Message: ${message}`
          ),
          setName(''),
          setEmail(''),
          setMessage('')
        )
      }
    }
  }

  const validateValues = (name, email) => {
    setValidationError(null)

    if (!validator.isLength(name, { min: 5, max: undefined })) {
      setValidationError('Please Enter a Name')
      return false
    } else if (!validator.isEmail(email)) {
      setValidationError('Please Enter a Valid Email')
      return false
    }
    return true
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <View style={styles.form}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.text}>Message</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
          value={message}
          maxLength={500}
          multiline={true}
        />
        {validationError ? (
          <Text style={styles.error}>{validationError}</Text>
        ) : null}
        <View>
          <TouchableOpacity onPress={handleOnSubmit} style={styles.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  form: {
    flexDirection: 'column',
    padding: 15,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    padding: 5,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#D1D1D1',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginBottom: 30
  },
  text: {
    fontSize: 15,
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#AA7DC3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 15
  },
  error: {
    fontSize: 15,
    flexWrap: 'wrap',
    color: 'red'
  }
})

export default ContactScreen
