import { View, Text , StyleSheet , Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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

const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
});

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator = {false} >
        {foods.map((food,index) => ( 
            <View key = {index}>
                <View style = {styles.menuItemStyle}>
                    <BouncyCheckbox 
                        iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                        fillColor="green"
                    />
                    <FoodInfo food={food } />
                    <FoodImage food = {food}  />
                </View>
                <Divider width={0.5} orientation = 'vertical' style = {{marginHorizontal : 20 }} />
            </View>
        ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => ( 
    <View style= {{ width :240, justifyContent : 'space-evenly' }} >
        <Text style = {styles.titleStyle} >{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
     <View>
        <Image 
            source = {{ uri : props.food.image }} 
            style ={{ width: 100, height : 100 , borderRadius : 8 }} 
        />
     </View>
)