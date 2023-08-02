import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MyChallenges from '../../components/myChallenges';
import DonationsActivity from '../../components/donationsActivity';

const Tab = createMaterialTopTabNavigator();

const RecentChallenges = () => (
  <View style={styles.tabView}>
    <Text>My Challenges</Text>
    <MyChallenges />
  </View>
);

const Activity = () => (
  <View style={styles.tabView}>
    <Text>Activity</Text>
    <DonationsActivity />
  </View>
);

export default class AboutMe extends React.Component {
  render() {
    const interests = ['Running', 'Reading', 'Gaming', 'Cooking', 'Traveling', 'Photography'];

    return (
      <View style={styles.container}>
        <Text style={styles.header}>About Me</Text>
        <Text style={styles.bio}>
          Hi, I'm John Doe, a software developer with a passion for creating meaningful applications. In my free time, I
          enjoy various activities.
        </Text>
        <Text style={styles.interestHeader}>Interests</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.interestContainer}>
          {interests.map((interest, index) => (
            <View key={index} style={styles.interestPill}>
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </ScrollView>
        <NavigationContainer independent={true}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#000000',
              tabBarLabelStyle: { fontSize: 14 },
              tabBarStyle: { backgroundColor: 'white' },
              tabBarIndicatorStyle: { backgroundColor: '#FF1843' },
            }}
          >
            <Tab.Screen name="My Challenges" component={RecentChallenges} />
            <Tab.Screen name="Activity" component={Activity} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

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
  bio: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  interestHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  interestContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  interestPill: {
    backgroundColor: '#FF1843',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  interestText: {
    color: 'white',
    fontSize: 14,
  },
  tabView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
