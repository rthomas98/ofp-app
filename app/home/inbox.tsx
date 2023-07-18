import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const InboxScreen = () => {
  return (
    <View>
      <Text>inbox</Text>
      <Link href={'/auth/'}>
        <Text>Sign up</Text>
      </Link>
    </View>
  )
}

export default InboxScreen

const styles = StyleSheet.create({})