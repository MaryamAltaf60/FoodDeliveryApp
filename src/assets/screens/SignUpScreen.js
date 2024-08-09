import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image} from 'react-native'
 import React from 'react'
 import CustomInput from '../Components/Custominput'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () =>{
    const navigation=useNavigation()
  return (
    <View style={{justifyContent:'center',backgroundColor:'#D9D9D9',flex:1}}>
        <View>
          <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'#F87311', marginBottom:10}}>
            Create Account </Text>
          <Text style={{fontSize:16,fontWeight:'medium',textAlign:'center',color:"#000000", marginBottom:20}}>
            Create an account so ypu can explore all the existing foods </Text>
       </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
        <CustomInput placeholder={'Email'} keyType={'email-address'}/>
        <CustomInput placeholder={'Password'} keyType={'default'}/>
        <CustomInput placeholder={'Confirm Password'} keyType={'default'}/>
        <TouchableOpacity style={styles.signUpButton} onPress={()=>{navigation.navigate("Login")}}>
          <Text style={styles.buttonText } >
            Sign Up
             </Text>
         </TouchableOpacity>
         <Text style={styles.text}>Already have an account</Text>
       </View>
     <View style={{alignItems:'center',justifyContent:'center',marginTop:25}}>
        <Text style={styles.continueText}>or continue with </Text>
       <TouchableOpacity>
          <Image
          source={require('../Images/google.png')}
          style={styles.images}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          source={require('../Images/facebook.png')}
          style={styles.images}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          source={require('../Images/apple.png')}
          style={styles.images}
         />
         </TouchableOpacity>
         </View>
    </View>
 
    )
}
export default SignUpScreen
const styles = StyleSheet.create({
 text:{
  fontSize:16,fontWeight:'semibold', marginTop:15,color:'black'
 },
 signUpButton:{
  backgroundColor:'#F87311', height:64,width:'90%',marginTop:15,borderWidth:1,borderColor:'white', justifyContent:'center', borderRadius:10
  },
buttonText:{
   fontSize:22, fontWeight:'semibold', textAlign:'center', color:'#FFFFFF',
  },
 continueText:{
  fontSize:24, fontWeight:'bold',color:'#F87311', marginTop:15
 },
 images:{
  width:60, height:44, marginEnd:15,marginTop:10
  }
 })