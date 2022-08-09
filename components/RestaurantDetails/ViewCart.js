import { View, Text, Modal , StyleSheet } from 'react-native'
import React , {useState} from 'react'
import { TouchableOpacity } from 'react-native-web'
import  { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import firebase from '../../firebase.js';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import LottieView from 'lottie-react-native';

export default function ViewCart({ navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const {items , restaurantName } = useSelector( (state) => state.cartReducer.selectedItems);
    const total = items.map( (item) => Number(item.price.replace('$','')) ).reduce( (prev, curr) => prev + curr, 0);
    const totalUSD = total.toLocaleString('en',{
        style : 'currency',
        currency : 'USD',
    });

    // add firestore
    const addOrderToFireBase =  () => {
      setLoading(true);
      const db   =  firebase.firestore();
      db.collection("orders").add({
        items : items,
        restaurantName : restaurantName,
        createdAt : firebase.firestore.FieldValue.serverTimestamp(),
      }).then( () => {
        setTimeout( ()=> {
          setLoading(false);
          setModalVisible(false);
          navigation.navigate("OrderCompleted");
         }, 10); 
      });
      console.log("Order added to Firebase");
    }; 
    const styles = StyleSheet.create({
        modalContainer : {
            flex : 1,
            justifyContent : 'flex-end',
            backgroundColor : 'rgba(0,0,0,0.7)',
        },
        modalCheckoutContainer : {
            backgroundColor : 'white',
            padding : 16,
            height : 500,
            borderWidth : 1,
        },
        modalCheckoutButton : {
            textAlign : 'center',
            fontWeight : '600',
            fontSize : 18,
            marginBottom : 10,
        },
        subtotalContainer : {
            flexDirection : 'row',
            justifyContent : 'space-between',
            marginTop : 15,
        },
        subtotalText : {
            textAlign : 'left',
            fontWeight : '600',
            fontSize : 15,
            marginBottom : 10,
        },
    })

    const checkoutModalContent = () => {
        return (
          <>
            <View style={styles.modalContainer}>
              <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                {items.map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
                <View style={styles.subtotalContainer}>
                  <Text style={styles.subtotalText}>Subtotal</Text>
                  <Text>{totalUSD}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 20,
                      backgroundColor: "black",
                      alignItems: "center",
                      padding: 13,
                      borderRadius: 30,
                      width: 300,
                      position: "relative",
                    }}
                    onPress={() => {
                        addOrderToFireBase();
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                    <Text
                      style={{
                        position: "absolute",
                        right: 20,
                        color: "white",
                        fontSize: 15,
                        top: 17,
                      }}
                    >
                      {total ? totalUSD : ""}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        );
    };

  return (
    <>
    <Modal visible={modalVisible} 
        animationType="slide"
        transparent = {true}
        onRequestClose = { ()=> setModalVisible(false) }
    > 
        {checkoutModalContent()}
    </Modal>
    {total ? (
    <View
        style={{
            flex : 1,
            alignItems : 'center',
            flexDirection : 'row',
            justifyContent : 'flex-end',
            position : 'relative',
            marginBottom : 20,
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
               
                flexDirection : 'row',
                justifyContent : 'flex-start',
                backgroundColor: 'black',
                padding: 15,
                borderRadius: 30,
                width: 300,
                position : 'rel ative',  
                }}  
                onPress={() => setModalVisible(true)}
            >
                <Text style = {{color : 'white', fontSize : 20 , marginLeft : 26 }} >ViewCart</Text>
                <Text style = {{color : 'white' ,  fontSize : 20 , marginTop : 1 , marginLeft : 76 }} >{totalUSD}</Text>
            </TouchableOpacity>
        </View>
    </View>
    ) : (<></>)}
    { loading ? ( 
      <View style = {{ 
        backgroundColor:'black', 
        position : 'absolute', 
        opacity : 0.6, 
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
        height : '100%',
        width : '100%',
        }} >
          <Text>loading</Text>
          {/* <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          /> */}
      </View>
    ) : ( <></> ) }
    </>
  )
}