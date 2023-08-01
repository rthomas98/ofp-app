import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const windowHeight = Dimensions.get('window').height;

export default class DonationCalendar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Donation Calendar</Text>
        <View style={styles.calendarContainer}>
          <Calendar 
            // Collection of dates that have to be colored in a special way
            markedDates={{
              '2023-08-16': {selected: true, marked: true, selectedColor: 'blue'},
              '2023-08-17': {marked: true},
              '2023-08-18': {marked: true, dotColor: 'red', activeOpacity: 0},
              '2023-08-19': {disabled: true, disableTouchEvent: true}
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  calendarContainer: {
    height: windowHeight * 0.4, // 40% of screen height
  },
});
