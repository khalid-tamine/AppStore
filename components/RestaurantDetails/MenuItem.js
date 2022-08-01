import { View, Text , StyleSheet , Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart } from '../../Redux/Reducers/cartSlice';



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

export default function MenuItem({
    restaurantName ,  
    hideCheckbox,
    marginLeft,
    foods
}) {

    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => (
        dispatch(addToCart({item, restaurantName : restaurantName , checkboxValue : checkboxValue}))
    )
        
    
    
    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
    console.log('cartItems : ',cartItems)
    const isFoodInCart = (food , cartItems ) => cartItems.find(item => item.title === food.title) 

  return (
    <ScrollView showsVerticalScrollIndicator = {false} >
        {foods.map((food,index) => ( 
            <View key = {index}>
                <View style = {styles.menuItemStyle}>
                    { hideCheckbox? (<></>) : 
                        ( <BouncyCheckbox 
                            iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                            fillColor="green"
                            isChecked = {isFoodInCart(food , cartItems)}
                            onPress={ ( checkboxValue ) => dispatch( addToCart({food , checkboxValue , restaurantName : restaurantName}) )}
                        />)}
                    <FoodInfo food={food } />
                    <FoodImage food = {food}  marginLeft = { marginLeft ? marginLeft:0 } />
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

const FoodImage = ({ marginLeft, ...props}) => (
     <View>
        <Image 
            source = {{ uri : props.food.image }} 
            style ={{ width: 100, 
                height : 100 , 
                borderRadius : 8,
                marginLeft : marginLeft,
            }} 
        />
     </View>
)