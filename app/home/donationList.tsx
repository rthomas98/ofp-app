import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';

import MyChallenges from '../components/myChallenges';
import DonationCalendar from '../components/donationsCalender';
import DonationsActivity from '../components/donationsActivity';

const Tab = createMaterialTopTabNavigator();

const MyFundraising = () => (
  <ScrollView style={styles.tabView}>
    <DonationCalendar />
    <MyChallenges />
  </ScrollView>
);

const Activity = () => (
  <View style={styles.tabView}>
    <DonationsActivity />
  </View>
);

const DonationListScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="MyFundraising"
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIndicatorStyle: { backgroundColor: '#FF1843' },
        }}
      >
        <Tab.Screen name="My Fundraising" component={MyFundraising} />
        <Tab.Screen name="Activity" component={Activity} />
      </Tab.Navigator>
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default DonationListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabView: {
    flex: 1,
    
  },
  fab: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF1843',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, // for Android
    shadowColor: '#000000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.25, // for iOS
    shadowRadius: 3.84, // for iOS
  },
});
