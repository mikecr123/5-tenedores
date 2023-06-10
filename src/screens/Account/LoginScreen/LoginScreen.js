import React from 'react';
import { View ,  ScrollView} from 'react-native';
import { Text, Image} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {styles} from "./LoginScreen.styles";
import { screen} from "../../../utils";
import {LoginForm}  from "../../../components/Auth";


export function LoginScreen() {


  const navigation = useNavigation(screen.account.register);

  const goToRegister=() => {

    navigation.navigate(screen.account.register);

  }
  return (
    <ScrollView>
      <Image source={require("../../../../assets/img/logo.png")} style={styles.image} />

      <View style={styles.content}>
      <LoginForm/>

      <Text style={styles.textRegister}>
      ¿Aún no tienes cuenta? <Text style={styles.btnRegister} onPress={goToRegister}>Registrate</Text>
      </Text>
      </View>
    </ScrollView>
  )
}