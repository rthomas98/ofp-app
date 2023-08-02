import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Link } from 'expo-router';

import InBoxList from '../components/inBoxList';
import SearchForm from '../components/searchForm';

const InboxScreen = () => {
  const renderHeader = () => (
    <View style={{ padding: 20 }}>
      <SearchForm />
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderHeader}
      data={[<InBoxList />]}
      renderItem={({ item }) => item}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
