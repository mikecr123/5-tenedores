import React from 'react';
import { View  } from 'react-native';
import {styles} from "./InfoUser.styles";
import { Avatar , Text} from 'react-native-elements';
import { getAuth } from  "firebase/auth";
import *  as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes} from "firebase/storage";


export  function InfoUser(props) {
  const { setLoading, setLoadingText} = props;
  const { uid, photoURL, displayName, email}= getAuth().currentUser;

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],

      });

      if (!result.canceled) uploadImage(result.assets[0].uri);

     };

    const uploadImage = async (uri) => {
      setLoadingText("Actulizando Avatar");
      setLoading(true);


      const response = await fetch(uri);
      const blob = await response.blob();

      const storage = getStorage();
      const storageRef = ref(storage,`avatar/${uid}` );

      uploadBytes(storageRef, blob).then((snapshot)=> {
        updatePhotoUrl(snapshot.metadata.fullPath);
       
      });



    };


    const updatePhotoUrl = (imagePath) =>{
      console.log(imagePath);
      setLoading(false);
    };
  return (
    <View style={styles.content}>
      <Avatar size="large" 
      rounded icon={{type: "material", name: "person"}}  
      containerStyle={styles.avatar}
    source={{uri:photoURL}}>
        <Avatar.Accessory size={24} onPress={changeAvatar} />

      </Avatar>
        <View>
            <Text style={styles.displayName}>{displayName || "Anónimo"} </Text>
            <Text>{email}</Text>
        </View>
    </View>
  )
}