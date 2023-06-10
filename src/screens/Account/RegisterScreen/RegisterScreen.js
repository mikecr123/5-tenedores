import React from 'react'
import { View } from 'react-native'
import { Image} from "react-native-elements";
import { styles} from "./RegisterScreen.style";
import {RegisterForm} from "../../../components/Auth";
import { KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"


export  function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../../assets/img/logo.png")} style={styles.image} />
      
      <View style={styles.content}>
        <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>

    
  )
}