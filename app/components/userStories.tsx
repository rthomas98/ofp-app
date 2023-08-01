import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const userStories = [
    { id: '1', image: 'https://i.pravatar.cc/300', name: 'Alice' },
    { id: '2', image: 'https://i.pravatar.cc/300', name: 'Bob' },
    { id: '3', image: 'https://i.pravatar.cc/300', name: 'Charlie' },
    { id: '4', image: 'https://i.pravatar.cc/300', name: 'David' },
    { id: '5', image: 'https://i.pravatar.cc/300', name: 'Evelyn' },
    { id: '6', image: 'https://i.pravatar.cc/300', name: 'Frank' },
    { id: '7', image: 'https://i.pravatar.cc/300', name: 'Grace' },
    { id: '8', image: 'https://i.pravatar.cc/300', name: 'Hannah' },
    { id: '9', image: 'https://i.pravatar.cc/300', name: 'Ian' },
    { id: '10', image: 'https://i.pravatar.cc/300', name: 'Jenny' },
    { id: '11', image: 'https://i.pravatar.cc/300', name: 'Kevin' },
    { id: '12', image: 'https://i.pravatar.cc/300', name: 'Laura' },
    { id: '13', image: 'https://i.pravatar.cc/300', name: 'Mike' },
];

export default class UserStories extends Component {
  renderStoryItem = ({ item }) => (
    <View style={styles.storyContainer}>
      <Image source={{uri: item.image}} style={styles.storyImage} />
      <Text style={styles.storyText}>{item.name}</Text>
    </View>
  );

  renderAddStoryButton = () => (
    <TouchableOpacity style={styles.addButton}>
      <Ionicons name="add" size={30} color="#FFFFFF" />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={userStories}
          renderItem={this.renderStoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={this.renderAddStoryButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyContainer: {
    marginRight: 20,
    width: 80,
    alignItems: 'center',
  },
  storyImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  storyText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#FF1843',
    marginRight: 20,
  },
});
