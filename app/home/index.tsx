import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategorySlider from '../components/categoriesSlider';
import WalletBalance from '../components/walletBalance';
import TopChallenges from '../components/topChallenges';
import EndingSoonChallenges from '../components/endingSoon';
import UserStories from '../components/userStories';
import SearchForm from '../components/searchForm';

const HomeScreen = () => {
  const renderHeader = () => (
    <View>
      <SearchForm />
      <UserStories />
      <WalletBalance />
      <CategorySlider />
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderHeader}
      data={[<TopChallenges />, <EndingSoonChallenges />]}
      renderItem={({ item }) => item}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
});
