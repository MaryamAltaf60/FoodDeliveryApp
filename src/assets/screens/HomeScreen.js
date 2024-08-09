import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: '1', title: 'Breakfast', color: '#DDEFFF',image:require('../Images/breakfast.png') },
  { id: '2', title: 'Lunch', color: '#FFF5D9',image:require('../Images/lunch.png') },
  { id: '3', title: 'Dinner', color: '#F3EFFF',image:require('../Images/dinner.png') },
];
const popularItems = [
  { id: '1', title: 'Spicy Noodles', rating: 4.8, foundIn: '20 Restaurants',color: '#FFF5D9',image:require('../Images/noodles.png') },
  { id: '2', title: 'Shrimps Pasta', rating: 4.7, foundIn: '13 Restaurants', color: '#DDEFFF',image:require('../Images/pasta.png') },
  
];
const CategoryItem = ({ title, color,image }) => (
  <View style={[styles.categoryItem, { backgroundColor: color }]}>
    <Text style={styles.categoryTitle}>{title}</Text>
    <Image source={image} style={{height:110,width:'75%'}}/>
  </View>
);
const HomeScreen = () => {
  const navigation=useNavigation()
  const handlePress=(id)=>{
    if (id ==='1'){
      navigation.navigate('FoodScreen')
    }
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
         <View style={styles.menuContainer}>
          <Feather name="menu" size={24} color="#666"/>
          <View style={styles.locationContainer}>
          <EvilIcons name="location" size={24} color="#666" />
          <Text style={styles.locationText}>Mohammadpur, Dhaka</Text>
          <Entypo name="chevron-down" size={24} color="#666" />
        </View>
        </View>
        <Image
        source={require('../Images/Avatar.png')} />
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Good Morning,</Text>
        <Text style={styles.userName}>Bessie Cooper</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <EvilIcons name="search" size={30} color="#999" />
          <TextInput style={styles.searchInput} placeholder="Search for Lunch" placeholderTextColor="#999" />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={30} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.sectionMore}>More</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem {...item } />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.categoriesList}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <Text style={styles.sectionMore}>More</Text>
      </View>
      
      <FlatList
       data={popularItems}
        renderItem= { ({item }) => (
          <View style={[styles.popularItem, { backgroundColor:item. color }]}>
            <Image source={item.image} style={{height:150,width:'100%'}}/>
            <Text style={styles.popularItemRating}>
                {item.rating} <AntDesign name="star" size={18} color="#FFD700" />
              </Text>
              <View style={styles.popularItemContent}>
              <TouchableOpacity onPress={()=>{handlePress(item.id)}}>
              <Text style={styles.popularItemTitle}>{item.title}</Text>
              <Text style={styles.popularItemFoundIn}>Found in{item.foundIn}</Text>
              </TouchableOpacity>
          </View>
             </View> 
           ) }
        keyExtractor={(item) => item.id} 
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.popularList}
      />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:17
  },
  locationText: {
    fontSize: 18,
    color: '#666',
    marginHorizontal: 5,
  },
  greetingContainer: {
    marginVertical: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#AAA',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    flex: 1,
    marginRight: 10,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionMore: {
    fontSize: 16,
    color: '#AAA',
  },
  categoriesList: {
    paddingVertical: 10,
  },
  categoryItem: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  popularList: {
    paddingVertical: 10,
  },
  popularItem: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'flex-end',
    padding: 10,
  },
  popularItemContent: {
    backgroundColor: 'white',
    borderRadius:10,
    padding:10,
    width:'100%',
    height:80,
  },
  popularItemRating: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    color: '#333',
  },
  popularItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  popularItemFoundIn: {
    fontSize: 14,
    color: '#AAA',
  },
});

export default HomeScreen;