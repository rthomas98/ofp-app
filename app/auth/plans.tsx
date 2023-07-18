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

const plans = () => {

  const [selectedMembership, setSelectedMembership] = useState('');

  const handleSelect = (membership) => {
    setSelectedMembership(membership);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/ofp-big-logo.png')} />
        </View>
        <Text style={styles.contentTitle}>Choose your plan</Text>


        <TouchableOpacity 
          style={selectedMembership === 'basic' ? styles.selectedMembership : styles.membership} 
          onPress={() => handleSelect('basic')}
        >
       <Text style={styles.basicheader}>Individual</Text>
        <Text style={styles.price}>$150</Text>
        <Text style={styles.monthly}>monthly</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={selectedMembership === 'premium' ? styles.selectedMembership : styles.membership} 
        onPress={() => handleSelect('premium')}
      >
        <Text style={styles.premiumheader}>Organization</Text>
        <Text style={styles.price}>$500</Text>
        <Text style={styles.monthly}>monthly</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={selectedMembership === 'pro' ? styles.selectedMembership : styles.membership} 
        onPress={() => handleSelect('pro')}
      >
        <Text style={styles.proheader}>Pro Membership</Text>
        <Text style={styles.price}>$Professional</Text>
        <Text style={styles.monthly}>monthly</Text>
      </TouchableOpacity>

      <View style={styles.button}>
          <Link style={styles.buttonText} href={'/profileSetup/'}>
              Create An Account
          </Link>
      </View>

            <Link href={'/auth/'}>
        <Text>Cancel</Text>
      </Link>

    </View>
  )
}

export default plans

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 36,
    color: '#6EA130',
    marginTop: 44,
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
  contentTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#09101D',
    textAlign: 'center',
    marginVertical: 20,
  },
  linkText: {
    color: '#FF1843',
    fontSize: 18,
  },
  basicheader: {
    color: '#09101D',
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    },
    premiumheader: {
        color: '#09101D',
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    proheader: {
        color: '#09101D',
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    details: {
        color: '#434343',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    price: {
        color: '#434343',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,

    },
    monthly: {
        color: '#BCBCBC',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
        textTransform: 'uppercase',

    },
  membership: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  inner: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  selectedMembership: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
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