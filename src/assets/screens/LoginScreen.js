import { StyleSheet, Text, View , TextInput,TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = () =>{
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
        }

    }

  return (
    
      <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={()=>(handleLogin)}>
          <Text style={styles.buttonText } >
            Login
             </Text>
         </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },

    input: {
        marginBottom: 8,
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'black'
    },
  })