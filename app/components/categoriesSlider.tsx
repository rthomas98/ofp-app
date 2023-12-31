import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Fitness and Sports', 'Sports Challenges', 'Cooking and Baking', 'Outdoor Adventures', 'Gardening and Sustainability', 'DIY and Crafts', 'Reading and Writing', 'Home Organization', 'Art and Culture', 'Fashion and Style', 'Mindfulness and Yoga'];

export default class CategorySlider extends Component {
  renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          renderItem={this.renderCategoryItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#FF1843',
    
  },
  categoryItem: {
    paddingHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF1843',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryText: {
    color: '#FF1843',
  },
});
