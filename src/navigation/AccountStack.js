import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { LoginScreen}  from "../screens/Account/LoginScreen"
import { AccountScreen} from "../screens/Account/AccountScreen";
import {screen} from "../utils";
import { RegisterScreen } from "../screens/Account/RegisterScreen";

const Stack= createNativeStackNavigator();

export function AccountStack (){

    return(
        <Stack.Navigator>
        <Stack.Screen 
        name={screen.account.account} 
        component={AccountScreen}
        options={{title: "Account"}}
        />

        <Stack.Screen 
        name={screen.account.login} 
        component={LoginScreen}
        options={{title: "Iniciar Sesión"}}
        />

        <Stack.Screen 
        name={screen.account.register} 
        component={RegisterScreen}
        options={{title: "Crea tu Cuenta"}}
        />

       
    </Stack.Navigator>
    )
}
