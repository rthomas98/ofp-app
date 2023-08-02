import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CategorySlider from '../components/categoriesSlider'
import SearchForm from '../components/searchForm'
import MyFundraising from '../components/myFundraising'
import { ScrollView } from 'react-native-gesture-handler'

const MyFundraisingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{padding: 20}}>
      <SearchForm />
      </View>
      <CategorySlider />
      <MyFundraising />
    </ScrollView>
  )
}

export default MyFundraisingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})