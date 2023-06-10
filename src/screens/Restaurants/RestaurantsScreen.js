import React from "react";
import {View, Text} from "react-native"
import {Button} from "react-native-elements";
import {screen} from '../../utils';
import { useNavigation} from "@react-navigation/native";

export  function RestaurantesScreen(props){

    const {navigation} =props;


     const goToAddRestaurant = () =>{

       // navigation.navigate(screen.restaurant.addRestaurant)

       navigation.navigate(screen.account.tab, {screen: screen.account.account})

     }
    return(
        
    <View>
    <Text>Estamos en la screen Restaurantes</Text>
    <Button title="Crear Restaurantes" onPress={goToAddRestaurant} />
    </View>
    );

}