import { View, Text ,Platform} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as ReduxProvider } from 'react-redux';

//import configureStore from './Redux/Store';
import store from './Redux/Store';
import OrderCompleted from './screens/OrderCompleted';

//const store = configureStore();


export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShow : false,
    };
    
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName ="Home" screenOptions = {screenOptions} >
                    <Stack.Screen name="Home" component={Home} options={screenOptions} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={screenOptions} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} options={screenOptions} />
                    
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
  )
}