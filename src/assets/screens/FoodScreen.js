import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image,SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from  'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const searchResults = [
  {
    id: '1',
    title: 'Vegetable Curry',
    description: 'Found in 15 nearby restaurants',
    price: '$5.99 /person',
    rating: 4.7,
    image:require('../Images/curry.png')
  },
  {
    id: '2',
    title: 'Fried Plantain',
    description: 'Found in 15 nearby restaurants',
    price: '$4.99 /person',
    rating: 4.8,
    image:require('../Images/plantain.png')
  },
  {
    id: '3',
    title: 'Chicken Pasta',
    description: 'Found in 15 nearby restaurants',
    price: '$6.99 /person',
    rating: 4.9,
    image:require('../Images/chickenpasta.png')
  },
];

const categories = [
  { id: '1', title: 'Breakfast', image:require('../Images/breakfast.png')},
  { id: '2', title: 'Lunch', image:require('../Images/lunch.png')  },
  { id: '3', title: 'Dinner', image:require('../Images/dinner.png') },
];

  const RenderSearchResult = ({ item,image,title,description,price,rating }) => (
    <View style={styles.resultCard}>
      <Image source={image } style={styles.resultImage} />
      <View style={styles.resultTextContainer}>
        <TouchableOpacity>
        <Text style={styles.resultTitle}>{title}</Text>
        <Text style={styles.resultDescription}>{description}</Text>
         </TouchableOpacity>
         <View style={styles.resultFooter}>
          <Text style={styles.resultPrice}>{price}</Text>
          <View style={styles.resultRating}>
            <Text style={styles.resultRatingText}>{rating}</Text>
            <AntDesign name="star" size={18} color="#FFD700" />
           </View>
        </View>
      </View>
    </View>
  );

  const RenderCategory = ({ item,image,title }) => (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Image source={image } style={styles.categoryImage} />
    </View>
  );
  const FoodScreen = () => {
    const navigation=useNavigation()
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
        <Text style={styles.sectionTitle}>Search results</Text>
        <Text style={styles.sectionMore}>See More</Text>
      </View>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.resultCard}>
            <Image source={item.image } style={styles.resultImage} />
            <View style={styles.resultTextContainer}>
              <TouchableOpacity onPress={()=>{navigation.navigate("DishScreen")}}>
              <Text style={styles.resultTitle}>{item.title}</Text>
              <Text style={styles.resultDescription}>{item.description}</Text>
               </TouchableOpacity>
               <View style={styles.resultFooter}>
                <Text style={styles.resultPrice}>{item.price}</Text>
                <View style={styles.resultRating}>
                  <Text style={styles.resultRatingText}>{item.rating}</Text>
                  <AntDesign name="star" size={18} color="#FFD700" />
                 </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Neighbour’s Search</Text>
        <Text style={styles.sectionMore}>More</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={({item})=> <RenderCategory {...item} />}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.horizontalList}

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
    fontSize: 16,
    fontWeight: '500',
  },
 searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#333'
  },
  sectionMore: {
    fontSize: 14,
    color: '#888',
    color:'#AAA'
  },
  list: {
    marginBottom: 16,
  },
  horizontalList: {
    marginBottom: 16,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  resultImage: {
    width: '36%',
    height: 110,
    borderRadius: 25,
    marginRight: 16,
    position:'relative',
    bottom:20
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color:'black'
  },
  resultDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  resultFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  resultRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultRatingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
  },
  categoryCard: {
    width: 150,
    height: 130,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImage: {
    width: '100%',
    height: 85,
    borderRadius: 25,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
});

export default FoodScreen;