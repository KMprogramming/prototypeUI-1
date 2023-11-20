import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity, Linking } from 'react-native';


const MainScreen = () => {
  const restaurantNames = [
    'o Subway',
    'o McDonalds',
    'o KFC',
  ];
 const openGmail = () => {
    Linking.openURL('mailto:?subject=Subject&body=Body');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Restaurant Guide</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="restaurant List" // Updated placeholder text
          // Add any necessary props and logic for search functionality
        />
        <Button
          title="Submit"
          color="#888" // Set button color to gray
          onPress={() => {
            // Logic for submit action
            console.log('Submit button pressed');
          }}
        />
      </View>
      <Text style={styles.subtitle}>Restaurant List</Text>
      {restaurantNames.map((name, index) => (
        <Text key={index} style={styles.restaurantItem}>
          {name}
        </Text>
      ))}
    <View style={styles.shareContainer}>
        <Text style={styles.shareText}>Share restaurant:</Text>
        <TouchableOpacity onPress={openGmail}>
          <Image
            source={require('../assets/Gmail_Icon.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  restaurantItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 180,
  },
  shareText: {
    fontSize: 18,
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default MainScreen;