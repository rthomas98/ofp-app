import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import CategorySlider from '../components/categoriesSlider';
import SearchForm from '../components/searchForm';
import MyFundraising from '../components/myFundraising';

const MyFundraisingScreen = () => {
  const renderHeader = () => (
    <View style={{ padding: 20 }}>
      <SearchForm />
      <CategorySlider />
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderHeader}
      data={[<MyFundraising />]}
      renderItem={({ item }) => item}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default MyFundraisingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
