import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
import Stress from './../../images/Stress.jpg'
import { Pressable, StyleSheet, Text, ImageBackground } from 'react-native';
import { ZenContext } from '../context/zenMindContext';
import Energie from "./../../images/energiser.jpg"
import Perso from "./../../images/perso.jpg"
import Endurance from "./../../images/endurance.jpg"
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
                    console.log('rounds')
                    console.log(round)
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
                    console.log(name)
                    updatenombreRound(round)
                    navigation.navigate({destination});
                }
            }
        }>
            <ImageBackground style={{width:"100%", height:"100%"}} source={name==="Respirer pour …\ngagner en énergie" ? Energie : name==="Personnaliser vos séances"?Perso:name==="Respirer pour …\nrécupérer"?Endurance:name==='Respirer pour …\ngérer son stress'?Stress : Endurance}>
                <Text style={styles.text}>{name}</Text>
                {name!= "Personnaliser vos séances" && <Text style={styles.time}>{Math.trunc(type === 0 ?((inspi+expi+apnée)*round)/60: type=== 3 ?((inspi+expi+(apnée*2))*round)/60:((inspi+expi+apnée)*round)/60)} min</Text>}
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
        color:'black',
        textAlign:'center',
    },
    time:{
        position:'absolute',
        color:'white',
        bottom:20,
        textAlign:'center',
        width:'100%'
    }
})