import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
import Stress from './../../images/Stress.png'
import { Pressable, StyleSheet, Text, ImageBackground } from 'react-native';
import { ZenContext } from '../context/zenMindContext';
import Energie from "./../../images/energiser.png"
import Perso from "./../../images/perso.png"
import Endurance from "./../../images/endurance.png"
import { useEffect } from 'react/cjs/react.development';
const Selectionnable = ({name="Selectionnable",inspi,expi,round,type,destination,apnée})=> {
    let {updateInspirationSauvegarde, updateExpirationSauvegarde,updateApnéeSauvegarde,updatenombreRound,updateTypeDeRespiration} = React.useContext(ZenContext)
    const [image,setImage] = useState(Energie)
    const navigation = useNavigation();
    
    return(
            <Pressable style={styles.square}
            onPress={
                ()=>{
                    if(type===0)
                    {
                        updateInspirationSauvegarde(inspi)
                        updateExpirationSauvegarde(expi)
                        updatenombreRound(round)
                        updateTypeDeRespiration(type)
                        navigation.navigate(destination, {title:name});
                    }
                    else if (type===1 || type===2 || type===3)
                    {
                        updateInspirationSauvegarde(inspi)
                        updateExpirationSauvegarde(expi)
                        updatenombreRound(round)
                        updateApnéeSauvegarde(apnée)
                        updateTypeDeRespiration(type)
                        navigation.navigate(destination,{title:name});
                    }
                    else{
                        navigation.navigate({name});
                    }
                }
            }>
                <ImageBackground style={styles.square} source={name==="Énergie" ? Energie : name==="Personnalisée"?Perso:name==="Récupérer"?Endurance:name==='Gérer son stress'?Stress : Endurance}>
                <   Text style={styles.text}>{name}</Text>
                </ImageBackground>
                
            </Pressable>
    )
}
export default Selectionnable;
const styles  = StyleSheet.create({
    square:{
        height:300,
        width:170,
        backgroundColor:'white',
        marginTop:15,
        marginBottom:15,
        marginHorizontal:'3.5%',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:"center",
        borderRadius:7,
    },
    text:{
        marginBottom:20
    }
})