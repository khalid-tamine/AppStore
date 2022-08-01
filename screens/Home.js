import { View, ScrollView ,Text ,SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems'
import BottomTabs from '../components/Home/BottomTabs'
import { Divider } from 'react-native-elements'
//const YELP_API_KEY =
//  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";


export default function Home({navigation}) {

  const [restaurantData , setRestaurantData] = React.useState(localRestaurants);
  const [city , setCity] = React.useState("American");
  const [activeTab , setactiveTab ] = React.useState("Chicken");
  const getRestaurantsFromYelp = () => { 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`)
      .then(response => response.json())
      .then(data => {
        const dataArray = data.meals;
        if (dataArray !== 'null') {
          console.log(dataArray);
          setRestaurantData(dataArray);
        }else {
          setRestaurantData([]);
        }
      }
      )
      .catch(error => {
        console.log(error);
      }
      );
  }

/*
  const searchByCity = (city) => { 
    if (city.length === 0) {
      console.log('empty field');
      //setRestaurantData(localRestaurants);
    }
    setCity(city);
    const filteredData = getRestaurantsFromYelp();

    if (filteredData.length === 0) {
      setCity('Canadian');
      setRestaurantData(getRestaurantsFromYelp());
    } else {
      setRestaurantData(filteredData);
    }

  }*/
 /* const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=San+Francisco`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses));
  };
*/
  React.useEffect(() => {
    getRestaurantsFromYelp();
  }, [city , activeTab]);

  return (
    <View style = {{ backgroundColor :"#eee", flex : 1 }}>
      <View style = {{ backgroundColor : "white", padding :15 }}>
        <HeaderTabs activeTab={activeTab} setactiveTab={setactiveTab} />
        <SearchBar cityHandler={setCity}  />
      </View>
      <ScrollView showsVerticalScrollIndicator = {false} >
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation = {navigation} /> 
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </View>
  )
}