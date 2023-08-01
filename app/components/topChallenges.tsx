import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

const challenges = [
    { 
      id: '1', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_693609082.jpg', 
      title: 'Challenge 1', 
      progress: 0.6, 
      donors: 50, 
      remainingDays: 10 
    },
    { 
      id: '2', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1051726556.jpg', 
      title: 'Challenge 2', 
      progress: 0.8, 
      donors: 70, 
      remainingDays: 15 
    },
    { 
      id: '3', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_289007207.jpg', 
      title: 'Challenge 3', 
      progress: 0.3, 
      donors: 30, 
      remainingDays: 20 
    },
    { 
      id: '4', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1218668554.jpg', 
      title: 'Challenge 4', 
      progress: 0.9, 
      donors: 90, 
      remainingDays: 5 
    },
    { 
      id: '5', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_489319558.jpg', 
      title: 'Challenge 5', 
      progress: 0.5, 
      donors: 50, 
      remainingDays: 10 
    },
    { 
      id: '6', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_2199248593.jpg', 
      title: 'Challenge 6', 
      progress: 0.7, 
      donors: 70, 
      remainingDays: 15 
    },
    { 
      id: '7', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1072474205.jpg', 
      title: 'Challenge 7', 
      progress: 0.2, 
      donors: 20, 
      remainingDays: 20 
    },
    { 
      id: '8', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_393880156.jpg', 
      title: 'Challenge 8', 
      progress: 0.1, 
      donors: 10, 
      remainingDays: 30 
    },
    { 
      id: '9', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_565003417.jpg', 
      title: 'Challenge 9', 
      progress: 0.4, 
      donors: 40, 
      remainingDays: 15 
    },
    { 
      id: '10', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1212860350.jpg', 
      title: 'Challenge 10', 
      progress: 0.5, 
      donors: 50, 
      remainingDays: 10 
    },
  ];

export default class TopChallenges extends Component {
  renderChallengeItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBar, {width: `${item.progress * 100}%`}]} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}><Text style={styles.bold}>{item.donors}</Text> donors</Text>
        <Text style={styles.footerText}><Text style={styles.bold}>{item.remainingDays}</Text> days left</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Top Challenges</Text>
        <FlatList
          data={challenges}
          renderItem={this.renderChallengeItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    marginRight: 20,
    width: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#FF1843',
  },
  progressBarBackground: {
    backgroundColor: '#ddd',
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF1843',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerText: {
    fontSize: 1,
    color: 'gray',
  },
});
