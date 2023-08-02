import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import ProfileHeader from '../components/profile/profileHeader'
import WalletBalance from '../components/walletBalance'
import UserDetails from '../components/profile/userDetails'

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <WalletBalance />
      <UserDetails />
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})