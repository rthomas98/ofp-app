import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DonationsActivity = () => {
    const donations = [
        {
          id: 1,
          username: 'User1',
          amount: 50,
          image: 'https://i.pravatar.cc/300?img=1',
        },
        {
          id: 2,
          username: 'User2',
          amount: 100,
          image: 'https://i.pravatar.cc/300?img=2',
        },
        {
          id: 3,
          username: 'User3',
          amount: 150,
          image: 'https://i.pravatar.cc/300?img=3',
        },
        {
          id: 4,
          username: 'User4',
          amount: 200,
          image: 'https://i.pravatar.cc/300?img=4',
        },
        {
          id: 5,
          username: 'User5',
          amount: 250,
          image: 'https://i.pravatar.cc/300?img=5',
        },
        {
          id: 6,
          username: 'User6',
          amount: 300,
          image: 'https://i.pravatar.cc/300?img=6',
        },
        {
          id: 7,
          username: 'User7',
          amount: 350,
          image: 'https://i.pravatar.cc/300?img=7',
        },
        {
          id: 8,
          username: 'User8',
          amount: 400,
          image: 'https://i.pravatar.cc/300?img=8',
        },
        {
          id: 9,
          username: 'User9',
          amount: 450,
          image: 'https://i.pravatar.cc/300?img=9',
        },
        {
          id: 10,
          username: 'User10',
          amount: 500,
          image: 'https://i.pravatar.cc/300?img=10',
        },
        {
          id: 11,
          username: 'User11',
          amount: 550,
          image: 'https://i.pravatar.cc/300?img=11',
        },
        {
          id: 12,
          username: 'User12',
          amount: 600,
          image: 'https://i.pravatar.cc/300?img=12',
        },
      ];
      

  const renderDonation = ({ item }) => (
    <View style={styles.donationContainer}>
      <Image source={{ uri: item.image }} style={styles.userImage} />
      <Text style={styles.donationText}><Text style={styles.boldBlack}>{item.username}</Text> donated <Text style={styles.bold}>${item.amount}</Text></Text>
      <TouchableOpacity style={styles.thanksButton}>
        <Text style={styles.buttonText}>Say Thanks</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Donations Activity</Text>
      <FlatList
        data={donations}
        renderItem={renderDonation}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  donationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  donationText: {
    flex: 1,
    fontSize: 16,
  },
  boldBlack: {
    fontWeight: 'bold',
    color: 'black',
  },
  bold: {
    fontWeight: 'bold',
    color: '#FF1843',
  },
  thanksButton: {
    backgroundColor: '#FF1843',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default DonationsActivity;
