import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';

const MyChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: 'Challenge 1',
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_565003417.jpg',
      fundsRaised: 500,
      totalFunds: 1000,
      donators: 50,
      daysLeft: 10,
    },
    {
      id: 2,
      title: 'Challenge 2',
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_613503665.jpg',
      fundsRaised: 700,
      totalFunds: 1500,
      donators: 35,
      daysLeft: 5,
    },
    // Add more challenges as needed...
  ];

  const renderChallenge = ({ item }) => (
    <View style={styles.cardContainer}>
      <Card.Title style={styles.title}>{item.title}</Card.Title>
      <Card.Divider/>
      <Card.Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.subHeader}>Funds Raised: ${item.fundsRaised}</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, {width: `${item.fundsRaised / item.totalFunds * 100}%`}]} />
        </View>
        <View style={styles.infoContainer}>
          <Text><Text style={styles.bold}>{item.donators}</Text> donators</Text>
          <Text><Text style={styles.bold}>{item.daysLeft}</Text> days left</Text>
        </View>
      </View>
      <Card.Divider/>
      <View style={styles.footerContainer}>
        <Text style={styles.text}><Ionicons name="create-outline" size={24} color="black" /> Edit</Text>
        <Text style={styles.text}><Ionicons name="share-social-outline" size={24} color="black" /> Share</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Challenges</Text>
      <FlatList
        data={challenges}
        renderItem={renderChallenge}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  cardContainer: {
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF1843',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  progressBarBackground: {
    backgroundColor: '#D3D3D3',
    height: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#FF1843',
  },
  progressBar: {
    backgroundColor: '#FF1843',
    height: '100%',
    borderRadius: 5,
  },
});

export default MyChallenges;
