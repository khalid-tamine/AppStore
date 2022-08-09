import { View, Text } from 'react-native'
import React , {useState} from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function HeaderTabs(props) {
  return (
    <View style = {{ flexDirection : "row", alignSelf : "center" }}>
      <HeaderButtons text = "Homemade" btnColor="black" textColor ="white" activeTab ={props.activeTab} setactiveTab = { props.setactiveTab } />
      <HeaderButtons text = "Fast Food" btnColor="white" textColor ="black" activeTab ={props.activeTab} setactiveTab ={props.setactiveTab} />

    </View>
  )
}

const HeaderButtons = (props) => ( 
    <View>
        <TouchableOpacity 
        style = {{
            backgroundColor : props.activeTab === props.text ? "black" : "white",
            paddingvertical : 6,
            paddingHorizontal : 16,
            borderRadius : 30,
        }}
        onPress = {() => props.setactiveTab(props.text)}
        >
            <Text 
                style = {{ 
                    color : props.activeTab === props.text ? "white" : "black",
                    fontSize:15 ,
                    fontWeight :820, 
                    textAlign : "center"}}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
        
    </View>
  
)
    