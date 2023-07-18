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

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
       <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/ofp-big-logo.png')} />
        </View>
        <Text style={styles.contentTitle}>Sign in to your account</Text>
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={setPassword}
        />
      </View>

        <View style={styles.button}>
            <Link style={styles.buttonText} href={'/home/'}>
            Login
            </Link>
        </View>


      <Link href={'/auth/forgotPassword'}>
        <Text>Forgot your Password?</Text>
      </Link>

      <Text style={styles.contentText}>Don't have an account?</Text>

      <Link href={'/auth/signUp'}>
        <Text style={styles.linkText}>Sign up</Text>
      </Link>

  
    </KeyboardAvoidingView>
  )
}

export default LogIn

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
    fontWeight: 'bold',
    marginVertical: 10,
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