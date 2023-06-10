import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {FavoritesStack} from "./FavoriteStack";
import {RankingStack} from "./RankingStack";
import {AccountStack} from "./AccountStack";
import {SearchStack} from "./SearchStack";
import { screen} from "../utils";
import {RestaurantStack} from './RestaurantStack';

const Tab= createBottomTabNavigator();


export function AppNavigation (){

   return(

    <Tab.Navigator screenOptions={({ route})=>(
        {
            tabBarActiveTintColor:"#00a680",
            tabBarInactiveTintColor:"#646464",
            tabBarIcon: ({color, size}) => screenOptions (route, color, size),
            headerShown: false,
        }


    )} >
        <Tab.Screen name={screen.restaurant.tab} 
                    component={RestaurantStack} 
                    options={{title: screen.restaurant.titulo}} />
                    
       
        <Tab.Screen name={screen.favorites.tab} component={FavoritesStack} options={{title: "Favoritos"}} />
        <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{title: "Ranking"}} />
        <Tab.Screen name={screen.search.tab} component={SearchStack} options={{title: "Buscar"}} />
        <Tab.Screen name={screen.account.tab} component={AccountStack} options={{title: "Mi Cuenta"}} />
    </Tab.Navigator>
   ) 
}

function screenOptions(route, color, size){

    let iconName;

    if (route.name===screen.restaurant.tab){
        iconName="compass-outline";

    }

    if (route.name===screen.favorites.tab){
        iconName="heart-outline";
        
    }

    if (route.name===screen.ranking.tab){
        iconName="star-outline";
        
    }

    if (route.name===screen.account.tab){
        iconName="home-outline";
        
    }

    if (route.name===screen.search.tab){
        iconName="magnify";
        
    }

    return(

        <Icon type="material-community"  name={iconName} color={color}  size={size} />

    )

}