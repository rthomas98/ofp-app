import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategorySlider from '../components/categoriesSlider'
import WalletBalance from '../components/walletBalance'
import TopChallenges from '../components/topChallenges'
import EndingSoonChallenges from '../components/endingSoon'
import UserStories from '../components/userStories'

import { Link } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'


const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <UserStories />
        <WalletBalance />
        <CategorySlider />
        <TopChallenges />
        <EndingSoonChallenges />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
})