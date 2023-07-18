import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageSlider from '../components/imageSlider'
import { Link } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'


const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <ImageSlider />
        <Link href={'/auth/'}>
        <Text>Home</Text>
      </Link>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
})