import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SearchForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          // Add any other TextInput props you need
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="options-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
});
