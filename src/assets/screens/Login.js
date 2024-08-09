import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../Components/Custominput'
import Snackbar from 'react-native-snackbar'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation=useNavigation()
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  const HandleLogin = () =>{
      if (email =='' || password ==''){
          Snackbar.show({
              text:'All fields must be filled',
              duration:Snackbar.LENGTH_SHORT,
              textColor:'white',
              backgroundColor:'red',
          });  
      }
      else if (!email.endsWith('@gmail.com')){
          Snackbar.show({
              text:'email must correct',
              duration:Snackbar.LENGTH_SHORT,
              textColor:'white',
              backgroundColor:'red',
          });
      }
      else if(password.length<8){
          Snackbar.show({
              text:'password must correct',
              duration:Snackbar.LENGTH_SHORT,
              textColor:'white',
              backgroundColor:'red',
          });
      }
      else{
          Snackbar.show({
              text:'login succssfully',
              duration:Snackbar.LENGTH_SHORT,
              textColor:'white',
              backgroundColor:'green',
          })
          {navigation.navigate('HomeScreen')}
      }
      

  }

  return (
    <View style={{justifyContent:'center',backgroundColor:'#D9D9D9',flex:1}}>
        <View>
          <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'#1F41BB', marginBottom:15}}>
            Login here
          </Text>
          <Text style={{fontSize:20,fontWeight:'SemiBold',textAlign:'center',color:"#000000",}}>
          Welcome back you’ve been missed!
          </Text>
        </View>
    <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
    <CustomInput placeholder={'Email'} keyType={'email-address'} onChangeText={text => setEmail(text)} />
     <CustomInput placeholder={'Password'} keyType={'default'} onChangeText={text => setPassword(text)}/>
      </View>
       <View>
        <Text style={styles.forgotpassword}>Forgot your password?</Text>
        </View>
       <View style={{justifyContent:'center', alignItems:'center'}}>
       <TouchableOpacity style={styles.loginButton} onPress={HandleLogin}>
          <Text style={styles.buttonText } >
            Login
             </Text>
         </TouchableOpacity>
         <Text style={styles.text}>Create new account</Text>
        </View>
     <View style={{alignItems:'center',justifyContent:'center',marginTop:15}}>
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

export default Login

const styles = StyleSheet.create({
   text:{
     fontSize:17,fontWeight:'semibold', marginTop:17,color:'#100F0F', marginBottom:25,
    },
    loginButton:{
      backgroundColor:'#F87311', height:64,width:'90%',marginTop:15,borderWidth:1,borderColor:'white', justifyContent:'center', borderRadius:10
      },
   buttonText:{
       fontSize:22, fontWeight:'semibold', textAlign:'center', color:'#FFFFFF',
      },
    forgotpassword:{
      color:'black',
      fontSize:16,
      marginHorizontal:120

    },
    continueText:{
     fontSize:24, fontWeight:'semibold',color:'#F87311', marginTop:15
    },
    images:{
      width:60, height:44, marginEnd:15, marginTop:5,marginTop:12
    },
})