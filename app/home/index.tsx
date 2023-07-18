import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageSlider from '../components/imageSlider'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageSlider />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
})