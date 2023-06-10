import React, { useEffect, useState} from "react";

import {getAuth, onAuthStateChanged} from "firebase/auth";
import {UserGuestScreen} from  "./UserGuestScreen";
import {UserLoggedScreen} from "./UserLoggedScreen";
import { LoadingModal} from "../../components"; 


export  function AccountScreen(){

    const [hasLogged, setHasLogged]= useState(null);

    useEffect(()=>{

        const auth =getAuth();
        onAuthStateChanged(auth, (user)=>{
          setHasLogged(user ? true:false);
        })

    }, [] );

    if (hasLogged===null){
        return  <LoadingModal show text="Cargando"/>
    }
    return hasLogged ? <UserLoggedScreen/>: <UserGuestScreen/>

}