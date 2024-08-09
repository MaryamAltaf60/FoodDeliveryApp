import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/assets/screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './src/assets/screens/WelcomeScreen'
import HomeScreen from './src/assets/screens/HomeScreen'
import FoodScreen from './src/assets/screens/FoodScreen'
import DishScreen from './src/assets/screens/DishScreen'
import SignUpScreen from './src/assets/screens/SignUpScreen'

const Stack=createNativeStackNavigator()

const App = () => {
   return (
  <NavigationContainer>
    <Stack.Navigator  initialRouteName='WelcomeScreen' screenOptions={{headerShown:false}}>
    <Stack.Screen name='Welcome' component={WelcomeScreen}/>
    <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='FoodScreen' component={FoodScreen}/>
      <Stack.Screen name='DishScreen' component={DishScreen}/>
      
     
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})