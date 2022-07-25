import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function SearchBar({cityHandler}) {

  return (
    <View>   
        <View style={{ 
             backgroundColor: '#eee',
             borderRadius: 50,
             padding: 10,
             flexDirection : "row",
             alignItems : "center",
             marginTop : 15,
             marginRight : 10
          }}>
            <TextInput
                autoComplete='on'
                style={{ flex: 1, borderRadius: 20, backgroundColor: '#eee', paddingHorizontal: 10, paddingVertical: 10 }}
                placeholder="Search for recipes"
                onChangeText={cityHandler} 
            />
              
            <View 
                style ={{
                    marginRight : 8,
                    flexDirection :"row",
                    backgroundColor:"white",
                    padding :9,
                    borderRadius : 30,
                    alignItems : "center",
                }} 
            >
                <AntDesign name="clockcircleo" size={11} style = {{marginRight :6 }} />
                <Text>Search</Text>
            </View>
            


        </View>
        {/* <View style ={{ marginTop:15 , flexDirection : "row"  }}>
            
            <GooglePlacesAutocomplete 
            requestUrl={{
                useOnPlatform: 'all',
                url:'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api'
            }}
            query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" , language: 'en' }}
        placeholder='Search'
        onBlur = {() => {console.log("blur")}}
        onPress={(data, details = null) => {
            console.log(data.description);
            const city = data.description.split(",")[0];
            cityHandler(city);
          }}
        styles={{
            textInput : {
                backgroundColor: '#eee',
                borderradius: 20,
                fontweight: "700",
                marginTop : 7,
            },
            textInputContainer: {
                backgroundColor: '#eee',
                borderRadius: 50,
                flexDirection : "row",
                alignItems : "center",
                marginRight : 10, 
            }
        }}
        renderLeftButton = {() => 
            <View style ={{marginLeft : 10}} >
                <Ionicicons name='location-sharp' size={24} />
            </View>}

        renderRightButton = {() =>   
            <View 
                style ={{
                    marginRight : 8,
                    flexDirection :"row",
                    backgroundColor:"white",
                    padding :9,
                    borderRadius : 30,
                    alignItems : "center",
                }} 
            >
                <AntDesign name="clockcircleo" size={11} style = {{marginRight :6 }} />
                <Text>Search</Text>
            </View>}
      />
    </View> */}
    </View>
  )
}