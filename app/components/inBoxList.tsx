import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const messages = [
  {
    id: 1,
    userImage: 'https://i.pravatar.cc/300',
    fullName: 'John Doe',
    messagePreview: 'Hey there! How are you doing today?',
    time: '2m ago',
  },
  {
    id: 2,
    userImage: 'https://i.pravatar.cc/300',
    fullName: 'Jane Smith',
    messagePreview: 'Can you please send me the details?',
    time: '15m ago',
  },
  {
    id: 3,
    userImage: 'https://i.pravatar.cc/301',
    fullName: 'Alice Johnson',
    messagePreview: 'Looking forward to our meeting!',
    time: '1h ago',
  },
  {
    id: 4,
    userImage: 'https://i.pravatar.cc/302',
    fullName: 'Robert Brown',
    messagePreview: 'The project is going well.',
    time: '2h ago',
  },
  {
    id: 5,
    userImage: 'https://i.pravatar.cc/303',
    fullName: 'Emily Davis',
    messagePreview: 'Happy Birthday!',
    time: '3h ago',
  },
  {
    id: 6,
    userImage: 'https://i.pravatar.cc/304',
    fullName: 'Michael Miller',
    messagePreview: 'Let\'s catch up soon.',
    time: '4h ago',
  },
  {
    id: 7,
    userImage: 'https://i.pravatar.cc/305',
    fullName: 'Sarah Wilson',
    messagePreview: 'Thanks for your help!',
    time: '5h ago',
  },
  {
    id: 8,
    userImage: 'https://i.pravatar.cc/306',
    fullName: 'David Taylor',
    messagePreview: 'See you at the event!',
    time: '6h ago',
  },
  {
    id: 9,
    userImage: 'https://i.pravatar.cc/307',
    fullName: 'Jessica Anderson',
    messagePreview: 'Here are the files you requested.',
    time: '7h ago',
  },
  {
    id: 10,
    userImage: 'https://i.pravatar.cc/308',
    fullName: 'Thomas Hall',
    messagePreview: 'Congratulations on the new job!',
    time: '8h ago',
  },
  {
    id: 11,
    userImage: 'https://i.pravatar.cc/309',
    fullName: 'Lucy Thompson',
    messagePreview: 'I hope you are well.',
    time: '9h ago',
  },
  {
    id: 12,
    userImage: 'https://i.pravatar.cc/310',
    fullName: 'James White',
    messagePreview: 'Don\'t forget our appointment.',
    time: '10h ago',
  },
];

export default class InBoxList extends Component {
  renderMessageItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image source={{ uri: item.userImage }} style={styles.userImage} />
      <View style={styles.messageContent}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.messagePreview}>{item.messagePreview}</Text>
      </View>
      <View style={styles.messageInfo}>
        <MaterialCommunityIcons name="message-plus" size={24} color="#FF1843" />
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={this.renderMessageItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagePreview: {
    color: 'grey',
  },
  messageInfo: {
    alignItems: 'flex-end',
  },
  time: {
    color: 'grey',
  },
});
