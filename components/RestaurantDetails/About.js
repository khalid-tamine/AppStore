import { View, Text , Image } from 'react-native'
import React from 'react'

//const image = 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
//const title = 'Farmhouse Kitchen';
//const description = 'Thai * Cuisine';

const yelpRestaurantInfo = {
  price : '$10.00',
  reviews : '1500',
  rating : '4.5',
  };
  //categories : [{ title : 'Thai' }, { title : 'Cuisine' },{title : 'Food'}, { title : 'Restaurant' }],




export default function About(props) {
  const {name, image, categories } = props.route.params;
  const { price, reviews, rating} = yelpRestaurantInfo;    

  console.log(props.route.params)
  const formattedCategories = categories;
  //const formattedCategories = categories.map((cat) => cat.title ).join('.'); 

  const description = ` ${
    price ?  price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
        <RestaurantImage image = {image} /> 
        <RestaurantName name = {name} />
        <RestaurantDescription description = {description} />
    </View>
  )
}

const RestaurantImage = (props) =>  (
    <Image source={{uri : props.image}} style={{ width: '100%', height: 180 }} />
    )


const RestaurantName = (props) => (
    <Text style={{ fontSize: 29, fontWeight: 'bold', marginTop: 10 , marginLeft: 6 }}>{props.name}</Text>
    )


const RestaurantDescription = (props) => (
    <Text style={{ fontSize: 15.5, fontWeight:"400", marginHorizontal: 15, marginTop: 10  }}>{props.description}</Text>
    )    
