import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class ProfileHeader extends Component {
  render() {
    const user = {
      image: 'https://i.pravatar.cc/300',
      fullName: 'John Doe',
      challenges: 5,
      followers: 100,
      following: 150,
    };

    return (
      <View style={styles.container}>
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <Text style={styles.fullName}>{user.fullName}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.challenges}</Text>
            <Text style={styles.statLabel}>Challenges</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
});
