import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { createStackNavigator } from '@react-navigation/stack';

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShow : false,
    };
    
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName ="Home" screenOptions = {screenOptions} >
            <Stack.Screen name="Home" component={Home} options={screenOptions} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={screenOptions} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}