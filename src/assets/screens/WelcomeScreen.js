import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation=useNavigation()
 

  return (
    <View style={styles.container}>
      <View>
        <Image
        source={require('../Images/welcome.png')}
        style={styles.image}
        />
       </View>
       <View>
        <Text style={{fontSize:35, fontWeight:'semibold',textAlign:'center', color:'#F87311', marginTop:20, marginBottom:10, marginStart:20, marginEnd:20}}>
        Search Your Favorite Food
          </Text >
          <Text style={{fontSize:16,fontWeight:'regular',textAlign:'center',color:"#000000",margin:20,justifyContent:'center'}}>
          Find Your Favorite Food anytime from our existing location easily
             </Text>
       </View>
       <View style={{flexDirection:'row', marginTop:30}}>
          <TouchableOpacity style={styles.loginButton} onPress={()=>{navigation.navigate('Login')} }>
          <Text style={styles.buttonText}>
            Login
             </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.signupButton} onPress={()=>{navigation.navigate('SignUpScreen')} }>
          <Text style={styles.signupButtonText}>
            SignUp
            </Text>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D9D9D9'
    },
    image:{
      height:370,
      width:363, 
    },
    loginButton:{
      backgroundColor:'#F87311', height:60,width:'40%',marginTop:20,borderWidth:1,borderColor:'white', justifyContent:'center', borderRadius:10,shadowOpacity:0.5
      },
     buttonText:{
       fontSize:20, fontWeight:'semibold', textAlign:'center', color:'#FFFFFF',
      },
     signupButton:{
        backgroundColor:'#F87311', height:60,width:'40%',marginTop:20,borderWidth:1,borderColor:'#FFFFFF', justifyContent:'center', borderRadius:10
        },
         signupButtonText:{
          fontSize:20, fontWeight:'semibold', textAlign:'center', color:'#FFFFFF',
         },

})