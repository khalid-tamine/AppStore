import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/RestaurantDetails/About'
import MenuItem from '../components/RestaurantDetails/MenuItem'



export default function RestaurantDetail({route}) {
  return (
    <View>
      <About route = {route} />
      <Divider width={1.8} style = {{ marginVertical : 20 }} />
      <MenuItem />
    </View>
  )
}