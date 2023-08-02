import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'


const MyFundraising = () => {
  const challenges = [
    {
        id: 1,
        title: 'Challenge 1',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_2038058759.jpg',
        fundsRaised: 500,
        totalFunds: 1000,
        donators: 50,
        daysLeft: 10,
      },
      {
        id: 2,
        title: 'Challenge 2',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1940996575-scaled.jpg',
        fundsRaised: 700,
        totalFunds: 1500,
        donators: 35,
        daysLeft: 5,
      },
      {
        id: 3,
        title: 'Challenge 3',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1212860350.jpg',
        fundsRaised: 300,
        totalFunds: 800,
        donators: 25,
        daysLeft: 8,
      },
      {
        id: 4,
        title: 'Challenge 4',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1028055517.jpg',
        fundsRaised: 1000,
        totalFunds: 2000,
        donators: 75,
        daysLeft: 12,
      },
      {
        id: 5,
        title: 'Challenge 5',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1072474205.jpg',
        fundsRaised: 600,
        totalFunds: 1200,
        donators: 60,
        daysLeft: 10,
      },
      {
        id: 6,
        title: 'Challenge 6',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1335291812.jpg',
        fundsRaised: 800,
        totalFunds: 1600,
        donators: 40,
        daysLeft: 6,
      },
      {
        id: 7,
        title: 'Challenge 7',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_289007207.jpg',
        fundsRaised: 200,
        totalFunds: 400,
        donators: 20,
        daysLeft: 4,
      },
      {
        id: 8,
        title: 'Challenge 8',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_2199248593.jpg',
        fundsRaised: 900,
        totalFunds: 1800,
        donators: 45,
        daysLeft: 7,
      },
      {
        id: 9,
        title: 'Challenge 9',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_693609082.jpg',
        fundsRaised: 400,
        totalFunds: 800,
        donators: 30,
        daysLeft: 9,
      },
      {
        id: 10,
        title: 'Challenge 10',
        image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_613503665.jpg',
        fundsRaised: 1100,
        totalFunds: 2200,
        donators: 55,
        daysLeft: 11,
      },
  ];

  const renderChallenge = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subHeader}>Funds Raised: ${item.fundsRaised}</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${item.fundsRaised / item.totalFunds * 100}%` }]} />
        </View>
        <View style={styles.infoContainer}>
          <Text><Text style={styles.bold}>{item.donators}</Text> donators</Text>
          <Text><Text style={styles.bold}>{item.daysLeft}</Text> days left</Text>
        </View>
        <View style={styles.footerContainer}>
            <View style={styles.buttonWrapper}>
                <Link href={'/auth/'} style={styles.button}>
                <Text style={styles.buttonText}>See Results</Text>
                </Link>
            </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
    width: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 14,
    marginTop: 5,
  },
  progressBarBackground: {
    backgroundColor: '#D3D3D3',
    height: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    backgroundColor: '#FF1843',
    height: '100%',
    borderRadius: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonWrapper: {
    backgroundColor: '#FF1843',
    borderRadius: 5,
    padding: 5,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: 'white',
  },  
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default MyFundraising;
