import { View } from 'react-native';
import React, {useState} from 'react';
import {InfoUser } from "../../../components/Account";
import { styles} from "./UserLoggedScreen.styles";
import {Button} from "react-native-elements";
import {getAuth, signOut} from "firebase/auth";
import { LoadingModal} from "../../../components";



export  function UserLoggedScreen() {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const logout = async() =>{

    const auth = getAuth ();
    await signOut(auth);


  }
  return (
    <View style={styles.content}>
      <InfoUser setloading={setLoading} setloadingText={setLoadingText} />

      <Button title="Cerrar Sesion" 
      buttonStyle={styles.btnStyle} 
      titleStyle={styles.btnTextStyle}
      onPress={logout} />

      <LoadingModal show={loading} text={loadingText} />
    </View>
  )
}