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
    let {updateInspirationSauvegarde, updateExpirationSauvegarde,updateApnéeSauvegarde,updatenombreRound,updateTypeDeRespiration,updateInspiration,updateExpiration,updateApnée} = React.useContext(ZenContext)
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
                        updateInspiration(inspi)
                        updateExpiration(expi)
                        navigation.navigate(destination, {title:name});
                    }
                    else if (type===1 || type===2 || type===3)
                    {
                        updateInspirationSauvegarde(inspi)
                        updateExpirationSauvegarde(expi)
                        updatenombreRound(round)
                        updateApnéeSauvegarde(apnée)
                        updateInspiration(inspi)
                        updateExpiration(expi)
                        updateApnée(apnée)
                        updateTypeDeRespiration(type)
                        navigation.navigate(destination,{title:name});
                    }
                    else{
                        navigation.navigate({name});
                    }
                }
            }>
                <ImageBackground style={{width:"100%", height:"100%"}} source={name==="Respirer pour …\ngagner en énergie" ? Energie : name==="Personnaliser vos séances"?Perso:name==="Respirer pour …\nrécupérer"?Endurance:name==='Respirer pour …\ngérer son stress'?Stress : Endurance}>
                    <Text style={styles.text}>{name}</Text>
                </ImageBackground>
            </Pressable>
    )
}
export default Selectionnable;
const styles  = StyleSheet.create({
    square:{
        height:300,
        width:"40%",
        backgroundColor:'white',
        marginTop:15,
        marginBottom:15,
        marginHorizontal:'5%',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:"center",
        borderRadius:7,
    },
    text:{
        marginTop:20,
        color:'white',
        textAlign:'center'
    }
})