import React from "react";
import { createNativeStackNavigator   } from "@react-navigation/native-stack";
import {screen} from '../utils';
import { RestaurantesScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestaurantScreen} from "../screens/Restaurants/AddRestaurantScreen";

const Stack= createNativeStackNavigator();

export function RestaurantStack ()

{  

return(
    <Stack.Navigator>
        <Stack.Screen 
        name={screen.restaurant.restaurants} 
        component={RestaurantesScreen}
        options={{title: "Restaurantes"}}
        />

        <Stack.Screen 
        name={screen.restaurant.addRestaurant} 
        component={AddRestaurantScreen}
        options={{title: "Agregar Restaurante"}}
        />
    </Stack.Navigator>
)

}
