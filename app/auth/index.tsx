import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const LogIn = () => {
  return (
    <View style={styles.container }>
      <Text>Login</Text>
      <Link href={'home/'}>Go Home</Link>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    }
})