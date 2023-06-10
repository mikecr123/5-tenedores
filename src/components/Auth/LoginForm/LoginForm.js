import React, { useState}  from 'react'
import { View } from 'react-native'
import { Input, Icon, Button}  from "react-native-elements"; 
import { useFormik} from "formik";
import  Toast   from 'react-native-toast-message';
import {styles} from  "./LoginForm.styles";
import {useNavigation}  from "@react-navigation/native";
import { screen} from "../../../utils";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import {initialValues, validationSchema} from "./LoginForm.data";


export  function LoginForm() {
  const [showPassword, setShowPassword]= useState(false) ;
  const showHidenPassword = () => setShowPassword ((prevState) => !prevState);

  const navigation = useNavigation();

  const formik = useFormik({

    initialValues: initialValues(),
    validationSchema:validationSchema (),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
         const auth = getAuth();
         await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
         );
         navigation.navigate(screen.account.account);
        
      } catch (error) {

        Toast.show({

          type: "error",
          position: "bottom",
          text1:"Error ingresar",

        })
        
      }
    },

});

  return (
    <View style={styles.content}>
      <Input placeholder='Correo Electronico' 
      containerStyle={styles.input} 
      rightIcon={<Icon type='material-community'  
      name="at" 
      iconStyle={styles.icon}/> } 
      onChangeText={(text)=> formik.setFieldValue("email", text)}
      errorMessage={formik.errors.email}
      />
      <Input 
      placeholder='Contraseña' 
      secureTextEntry={showPassword ? false: true} 
      containerStyle={styles.input}  
      rightIcon={<Icon 
        type='material-community'  
        name={showPassword ? "eye-off-outline": "eye-outline"} 
        iconStyle={styles.icon}
        onPress={showHidenPassword} />}
         onChangeText={(text)=> formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
      <Button 
      title="Iniciar Sesión" 
      containerStyle={styles.btnContainer} 
      buttonStyle={styles.btn} 
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
      />
    </View>
  )
}