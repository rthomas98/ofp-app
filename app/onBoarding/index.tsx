import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const onBoarding = () => {
  return (
    <View style={styles.container}>
      <Text>onBoarding</Text>

      <Link href={'/auth/'}>Auth</Link>
    </View>
  )
}

export default onBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    }
})