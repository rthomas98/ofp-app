import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: 'Item 1',
      content: 'Item 1 Content',
      image: 'https://www.bootdey.com/image/280x280/8A2BE2/000000',
    },
    {
      title: 'Item 2',
      content: 'Item 2 Content',
      image: 'https://www.bootdey.com/image/280x280/FF7F50/000000',
    },
    {
      title: 'Item 3',
      content: 'Item 3 Content',
      image: 'https://www.bootdey.com/image/280x280/00FFFF/000000',
    },
  ];

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={(event) => {
          const x = event.nativeEvent.contentOffset.x;
          const index = Math.round(x / width);
          if (index !== activeIndex) {
            setActiveIndex(index);
          }
        }}
        scrollEventThrottle={16}
      >
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {items.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
            <View
              style={[
                styles.dot,
                { backgroundColor: index === activeIndex ? 'white' : 'gray' },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
  },
  itemContainer: {
    width: width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    position: 'absolute',
  },
  overlay: {
    width: '90%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    borderRadius: 10,
  },
  textContainer: {
    width: '80%',
    padding: 10,
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  content: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  dotContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 5,
    borderWidth: 1
  },
});

export default ImageSlider;
