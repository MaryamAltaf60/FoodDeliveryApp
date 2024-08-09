import { StyleSheet, Text, View,Image ,SafeAreaView,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DishScreen = () => {
    const[count,setCount] = useState(0);
    const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

    useEffect(() => {
      setCount(2 )
    },[])
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
      <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../Images/pasta.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.heartIcon}>
          <AntDesign name="heart" size={24} color="red" />
        </TouchableOpacity>
      </View>
      </View>
      <View>
        <Text style={styles.distanceTime}>2.5 Km • 5 Mins</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity>
          <Text style={styles.itemTitle}>Shrimps Pasta</Text>
          </TouchableOpacity>
        <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={decrement}>
        <Ionicons name="remove-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={increment}>
        <Ionicons name="add-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.8</Text>
          <AntDesign name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingCount}> • 5k+ Rating</Text>
          
        </View>
        <Text style={styles.description}>
          Vulpitate tincidunt convallis pulvinar egestas consequat, aliquam lectus nibh. Leo purus nisi, nibh condimentum aliquam eu quis. Ultrices arcu pharetra.
        </Text>
        <Text style={styles.description}>
          Convallis pulvinar egestas consequat
        </Text>
         </View>
         <View style={styles.footer}>
        <Text style={styles.priceText}>$19.99</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Check out</Text>
          <AntDesign name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default DishScreen

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
      cardContainer:{
        weidth:380,
        height:350,
        padding:5,
        backgroundColor:'pink',
        margin:10,
        borderRadius:10

      },
      imageContainer: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 16,
      },
      image: {
        width: 315,
        height: 315,
        borderRadius: 16,
      },
      heartIcon: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 8,
      },
      detailsContainer: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
      },
      distanceTime: {
        fontSize: 14,
        color: '#888',
        marginBottom: 8,
      },
      itemTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'black'
      },
     buttonContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        overflow: 'hidden',
        marginHorizontal:35
      },
      button: {
        padding: 12,
      },
      decrementButton: {
        backgroundColor: '#1153F8',
      },
      incrementButton: {
        backgroundColor: '#4CAF50',
      },
      countContainer: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3D00',
      },
      countText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 4,
      },
      ratingCount:{
        fontSize: 14,
        color: '#888',
      },
      description: {
        fontSize: 15,
        color: '#888',
        marginBottom: 8,
      },
      quantityContainer: {
        flexDirection: 'row',
        marginTop: 7,
      },
      quantityButton: {
        backgroundColor: 'white',
        padding: 8,
      },
      quantityText: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor:'red',
        padding:10
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 16,
        marginTop:40
      },
      priceText: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      checkoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF3D00',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      checkoutButtonText: {
        fontSize: 16,
        color: 'white',
        marginRight: 8,
      },

})