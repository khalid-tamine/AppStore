import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function ViewCart() {
  return (
    <View
        style={{
            flex : 1,
            alignItems : 'center',
            flexDirection : 'row',
            justifyContent : 'center',
            position : 'absolute',
            bottom : 80,
            zindex : 999,
        }}
    >
        <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width : '100%',
            }}
        >
            <TouchableOpacity
                style = {{
                margintTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 13,
                borderRadius: 30,
                width: 300,
                position : 'relative',  
                }}  
            >
                <Text style = {{color : 'white', fontSize : 20}} >ViewCart</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}