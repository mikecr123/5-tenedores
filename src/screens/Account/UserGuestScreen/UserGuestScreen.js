import React from 'react'
import { useNavigation} from "@react-navigation/native";
import {screen} from '../../../utils';
import { View, ScrollView } from 'react-native'
import {Text, Button, Image} from "react-native-elements";

import {styles} from "./UserGuestScreen.styles";


export  function UserGuestScreen() {

  const navigation = useNavigation(screen.account.login);

  const goToLogin = () =>{

    navigation.navigate(screen.account.login)
  }
  return (
    <ScrollView  centerContent={true} style={styles.content}>
      <Image source={require("../../../../assets/img/user-guest.png")} style={styles.image} />
      <Text style={styles.title}> Consultar tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        ¿Como describes tu mejor restaurante? Busca y vizualiza los mejores lugares.
      </Text> 
      
      <View>
        <Button 
        title='Ver tu Pefil' 
        onPress={goToLogin} 
        buttonStyle={styles.btnStyle} />
      </View>
    </ScrollView>

   
  )
}