import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/RestaurantDetails/About'
import MenuItem from '../components/RestaurantDetails/MenuItem'
import ViewCart from '../components/RestaurantDetails/ViewCart'

const foods = [
  {
      title: 'Pancake Banana with Chocolate',
      price: '$10.00',
      description: 'With butter lettuce, dark chocolat and chocolate syrup',
      image : 'https://www.cuisinelolo.fr/wp-content/uploads/2014/05/Pancakes-%C3%A0-la-banane-6.jpg'
  },
  {
      title: 'Pancake Banana with Strawberry',
      price: '$12.00',
      description: 'With creme fraiche and strawberry',
      image : 'https://assets.afcdn.com/recipe/20200303/108677_w1024h768c1cx1626cy1839.webp'
  },
  {
      title: 'Panckage Banana with Vanilla',
      price: '$10.00',
      description : 'With butter and creme fraiche',
      image : 'https://recette.supertoinette.com/151531/b/pancakes-a-la-banane.jpg'
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