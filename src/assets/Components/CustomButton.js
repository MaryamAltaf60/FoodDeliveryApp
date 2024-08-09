import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.signUpButton} onPress={()=>console.log('Sign up, done')}>
          <Text style={styles.buttonText } >
            Sign Up
             </Text>
         </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    signUpButton:{
        backgroundColor:'#F87311', height:64,width:'90%',marginTop:15,borderWidth:1,borderColor:'white', justifyContent:'center', borderRadius:10
        },
     buttonText:{
         fontSize:22, fontWeight:'semibold', textAlign:'center', color:'#FFFFFF',
        },
})