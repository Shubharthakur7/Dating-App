// ExploreScreen.js
import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView, ImageBackground } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ExploreScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.row}>
        <ImageWithTitle source={require('../assets/images/image1.jpg')} title="Duggu" />
        <View style={styles.imageGap} />
        <ImageWithTitle source={require('../assets/images/image2.jpg')} title="Title 2" />
      </View>
      <View style={styles.row}>
      <ImageWithTitle source={require('../assets/images/image3.jpg')} title="Title 3" />
      <View style={styles.imageGap} />
        <ImageWithTitle source={require('../assets/images/image4.jpg')} title="Darshu" />
      </View>
      <View style={styles.row}>
      <ImageWithTitle source={require('../assets/images/image5.jpg')} title="Title 5" />
      </View>
    </View>
    </ScrollView>
  );
};

const ImageWithTitle = ({ source, title }) => {
  return (
    <ImageBackground source={source} style={styles.image} imageStyle={styles.imageStyle}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    height: screenWidth * 1.5 * 0.5 + 10,
    padding: 5,
  },
  imageStyle: {
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    height: '100%',
    resizeMode: 'cover',
  },
  imageGap: {
    width: 5,
  },
});

export default ExploreScreen;

