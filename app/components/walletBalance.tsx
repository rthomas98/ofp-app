import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default class WalletBalance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="wallet" size={24} color="black" />
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>$100.00</Text>
          <Text style={styles.label}>My wallet balance</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Wallet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  balanceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  button: {
    backgroundColor: '#FF1843',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
