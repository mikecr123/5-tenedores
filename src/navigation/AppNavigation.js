import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { RestaurantsScreen} from "../screens/RestaurantsScreen";

const Tab= createBottomTabNavigator();


export function AppNavigation (){

   return(

    <Tab.Navigator>
        <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
    </Tab.Navigator>
   ) 
}