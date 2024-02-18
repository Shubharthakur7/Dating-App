// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { List, Card, Title, Button } from 'react-native-paper';
import api from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the dummy API
    const fetchData = async () => {
      try {
        const response = await api.get('/posts');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    // Implement cart functionality as needed
    console.log('Added to cart:', item);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.title}</Title>
        {/* <image src="https://picsum.photos/200/300" /> */}
        <Image
         source={{ uri: 'https://picsum.photos/200/300' }} // Update the path to your image
        // style={styles.image}
      />
        <Button onPress={() => addToCart(item)}>Add to Cart</Button>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default HomeScreen;
