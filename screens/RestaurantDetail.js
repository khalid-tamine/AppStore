import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/RestaurantDetails/About'
import MenuItem from '../components/RestaurantDetails/MenuItem'
import ViewCart from '../components/RestaurantDetails/ViewCart'

const foods = [
  {
      title: 'Chicken',
      price: '$10.00',
      description: 'Chicken is a meaty dish made of meat and vegetables.',
      image : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      title: 'Beef',
      price: '$12.00',
      description: 'Beef is a meaty dish made of meat and vegetables.',
      image : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      title: 'Pork',
      price: '$10.00',
      description : 'pork is delicious',
      image : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
]

export default function RestaurantDetail({route , navigation }) {
  return (
    <View>
      <About route = {route} />
      <Divider width={1.8} style = {{ marginVertical : 20 }} />
      <MenuItem restaurantName = {route.params.name} foods = {foods}  />
      <ViewCart navigation = {navigation}   />
    </View>
  )
}