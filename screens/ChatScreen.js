// ExploreScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native';

const ChatScreen = () => {
  const [activeTab, setActiveTab] = useState('allChats');

  // Sample data
  const data = [
    { id: 1, name: 'John', image: '../assets/images/image1.jpg', type: 'allChats' },
    { id: 2, name: 'Jane', image: '../assets/images/2.jpg', type: 'allChats' },
    { id: 3, name: 'Alice', image: '../assets/images/3.jpg', type: 'newMatches' },
    { id: 4, name: 'Bob', image: '../assets/images/4.jpg', type: 'newMatches' },
  ];

  // Filtered data based on active tab
  const filteredData = activeTab === 'allChats' ? data : data.filter(item => item.type === 'newMatches');

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('allChats')} style={[styles.tab, activeTab === 'allChats' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'allChats' && styles.activeTabText]}>All Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('newMatches')} style={[styles.tab, activeTab === 'newMatches' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'newMatches' && styles.activeTabText]}>New Matches</Text>
        </TouchableOpacity>
      </View>

      {/* Data */}
      {filteredData.length === 0 ? (
        <ImageBackground source={require('../assets/images/users/1.jpg')} style={styles.backgroundImage}>
          <Text style={styles.noDataText}>Oops! No data found.</Text>
        </ImageBackground>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item.image}} style={styles.profileImage} />
              </View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginTop: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: 'red',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: 'white',
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderColor: "red",
    marginRight: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});


export default ChatScreen;