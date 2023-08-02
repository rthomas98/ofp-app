import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ProfileHeader from '../components/profile/profileHeader';
import WalletBalance from '../components/walletBalance';
import UserDetails from '../components/profile/userDetails';

const ProfileScreen = () => {
  const renderHeader = () => (
    <View>
      <WalletBalance />
      <ProfileHeader />
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderHeader}
      data={[<UserDetails />]}
      renderItem={({ item }) => item}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
