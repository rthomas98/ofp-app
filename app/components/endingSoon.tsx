import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

const endingSoonChallenges = [
    { 
      id: '1', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1212860350.jpg', 
      title: '21 Shots Challenge', 
      progress: 0.6, 
      donors: 50, 
      remainingDays: 10 
    },
    { 
      id: '2', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_2199248593.jpg', 
      title: 'Lets Jinga Challenge', 
      progress: 0.8, 
      donors: 70, 
      remainingDays: 15 
    },
    { 
      id: '3', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1940996575-scaled.jpg', 
      title: 'PS5 Challenge', 
      progress: 0.3, 
      donors: 30, 
      remainingDays: 20 
    },
    { 
      id: '4', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1335291812.jpg', 
      title: 'Sing With me Challenge', 
      progress: 0.9, 
      donors: 90, 
      remainingDays: 5 
    },
    { 
      id: '5', 
      image: 'https://example.com/image5.jpg', 
      title: 'Sing With me Challenge', 
      progress: 0.5, 
      donors: 50, 
      remainingDays: 10 
    },
    { 
      id: '6', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_1028055517.jpg', 
      title: 'Hola Hoop Challenge', 
      progress: 0.7, 
      donors: 70, 
      remainingDays: 15 
    },
    { 
      id: '7', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_693609082.jpg', 
      title: 'Challenge 7', 
      progress: 0.2, 
      donors: 20, 
      remainingDays: 20 
    },
    { 
      id: '8', 
      image: 'https://empuls3.com/wp-content/uploads/2023/07/shutterstock_565003417.jpg', 
      title: 'Soccer Goals Challenge', 
      progress: 0.1, 
      donors: 10, 
      remainingDays: 30 
    },
  ];
  

export default class EndingSoonChallenges extends Component {
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
        <Text style={styles.header}>Ending Soon Challenges</Text>
        <FlatList
          data={endingSoonChallenges}
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
    fontSize: 18,
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
    fontSize: 16,
    color: 'gray',
  },
});
