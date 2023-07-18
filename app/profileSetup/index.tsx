import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Link } from 'expo-router';

const CompleteProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>

      <Text style={styles.title}>Complete Profile</Text>
      <Text style={styles.contentText}>Please fill in the information below:</Text>
      
      <View style={styles.avatarPlaceholder} />
      
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      </View>
      
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      </View>
      
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      </View>


      <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      </View>

      <View style={styles.button}>
            <Link style={styles.buttonText} href={'/profileSetup/selectInterest'}>
            Continue
            </Link>
        </View>


      <Link href={'/auth/'}>
        <Text style={styles.linkText}>Back</Text>
      </Link>
    </KeyboardAvoidingView>
  );
};

export default CompleteProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#09101D',
    marginBottom: 15,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    marginBottom: 24,
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
},
  linkText: {
    color: '#007BFF',
  },
});
