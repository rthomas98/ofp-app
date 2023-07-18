import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from 'react-native'
import { Link } from 'expo-router'

const resetPassword = () => {

const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
       <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/ofp-big-logo.png')} />
        </View>
        <Text style={styles.contentTitle}>Reset Your Password</Text>
        <Text style={styles.contentText}>Enter your new password below.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Confirm Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.button}>
          <Link style={styles.buttonText} href={'/auth/'}>
          Submit
          </Link>
      </View>


      <Link href={'/auth/'}>
        <Text style={styles.linkText}>Cancel</Text>
      </Link>

  
    </KeyboardAvoidingView>
  )
}

export default resetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 24,
  },
  contentTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#09101D',
    textAlign: 'center',
    marginVertical: 20,
  },
  logoContainer: {
    width: '100%',
    marginVertical: 20,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
      
  },
  inputContainer: {
    borderColor: '#DADEE3',
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 48,
    marginLeft: 16,
    borderColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    borderRadius: 30,
  },
  buttonLink: {
    width: '100%',
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    alignItems: 'center', 
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#FF1843',
  },
  loginText: {
    color: 'white',
  },
  contentText: {
    color: '#09101D',
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  linkText: {
    color: '#FF1843',
    fontSize: 18,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#FF1843',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: '100%',
}
})