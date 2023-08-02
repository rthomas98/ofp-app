import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import InBoxList from '../components/inBoxList'
import SearchForm from '../components/searchForm'
import { ScrollView } from 'react-native-gesture-handler'


const InboxScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{padding: 20}}>
      <SearchForm />
      </View>
        <InBoxList />
    </ScrollView>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})